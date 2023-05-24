(self.webpackChunkkitchen_color_studio=self.webpackChunkkitchen_color_studio||[]).push([[252],{81144:function(r,a,t){"use strict";t.r(a);var s=t(72314),i=t(56201),n=t(50959),m=t(70056),d=t(11527),u=function(){var l=(0,m.f)(function(c){return c.themeMode}),g=(0,i.pC)();return(0,d.jsx)(s.Z,{themeMode:l,children:g})};a.default=u},72314:function(r,a,t){"use strict";t.d(a,{Z:function(){return M}});var s=t(50632),i=t(84772),n=t(50959),m=t(28734),d=t(92935),u=t.n(d),f,l=(0,i.vJ)(f||(f=u()([`
  
  
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
`])),function(e){var o=e.theme;return o.fontFamily},function(e){var o=e.theme;return o.fontSize},function(e){var o=e.theme;return o.colorTextBase},function(e){return e.theme.colorBgLayout},function(e){var o=e.theme;return o.colorFill}),g=l,c=t(43957),h=t(11527),C=(0,n.memo)(function(e){var o=e.children,y=e.themeMode;return(0,s.Us)({ThemeContext:m.Ni}),(0,h.jsxs)(i.f6,{themeMode:y,children:[(0,h.jsx)(g,{}),(0,h.jsx)(c.Z,{children:o})]})}),M=C},43957:function(r,a,t){"use strict";t.d(a,{Z:function(){return y}});var s=t(84875),i=t.n(s),n=t(50959),m=t(95818),d=t(67631),u=t(45571),f=t(15448);const l=n.createContext({});var c=n.createContext({message:{},notification:{},modal:{}}),h=t(26300);const C=v=>{const{componentCls:E,colorText:O,fontSize:P,lineHeight:A,fontFamily:p}=v;return{[E]:{color:O,fontSize:P,lineHeight:A,fontFamily:p}}};var M=(0,h.Z)("App",v=>[C(v)]);const e=()=>n.useContext(c),o=v=>{const{prefixCls:E,children:O,className:P,rootClassName:A,message:p,notification:j,style:B}=v,{getPrefixCls:Z}=(0,n.useContext)(m.E_),D=Z("app",E),[b,I]=M(D),N=i()(I,D,P,A),x=(0,n.useContext)(l),T=n.useMemo(()=>({message:Object.assign(Object.assign({},x.message),p),notification:Object.assign(Object.assign({},x.notification),j)}),[p,j,x.message,x.message]),[L,R]=(0,d.Z)(T.message),[S,U]=(0,f.Z)(T.notification),[z,H]=(0,u.Z)(),K=n.useMemo(()=>({message:L,notification:S,modal:z}),[L,S,z]);return b(n.createElement(c.Provider,{value:K},n.createElement(l.Provider,{value:T},n.createElement("div",{className:N,style:B},H,R,U,O))))};o.useApp=e;var y=o},92935:function(r){function a(t,s){return s||(s=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(s)}}))}r.exports=a,r.exports.__esModule=!0,r.exports.default=r.exports}}]);
