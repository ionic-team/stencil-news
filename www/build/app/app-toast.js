/*! Built with http://stenciljs.com */

App.defineComponents(

/**** module id (dev mode) ****/
'app-toast',

/**** component modules ****/
function importComponent(exports, h, t, Core, publicPath) {
var AppToast = (function () {
    function AppToast() {
    }
    AppToast.prototype["componentWillUpdate"] = function () {
        console.log(this.open);
        if (this.open === false) {
            this.el.className = '';
        }
        else {
            this.el.className = 'open';
            console.log('opening', this.el.classList);
            /*setTimeout(() => {
              (this as any).$el.className = '';
            }, 1000);*/
        }
    };
    AppToast.prototype.render = function () {
        return (h("div", 0,
            h(0, 0)));
    };
    return AppToast;
}());

exports['APP-TOAST'] = AppToast;
},


/***************** app-toast *****************/
[
/** app-toast: [0] tag **/
'APP-TOAST',

/** app-toast: [1] host **/
{},

/** app-toast: [2] states **/
0 /* no states */,

/** app-toast: [3] propWillChanges **/
0 /* no prop will change methods */,

/** app-toast: [4] propDidChanges **/
0 /* no prop did change methods */,

/** app-toast: [5] events **/
0 /* no events */,

/** app-toast: [6] methods **/
0 /* no methods */,

/** app-toast: [7] hostElementMember **/
'el'

]
)