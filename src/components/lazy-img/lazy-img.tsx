import { Component, Element, Prop, State } from '@stencil/core';


@Component({
  tag: 'lazy-img',
  styleUrl: 'lazy-img.scss'
})
export class LazyImg {
  
  @Element() el: HTMLElement;
  @Prop() src: string;
  @Prop() alt: string;
  @State() io: any;
  @State() oldSrc: string;

  ionViewDidLoad() {
    this.addIntersectionObserver();
  }

  ionViewWillUpdate() {
    if (this.oldSrc && this.src !== this.oldSrc) {
      this.addIntersectionObserver();      
    }
    this.oldSrc = this.src;
  }

  addIntersectionObserver() {
    if ('IntersectionObserver' in window && this.src !== null) {
      this.io = new IntersectionObserver((data) => {
        if (data[0].intersectionRatio > 0.011) {
          console.log('load');
          const image: HTMLImageElement = this.el.querySelector('img');
          image.setAttribute('src', image.getAttribute('data-src'));
          image.onload = () => {
            image.removeAttribute('data-src');
          };
         this.removeIntersectionObserver();
        }
      })

      this.io.observe(this.el.querySelector('img'));
    }
  }

  removeIntersectionObserver() {
    if (this.io) {
      this.io.disconnect();
      this.io = null;
    }
  }

  render() {
    return (
      <img data-src={this.src} alt={this.alt}></img>
    );
  }
}