/*! Built with http://stenciljs.com */

App.defineComponents(

/**** module id (dev mode) ****/
'app-list.lazy-ad.lazy-img.list-page.share-button',

/**** component modules ****/
function importComponent(exports, h, t, Core, publicPath) {
var AppList = (function () {
    function AppList() {
        this.detail = null;
        this.saved = false;
    }
    AppList.prototype.open = function (url) {
        window.open(url);
    };
    AppList.prototype.details = function (article) {
        this.detail = article;
        setTimeout(function () {
            document.querySelector('#detailOverlay').className = 'open';
        }, 100);
    };
    AppList.prototype.close = function () {
        document.querySelector('#detailOverlay').className = '';
        this.detail = null;
    };
    AppList.prototype.save = function (article) {
        var _this = this;
        idbKeyval.get('offlineArticles').then(function (value) {
            if (value === undefined) {
                var articles = [];
                articles.push(article);
                idbKeyval.set('offlineArticles', articles).then(function () {
                    console.log('article saved');
                    _this.saved = true;
                    setTimeout(function () {
                        _this.saved = false;
                    }, 2000);
                });
            }
            else {
                value.push(article);
                idbKeyval.set('offlineArticles', value).then(function () {
                    console.log('article saved');
                    _this.saved = true;
                    setTimeout(function () {
                        _this.saved = false;
                    }, 2000);
                });
            }
        });
    };
    AppList.prototype.render = function () {
        var _this = this;
        console.log('render');
        if (!this.detail && this.articles) {
            var items = this.articles.map(function (article, id) {
                if (article.urlToImage.indexOf('https') > -1) {
                    return (h("li", { "c": id.toString() },
                        h("lazy-img", { "p": { "src": article.urlToImage, "alt": article.title } }),
                        h("div", { "a": { "id": 'card-content' } },
                            h("h3", 0, article.title),
                            h("p", { "a": { "id": 'desc' } }, article.description),
                            h("div", { "a": { "id": 'actions' } },
                                h("button", { "c": { "readButton": true }, "o": { "click": function () { return _this.save(article); } } }, t("Save")),
                                h("button", { "c": { "readButton": true }, "o": { "click": function () { return _this.details(article); } } }, t("Details")),
                                h("button", { "c": { "readButton": true }, "o": { "click": function () { return _this.open(article.url); } } }, t("Read")),
                                h("share-button", { "p": { "urlToShare": article.url } }, t("Share"))))));
                }
            });
            return [
                h("ul", 0, items),
                h("app-toast", { "p": { "open": this.saved } }, t("Article saved offline")),
                h("lazy-ad", { "a": { "src": 'ads/ad.html' } })
            ];
        }
        else if (this.detail) {
            return [
                h("div", { "a": { "id": 'detailOverlay' } },
                    h("button", { "o": { "click": function () { return _this.close(); } }, "a": { "id": 'closeButton' } }, t("Close")),
                    h("img", { "p": { "src": this.detail.urlToImage, "alt": this.detail.title } }),
                    h("h2", 0, this.detail.title),
                    h("p", 0, t("By "),
                        this.detail.author),
                    h("p", 0, this.detail.description),
                    h("button", { "o": { "click": function () { return _this.open(_this.detail.url); } }, "a": { "id": 'detailRead' } }, t("Read")),
                    h("share-button", { "a": { "id": 'shareButton' }, "p": { "urlToShare": this.detail.url } }, t("Share")))
            ];
        }
    };
    return AppList;
}());

var LazyAd = (function () {
    function LazyAd() {
    }
    LazyAd.prototype["componentWillLoad"] = function () {
        var _this = this;
        setTimeout(function () {
            if ('IntersectionObserver' in window) {
                if ('requestIdleCallback' in window) {
                    window.requestIdleCallback(function () {
                        _this.createIframe();
                        _this._io = new IntersectionObserver(function (data) {
                            if (data[0].intersectionRatio > 0.011) {
                                _this._iframe.src = _this.src;
                                _this._io.unobserve(_this.el);
                                _this.removeIntersectionObserver();
                            }
                        });
                        _this._io.observe(_this.el);
                    });
                }
                else {
                    setTimeout(function () {
                        _this.createIframe();
                        _this._io = new IntersectionObserver(function (data) {
                            if (data[0].intersectionRatio > 0.011) {
                                _this._iframe.src = _this.src;
                                _this._io.unobserve(_this.el);
                                _this.removeIntersectionObserver();
                            }
                        });
                        _this._io.observe(_this.el);
                    }, 500);
                }
            }
            else {
                // IntersectionObserver is not available, so just create the iframe
                // and load in the ad after a little delay
                window.setTimeout(function () {
                    _this.createIframe();
                    _this._iframe.src = _this.src;
                }, 500);
            }
        }, 3000);
    };
    LazyAd.prototype.removeIntersectionObserver = function () {
        if (this._io) {
            this._io.disconnect();
            this._io = null;
        }
    };
    LazyAd.prototype.createIframe = function () {
        this._iframe = document.createElement('iframe');
        this.el.querySelector('div').appendChild(this._iframe);
        this._iframeCreated = true;
    };
    LazyAd.prototype.render = function () {
        return (h("div", 0));
    };
    return LazyAd;
}());

var LazyImg = (function () {
    function LazyImg() {
    }
    LazyImg.prototype["componentDidLoad"] = function () {
        this.addIntersectionObserver();
    };
    LazyImg.prototype["componentWillUpdate"] = function () {
        if (this.oldSrc && this.src !== this.oldSrc) {
            this.addIntersectionObserver();
        }
        this.oldSrc = this.src;
    };
    LazyImg.prototype.addIntersectionObserver = function () {
        var _this = this;
        if ('IntersectionObserver' in window && this.src !== null) {
            this.io = new IntersectionObserver(function (data) {
                if (data[0].intersectionRatio > 0.011) {
                    console.log('load');
                    var image_1 = _this.el.querySelector('img');
                    image_1.setAttribute('src', image_1.getAttribute('data-src'));
                    image_1.onload = function () {
                        image_1.removeAttribute('data-src');
                    };
                    _this.removeIntersectionObserver();
                }
            });
            this.io.observe(this.el.querySelector('img'));
        }
    };
    LazyImg.prototype.removeIntersectionObserver = function () {
        if (this.io) {
            this.io.disconnect();
            this.io = null;
        }
    };
    LazyImg.prototype.render = function () {
        return (h("img", { "a": { "data-src": this.src }, "p": { "alt": this.alt } }));
    };
    return LazyImg;
}());

var ListPage = (function () {
    function ListPage() {
    }
    ListPage.prototype["componentWillLoad"] = function () {
        this.fetchNews('the-next-web');
    };
    ListPage.prototype.fakeFetch = function (url) {
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
    ListPage.prototype.fetchNews = function (src) {
        var _this = this;
        console.log(src);
        console.log(this.articleSrc);
        if (src.replace(/-/g, " ") !== this.articleSrc) {
            console.log('in here');
            this.articleSrc = src.replace(/-/g, " ");
            console.log('fetching');
            this.fakeFetch("https://newsapi.org/v1/articles?source=" + src + "&apiKey=3f03728668574e6794634e6244b18091").then(function (data) {
                console.log(data.articles);
                _this.sources = data.articles;
            });
        }
    };
    ListPage.prototype.render = function () {
        var _this = this;
        return [
            h("div", { "a": { "id": 'sidebar' } },
                h("h3", 0, t("Menu")),
                h("button", { "o": { "click": function () { return _this.fetchNews('the-next-web'); } } }, t("Next Web")),
                h("button", { "o": { "click": function () { return _this.fetchNews('engadget'); } } }, t("Engadget")),
                h("button", { "o": { "click": function () { return _this.fetchNews('the-verge'); } } }, t("The Verge"))),
            h("h2", 0, t("Top stories from "),
                this.articleSrc),
            h("app-list", { "p": { "articles": this.sources } }),
            h("div", { "a": { "id": 'tabs' } },
                h("button", { "o": { "click": function () { return _this.fetchNews('the-next-web'); } } }, t("Next Web")),
                h("button", { "o": { "click": function () { return _this.fetchNews('engadget'); } } }, t("Engadget")),
                h("button", { "o": { "click": function () { return _this.fetchNews('the-verge'); } } }, t("The Verge")))
        ];
    };
    return ListPage;
}());

var ShareButton = (function () {
    function ShareButton() {
    }
    ShareButton.prototype.share = function () {
        if (navigator.share !== undefined) {
            navigator.share({
                title: 'News story',
                text: "Check out this cool story!",
                url: this.urlToShare
            }).then(function () { return console.log('Successful share'); })
                .catch(function (error) { return console.log('Error sharing:', error); });
        }
        else {
            window.open("http://twitter.com/share?text=Check out this cool story!&url=" + this.urlToShare);
        }
    };
    ShareButton.prototype.render = function () {
        var _this = this;
        return (h("button", { "o": { "click": function () { return _this.share(); } } },
            h(0, 0)));
    };
    return ShareButton;
}());

exports['APP-LIST'] = AppList;
exports['LAZY-AD'] = LazyAd;
exports['LAZY-IMG'] = LazyImg;
exports['LIST-PAGE'] = ListPage;
exports['SHARE-BUTTON'] = ShareButton;
},


/***************** app-list *****************/
[
/** app-list: [0] tag **/
'APP-LIST',

/** app-list: [1] host **/
{},

/** app-list: [2] listeners **/
0 /* no listeners */,

/** app-list: [3] states **/
['detail', 'saved']

],

/***************** lazy-ad *****************/
[
/** lazy-ad: [0] tag **/
'LAZY-AD',

/** lazy-ad: [1] host **/
{},

/** lazy-ad: [2] listeners **/
0 /* no listeners */,

/** lazy-ad: [3] states **/
['_iframe', '_iframeCreated', '_io'],

/** lazy-ad: [4] propWillChanges **/
0 /* no prop will change methods */,

/** lazy-ad: [5] propDidChanges **/
0 /* no prop did change methods */,

/** lazy-ad: [6] events **/
0 /* no events */,

/** lazy-ad: [7] methods **/
0 /* no methods */,

/** lazy-ad: [8] hostElementMember **/
'el'

],

/***************** lazy-img *****************/
[
/** lazy-img: [0] tag **/
'LAZY-IMG',

/** lazy-img: [1] host **/
{},

/** lazy-img: [2] listeners **/
0 /* no listeners */,

/** lazy-img: [3] states **/
['io', 'oldSrc'],

/** lazy-img: [4] propWillChanges **/
0 /* no prop will change methods */,

/** lazy-img: [5] propDidChanges **/
0 /* no prop did change methods */,

/** lazy-img: [6] events **/
0 /* no events */,

/** lazy-img: [7] methods **/
0 /* no methods */,

/** lazy-img: [8] hostElementMember **/
'el'

],

/***************** list-page *****************/
[
/** list-page: [0] tag **/
'LIST-PAGE',

/** list-page: [1] host **/
{},

/** list-page: [2] listeners **/
0 /* no listeners */,

/** list-page: [3] states **/
['articleSrc', 'sources']

],

/***************** share-button *****************/
[
/** share-button: [0] tag **/
'SHARE-BUTTON',

/** share-button: [1] host **/
{}

]
)