(this["webpackJsonphello-world"]=this["webpackJsonphello-world"]||[]).push([[0],{131:function(e,t,n){},132:function(e,t,n){},133:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(18),o=n.n(a),i=n(16),s=n.n(i),l=n(30),d=n(22),u=n(26),j=n.n(u),b=n(8),f=(n(129),n(5)),m=function(e){var t=e.id,n=e.go,c=e.fetchedUser;return Object(f.jsxs)(b.i,{id:t,children:[Object(f.jsx)(b.j,{children:"Example"}),c&&Object(f.jsx)(b.g,{header:Object(f.jsx)(b.h,{mode:"secondary",children:"User Data Fetched with VK Bridge"}),children:Object(f.jsx)(b.e,{before:c.photo_200?Object(f.jsx)(b.c,{src:c.photo_200}):null,description:c.city&&c.city.title?c.city.title:"",children:"".concat(c.first_name," ").concat(c.last_name)})}),Object(f.jsx)(b.g,{header:Object(f.jsx)(b.h,{mode:"secondary",children:"Navigation Example"}),children:Object(f.jsx)(b.f,{children:Object(f.jsx)(b.d,{stretched:!0,size:"l",mode:"secondary",onClick:n,"data-to":"persik",children:"Show me the Persik, please"})})})]})},h=(n.p,n(131),n(33)),p=n(34),g=n(36),v=n(35),x=n(21),O=(n(132),""),y=6,k=function(e,t,n){var c=document.createElement("div");c.className="popup disableblc",c.innerText=e,document.querySelector(".popup_block").append(c),setTimeout((function(){c.classList.toggle("disableblc")}),t),setTimeout((function(){c.classList.toggle("disableblc")}),n-t),setTimeout((function(){c.remove()}),n)},w=function(){var e=new XMLHttpRequest;e.open("GET","https://botpoliteh.ru/static_dir/newFile.txt",!1),e.send();var t=e.responseText.split("\r\n"),n=Math.floor(Math.random()*t.length);return O=t[n]},E=function(){y=6,!0;try{["#dhjgf432","#gfklj244"].forEach((function(e){document.querySelectorAll(e).forEach((function(e){return e.remove()}))}))}catch(d){console.log(d)}document.getElementById("count").innerText="\u041f\u043e\u043f\u044b\u0442\u043e\u043a: ".concat(y);var e=document.createElement("div");e.className="row-key",document.getElementById("word").append(e);var t,n=Object(x.a)(O);try{for(n.s();!(t=n.n()).done;){var c=t.value;e.insertAdjacentHTML("afterBegin",'<div id="gfklj244" class="letter borrad m-5 bg-block">&nbsp;</div>')}}catch(d){n.e(d)}finally{n.f()}for(var r=0,a=["\u0439\u0446\u0443\u043a\u0435\u043d\u0433\u0448\u0449\u0437\u0445\u044a","\u0444\u044b\u0432\u0430\u043f\u0440\u043e\u043b\u0434\u0436\u044d","\u044f\u0447\u0441\u043c\u0438\u0442\u044c\u0431\u044e"];r<a.length;r++){var o=a[r],i=document.createElement("div");i.className="row-key",document.getElementById("keyboard").append(i);var s,l=Object(x.a)(o.split(""));try{for(l.s();!(s=l.n()).done;){c=s.value;i.insertAdjacentHTML("beforeEnd",'<div id="dhjgf432" class="flex-1 m-5 borrad letter button bg-block" aria-label="'.concat(c,'">').concat(c,"</div>"))}}catch(d){l.e(d)}finally{l.f()}}};w(),document.addEventListener("click",(function(e){if("dhjgf432"==e.target.id&&(function(e){var t=O.split("");if(t.includes(e.innerText.toLowerCase())){var n,c=0,r=Object(x.a)(t);try{for(r.s();!(n=r.n()).done;){n.value===e.innerText.toLowerCase()&&(document.querySelectorAll("#gfklj244")[c].innerText=e.innerText),c++}}catch(a){r.e(a)}finally{r.f()}return!0}return!1}(e.target)?e.target.classList.toggle("okey"):(e.target.classList.toggle("disable"),document.getElementById("count").innerText="\u041f\u043e\u043f\u044b\u0442\u043e\u043a: ".concat(--y)),!function(){var e="";return document.querySelectorAll("#gfklj244").forEach((function(t){e+=t.innerText})),e.toLowerCase()==O?(!1,k("\u0412\u044b \u043e\u0442\u0433\u0430\u0434\u0430\u043b\u0438 \u0441\u043b\u043e\u0432\u043e!\n\u0411\u044b\u043b\u043e \u0437\u0430\u0433\u0430\u0434\u0430\u043d\u043e \u043d\u043e\u0432\u043e\u0435 \u0441\u043b\u043e\u0432\u043e",500,6e3)):0==y?(!1,k("\u0412\u044b \u043d\u0435 \u0443\u0433\u0430\u0434\u0430\u043b\u0438 \u0441\u043b\u043e\u0432\u043e!\n\u0411\u044b\u043b\u043e \u0437\u0430\u0433\u0430\u0434\u0430\u043d\u043e \u043d\u043e\u0432\u043e\u0435 \u0441\u043b\u043e\u0432\u043e",500,6e3)):!0}()))return w(),E()}));var T=function(e){Object(g.a)(n,e);var t=Object(v.a)(n);function n(){var e;Object(h.a)(this,n);for(var c=arguments.length,r=new Array(c),a=0;a<c;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={reload:!1},e}return Object(p.a)(n,[{key:"render",value:function(e,t){return Object(f.jsxs)(b.i,{id:e,children:[Object(f.jsx)(b.j,{className:"myClass",children:"\u041e\u0442\u0433\u0430\u0434\u0430\u0439 \u0441\u043b\u043e\u0432\u043e"}),Object(f.jsx)("div",{className:"popup_block"}),Object(f.jsx)(b.f,{id:"count"}),Object(f.jsx)("div",{id:"game",children:Object(f.jsx)("div",{id:"word",className:"column-"})}),Object(f.jsx)("main",{className:"page flex-1",children:Object(f.jsx)("div",{id:"keyboard","aria-label":setTimeout((function(){return E()}),25)})})]})}}]),n}(r.a.Component),L=T,A=function(){var e=Object(c.useState)("maingame"),t=Object(d.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(null),o=Object(d.a)(a,2),i=o[0],u=o[1],h=Object(c.useState)(Object(f.jsx)(b.l,{size:"large"})),p=Object(d.a)(h,2),g=(p[0],p[1]);Object(c.useEffect)((function(){function e(){return(e=Object(l.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.send("VKWebAppGetUserInfo");case 2:t=e.sent,u(t),g(null);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}s.a.subscribe((function(e){var t=e.detail,n=t.type,c=t.data;if("VKWebAppUpdateConfig"===n){var r=document.createAttribute("scheme");r.value=c.scheme?c.scheme:"client_light",document.body.attributes.setNamedItem(r)}})),function(){e.apply(this,arguments)}()}),[]);var v=function(e){r(e.currentTarget.dataset.to)};return Object(f.jsx)(b.a,{children:Object(f.jsx)(b.b,{children:Object(f.jsxs)(b.m,{activePanel:n,children:[Object(f.jsx)(m,{id:"home",fetchedUser:i,go:v}),Object(f.jsx)(L,{id:"maingame",go:v})]})})})};s.a.send("VKWebAppInit"),o.a.render(Object(f.jsx)(A,{}),document.getElementById("root"))}},[[133,1,2]]]);
//# sourceMappingURL=main.aee423bf.chunk.js.map