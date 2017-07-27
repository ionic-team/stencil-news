import { Component, Prop, Element } from '@stencil/core';


@Component({
  tag: 'app-toast',
  styleUrl: 'app-toast.scss'
})
export class AppToast {
  
  @Prop() open: boolean;
  @Element() el: HTMLElement;

  ionViewWillUpdate() {
    console.log(this.open);

    if (this.open === false) {
      this.el.className = '';
    } else {
      this.el.className = 'open';
      console.log('opening', this.el.classList);

      /*setTimeout(() => {
        (this as any).$el.className = '';
      }, 1000);*/
    }
  }

  render() {
    return (
      <div>
        <slot></slot>
      </div>
    )
  }
}