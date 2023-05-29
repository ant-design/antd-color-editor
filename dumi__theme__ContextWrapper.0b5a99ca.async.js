(self.webpackChunkkitchen_color_studio=self.webpackChunkkitchen_color_studio||[]).push([[458],{45594:function(u,c,t){"use strict";t.r(c),t.d(c,{default:function(){return tt}});var o={};t.r(o),t.d(o,{AccessBlock:function(){return H.Z},AccessPanel:function(){return M.Z},Accessibility:function(){return z.Z},AccessibilityTag:function(){return I.Z},CollapsePanel:function(){return P.V0},ColorStudio:function(){return p.Z},ColorsList:function(){return F.Z},ExportPanel:function(){return K.Z},Footer:function(){return A.Z},GenColor3D:function(){return R.Z},GenerateScale:function(){return b.Z},HctPicker:function(){return Z.Z},JsonView:function(){return D.Z},Label:function(){return V.Z},LevaPanel:function(){return P.MT},NavBar:function(){return S.Z},Panel:function(){return P.s_},PanelGroup:function(){return W.Z},ScaleBlock:function(){return T.Z},ScalePreview:function(){return n.Z},ScaleRow:function(){return r.Z},StepFliter:function(){return U.Z},TabKey:function(){return S.R},ThemeProvider:function(){return Y.Z},ThreeView:function(){return B.Z},TokenView:function(){return O.Z},W3cShield:function(){return J.Z},colorTypeFormat:function(){return k.Z},genScaleTestList:function(){return w.Z},getAlphaColor:function(){return $.Z},hctToHex:function(){return m.xC},hexToHct:function(){return m.Wg},levaDarkTheme:function(){return y.Z},levaLightTheme:function(){return y.P},readable:function(){return G.P},toCtsString:function(){return m.Ro},toHctString:function(){return m.ch},useDownload:function(){return Q.Z},usePrettier:function(){return X.Z},useSketchJSON:function(){return N.Z}});var v=t(54306),s=t.n(v),l=t(57213),h=t.n(l),d=t(50959),a=t(51988),e=t(29981),i=t.n(e),g=t(70595),f=t(78277),x=t(85278),Z=t(77308),n=t(86611),r=t(99174),T=t(30107),A=t(81348),p=t(92730),S=t(34829),D=t(63688),O=t(64170),B=t(83907),M=t(47943),R=t(18004),P=t(32353),W=t(62725),F=t(14407),K=t(28818),U=t(4003),V=t(29703),z=t(60470),G=t(30421),I=t(65705),H=t(25015),J=t(92916),N=t(32066),Q=t(66127),X=t(23719),Y=t(50317),y=t(92670),m=t(51992),$=t(7225),b=t(4848),k=t(10676),w=t(33939),q=t(11527),_=h()({},o);function tt(){var nt=(0,a.pC)(),ot=(0,d.useState)(!0),C=s()(ot,2),rt=C[0],j=C[1],E=(0,d.useRef)(a.m8.location.pathname);return(0,d.useEffect)(function(){return a.m8.listen(function(L){L.location.pathname!==E.current&&(E.current=L.location.pathname,j(!0),i().start(),document.documentElement.scrollTo(0,0))})},[]),(0,q.jsx)(g.D.Provider,{value:{pkg:{name:"kitchen-color-studio",description:"an open-source color editor for designing color system",version:"1.1.0",repository:{type:"git",url:"https://github.com/ant-design/kitchen-color-studio.git"},author:"canisminor1990 <i@canisminor.cc>"},historyType:"browser",entryExports:_,demos:f.DE,components:f.wx,locales:x.k,loading:rt,setLoading:j,themeConfig:{title:"Kitchen Color Studio",footer:"Made with \u2764\uFE0F by Kitchen",prefersColor:{default:"light",switch:!0},nprogress:!0,logo:"https://gw.alipayobjects.com/zos/bmw-prod/af1ea898-bf02-45d1-9f30-8ca851c70a5b.svg",name:"Kitchen Color Studio",description:'an open-source color editor for designing color system"',socialLinks:{github:"https://github.com/ant-design/kitchen-color-studio"},apiHeader:{pkg:"kitchen-color-studio",match:["/components"],sourceUrl:"{github}/tree/master/src/{atomId}/index.tsx",docUrl:"{github}/tree/master/src/{atomId}/index.md"}},_2_level_nav_available:!1},children:nt})}},60470:function(u,c,t){"use strict";var o=t(50959),v=t(13641),s=t(25015),l=t(11527),h=v.ZP.div.withConfig({componentId:"sc-54piqg-0"})(["position:relative;display:flex;flex-direction:column;width:100%;"]),d=(0,o.memo)(function(a){var e=a.color1,i=a.color2;return(0,l.jsxs)(h,{children:[(0,l.jsx)(s.Z,{color1:e,color2:i,children:[e,"on",i].join(" ")}),(0,l.jsx)(s.Z,{color1:i,color2:e,children:[i,"on",e].join(" ")}),(0,l.jsx)(s.Z,{color1:"#fff",color2:e,children:["White text on",i].join(" ")}),(0,l.jsx)(s.Z,{color1:"#000",color2:e,children:["Black text on",i].join(" ")})]})});c.Z=d},50317:function(u,c,t){"use strict";t.d(c,{Z:function(){return Z}});var o=t(31398),v=t(84100),s=t(50959),l=t(13641),h=t(92935),d=t.n(h),a,e=(0,v.vJ)(a||(a=d()([`
  
  
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
`])),function(n){var r=n.theme;return r.fontFamily},function(n){var r=n.theme;return r.fontSize},function(n){var r=n.theme;return r.colorTextBase},function(n){return n.theme.colorBgLayout},function(n){var r=n.theme;return r.colorFill}),i=e,g=t(43957),f=t(11527),x=(0,s.memo)(function(n){var r=n.children,T=n.themeMode;return(0,o.Us)({ThemeContext:l.Ni}),(0,f.jsxs)(v.f6,{themeMode:T,children:[(0,f.jsx)(i,{}),(0,f.jsx)(g.Z,{children:r})]})}),Z=x},92935:function(u){function c(t,o){return o||(o=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(o)}}))}u.exports=c,u.exports.__esModule=!0,u.exports.default=u.exports}}]);
