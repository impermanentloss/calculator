(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],{78:function(e,t,n){},79:function(e,t,n){},86:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),c=n(61),r=n.n(c),s=(n(78),n(62)),l=n(63),o=n(33),u=n(69),d=n(68),b=(n(79),n(80),n(17)),h=n(27),j=n(8),m=n(110),g=n(88),p=n(95),f=n(112),x=n(97),O=n(111),A=n(98),v=n(100),y=n(101),w=n(102),C=n(113),B=n(28),S=n(105),V=n(114),k=n(106),I=n(107),L=n(21),P=n.n(L),N=n(109),z=n(64),F=n.n(z),W=n(99),E=n(103),T=n(104),R=n(108),M=n(53),H=n(3),D=function(){var e=Object(m.a)(),t=e.isOpen,n=e.onToggle,i=Object(g.a)().colorMode,c=Object(a.useState)([{uuid:"c2037d93-1f28-4bfc-8495-0afb54e7b962",name:"AVAX",priceChange:400,weight:50},{uuid:"9e4b081f-75ff-4ac5-9bf3-bc67e7ffeb0f",name:"WBTC",priceChange:150,weight:50}]),r=Object(j.a)(c,2),s=r[0],l=r[1],o=function(e){return Math.abs(e/100+1)},u=s.map((function(e){return o(e.priceChange)*e.weight/100})).reduce((function(e,t){return e+t}),0),d=s.map((function(e){return Math.pow(o(e.priceChange),e.weight/100)})).reduce((function(e,t){return e*t}),1),L=function(e,t){var n=new M.BigNumber(e),a=new M.BigNumber(t);return n.dividedBy(a).minus(1).dp(4)}(d,u),z=(s.map((function(e){return e.priceChange/100*(e.weight/100)})).reduce((function(e,t){return e+t}),0),Math.abs(L),s.map((function(e){return e.weight})).reduce((function(e,t){return Number(e)+Number(t)}),0)),D=function(){l([].concat(Object(b.a)(s),[{uuid:Object(N.a)(),priceChange:0,weight:100-z>=2?100-z:2}]))},J=function(){return l([{uuid:Object(N.a)(),name:"",priceChange:0,weight:50},{uuid:Object(N.a)(),name:"",priceChange:0,weight:50}])};return Object(H.jsxs)(p.a,{w:{md:"800px"},p:{base:0,md:5},m:6,mt:0,borderWidth:{base:0,md:1},rounded:"lg",borderColor:"linear(to-r, brand.300 ,brand.600)",children:[Object(H.jsxs)(p.a,{children:[Object(H.jsxs)(f.a,{columns:3,minChildWidth:"250px",children:[Object(H.jsxs)(x.a,{children:[Object(H.jsx)(x.c,{fontSize:"xl",children:"Impermanent Loss"}),s.length>1?Object(H.jsxs)(H.Fragment,{children:[Object(H.jsx)(x.d,{fontSize:"5xl",children:Object(H.jsx)(F.a,{value:L,formatValue:function(e){return P()(Math.abs(e)).format("0.00%")},duration:500})}),Object(H.jsx)(x.b,{children:Object(H.jsxs)(O.a,{color:"dark"===i?"gray.100":"gray.700",size:"xs",variant:"link",textDecoration:"underline",onClick:function(){return n()},my:1,children:[t?"Hide":"Show"," calculation"]})})]}):Object(H.jsxs)(A.a,{alignItems:"center",color:"blue.500",children:[Object(H.jsx)(W.a,{mr:"2"})," Add at least 2 assets m8"]})]}),100!==z&&Object(H.jsxs)(x.a,{color:100!==z?"brand.400":"green.500",children:[Object(H.jsx)(x.c,{fontSize:"xl",children:"Total Pool Weight"}),Object(H.jsx)(x.d,{fontSize:"5xl",children:P()(z/100).format("0%")}),Object(H.jsx)(x.b,{children:"Must equal 100!"})]})]}),t&&Object(H.jsxs)(p.a,{my:3,p:3,borderRadius:6,borderWidth:1,children:[Object(H.jsxs)(p.a,{mb:3,children:[Object(H.jsx)(v.a,{size:"sm",children:"Calculating Impermanent Loss"}),Object(H.jsx)(y.a,{fontStyle:"italic",children:"Impermanent Loss = Value of Pool / Asset Value if Held - 1"}),Object(H.jsxs)(y.a,{children:[P()(L).format("0.00")," ="," ",P()(d).format("0.00")," /"," ",P()(u).format("0.00")," - 1"]}),Object(H.jsxs)(y.a,{children:["(Impermanent Loss is formatted from"," ",P()(L).format("0.00")," to a % and made positive (losses cannot be negative) \u2192"," ",P()(Math.abs(L)).format("0.00%"),")"]})]}),Object(H.jsxs)(p.a,{mb:3,children:[Object(H.jsx)(v.a,{size:"sm",children:"Calculating 'Value of Pool'"}),Object(H.jsx)(y.a,{fontStyle:"italic",children:"To get the Pool Value, take each asset, put its weight divided by hundred to the power of the price change. Then multiply all these."}),Object(H.jsxs)(y.a,{children:[P()(d).format("0.00")," ="," ",s.map((function(e,t){return"".concat(o(e.priceChange),"^").concat(e.weight," / 100").concat(s.length!==t+1?" * ":"")}))]})]}),Object(H.jsxs)(p.a,{mb:3,children:[Object(H.jsx)(v.a,{size:"sm",children:"Calculating 'Asset Value if Held'"}),Object(H.jsx)(y.a,{fontStyle:"italic",children:"To get the Hold Value, take each asset, and multiply its price change by its weight, then divide by 100. Then add all these up."}),Object(H.jsxs)(y.a,{children:[P()(u).format("0.00")," ="," ",s.map((function(e,t){return"".concat(o(e.priceChange)," x ").concat(e.weight," / 100").concat(s.length!==t+1?" + ":"")}))]})]})]})]}),Object(H.jsx)(w.a,{my:6,display:{base:"none",md:"block"}}),Object(H.jsxs)(p.a,{display:{base:"block",md:"none"},mb:3,children:[Object(H.jsx)(O.a,{size:"sm",onClick:D,leftIcon:Object(H.jsx)(E.a,{}),variant:"solid",mr:3,colorScheme:s.length<=1?"blue":"gray",children:"Add Asset"}),Object(H.jsx)(O.a,{size:"sm",onClick:J,variant:"outline",leftIcon:Object(H.jsx)(T.a,{}),children:"Clear Assets"})]}),Object(H.jsx)(p.a,{mb:3,display:{base:"none",md:"block"},children:Object(H.jsxs)(C.a,{isInline:!0,spacing:4,children:[Object(H.jsx)(y.a,{w:175,fontWeight:"bold",children:"Asset"}),Object(H.jsx)(y.a,{w:175,fontWeight:"bold",children:"Price Changes by..."}),Object(H.jsx)(A.a,{alignItems:"center",w:175,fontWeight:"bold",color:100!==z?"brand.400":"inherit",children:Object(H.jsx)(y.a,{children:"Pool Weight"})})]})}),Object(H.jsx)(f.a,{columns:{base:1,sm:2,md:1},spacingX:3,children:s.map((function(e,t){return Object(H.jsxs)(p.a,{borderWidth:{base:1,md:0},p:{base:3,md:0},mb:{base:3,md:0},borderRadius:6,children:[Object(H.jsxs)(C.a,{align:{base:"start",md:"center"},direction:{base:"column",md:"row"},spacing:4,children:[Object(H.jsxs)(B.a,{w:175,children:[Object(H.jsxs)(S.a,{mb:2,display:{base:"block",md:"none"},children:["Asset ",t+1]}),Object(H.jsx)(V.a,{w:125,placeholder:"eg AVAX",value:e.name,onChange:function(t){return function(e,t){var n=s.map((function(n){return n.uuid===e.uuid?Object(h.a)(Object(h.a)({},n),{},{name:t.target.value}):n}));l(n)}(e,t)}})]}),Object(H.jsxs)(B.a,{w:175,children:[Object(H.jsx)(S.a,{mb:2,display:{base:"block",md:"none"},children:"Price changes by..."}),Object(H.jsxs)(k.a,{w:100,children:[Object(H.jsx)(V.a,{w:100,type:"number",placeholder:"0",step:"25",min:"-100",value:e.priceChange,onChange:function(t){!function(e,t){var n=s.map((function(n){return n.uuid===e.uuid?Object(h.a)(Object(h.a)({},n),{},{priceChange:t}):n}));l(n)}(e,t.target.value)}}),Object(H.jsx)(I.a,{color:"dark"===i?"gray.100":"gray.700",children:"%",fontWeight:"bold"})]})]}),Object(H.jsxs)(B.a,{w:175,children:[Object(H.jsx)(S.a,{mb:2,display:{base:"block",md:"none"},color:100!==z&&"brand.400",children:"Pool weight"}),Object(H.jsxs)(k.a,{w:100,children:[Object(H.jsx)(V.a,{w:100,type:"number",step:"1",min:"2",max:"100",placeholder:50,focusBorderColor:100!==z?"brand.400":"blue.500",borderColor:100!==z?"brand.400":"inherit",value:e.weight,onChange:function(t){return function(e,t){var n=s.map((function(n){return n.uuid===e.uuid?Object(h.a)(Object(h.a)({},n),{},{weight:t.target.value}):n}));l(n)}(e,t)}}),Object(H.jsx)(I.a,{color:"dark"===i?"gray.100":"gray.700",borderLeftColor:100!==z?"brand.400":"gray.200",children:"%",fontWeight:"bold"})]})]}),Object(H.jsx)(O.a,{variant:"outline",size:"sm",onClick:function(){return t=e,l(Object(b.a)(s.filter((function(e){return e.uuid!==t.uuid}))));var t},leftIcon:Object(H.jsx)(R.a,{}),children:"Remove"})]}),Object(H.jsx)(w.a,{my:6,display:{base:"none",md:"block"}})]},e.uuid)}))}),Object(H.jsx)(A.a,{alignItems:"center",justifyContent:"space-between",wrap:"wrap",children:Object(H.jsxs)(p.a,{mb:{base:3,sm:0},children:[Object(H.jsx)(O.a,{size:"sm",onClick:D,leftIcon:Object(H.jsx)(E.a,{}),variant:"solid",mr:3,colorScheme:s.length<=1?"blue":"gray",children:"Add Asset"}),Object(H.jsx)(O.a,{size:"sm",onClick:J,variant:"outline",leftIcon:Object(H.jsx)(T.a,{}),children:"Clear Assets"})]})})]})},J=[{name:"Bitcoin",symbol:"BTC",walletAdr:"1EHpwE4upzdSgzs4ErJcchJKGkzjgixsrx",logo:""},{name:"Ethereum",symbol:"ERC20",walletAdr:"0x58F7F9b524357571d376811369708E522A13Fc53",logo:""},{name:"Binance BNB",symbol:"ERC20",walletAdr:"0x58F7F9b524357571d376811369708E522A13Fc53",logo:""},{name:"Avalanche AVAX ",symbol:"ERC20",walletAdr:"0x58F7F9b524357571d376811369708E522A13Fc53",logo:""}],X={main:{marginBottom:"-15px"},header:{height:"150px",overflow:"hidden",paddingTop:"50px",paddingLeft:"20vw"},content:{background:"white",overflow:"hidden",padding:"50px"},footer:{background:"grey",overflow:"hidden",padding:"50px",color:"white"},input:{marginLeft:"5px",marginRight:"5px",minWidth:"250px"},table:{display:"table",margin:"auto"},table2:{display:"table",margin:"auto",paddingBottom:"120px"},textCenter:{textAlign:"center"}},q=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={initialValueA:0,initialValueB:0,initialAmountA:0,initialAmoungB:0,initialPriceAB:0,currentValueA:0,currentValueB:0,currentAmountA:0,currentAmountB:0,currentPriceAB:0,totalSpent:0,totalReceived:0,totalPotential:0,impermanentLossValue:0,impermanentLossPercent:0},a.changeValue=a.changeValue.bind(Object(o.a)(a)),a.calculateImpermanentLoss=a.calculateImpermanentLoss.bind(Object(o.a)(a)),a}return Object(l.a)(n,[{key:"getDonationComponent",value:function(){for(var e=[],t=0;t<J.length;++t)e.push(Object(H.jsxs)("div",{children:[J[t].name," (",J[t].symbol,"): ",J[t].walletAdr]}));return e}},{key:"calculateImpermanentLoss",value:function(){var e=0,t=0,n=this,a=function(){var e,t,a,i,c,r=0,s=0;0!=n.state.currentPriceAB&&(r=n.state.initialAmountA*Math.sqrt(n.state.initialPriceAB/n.state.currentPriceAB)),e=r*n.state.currentPriceAB,t=n.state.initialValueA*n.state.initialAmountA+n.state.initialValueB*n.state.initialAmountB,a=n.state.currentValueA*r+n.state.currentValueB*e,c=(i=n.state.currentValueA*n.state.initialAmountA+n.state.currentValueB*n.state.initialAmountB)-a,0!=t&&(s=c/i*100),n.setState({currentAmountA:r,currentAmountB:e}),isNaN(t)||n.setState({totalSpent:t}),isNaN(t)||n.setState({totalSpent:t}),isNaN(a)||n.setState({totalReceived:a}),isNaN(i)||n.setState({totalPotential:i}),isNaN(c)||n.setState({impermanentLossValue:c}),isNaN(s)||n.setState({impermanentLossPercent:s})};0!=this.state.initialValueB&&(e=this.state.initialValueA/this.state.initialValueB,this.setState({initialPriceAB:e},(function(){a()}))),0!=this.state.currentValueB&&(t=this.state.currentValueA/this.state.currentValueB,this.setState({currentPriceAB:t},(function(){a()}))),a()}},{key:"changeValue",value:function(e,t,n,a){var i=this;t?n?a?this.setState({initialValueA:e.target.value},(function(){return i.calculateImpermanentLoss()})):this.setState({initialAmountA:e.target.value},(function(){return i.calculateImpermanentLoss()})):a?this.setState({currentValueA:e.target.value},(function(){return i.calculateImpermanentLoss()})):this.setState({currentAmountA:e.target.value},(function(){return i.calculateImpermanentLoss()})):n?a?this.setState({initialValueB:e.target.value},(function(){return i.calculateImpermanentLoss()})):this.setState({initialAmountB:e.target.value},(function(){return i.calculateImpermanentLoss()})):a?this.setState({currentValueB:e.target.value},(function(){return i.calculateImpermanentLoss()})):this.setState({currentAmountB:e.target.value},(function(){return i.calculateImpermanentLoss()}))}},{key:"render",value:function(){return Object(H.jsxs)("div",{style:X.main,children:[Object(H.jsx)("div",{className:"header",style:X.header,children:Object(H.jsx)("h1",{children:"Impermanent loss calculator"})}),Object(H.jsx)("div",{className:"content",style:X.content,children:Object(H.jsx)("div",{style:X.table2,children:Object(H.jsx)(D,{})})}),Object(H.jsx)("div",{className:"footer",style:X.footer,children:Object(H.jsxs)("div",{style:X.table,children:[Object(H.jsx)("h2",{children:"Roadmap coming soon."}),"Sponsor this project by donating: ",Object(H.jsx)("br",{})," ",Object(H.jsx)("br",{}),this.getDonationComponent()]})})]})}}]),n}(i.a.Component),G=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,115)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),a(e),i(e),c(e),r(e)}))};r.a.render(Object(H.jsx)(i.a.StrictMode,{children:Object(H.jsx)(q,{})}),document.getElementById("root")),G()}},[[86,1,2]]]);
//# sourceMappingURL=main.ab5bbb07.chunk.js.map