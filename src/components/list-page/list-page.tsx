import { Component, State } from '@stencil/core';


@Component({
  tag: 'list-page',
  styleUrl: 'list-page.scss'
})
export class ListPage {

  @State() articleSrc: string;
  @State() sources: any[];

  ionViewWillLoad() {
    this.fetchNews('the-next-web');
  }

  fakeFetch(url: string): Promise<any> {
    return new Promise((resolve, reject) => {
      const request = new XMLHttpRequest();

      request.addEventListener('load', function () {
        resolve(JSON.parse(this.response));
      });

      request.addEventListener('error', function () {
        reject(`error: ${this.statusText} / ${this.status}`);
      });

      request.open('GET', url, true);
      request.send();
    });
  }

  fetchNews(src: string) {
    console.log(src);
    console.log(this.articleSrc);
    if (src.replace(/-/g, " ") !== this.articleSrc) {
      console.log('in here');
      this.articleSrc = src.replace(/-/g, " ");
      console.log('fetching');
      this.fakeFetch(`https://newsapi.org/v1/articles?source=${src}&apiKey=3f03728668574e6794634e6244b18091`).then((data: any) => {
        console.log(data.articles);
        this.sources = data.articles;
      })
    }
  }

  render() {
    return [
      <div id='sidebar'>
        <h3>Menu</h3>
        <button onClick={() => this.fetchNews('the-next-web')}>Next Web</button>
        <button onClick={() => this.fetchNews('engadget')}>Engadget</button>
        <button onClick={() => this.fetchNews('the-verge')}>The Verge</button>
      </div>,

      <h2>Top stories from {this.articleSrc}</h2>,

      <app-list articles={this.sources}>
      </app-list>,

      <div id='tabs'>
        <button onClick={() => this.fetchNews('the-next-web')}>Next Web</button>
        <button onClick={() => this.fetchNews('engadget')}>Engadget</button>
        <button onClick={() => this.fetchNews('the-verge')}>The Verge</button>
      </div>
    ];
  }
}