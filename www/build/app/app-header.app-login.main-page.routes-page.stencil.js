/*! Built with http://stenciljs.com */

App.defineComponents(

/**** module id (dev mode) ****/
'app-header.app-login.main-page.routes-page.stencil',

/**** component modules ****/
function importComponent(exports, h, t, Core, publicPath) {
var AppHeader = (function () {
    function AppHeader() {
    }
    AppHeader.prototype.render = function () {
        return (h("header", 0, t("StencilNews")));
    };
    return AppHeader;
}());

var AppLogin = (function () {
    function AppLogin() {
    }
    AppLogin.prototype["componentDidLoad"] = function () {
        var _this = this;
        setTimeout(function () {
            _this.messaging = firebase.messaging();
        }, 300);
    };
    AppLogin.prototype.requestPerm = function () {
        var _this = this;
        // request permission
        this.messaging.requestPermission()
            .then(function () {
            console.log('Notification permission granted.');
            _this.permission = true;
            // get token
            /*this.messaging.getToken()
              .then((currentToken) => {
                if (currentToken) {
                  console.log(currentToken);
    
                  // trigger a notification
                  fetch('https://us-central1-stencilnews.cloudfunctions.net/notify', {
                    method: 'post',
                    body: JSON.stringify({
                      token: currentToken
                    })
                  }).then((data) => {
                    console.log(data);
                  }).catch((err) => {
                    console.error(err);
                  })
    
                } else {
                  // Show permission request.
                  console.log('No Instance ID token available. Request permission to generate one.');
                }
              })
              .catch((err) => {
                console.log('An error occurred while retrieving token. ', err);
              });*/
        })
            .catch(function (err) {
            _this.permission = false;
            console.log('Unable to get permission to notify.', err);
        });
    };
    AppLogin.prototype.render = function () {
        var _this = this;
        if (this.permission === false || this.permission === undefined) {
            return (h("div", { "c": { "notifyBlock": true } },
                h("p", 0, t("Get notified on the latest top stories")),
                h("button", { "c": { "requestButton": true }, "o": { "click": function () { return _this.requestPerm(); } } }, t("Get Notifications"))));
        }
        else {
            return (h("div", { "c": { "notifyBlock": true } },
                h("p", 0, t("Stop getting notifications")),
                h("button", 0, t("Unsubscribe"))));
        }
    };
    return AppLogin;
}());

var MainPage = (function () {
    function MainPage() {
        this.offlineItems = [];
    }
    MainPage.prototype["componentWillLoad"] = function () {
        var _this = this;
        setTimeout(function () {
            idbKeyval.get('offlineArticles').then(function (data) {
                if (data !== undefined) {
                    _this.offlineItems = data;
                }
            });
        }, 100);
    };
    MainPage.prototype.fakeFetch = function (url) {
        return new Promise(function (resolve, reject) {
            var request = new XMLHttpRequest();
            request.addEventListener('load', function () {
                resolve(JSON.parse(this.response));
            });
            request.addEventListener('error', function () {
                reject("error: " + this.statusText + " / " + this.status);
            });
            request.open('GET', url, true);
            request.send();
        });
    };
    MainPage.prototype.open = function (url) {
        window.open(url);
    };
    MainPage.prototype.render = function () {
        var _this = this;
        console.log('render', this.offlineItems);
        if (this.offlineItems.length > 0) {
            var offlineArticles = this.offlineItems.map(function (article) {
                return (h("div", { "a": { "id": "topCard" } },
                    h("h3", 0, article.title),
                    h("p", { "a": { "id": "desc" } }, article.description),
                    h("div", { "a": { "id": "actions" } },
                        h("button", { "o": { "click": function () { return _this.open(article.url); } }, "a": { "id": "readButton" } }, t("Read")))));
            });
            return [
                h("main", { "c": { "content": true } },
                    h("h3", { "a": { "id": 'topStories' } }, t("Top Story")),
                    h("div", { "a": { "id": "topCard" } },
                        h("h3", 0, t("Scientists are now using Wi-Fi to read human emotions")),
                        h("p", { "a": { "id": "desc" } }, t("Scientists at MIT are using Wi-Fi and AI to determine your emotional state. They've created an algorithm that can detect and measure individual heartbeats by bouncing RF signals off ...")),
                        h("div", { "a": { "id": "actions" } },
                            h("button", { "o": { "click": function () { return _this.open('https://thenextweb.com/artificial-intelligence/2017/07/22/scientists-create-ai-that-uses-wi-fi-to-see-emotions/#.tnw_LXnzsXrt'); } }, "a": { "id": "readButton" } }, t("Read")))),
                    h("h3", { "c": { "newsProviders": true } }, t("More News")),
                    h("div", { "a": { "id": 'loadBlock' } },
                        h("stencil-route-link", { "a": { "router": "#router", "url": "/news" }, "p": { "custom": true } },
                            h("button", 0, t("News")))),
                    h("div", { "c": { "loginBlock": true } },
                        h("app-login", 0)),
                    h("h3", { "c": { "newsProviders": true } }, t("Offline Articles")),
                    h("div", { "a": { "id": 'savedBlock' } }, offlineArticles))
            ];
        }
        else if (this.offlineItems.length === 0) {
            return [
                h("main", { "c": { "content": true } },
                    h("h3", { "a": { "id": 'topStories' } }, t("Top Story")),
                    h("div", { "a": { "id": "topCard" } },
                        h("h3", 0, t("Scientists are now using Wi-Fi to read human emotions")),
                        h("p", { "a": { "id": "desc" } }, t("Scientists at MIT are using Wi-Fi and AI to determine your emotional state. They've created an algorithm that can detect and measure individual heartbeats by bouncing RF signals off ...")),
                        h("div", { "a": { "id": "actions" } },
                            h("button", { "o": { "click": function () { return _this.open('https://thenextweb.com/artificial-intelligence/2017/07/22/scientists-create-ai-that-uses-wi-fi-to-see-emotions/#.tnw_LXnzsXrt'); } }, "a": { "id": "readButton" } }, t("Read")))),
                    h("h3", { "c": { "newsProviders": true } }, t("More News")),
                    h("div", { "a": { "id": 'loadBlock' } },
                        h("stencil-route-link", { "a": { "router": "#router", "url": "/news" }, "p": { "custom": true } },
                            h("button", 0, t("News")))),
                    h("div", { "c": { "loginBlock": true } },
                        h("app-login", 0)),
                    h("h3", { "c": { "newsProviders": true } }, t("Offline Articles")),
                    h("div", { "a": { "id": 'savedBlock' } },
                        h("p", { "a": { "id": 'noSaved' } }, t("Save some articles for offline reading!"))))
            ];
        }
    };
    return MainPage;
}());

var RoutesPage = (function () {
    function RoutesPage() {
    }
    RoutesPage.prototype.render = function () {
        return [
            h("app-header", 0),
            h("stencil-router", { "a": { "id": "router" } },
                h("stencil-route", { "a": { "url": "/", "router": "#router", "component": "main-page" } }),
                h("stencil-route", { "a": { "url": '/news', "router": '#router', "component": 'list-page' } }))
        ];
    };
    return RoutesPage;
}());

var Route = (function () {
    function Route() {
        this.componentProps = {};
        this.exact = false;
        //@Prop() match: any;
        this.match = {};
    }
    Route.prototype.componentWillLoad = function () {
        var _this = this;
        setTimeout(function () {
            console.log(document.querySelector(_this.router));
            var routerElement = document.querySelector(_this.router);
            if (routerElement) {
                setTimeout(function () {
                    console.log(routerElement);
                    _this.routerInstance = routerElement;
                });
            }
            routerElement.addEventListener('stencilRouterLoaded', function (e) {
                console.log('got fired');
                // this.routerInstance = this.el
                // this.routerInstance = routerElement.$instance;
            });
            routerElement.addEventListener('stencilRouterNavigation', function (e) {
                console.log('i got fired', e);
                //console.log(`<stencil-route> for ${this.path} got nav event`, e.detail);
                _this.match = e.detail;
            });
        });
        /*const routerElement = document.querySelector(this.router)
        console.log(routerElement);*/
    };
    Route.prototype.render = function () {
        if (!this.routerInstance) {
            return null;
        }
        //console.log(`<stencil-route> for ${this.path} rendering`);
        this.match.url = this.routerInstance.match().url;
        var match = this.match;
        var ChildComponent = this.component;
        console.log('this.component', this.component);
        // Check if this route is in the matching URL (for example, a parent route)
        // const isInPath = this.match.url.indexOf(this.url) == 0;
        // const matches = this.exact ? match.url == this.url : isInPath;
        var matches = match.url === this.url;
        console.log('is exact', this.exact);
        console.log('match.url', match.url);
        console.log('this.url', this.url);
        console.log("\tDoes " + match.url + " match our path " + this.url + "?", matches);
        if (matches) {
            console.log('childComponent', ChildComponent);
            console.log("  <ion-route> Rendering route " + this.url, this.router, match);
            return (h(ChildComponent, { "p": this.componentProps }));
        }
        else {
            return h("span", 0);
        }
    };
    return Route;
}());

var RouteLink = (function () {
    function RouteLink() {
        this.custom = false;
    }
    RouteLink.prototype.handleClick = function (e) {
        console.log('Route link click', e);
        var router = document.querySelector(this.router);
        if (!router) {
            console.warn('<stencil-route-link> wasn\'t passed an instance of the router as the "router" prop!');
            return;
        }
        router.navigateTo(this.url);
        //Uncomment once https://github.com/ionic-team/stencil/issues/58 is fixed
        //e.preventDefault();
    };
    RouteLink.prototype.render = function () {
        if (this.custom) {
            return (h("span", { "o": { "click": this.handleClick.bind(this) } },
                h(0, 0)));
        }
        else {
            return (h("a", { "o": { "click": this.handleClick.bind(this) } },
                h(0, 0)));
        }
    };
    return RouteLink;
}());

var Router = (function () {
    function Router() {
        this.root = '/';
        this.routeMatch = {};
    }
    Router.prototype.match = function () {
        return this.routeMatch;
    };
    Router.prototype.navigateTo = function (url, data) {
        if (data === void 0) { data = {}; }
        console.log('navigateTo', url, data);
        window.history.pushState(null, null, url || '/');
        this.routeMatch = {
            url: url
        };
        console.log('\n<stencil-router> dispatching event', this.routeMatch);
        this.el.dispatchEvent(new window.CustomEvent('stencilRouterNavigation', { detail: this.routeMatch }));
    };
    Router.prototype.componentWillLoad = function () {
        console.log('<stencil-router> loaded');
        window.addEventListener('popstate', this.handlePopState.bind(this));
        window.addEventListener('hashchange', this.handleHashChange.bind(this));
        var initialPath = window.location.pathname;
        //const withoutBase = '';
        var withoutBase = initialPath.replace(this.root, '');
        this.routeMatch = {
            url: "/" + withoutBase
        };
    };
    Router.prototype.componentDidLoad = function () {
        this.el.dispatchEvent(new window.CustomEvent('stencilRouterLoaded'));
    };
    Router.prototype.handlePopState = function (e) {
        console.log('Pop state', e);
    };
    Router.prototype.handleHashChange = function (e) {
        console.log('Hash change', e);
    };
    Router.prototype.render = function () {
        return (h(0, 0));
    };
    return Router;
}());

exports['APP-HEADER'] = AppHeader;
exports['APP-LOGIN'] = AppLogin;
exports['MAIN-PAGE'] = MainPage;
exports['ROUTES-PAGE'] = RoutesPage;
exports['STENCIL-ROUTE'] = Route;
exports['STENCIL-ROUTE-LINK'] = RouteLink;
exports['STENCIL-ROUTER'] = Router;
},


/***************** app-header *****************/
[
/** app-header: [0] tag **/
'APP-HEADER',

/** app-header: [1] host **/
{}

],

/***************** app-login *****************/
[
/** app-login: [0] tag **/
'APP-LOGIN',

/** app-login: [1] host **/
{},

/** app-login: [2] listeners **/
0 /* no listeners */,

/** app-login: [3] states **/
['messaging', 'permission']

],

/***************** main-page *****************/
[
/** main-page: [0] tag **/
'MAIN-PAGE',

/** main-page: [1] host **/
{},

/** main-page: [2] listeners **/
0 /* no listeners */,

/** main-page: [3] states **/
['articleSrc', 'offlineItems']

],

/***************** routes-page *****************/
[
/** routes-page: [0] tag **/
'ROUTES-PAGE',

/** routes-page: [1] host **/
{}

],

/***************** stencil-route *****************/
[
/** stencil-route: [0] tag **/
'STENCIL-ROUTE',

/** stencil-route: [1] host **/
{},

/** stencil-route: [2] listeners **/
0 /* no listeners */,

/** stencil-route: [3] states **/
['match', 'routerInstance'],

/** stencil-route: [4] propWillChanges **/
0 /* no prop will change methods */,

/** stencil-route: [5] propDidChanges **/
0 /* no prop did change methods */,

/** stencil-route: [6] events **/
0 /* no events */,

/** stencil-route: [7] methods **/
0 /* no methods */,

/** stencil-route: [8] hostElementMember **/
'el'

],

/***************** stencil-route-link *****************/
[
/** stencil-route-link: [0] tag **/
'STENCIL-ROUTE-LINK',

/** stencil-route-link: [1] host **/
{}

],

/***************** stencil-router *****************/
[
/** stencil-router: [0] tag **/
'STENCIL-ROUTER',

/** stencil-router: [1] host **/
{},

/** stencil-router: [2] listeners **/
0 /* no listeners */,

/** stencil-router: [3] states **/
['routeMatch'],

/** stencil-router: [4] propWillChanges **/
0 /* no prop will change methods */,

/** stencil-router: [5] propDidChanges **/
0 /* no prop did change methods */,

/** stencil-router: [6] events **/
0 /* no events */,

/** stencil-router: [7] methods **/
['match', 'navigateTo'],

/** stencil-router: [8] hostElementMember **/
'el'

]
)