(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[95],{1059:function(e,t,n){"use strict";var r=n(2322),l=n(3980),o=n.n(l),i=n(5854),a=n.n(i),u=function(e){var t=e.title,n=e.subtitle,l=e.children;return(0,r.jsx)("div",{className:a().Page,children:(0,r.jsxs)("div",{className:a().PageContent,children:[(0,r.jsx)("h1",{className:a().PageHeading,children:t}),(0,r.jsx)("p",{className:a().PageSubcopy,children:n}),l&&(0,r.jsx)("div",{children:l})]})})};u.propTypes={title:o().string.isRequired,subtitle:o().string.isRequired,children:o().node},t.Z=u},9437:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(6385).default,l=n(616).Z,o=n(416).Z,i=n(3583).Z,a=n(237).Z,u=n(717).default,s=n(9788).Z,c=n(9178).default,f=n(7858).Z,d=n(8427).Z;("undefined"===typeof globalThis?"undefined":c(globalThis))<"u"?globalThis:window;var _,p,h,v,m,b,y,g={exports:{}},C={},k=[],w=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function E(e,t){for(var n in t)e[n]=t[n];return e}function A(e){var t=e.parentNode;t&&t.removeChild(e)}function P(e,t,n){var r,l,o,i={};for(o in t)"key"==o?r=t[o]:"ref"==o?l=t[o]:i[o]=t[o];if(arguments.length>2&&(i.children=arguments.length>3?_.call(arguments,2):n),"function"==typeof e&&null!=e.defaultProps)for(o in e.defaultProps)void 0===i[o]&&(i[o]=e.defaultProps[o]);return O(e,i,r,l,null)}function O(e,t,n,r,l){var o={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==l?++h:l};return null==l&&null!=p.vnode&&p.vnode(o),o}function T(e){return e.children}function S(e,t){this.props=e,this.context=t}function x(e,t){if(null==t)return e.__?x(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e;return"function"==typeof e.type?x(e):null}function N(e){var t,n;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e;break}return N(e)}}function j(e){(!e.__d&&(e.__d=!0)&&m.push(e)&&!M.__r++||b!==p.debounceRendering)&&((b=p.debounceRendering)||setTimeout)(M)}function M(){for(var e;M.__r=m.length;)e=m.sort((function(e,t){return e.__v.__b-t.__v.__b})),m=[],e.some((function(e){var t,n,r,l,o,i;e.__d&&(o=(l=(t=e).__v).__e,(i=t.__P)&&(n=[],(r=E({},l)).__v=l.__v+1,F(i,l,r,t.__n,void 0!==i.ownerSVGElement,null!=l.__h?[o]:null,n,null==o?x(l):o,l.__h),q(n,l),l.__e!=o&&N(l)))}))}function D(e,t,n,r,l,o,i,a,u,s){var f,d,_,p,h,v,m,b=r&&r.__k||k,y=b.length;for(n.__k=[],f=0;f<t.length;f++)if(null!=(p=n.__k[f]=null==(p=t[f])||"boolean"==typeof p?null:"string"==typeof p||"number"==typeof p||"bigint"==("undefined"===typeof p?"undefined":c(p))?O(null,p,null,null,p):Array.isArray(p)?O(T,{children:p},null,null,null):p.__b>0?O(p.type,p.props,p.key,p.ref?p.ref:null,p.__v):p)){if(p.__=n,p.__b=n.__b+1,null===(_=b[f])||_&&p.key==_.key&&p.type===_.type)b[f]=void 0;else for(d=0;d<y;d++){if((_=b[d])&&p.key==_.key&&p.type===_.type){b[d]=void 0;break}_=null}F(e,p,_=_||C,l,o,i,a,u,s),h=p.__e,(d=p.ref)&&_.ref!=d&&(m||(m=[]),_.ref&&m.push(_.ref,null,p),m.push(d,p.__c||h,p)),null!=h?(null==v&&(v=h),"function"==typeof p.type&&p.__k===_.__k?p.__d=u=R(p,u,e):u=I(e,p,_,b,h,u),"function"==typeof n.type&&(n.__d=u)):u&&_.__e==u&&u.parentNode!=e&&(u=x(_))}for(n.__e=v,f=y;f--;)null!=b[f]&&W(b[f],b[f]);if(m)for(f=0;f<m.length;f++)z(m[f],m[++f],m[++f])}function R(e,t,n){for(var r,l=e.__k,o=0;l&&o<l.length;o++)(r=l[o])&&(r.__=e,t="function"==typeof r.type?R(r,t,n):I(n,r,r,l,r.__e,t));return t}function I(e,t,n,r,l,o){var i,a,u;if(void 0!==t.__d)i=t.__d,t.__d=void 0;else if(null==n||l!=o||null==l.parentNode)e:if(null==o||o.parentNode!==e)e.appendChild(l),i=null;else{for(a=o,u=0;(a=a.nextSibling)&&u<r.length;u+=1)if(a==l)break e;e.insertBefore(l,o),i=o}return void 0!==i?i:l.nextSibling}function L(e,t,n){"-"===t[0]?e.setProperty(t,n):e[t]=null==n?"":"number"!=typeof n||w.test(t)?n:n+"px"}function B(e,t,n,r,l){var o;e:if("style"===t)if("string"==typeof n)e.style.cssText=n;else{if("string"==typeof r&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||L(e.style,t,"");if(n)for(t in n)r&&n[t]===r[t]||L(e.style,t,n[t])}else if("o"===t[0]&&"n"===t[1])o=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+o]=n,n?r||e.addEventListener(t,o?U:H,o):e.removeEventListener(t,o?U:H,o);else if("dangerouslySetInnerHTML"!==t){if(l)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("href"!==t&&"list"!==t&&"form"!==t&&"tabIndex"!==t&&"download"!==t&&t in e)try{e[t]=null==n?"":n;break e}catch(i){}"function"==typeof n||(null==n||!1===n&&-1==t.indexOf("-")?e.removeAttribute(t):e.setAttribute(t,n))}}function H(e){this.l[e.type+!1](p.event?p.event(e):e)}function U(e){this.l[e.type+!0](p.event?p.event(e):e)}function F(e,t,n,r,l,o,i,a,u){var s,c,f,d,h,v,m,b,y,g,k,w,P,O,N,j=t.type;if(void 0!==t.constructor)return null;null!=n.__h&&(u=n.__h,a=t.__e=n.__e,t.__h=null,o=[a]),(s=p.__b)&&s(t);try{e:if("function"==typeof j){if(b=t.props,y=(s=j.contextType)&&r[s.__c],g=s?y?y.props.value:s.__:r,n.__c?m=(c=t.__c=n.__c).__=c.__E:("prototype"in j&&j.prototype.render?t.__c=c=new j(b,g):(t.__c=c=new S(b,g),c.constructor=j,c.render=Z),y&&y.sub(c),c.props=b,c.state||(c.state={}),c.context=g,c.__n=r,f=c.__d=!0,c.__h=[],c._sb=[]),null==c.__s&&(c.__s=c.state),null!=j.getDerivedStateFromProps&&(c.__s==c.state&&(c.__s=E({},c.__s)),E(c.__s,j.getDerivedStateFromProps(b,c.__s))),d=c.props,h=c.state,f)null==j.getDerivedStateFromProps&&null!=c.componentWillMount&&c.componentWillMount(),null!=c.componentDidMount&&c.__h.push(c.componentDidMount);else{if(null==j.getDerivedStateFromProps&&b!==d&&null!=c.componentWillReceiveProps&&c.componentWillReceiveProps(b,g),!c.__e&&null!=c.shouldComponentUpdate&&!1===c.shouldComponentUpdate(b,c.__s,g)||t.__v===n.__v){for(c.props=b,c.state=c.__s,t.__v!==n.__v&&(c.__d=!1),c.__v=t,t.__e=n.__e,t.__k=n.__k,t.__k.forEach((function(e){e&&(e.__=t)})),k=0;k<c._sb.length;k++)c.__h.push(c._sb[k]);c._sb=[],c.__h.length&&i.push(c);break e}null!=c.componentWillUpdate&&c.componentWillUpdate(b,c.__s,g),null!=c.componentDidUpdate&&c.__h.push((function(){c.componentDidUpdate(d,h,v)}))}if(c.context=g,c.props=b,c.__v=t,c.__P=e,w=p.__r,P=0,"prototype"in j&&j.prototype.render){for(c.state=c.__s,c.__d=!1,w&&w(t),s=c.render(c.props,c.state,c.context),O=0;O<c._sb.length;O++)c.__h.push(c._sb[O]);c._sb=[]}else do{c.__d=!1,w&&w(t),s=c.render(c.props,c.state,c.context),c.state=c.__s}while(c.__d&&++P<25);c.state=c.__s,null!=c.getChildContext&&(r=E(E({},r),c.getChildContext())),f||null==c.getSnapshotBeforeUpdate||(v=c.getSnapshotBeforeUpdate(d,h)),N=null!=s&&s.type===T&&null==s.key?s.props.children:s,D(e,Array.isArray(N)?N:[N],t,n,r,l,o,i,a,u),c.base=t.__e,t.__h=null,c.__h.length&&i.push(c),m&&(c.__E=c.__=null),c.__e=!1}else null==o&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=function(e,t,n,r,l,o,i,a){var u,s,c,f=n.props,d=t.props,p=t.type,h=0;if("svg"===p&&(l=!0),null!=o)for(;h<o.length;h++)if((u=o[h])&&"setAttribute"in u==!!p&&(p?u.localName===p:3===u.nodeType)){e=u,o[h]=null;break}if(null==e){if(null===p)return document.createTextNode(d);e=l?document.createElementNS("http://www.w3.org/2000/svg",p):document.createElement(p,d.is&&d),o=null,a=!1}if(null===p)f===d||a&&e.data===d||(e.data=d);else{if(o=o&&_.call(e.childNodes),s=(f=n.props||C).dangerouslySetInnerHTML,c=d.dangerouslySetInnerHTML,!a){if(null!=o)for(f={},h=0;h<e.attributes.length;h++)f[e.attributes[h].name]=e.attributes[h].value;(c||s)&&(c&&(s&&c.__html==s.__html||c.__html===e.innerHTML)||(e.innerHTML=c&&c.__html||""))}if(function(e,t,n,r,l){var o;for(o in n)"children"===o||"key"===o||o in t||B(e,o,null,n[o],r);for(o in t)l&&"function"!=typeof t[o]||"children"===o||"key"===o||"value"===o||"checked"===o||n[o]===t[o]||B(e,o,t[o],n[o],r)}(e,d,f,l,a),c)t.__k=[];else if(h=t.props.children,D(e,Array.isArray(h)?h:[h],t,n,r,l&&"foreignObject"!==p,o,i,o?o[0]:n.__k&&x(n,0),a),null!=o)for(h=o.length;h--;)null!=o[h]&&A(o[h]);a||("value"in d&&void 0!==(h=d.value)&&(h!==e.value||"progress"===p&&!h||"option"===p&&h!==f.value)&&B(e,"value",h,f.value,!1),"checked"in d&&void 0!==(h=d.checked)&&h!==e.checked&&B(e,"checked",h,f.checked,!1))}return e}(n.__e,t,n,r,l,o,i,u);(s=p.diffed)&&s(t)}catch(M){t.__v=null,(u||null!=o)&&(t.__e=a,t.__h=!!u,o[o.indexOf(a)]=null),p.__e(M,t,n)}}function q(e,t){p.__c&&p.__c(t,e),e.some((function(t){try{e=t.__h,t.__h=[],e.some((function(e){e.call(t)}))}catch(n){p.__e(n,t.__v)}}))}function z(e,t,n){try{"function"==typeof e?e(t):e.current=t}catch(r){p.__e(r,n)}}function W(e,t,n){var r,l;if(p.unmount&&p.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||z(r,null,t)),null!=(r=e.__c)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(o){p.__e(o,t)}r.base=r.__P=null,e.__c=void 0}if(r=e.__k)for(l=0;l<r.length;l++)r[l]&&W(r[l],t,n||"function"!=typeof e.type);n||null==e.__e||A(e.__e),e.__=e.__e=e.__d=void 0}function Z(e,t,n){return this.constructor(e,n)}function J(e,t,n){var r,l,o;p.__&&p.__(e,t),l=(r="function"==typeof n)?null:n&&n.__k||t.__k,o=[],F(t,e=(!r&&n||t).__k=P(T,null,[e]),l||C,C,void 0!==t.ownerSVGElement,!r&&n?[n]:l?null:t.firstChild?_.call(t.childNodes):null,o,!r&&n?n:l?l.__e:t.firstChild,r),q(o,e)}_=k.slice,p={__e:function(e,t,n,r){for(var l,o,i;t=t.__;)if((l=t.__c)&&!l.__)try{if((o=l.constructor)&&null!=o.getDerivedStateFromError&&(l.setState(o.getDerivedStateFromError(e)),i=l.__d),null!=l.componentDidCatch&&(l.componentDidCatch(e,r||{}),i=l.__d),i)return l.__E=l}catch(a){e=a}throw e}},h=0,v=function(e){return null!=e&&void 0===e.constructor},S.prototype.setState=function(e,t){var n;n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=E({},this.state),"function"==typeof e&&(e=e(E({},n),this.props)),e&&E(n,e),null!=e&&this.__v&&(t&&this._sb.push(t),j(this))},S.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),j(this))},S.prototype.render=T,m=[],M.__r=0,y=0;var K=Object.freeze(Object.defineProperty({__proto__:null,Component:S,Fragment:T,cloneElement:function(e,t,n){var r,l,o,i=E({},e.props);for(o in t)"key"==o?r=t[o]:"ref"==o?l=t[o]:i[o]=t[o];return arguments.length>2&&(i.children=arguments.length>3?_.call(arguments,2):n),O(e.type,i,r||e.key,l||e.ref,null)},createContext:function(e,t){var n={__c:t="__cC"+y++,__:e,Consumer:function(e,t){return e.children(t)},Provider:function(e){var n,r;return this.getChildContext||(n=[],(r={})[t]=this,this.getChildContext=function(){return r},this.shouldComponentUpdate=function(e){this.props.value!==e.value&&n.some(j)},this.sub=function(e){n.push(e);var t=e.componentWillUnmount;e.componentWillUnmount=function(){n.splice(n.indexOf(e),1),t&&t.call(e)}}),e.children}};return n.Provider.__=n.Consumer.contextType=n},createElement:P,createRef:function(){return{current:null}},h:P,hydrate:function e(t,n){J(t,n,e)},get isValidElement(){return v},get options(){return p},render:J,toChildArray:function e(t,n){return n=n||[],null==t||"boolean"==typeof t||(Array.isArray(t)?t.some((function(t){e(t,n)})):n.push(t)),n}},Symbol.toStringTag,{value:"Module"})),V=function(e){var t=e.default;if("function"==typeof t){var n=function(){return t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach((function(t){var r=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(n,t,r.get?r:{enumerable:!0,get:function(){return e[t]}})})),n}(K);g.exports=function(){var e={470:function(e,t,n){var r,l,o=function(e){var t=this.tagName,n=this.__options.formatProps,l={};try{l=JSON.parse(e)}catch(o){console.error(r.Json,": <".concat(t.toLowerCase(),">"))}return n&&(l=n(l)),l},i=function(e){var t,n="<!DOCTYPE html>\n<html><body>".concat(e,"</body></html>");try{t=(new DOMParser).parseFromString(n,"text/html")}catch(r){}if(t)return t.body},a=function(e){var t={};if(null==e||!e.length)return t;for(var n=e.length-1;n>=0;n--){var r=e[n];t[r.name]=r.value}return t},u=function(e,t){var n=a(e),r={},l=!0,o=!1,i=void 0;try{for(var u,c=Object.keys(n)[Symbol.iterator]();!(l=(u=c.next()).done);l=!0){var f=u.value;-1!==(null==t?void 0:t.indexOf(f))&&(r[s(f)]=n[f])}}catch(d){o=!0,i=d}finally{try{l||null==c.return||c.return()}finally{if(o)throw i}}return r},s=function(e){var t=e.trim().replace(/[\s_]/g,"-");return t.charAt(0).toLowerCase()+t.slice(1).replace(/-([a-z])/g,(function(e){return e[1].toUpperCase()}))},c=function(e,t){return e.then((function(e){return function(e,t){var n,r;return"function"==typeof e?e:("object"==typeof e&&(n=e[(r=t,(r=r.toLowerCase()).replace(/(^\w|-\w)/g,(function(e){return e.replace(/-/,"").toUpperCase()})))]||void 0),n)}(e,t)}))},f=function(e){var t=e.toLowerCase();return t.indexOf("-")<0&&(t="component-"+t),t},d=function(){var e=this.__options.attributes,t=void 0===e?[]:e;return this.hasAttributes()?u(this.attributes,t):{}};n.r(t),n.d(t,{ErrorTypes:function(){return r},getAsyncComponent:function(){return c},getAttributeObject:function(){return a},getAttributeProps:function(){return u},getDocument:function(){return i},getElementAttributes:function(){return d},getElementTag:function(){return f},getPropKey:function(){return s},isPromise:function(){return _},parseJson:function(){return o},selfClosingTags:function(){return p}}),(l=r||(r={})).Promise="Error: Promises cannot be used for SSR",l.Missing="Error: Cannot find component in provided function",l.Json="Error: Invalid JSON string passed to component";var _=function(e){return e&&"function"==typeof e.then},p=["area","base","br","col","hr","img","input","link","meta","source","embed","param","track","wbr"]},710:function(e,t,n){var r=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(r=Object.getOwnPropertySymbols(e);l<r.length;l++)t.indexOf(r[l])<0&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(n[r[l]]=e[r[l]])}return n};Object.defineProperty(t,"__esModule",{value:!0}),t.parseHtml=void 0;var l=n(108),o=n(470);function i(e){var t,n=this;if(3===e.nodeType)return(null===(t=e.textContent)||void 0===t?void 0:t.trim())||"";if(1!==e.nodeType)return null;var a,u=String(e.nodeName).toLowerCase(),s=Array.from(e.childNodes),c=function(){return s.map((function(e){return i.call(n,e)}))},f=(0,o.getAttributeObject)(e.attributes),d=f.slot,_=r(f,["slot"]);return"script"===u?null:"body"===u?(0,l.h)(l.Fragment,{},c()):o.selfClosingTags.includes(u)?(0,l.h)(u,_):d?(this.__slots[(0,o.getPropKey)(d)]=(a=c()).every((function(e){return"string"==typeof e}))?a.join(" "):(0,l.h)(l.Fragment,{},a),null):(0,l.h)(u,_,c())}t.parseHtml=function(){var e=(0,o.getDocument)(this.innerHTML);if(e){var t=i.call(this,e);return function(){return t}}}},108:function(e){e.exports=V}},t={};function n(r){var l=t[r];if(void 0!==l)return l.exports;var o=t[r]={exports:{}};return e[r].call(o.exports,o,o.exports,n),o.exports}n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.r=function(e){("undefined"===typeof Symbol?"undefined":c(Symbol))<"u"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var r={};return function(){var e=function(){var e=this,t=v.getElementAttributes.call(this),n=this.getAttribute("props"),r=this.querySelector('[type="application/json"]'),l=v.parseJson.call(this,n||(null==r?void 0:r.innerHTML)||"{}");null==r||r.remove();var o=this.__children;this.__mounted||this.hasAttribute("server")||(o=(0,h.h)(m.parseHtml.call(this),{})),this.__properties=Object.assign(Object.assign(Object.assign({},this.__slots),l),t),this.__children=o||[],this.removeAttribute("server"),this.innerHTML="";var i=this.__component(),a=function(t){return _.call(e,t)};(0,v.isPromise)(i)?(0,v.getAsyncComponent)(i,this.tagName).then(a):a(i)},t=function(e,t,n){if(this.__mounted){n=null==n?void 0:n;var r=this.__properties;"props"===e?r=Object.assign(Object.assign({},r),v.parseJson.call(this,n)):r[(0,v.getPropKey)(e)]=n,this.__properties=r,(0,h.render)((0,h.h)(this.__instance,Object.assign(Object.assign({},r),{parent:this,children:this.__children})),this)}},a=function(){(0,h.render)(null,this)},_=function(e){var t=this.tagName,n=this.__options.wrapComponent;if(e){n&&(e=n(e)),this.__instance=e,this.__mounted=!0;var r=Object.assign(Object.assign({},this.__properties),{parent:this,children:this.__children});(0,h.render)((0,h.h)(e,r),this)}else console.error(v.ErrorTypes.Missing,": <".concat(t.toLowerCase(),">"))},p=r;Object.defineProperty(p,"__esModule",{value:!0}),p.define=void 0;var h=n(108),v=n(470),m=n(710);p.define=function(n,r){var _=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},p=_.wrapComponent,m=!1,b=(0,v.getElementTag)(n);if(m){var y=r();if((0,v.isPromise)(y))throw new Error("".concat(v.ErrorTypes.Promise," : <").concat(n,">"));var g=y;return p&&(g=p(y)),function(e){return(0,h.h)(b,{server:!0},[(0,h.h)("script",{type:"application/json",dangerouslySetInnerHTML:{__html:JSON.stringify(e)}}),(0,h.h)(g,e)])}}customElements.define(b,function(n){var r,_=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},p=_.attributes,h=void 0===p?[]:p;if(("undefined"===typeof Reflect?"undefined":c(Reflect))<"u"&&Reflect.construct){var v=function(){var e=Reflect.construct(HTMLElement,[],v);return e.__mounted=!1,e.__component=n,e.__properties={},e.__slots={},e.__children=void 0,e.__options=_,e};return v.observedAttributes=["props"].concat(s(h)),v.prototype=Object.create(HTMLElement.prototype),v.prototype.constructor=v,v.prototype.connectedCallback=e,v.prototype.attributeChangedCallback=t,v.prototype.disconnectedCallback=a,v}return r=function(r){i(f,r);var c=d(f);function f(){var e;return l(this,f),(e=c.call.apply(c,[this].concat(Array.prototype.slice.call(arguments)))).__mounted=!1,e.__component=n,e.__properties={},e.__slots={},e.__children=void 0,e.__options=_,u(e)}return o(f,[{key:"connectedCallback",value:function(){e.call(this)}},{key:"attributeChangedCallback",value:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];var l;(l=t).call.apply(l,[this].concat(s(n)))}},{key:"disconnectedCallback",value:function(){a.call(this)}}]),f}(f(HTMLElement)),r.observedAttributes=["props"].concat(s(h)),r}(r,_))}}(),r}();var $,G=customElements,Q=HTMLElement,X=Q.prototype,Y=X.hasAttribute,ee=X.setAttribute,te=X.removeAttribute,ne=X.getAttribute,re=Reflect.apply,le=Reflect.setPrototypeOf,oe=Reflect.construct,ie=Object.defineProperties,ae=CustomElementRegistry.prototype,ue=ae.get,se=ae.define,ce=ae.whenDefined,fe=Object.getOwnPropertyDescriptor(Node.prototype,"isConnected").get;function de(e,t){return new Set(s(e.observedAttributes).filter((function(e){return!t.observedAttributes.has(e)})))}function _e(e,t,n){var r=n.observedAttributes,l=n.attributeChangedCallback;if(0!==r.size&&l){var o=de(t,n);0!==o.size&&ie(e,{setAttribute:{value:function(e,t){if(o.has(e)){var n=ne.call(this,e);ee.call(this,e,t),l.call(this,e,n,function(e){try{return String(e)}catch(t){}return""}(t))}else ee.call(this,e,t)},writable:!0,enumerable:!0,configurable:!0},removeAttribute:{value:function(e){if(o.has(e)){var t=ne.call(this,e);te.call(this,e),l.call(this,e,t,null)}else te.call(this,e)},writable:!0,enumerable:!0,configurable:!0}})}}function pe(e,t){var n;return n=function(n){i(s,n);var a=d(s);function s(n,o){var i;return l(this,s),i=a.call(this),n?u(i,(Ee(r(i),e,n,o),r(i))):((n=ye.get(t))?Ee(r(i),e,n):(ve.set(r(i),e),le(r(i),Pe.prototype)),u(i))}return o(s,[{key:"connectedCallback",value:function(){var e,n=he.get(this);if(n)null==(e=n.connectedCallback)||e.call(this);else{var r=we.get(t);r||we.set(t,r=new Set),r.add(this)}}},{key:"disconnectedCallback",value:function(){var e,n=he.get(this);if(n)null==(e=n.disconnectedCallback)||e.call(this);else{var r=we.get(t);r&&r.delete(this)}}},{key:"adoptedCallback",value:function(){var e,t=he.get(this);null==(e=null==t?void 0:t.adoptedCallback)||e.call(this)}},{key:"formAssociatedCallback",value:function(){var e,t=he.get(this);null==(e=null==t?void 0:t.formAssociatedCallback)||e.apply(this,arguments)}},{key:"formDisabledCallback",value:function(){var e,t=he.get(this);null==(e=null==t?void 0:t.formDisabledCallback)||e.apply(this,arguments)}},{key:"formResetCallback",value:function(){var e,t=he.get(this);null==(e=null==t?void 0:t.formResetCallback)||e.apply(this,arguments)}},{key:"formStateRestoreCallback",value:function(){var e,t=he.get(this);null==(e=null==t?void 0:t.formStateRestoreCallback)||e.apply(this,arguments)}},{key:"attributeChangedCallback",value:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];var l,o=he.get(this);(e===o||(null==o?void 0:o.observedAttributes.has(n[0])))&&(null==(l=o.attributeChangedCallback)||l.apply(this,n))}}]),s}(Q),n.observedAttributes=e.observedAttributes,n}var he=new WeakMap,ve=new WeakMap,me=new WeakMap,be=new Map,ye=new Map,ge=new Map,Ce=new Map,ke=new Map,we=new Map;function Ee(e,t,n,r){var l;le(e,n.LatestCtor.prototype),he.set(e,n),n!==t&&_e(e,t,n),$=e,oe(n.LatestCtor,r||[]);var o=n.observedAttributes,i=n.attributeChangedCallback;if(o.size>0&&i){var a=de(t,n);a.size>0&&a.forEach((function(t){if(Y.call(e,t)){var n=ne.call(e,t);i.call(e,t,null,n)}}))}re(fe,e,[])&&(null==(l=n.disconnectedCallback)||l.call(e))}function Ae(e){if(!e||!e.prototype||"object"!=typeof e.prototype)throw new TypeError("The referenced constructor is not a constructor.");var t=me.get(e);return t||(t=function(e){var t=e.prototype,n=t.connectedCallback,r=t.disconnectedCallback,l=t.adoptedCallback,o=t.attributeChangedCallback;return{LatestCtor:e,connectedCallback:n,disconnectedCallback:r,adoptedCallback:l,formAssociatedCallback:t.formAssociatedCallback,formDisabledCallback:t.formDisabledCallback,formResetCallback:t.formResetCallback,formStateRestoreCallback:t.formStateRestoreCallback,attributeChangedCallback:o,observedAttributes:new Set(e.observedAttributes||[])}}(e),me.set(e,t)),t}var Pe=function e(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];if(!(a(this,e)?this.constructor:void 0))throw new TypeError("Failed to construct 'HTMLElement': Please use the 'new' operator, this DOM object constructor cannot be called as a function.");if((a(this,e)?this.constructor:void 0)===Pe)throw new TypeError("Illegal constructor");var l=$;if(l)return $=void 0,l;var o=this,i=o.constructor,u=ge.get(i);if(!u||!u.PivotCtor)throw new TypeError("Illegal constructor");return new u.PivotCtor(u,n)};Pe.prototype=Q.prototype,Object.assign(CustomElementRegistry.prototype,{get:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r;if(this!==G)throw new TypeError("Illegal invocation");var l=t[0];return re(ue,this,t)&&(null==(r=ye.get(l))?void 0:r.LatestCtor)},define:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r;if(this!==G)throw new TypeError("Illegal invocation");var l=t[0],o=t[1],i=t[2];if(i&&i.extends)throw new DOMException("NotSupportedError: ");var a=re(ue,this,[l]);if(a&&a!==(null==(r=ye.get(l))?void 0:r.PivotCtor))throw new DOMException("Failed to execute 'define' on 'CustomElementRegistry': the name \"".concat(l,'" has already been used with this registry'));var u=Ae(o);if(ge.get(o))throw new DOMException("Failed to execute 'define' on 'CustomElementRegistry': this constructor has already been used with this registry");ye.set(l,u),ge.set(o,u),(a=be.get(l))||(a=pe(u,l),be.set(l,a),re(se,this,[l,a])),u.PivotCtor=a;var s=we.get(l);s&&(we.delete(l),s.forEach((function(e){var t=ve.get(e);t&&(ve.delete(e),Ee(e,t,u))})));var c=ke.get(l);c&&c(o)},whenDefined:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];if(this!==G)throw new TypeError("Illegal invocation");var r=t[0];return re(ce,this,t).then((function(){var e=Ce.get(r);if(!e){var t,n=ye.get(r);if(n)return Promise.resolve(n.LatestCtor);e=new Promise((function(e){t=e})),Ce.set(r,e),ke.set(r,t)}return e}))},constructor:Pe}),window.HTMLElement=Pe;var Oe=0;function Te(e,t,n,r,l){var o,i,a={};for(i in t)"ref"==i?o=t[i]:a[i]=t[i];var u={type:e,props:a,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--Oe,__source:l,__self:r};if("function"==typeof e&&(o=e.defaultProps))for(i in o)void 0===a[i]&&(a[i]=o[i]);return p.vnode&&p.vnode(u),u}var Se=function(e){var t=e.align,n=void 0===t?"center":t,r=e.disabled,l=void 0===r?void 0:r,o=e.htmlid,i=void 0===o?void 0:o,a=e.label,u=void 0===a?"":a,s=e.leadingIcon,c=void 0===s?null:s,f=e.size,d=void 0===f?"default":f,_=e.theme,p=void 0===_?"default":_,h=e.trailingIcon,v=void 0===h?null:h,m=e.type,b=void 0===m?"button":m;return Te(T,{children:Te("button",{className:"BasicButton BasicButton--".concat(p," BasicButton--size-").concat(d," BasicButton--align-").concat(n),type:b,id:i,disabled:l,size:d,children:[c&&Te("span",{className:"leadingIcon",children:c}),u,v&&Te("span",{className:"trailingIcon",children:v})]})})};g.exports.define("atlas-basic-button",(function(){return Se}),{attributes:["align","disabled","htmlid","label","size","theme","type"]})},1395:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{AtlasAlert:function(){return j},AtlasBanner:function(){return x},AtlasPopover:function(){return S},BasicButton:function(){return p},DialogBox:function(){return y},Drawer:function(){return T},IconButton:function(){return b},alertTypes:function(){return N},buttonVariants:function(){return _}});var r=n(3903).Z,l=n(199).Z,o=n(9178).default,i=l(n(2784)),a=r(n(3980)),u=n(4874);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,l,o=[],i=!0,a=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);i=!0);}catch(u){a=!0,l=u}finally{try{i||null==n.return||n.return()}finally{if(a)throw l}}return o}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return d(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var _=["default","secondary","tertiary","ghost","destructive"];function p(e){var t=e.label,r=e.htmlId,o=e.onClick,a=e.align,u=void 0===a?"center":a,s=e.disabled,f=void 0===s?void 0:s,d=e.htmlType,_=void 0===d?"button":d,p=e.leadingIcon,h=void 0===p?null:p,v=e.size,m=void 0===v?"default":v,b=e.trailingIcon,y=void 0===b?null:b,g=e.type,C=void 0===g?"default":g;null!==globalThis&&void 0!==globalThis&&globalThis.customElements&&Promise.resolve().then((function(){return l(n(9437))}));var k={};return f&&(k.disabled=f),i.default.createElement("atlas-basic-button",c({key:"".concat(t,"-").concat(r,"-").concat(o,"-").concat(u,"-").concat(f,"-").concat(_,"-").concat(h,"-").concat(m,"-").concat(y,"-").concat(C),align:u,htmlid:r,label:t,size:m,theme:C,type:_,onClick:o},k),h&&i.default.createElement("span",{slot:"leadingIcon"},h),y&&i.default.createElement("span",{slot:"trailingIcon"},y))}p.propTypes={align:a.default.oneOf(["left","center","right"]),disabled:a.default.bool,label:a.default.string.isRequired,htmlType:a.default.oneOf(["button","submit","reset"]),htmlId:a.default.string,type:a.default.oneOf(_),onClick:a.default.func,size:a.default.oneOf(["default","small","mini","full-width"]),trailingIcon:a.default.element,leadingIcon:a.default.element};var h,v={exports:{}};h=v,function(){var e={}.hasOwnProperty;function t(){for(var n=[],r=0;r<arguments.length;r++){var l=arguments[r];if(l){var i="undefined"===typeof l?"undefined":o(l);if("string"===i||"number"===i)n.push(l);else if(Array.isArray(l)){if(l.length){var a=t.apply(null,l);a&&n.push(a)}}else if("object"===i){if(l.toString!==Object.prototype.toString&&!l.toString.toString().includes("[native code]")){n.push(l.toString());continue}for(var u in l)e.call(l,u)&&l[u]&&n.push(u)}}}return n.join(" ")}h.exports?(t.default=t,h.exports=t):window.classNames=t}();var m=v.exports;function b(e){var t=e.faClass,n=e.onClick,r=e.isActive,l=m("fa",t),o=m("IconButton",{"is-active":r});return i.default.createElement("button",{className:o,onClick:n},i.default.createElement("i",{className:l}))}function y(e){var t=e.title,n=e.subtitle,r=e.children,l=e.visible,o=void 0!==l&&l,a=e.onCancel,u=e.onClose,s=(0,i.useRef)(null);return(0,i.useEffect)((function(){o&&s.current.showModal()}),[o]),i.default.createElement("dialog",{className:"ModalDialog",ref:s,onCancel:a,onClose:u},i.default.createElement(g,{title:t,subtitle:n,handleClose:function(){return s.current.close()}}),i.default.createElement("section",{className:"ModalDialog__body"},r),i.default.createElement(C,null,i.default.createElement(p,{type:"ghost",label:"Cancel",onClick:function(){return s.current.close()},htmlId:"dialogBoxCancel"}),i.default.createElement(p,{label:"Submit",htmlType:"submit",htmlForm:"aform"})))}function g(e){var t=e.title,n=e.subtitle,r=e.handleClose;return i.default.createElement("header",{className:"ModalDialog__header"},i.default.createElement("div",null,i.default.createElement("h1",{className:"ModalDialog__title"},t),i.default.createElement("p",{className:"ModalDialog__subtitle"},n)),i.default.createElement(b,{faClass:"fa-times",onClick:r}))}function C(e){return i.default.createElement("footer",{className:"ModalDialog__footer"},e.children)}b.propTypes={faClass:a.default.string.isRequired,onClick:a.default.func,isActive:a.default.bool},y.propTypes={title:a.default.string.isRequired,subtitle:a.default.string.isRequired,children:a.default.element,visible:a.default.bool,onCancel:a.default.func,onClose:a.default.func,customHeader:a.default.element,customFooter:a.default.element},g.propTypes={title:a.default.string.isRequired,subtitle:a.default.string.isRequired,handleClose:a.default.func.isRequired},C.propTypes={children:a.default.element};var k=function(e){var t=e.label,n=void 0===t?"Back":t,r=e.onClick,l=void 0===r?function(){}:r,o=m("Drawer__back");return i.default.createElement("div",{className:o},i.default.createElement(p,{label:n,type:"ghost",onClick:l,leadingIcon:i.default.createElement("i",{className:"fa fa-chevron-left"})}))};k.propTypes={label:a.default.string,onClick:a.default.func};var w=function(e){var t=e.children,n=m("Drawer__actions");return i.default.createElement("div",{className:n},t)};w.propTypes={children:a.default.node};var E=function(e){var t=e.children,n=m("Drawer__title");return i.default.createElement("h4",{className:n},t)};E.propTypes={children:a.default.node};var A=function(e){var t=e.children,n=m("Drawer__header");return i.default.createElement("div",{className:n},t)};A.propTypes={children:a.default.node};var P=function(e){var t=e.children,n=m("Drawer__body");return i.default.createElement("div",{className:n},t)};P.propTypes={children:a.default.node};var O=function(e){var t=e.children,n=m("Drawer__footer");return i.default.createElement("div",{className:n},t)};function T(e){var t=e.position,n=e.children,r=e.open,l=void 0!==r&&r,o=m("Drawer","Drawer--".concat(t));return l?i.default.createElement("div",{role:"dialog","aria-modal":"true",className:o},n):null}function S(e){var t=e.description,n=e.title,r=e.onReadMoreClick,l=e.placement,o=void 0===l?"top":l,a=e.children,s=e.simple,d=void 0!==s&&s,_=e.open,p=void 0!==_&&_,h=e.referenceElement,v=e.offset,b=void 0===v?12:v,y=f((0,i.useState)(null),2),g=y[0],C=y[1],k=f((0,i.useState)(null),2),w=k[0],E=k[1],A=(0,u.usePopper)(h,g,{placement:o,modifiers:[{name:"offset",options:{offset:[0,b]}},{name:"arrow",options:{element:w}}]}),P=A.styles,O=A.attributes,T=m("AtlasPopover",{"AtlasPopover--open":p,"AtlasPopover--simple":d});return i.default.createElement(i.default.Fragment,null,p&&i.default.createElement("div",c({className:T,ref:C,style:P.popper},O.popper),i.default.createElement("header",{className:"AtlasPopover__header"},n),i.default.createElement("div",{className:"AtlasPopover__body"},i.default.createElement("div",{className:"AtlasPopover__description"},t),r&&i.default.createElement("button",{className:"AtlasPopover__action",onClick:r},"Read more"),a&&i.default.createElement("div",{className:"AtlasPopover__meta"},a)),i.default.createElement("div",{className:"AtlasPopover__arrow",ref:E,style:P.arrow})))}O.propTypes={children:a.default.node},T.Header=A,T.Body=P,T.Footer=O,T.Title=E,T.Actions=w,T.Back=k,T.propTypes={position:a.default.oneOf(["left","right","top","bottom"]).isRequired,open:a.default.bool,children:a.default.node},S.propTypes={placement:a.default.string,description:a.default.string.isRequired,title:a.default.string,onReadMoreClick:a.default.func,children:a.default.any,simple:a.default.bool,open:a.default.bool,referenceElement:a.default.node,offset:a.default.number};function x(e){var t,n=e.type,r=void 0===n?"information":n,l=e.isDismissable,o=e.title,a=e.label,u=void 0===a?null:a,c=e.handleClick,d=e.timeout,_=e.leadingIcon,h=e.trailingIcon,v=e.handleClose,b=f((0,i.useState)(!0),2),y=b[0],g=b[1],C=m("AtlasBanner",(s(t={},"AtlasBanner--".concat(r),!0),s(t,"AtlasBanner--dismissable",l),s(t,"AtlasBanner--button",u),t));(0,i.useEffect)((function(){d&&setTimeout((function(){g(!1)}),d)}),[]);if(y)return i.default.createElement("div",{className:C},i.default.createElement("div",{className:"AtlasBanner__content"},_,o&&i.default.createElement("div",{className:"AtlasBanner__title"},o),u&&i.default.createElement(p,{label:u,size:"mini",onClick:c}),l&&i.default.createElement("button",{"aria-label":"close",onClick:function(){v(),g(!1)}},h)))}x.propTypes={type:a.default.oneOf(["information","warning","destructive","success"]),isDismissable:a.default.bool,title:a.default.string.isRequired,label:a.default.string,handleClick:a.default.func,handleClose:a.default.func,timeout:a.default.number,leadingIcon:a.default.element.isRequired,trailingIcon:a.default.element};var N=["default","information","success","warning","danger"];function j(e){var t=e.type,n=void 0===t?"default":t,r=e.title,l=void 0===r?null:r,o=e.label,a=void 0===o?null:o,u=e.handleClick,c=e.content,f=e.icon,d=m("AtlasAlert",s({},"AtlasAlert--".concat(n),!0));return i.default.createElement("div",{className:d},f,i.default.createElement("div",{className:"AtlasAlert__body"},l&&i.default.createElement("div",{className:"AtlasAlert__title"},l),i.default.createElement("div",{className:"AtlasAlert__content"},c),a&&i.default.createElement(p,{className:"AtlasAlert__button",label:a,size:"mini",onClick:u})))}j.propTypes={type:a.default.oneOf(N),title:a.default.string,label:a.default.string,handleClick:a.default.func,content:a.default.string.isRequired,icon:a.default.element.isRequired}},5854:function(e){e.exports={Page:"PageContent_Page__KQX_Q",PageContent:"PageContent_PageContent__Hwrl_",PageHeading:"PageContent_PageHeading__H2sy3",PageSubcopy:"PageContent_PageSubcopy__Ux2Ic"}}}]);