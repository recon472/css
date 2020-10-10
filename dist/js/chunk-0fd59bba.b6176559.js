(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0fd59bba"],{2579:function(t,n){function e(t,n={}){function e(){return s()||d()||u()||a()}function o(){return p(/\s*/),s(!0)||u()||l()||r(!1)}function i(){const t=c(),n=[];let e,i=o();while(i){if("Element"===i.node.type){if(e)throw new Error("Found multiple root nodes");e=i.node}i.excluded||n.push(i.node),i=o()}if(!e)throw new Error("Failed to parse XML");return{declaration:t?t.node:null,root:e,children:n}}function c(){return r(!0)}function r(t){const e=p(t?/^<\?(xml)\s*/:/^<\?([\w-:.]+)\s*/);if(!e)return;const o={name:e[1],type:"ProcessingInstruction",attributes:{}};while(!m()&&!g("?>")){const t=f();if(!t)return o;o.attributes[t.name]=t.value}return p(/\?>/),{excluded:!t&&!1===n.filter(o),node:o}}function s(t){const o=p(/^<([\w-:.]+)\s*/);if(!o)return;const i={type:"Element",name:o[1],attributes:{},children:[]};while(!(m()||g(">")||g("?>")||g("/>"))){const t=f();if(!t)return i;i.attributes[t.name]=t.value}const c=!t&&!1===n.filter(i);if(p(/^\s*\/>/))return i.children=null,{excluded:c,node:i};if(p(/\??>/),!c){let t=e();while(t)t.excluded||i.children.push(t.node),t=e()}return p(/^<\/[\w-:.]+>/),{excluded:c,node:i}}function l(){const t=p(/^<!DOCTYPE\s+[^>]*>/);if(t){const e={type:"DocumentType",content:t[0]};return{excluded:!1===n.filter(e),node:e}}}function a(){const t=p(/^<!\[CDATA\[[^\]\]>]*]]>/);if(t){const e={type:"CDATA",content:t[0]};return{excluded:!1===n.filter(e),node:e}}}function u(){const t=p(/^<!--[\s\S]*?-->/);if(t){const e={type:"Comment",content:t[0]};return{excluded:!1===n.filter(e),node:e}}}function d(){const t=p(/^([^<]+)/);if(t){const e={type:"Text",content:t[1]};return{excluded:!1===n.filter(e),node:e}}}function f(){const t=p(/([\w:-]+)\s*=\s*("[^"]*"|'[^']*'|\w+)\s*/);if(t)return{name:t[1],value:h(t[2])}}function h(t){return t.replace(/^['"]|['"]$/g,"")}function p(n){const e=t.match(n);if(e)return t=t.slice(e[0].length),e}function m(){return 0===t.length}function g(n){return 0===t.indexOf(n)}return n.filter=n.filter||(()=>!0),t=t.trim(),i()}t.exports=e},"4be9":function(t,n,e){"use strict";e.r(n);var o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"v-stack"},[e("h6",{staticClass:"text-left"},[t._v("Button")]),e("div",{staticClass:"card border light"},[e("div",{staticClass:"content"},[e("div",{ref:"code1",staticClass:"h-stack gap-3"},[e("button",[t._v("Normal")]),e("button",{staticClass:"flat"},[t._v("Flat")]),e("button",{staticClass:"dynamic"},[t._v("Dynamic Size")]),t._m(0),e("button",{staticClass:"circle"},[t._v("Circle")]),e("button",{staticClass:"text"},[t._v("Text")])])])]),e("prism",{attrs:{language:"html"}},[t._v(t._s(t.code1))]),e("div",{staticClass:"card border light"},[e("div",{staticClass:"content"},[e("div",{ref:"code2",staticClass:"h-stack gap-3"},[e("button",{staticClass:"primary"},[t._v("Primary")]),e("button",{staticClass:"secondary"},[t._v("Secondary")]),e("button",{staticClass:"warning"},[t._v("Warning")]),e("button",{staticClass:"error"},[t._v("Error")])])])]),e("prism",{attrs:{language:"html"}},[t._v(t._s(t.code2))]),e("div",{staticClass:"card border light"},[e("div",{staticClass:"content"},[e("div",{ref:"code3",staticClass:"h-stack gap-3"},[e("button",{staticClass:"light"},[t._v("Light")]),e("button",{staticClass:"dark"},[t._v("Dark")])])])]),e("prism",{attrs:{language:"html"}},[t._v(t._s(t.code3))])],1)},i=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("button",{staticClass:"icon"},[e("i",{staticClass:"fas fa-icons"})])}],c=(e("d3b7"),e("25f0"),e("e3ea")),r={data:function(){return{code1:"",code2:"",code3:""}},methods:{htmlToString:function(t){return this.$refs[t].innerHTML.toString()}},mounted:function(){this.code1=c("<root>"+this.htmlToString("code1")+"</root>",{collapseContent:!0}),this.code2=c("<root>"+this.htmlToString("code2")+"</root>",{collapseContent:!0}),this.code3=c("<root>"+this.htmlToString("code3")+"</root>",{collapseContent:!0})}},s=r,l=e("2877"),a=Object(l["a"])(s,o,i,!1,null,null,null);n["default"]=a.exports},e3ea:function(t,n,e){function o(t){let n;for(t.content+=t.options.lineSeparator,n=0;n<t.level;n++)t.content+=t.options.indentation}function i(t,n){t.content+=n}function c(t,n,e){if("string"===typeof t.content)r(t,n,e);else if("Element"===t.type)s(t,n,e);else{if("ProcessingInstruction"!==t.type)throw new Error("Unknown node type: "+t.type);a(t,n,e)}}function r(t,n,e){e||(t.content=t.content.trim()),t.content.length>0&&(!e&&n.content.length>0&&o(n),i(n,t.content))}function s(t,n,e){if(!e&&n.content.length>0&&o(n),i(n,"<"+t.name),l(n,t.attributes),null===t.children){const t=n.options.whiteSpaceAtEndOfSelfclosingTag?" />":"/>";i(n,t)}else if(0===t.children.length)i(n,"></"+t.name+">");else{i(n,">"),n.level++;let r="preserve"===t.attributes["xml:space"];if(!r&&n.options.collapseContent){const n=t.children.some((function(t){return"Text"===t.type&&""!==t.content.trim()}));n&&(r=!0)}t.children.forEach((function(t){c(t,n,e||r,n.options)})),n.level--,e||r||o(n),i(n,"</"+t.name+">")}}function l(t,n){Object.keys(n).forEach((function(e){const o=n[e].replace(/"/g,"&quot;");i(t," "+e+'="'+o+'"')}))}function a(t,n){n.content.length>0&&o(n),i(n,"<?"+t.name),l(n,t.attributes),i(n,"?>")}function u(t,n={}){n.indentation=n.indentation||"    ",n.collapseContent=!0===n.collapseContent,n.lineSeparator=n.lineSeparator||"\r\n",n.whiteSpaceAtEndOfSelfclosingTag=!!n.whiteSpaceAtEndOfSelfclosingTag;const o=e("2579"),i=o(t,{filter:n.filter}),r={content:"",level:0,options:n};return i.declaration&&a(i.declaration,r),i.children.forEach((function(t){c(t,r,!1)})),r.content}t.exports=u}}]);
//# sourceMappingURL=chunk-0fd59bba.b6176559.js.map