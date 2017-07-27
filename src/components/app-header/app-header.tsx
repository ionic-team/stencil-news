import { Component } from '@stencil/core';


@Component({
  tag: 'app-header',
  styleUrl: 'app-header.scss'
})
export class AppHeader {

  render() {
    return (
      <header>
        StencilNews
      </header>
    );
  }
}