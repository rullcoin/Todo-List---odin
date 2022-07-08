(()=>{"use strict";var e={28:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(81),o=n.n(r),i=n(645),a=n.n(i)()(o());a.push([e.id,"body {\n}\n\nheader {\n    width: 100%;\n}\n\n.container {\n    display: flex;\n    height: 350px;\n}\n\n.menu-items {\n    display: flex;\n    flex-direction: column;\n\n}\n\n.add-project-container {\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n}\n\n.projects {\n    height: 300px;\n    overflow-y: auto;\n}\n\n#project-name {\ncursor: pointer;\n}\n\n.input-container-hidden {\n    visibility: hidden;\n}",""]);const c=a},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(a[d]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);r&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var i={},a=[],c=0;c<e.length;c++){var d=e[c],s=r.base?d[0]+r.base:d[0],l=i[s]||0,u="".concat(s," ").concat(l);i[s]=l+1;var p=n(u),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var f=o(m,r);r.byIndex=c,t.splice(c,0,{identifier:u,updater:f,references:1})}a.push(u)}return a}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var c=n(i[a]);t[c].references--}for(var d=r(e,o),s=0;s<i.length;s++){var l=n(i[s]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}i=d}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,exports:{}};return e[r](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),r=n(795),o=n.n(r),i=n(569),a=n.n(i),c=n(565),d=n.n(c),s=n(216),l=n.n(s),u=n(589),p=n.n(u),m=n(28),f={};f.styleTagTransform=p(),f.setAttributes=d(),f.insert=a().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=l(),t()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;const v=(()=>{let e=[],t=document.getElementById("content"),n=(e,t,n,r)=>({title:e,description:t,dueDate:n,priority:r}),r=t=>{let n=t.target.parentNode.getAttribute("project-id"),r=t.target.parentNode.getAttribute("div-id");t.target.parentNode.remove(),e[n].projectTodoList.splice(r,1)},o=n=>{let r=e[n];t.textContent="",a(n);for(let e=0;e<r.projectTodoList.length;e++){let o=document.createElement("div");o.classList="task-container",o.setAttribute("div-id",e),o.setAttribute("project-id",n);let a=document.createElement("h1"),c=document.createElement("p");a.textContent=r.projectTodoList[e].title,c.textContent=r.projectTodoList[e].description,o.append(a,c),t.append(o),i(o)}},i=t=>{let n=document.createElement("button");n.id="label-button",n.textContent="delete";for(let t=0;t<e.length;t++)n.setAttribute("button-id",t);t.append(n),n.addEventListener("click",r)},a=r=>{let i=r,a=document.createElement("div");a.classList.add("input-container");let c=document.createElement("form");c.classList.add("form-div");let d=document.createElement("input"),s=document.createElement("input"),l=document.createElement("input");s.type="text",s.id="title",s.placeholder="new task title",l.type="text",l.id="description",l.placeholder="Description",d.type="button",d.id="label-button",d.value="submit",d.addEventListener("click",(function(){s=document.getElementById("title").value,l=document.getElementById("description").value;let t=n(s,l);e[i].projectTodoList.push(t),console.log(e),o(i)})),c.append(d,s,l),a.append(c),t.append(a)};return{CreateNewTodo:n,newProject:t=>({name:t,id:e.length,projectTodoList:[]}),projectList:e,deleteTask:r,addToDiv:()=>{let t=document.getElementById("projects-element");for(let n=0;n<e.length;n++){let r=document.createElement("div");r.id="project-name";let o=document.createElement("h3");r.setAttribute("data-id",n),o.textContent=e[n].name,r.append(o),t.append(r)}},displayContent:o,createForm:a,addTaskButtons:i}})();document.getElementById("submit-button").addEventListener("click",(function(e){e.preventDefault();let t=document.getElementById("add-project").value,n=v.newProject(t);v.projectList.push(n),console.log(v.projectList),v.addToDiv()})),document.querySelector(".projects-element").addEventListener("click",(function(e){v.displayContent(e.target.parentElement.getAttribute("data-id"))}))})()})();