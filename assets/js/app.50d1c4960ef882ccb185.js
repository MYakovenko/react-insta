!function(e){function t(t){for(var n,o,a=t[0],i=t[1],c=t[2],s=0,l=[];s<a.length;s++)o=a[s],Object.prototype.hasOwnProperty.call(N,o)&&N[o]&&l.push(N[o][0]),N[o]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);for(C&&C(t);l.length;)l.shift()();return T.push.apply(T,c||[]),r()}function r(){for(var e,t=0;t<T.length;t++){for(var r=T[t],n=!0,o=1;o<r.length;o++){var a=r[o];0!==N[a]&&(n=!1)}n&&(T.splice(t--,1),e=x(x.s=r[0]))}return e}var n=window.webpackHotUpdate;window.webpackHotUpdate=function(e,t){!function(e,t){if(!E[e]||!_[e])return;for(var r in _[e]=!1,t)Object.prototype.hasOwnProperty.call(t,r)&&(y[r]=t[r]);0==--b&&0===j&&k()}(e,t),n&&n(e,t)};var o,a=!0,i="50d1c4960ef882ccb185",c=1e4,s={},l=[],u=[];function p(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:o!==e,active:!0,accept:function(e,r){if(void 0===e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var n=0;n<e.length;n++)t._acceptedDependencies[e[n]]=r||function(){};else t._acceptedDependencies[e]=r||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"==typeof e)for(var r=0;r<e.length;r++)t._declinedDependencies[e[r]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var r=t._disposeHandlers.indexOf(e);r>=0&&t._disposeHandlers.splice(r,1)},check:w,apply:P,status:function(e){if(!e)return d;f.push(e)},addStatusHandler:function(e){f.push(e)},removeStatusHandler:function(e){var t=f.indexOf(e);t>=0&&f.splice(t,1)},data:s[e]};return o=void 0,t}var f=[],d="idle";function h(e){d=e;for(var t=0;t<f.length;t++)f[t].call(null,e)}var m,y,v,b=0,j=0,g={},_={},E={};function O(e){return+e+""===e?+e:e}function w(e){if("idle"!==d)throw new Error("check() is only allowed in idle status");return a=e,h("check"),(t=c,t=t||1e4,new Promise(function(e,r){if("undefined"==typeof XMLHttpRequest)return r(new Error("No browser support"));try{var n=new XMLHttpRequest,o=x.p+""+i+".hot-update.json";n.open("GET",o,!0),n.timeout=t,n.send(null)}catch(e){return r(e)}n.onreadystatechange=function(){if(4===n.readyState)if(0===n.status)r(new Error("Manifest request to "+o+" timed out."));else if(404===n.status)e();else if(200!==n.status&&304!==n.status)r(new Error("Manifest request to "+o+" failed."));else{try{var t=JSON.parse(n.responseText)}catch(e){return void r(e)}e(t)}}})).then(function(e){if(!e)return h("idle"),null;_={},g={},E=e.c,v=e.h,h("prepare");var t=new Promise(function(e,t){m={resolve:e,reject:t}});for(var r in y={},N)S(r);return"prepare"===d&&0===j&&0===b&&k(),t});var t}function S(e){E[e]?(_[e]=!0,b++,function(e){var t=document.createElement("script");t.charset="utf-8",t.src=x.p+""+e+"."+i+".hot-update.js",document.head.appendChild(t)}(e)):g[e]=!0}function k(){h("ready");var e=m;if(m=null,e)if(a)Promise.resolve().then(function(){return P(a)}).then(function(t){e.resolve(t)},function(t){e.reject(t)});else{var t=[];for(var r in y)Object.prototype.hasOwnProperty.call(y,r)&&t.push(O(r));e.resolve(t)}}function P(t){if("ready"!==d)throw new Error("apply() is only allowed in ready status");var r,n,o,a,c;function u(e){for(var t=[e],r={},n=t.map(function(e){return{chain:[e],id:e}});n.length>0;){var o=n.pop(),i=o.id,c=o.chain;if((a=I[i])&&!a.hot._selfAccepted){if(a.hot._selfDeclined)return{type:"self-declined",chain:c,moduleId:i};if(a.hot._main)return{type:"unaccepted",chain:c,moduleId:i};for(var s=0;s<a.parents.length;s++){var l=a.parents[s],u=I[l];if(u){if(u.hot._declinedDependencies[i])return{type:"declined",chain:c.concat([l]),moduleId:i,parentId:l};-1===t.indexOf(l)&&(u.hot._acceptedDependencies[i]?(r[l]||(r[l]=[]),p(r[l],[i])):(delete r[l],t.push(l),n.push({chain:c.concat([l]),id:l})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:r}}function p(e,t){for(var r=0;r<t.length;r++){var n=t[r];-1===e.indexOf(n)&&e.push(n)}}t=t||{};var f={},m=[],b={},j=function(){console.warn("[HMR] unexpected require("+_.moduleId+") to disposed module")};for(var g in y)if(Object.prototype.hasOwnProperty.call(y,g)){var _;c=O(g);var w=!1,S=!1,k=!1,P="";switch((_=y[g]?u(c):{type:"disposed",moduleId:g}).chain&&(P="\nUpdate propagation: "+_.chain.join(" -> ")),_.type){case"self-declined":t.onDeclined&&t.onDeclined(_),t.ignoreDeclined||(w=new Error("Aborted because of self decline: "+_.moduleId+P));break;case"declined":t.onDeclined&&t.onDeclined(_),t.ignoreDeclined||(w=new Error("Aborted because of declined dependency: "+_.moduleId+" in "+_.parentId+P));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(_),t.ignoreUnaccepted||(w=new Error("Aborted because "+c+" is not accepted"+P));break;case"accepted":t.onAccepted&&t.onAccepted(_),S=!0;break;case"disposed":t.onDisposed&&t.onDisposed(_),k=!0;break;default:throw new Error("Unexception type "+_.type)}if(w)return h("abort"),Promise.reject(w);if(S)for(c in b[c]=y[c],p(m,_.outdatedModules),_.outdatedDependencies)Object.prototype.hasOwnProperty.call(_.outdatedDependencies,c)&&(f[c]||(f[c]=[]),p(f[c],_.outdatedDependencies[c]));k&&(p(m,[_.moduleId]),b[c]=j)}var T,D=[];for(n=0;n<m.length;n++)c=m[n],I[c]&&I[c].hot._selfAccepted&&b[c]!==j&&D.push({module:c,errorHandler:I[c].hot._selfAccepted});h("dispose"),Object.keys(E).forEach(function(e){!1===E[e]&&function(e){delete N[e]}(e)});for(var F,R,C=m.slice();C.length>0;)if(c=C.pop(),a=I[c]){var U={},H=a.hot._disposeHandlers;for(o=0;o<H.length;o++)(r=H[o])(U);for(s[c]=U,a.hot.active=!1,delete I[c],delete f[c],o=0;o<a.children.length;o++){var z=I[a.children[o]];z&&((T=z.parents.indexOf(c))>=0&&z.parents.splice(T,1))}}for(c in f)if(Object.prototype.hasOwnProperty.call(f,c)&&(a=I[c]))for(R=f[c],o=0;o<R.length;o++)F=R[o],(T=a.children.indexOf(F))>=0&&a.children.splice(T,1);for(c in h("apply"),i=v,b)Object.prototype.hasOwnProperty.call(b,c)&&(e[c]=b[c]);var A=null;for(c in f)if(Object.prototype.hasOwnProperty.call(f,c)&&(a=I[c])){R=f[c];var G=[];for(n=0;n<R.length;n++)if(F=R[n],r=a.hot._acceptedDependencies[F]){if(-1!==G.indexOf(r))continue;G.push(r)}for(n=0;n<G.length;n++){r=G[n];try{r(R)}catch(e){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:c,dependencyId:R[n],error:e}),t.ignoreErrored||A||(A=e)}}}for(n=0;n<D.length;n++){var M=D[n];c=M.module,l=[c];try{x(c)}catch(e){if("function"==typeof M.errorHandler)try{M.errorHandler(e)}catch(r){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:c,error:r,originalError:e}),t.ignoreErrored||A||(A=r),A||(A=e)}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:c,error:e}),t.ignoreErrored||A||(A=e)}}return A?(h("fail"),Promise.reject(A)):(h("idle"),new Promise(function(e){e(m)}))}var I={},N={0:0},T=[];function x(t){if(I[t])return I[t].exports;var r=I[t]={i:t,l:!1,exports:{},hot:p(t),parents:(u=l,l=[],u),children:[]};return e[t].call(r.exports,r,r.exports,function(e){var t=I[e];if(!t)return x;var r=function(r){return t.hot.active?(I[r]?-1===I[r].parents.indexOf(e)&&I[r].parents.push(e):(l=[e],o=r),-1===t.children.indexOf(r)&&t.children.push(r)):(console.warn("[HMR] unexpected require("+r+") from disposed module "+e),l=[]),x(r)},n=function(e){return{configurable:!0,enumerable:!0,get:function(){return x[e]},set:function(t){x[e]=t}}};for(var a in x)Object.prototype.hasOwnProperty.call(x,a)&&"e"!==a&&"t"!==a&&Object.defineProperty(r,a,n(a));return r.e=function(e){return"ready"===d&&h("prepare"),j++,x.e(e).then(t,function(e){throw t(),e});function t(){j--,"prepare"===d&&(g[e]||S(e),0===j&&0===b&&k())}},r.t=function(e,t){return 1&t&&(e=r(e)),x.t(e,-2&t)},r}(t)),r.l=!0,r.exports}x.m=e,x.c=I,x.d=function(e,t,r){x.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},x.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},x.t=function(e,t){if(1&t&&(e=x(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(x.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)x.d(r,n,function(t){return e[t]}.bind(null,n));return r},x.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return x.d(t,"a",t),t},x.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},x.p="./",x.h=function(){return i};var D=window.webpackJsonp=window.webpackJsonp||[],F=D.push.bind(D);D.push=t,D=D.slice();for(var R=0;R<D.length;R++)t(D[R]);var C=F;T.push([350,1]),r()}({243:function(e,t,r){"use strict";(function(e){var n=r(0),o=r.n(n),a=r(8),i=r(259),c=r(244),s=r(257),l=r(258);t.a=Object(i.hot)(e)(function(){return o.a.createElement(a.c,null,o.a.createElement(a.a,{exact:!0,path:"/",component:c.a}),o.a.createElement(a.a,{exact:!0,path:"/favorites",component:l.a}),o.a.createElement(a.a,{path:"/item/:id",component:s.a}))})}).call(this,r(86)(e))},244:function(e,t,r){"use strict";var n=r(0),o=r.n(n),a=r(27),i=r(16),c=r(49),s=r(352),l=r(9),u=r(35),p=r(40),f=(r(95),r(285),r(33)),d=r(55);function h(e){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(r,!0).forEach(function(t){b(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function b(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function j(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function g(e,t){return!t||"object"!==h(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function _(e){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function E(e,t){return(E=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var O=function(e){function t(e){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(r=g(this,_(t).call(this,e))).inputRef=o.a.createRef(),r.state={fixed:!1},r.listenScrollEvent=function(){window.scrollY>500?r.setState(function(e){return v({},e,{fixed:!0})}):r.setState(function(e){return v({},e,{fixed:!1})})},r}var r,i,p;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&E(e,t)}(t,n["Component"]),r=t,(i=[{key:"componentDidMount",value:function(){this.props.getPictures(this.props.searchText),this.props.changeFavorites(),window.addEventListener("scroll",this.listenScrollEvent)}},{key:"handleSearch",value:function(){var e=this.inputRef.current.state.value;this.props.changeSearchText(e),this.props.getPictures(e)}},{key:"onDragEnd",value:function(e){var t=e.destination,r=e.source,n=e.draggableId;if(t&&(t.droppableId!==r.droppableId||t.index!==r.index)&&r.droppableId!==t.droppableId&&"search-results"===r.droppableId){var o=this.props.photos.photos.photo.find(function(e){return e.id===n});localStorage.favorites?(localStorage.setItem("favorites",JSON.stringify(JSON.parse(localStorage.favorites).concat([o]))),this.props.changeFavorites()):localStorage.setItem("favorites",JSON.stringify([o]))}}},{key:"render",value:function(){var e=this,t=this.props,r=t.photos,n=t.isFetching,i=t.favorites,p=t.removeFromFavorites;return o.a.createElement(c.a,{onDragEnd:this.onDragEnd.bind(this)},o.a.createElement("div",{className:"wrapper"},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"container__title"},"Find your inspiration with ",o.a.createElement("span",{className:"container__title__logo"},"INSTA")),o.a.createElement("div",{className:"container__input-wrapper"},o.a.createElement(s.a,{id:"search-input",type:"text",ref:this.inputRef,prefix:o.a.createElement(l.a,{type:"search"}),onPressEnter:this.handleSearch.bind(this)}),o.a.createElement(u.a,{onClick:this.handleSearch.bind(this),shape:"round",type:"primary"},"Search"))),o.a.createElement(a.b,{to:{pathname:"/favorites"}},o.a.createElement("h3",{className:"favorite_title mobile"},"Favorites")),o.a.createElement(d.a,{flag:n},o.a.createElement("div",{className:"pictures-wrapper"},o.a.createElement(c.c,{droppableId:"search-results",type:"insta"},function(e,t){return o.a.createElement("div",m({ref:e.innerRef},e.droppableProps,{className:t.isDraggingOver?"pictures-wrapper_main isDraggingOver":"pictures-wrapper_main"}),r&&r.photos.photo.filter(function(e){return e.url_n}).map(function(e,t){return o.a.createElement(c.b,{draggableId:e.id,index:t,key:e.id},function(r){return o.a.createElement("div",m({id:e.id,ref:r.innerRef},r.draggableProps,r.dragHandleProps),o.a.createElement(f.a,{id:e.id,index:t,datetaken:e.datetaken,title:e.title,url:e.url_n,views:e.views,ownername:e.ownername}))})}),e.placeholder)}),o.a.createElement(c.c,{droppableId:"favorites",type:"insta"},function(t){return o.a.createElement("div",m({ref:t.innerRef},t.droppableProps,{className:e.state.fixed?"pictures-wrapper_favorite fixed":"pictures-wrapper_favorite"}),o.a.createElement(a.b,{to:{pathname:"/favorites"}},o.a.createElement("h3",{className:"favorite_title"},"Favorites")),i&&i.map(function(t,r){return o.a.createElement("div",{className:"picture-faivoirites-conteiner",key:"favorite_".concat(t.id,"+").concat(r)},o.a.createElement(f.a,{id:t.id,index:r,datetaken:t.datetaken,title:t.title,url:t.url_n,views:t.views,ownername:t.ownername}),o.a.createElement(u.a,{className:"close-icon",shape:"round",type:"primary",onClick:p.bind(e,t.id)},o.a.createElement(l.a,{type:"close",style:{fontSize:"14px",color:"#F5CE28"}})))}),t.placeholder)})))))}}])&&j(r.prototype,i),p&&j(r,p),t}();t.a=Object(i.b)(function(e){return{photos:e.instaReduser.photos,imageUrl:e.instaReduser.imageUrl,imageInfo:e.instaReduser.imageInfo,searchText:e.instaReduser.searchText,isFetching:e.instaReduser.isFetching,favorites:e.instaReduser.favorites}},p)(O)},257:function(e,t,r){"use strict";var n=r(0),o=r.n(n),a=r(8),i=r(16),c=r(9),s=r(40),l=r(55),u=r(33);function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function d(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function h(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function m(e,t){return!t||"object"!==p(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var b=function(e){function t(e){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(r=m(this,y(t).call(this,e))).state={iconFlag:!1},r.addToFavoritesHandler=function(e,t){if(r.setState(function(e){return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(r,!0).forEach(function(t){d(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({},e,{iconFlag:!e.iconFlag})}),r.state.iconFlag&&r.props.removeFromFavorites(),!r.state.iconFlag){var n={datetaken:e.dates.taken,description:{_content:e.description._content},id:e.id,ownername:e.owner.username,title:e.title._content,url_n:t,views:e.views};localStorage.favorites?localStorage.setItem("favorites",JSON.stringify(JSON.parse(localStorage.favorites).concat([n]))):localStorage.setItem("favorites",JSON.stringify([n]))}},r}var r,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(t,n["Component"]),r=t,(a=[{key:"componentDidMount",value:function(){this.props.getFullInfo(this.props.match.params.id)}},{key:"componentDidUpdate",value:function(e){e.match.params.id!==this.props.match.params.id&&this.props.getFullInfo(this.props.match.params.id)}},{key:"onClickHandler",value:function(){this.props.history.push("/")}},{key:"render",value:function(){var e=this.props,t=e.imageUrl,r=e.imageInfo,n=e.isFetching,a=e.recentPhotos;return o.a.createElement("div",{className:"wrapper"},t&&r&&o.a.createElement("div",{className:"pictureInfo"},o.a.createElement("div",{className:"pictureInfo__back",onClick:this.onClickHandler.bind(this)},o.a.createElement(c.a,{type:"left",style:{fontSize:"36px",color:"#1890ff"}}),o.a.createElement("div",{className:"pictureInfo__back-text"},"Back to search")),o.a.createElement(l.a,{flag:n},o.a.createElement("section",{className:"pictureInfo__conteiner"},o.a.createElement("div",{className:"pictureInfo__img-conteiner"},o.a.createElement("img",{className:"pictureInfo__img",src:t,alt:r.title._content}),o.a.createElement(c.a,{type:"heart",className:"pictureInfo__button",onClick:this.addToFavoritesHandler.bind(this,r,t),theme:this.state.iconFlag?"filled":"outlined",style:{fontSize:"28px",color:"#1890ff"}})),o.a.createElement("h1",{className:"pictureInfo__title"},r.title._content),o.a.createElement("p",{className:"pictureInfo__owner"},"By ",r.owner.username),o.a.createElement("h2",{className:"pictureInfo__description-title"},"Description"),o.a.createElement("p",{className:"pictureInfo__description-info"},r.description._content),o.a.createElement("section",{className:"pictureInfo__date-view-wrapper"},o.a.createElement("p",{className:"pictureInfo__datetaken"},r.dates.taken),o.a.createElement("p",{className:"pictureInfo__views"}," Views: ",r.views))),o.a.createElement("section",{className:"recent-photos"},o.a.createElement("h1",{className:"recent-photos__title"},"Recently added photos"),o.a.createElement("div",{className:"recent-photos__pictures"},a&&a.map(function(e){return o.a.createElement(u.a,{key:e.id,id:e.id,datetaken:e.datetaken,title:e.title,url:e.url_n,views:e.views,ownername:e.ownername})}))))))}}])&&h(r.prototype,a),i&&h(r,i),t}();t.a=Object(a.f)(Object(i.b)(function(e){return{photos:e.instaReduser.photos,imageUrl:e.instaReduser.imageUrl,imageInfo:e.instaReduser.imageInfo,recentPhotos:e.instaReduser.recentPhotos,isFetching:e.instaReduser.isFetching}},s)(b))},258:function(e,t,r){"use strict";var n=r(0),o=r.n(n),a=r(8),i=r(16),c=r(9),s=r(35),l=r(40),u=r(33);r(95);function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function d(e,t){return!t||"object"!==p(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var y=function(e){function t(e){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(r=d(this,h(t).call(this,e))).onClickHandler=function(){r.props.history.push("/")},r}var r,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,n["Component"]),r=t,(a=[{key:"render",value:function(){var e=this,t=this.props,r=t.favorites,n=t.removeFromFavorites;return o.a.createElement("div",{className:"wrapper"},o.a.createElement("div",{className:"favorites"},o.a.createElement("div",{className:"favorites-banner"},o.a.createElement("div",{className:"pictureInfo__back",onClick:this.onClickHandler},o.a.createElement(c.a,{type:"left",style:{fontSize:"36px",color:"#1890ff"}}),o.a.createElement("div",{className:"pictureInfo__back-text"},"Back to search")),o.a.createElement("div",{className:"favorites-banner__title"},"Favorite pictures")),o.a.createElement("div",{className:"favorites-conteiner"},r.map(function(t,r){return o.a.createElement("div",{className:"picture-faivoirites-conteiner",key:"favorite_".concat(t.id,"+").concat(r)},o.a.createElement(u.a,{id:t.id,index:r,datetaken:t.datetaken,title:t.title,url:t.url_n,views:t.views,ownername:t.ownername,path:"/favorites",text:"Back to favorites"}),o.a.createElement(s.a,{className:"close-icon",shape:"round",type:"primary",onClick:n.bind(e,t.id)},o.a.createElement(c.a,{type:"close",style:{fontSize:"14px",color:"#F5CE28"}})))}))))}}])&&f(r.prototype,a),i&&f(r,i),t}();t.a=Object(a.f)(Object(i.b)(function(e){return{favorites:e.instaReduser.favorites}},l)(y))},285:function(e,t,r){var n=r(65);"string"==typeof n&&(n=[[e.i,n,""]]);var o={insert:"head",singleton:!1},a=r(96)(n,o);n.locals&&(e.exports=n.locals),n.locals||e.hot.accept(65,function(){var t=r(65);"string"==typeof t&&(t=[[e.i,t,""]]),a(t)}),e.hot.dispose(function(){a()})},304:function(e,t,r){var n={"./af":108,"./af.js":108,"./ar":109,"./ar-dz":110,"./ar-dz.js":110,"./ar-kw":111,"./ar-kw.js":111,"./ar-ly":112,"./ar-ly.js":112,"./ar-ma":113,"./ar-ma.js":113,"./ar-sa":114,"./ar-sa.js":114,"./ar-tn":115,"./ar-tn.js":115,"./ar.js":109,"./az":116,"./az.js":116,"./be":117,"./be.js":117,"./bg":118,"./bg.js":118,"./bm":119,"./bm.js":119,"./bn":120,"./bn.js":120,"./bo":121,"./bo.js":121,"./br":122,"./br.js":122,"./bs":123,"./bs.js":123,"./ca":124,"./ca.js":124,"./cs":125,"./cs.js":125,"./cv":126,"./cv.js":126,"./cy":127,"./cy.js":127,"./da":128,"./da.js":128,"./de":129,"./de-at":130,"./de-at.js":130,"./de-ch":131,"./de-ch.js":131,"./de.js":129,"./dv":132,"./dv.js":132,"./el":133,"./el.js":133,"./en-SG":134,"./en-SG.js":134,"./en-au":135,"./en-au.js":135,"./en-ca":136,"./en-ca.js":136,"./en-gb":137,"./en-gb.js":137,"./en-ie":138,"./en-ie.js":138,"./en-il":139,"./en-il.js":139,"./en-nz":140,"./en-nz.js":140,"./eo":141,"./eo.js":141,"./es":142,"./es-do":143,"./es-do.js":143,"./es-us":144,"./es-us.js":144,"./es.js":142,"./et":145,"./et.js":145,"./eu":146,"./eu.js":146,"./fa":147,"./fa.js":147,"./fi":148,"./fi.js":148,"./fo":149,"./fo.js":149,"./fr":150,"./fr-ca":151,"./fr-ca.js":151,"./fr-ch":152,"./fr-ch.js":152,"./fr.js":150,"./fy":153,"./fy.js":153,"./ga":154,"./ga.js":154,"./gd":155,"./gd.js":155,"./gl":156,"./gl.js":156,"./gom-latn":157,"./gom-latn.js":157,"./gu":158,"./gu.js":158,"./he":159,"./he.js":159,"./hi":160,"./hi.js":160,"./hr":161,"./hr.js":161,"./hu":162,"./hu.js":162,"./hy-am":163,"./hy-am.js":163,"./id":164,"./id.js":164,"./is":165,"./is.js":165,"./it":166,"./it-ch":167,"./it-ch.js":167,"./it.js":166,"./ja":168,"./ja.js":168,"./jv":169,"./jv.js":169,"./ka":170,"./ka.js":170,"./kk":171,"./kk.js":171,"./km":172,"./km.js":172,"./kn":173,"./kn.js":173,"./ko":174,"./ko.js":174,"./ku":175,"./ku.js":175,"./ky":176,"./ky.js":176,"./lb":177,"./lb.js":177,"./lo":178,"./lo.js":178,"./lt":179,"./lt.js":179,"./lv":180,"./lv.js":180,"./me":181,"./me.js":181,"./mi":182,"./mi.js":182,"./mk":183,"./mk.js":183,"./ml":184,"./ml.js":184,"./mn":185,"./mn.js":185,"./mr":186,"./mr.js":186,"./ms":187,"./ms-my":188,"./ms-my.js":188,"./ms.js":187,"./mt":189,"./mt.js":189,"./my":190,"./my.js":190,"./nb":191,"./nb.js":191,"./ne":192,"./ne.js":192,"./nl":193,"./nl-be":194,"./nl-be.js":194,"./nl.js":193,"./nn":195,"./nn.js":195,"./pa-in":196,"./pa-in.js":196,"./pl":197,"./pl.js":197,"./pt":198,"./pt-br":199,"./pt-br.js":199,"./pt.js":198,"./ro":200,"./ro.js":200,"./ru":201,"./ru.js":201,"./sd":202,"./sd.js":202,"./se":203,"./se.js":203,"./si":204,"./si.js":204,"./sk":205,"./sk.js":205,"./sl":206,"./sl.js":206,"./sq":207,"./sq.js":207,"./sr":208,"./sr-cyrl":209,"./sr-cyrl.js":209,"./sr.js":208,"./ss":210,"./ss.js":210,"./sv":211,"./sv.js":211,"./sw":212,"./sw.js":212,"./ta":213,"./ta.js":213,"./te":214,"./te.js":214,"./tet":215,"./tet.js":215,"./tg":216,"./tg.js":216,"./th":217,"./th.js":217,"./tl-ph":218,"./tl-ph.js":218,"./tlh":219,"./tlh.js":219,"./tr":220,"./tr.js":220,"./tzl":221,"./tzl.js":221,"./tzm":222,"./tzm-latn":223,"./tzm-latn.js":223,"./tzm.js":222,"./ug-cn":224,"./ug-cn.js":224,"./uk":225,"./uk.js":225,"./ur":226,"./ur.js":226,"./uz":227,"./uz-latn":228,"./uz-latn.js":228,"./uz.js":227,"./vi":229,"./vi.js":229,"./x-pseudo":230,"./x-pseudo.js":230,"./yo":231,"./yo.js":231,"./zh-cn":232,"./zh-cn.js":232,"./zh-hk":233,"./zh-hk.js":233,"./zh-tw":234,"./zh-tw.js":234};function o(e){var t=a(e);return r(t)}function a(e){if(!r.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}o.keys=function(){return Object.keys(n)},o.resolve=a,e.exports=o,o.id=304},33:function(e,t,r){"use strict";var n=r(0),o=r.n(n),a=r(27);t.a=function(e){var t=e.id,r=e.datetaken,n=e.title,i=e.url,c=e.views,s=e.ownername,l=e.onClick;return o.a.createElement(a.b,{to:{pathname:"/item/".concat(t)},className:"picture"},o.a.createElement("img",{className:"picture__img",src:i,id:t,alt:n,onClick:l}),o.a.createElement("div",{className:"picture__card-body"},o.a.createElement("p",{className:"picture__title"},n),o.a.createElement("p",{className:"picture__ownername"},"By ",s),o.a.createElement("section",{className:"picture__date-view-wrapper"},o.a.createElement("p",{className:"picture__datetaken"},r),o.a.createElement("p",{className:"picture__views"},"Views: ",c))))}},350:function(e,t,r){"use strict";r.r(t);var n=r(0),o=r.n(n),a=r(23),i=r.n(a),c=r(27),s=r(16),l=r(243),u=r(13),p=r(260),f=r(4),d={photos:null,imageUrl:null,imageInfo:null,searchText:"popular",recentPhotos:null,isFetching:!1,favorites:[]};function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(r,!0).forEach(function(t){y(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function y(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var v=Object(u.c)({instaReduser:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f.b:return m({},e,{searchText:t.payload});case f.a:case f.o:return m({},e,{favorites:localStorage.favorites&&JSON.parse(localStorage.favorites).reverse()});case f.f:return m({},e,{isFetching:!0});case f.h:var r=t.payload.data;return m({},e,{photos:r,isFetching:!1});case f.g:return m({},e,{isFetching:!1});case f.i:return m({},e,{isFetching:!0});case f.k:var n=t.payload.data,o=n.sizes.size,a=o.filter(function(e){return"Large"===e.label||"Original"===e.label})[0].source;return m({},e,{imageUrl:a,isFetching:!1});case f.j:return m({},e,{isFetching:!1});case f.c:return m({},e,{isFetching:!0});case f.e:var i=t.payload.data,c=i.photo;return m({},e,{imageInfo:c,isFetching:!1});case f.d:return m({},e,{isFetching:!1});case f.l:return m({},e,{isFetching:!0});case f.n:var s=t.payload.data,l=s.photos.photo;return m({},e,{recentPhotos:l,isFetching:!1});case f.m:return m({},e,{isFetching:!1});default:return e}}}),b=Object(u.e)(v,Object(u.a)(p.a));i.a.render(o.a.createElement(s.a,{store:b},o.a.createElement(c.a,{basename:"/react-insta"},o.a.createElement(l.a,null))),document.getElementById("root"))},4:function(e,t,r){"use strict";r.d(t,"b",function(){return n}),r.d(t,"a",function(){return o}),r.d(t,"o",function(){return a}),r.d(t,"f",function(){return i}),r.d(t,"h",function(){return c}),r.d(t,"g",function(){return s}),r.d(t,"i",function(){return l}),r.d(t,"k",function(){return u}),r.d(t,"j",function(){return p}),r.d(t,"c",function(){return f}),r.d(t,"e",function(){return d}),r.d(t,"d",function(){return h}),r.d(t,"l",function(){return m}),r.d(t,"n",function(){return y}),r.d(t,"m",function(){return v});var n="CHANGE_SEARCHTEXT",o="CHANGE_FAVORITES",a="REMOVE_FROM_FAVORITES",i="GET_PICTURES_REQUEST",c="GET_PICTURES_REQUEST_SUCCESS",s="GET_PICTURES_REQUEST_FAIL",l="GET_PICTURE_BY_ID_REQUEST",u="GET_PICTURE_BY_ID_REQUEST_SUCCESS",p="GET_PICTURE_BY_ID_REQUEST_FAIL",f="GET_INFO_BY_ID_REQUEST",d="GET_INFO_BY_ID_REQUEST_SUCCESS",h="GET_INFO_BY_ID_REQUEST_FAIL",m="GET_RECENT_PHOTO_REQUEST",y="GET_RECENT_PHOTO_REQUEST_SUCCESS",v="GET_RECENT_PHOTO_REQUEST_FAIL"},40:function(e,t,r){"use strict";r.r(t),r.d(t,"changeSearchText",function(){return u}),r.d(t,"changeFavorites",function(){return p}),r.d(t,"removeFromFavorites",function(){return f}),r.d(t,"getPictures",function(){return d}),r.d(t,"getPictureById",function(){return h}),r.d(t,"getInfoById",function(){return m}),r.d(t,"getRecentPhoto",function(){return y}),r.d(t,"getFullInfo",function(){return v});var n=r(245),o=r.n(n),a=r(4);function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(r,!0).forEach(function(t){s(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var l=function(e,t){return o()({method:"get",url:"https://api.flickr.com/services/rest",params:c({api_key:"1bf71de06a011be4e12a11d22182266f",format:"json",nojsoncallback:1},t,{method:"flickr.".concat(e)})})},u=function(e){return{type:a.b,payload:e}},p=function(e){return{type:a.a,payload:e}},f=function(e){var t=JSON.parse(localStorage.favorites);return t.splice(t.findIndex(function(t){return t.id===e}),1),localStorage.setItem("favorites",JSON.stringify(t)),{type:a.o,favorites:t}},d=function(e){return function(t){var r;return t({type:a.f,payload:r}),l("photos.search",{text:e,extras:"url_n, owner_name, description, date_taken, views",page:1,per_page:30}).then(function(e){return t(function(e){return{type:a.h,payload:e}}(e))}).catch(function(e){return t(function(e){return{type:a.g,payload:e}}(e))})}},h=function(e){return function(t){var r;return t({type:a.i,payload:r}),l("photos.getSizes",{photo_id:e}).then(function(e){return t(function(e){return{type:a.k,payload:e}}(e))}).catch(function(e){return t(function(e){return{type:a.j,payload:e}}(e))})}},m=function(e){return function(t){var r;return t({type:a.c,payload:r}),l("photos.getInfo",{photo_id:e}).then(function(e){return t(function(e){return{type:a.e,payload:e}}(e))}).catch(function(e){return t(function(e){return{type:a.d,payload:e}}(e))})}},y=function(){return function(e){var t;return e({type:a.l,payload:t}),l("photos.getRecent",{extras:"url_n, owner_name, description, date_taken, views",page:1,per_page:3}).then(function(t){return e(function(e){return{type:a.n,payload:e}}(t))}).catch(function(t){return e(function(e){return{type:a.m,payload:e}}(t))})}},v=function(e){return function(t){return Promise.all([t(m(e)),t(h(e)),t(y())])}}},55:function(e,t,r){"use strict";r.d(t,"a",function(){return i});var n=r(0),o=r.n(n),a=r(351),i=function(e){var t=e.children;return e.flag?o.a.createElement("div",{className:"loader loader-wrapper"},o.a.createElement(a.a,{size:"large"}),o.a.createElement("div",{className:"loader__text"},"Loading...")," "):t}},65:function(e,t,r){}});