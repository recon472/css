(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7edf1c4f"],{"0ed7":function(t,n,e){e("d3b7"),e("25f0");var o=e("e3ea");t.exports=function(t,n){var e=t.$refs[n].innerHTML.toString();return o("<root>"+e+"</root>",{collapseContent:!0})}},2579:function(t,n){function e(t,n={}){function e(){return l()||f()||a()||u()}function o(){return h(/\s*/),l(!0)||a()||s()||r(!1)}function c(){const t=i(),n=[];let e,c=o();while(c){if("Element"===c.node.type){if(e)throw new Error("Found multiple root nodes");e=c.node}c.excluded||n.push(c.node),c=o()}if(!e)throw new Error("Failed to parse XML");return{declaration:t?t.node:null,root:e,children:n}}function i(){return r(!0)}function r(t){const e=h(t?/^<\?(xml)\s*/:/^<\?([\w-:.]+)\s*/);if(!e)return;const o={name:e[1],type:"ProcessingInstruction",attributes:{}};while(!m()&&!v("?>")){const t=d();if(!t)return o;o.attributes[t.name]=t.value}return h(/\?>/),{excluded:!t&&!1===n.filter(o),node:o}}function l(t){const o=h(/^<([\w-:.]+)\s*/);if(!o)return;const c={type:"Element",name:o[1],attributes:{},children:[]};while(!(m()||v(">")||v("?>")||v("/>"))){const t=d();if(!t)return c;c.attributes[t.name]=t.value}const i=!t&&!1===n.filter(c);if(h(/^\s*\/>/))return c.children=null,{excluded:i,node:c};if(h(/\??>/),!i){let t=e();while(t)t.excluded||c.children.push(t.node),t=e()}return h(/^<\/[\w-:.]+>/),{excluded:i,node:c}}function s(){const t=h(/^<!DOCTYPE\s+[^>]*>/);if(t){const e={type:"DocumentType",content:t[0]};return{excluded:!1===n.filter(e),node:e}}}function u(){const t=h(/^<!\[CDATA\[[^\]\]>]*]]>/);if(t){const e={type:"CDATA",content:t[0]};return{excluded:!1===n.filter(e),node:e}}}function a(){const t=h(/^<!--[\s\S]*?-->/);if(t){const e={type:"Comment",content:t[0]};return{excluded:!1===n.filter(e),node:e}}}function f(){const t=h(/^([^<]+)/);if(t){const e={type:"Text",content:t[1]};return{excluded:!1===n.filter(e),node:e}}}function d(){const t=h(/([\w:-]+)\s*=\s*("[^"]*"|'[^']*'|\w+)\s*/);if(t)return{name:t[1],value:p(t[2])}}function p(t){return t.replace(/^['"]|['"]$/g,"")}function h(n){const e=t.match(n);if(e)return t=t.slice(e[0].length),e}function m(){return 0===t.length}function v(n){return 0===t.indexOf(n)}return n.filter=n.filter||(()=>!0),t=t.trim(),c()}t.exports=e},"5ae6":function(t,n,e){"use strict";e.r(n);var o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"v-stack h-stretch"},[e("h6",{staticClass:"text-left"},[t._v("Breadcrumb")]),e("div",{staticClass:"card border light"},[e("div",{ref:"code1",staticClass:"content"},[t._m(0)])]),e("prism",{attrs:{language:"html"}},[t._v(t._s(t.code1))])],1)},c=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"breadcrumb"},[e("div",[t._v("Home")]),e("div",[t._v("Products")]),e("div",[t._v("Devices")]),e("div",{staticClass:"disabled"},[t._v("Phones")])])}],i=e("0ed7"),r={data:function(){return{code1:""}},mounted:function(){this.code1=i(this,"code1")}},l=r,s=e("2877"),u=Object(s["a"])(l,o,c,!1,null,null,null);n["default"]=u.exports},e3ea:function(t,n,e){function o(t){let n;for(t.content+=t.options.lineSeparator,n=0;n<t.level;n++)t.content+=t.options.indentation}function c(t,n){t.content+=n}function i(t,n,e){if("string"===typeof t.content)r(t,n,e);else if("Element"===t.type)l(t,n,e);else{if("ProcessingInstruction"!==t.type)throw new Error("Unknown node type: "+t.type);u(t,n,e)}}function r(t,n,e){e||(t.content=t.content.trim()),t.content.length>0&&(!e&&n.content.length>0&&o(n),c(n,t.content))}function l(t,n,e){if(!e&&n.content.length>0&&o(n),c(n,"<"+t.name),s(n,t.attributes),null===t.children){const t=n.options.whiteSpaceAtEndOfSelfclosingTag?" />":"/>";c(n,t)}else if(0===t.children.length)c(n,"></"+t.name+">");else{c(n,">"),n.level++;let r="preserve"===t.attributes["xml:space"];if(!r&&n.options.collapseContent){const n=t.children.some((function(t){return"Text"===t.type&&""!==t.content.trim()}));n&&(r=!0)}t.children.forEach((function(t){i(t,n,e||r,n.options)})),n.level--,e||r||o(n),c(n,"</"+t.name+">")}}function s(t,n){Object.keys(n).forEach((function(e){const o=n[e].replace(/"/g,"&quot;");c(t," "+e+'="'+o+'"')}))}function u(t,n){n.content.length>0&&o(n),c(n,"<?"+t.name),s(n,t.attributes),c(n,"?>")}function a(t,n={}){n.indentation=n.indentation||"    ",n.collapseContent=!0===n.collapseContent,n.lineSeparator=n.lineSeparator||"\r\n",n.whiteSpaceAtEndOfSelfclosingTag=!!n.whiteSpaceAtEndOfSelfclosingTag;const o=e("2579"),c=o(t,{filter:n.filter}),r={content:"",level:0,options:n};return c.declaration&&u(c.declaration,r),c.children.forEach((function(t){i(t,r,!1)})),r.content}t.exports=a}}]);
//# sourceMappingURL=chunk-7edf1c4f.1eaa715a.js.map