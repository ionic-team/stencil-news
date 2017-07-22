import { Component, h, Prop } from '@stencil/core';


@Component({
  tag: 'share-button',
  styleUrl: 'share-button.scss'
})
export class ShareButton {

  @Prop() urlToShare: string;

  share() {
    if ((navigator as any).share !== undefined) {
      (navigator as any).share({
        title: 'News story',
        text: "Check out this cool story!",
        url: this.urlToShare
      }).then(() => console.log('Successful share'))
        .catch(error => console.log('Error sharing:', error));
    } else {
      window.open(`http://twitter.com/share?text=Check out this cool story!&url=${this.urlToShare}`)
    }
  }

  render() {
    return (
      <button onClick={() => this.share()}>
        <slot></slot>
      </button>
    );
  }
}