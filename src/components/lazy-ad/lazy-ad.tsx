import { Component, h, Prop, State } from '@stencil/core';


@Component({
  tag: 'lazy-ad',
  styleUrl: 'lazy-ad.scss'
})
export class LazyAd {

  @Prop() src: string;
  @State() _io: any;
  @State() _iframeCreated: boolean;
  @State() _iframe: any;

  ionViewWillLoad() {
    setTimeout(() => {
      if ('IntersectionObserver' in window) {
        if ('requestIdleCallback' in window) {
          (window as any).requestIdleCallback(() => {
            this.createIframe();

            this._io = new IntersectionObserver((data) => {
              if (data[0].intersectionRatio > 0.011) {
                this._iframe.src = this.src;
                this._io.unobserve((this as any).$el);
                this.removeIntersectionObserver();
              }
            });

            this._io.observe((this as any).$el);
          })
        } else {
          setTimeout(() => {
            this.createIframe();

            this._io = new IntersectionObserver((data) => {
              if (data[0].intersectionRatio > 0.011) {
                this._iframe.src = this.src;
                this._io.unobserve((this as any).$el);
                this.removeIntersectionObserver();
              }
            });

            this._io.observe((this as any).$el);
          }, 500);
        }
      } else {
        // IntersectionObserver is not available, so just create the iframe
        // and load in the ad after a little delay
        window.setTimeout(() => {
          this.createIframe();
          this._iframe.src = this.src;
        }, 500);
      }
    }, 3000);

  }

  removeIntersectionObserver() {
    if (this._io) {
      this._io.disconnect();
      this._io = null;
    }
  }

  createIframe(): any {
    this._iframe = document.createElement('iframe');
    (this as any).$el.querySelector('div').appendChild(this._iframe);
    this._iframeCreated = true;
  }

  render() {
    return (
      <div>
      </div>
    );
  }
}