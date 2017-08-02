/*! Built with http://stenciljs.com */

(function (window, document, appNamespace, appCore, appCoreEs5, components, x) {
    'use strict';
    // create global namespace if it doesn't already exist

    (window[appNamespace] = window[appNamespace] || {}).components = components = components || [];
    // auto hide components until they been fully hydrated
    // reusing the "x" variable from the args for funzies
    x = document.createElement('style');
    x.innerHTML = (components.map(function (c) {
        return c[0];
    }).join(',') + '{visibility:hidden}.💎{visibility:inherit}').toLowerCase();
    x.innerHTML += 'ion-app:not(.💎){display:none}';
    document.head.appendChild(x);
    // request the core file this browser needs
    x = document.createElement('script');
    x.src = window.customElements ? appCore : appCoreEs5;
    document.head.appendChild(x);
})(window, document, "App","build/app/app.core.js","build/app/app.core.ce.js",[["APP-HEADER","app-header.app-login.main-page.routes-page.stencil",{"$":"app-header.app-login.main-page.routes-page.stencil"}],["APP-LIST","app-list.lazy-ad.lazy-img.list-page.share-button",{"$":"app-list.lazy-ad.lazy-img.list-page.share-button"},0,[["articles"]]],["APP-LOGIN","app-header.app-login.main-page.routes-page.stencil",{"$":"app-header.app-login.main-page.routes-page.stencil"},0,0,[["e","m",true,true,true],["e","p",true,true,true]]],["APP-TOAST","app-toast",{"$":"app-toast"},1,[["open",0,1]]],["LAZY-AD","app-list.lazy-ad.lazy-img.list-page.share-button",{"$":"app-list.lazy-ad.lazy-img.list-page.share-button"},0,[["src"]]],["LAZY-IMG","app-list.lazy-ad.lazy-img.list-page.share-button",{"$":"app-list.lazy-ad.lazy-img.list-page.share-button"},0,[["alt"],["src"]]],["LIST-PAGE","app-list.lazy-ad.lazy-img.list-page.share-button",{"$":"app-list.lazy-ad.lazy-img.list-page.share-button"}],["MAIN-PAGE","app-header.app-login.main-page.routes-page.stencil",{"$":"app-header.app-login.main-page.routes-page.stencil"}],["ROUTES-PAGE","app-header.app-login.main-page.routes-page.stencil",{"$":"app-header.app-login.main-page.routes-page.stencil"}],["SHARE-BUTTON","app-list.lazy-ad.lazy-img.list-page.share-button",{"$":"app-list.lazy-ad.lazy-img.list-page.share-button"},1,[["urlToShare"]]],["STENCIL-ROUTE","app-header.app-login.main-page.routes-page.stencil",{"$":"app-header.app-login.main-page.routes-page.stencil"},0,[["component"],["componentProps"],["exact",0,1],["router"],["url"]],[["a","m",true,true,true],["o","r",true,true,true]]],["STENCIL-ROUTE-LINK","app-header.app-login.main-page.routes-page.stencil",{"$":"app-header.app-login.main-page.routes-page.stencil"},1,[["custom",0,1],["router"],["url"]]],["STENCIL-ROUTER","app-header.app-login.main-page.routes-page.stencil",{"$":"app-header.app-login.main-page.routes-page.stencil"},1,[["root"]],[["o","r",true,true,true]]]]);