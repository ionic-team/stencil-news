import { Component, Prop, State } from '@stencil/core';

declare var idbKeyval: any;

@Component({
  tag: 'app-list',
  styleUrl: 'app-list.scss'
})
export class AppList {

  @Prop() articles: any[];
  @State() detail: any = null;
  @State() saved: boolean = false;

  open(url: string) {
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

  save(article) {
    idbKeyval.get('offlineArticles').then((value) => {
      if (value === undefined) {
        const articles = [];
        articles.push(article);
        idbKeyval.set('offlineArticles', articles).then(() => {
          console.log('article saved');
          this.saved = true;
          setTimeout(() => {
            this.saved = false;
          }, 2000);
        })
      } else {
        value.push(article);
        idbKeyval.set('offlineArticles', value).then(() => {
          console.log('article saved');
          this.saved = true;
          setTimeout(() => {
            this.saved = false;
          }, 2000);
        })
      }
    })
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
                  <button class='readButton' onClick={() => this.save(article)}>
                    Save
                  </button>
                  <button class='readButton' onClick={() => this.details(article)}>
                    Details
              </button>
                  <button onClick={() => this.open(article.url)} class='readButton'>
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

        <app-toast open={this.saved}>
          Article saved offline
        </app-toast>,

        <lazy-ad src='ads/ad.html'></lazy-ad>
      ];
    }
    else if (this.detail) {
      return [
        <div id='detailOverlay'>
          <button id='closeButton' onClick={() => this.close()}>Close</button>

          <img src={this.detail.urlToImage} alt={this.detail.title}></img>

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