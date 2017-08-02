import { Component } from '@stencil/core';


@Component({
  tag: 'routes-page',
  styleUrl: 'routes-page.scss'
})
export class RoutesPage {

  render() {
    return [
      <stencil-router id="router">
        <stencil-route url="/" router="#router" component="main-page" />
        <stencil-route url='/news' router='#router' component='list-page'/>
      </stencil-router>
    ];
  }
}