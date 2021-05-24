(this["webpackJsonphobby-projects"]=this["webpackJsonphobby-projects"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var i=n(1),a=n.n(i),c=n(8),r=n.n(c),o=(n(13),n(6)),s=n(2),l=n(5),h=(n(14),n(0)),m=.1,u=.23,p=.1,g=.2,j=.12,b={rucksack:"I carry my stuff",rain:"Rainy",overnight:"Overnighter",overnight_cold_weather:"Overnighter in cold weather",swim:"Swimming!",cooking:"Preparing meals",hydration:"Bring/carry water",dark:"It will be dark",comfort:"Comfort for my camp",safety:"The destination is not familiar to me",devices:"I need my devices",necessities:"Phone, keys etc."};var y=function(){var e=Object(i.useState)(l.map((function(e){return e.type}))),t=Object(s.a)(e,2),n=t[0],a=t[1],c=Object(i.useState)([]),r=Object(s.a)(c,2),y=r[0],d=r[1],w=Object(i.useState)(0),f=Object(s.a)(w,2),k=f[0],v=f[1],O=Object(i.useState)(0),x=Object(s.a)(O,2),S=x[0],C=x[1],N=Object(i.useState)(0),P=Object(s.a)(N,2),T=P[0],F=P[1],I=Object(i.useState)(0),L=Object(s.a)(I,2),M=L[0],_=L[1],B=Object(i.useState)(0),H=Object(s.a)(B,2),E=H[0],J=H[1],W=Object(i.useState)(0),D=Object(s.a)(W,2),K=D[0],R=D[1],A=l.filter((function(e){return n.includes(e.type)})),Z=k+M*m+E*u+S*p+T*g+K*j,z=A.filter((function(e){return n.includes(e.type)})).filter((function(e){return 0!==y.filter((function(t){return t.name===e.name})).length})).reduce((function(e,t){return e+t.weight}),Z);return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("div",{className:"title",children:Object(h.jsx)("h4",{children:"What kind of trip?"})}),Object(h.jsx)("div",{className:"content",children:l.map((function(e){return e.type})).reduce((function(e,t){return e.includes(t)?e:[].concat(Object(o.a)(e),[t])}),[]).map((function(e){var t=n.includes(e),i="gear-filter-stage-1-".concat(e);return Object(h.jsxs)("div",{className:"gear-item",children:[Object(h.jsx)("input",{id:i,type:"checkbox",value:e,name:e,checked:t,onChange:function(){return a(t?n.filter((function(t){return t!==e})):[].concat(Object(o.a)(n),[e]))}}),Object(h.jsx)("label",{htmlFor:i,children:b[e]?b[e]:e})]},"key-".concat(i))}))}),Object(h.jsxs)("div",{className:"title",children:[Object(h.jsx)("h4",{children:"Base weight"}),Object(h.jsx)("input",{className:"select-all-button",type:"button",value:"Select all",onClick:function(){return d(A)}})]}),Object(h.jsx)("div",{className:"content",children:A.map((function(e){var t="gear-filter-stage-2-".concat(e.name),n=0!==y.filter((function(t){return t.name===e.name})).length;return Object(h.jsxs)("div",{className:"gear-item",children:[Object(h.jsx)("input",{id:t,type:"checkbox",value:e.name,name:e.name,checked:n,onChange:function(){return d(n?y.filter((function(t){return t.name!==e.name})):[].concat(Object(o.a)(y),[e]))}}),Object(h.jsxs)("label",{htmlFor:t,children:[e.name," (",e.weight,")"]})]},"key-".concat(t))}))}),Object(h.jsx)("div",{className:"title",children:Object(h.jsx)("h4",{children:"Consumables"})}),Object(h.jsxs)("div",{className:"content",children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("input",{type:"button",value:"+",onClick:function(){return v(k+1)}}),Object(h.jsx)("input",{type:"button",value:"-",onClick:function(){return v(k>0?k-1:0)}}),Object(h.jsxs)("span",{className:"consumables-label",children:[k," liters of water"]})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("input",{type:"button",value:"+",onClick:function(){return _(M+1)}}),Object(h.jsx)("input",{type:"button",value:"-",onClick:function(){return _(M>0?M-1:0)}}),Object(h.jsxs)("span",{className:"consumables-label",children:[M," small gas bottles (100g)"]})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("input",{type:"button",value:"+",onClick:function(){return J(E+1)}}),Object(h.jsx)("input",{type:"button",value:"-",onClick:function(){return J(E>0?E-1:0)}}),Object(h.jsxs)("span",{className:"consumables-label",children:[E," medium gas bottles (256g)"]})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("input",{type:"button",value:"+",onClick:function(){return R(K+1)}}),Object(h.jsx)("input",{type:"button",value:"-",onClick:function(){return R(K>0?K-1:0)}}),Object(h.jsxs)("span",{className:"consumables-label",children:[K," packs of Turmat meals"]})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("input",{type:"button",value:"+",onClick:function(){return C(S+1)}}),Object(h.jsx)("input",{type:"button",value:"-",onClick:function(){return C(S>0?S-1:0)}}),Object(h.jsxs)("span",{className:"consumables-label",children:[S," rolls of toilet paper"]})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("input",{type:"button",value:"+",onClick:function(){return F(T+1)}}),Object(h.jsx)("input",{type:"button",value:"-",onClick:function(){return F(T>0?T-1:0)}}),Object(h.jsxs)("span",{className:"consumables-label",children:[T," packs of wet wipes (50pc)"]})]})]}),Object(h.jsxs)("div",{className:"title",children:[Object(h.jsx)("strong",{children:"Total"})," ",z.toFixed(2),"kg"]})]})},d=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),i(e),a(e),c(e),r(e)}))};r.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(y,{})}),document.getElementById("root")),d()},5:function(e){e.exports=JSON.parse('[{"name":"Fj\xe4llr\xe4ven Kajka 65L","type":"rucksack","weight":3.29},{"name":"Fj\xe4llr\xe4ven Kajka 65L Raincover","type":"rain","weight":0.152},{"name":"Hilleberg Allak 2","type":"overnight","weight":3.3},{"name":"Nemo Hornet 1P","type":"overnight","weight":0.8},{"name":"Naturehike Mongar 2P","type":"overnight","weight":1.911},{"name":"Thermarest Z-Lite Sleeping pad 1/2","type":"overnight","weight":0.1915},{"name":"Thermarest Z-Lite Sleeping pad 1/2","type":"comfort","weight":0.1915},{"name":"Sea to Summit Etherlight XT Insulated Large Sleeping pad","type":"overnight","weight":0.657},{"name":"Sea to Summit Thermolite Reactor Extreme","type":"overnight","weight":0.39},{"name":"Sea to summit Spark SpIV sleeping bag","type":"overnight_cold_weather","weight":0.921},{"name":"Food cup","type":"cooking","weight":0.069},{"name":"Primus kettle","type":"cooking","weight":0.275},{"name":"Primus stove","type":"cooking","weight":0.129},{"name":"Sea to summit spoon","type":"cooking","weight":0.011},{"name":"Cricket lighter","type":"cooking","weight":0.013},{"name":"Matches","type":"cooking","weight":0.007},{"name":"Pouch for lighters","type":"cooking","weight":0.01},{"name":"Nalgene water bottle 1 liter","type":"hydration","weight":0.178},{"name":"Nalgene water bottle 1 liter (2)","type":"hydration","weight":0.178},{"name":"Petzl Tikka head lamp","type":"dark","weight":0.085},{"name":"Martiini knife","type":"cooking","weight":0.12},{"name":"Dish brush","type":"cooking","weight":0.025},{"name":"Dishes sustance","type":"cooking","weight":0.073},{"name":"Cumulus Quilt 250","type":"overnight","weight":0.511},{"name":"Ticket to the moon with ropes (big)","type":"comfort","weight":0.755},{"name":"Ticket to the moon with ropes (small)","type":"comfort","weight":0.355},{"name":"Salomon soft flask with water purifier","type":"hydration","weight":0.058},{"name":"Kuksa","type":"cooking","weight":0.119},{"name":"First aid kit","type":"safety","weight":0.165},{"name":"Pillow case","type":"overnight","weight":0.08},{"name":"Merino base layer","type":"overnight","weight":0.416},{"name":"Peak Performance down jacket","type":"overnight_cold_weather","weight":0.6},{"name":"Jack Wolfsking running jacket","type":"overnight","weight":0.3},{"name":"Woolly socks","type":"overnight","weight":0.101},{"name":"Mini towel","type":"swim","weight":0.08},{"name":"Big towel","type":"comfort","weight":0.279},{"name":"Swim pants","type":"swim","weight":0.03},{"name":"Laundry wire and clothespins","type":"swim","weight":0.057},{"name":"Extra batteries for torch and headlamp","type":"dark","weight":0.057},{"name":"Battery for devices","type":"devices","weight":0.258},{"name":"Torch","type":"dark","weight":0.055},{"name":"Cords","type":"devices","weight":0.087},{"name":"2 pairs of boxers","type":"overnight","weight":0.142},{"name":"2 pairs of camp socks","type":"overnight","weight":0.062},{"name":"Patagonia rain jacket","type":"rain","weight":0.332},{"name":"Sherpa T-shirt","type":"overnight","weight":0.181},{"name":"Icebreaker Merino Wool Shirt","type":"overnight_cold_weather","weight":0.409},{"name":"Toothbrush and paste","type":"overnight","weight":0.1},{"name":"Map","type":"safety","weight":0.039},{"name":"Compass","type":"safety","weight":0.035},{"name":"Frying spatula","type":"cooking","weight":0.022},{"name":"Salomon rain pants","type":"rain","weight":0.171},{"name":"Hagl\xf6fs camp pants","type":"comfort","weight":0.5},{"name":"Camp shoes","type":"comfort","weight":0.4},{"name":"Headphones","type":"comfort","weight":0.013},{"name":"Sunglasses","type":"comfort","weight":0.1},{"name":"Phone","type":"necessities","weight":0.2},{"name":"Home keys","type":"necessities","weight":0.3}]')}},[[16,1,2]]]);
//# sourceMappingURL=main.2262910a.chunk.js.map