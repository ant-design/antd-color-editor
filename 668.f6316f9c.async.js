(self.webpackChunkkitchen_color_studio=self.webpackChunkkitchen_color_studio||[]).push([[668],{57707:function(R,O,e){"use strict";var A=e(50959),r=e(77042),p=e(28734),i=e(99590),n=e(11527),a=p.ZP.div.withConfig({componentId:"sc-bkfini-0"})(["overflow:hidden;display:flex;flex:1;align-items:center;justify-content:flex-start;width:100%;min-width:236px;padding:6px 12px 6px 6px;font-family:var(--leva-fonts-mono);font-size:12px;color:",";background:",";border:1px solid ",";border-radius:4px;& + &{margin-top:4px;}"],function(h){var c=h.color1;return c},function(h){var c=h.color2;return c},function(h){var c=h.theme;return c.colorBorderSecondary}),C=p.ZP.div.withConfig({componentId:"sc-bkfini-1"})(["display:flex;align-items:center;width:80px;"]),m=(0,A.memo)(function(h){var c=h.color1,_=h.color2,l=h.children;return(0,n.jsxs)(a,{color1:c,color2:_,children:[(0,n.jsx)(C,{children:(0,n.jsx)(r.Z,{color1:c,color2:_})}),(0,n.jsx)("div",{children:l||"".concat((0,i.H)(c).toHexString(!1)," on ").concat((0,i.H)(_).toHexString(!1))})]})});O.Z=m},8091:function(R,O,e){"use strict";var A=e(93525),r=e.n(A),p=e(50959),i=e(48721),n=e(57707),a=e(28734),C=e(35258),m=e(11527),h=a.ZP.div.withConfig({componentId:"sc-17mvjam-0"})(["position:relative;display:flex;flex-direction:column;width:100%;"]),c=a.ZP.div.withConfig({componentId:"sc-17mvjam-1"})(["cursor:pointer;display:inline-flex;align-items:center;justify-content:center;height:24px;padding:0 8px;font-size:12px;color:",";background:",";border-radius:","px;"],function(l){var d=l.tagColor;return d[1]},function(l){var d=l.tagColor;return d[0]},function(l){var d=l.theme;return d.borderRadiusSM}),_=(0,p.memo)(function(l){var d=l.colors,P=d.map(function(u){return i.P.apply(void 0,r()(u))}),D=P.filter(function(u){return u.aa}).length/P.length*100,T=["#46d20033","#52b915"];D<=80?T=["#8edc073b","#9bcb09"]:D<=64?T=["#8edc073b","#ebbb03"]:D<=50?T=["#ffbc0745","#f99b00"]:D<=32?T=["#ff630b29","#f14c19"]:D<=16&&(T=["#ed1c0a1c","#ec011bf2"]);var b=(0,m.jsx)(h,{children:d.map(function(u,g){return(0,m.jsx)(n.Z,{color1:u[0],color2:u[1]},g)})});return(0,m.jsx)(C.Z,{content:b,title:"W3C Accessibility \u53EF\u8BFB\u6027\u6D4B\u8BD5",children:(0,m.jsx)("a",{href:"https://www.w3.org/TR/2008/REC-WCAG20-20081211/#contrast-ratiodef",target:"_blank",rel:"noreferrer",children:(0,m.jsxs)(c,{tagColor:T,children:["AA coverage ",Math.round(D),"%"]})})})});O.Z=_},77042:function(R,O,e){"use strict";var A=e(50959),r=e(48721),p=e(28254),i=e(28734),n=e(11527),a=i.ZP.div.withConfig({componentId:"sc-97ru05-0"})(["display:inline-block;margin-left:4px;padding:2px 4px;font-size:10px;line-height:1;background:",";border-radius:4px;"],function(m){var h=m.theme;return h.colorPrimary}),C=(0,A.memo)(function(m){var h=m.color1,c=m.color2,_=(0,r.P)(h,c),l=_.shield,d=function(T){return(0,n.jsx)("span",{style:{color:T?"#52c41a":"gray"},children:T?"pass":"fail"})},P=(0,n.jsxs)("div",{children:[(0,n.jsxs)("div",{children:["CTS \u21E2 ",_.cts]}),(0,n.jsxs)("div",{children:["AA",(0,n.jsx)(a,{children:"large"})," \u21E2 ",d(_.aaLarge)]}),(0,n.jsxs)("div",{children:["AA",(0,n.jsx)(a,{children:"small"})," \u21E2 ",d(_.aaaSmall)]}),(0,n.jsxs)("div",{children:["AAA",(0,n.jsx)(a,{children:"large"})," \u21E2 ",d(_.aaaLarge)]}),(0,n.jsxs)("div",{children:["AAA",(0,n.jsx)(a,{children:"small"})," \u21E2 ",d(_.aaaSmall)]})]});return(0,n.jsx)(p.Z,{title:P,children:(0,n.jsx)("a",{href:"https://www.w3.org/TR/2008/REC-WCAG20-20081211/#contrast-ratiodef",target:"_blank",rel:"noreferrer",children:(0,n.jsx)("img",{src:l})})})});O.Z=C},48721:function(R,O,e){"use strict";e.d(O,{P:function(){return p}});var A=e(65452),r=function(n){return n==="AAA"?"https://gw.alipayobjects.com/zos/antfincdn/%26v4N7EPfwD/aaa.svg":n==="AA"?"https://gw.alipayobjects.com/zos/antfincdn/AiDCarDp5o/aa.svg":" https://gw.alipayobjects.com/zos/antfincdn/2X4RlcXBHX/fail.svg"},p=function(n,a){var C=(0,A.FA)(n,a,{level:"AA",size:"small"}),m=(0,A.FA)(n,a,{level:"AA",size:"large"}),h=(0,A.FA)(n,a,{level:"AAA",size:"small"}),c=(0,A.FA)(n,a,{level:"AAA",size:"large"}),_=C||m,l=h||c,d=l?"AAA":_?"AA":"Fail";return{result:d,shield:r(d),cts:(0,A.h7)(n,a).toFixed(2),aa:_,aaa:l,aaSmall:C,aaLarge:m,aaaSmall:h,aaaLarge:c}}},64098:function(R,O,e){"use strict";e.d(O,{f:function(){return i}});var A=e(71939),r={pattern:{isolateDark:!1,isFliterStep:!1,displayFliterStep:!1},edit:{isolateEdit:!1}},p=[{title:"Primary",color:"#1677FF",darkColor:"#1677FF",type:"normal"},{title:"Neutral",color:"#1677FF",darkColor:"#1677FF",type:"neutral"},{title:"Red",color:"#da4a45",darkColor:"#da4a45",type:"normal"},{title:"Yellow",color:"#e09f00",darkColor:"#be8600",type:"normal"},{title:"Green",color:"#67c03a",darkColor:"#4ca41f",type:"normal"},{title:"Sky",color:"#00bec3",darkColor:"#00a1a5",type:"normal"},{title:"Purple",color:"#9b59eb",darkColor:"#9b59eb",type:"normal"}],i={generate:A.u,system:r,colorList:p,stepFliter:void 0}},96302:function(R,O,e){"use strict";var A=e(50959),r=e(28734),p=e(52141),i=e(9825),n=e(79073),a=e(11527),C=r.ZP.div.withConfig({componentId:"sc-1oflqqm-0"})(["cursor:pointer;position:relative;width:48px;height:32px;background-position:0 0,0 8px,8px -8px,-8px 0;background-size:16px 16px;&:active{transform:scale(0.95);}"]),m=r.ZP.div.withConfig({componentId:"sc-1oflqqm-1"})(["display:flex;align-items:center;justify-content:center;width:100%;height:100%;"]),h=r.ZP.div.withConfig({componentId:"sc-1oflqqm-2"})(["display:flex;align-items:center;width:64px;height:32px;"]),c=r.ZP.div.withConfig({componentId:"sc-1oflqqm-3"})(["opacity:0.5;"]),_=r.ZP.div.withConfig({componentId:"sc-1oflqqm-4"})(["padding:8px 16px 32px 0;"]),l=r.ZP.div.withConfig({componentId:"sc-1oflqqm-5"})(["display:flex;flex:1;align-items:center;justify-content:center;"]),d=(0,A.memo)(function(P){var D=P.scale,T=P.colorType,b=T===void 0?"hex":T,u=P.showDetail,g=P.highLights,o=P.midHighLight,t=P.isFliterStep;return(0,a.jsx)(l,{children:(0,a.jsx)(_,{children:(0,a.jsxs)(p.Z,{direction:u?"horizontal":"vertical",size:2,children:[(0,a.jsxs)(p.Z,{direction:u?"vertical":"horizontal",size:2,children:[(0,a.jsx)(h,{style:u?{width:32}:{}},"scale-num"),new Array(D.light.length).fill("").map(function(v,E){var f=g==null?void 0:g.includes(E),M=o===E;return(0,a.jsx)(C,{style:u?{width:32}:{},children:(0,a.jsx)(m,{children:(0,a.jsx)(c,{style:{opacity:t?f?1:.1:.5,fontWeight:M?700:400},children:E+1})})},"num"+E)})]},"scale-title"),(0,a.jsx)(i.Z,{title:"light",scale:D.light,colorType:b,showDetail:u},"light"),(0,a.jsx)(i.Z,{title:"lightA",scale:D.light.map(function(v){return(0,n.Z)(v,"#fff")}),solidScale:D.light,colorType:b,showDetail:u,alpha:!0},"lightA"),(0,a.jsx)(i.Z,{title:"dark",scale:D.dark,colorType:b,showDetail:u},"dark"),(0,a.jsx)(i.Z,{title:"darkA",scale:D.dark.map(function(v){return(0,n.Z)(v,"#000")}),solidScale:D.dark,colorType:b,showDetail:u,alpha:!0},"darkA")]})})})});O.Z=d},89012:function(R,O,e){"use strict";var A=e(50959),r=e(28734),p=e(50513),i=e(52141),n=e(56384),a=e(18559),C=e(25326),m=e(49309),h=e(8091),c=e(96302),_=e(64098),l=e(12270),d=e(11527),P=p.Z,D=r.ZP.div.withConfig({componentId:"sc-a7cp58-0"})([".studio-collapse-title{overflow:auto;margin-bottom:8px;padding-top:8px;border-radius:4px !important;}.studio-collapse-title-collapsed,.studio-collapse-title-expand{font-size:14px;font-weight:600;line-height:1;}.studio-divider{margin-top:8px !important;border-color:",";}"],function(u){var g=u.theme;return g.colorBorder}),T=r.ZP.div.withConfig({componentId:"sc-a7cp58-1"})(["display:inline-block;width:16px;height:16px;border-radius:3px;"]),b=(0,A.memo)(function(u){var g=u.color,o=g===void 0?{title:"nuname",type:"normal",color:"#1677FF"}:g,t=u.config,v=t===void 0?_.f:t,E=u.displayConfig,f=E===void 0?{colorType:"hex",showDetail:!1}:E,M=u.scales,y=(0,l.r)(),x=y.isDarkMode,k=(0,C.Z)(),s=k.generateGroup,B=(0,A.useRef)(),W=v.system,L=v.stepFliter,j=v.generate,I=W.pattern,S=f.colorType,K=f.showDetail,w=(0,m.Z)(M,[o.color,(o==null?void 0:o.darkColor)||o.color]);return(0,d.jsx)(D,{isDarkMode:x,children:(0,d.jsx)(P,{extra:function(){return(0,d.jsxs)(i.Z,{children:[(0,d.jsx)(a.Z,{title:"\u590D\u5236\u4E3A Sketch \u7D20\u6750\u8D34",icon:(0,d.jsx)(n.Z,{}),onClick:function(){return s(B.current)}}),M.dark.length>=3&&(0,d.jsx)(h.Z,{colors:w})]})},title:(0,d.jsxs)(i.Z,{align:"center",size:4,children:[(0,d.jsx)(T,{style:{background:o.color}}),I.isolateDark&&(0,d.jsx)(T,{style:{background:o.darkColor}}),o.title]}),defaultExpand:!0,children:(0,d.jsx)("div",{ref:B,children:(0,d.jsx)(c.Z,{scale:M,colorType:S,showDetail:K,isFliterStep:I.isFliterStep&&!I.displayFliterStep,highLights:I.isFliterStep?L:[],midHighLight:j.step.up})})})})});O.Z=b},9825:function(R,O,e){"use strict";var A=e(50959),r=e(28734),p=e(52141),i=e(14613),n=e(90943),a=e.n(n),C=e(33134),m=e(17229),h=e(11527),c="url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABGdBTUEAALGPC/xhBQAAAFpJREFUWAntljEKADAIA23p6v//qQ+wfUEcCu1yriEgp0FHRJSJcnehmmWm1Dv/lO4HIg1AAAKjTqm03ea88zMCCEDgO4HV5bS757f+7wRoAAIQ4B9gByAAgQ3pfiDmXmAeEwAAAABJRU5ErkJggg==) 0% 0% / 26px",_="url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAABGdBTUEAALGPC/xhBQAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAIKADAAQAAAABAAAAIAAAAACPTkDJAAAAZUlEQVRIDe2VMQoAMAgDa9/g/1/oIzrpZBCh2dLFkkoDF0Fz99OdiOjks+2/7S8fRRmMMIVoRGSoYzvvqF8ZIMKlC1GhQBc6IkPzq32QmdAzkEGihpWOSPsAss8HegYySNSw0hE9WQ4StafZFqkAAAAASUVORK5CYII=) 0% 0% / 26px",l=r.ZP.div.withConfig({componentId:"sc-dgyzry-0"})(["cursor:pointer;position:relative;width:48px;height:32px;background-position:0 0,0 8px,8px -8px,-8px 0;background-size:16px 16px;&:active{transform:scale(0.95);}"]),d=(0,r.ZP)(l).withConfig({componentId:"sc-dgyzry-1"})(["width:180px;font-family:var(--leva-fonts-mono);font-size:var(--leva-fontSizes-root);"]),P=r.ZP.div.withConfig({componentId:"sc-dgyzry-2"})(["display:flex;align-items:center;justify-content:center;width:100%;height:100%;"]),D=r.ZP.div.withConfig({componentId:"sc-dgyzry-3"})(["display:flex;align-items:center;width:64px;height:32px;"]),T=r.ZP.div.withConfig({componentId:"sc-dgyzry-4"})(["opacity:0.5;"]),b=(0,A.memo)(function(u){var g=u.title,o=u.scale,t=u.solidScale,v=u.colorType,E=u.showDetail,f=u.alpha,M=g.includes("dark"),y={};switch(g){case"lightA":y={backgroundColor:"#fff",background:c};break;case"darkA":y={backgroundColor:"#000",background:_};break;default:break}return(0,h.jsxs)(p.Z,{direction:E?"vertical":"horizontal",size:2,children:[(0,h.jsx)(D,{style:E?{}:{padding:8},children:(0,h.jsx)(T,{children:g})},"title"),o.map(function(x,k){if(!E)return(0,h.jsx)(n.CopyToClipboard,{text:x,children:(0,h.jsx)(l,{title:x,style:y,onClick:function(){return i.ZP.success(x)},children:(0,h.jsx)(P,{style:{backgroundColor:x}})})},x);var s=(0,m.Z)(x,v,M);return s=s.replace(/ /g,""),(0,h.jsx)(n.CopyToClipboard,{text:s,children:(0,h.jsx)(d,{title:x,style:y,onClick:function(){return i.ZP.success(s)},children:(0,h.jsx)(P,{style:{backgroundColor:x,color:(0,C.XV)(String(f?t==null?void 0:t[k]:x),f?t==null?void 0:t[M?0:t.length-1]:o[M?0:o.length-1],f?t==null?void 0:t[M?t.length-1:0]:o[M?o.length-1:0],!0)},children:(0,h.jsx)("div",{children:s})})})},x+k)})]})});O.Z=b},25326:function(R,O,e){"use strict";var A=e(25359),r=e.n(A),p=e(49811),i=e.n(p),n=e(54306),a=e.n(n),C=e(50959),m=e(874),h=e.n(m),c=e(73586),_=e(14613);typeof window!="undefined"&&(window.DUMI_HTML2SKETCH={nodeToSketchSymbol:c.fl,nodeToGroup:c.Sg});var l=function(){var P=(0,C.useState)(),D=a()(P,2),T=D[0],b=D[1],u=function(){var g=i()(r()().mark(function o(t,v){var E,f,M,y,x;return r()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:if(s.prev=0,console.groupCollapsed("[html2sketch]\u5F00\u59CB\u8F6C\u6362..."),!(t instanceof Array)){s.next=17;break}f=[],M=0;case 5:if(!(M<t.length)){s.next=14;break}return y=t[M],s.next=9,v(y);case 9:x=s.sent,f.push(x);case 11:M+=1,s.next=5;break;case 14:E=f,s.next=20;break;case 17:return s.next=19,v(t);case 19:E=s.sent;case 20:return console.groupEnd(),console.log("\u89E3\u6790\u7ED3\u679C:",E),h()(JSON.stringify(E)),b(E),s.next=26,_.ZP.success("\u8F6C\u6362\u6210\u529F\u{1F389} \u5DF2\u590D\u5236\u5230\u526A\u5207\u677F");case 26:return s.abrupt("return",E);case 29:return s.prev=29,s.t0=s.catch(0),s.next=33,_.ZP.error("\u89E3\u6790\u5931\u8D25,\u8BF7\u68C0\u67E5 Console \u8F93\u51FA \u{1F636}");case 33:console.groupEnd(),console.groupEnd(),console.error("\u62A5\u9519\u5982\u4E0B:"),console.error(s.t0);case 37:case"end":return s.stop()}},o,null,[[0,29]])}));return function(t,v){return g.apply(this,arguments)}}();return{sketchJSON:T,generateSymbol:function(){var g=i()(r()().mark(function t(v){return r()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,u(v,function(){var M=i()(r()().mark(function y(x){return r()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,(0,c.fl)(x);case 2:return s.abrupt("return",s.sent.toSketchJSON());case 3:case"end":return s.stop()}},y)}));return function(y){return M.apply(this,arguments)}}());case 2:case"end":return f.stop()}},t)}));function o(t){return g.apply(this,arguments)}return o}(),generateGroup:function(){var g=i()(r()().mark(function t(v){return r()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,u(v,function(){var M=i()(r()().mark(function y(x){return r()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,(0,c.Sg)(x);case 2:return s.abrupt("return",s.sent.toSketchJSON());case 3:case"end":return s.stop()}},y)}));return function(y){return M.apply(this,arguments)}}());case 2:case"end":return f.stop()}},t)}));function o(t){return g.apply(this,arguments)}return o}()}};O.Z=l},17229:function(R,O,e){"use strict";var A=e(73559),r=e(99590),p=e(48453),i=e.n(p),n=function(C,m,h){var c=C,_=i()(C).alpha()!==1,l=new r.C(C);switch(m){case"mix":c=_?l.toRgbString():l.toHexString(!1);break;case"hex":c=_?l.toHex8String(!1):l.toHexString(!1);break;case"hct":c=(0,A.ch)(C,_);break;case"rgb":c=l.toRgbString();break;case"hsl":c=l.toHslString();break;case"hsv":c=l.toHsvString();break;case"cts":c=(0,A.Ro)(C,h?"#000":"#fff",_);break;default:break}return c};O.Z=n},73559:function(R,O,e){"use strict";e.d(O,{Ro:function(){return h},Wg:function(){return a},ch:function(){return m},xC:function(){return C}});var A=e(54306),r=e.n(A),p=e(79972),i=e(48453),n=e.n(i),a=function(_){var l=p.OP.fromInt((0,p.fq)(_));return[l.hue,l.chroma,l.tone]},C=function(_){var l=p.OP.from(_[0],_[1],_[2]);return(0,p.PQ)(l.toInt())},m=function(_,l){if(l){var P=n()(_).rgba(),D=r()(P,4),T=D[0],b=D[1],u=D[2],g=D[3],o=n().rgb(T,b,u).hex(),t=a(o);return"hcta(".concat(t.map(function(v){return Math.round(v)}).join(","),",").concat(g,")")}else{var d=a(_);return"hct(".concat(d.map(function(v){return Math.round(v)}).join(","),")")}},h=function(_,l,d){var P;return d?P="cts(--)":(P=n().contrast(_,l).toFixed(2),P="cts("+P+")"),P}},49309:function(R,O){"use strict";var e=function(r,p){var i=p[0],n=p[1]||p[0],a=r.light.length-1,C=[[i,"#fff"],[r.light[a],r.light[0]],a>=4&&[r.light[a-1],r.light[1]],[r.light[a],i],[n,"#000"],[r.dark[a],r.dark[0]],r.dark.length>=4&&[r.dark[a-1],r.dark[1]],[r.dark[a],n]].filter(Boolean);return C};O.Z=e},71939:function(R,O,e){"use strict";e.d(O,{u:function(){return D}});var A=e(54306),r=e.n(A),p=e(93525),i=e.n(p),n=e(69256),a=e.n(n),C=e(63466),m=e.n(C),h=e(52510),c=e.n(h),_=e(73559),l=e(65943),d=e.n(l),P=e(78721),D={step:{up:5,down:5},hue:{segment:[100,200],multiply:-.5},neutral:{standard:"#888",cStart:15,cTarget:10,cEasingUp:[0,0,1,1],cEasingDown:[0,0,1,1]},light:{up:{hRotate:-10,cTarget:5,tTarget:98,hEasing:[0,0,1,1],cEasing:[0,0,1,1],tEasing:[0,0,1,1]},down:{hRotate:20,cTarget:50,tTarget:10,hEasing:[0,0,1,1],cEasing:[0,0,1,1],tEasing:[0,0,1,1]}},dark:{up:{hRotate:20,cTarget:50,tTarget:10,hEasing:[0,0,1,1],cEasing:[0,0,1,1],tEasing:[0,0,1,1]},down:{hRotate:-10,cTarget:5,tTarget:98,hEasing:[0,0,1,1],cEasing:[0,0,1,1],tEasing:[0,0,1,1]}}},T=function(){function b(u){a()(this,b),c()(this,"config",D),this.config=(0,P.Z)(this.config,u)}return m()(b,[{key:"gen",value:function(g){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{theme:"light",neutral:!1};if(o.neutral)return this.genNeutral(g,o);var t=(0,_.Wg)(g),v=this.genList(t,"up",o.theme==="dark").reverse(),E=this.genList(t,"down",o.theme==="dark"),f=[].concat(i()(v),[t],i()(E));return f.map(function(M){return(0,_.xC)(M)})}},{key:"genNeutral",value:function(g,o){var t=(0,_.Wg)(g);t=[t[0],this.config.neutral.cStart,(0,_.Wg)(this.config.neutral.standard)[2]],this.config.neutral.cStart===1&&(t=(0,_.Wg)(this.config.neutral.standard),this.config.neutral.cStart=2,this.config.neutral.cTarget=2);var v=this.genList(t,"up",o.theme==="dark",!0).reverse(),E=this.genList(t,"down",o.theme==="dark",!0),f=[].concat(i()(v),[t],i()(E));return f.map(function(M){return(0,_.xC)(M)})}},{key:"genList",value:function(g){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"up",t=arguments.length>2?arguments[2]:void 0,v=arguments.length>3?arguments[3]:void 0,E=t?this.config.dark.up:this.config.light.up,f=t?this.config.dark.down:this.config.light.down,M=o==="up"?this.config.step.up:this.config.step.down,y=[],x=o==="up"?E:f,k=x.hRotate,s=x.tTarget,B=x.hEasing,W=x.tEasing,L=o==="up"?E:f,j=L.cTarget,I=L.cEasing;v&&(j=this.config.neutral.cTarget,I=o==="up"?this.config.neutral.cEasingUp:this.config.neutral.cEasingDown);for(var S=d().apply(void 0,i()(B)),K=d().apply(void 0,i()(I)),w=d().apply(void 0,i()(W)),U=r()(g,3),z=U[0],H=U[1],G=U[2],Z=1;Z<=M;Z++){var F=Z/M,N=this.hueRotate(z,k*S(F)),J=H+(j-H)*K(F),V=G+(s-G)*w(F);y.push([N,J,V])}return y}},{key:"hueRotate",value:function(g,o){var t=g+this.calcHueRotate(g,o);return t>360&&(t=t-360),t<0&&(t=t+360),t}},{key:"genCalcHueVaule",value:function(g,o,t,v){var E=Math.PI/180,f=360/(o-g),M=-1*f*E*(3*g+o)/4,y=t*v,x=(t+y)/2,k=(t-y)/2;return function(s){var B=s*E;return k*Math.sin(f*B+M)+x}}},{key:"calcHueRotate",value:function(g,o){var t=this.config.hue,v=t.segment,E=t.multiply,f=this.genCalcHueVaule(v[0],v[1],o,E);return f(g)}}]),b}();O.Z=T},79073:function(R,O,e){"use strict";var A=e(54306),r=e.n(A),p=e(48453),i=e.n(p);function n(m){return m>=0&&m<=255}function a(m){return m.length<4?"rgb(".concat(m.join(","),")"):"rgba(".concat(m.join(","),")")}function C(m,h){for(var c=i()(m).rgb(),_=r()(c,3),l=_[0],d=_[1],P=_[2],D=i()(h).rgb(),T=r()(D,3),b=T[0],u=T[1],g=T[2],o=.01;o<=1;o+=.01){var t=Math.round((l-b*(1-o))/o),v=Math.round((d-u*(1-o))/o),E=Math.round((P-g*(1-o))/o);if(n(t)&&n(v)&&n(E))return i()(a([t,v,E,Math.round(o*100)/100])).hex()}return i()(a([l,d,P,1])).hex()}O.Z=C},11965:function(){},84232:function(){},14050:function(){}}]);