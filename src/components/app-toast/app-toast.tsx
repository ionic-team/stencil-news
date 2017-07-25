import { Component, h, Prop } from '@stencil/core';


@Component({
  tag: 'app-toast',
  styleUrl: 'app-toast.scss'
})
export class AppToast {

  @Prop() open: boolean;

  ionViewWillUpdate() {
    console.log(this.open);

    if (this.open === false) {
      (this as any).$el.className = '';
    } else {
      (this as any).$el.className = 'open';
      console.log('opening', (this as any).$el.classList);

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