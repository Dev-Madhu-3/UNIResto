(this.webpackJsonpUNIResto=this.webpackJsonpUNIResto||[]).push([[0],{14:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),a=c(7),i=c.n(a),r=c(6),o=c(5),l=c(8),b=c(3),j=(c(14),c(9)),u=c(0),d=function(e){var t=e.dish_currency,c=e.dish_name,s=e.dish_price,a=e.dish_image,i=e.dish_description,r=e.dish_calories,o=e.addonCat,l=e.dish_Type,j=e.dish_Availability,d=e.setCart,m=Object(n.useState)(0),h=Object(b.a)(m,2),O=h[0],x=h[1];return Object(u.jsxs)("div",{className:"item-card-container",children:[Object(u.jsxs)("div",{className:"first-con",children:[Object(u.jsx)("div",{className:2===l?"veg-box":"veg-box redCl",children:Object(u.jsx)("div",{className:2===l?"veg-button":"veg-button redBg"})}),Object(u.jsxs)("div",{className:"item-summery-container",children:[Object(u.jsx)("h1",{className:"food-name",children:c}),Object(u.jsxs)("p",{className:"rating",children:[t," ",s]}),Object(u.jsx)("p",{className:"discription",children:i}),j?Object(u.jsxs)("div",{className:"increase-deacrease-con",children:[Object(u.jsx)("button",{className:"item-count-btn",type:"button",onClick:function(){x((function(e){return e>0?e-1:0})),O>0&&d((function(e){return e>0?e-1:0}))},children:"-"}),O,Object(u.jsx)("button",{className:"item-count-btn",type:"button",onClick:function(){x((function(e){return e+1})),d((function(e){return e+1}))},children:"+"})]}):Object(u.jsx)("p",{className:"not-available",children:"Not Available"}),Object(u.jsx)("p",{className:o[0]?"cutom-option":"cutom-option visible",children:"Customization Available"})]})]}),Object(u.jsxs)("p",{className:"calories",children:[r," calories"]}),Object(u.jsx)("img",{className:"img",src:a,alt:c})]})},m=function(){var e=Object(n.useState)(""),t=Object(b.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)([]),i=Object(b.a)(a,2),m=i[0],h=i[1],O=Object(n.useState)(0),x=Object(b.a)(O,2),p=x[0],v=x[1],f=function(e){s(e.target.textContent)};return Object(n.useEffect)((function(){var e=function(){var e=Object(l.a)(Object(o.a)().mark((function e(){var t,c;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://apis2.ccbp.in/restaurant-app/restaurant-menu-list-details");case 3:if(!(t=e.sent).ok){e.next=10;break}return e.next=7,t.json();case 7:c=e.sent,h(c[0].table_menu_list),s(c[0].table_menu_list[0].menu_category);case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log("Problem: ".concat(e.t0.message));case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(u.jsxs)("div",{className:"main-container",children:[Object(u.jsxs)("header",{className:"header",children:[Object(u.jsx)("h1",{className:"main-heading",children:"UNI Resto Cafe"}),Object(u.jsxs)("div",{children:[Object(u.jsx)("p",{children:"My Orders"}),Object(u.jsxs)("div",{children:[Object(u.jsx)(j.a,{}),Object(u.jsx)("div",{className:"cart-count-con",children:Object(u.jsx)("p",{children:p})})]})]})]}),Object(u.jsx)("div",{className:"tabs-container",children:m.map((function(e){return Object(u.jsx)("button",{className:c===e.menu_category?"tab-btn red-btn":"tab-btn",type:"button",onClick:f,children:e.menu_category},e.dish_name)}))}),Object(u.jsx)("div",{className:"items-list-container",children:m[0]&&m.filter((function(e){return e.menu_category===c})).map((function(e){return e.category_dishes.map((function(e){return Object(u.jsx)(d,Object(r.a)(Object(r.a)({},e),{},{cartCount:p,setCart:v}),e.dish_name)}))}))})]})};i.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(m,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.f1edaece.chunk.js.map