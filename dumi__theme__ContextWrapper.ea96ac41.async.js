(self.webpackChunkkitchen_color_studio=self.webpackChunkkitchen_color_studio||[]).push([[458],{21140:function(u,c,t){"use strict";t.r(c),t.d(c,{default:function(){return tt}});var o={};t.r(o),t.d(o,{AccessBlock:function(){return I.Z},AccessPanel:function(){return p.Z},Accessibility:function(){return G.Z},AccessibilityTag:function(){return H.Z},CollapsePanel:function(){return P.V0},ColorStudio:function(){return D.Z},ColorsList:function(){return F.Z},ExportPanel:function(){return K.Z},Footer:function(){return A.Z},GenColor3D:function(){return R.Z},GenerateScale:function(){return b.Z},HctPicker:function(){return Z.Z},JsonView:function(){return O.Z},Label:function(){return z.Z},LevaPanel:function(){return P.MT},NavBar:function(){return S.Z},Panel:function(){return P.s_},PanelGroup:function(){return W.Z},ScaleBlock:function(){return T.Z},ScalePreview:function(){return n.Z},ScaleRow:function(){return r.Z},StepFliter:function(){return V.Z},TabKey:function(){return S.R},ThemeProvider:function(){return Y.Z},ThreeView:function(){return M.Z},TokenView:function(){return B.Z},W3cShield:function(){return J.Z},colorTypeFormat:function(){return k.Z},genScaleTestList:function(){return w.Z},getAlphaColor:function(){return $.Z},hctToHex:function(){return m.xC},hexToHct:function(){return m.Wg},levaDarkTheme:function(){return y.Z},levaLightTheme:function(){return y.P},readable:function(){return U.P},toCtsString:function(){return m.Ro},toHctString:function(){return m.ch},useDownload:function(){return Q.Z},usePrettier:function(){return X.Z},useSketchJSON:function(){return N.Z}});var f=t(54306),s=t.n(f),l=t(57213),h=t.n(l),v=t(50959),a=t(56201),e=t(29981),i=t.n(e),g=t(59161),d=t(63227),x=t(6618),Z=t(66880),n=t(89012),r=t(9825),T=t(96302),A=t(6836),D=t(11823),S=t(61211),O=t(9799),B=t(75561),M=t(43055),p=t(32101),R=t(27505),P=t(29919),W=t(13986),F=t(66478),K=t(24316),V=t(29013),z=t(21958),G=t(24315),U=t(48721),H=t(8091),I=t(57707),J=t(77042),N=t(25326),Q=t(42342),X=t(29402),Y=t(72314),y=t(93538),m=t(73559),$=t(79073),b=t(71939),k=t(17229),w=t(49309),q=t(11527),_=h()({},o);function tt(){var nt=(0,a.pC)(),ot=(0,v.useState)(!0),C=s()(ot,2),rt=C[0],j=C[1],E=(0,v.useRef)(a.m8.location.pathname);return(0,v.useEffect)(function(){return a.m8.listen(function(L){L.location.pathname!==E.current&&(E.current=L.location.pathname,j(!0),i().start(),document.documentElement.scrollTo(0,0))})},[]),(0,q.jsx)(g.D.Provider,{value:{pkg:{name:"kitchen-color-studio",description:"an open-source color editor for designing color system",version:"1.0.0",repository:{type:"git",url:"https://github.com/canisminor1990/kitchen-color-studio.git"},author:"canisminor1990 <i@canisminor.cc>"},historyType:"browser",entryExports:_,demos:d.DE,components:d.wx,locales:x.k,loading:rt,setLoading:j,themeConfig:{title:"Kitchen Color Studio",footer:"Made with \u2764\uFE0F by Kitchen",prefersColor:{default:"light",switch:!0},nprogress:!0,logo:"https://gw.alipayobjects.com/zos/bmw-prod/af1ea898-bf02-45d1-9f30-8ca851c70a5b.svg",name:"Kitchen Color Studio",description:'an open-source color editor for designing color system"',socialLinks:{github:"https://github.com/canisminor1990/kitchen-color-studio"}},_2_level_nav_available:!1},children:nt})}},24315:function(u,c,t){"use strict";var o=t(50959),f=t(28734),s=t(57707),l=t(11527),h=f.ZP.div.withConfig({componentId:"sc-54piqg-0"})(["position:relative;display:flex;flex-direction:column;width:100%;"]),v=(0,o.memo)(function(a){var e=a.color1,i=a.color2;return(0,l.jsxs)(h,{children:[(0,l.jsx)(s.Z,{color1:e,color2:i,children:[e,"on",i].join(" ")}),(0,l.jsx)(s.Z,{color1:i,color2:e,children:[i,"on",e].join(" ")}),(0,l.jsx)(s.Z,{color1:"#fff",color2:e,children:["White text on",i].join(" ")}),(0,l.jsx)(s.Z,{color1:"#000",color2:e,children:["Black text on",i].join(" ")})]})});c.Z=v},72314:function(u,c,t){"use strict";t.d(c,{Z:function(){return Z}});var o=t(50632),f=t(84772),s=t(50959),l=t(28734),h=t(92935),v=t.n(h),a,e=(0,f.vJ)(a||(a=v()([`
  
  
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
`])),function(n){var r=n.theme;return r.fontFamily},function(n){var r=n.theme;return r.fontSize},function(n){var r=n.theme;return r.colorTextBase},function(n){return n.theme.colorBgLayout},function(n){var r=n.theme;return r.colorFill}),i=e,g=t(43957),d=t(11527),x=(0,s.memo)(function(n){var r=n.children,T=n.themeMode;return(0,o.Us)({ThemeContext:l.Ni}),(0,d.jsxs)(f.f6,{themeMode:T,children:[(0,d.jsx)(i,{}),(0,d.jsx)(g.Z,{children:r})]})}),Z=x},92935:function(u){function c(t,o){return o||(o=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(o)}}))}u.exports=c,u.exports.__esModule=!0,u.exports.default=u.exports}}]);
