(this.webpackJsonpreminder=this.webpackJsonpreminder||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){"use strict";a.r(t);var i=a(0),r=a.n(i),c=a(5),n=a.n(c),l=(a(12),a(3)),s=function(e){var t=e.menu;return r.a.createElement("section",{className:"section-center"},t.map((function(e){return r.a.createElement("article",{className:"menu-item",key:e.id},r.a.createElement("img",{className:"photo",src:e.img,alt:""}),r.a.createElement("div",{className:"item-info"},r.a.createElement("header",null,r.a.createElement("h4",null,e.title),r.a.createElement("div",{className:"price"},e.price)),r.a.createElement("div",{className:"item-text"},e.desc)))})))},m=a(6),o=function(e){var t=e.items,a=e.showMenu,i=t.reduce((function(e,t){return e.includes(t.category)?e:e=[].concat(Object(m.a)(e),[t.category])}),["all"]);return r.a.createElement("menu",{className:"menu"},r.a.createElement("div",{className:"title"},r.a.createElement("div",{className:"btn-container"},i.map((function(e){return r.a.createElement("button",{type:"button",key:e,className:"filter-btn",onClick:function(){return a(e)}},e)})))))},u=[{id:1,title:"buttermilk pancakes",category:"breakfast",price:15.99,img:"./images/item-1.jpeg",desc:"I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed "},{id:2,title:"diner double",category:"lunch",price:13.99,img:"./images/item-2.jpeg",desc:"vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats "},{id:3,title:"godzilla milkshake",category:"shakes",price:6.99,img:"./images/item-3.jpeg",desc:"ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral."},{id:4,title:"country delight",category:"breakfast",price:20.99,img:"./images/item-4.jpeg",desc:"Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, "},{id:5,title:"egg attack",category:"lunch",price:22.99,img:"./images/item-5.jpeg",desc:"franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up "},{id:6,title:"oreo dream",category:"shakes",price:18.99,img:"./images/item-6.jpeg",desc:"Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday"},{id:7,title:"bacon overflow",category:"breakfast",price:8.99,img:"./images/item-7.jpeg",desc:"carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird "},{id:8,title:"american classic",category:"lunch",price:12.99,img:"./images/item-8.jpeg",desc:"on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  "},{id:9,title:"quarantine buddy",category:"shakes",price:16.99,img:"./images/item-9.jpeg",desc:"skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing."}];var g=function(){var e=Object(i.useState)(u),t=Object(l.a)(e,2),a=t[0],c=(t[1],Object(i.useState)(u)),n=Object(l.a)(c,2),m=n[0],g=n[1];return r.a.createElement("main",null,r.a.createElement("section",{className:"menu section"},r.a.createElement("div",{className:"title"},r.a.createElement("h2",null,"our menu"),r.a.createElement("div",{className:"underline"})),r.a.createElement(o,{items:a,showMenu:function(e){if("all"===e)g(a);else{var t=a.filter((function(t){return t.category===e}));g(t)}}}),r.a.createElement(s,{menu:m})))};n.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root"))},7:function(e,t,a){e.exports=a(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.1802fbc8.chunk.js.map