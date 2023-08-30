"use strict";(self.webpackChunkantd_color_editor=self.webpackChunkantd_color_editor||[]).push([[178],{2847:function(R,x,e){var f=e(65042),a=e(86745),_=e(50959),u=e(13641),E=e(997),d=e(79642),i=e(57854),n=e(11767),v=e(27240),o=e(11527),l=u.ZP.div.withConfig({componentId:"sc-urguwq-0"})(["padding:0 12px;"]),M=u.ZP.div.withConfig({componentId:"sc-urguwq-1"})(["display:inline-block;width:24px;height:24px;margin-right:8px;border-radius:3px;"]),C=u.ZP.div.withConfig({componentId:"sc-urguwq-2"})(["position:relative;margin-top:4px;padding:12px;background:",";border:1px solid ",";border-radius:4px;"],function(r){var c=r.color2;return c},function(r){var c=r.theme;return c.colorBorderSecondary}),p=(0,_.memo)(function(r){var c=r.data,P=(0,f.r)(),T=P.isDarkMode,y=(0,a.WQ)(),A=(0,a.M4)({color1:{label:"\u524D\u666F\u8272",value:"#1677FF"},color2:{label:"\u80CC\u666F\u8272",value:T?"#000e5e":"#f9f9fe"}},{store:y}),s=A.color1,I=A.color2,h=(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(E.MT,{store:y}),(0,o.jsxs)(l,{children:[(0,o.jsx)(d.Z,{color1:s,color2:I}),(0,o.jsxs)(C,{color2:I,children:[(0,o.jsxs)("div",{style:{display:"flex",height:40,marginBottom:12},children:[(0,o.jsx)("div",{style:{background:s,flex:1}}),(0,o.jsx)("div",{style:{background:s,flex:1,opacity:.75}}),(0,o.jsx)("div",{style:{background:s,flex:1,opacity:.5}}),(0,o.jsx)("div",{style:{background:s,flex:1,opacity:.25}})]}),(0,o.jsxs)("div",{style:{display:"flex",height:1,marginBottom:12},children:[(0,o.jsx)("div",{style:{background:s,flex:1}}),(0,o.jsx)("div",{style:{background:s,flex:1,opacity:.75}}),(0,o.jsx)("div",{style:{background:s,flex:1,opacity:.5}}),(0,o.jsx)("div",{style:{background:s,flex:1,opacity:.25}})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("h1",{style:{color:s,lineHeight:1,textAlign:"justify"},children:"ABCDEFG0123456789"}),(0,o.jsx)("h2",{style:{color:s,lineHeight:1,textAlign:"justify"},children:"ABCDEFG0123456789"}),(0,o.jsx)("h3",{style:{color:s,lineHeight:1,textAlign:"justify"},children:"ABCDEFG0123456789"}),(0,o.jsx)("p",{style:{color:s,lineHeight:1,textAlign:"justify"},children:"ABCDEFG0123456789"})]})]})]})]}),D=[{header:"\u53EF\u8BFB\u6027\u6D4B\u8BD5",panel:h},{header:"\u8272\u677F\u6D4B\u8BD5\u5217\u8868",panel:c.map(function(L,m){return(0,o.jsxs)("div",{style:{alignItems:"center",display:"flex",justifyContent:"space-between",marginBottom:8,padding:"0 12px"},children:[(0,o.jsxs)("div",{style:{alignItems:"center",display:"flex"},children:[(0,o.jsx)(M,{style:{background:L.color}}),(0,o.jsx)("div",{children:L.name})]}),(0,o.jsx)(i.Z,{colors:(0,n.Z)(L.scales,[L.color,L.darkColor])})]},m)})}];return(0,o.jsx)(v.Z,{panels:D})});x.Z=p},93665:function(R,x,e){e.d(x,{Z:function(){return p}});var f=e(91273),a=e(50959),_=e(20518),u=e(80604),E=e(46215),d=e(55937),i=e(17605),n=e(11527),v={borderRadius:"2px",flex:1,fontSize:"12px",height:"24px",minWidth:"48px",width:"100%"},o=(0,a.memo)(function(r){var c=r.item,P=r.index,T=r.isolateDark,y=(0,_.t)();return(0,n.jsxs)(d.D,{align:"center",gap:8,horizontal:!0,width:"100%",children:[(0,n.jsx)("div",{style:v,children:(0,n.jsx)(u.Z,{onChange:function(s){y.updateItem({title:s.target.value},P)},size:"small",value:c.title})}),(0,n.jsx)("div",{style:v,children:(0,n.jsx)(E.Z,{onChange:function(s){y.updateItem({type:s},P)},options:[{label:"\u5F69\u8272",value:"normal"},{label:"\u4E2D\u6027\u8272",value:"neutral"}],size:"small",style:{width:"100%"},value:c.type})}),(0,n.jsx)("div",{style:v,children:(0,n.jsx)(u.Z,{onChange:function(s){y.updateItem({color:s.target.value},P)},size:"small",value:c.color})}),(0,n.jsx)(i.Z,{color:c.color,listModify:!0,onChange:function(s){y.updateItem({color:s},P)}}),T&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{style:v,children:(0,n.jsx)(u.Z,{onChange:function(s){y.updateItem({darkColor:s.target.value},P)},size:"small",value:c.darkColor})}),(0,n.jsx)(i.Z,{color:c.darkColor,listModify:!0,onChange:function(s){y.updateItem({darkColor:s},P)}})]})]},P)}),l=o,M=(0,a.memo)(function(r){var c=r.isolateDark;return(0,n.jsxs)(d.D,{align:"center",gap:8,horizontal:!0,style:{paddingRight:22},children:[(0,n.jsx)("div",{style:v,children:"\u540D\u79F0"}),(0,n.jsx)("div",{style:v,children:"\u7C7B\u578B"}),(0,n.jsx)("div",{style:v,children:"\u8272\u503C"}),(0,n.jsx)("div",{style:{minWidth:24}}),c&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{style:v,children:"\u6697\u8272\u503C"}),(0,n.jsx)("div",{style:{minWidth:24}})]})]})}),C=(0,a.memo)(function(r){var c=r.colorList,P=r.setColorList,T=r.isolateDark;return(0,n.jsxs)("div",{style:{padding:"0 12px"},children:[(0,n.jsx)(M,{isolateDark:T}),(0,n.jsx)(f.c,{creatorButtonProps:{creatorButtonText:"\u6DFB\u52A0\u4E00\u4E2A\u8272\u677F",record:function(){return{color:"#1677FF",darkColor:"#1677FF",id:Math.ceil(Math.random()*1e5).toString(16),title:"\u672A\u547D\u540D\u8272\u677F",type:"normal"}}},initialValues:c,onChange:P,renderContent:function(A,s){return(0,n.jsx)(l,{index:s,isolateDark:T,item:A})}})]})}),p=C},35673:function(R,x,e){var f=e(54306),a=e.n(f),_=e(63359),u=e(1757),E=e(21708),d=e(50950),i=e(26404),n=e(10348),v=e(66552),o=e(20767),l=e(69219),M=e(18621),C=e(61280),p=e(10465),r=e(67006),c=e.n(r),P=e(86745),T=e(50959),y=e(13641),A=e(49127),s=e(997),I=e(27240),h=e(11527),D=(0,y.ZP)(o.ZP).withConfig({componentId:"sc-1gvzeiu-0"})(["font-size:12px !important;border-radius:4px;"]),L=(0,y.ZP)(l.Z).withConfig({componentId:"sc-1gvzeiu-1"})(["display:flex;width:100%;padding:0 12px;> div{flex:1;}.ant-upload.ant-upload-select{width:100%;}"]),m=(0,T.memo)(function(F){var j=F.config,O=(0,v.Z)("antd-color-config",{defaultValue:void 0}),q=a()(O,2),t=q[0],k=q[1],V=(0,P.WQ)(),te=(0,A.Z)(),B=te.setContent,z=te.startDownload,ee=(0,P.M4)({name:{label:"\u914D\u7F6E\u540D\u79F0",value:"\u672A\u547D\u540D"}},{store:V}),G=ee.name,W=function(){return{data:j,name:G,time:Date.now()}},b=function(){var J=W();k(J),M.ZP.success("\u4FDD\u5B58\u6210\u529F")},ne=function(){var J=W(),ie=G?G+".json":"config.json";B(JSON.stringify(J),ie),z()},oe=(0,T.useCallback)(function(Q){var J=new FileReader;J.readAsText(Q.file.originFileObj,"utf8"),J.addEventListener("load",function(ie){var K,H=(K=ie.target)===null||K===void 0?void 0:K.result,xe=H,w=JSON.parse(xe);w!=null&&w.time&&w!==null&&w!==void 0&&w.data&&w!==null&&w!==void 0&&w.name?(k(w),M.ZP.success("\u4E0A\u4F20\u5E76\u8986\u76D6\u6210\u529F"),location.reload()):M.ZP.error("\u914D\u7F6E\u6587\u4EF6\u4E0D\u6B63\u786E")})},[k]),N=function(){k(),location.reload()},me=[{header:"\u914D\u7F6E\u5B58\u50A8",panel:(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(s.MT,{store:V}),(0,h.jsxs)(L,{direction:"vertical",children:[(0,h.jsx)(D,{block:!0,icon:(0,h.jsx)(_.Z,{}),onClick:b,size:"small",type:"primary",children:"\u4FDD\u5B58\u914D\u7F6E"}),(0,h.jsx)(D,{block:!0,icon:(0,h.jsx)(u.Z,{}),onClick:ne,size:"small",children:"\u4E0B\u8F7D\u914D\u7F6E"})]})]})},{header:"\u8BFB\u53D6/\u8FD8\u539F",panel:(0,h.jsxs)(L,{direction:"vertical",children:[(0,h.jsx)(C.Z,{listType:"picture",maxCount:1,onChange:oe,children:(0,h.jsx)(D,{block:!0,icon:(0,h.jsx)(E.Z,{}),size:"small",type:"primary",children:"\u4E0A\u4F20\u5E76\u8BFB\u53D6\u914D\u7F6E\u6587\u4EF6"})}),(0,h.jsx)(p.Z,{cancelText:"\u53D6\u6D88",okText:"\u786E\u8BA4",onConfirm:function(){return location.reload()},title:"\u786E\u5B9A\u8981\u6062\u590D\u4E3A\u4FDD\u5B58\u914D\u7F6E\uFF1F",children:(0,h.jsx)(D,{block:!0,icon:(0,h.jsx)(d.Z,{}),size:"small",children:"\u6062\u590D\u4E3A\u4FDD\u5B58\u914D\u7F6E"})}),(0,h.jsx)(p.Z,{cancelText:"\u53D6\u6D88",okText:"\u786E\u8BA4",onConfirm:N,title:"\u786E\u5B9A\u8981\u6E05\u7A7A\u5E76\u6062\u590D\u521D\u59CB\u5316\uFF1F",children:(0,h.jsx)(D,{block:!0,danger:!0,icon:(0,h.jsx)(i.Z,{}),size:"small",children:"\u6E05\u7A7A\u5386\u53F2\u914D\u7F6E\u5E76\u521D\u59CB\u5316"})})]})},{header:t?["\u672C\u5730\u914D\u7F6E:",t.name,c()(t==null?void 0:t.time).format("YYYY-MM-DD HH:mm:ss")].join(" "):"\u65E0\u672C\u5730\u914D\u7F6E",panel:t&&(0,h.jsx)(n.H,{data:[t==null?void 0:t.data]})}];return(0,h.jsx)(I.Z,{panels:me})});x.Z=m},98393:function(R,x,e){var f=e(67839),a=e.n(f),_=e(93525),u=e.n(_),E=e(54306),d=e.n(E),i=e(65042),n=e(48453),v=e.n(n),o=e(50959),l=e(75411),M=e(11135),C=e(11527),p=function(P,T){var y=d()(P,3),A=y[0],s=y[1],I=y[2],h=d()(T,3),D=h[0],L=h[1],m=h[2];return[A*D,s*L,I*m]},r=(0,o.memo)(function(c){var P=c.name,T=c.scale,y=c.colorType,A=c.zoom,s=c.hueZoom,I=(0,i.r)(),h=I.isDarkMode,D=function(m,F,j){var O;switch(y){case"mix":case"hex":{O=p([(0,M.Wg)(F)[0],1-j,0],[1/3.6*s,100,1]);break}case"cts":{O=p([(0,M.Wg)(F)[0],j,v().contrast(m,h?"#000":"#fff")],[1/3.6*s,100,20]);break}case"rgb":{O=p(v()(m).rgb(),[1/2.55,1/2.55,1/2.55]);break}case"hsl":{O=p(v()(m).hsl(),[1/3.6*s,100,100]),O=[O[0],O[2],O[1]];break}case"hsv":{O=p(v()(m).hsv(),[1/3.6*s,100,100]),O=[O[0],O[2],O[1]];break}default:{O=p((0,M.Wg)(m),[1/3.6*s,1,1]),O=[O[0],O[2],O[1]];break}}return a()(l.Vector3,u()(O))};return T.map(function(L,m){return(0,C.jsxs)("mesh",{position:D(L,T[Math.floor(T.length/2)],(m+1)/T.length),scale:A,children:[(0,C.jsx)("boxGeometry",{}),(0,C.jsx)("meshPhysicalMaterial",{color:L})]},P+m)})});x.Z=r},10990:function(R,x,e){var f=e(26097),a=e(50959),_=e(38101),u=e(11527),E=(0,a.memo)(function(d){var i=d.data;return(0,u.jsx)(_.AU,{children:(0,u.jsx)(f.oP,{background:!1,language:"json",children:JSON.stringify(i,null,4)})})});x.Z=E},38933:function(R,x,e){var f=e(50959),a=e(38101),_=e(11527),u=(0,f.memo)(function(E){var d=E.icon,i=E.title;return(0,_.jsxs)(a.pY,{children:[d,i]})});x.Z=u},86961:function(R,x,e){e.d(x,{R:function(){return l},Z:function(){return p}});var f=e(69219),a=e(48442),_=e(27061),u=e(50959),E=e(13641),d=JSON.parse('{"name":"antd-color-editor","version":"1.2.0","description":"An open-source color editor for designing color system","keywords":["antd","color-editor","color-stytem"],"homepage":"https://github.com/ant-design/antd-color-editor","bugs":{"url":"https://github.com/ant-design/antd-color-editor/issues/new"},"repository":{"type":"git","url":"https://github.com/ant-design/antd-color-editor.git"},"author":"canisminor1990 <i@canisminor.cc>","sideEffects":false,"main":"lib/index.js","module":"es/index.js","types":"lib/index.d.ts","files":["lib","es"],"scripts":{"build":"father build","dev":"dumi dev","docs:build":"dumi build","doctor":"father doctor","lint":"eslint \\"src/**/*.{js,jsx,ts,tsx}\\" --fix","lint:md":"remark . --quiet --frail --output","lint:style":"stylelint \\"src/**/*.{js,jsx,ts,tsx}\\" --fix","prepare":"husky install","prettier":"prettier -c --write \\"**/**\\"","release":"semantic-release","setup":"dumi setup","start":"npm run dev","stylelint":"stylelint \\"src/**/*.{css,less,js,jsx,ts,tsx}\\" --fix","test":"npm run lint","type-check":"tsc -p tsconfig-check.json"},"lint-staged":{"*.md":["remark --quiet --output --","prettier --write --no-error-on-unmatched-pattern"],"*.json":["prettier --write --no-error-on-unmatched-pattern"],"*.{js,jsx}":["prettier --write","stylelint --fix","eslint --fix"],"*.{ts,tsx}":["prettier --parser=typescript --write","stylelint --fix","eslint --fix"]},"dependencies":{"@ant-design/colors":"^7","@ant-design/icons":"^5","@ant-design/pro-editor":"latest","@ctrl/tinycolor":"^3","@leva-ui/plugin-bezier":"latest","@material/material-color-utilities":"^0.2.6","@radix-ui/react-icons":"^1","@react-three/drei":"^9","@react-three/fiber":"^8","ahooks":"^3","antd":"^5","antd-style":"latest","babel-plugin-import":"^1","babel-plugin-styled-components":"^2","bezier-easing":"^2","chroma-js":"^2","copy-to-clipboard":"^3","dayjs":"^1","dumi":"^2","dumi-assets-types":"^1","dumi-theme-antd-style":"latest","html2sketch":"^1.0","leva":"^0.9","lodash-es":"^4","polished":"^4","react":"^18","react-copy-to-clipboard":"^5","react-dom":"^18","react-layout-kit":"^1","styled-components":"^5","three":"^0.150","zustand":"^4"},"devDependencies":{"@commitlint/cli":"^17","@lobehub/lint":"latest","@sketch-hq/sketch-file-format-ts":"^6","@types/chroma-js":"^2","@types/lodash-es":"^4","@types/node":"^20","@types/prettier":"^3","@types/react":"^18","@types/react-copy-to-clipboard":"^5","@types/react-dom":"^18","@types/styled-components":"^5","@types/three":"^0.149","commitlint":"^17","eslint":"^8","father":"^4","husky":"^8","lint-staged":"^14","prettier":"^3","remark":"^14","remark-cli":"^11","semantic-release":"^21","stylelint":"^15","typescript":"^5"},"peerDependencies":{"antd":">=5","react":">=18","react-dom":">=18"},"publishConfig":{"access":"public","registry":"https://registry.npmjs.org"}}'),i=e(11527),n=E.ZP.div.withConfig({componentId:"sc-lew87w-0"})(["display:flex;align-items:center;justify-content:space-between;height:46px;padding:0 24px;background:",";border-bottom:1px solid ",";"],function(r){var c=r.theme;return c.colorBgContainer},function(r){var c=r.theme;return c.colorBorder}),v=E.ZP.div.withConfig({componentId:"sc-lew87w-1"})(["font-size:16px;font-weight:600;line-height:18px;color:",";white-space:nowrap;> span{background-image:linear-gradient( to left,",","," );background-clip:text;-webkit-text-fill-color:transparent;}"],function(r){var c=r.theme;return c.colorText},function(r){var c=r.theme;return c.colorPrimary},function(r){var c=r.theme;return c.colorPrimaryHover}),o=E.ZP.div.withConfig({componentId:"sc-lew87w-2"})(["width:240px;"]),l=function(r){return r[r.colors=0]="colors",r[r.config=1]="config",r[r.token=2]="token",r[r.three=3]="three",r}({}),M=[{label:"\u8272\u677F",value:l.colors},{label:"\u6A21\u578B",value:l.three},{label:"\u53D8\u91CF",value:l.token},{label:"\u914D\u7F6E",value:l.config}],C=(0,u.memo)(function(r){var c=r.tabKey,P=r.setTabKey,T=r.logo,y=T===void 0?"https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg":T,A=r.title,s=A===void 0?"Antd Color Editor":A,I=r.logoHref,h=I===void 0?"https://github.com/canisminor1990/antd-color-editor":I;return(0,i.jsxs)(n,{children:[(0,i.jsx)(o,{children:(0,i.jsx)("a",{href:h,rel:"noreferrer",target:"_blank",children:(0,i.jsxs)(f.Z,{align:"center",children:[(0,i.jsx)("img",{alt:"logo",height:18,src:y}),(0,i.jsx)(v,{children:s}),(d==null?void 0:d.version)&&(0,i.jsxs)(a.Z,{color:"blue",children:["v",d.version]})]})})}),(0,i.jsx)(_.Z,{onChange:P,options:M,value:c}),(0,i.jsx)(o,{})]})}),p=C},997:function(R,x,e){e.d(x,{MT:function(){return o},V0:function(){return v},s_:function(){return l}});var f=e(57213),a=e.n(f),_=e(961),u=e(96565),E=e(86745),d=e(50959),i=e(81133),n=e(11527),v=(0,d.memo)(function(M){return(0,n.jsx)(u.Z,a()(a()({},M),{},{expandIcon:function(p){var r=p.isActive;return r?(0,n.jsx)(_.AS7,{style:{opacity:.5}}):(0,n.jsx)(_.VZf,{style:{opacity:.5}})},expandIconPosition:"end",ghost:!0}))}),o=(0,d.memo)(function(M){var C=M.store;return(0,n.jsx)(E.MT,{fill:!0,flat:!0,store:C,theme:i.P,titleBar:!1})}),l=u.Z.Panel},27240:function(R,x,e){var f=e(50959),a=e(997),_=e(11527),u=(0,f.memo)(function(E){var d=E.panels;return(0,_.jsx)(a.V0,{defaultActiveKey:d.map(function(i,n){return n}),children:d.filter(function(i){return!i.hidden}).map(function(i,n){return(0,_.jsx)(a.s_,{header:i.header,children:i.panel},n)})})});x.Z=u},3961:function(R,x,e){var f=e(46215),a=e(69219),_=e(50959),u=e(13641),E=e(72319),d=e(11527),i=f.Z.Option,n=u.ZP.div.withConfig({componentId:"sc-j976-0"})(["padding:0 12px;"]),v=u.ZP.div.withConfig({componentId:"sc-j976-1"})(["width:12px;height:12px;border-radius:3px;"]),o=(0,u.ZP)(f.Z).withConfig({componentId:"sc-j976-2"})(["border-radius:3px;"]),l=(0,_.memo)(function(M){var C=M.config,p=M.color,r=p===void 0?{color:"#1677FF",title:"nuname",type:"normal"}:p,c=M.defaultFliter,P=M.onChange,T=new E.Z(C),y=T.gen(r.color,{neutral:r.type==="neutral",theme:"light"}),A=c||[],s=y.map(function(I,h){c||A.push(h);var D=(0,d.jsxs)(a.Z,{children:[(0,d.jsx)(v,{style:{background:I}}),h+1]});return(0,d.jsx)(i,{label:D,value:h,children:D},h)});return(0,d.jsx)(n,{children:(0,d.jsx)(o,{defaultValue:A,mode:"multiple",onChange:P,optionLabelProp:"label",placeholder:"\u7B5B\u9009\u9700\u8981\u7684\u68AF\u5EA6",size:"small",style:{width:"100%"},children:s})})});x.Z=l},41220:function(R,x,e){var f=e(49482),a=e(56045),_=e(60201),u=e(60168),E=e(65042),d=e(1225),i=e(50959),n=e(98393),v=e(11527),o=["https://gw.alipayobjects.com/zos/antfincdn/A2UP6WYMLw/px.png","https://gw.alipayobjects.com/zos/antfincdn/YrnP3LArEC/nx.png","https://gw.alipayobjects.com/zos/antfincdn/TFxGCynnr3/py.png","https://gw.alipayobjects.com/zos/antfincdn/0xv2XBW3oq/ny.png","https://gw.alipayobjects.com/zos/antfincdn/wbdSuRHSRo/pz.png","https://gw.alipayobjects.com/zos/antfincdn/pzB8izsxKd/nz.png"],l=(0,i.memo)(function(M){var C=M.config,p=M.data,r=(0,E.r)(),c=r.isDarkMode,P=(0,d.Fg)(),T=(0,i.useRef)(),y=C.colorType,A=C.threeZoom,s=C.autoRotate,I=C.showFloor,h=C.hueZoom;return(0,v.jsxs)(u.Xz,{style:{background:c?"#222":"#f1f1f1",height:"100%",width:"100%"},children:[(0,v.jsxs)(i.Suspense,{fallback:null,children:[(0,v.jsx)(f.qA,{files:o}),(0,v.jsx)("ambientLight",{}),(0,v.jsx)(a.M,{scale:.02,children:p.map(function(D){return(0,v.jsx)(n.Z,{colorType:y,hueZoom:h,name:D.name,scale:c?D.scales.dark:D.scales.light,zoom:A},D.name)})})]}),I&&(0,v.jsx)("gridHelper",{args:[25,100,P.colorBorderSecondary,P.colorBorder],castShadow:!1,position:[0,-1,0],receiveShadow:!1}),(0,v.jsx)(_.z,{autoRotate:s,makeDefault:!0,ref:T})]})});x.Z=l},82787:function(R,x,e){var f=e(93525),a=e.n(f),_=e(54689),u=e.n(_),E=e(26097),d=e(15861),i=e(23407),n=e(50959),v=e(1310),o=e(44226),l=e(50640),M=e(38101),C=e(11527),p=(0,n.memo)(function(r){var c=r.data,P=r.config,T=(0,v.Z)(),y=T.format,A=P.colorType,s=P.codeType,I=P.isolateDarkToken,h=c.map(function(W){return{dark:W.scales.dark.map(function(b){return(0,o.Z)(b,A)}),darkA:W.scales.dark.map(function(b){return(0,o.Z)((0,l.Z)(b,"#000"),A)}),light:W.scales.light.map(function(b){return(0,o.Z)(b,A)}),lightA:W.scales.light.map(function(b){return(0,o.Z)((0,l.Z)(b,"#fff"),A)}),name:W.name}}),D=null;if(s==="js"){if(I){var L={},m={},F=u()(h),j;try{for(F.s();!(j=F.n()).done;){var O=j.value;L[(0,d.Z)(O.name)]={alpha:O.lightA,solid:O.light},m[(0,d.Z)(O.name)]={alpha:O.darkA,solid:O.dark}}}catch(W){F.e(W)}finally{F.f()}D=`
        export interface ColorScaleItem {
          solid: string[],
          alpha: string[],
        }

        export interface ColorScales {
          `.concat(Object.keys(L).map(function(W){return"".concat(W,": ColorScaleItem;")}).join(`
`),`
        }

        export const LightTheme:ColorScales = `).concat(JSON.stringify(L),`

        export const DarkTheme:ColorScales = `).concat(JSON.stringify(m),`
      `)}else{var q={},t=u()(h),k;try{for(t.s();!(k=t.n()).done;){var V=k.value;q[(0,d.Z)(V.name)]={dark:V.dark,darkA:V.darkA,light:V.light,lightA:V.lightA}}}catch(W){t.e(W)}finally{t.f()}D=`
        export interface ColorScaleItem {
          light: string[],
          lightA: string[],
          dark: string[],
          darkA: string[],
        }

        export interface ColorScales {
          `.concat(Object.keys(q).map(function(W){return"".concat(W,": ColorScaleItem;")}).join(`
`),`
        }

        export const Theme:ColorScales = `).concat(JSON.stringify(q),`
      `)}D=y(D)}else{var te=I?["/* light.".concat(s," */")]:[],B=I?[`
`,"/* dark.".concat(s," */")]:[],z=u()(h),ee;try{var G=function(){var b=ee.value,ne=(0,i.Z)(b.name),oe=(0,i.Z)(b.name);I||(ne="light-"+ne,oe="dark-"+oe);var N="--";s==="less"&&(N="@"),s==="scss"&&(N="$");var me=b.light.map(function(K,H){return"".concat(N).concat(ne,"-color-").concat(H+1,": ").concat(K,";")}),Q=b.lightA.map(function(K,H){return"".concat(N).concat(ne,"-color-").concat(H+1,"-alpha: ").concat(K,";")}),J=b.dark.map(function(K,H){return"".concat(N).concat(oe,"-color-").concat(H+1,": ").concat(K,";")}),ie=b.darkA.map(function(K,H){return"".concat(N).concat(oe,"-color-").concat(H+1,"-alpha: ").concat(K,";")});te=[].concat(a()(te),a()(me),a()(Q)),B=[].concat(a()(B),a()(J),a()(ie))};for(z.s();!(ee=z.n()).done;)G()}catch(W){z.e(W)}finally{z.f()}D=[].concat(a()(te),a()(B)).join(`
`)}return(0,C.jsx)(M.AU,{children:(0,C.jsx)(E.oP,{background:!1,language:s,children:String(D)})})});x.Z=p},39953:function(R,x,e){e.d(x,{Z:function(){return tt}});var f=e(57213),a=e.n(f),_=e(54306),u=e.n(_),E=e(18398),d=e(66552),i=e(62476),n=e(86745),v=e(50959),o=e(86961),l=e(997),M=e(3961),C=e(93665),p=e(91514),r=e(27240),c=e(2847),P=e(35673),T=e(25139),y=e(41220),A=e(82787),s=e(10990),I=e(38101),h=e(52510),D=e.n(h),L=e(46967),m=e(961),F=e(78721),j=e(38933),O=e(72319),q=e(93196),t=e(11527),k,V=function(){var g=localStorage.getItem("antd-color-config"),Z=g?(0,F.Z)(q.f,JSON.parse(g).data):q.f;return Z},te=function(g){var Z;if(g!=null&&(Z=g.data)!==null&&Z!==void 0&&Z.generate&&g!==null&&g!==void 0&&g.time&&g!==null&&g!==void 0&&g.name){var Y=localStorage.getItem("antd-color-config");if(Y){var S;if(Y=JSON.parse(Y),((S=Y)===null||S===void 0?void 0:S.name)===name)return}localStorage.setItem("antd-color-config",JSON.stringify(g))}},B=V(),z=function(g){return{cTarget:{label:(0,t.jsx)(j.Z,{icon:(0,t.jsx)(m.EGi,{}),title:"\u8272\u5EA6\u76EE\u6807"}),max:120,min:1,step:1,value:g.cTarget},hRotate:{label:(0,t.jsx)(j.Z,{icon:(0,t.jsx)(m.TOI,{}),title:"\u8272\u76F8\u65CB\u8F6C"}),max:360,min:-360,step:1,value:g.hRotate},tTarget:{label:(0,t.jsx)(j.Z,{icon:(0,t.jsx)(m.vfO,{}),title:"\u660E\u5EA6\u76EE\u6807"}),max:100,min:1,step:1,value:g.tTarget}}},ee={darkDown:z(B.generate.dark.down),darkUp:z(B.generate.dark.up),lightDown:z(B.generate.light.down),lightUp:z(B.generate.light.up)},G=function(g){var Z;return Z={},D()(Z,"\u660E\u5EA6\u66F2\u7EBF",(0,n.so)({tEasing:(0,L.W)(g.tEasing)},{collapsed:!0,color:"#8c92a4"})),D()(Z,"\u8272\u5EA6\u66F2\u7EBF",(0,n.so)({cEasing:(0,L.W)(g.cEasing)},{collapsed:!0,color:"#8c92a4"})),D()(Z,"\u8272\u76F8\u66F2\u7EBF",(0,n.so)({hEasing:(0,L.W)(g.hEasing)},{collapsed:!0,color:"#8c92a4"})),Z},W={darkDown:G(B.generate.dark.down),darkUp:G(B.generate.dark.up),lightDown:G(B.generate.light.down),lightUp:G(B.generate.light.up)},b={multiply:{label:(0,t.jsx)(j.Z,{icon:(0,t.jsx)(m.h6i,{}),title:"\u8865\u507F\u4E58\u9636"}),max:1,min:-1,value:B.generate.hue.multiply},segment:{label:(0,t.jsx)(j.Z,{icon:(0,t.jsx)(m.TOI,{}),title:"\u8865\u507F\u533A\u95F4"}),max:360,min:0,step:1,value:B.generate.hue.segment}},ne={cStart:{label:(0,t.jsx)(j.Z,{icon:(0,t.jsx)(m.EGi,{}),title:"\u8272\u5EA6\u6807\u51C6"}),max:36,min:1,step:1,value:B.generate.neutral.cStart},cTarget:{label:(0,t.jsx)(j.Z,{icon:(0,t.jsx)(m.EGi,{}),title:"\u8272\u5EA6\u76EE\u6807"}),max:36,min:1,step:1,value:B.generate.neutral.cTarget},standard:{label:(0,t.jsx)(j.Z,{icon:(0,t.jsx)(m.QlJ,{}),title:"\u660E\u5EA6\u6807\u51C6"}),value:B.generate.neutral.standard}},oe=(k={},D()(k,"\u4E0A\u68AF\u5EA6 \u8272\u5EA6\u66F2\u7EBF",(0,n.so)({cEasingUp:(0,L.W)(B.generate.neutral.cEasingUp)},{collapsed:!0,color:"#8c92a4"})),D()(k,"\u4E0B\u68AF\u5EA6 \u8272\u5EA6\u66F2\u7EBF",(0,n.so)({cEasingDown:(0,L.W)(B.generate.neutral.cEasingDown)},{collapsed:!0,color:"#8c92a4"})),k),N={displayFliterStep:{label:(0,t.jsx)(j.Z,{icon:(0,t.jsx)(m.L52,{}),title:"\u53EA\u663E\u793A\u7B5B\u9009\u540E\u68AF\u5EA6"}),render:function(g){return g("isFliterStep")},value:B.system.pattern.displayFliterStep},isFliterStep:{label:(0,t.jsx)(j.Z,{icon:(0,t.jsx)(m.rlr,{}),title:"\u5F00\u542F\u68AF\u5EA6\u7B5B\u9009"}),value:B.system.pattern.isFliterStep},isolateDark:{label:(0,t.jsx)(j.Z,{icon:(0,t.jsx)(m.Wwj,{}),title:"\u4EAE\u6697\u4E3B\u8272\u5206\u79BB"}),value:B.system.pattern.isolateDark}},me={down:{label:(0,t.jsx)(j.Z,{icon:(0,t.jsx)(m.RgI,{}),title:"\u5411\u4E0B\u68AF\u5EA6"}),min:1,step:1,value:B.generate.step.down},up:{label:(0,t.jsx)(j.Z,{icon:(0,t.jsx)(m.hNW,{}),title:"\u5411\u4E0A\u68AF\u5EA6"}),min:1,step:1,value:B.generate.step.up}},Q={isolateEdit:{label:(0,t.jsx)(j.Z,{icon:(0,t.jsx)(m.Wwj,{}),title:"\u4EAE\u6697\u8C03\u8282\u5206\u79BB"}),value:B.system.edit.isolateEdit}},J=["mix","hex","hct","rgb","hsl","hsv","cts"],ie={colorType:{label:(0,t.jsx)(j.Z,{icon:(0,t.jsx)(m.Nn4,{}),title:"\u8272\u5F69\u7A7A\u95F4"}),options:J,value:"hct"},showDetail:{label:(0,t.jsx)(j.Z,{icon:(0,t.jsx)(m.tK,{}),title:"\u8BE6\u7EC6\u6A21\u5F0F"}),value:!0}},K={autoRotate:{label:(0,t.jsx)(j.Z,{icon:(0,t.jsx)(m.zkR,{}),title:"\u81EA\u52A8\u65CB\u8F6C"}),value:!0},hueZoom:{label:(0,t.jsx)(j.Z,{icon:(0,t.jsx)(m.L52,{}),title:"\u8272\u76F8\u7F29\u653E"}),max:10,min:1,step:1,value:3.6},showFloor:{label:(0,t.jsx)(j.Z,{icon:(0,t.jsx)(m.L52,{}),title:"\u663E\u793A\u8F85\u52A9\u7EBF"}),value:!0},threeZoom:{label:(0,t.jsx)(j.Z,{icon:(0,t.jsx)(m.dYt,{}),title:"\u6A21\u578B\u5C3A\u5BF8"}),max:100,min:1,step:1,value:8}},H={codeType:{label:(0,t.jsx)(j.Z,{icon:(0,t.jsx)(m.dNJ,{}),title:"\u53D8\u91CF\u683C\u5F0F"}),options:["css","less","scss","js"],value:"css"},colorType:{label:(0,t.jsx)(j.Z,{icon:(0,t.jsx)(m.Nn4,{}),title:"\u8272\u5F69\u7A7A\u95F4"}),options:["mix","hex","rgb","hsl"],value:"mix"},isolateDarkToken:{label:(0,t.jsx)(j.Z,{icon:(0,t.jsx)(m.Wwj,{}),title:"\u4EAE\u6697\u53D8\u91CF\u5206\u79BB"}),value:!0}},xe=function(g){var Z=g.edit,Y=g.step,S=g.hue,ce=g.neutral,ae=g.neutralAdvance,re=g.lightUp,$=g.lightUpAdvance,le=g.lightDown,X=g.lightDownAdvance,ue=g.darkUp,fe=g.darkUpAdvance,pe=g.darkDown,De=g.darkDownAdvance,je={dark:{down:Z.isolateEdit?a()(a()({},pe),{},{darkDownAdvance:De}):a()(a()({},re),$),up:Z.isolateEdit?a()(a()({},ue),fe):a()(a()({},le),X)},hue:S,light:{down:a()(a()({},le),X),up:a()(a()({},re),$)},neutral:a()(a()({},ce),ae),step:Y};return JSON.parse(JSON.stringify(je))},w=function(g,Z){var Y=Z.system,S=Z.stepFliter,ce=Z.generate,ae=Y.pattern,re=new O.Z(ce),$={dark:re.gen(ae.isolateDark?g.darkColor:g.color,{neutral:g.type==="neutral",theme:"dark"}),light:re.gen(g.color,{neutral:g.type==="neutral",theme:"light"})},le=$;return ae.isFliterStep&&ae.displayFliterStep&&(S==null?void 0:S.length)>0&&($={dark:$.dark.filter(function(X,ue){return S.includes(ue)}),light:$.light.filter(function(X,ue){return S.includes(ue)})}),{color:le.light[ce.step.up],darkColor:le.dark[ce.step.up],scales:$}},ve=E.Z,de=function(U){return U.access="access",U.display="display",U.edit="edit",U.export="export",U.pattern="pattern",U}(de||{}),et=(0,v.memo)(function(U){var g=U.logo,Z=U.logoHref,Y=U.title,S=U.showFooter,ce=S===void 0?!0:S,ae=U.forceConfig,re=U.onChange,$=(0,d.Z)("antd-color-tabkey",{defaultValue:o.R.colors}),le=u()($,2),X=le[0],ue=le[1],fe=(0,d.Z)("antd-color-panelkey",{defaultValue:de.edit}),pe=u()(fe,2),De=pe[0],je=pe[1],nt=(0,v.useState)(B.colorList),Ce=u()(nt,2),Ee=Ce[0],ot=Ce[1],at=(0,v.useState)(B.stepFliter),ye=u()(at,2),Ae=ye[0],rt=ye[1];(0,v.useEffect)(function(){ae&&te(ae)},[]);var Oe=(0,n.WQ)(),Te=(0,n.WQ)(),Be=(0,n.WQ)(),Ie=(0,n.WQ)(),Le=(0,n.WQ)(),We=(0,n.WQ)(),Ue=(0,n.WQ)(),Ze=(0,n.WQ)(),Re=(0,n.WQ)(),be=(0,n.WQ)(),Fe=(0,n.WQ)(),Se=(0,n.WQ)(),Ke=(0,n.WQ)(),ke=(0,n.WQ)(),we=(0,n.WQ)(),ze=(0,n.WQ)(),He=(0,n.WQ)(),_e=(0,n.M4)(Q,{store:Oe}),lt=(0,n.M4)(b,{store:Te}),st=(0,n.M4)(ee.lightUp,{store:Be}),it=(0,n.M4)(ee.lightDown,{store:Ie}),dt=(0,n.M4)(ee.darkUp,{store:Le}),ct=(0,n.M4)(ee.darkDown,{store:We}),ut=(0,n.M4)(W.lightUp,{store:Ue}),vt=(0,n.M4)(W.lightDown,{store:Ze}),_t=(0,n.M4)(W.darkUp,{store:Re}),ht=(0,n.M4)(W.darkDown,{store:be}),mt=(0,n.M4)(ne,{store:Fe}),gt=(0,n.M4)(oe,{store:Se}),Pe=(0,n.M4)(N,{store:Ke}),pt=(0,n.M4)(me,{store:ke}),Ve=(0,n.M4)(ie,{store:we}),Et=(0,n.M4)(K,{store:ze}),xt=(0,n.M4)(H,{store:He}),Ge=xe({darkDown:ct,darkDownAdvance:ht,darkUp:dt,darkUpAdvance:_t,edit:_e,hue:lt,lightDown:it,lightDownAdvance:vt,lightUp:st,lightUpAdvance:ut,neutral:mt,neutralAdvance:gt,step:pt}),ge={colorList:Ee,generate:Ge,stepFliter:Ae,system:{edit:_e,pattern:Pe}},Ne=[{header:"\u8C03\u8272\u914D\u7F6E",panel:(0,t.jsx)(l.MT,{store:Oe})},{header:_e.isolateEdit?"LIGHT \u4E0A\u68AF\u5EA6":"\u4E0A\u68AF\u5EA6",panel:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.MT,{store:Be}),(0,t.jsx)(ve,{title:"\u9AD8\u7EA7\u914D\u7F6E",children:(0,t.jsx)(l.MT,{store:Ue})})]})},{header:_e.isolateEdit?"LIGHT \u4E0B\u68AF\u5EA6":"\u4E0B\u68AF\u5EA6",panel:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.MT,{store:Ie}),(0,t.jsx)(ve,{title:"\u9AD8\u7EA7\u914D\u7F6E",children:(0,t.jsx)(l.MT,{store:Ze})})]})},{header:"DARK \u4E0A\u68AF\u5EA6",hidden:!_e.isolateEdit,panel:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.MT,{store:Le}),(0,t.jsx)(ve,{title:"\u9AD8\u7EA7\u914D\u7F6E",children:(0,t.jsx)(l.MT,{store:Re})})]})},{header:"DARK \u4E0B\u68AF\u5EA6",hidden:!_e.isolateEdit,panel:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.MT,{store:We}),(0,t.jsx)(ve,{title:"\u9AD8\u7EA7\u914D\u7F6E",children:(0,t.jsx)(l.MT,{store:be})})]})},{header:"\u8272\u76F8\u65CB\u8F6C\u8865\u507F",panel:(0,t.jsx)(l.MT,{store:Te})},{header:"Neutal \u4E2D\u6027\u8272",panel:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.MT,{store:Fe}),(0,t.jsx)(ve,{title:"\u9AD8\u7EA7\u914D\u7F6E",children:(0,t.jsx)(l.MT,{store:Se})})]})}],Qe=[{header:"\u8272\u677F\u914D\u7F6E",panel:(0,t.jsx)(l.MT,{store:Ke})},{header:"\u68AF\u5EA6\u9636\u68AF",panel:(0,t.jsx)(l.MT,{store:ke})},{header:"\u68AF\u5EA6\u7B5B\u9009",hidden:!Pe.isFliterStep,panel:(0,t.jsx)(M.Z,{color:Ee[0],config:Ge,defaultFliter:Ae,onChange:rt})},{header:"\u8272\u677F\u5217\u8868",panel:(0,t.jsx)(C.Z,{colorList:Ee,isolateDark:Pe.isolateDark,setColorList:ot})}],Je=[{header:"\u5C55\u793A\u914D\u7F6E",panel:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.MT,{store:we}),(0,t.jsx)(ve,{defaultExpand:!0,title:"\u6A21\u578B\u89C6\u56FE",children:(0,t.jsx)(l.MT,{store:ze})})]})}],Ye=[{header:"\u53D8\u91CF\u914D\u7F6E",panel:(0,t.jsx)(l.MT,{store:He})}],he=Ee.map(function(se,Dt){var Me=w(se,ge),$e=Me.scales,Xe=Me.color,qe=Me.darkColor;return{color:Xe,darkColor:qe,dom:(0,t.jsx)(p.Z,{color:a()(a()({},se),{},{color:Xe,darkColor:qe}),config:ge,displayConfig:Ve,scales:$e},Dt),name:se.title,scales:$e}});(0,v.useEffect)(function(){re&&re(he.map(function(se){return{name:se.name,scales:se.scales}}))},[ge]);var ft=(0,v.useMemo)(function(){return[{children:(0,t.jsx)(r.Z,{panels:Ne}),key:de.edit,label:"\u8C03\u8272"},{children:(0,t.jsx)(r.Z,{panels:Qe}),key:de.pattern,label:"\u8272\u677F"},{children:(0,t.jsx)(c.Z,{data:he}),key:de.access,label:"\u53EF\u8BFB\u6027"},{children:(0,t.jsx)(r.Z,{panels:Je}),key:de.display,label:"\u89C6\u56FE"},{children:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.Z,{panels:Ye}),(0,t.jsx)(P.Z,{config:ge})]}),key:de.export,label:"\u5B58\u50A8"}]},[Ne,Qe,he,Je,Ye]);return(0,t.jsxs)(I.tk,{children:[(0,t.jsxs)(I.iz,{children:[(0,t.jsx)(o.Z,{logo:g,logoHref:Z,setTabKey:ue,tabKey:X||o.R.colors,title:Y}),X===o.R.colors&&(0,t.jsxs)(I.rB,{children:[he.map(function(se){return se.dom}),ce&&(0,t.jsx)(T.Z,{})]}),X===o.R.three&&(0,t.jsx)(y.Z,{config:a()(a()({},Et),Ve),data:he}),X===o.R.token&&(0,t.jsx)(A.Z,{config:xt,data:he}),X===o.R.config&&(0,t.jsx)(s.Z,{data:ge})]}),(0,t.jsx)(I.hu,{children:(0,t.jsx)(i.Z,{defaultActiveKey:De,items:ft,onChange:je})})]})}),tt=et},25139:function(R,x,e){var f=e(50959),a=e(13641),_=e(11527),u=a.ZP.div.withConfig({componentId:"sc-1ho68dl-0"})(["padding:24px;color:",";text-align:center;"],function(d){var i=d.theme;return i.colorTextSecondary}),E=(0,f.memo)(function(){return(0,_.jsx)(u,{children:"Made with \u2764 by Ant Group and Ant Design Community"})});x.Z=E},17605:function(R,x,e){var f=e(54306),a=e.n(f),_=e(92468),u=e(86745),E=e(50959),d=e(13641),i=e(11135),n=e(81133),v=e(11527),o=d.ZP.div.withConfig({componentId:"sc-12pa0ok-0"})(["width:240px;"]),l=d.ZP.div.withConfig({componentId:"sc-12pa0ok-1"})(["cursor:pointer;width:24px;min-width:24px;height:24px;border-radius:3px;"]),M=(0,E.memo)(function(C){var p=C.color,r=p===void 0?"#1677FF":p,c=C.onChange,P=C.listModify,T=(0,E.useState)(!1),y=a()(T,2),A=y[0],s=y[1],I=(0,u.WQ)(),h=(0,u.M4)(function(){return{HCT:{max:360,min:0,onChange:function(j){return m({HEX:(0,i.xC)(j)})},step:1,transient:!1,value:(0,i.Wg)(r)},HEX:{onChange:function(j){return m({HCT:(0,i.Wg)(j)})},transient:!1,value:r}}},{store:I}),D=a()(h,2),L=D[0].HEX,m=D[1];return(0,E.useEffect)(function(){c(L)},[L]),(0,v.jsx)(_.Z,{content:(0,v.jsx)(o,{children:(0,v.jsx)(u.MT,{fill:!0,flat:!0,store:I,theme:n.P,titleBar:!1})}),onOpenChange:s,open:A,trigger:"click",children:(0,v.jsx)(l,{onClick:function(){return P&&m({HEX:r})},style:{background:P?r:L}})})});x.Z=M},77002:function(R,x,e){e.d(x,{Z:function(){return C}});var f=e(9570),a=e(60910),_=e(1225),u=e(50959),E=e(13641),d=e(92935),i=e.n(d),n,v=(0,_.vJ)(n||(n=i()([`
  
  
	body {
		margin: 0;
		padding: 0;

		font-family: `,`;
		font-size: `,`px;
		line-height: 1;
		color: `,`;

		background-color: `,`;

		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}
  
  a {
	  line-height: 1;
  }

	* {
		box-sizing: border-box;
	}

	#root {
		min-height: 100vh;
	}

	::-webkit-scrollbar {
		width: 4px;
		height: 4px;
		margin-right: 4px;
		background-color: transparent;

		&-thumb {
			background-color: `,`; 
			border-radius: 4px; 
		}

		&-corner {
			display: none;
		}
    
	}
`])),function(p){var r=p.theme;return r.fontFamily},function(p){var r=p.theme;return r.fontSize},function(p){var r=p.theme;return r.colorTextBase},function(p){return p.theme.colorBgLayout},function(p){var r=p.theme;return r.colorFill}),o=v,l=e(11527),M=(0,u.memo)(function(p){var r=p.children,c=p.themeMode;return(0,a.Us)({ThemeContext:E.Ni}),(0,l.jsxs)(_.f6,{themeMode:c,children:[(0,l.jsx)(o,{}),(0,l.jsx)(f.Z,{children:r})]})}),C=M},38101:function(R,x,e){e.d(x,{AU:function(){return n},hu:function(){return u},iz:function(){return E},pY:function(){return v},rB:function(){return i},tk:function(){return _}});var f=e(90222),a=e(13641),_=a.ZP.div.withConfig({componentId:"sc-zddvoa-0"})(["position:relative;overflow:hidden;display:flex;align-items:stretch;height:100vh;"]),u=(0,a.ZP)(f._).withConfig({componentId:"sc-zddvoa-1"})(["position:relative;overflow:hidden;height:100%;label > svg{stroke:",";}.studio-collapse-title{margin:0 8px;font-size:10px;}.ant-collapse-content-box,.studio-collapse-title{> div{background:transparent !important;}.studio-collapse-title{margin-top:4px;background:"," !important;border-radius:4px !important;> div > div > div > div{border:none !important;}}.studio-divider{border-color:"," !important;}}div[class^='leva']{--leva-sizes-controlWidth:66%;--leva-colors-elevation1:",";--leva-colors-elevation2:transparent;--leva-colors-elevation3:",";--leva-colors-accent1:",";--leva-colors-accent2:",";--leva-colors-accent3:",";--leva-colors-highlight1:",";--leva-colors-highlight2:",";--leva-colors-highlight3:",";--leva-colors-vivid1:",";--leva-shadows-level1:unset;--leva-shadows-level2:unset;}.ant-tabs-nav-list{padding:1px 24px 2px;}.ant-tabs-tab-btn{font-size:12px;}.ant-collapse-header{padding:12px 14px !important;font-size:10px;font-weight:700;}.ant-tabs-nav{margin-bottom:0;}.ant-collapse-content-box{padding:0 4px 8px !important;}.ant-collapse-item:not(:last-child){border-bottom:1px solid ",";border-radius:0 !important;}.ant-tabs{position:relative;overflow:hidden;height:100%;}.ant-tabs-content-holder{position:relative;overflow-y:auto !important;height:100%;}"],function(o){var l=o.theme;return l.colorBgLayout},function(o){var l=o.theme;return l.colorFillTertiary},function(o){var l=o.theme;return l.colorBorder},function(o){var l=o.theme;return l.colorFill},function(o){var l=o.theme;return l.colorFillSecondary},function(o){var l=o.theme;return l.colorPrimary},function(o){var l=o.theme;return l.colorPrimaryHover},function(o){var l=o.theme;return l.colorPrimaryActive},function(o){var l=o.theme;return l.colorTextTertiary},function(o){var l=o.theme;return l.colorTextSecondary},function(o){var l=o.theme;return l.colorText},function(o){var l=o.theme;return l.colorWarning},function(o){var l=o.theme;return l.colorBorderSecondary}),E=a.ZP.div.withConfig({componentId:"sc-zddvoa-2"})(["position:relative;overflow:hidden;flex:1;height:100%;"]),d=a.ZP.div.withConfig({componentId:"sc-zddvoa-3"})(["position:relative;overflow-x:hidden;overflow-y:auto;width:100%;height:calc(100% - 46px);padding:24px;"]),i=(0,a.ZP)(d).withConfig({componentId:"sc-zddvoa-4"})(["display:flex;flex-direction:column;gap:8px;padding-bottom:48px;"]),n=(0,a.ZP)(d).withConfig({componentId:"sc-zddvoa-5"})(["pre{background:none !important;}"]),v=a.ZP.div.withConfig({componentId:"sc-zddvoa-6"})(["display:flex;align-items:center;> svg{margin-right:4px;}"])},49127:function(R,x){var e=function(){var a,_=document.createElement("a"),u=function(i,n){a="data:text/Json;charset=utf-8,"+encodeURIComponent(i),_.download=n,_.style.display="none",_.href=a,document.body.append(_)},E=function(){_.click(),URL.revokeObjectURL(_.href),_.remove()};return{content:a,setContent:u,startDownload:E}};x.Z=e},1310:function(R,x,e){var f=e(7218),a=function(){return{format:f.ZP.format}};x.Z=a},81133:function(R,x,e){e.d(x,{P:function(){return f},Z:function(){return a}});var f={colors:{elevation1:"rgba(0, 0, 0, 0.03)",elevation2:"#fff",elevation3:"rgba(0, 0, 0, 0.03)",highlight1:"#999",highlight2:"#666",highlight3:"#333"}},a={colors:{elevation2:"#000"}}}}]);
