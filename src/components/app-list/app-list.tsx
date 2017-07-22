import { Component, h, Prop, State } from '@stencil/core';


@Component({
  tag: 'app-list',
  styleUrl: 'app-list.scss'
})
export class AppList {

  @Prop() articles: any[];
  @State() detail: any = null;

  open(url) {
    window.open(url);
  }

  details(article) {
    this.detail = article;

    setTimeout(() => {
      document.querySelector('#detailOverlay').className = 'open';
    }, 100);
  }

  close() {
    document.querySelector('#detailOverlay').className = '';
    this.detail = null;
  }

  render() {
    console.log('render');
    if (!this.detail && this.articles) {

      const items = this.articles.map((article, id) => {
        if (article.urlToImage.indexOf('https') > -1) {
          return (
            <li class={id.toString()}>
              <lazy-img src={article.urlToImage} alt={article.title}></lazy-img>

              <div id='card-content'>
                <h3>{article.title}</h3>
                <p id='desc'>{article.description}</p>

                <div id='actions'>
                  <button id='readButton' onClick={() => this.details(article)}>
                    Details
              </button>
                  <button onClick={() => this.open(article.url)} id='readButton'>
                    Read
              </button>
                  <share-button urlToShare={article.url}>
                    Share
                  </share-button>
                </div>
              </div>
            </li>
          )
        }
      })
      return [
        <ul>
          {items}
        </ul>,

        {/*<lazy-ad src='ads/ad.html'></lazy-ad>*/}
      ];
    }
    else if (this.detail) {
      return [
        <div id='detailOverlay'>
          <button id='closeButton' onClick={() => this.close()}>Close</button>

          <img data-original={this.detail.urlToImage} alt={this.detail.title}></img>

          <h2>{this.detail.title}</h2>
          <p>By {this.detail.author}</p>

          <p>{this.detail.description}</p>

          <button id='detailRead' onClick={() => this.open(this.detail.url)}>Read</button>

          <share-button urlToShare={this.detail.url} id='shareButton'>
            Share
          </share-button>
        </div>
      ]
    }
  }
}