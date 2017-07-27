import { Component, State } from '@stencil/core';

declare var idbKeyval: any;

@Component({
  tag: 'main-page',
  styleUrl: 'main-page.scss'
})
export class MainPage {

  @State() articleSrc: string;
  @State() offlineItems: any[] = [];

  ionViewWillLoad() {
    setTimeout(() => {
      idbKeyval.get('offlineArticles').then((data) => {
        if (data !== undefined) {
          this.offlineItems = data;
        }
      });
    }, 100)
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

  open(url: string) {
    window.open(url);
  }

  render() {
    console.log('render', this.offlineItems);
    if (this.offlineItems.length > 0) {
      const offlineArticles = this.offlineItems.map((article) => {
        return (
          <div id="topCard">
            <h3>{article.title}</h3>
            <p id="desc">{article.description}</p>
            <div id="actions">
              <button id="readButton" onClick={() => this.open(article.url)}>Read</button>
            </div>
          </div>
        )
      });
      return [

        <main class='content'>

          <h3 id='topStories'>Top Story</h3>

          <div id="topCard">
            <h3>Scientists are now using Wi-Fi to read human emotions</h3>
            <p id="desc">Scientists at MIT are using Wi-Fi and AI to determine your emotional state. They've created an algorithm that can detect and measure individual heartbeats by bouncing RF signals off ...</p>
            <div id="actions">
              <button id="readButton" onClick={() => this.open('https://thenextweb.com/artificial-intelligence/2017/07/22/scientists-create-ai-that-uses-wi-fi-to-see-emotions/#.tnw_LXnzsXrt')}>Read</button>
            </div>
          </div>

          <h3 class='newsProviders'>More News</h3>

          <div id='loadBlock'>
            {/*<button class='loadButton' onClick={() => this.fetchNews('the-next-web')}>The Next Web</button>
            <button class='loadButton' onClick={() => this.fetchNews('the-verge')}>The Verge</button>
            <button class='loadButton' onClick={() => this.fetchNews('engadget')}>Engadget</button>*/}
            <stencil-route-link router="#router" url="/news" custom={true}>
              <button>News</button>
            </stencil-route-link>
          </div>

          <div class='loginBlock'>
            <app-login></app-login>
          </div>

          <h3 class='newsProviders'>Offline Articles</h3>

          <div id='savedBlock'>
            {offlineArticles}
          </div>
        </main>
      ];
    } else if (this.offlineItems.length === 0) {
      return [

        <main class='content'>

          <h3 id='topStories'>Top Story</h3>

          <div id="topCard">
            <h3>Scientists are now using Wi-Fi to read human emotions</h3>
            <p id="desc">Scientists at MIT are using Wi-Fi and AI to determine your emotional state. They've created an algorithm that can detect and measure individual heartbeats by bouncing RF signals off ...</p>
            <div id="actions">
              <button id="readButton" onClick={() => this.open('https://thenextweb.com/artificial-intelligence/2017/07/22/scientists-create-ai-that-uses-wi-fi-to-see-emotions/#.tnw_LXnzsXrt')}>Read</button>
            </div>
          </div>

          <h3 class='newsProviders'>More News</h3>

          <div id='loadBlock'>
            {/*<button class='loadButton' onClick={() => this.fetchNews('the-next-web')}>The Next Web</button>
            <button class='loadButton' onClick={() => this.fetchNews('the-verge')}>The Verge</button>
            <button class='loadButton' onClick={() => this.fetchNews('engadget')}>Engadget</button>*/}
            <stencil-route-link router="#router" url="/news" custom={true}>
              <button>News</button>
            </stencil-route-link>
          </div>

          <div class='loginBlock'>
            <app-login></app-login>
          </div>

          <h3 class='newsProviders'>Offline Articles</h3>

          <div id='savedBlock'>
            <p id='noSaved'>Save some articles for offline reading!</p>
          </div>
        </main>
      ]
    }
  }
}