import { Component, Prop } from '@stencil/core';


@Component({
  tag: 'app-detail',
  styleUrl: 'app-detail.scss'
})
export class AppDetail {

  @Prop() detail: any;

  open(url) {
    window.open(url);
  }

  close() {
    document.querySelector('#detailOverlay').className = '';
  }

  render() {
    return (
      <div>
        <button id='closeButton' onClick={() => this.close()}>Close</button>

        <img src={this.detail.urlToImage} alt={this.detail.title}></img>

        <h2>{this.detail.title}</h2>
        <p>By {this.detail.author}</p>

        <p>{this.detail.description}</p>

        <button id='detailRead' onClick={() => this.open(this.detail.url)}>Read</button>
      </div>
    );
  }
}