(this["webpackJsonppomodoro-clone"]=this["webpackJsonppomodoro-clone"]||[]).push([[0],{37:function(e,t,n){},57:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),c=n(12),s=n.n(c),a=(n(37),n(2)),i=n(7),l=function(){var e=r.a.useState("pomodoroCounter"),t=Object(i.a)(e,2),n=t[0],o=t[1];r.a.useEffect((function(){o("pomodoroCounter")}),[]);return{valueSelect:n,setValueSelect:o,toggleContent:function(e){o(e)}}},u={space:[4,8,12,16,32,60,64,128,"100%",20,10,70,"100vh",620,"480px",40,"20px","0px","30px","2px","12px",28,55,200,"58px","35px",540,335,23,0,3,120,"98px","14px","4px","10px","1px",35,30,25,15,-10,.2,2147483647,"3px",2e3,300],fontSizes:[13,16,18,24,28,20,22],fontWeights:[100,200,300,400,500,600,700,800,900,"bold"],lineHeights:[1.5,1.8,2,2.5],borderRadiuss:[4,6,3,50],borders:["1px solid","2px solid","4px solid","6px solid","8px solid","10px solid"],opacities:[0,1,.9],radii:[0,2,4,6,8,10,12,16,.9],colors:{info:"#1ecbe1",primary:"#1676e9",danger:["#e72918","rgb(219, 82, 77)","rgba(182, 165, 166, 0.2)"],success:["#6bc33c","rgba(132, 199, 51, 0.8)"],warning:"#fff900",blacks:["rgba(0,0,0)","rgba(0,0,0,.1)","rgba(0,0,0,.2)","rgba(0,0,0,.25)","rgba(0,0,0,.3)","rgba(0,0,0,.4)","rgba(0,0,0,.5)","rgba(0,0,0,.6)","rgba(0,0,0,.7)","rgba(0,0,0,.8)","rgba(0,0,0,.9)","rgba(0, 0, 0, 0.15)","rgba(0, 0, 0, 0.1)"],whites:["rgba(255,255,255,.1)","rgba(255,255,255,.2)","rgba(255,255,255,.3)","rgba(255,255,255,.4)","rgba(255,255,255,.5)","rgba(255,255,255,.6)","rgba(255,255,255,.7)","rgba(255,255,255,.8)","rgba(255,255,255,.9)","rgba(255, 255, 255, 0.1)"],greys:["rgb(187, 187, 187)","rgb(239, 239, 239)","rgb(85, 85, 85)","rgb(34, 34, 34)","rgb(204, 204, 204)"]}},d=n(4),b=function(e,t){var n=r.a.useState(e),o=Object(i.a)(n,2),c=o[0],s=o[1],a=r.a.useState(t),l=Object(i.a)(a,2),u=l[0],d=l[1],b=r.a.useState(!1),j=Object(i.a)(b,2),g=j[0],p=j[1];return r.a.useEffect((function(){s(e),d(t)}),[t,e]),r.a.useEffect((function(){var e=null;return g&&(e=setInterval((function(){s((function(e){return e-1})),d((function(e){return e}))}),1e3)),g&&0!==u&&0===c&&(s(59),d((function(e){return e-1}))),g&&0===u&&0===c&&(clearInterval(e),p(!1),s(0),d(0)),function(){return clearInterval(e)}}),[g,c,u]),{seconds:c,minutes:u,start:g,startCounter:function(){p(!0)},stopCounter:function(){p(!1)}}},j=n(1),g={checkCircle:"fa fa-check-circle",settings:"fa fa-cog",rightArrow:"fa fa-caret-right",minus:"fa fa-minus",cross:"fa fa-times"},p=function(e){var t=e.name,n=e.color,o=e.style;return Object(j.jsx)(a.a,{children:Object(j.jsx)("i",{className:g[t],color:n,style:o})})},h=function(e){var t=e.isActive,n=e.handleStopCounter;return Object(j.jsx)(a.a,{children:t?Object(j.jsxs)(a.b,{onClick:n,sx:{cursor:"pointer",border:"none",width:u.space[24],height:u.space[24],alignItems:"center",justifyContent:"center",display:"flex",fontSize:u.space[25],position:"absolute",right:u.space[26],top:u.space[27],background:"transparent"},children:[Object(j.jsx)(p,{name:"rightArrow"}),Object(j.jsx)(a.a,{sx:{width:u.space[21],height:u.space[21],fontSize:u.space[28],marginTop:u.space[29],alignItems:"center",justifyContent:"center",display:"flex",transform:"rotate(90deg)",position:"absolute",marginLeft:u.space[30]},children:Object(j.jsx)(p,{name:"minus"})})]}):null})},f=function(e){var t=e.valueSelect,n=e.startCounter,o=e.isActive,r=e.stopCounter,c=e.handleFalseACtive,s=e.handleActiveTrue,i="pomodoroCounter"===t?u.colors.danger[1]:"shortBreakCounter"===t?"rgb(70, 142, 145)":"longBreakCounter"===t?"rgb(67, 126, 168)":u.colors.danger[1];return Object(j.jsx)(a.c,{sx:{alignItems:"center",justifyContent:"center"},children:o?Object(j.jsx)(a.b,{onClick:function(){c&&c(),r()},sx:{cursor:"pointer",border:"none",outline:"none",marginTop:u.space[16],borderRadius:u.fontSizes[0],fontFamily:"ArialRoundedMTBold",fontSize:u.fontSizes[6],height:u.space[22],color:i,fontWeight:u.fontWeights[9],width:u.space[23],backgroundColor:u.colors.whites[8]},children:"STOP"}):Object(j.jsx)(a.b,{onClick:function(){n(),s()},sx:{cursor:"pointer",border:"none",outline:"none",marginTop:u.space[16],borderRadius:u.fontSizes[0],fontFamily:"ArialRoundedMTBold",fontSize:u.fontSizes[6],height:u.space[22],color:i,fontWeight:u.fontWeights[9],width:u.space[23],backgroundColor:u.colors.whites[8]},children:"START"})})},x=function(e){var t=e.valueSelect,n=(e.handleActive,e.isActive),o=e.handleStopCounter,r=e.handleFalseACtive,c=e.toggleContent,s=e.handleActiveTrue,i=Object(d.c)((function(e){return e.pomodoroCounter})),l=b(0,i.long),g=l.seconds,p=l.startCounter,x=l.minutes,m=l.stopCounter;return Object(j.jsxs)(a.c,{sx:{fontSize:u.space[31],fontWeight:"bold",marginTop:u.space[9],fontFamily:"ArialRoundedMTBold",color:"white",alignItems:"center",justifyContent:"center",flexDirection:"column"},children:[function(){if(0!==x||0!==g)return Object(j.jsxs)(a.c,{children:[Object(j.jsx)(a.a,{children:x<10?"0"+x:x}),Object(j.jsx)(a.a,{children:":"}),Object(j.jsx)(a.a,{children:g<10?"0"+g:g})]});r(),c("pomodoroCounter")}(),Object(j.jsx)(f,{startCounter:p,valueSelect:t,isActive:n,stopCounter:m,handleActiveTrue:s}),Object(j.jsx)(h,{isActive:n,handleStopCounter:o})]})},m=function(e){var t=e.valueSelect,n=e.isActive,o=e.handleStopCounter,r=e.toggleContent,c=e.handleFalseACtive,s=e.handleActiveTrue,i=Object(d.c)((function(e){return e.pomodoroCounter})),l=b(0,i.count),g=l.seconds,p=l.minutes,x=l.startCounter,m=l.stopCounter;return Object(j.jsxs)(a.c,{sx:{fontSize:u.space[31],fontWeight:"bold",marginTop:u.space[9],fontFamily:"ArialRoundedMTBold",color:"white",alignItems:"center",justifyContent:"center",flexDirection:"column"},children:[function(){if(0!==p||55!==g)return Object(j.jsxs)(a.c,{children:[Object(j.jsx)(a.a,{children:p<10?"0"+p:p}),Object(j.jsx)(a.a,{children:":"}),Object(j.jsx)(a.a,{children:g<10?"0"+g:g})]});setTimeout((function(){m(),c()})),r("shortBreakCounter")}(),Object(j.jsx)(f,{startCounter:x,stopCounter:m,valueSelect:t,isActive:n,handleFalseACtive:c,handleActiveTrue:s}),Object(j.jsx)(h,{isActive:n,handleStopCounter:o})]})},O=function(e){var t=e.valueSelect,n=e.isActive,o=e.handleStopCounter,r=e.handleFalseACtive,c=e.toggleContent,s=e.handleActiveTrue,i=e.autoBreakSwitch,l=Object(d.c)((function(e){return e.pomodoroCounter})),g=b(0,l.short),p=g.seconds,x=g.startCounter,m=g.minutes,O=g.stopCounter;return Object(j.jsxs)(a.c,{sx:{fontSize:u.space[31],fontWeight:"bold",marginTop:u.space[9],fontFamily:"ArialRoundedMTBold",color:"white",alignItems:"center",justifyContent:"center",flexDirection:"column"},children:[(i?(0===m&&0===p&&(r(),c("longBreakCounter")),0!==m&&0===p&&setTimeout((function(){s(),x()}),1e3)):0===m&&0===p&&(r(),c("longBreakCounter")),Object(j.jsxs)(a.c,{children:[Object(j.jsx)(a.a,{children:m<10?"0"+m:m}),Object(j.jsx)(a.a,{children:":"}),Object(j.jsx)(a.a,{children:p<10?"0"+p:p})]})),Object(j.jsx)(f,{startCounter:x,stopCounter:O,valueSelect:t,isActive:n,handleFalseACtive:r,handleActiveTrue:s}),Object(j.jsx)(h,{isActive:n,handleStopCounter:o})]})},C=function(e){var t=e.valueSelect,n=e.toggleContent,o=r.a.useState(!1),c=Object(i.a)(o,2),s=c[0],l=c[1],b=Object(d.c)((function(e){return e.pomodoroCounter.autoBreak})),g=function(){l((function(e){return!e}))},p=function(){l(!1)},h=function(){l(!0)},f=function(e){return function(){s?window.confirm("The timer is still running, are you sure you want to switch?")&&(n(e),p()):n(e)}},C=function(){s&&(window.confirm("Are you sure you wanto stop the counter?")&&"pomodoroCounter"===t?(n("shortBreakCounter"),g()):(n("pomodoroCounter"),g()))};return Object(j.jsx)(a.a,{sx:{width:u.space[14],margin:"auto",marginTop:u.space[15],borderRadius:u.borderRadiuss[1]},children:Object(j.jsxs)(a.a,{sx:{background:u.colors.whites[9],padding:[u.space[16],u.space[17],u.space[18]],borderRadius:u.borderRadiuss[1],marginBottom:u.space[9],width:u.space[8]},children:[Object(j.jsxs)(a.c,{sx:{justifyContent:"center",alignItems:"center"},children:[Object(j.jsx)(a.b,{onClick:f("pomodoroCounter"),sx:{border:"none",outline:"none",borderRadius:u.borderRadiuss[0],fontFamily:"ArialRoundedMTBold",fontSize:u.fontSizes[1],height:u.space[21],cursor:"pointer",background:"pomodoroCounter"===t?u.colors.blacks[11]:"transparent",color:u.colors.whites[8],opacity:u.opacities[1],fontWeight:u.fontWeights[9],display:"flex",justifyContent:"center",alignItems:"center"},children:"Pomodoro"}),Object(j.jsx)(a.b,{onClick:f("shortBreakCounter"),sx:{border:"none",color:u.colors.whites[8],borderRadius:u.borderRadiuss[0],fontFamily:"ArialRoundedMTBold",fontSize:u.fontSizes[1],height:u.space[21],cursor:"pointer",fontWeight:u.fontWeights[9],background:"shortBreakCounter"===t?u.colors.blacks[11]:"transparent",display:"flex",justifyContent:"center",alignItems:"center"},children:"Short Break"}),Object(j.jsx)(a.b,{onClick:f("longBreakCounter"),sx:{border:"none",outline:"none",color:u.colors.whites[8],borderRadius:u.borderRadiuss[0],fontFamily:"ArialRoundedMTBold",fontSize:u.fontSizes[1],height:u.space[21],cursor:"pointer",background:"longBreakCounter"===t?u.colors.blacks[11]:"transparent",fontWeight:u.fontWeights[9],display:"flex",justifyContent:"center",alignItems:"center"},children:"Long Break"})]}),"pomodoroCounter"===t?Object(j.jsx)(m,{valueSelect:t,isActive:s,handleStopCounter:C,toggleContent:n,handleFalseACtive:p,handleActiveTrue:h}):"shortBreakCounter"===t?Object(j.jsx)(O,{valueSelect:t,isActive:s,handleStopCounter:C,toggleContent:n,handleFalseACtive:p,autoBreakSwitch:b,handleActiveTrue:h}):Object(j.jsx)(x,{valueSelect:t,handleActive:g,isActive:s,handleStopCounter:C,toggleContent:n,handleFalseACtive:p,handleActiveTrue:h})]})})},v=n(14),y=n(3),S=function(e){var t=e.value,n=e.onChange,o=e.name;return Object(j.jsxs)(a.a,{sx:{width:u.space[32]},children:[Object(j.jsx)(a.a,{sx:{display:"block",fontSize:u.space[33],color:u.colors.greys[0],marginBottom:u.space[34]},children:"Long Break"}),Object(j.jsx)(a.d,{value:t,onChange:n,name:o,type:"number",min:"0",sx:{borderRadius:u.space[34],background:u.colors.greys[1],fontSize:u.space[3],padding:u.space[35],boxShadow:"none",border:"none",outline:"none",color:u.colors.greys[2],width:u.space[8],boxSizing:"border-box",fontFamily:"ArialRoundedMTBold"}})]})},k=function(e){var t=e.value,n=e.onChange,o=e.name;return Object(j.jsxs)(a.a,{sx:{width:u.space[32]},children:[Object(j.jsx)(a.a,{sx:{display:"block",fontSize:u.space[33],color:u.colors.greys[0],marginBottom:u.space[34]},children:"Pomodoro"}),Object(j.jsx)(a.d,{value:t,onChange:n,name:o,type:"number",min:"0",sx:{borderRadius:u.space[34],background:u.colors.greys[1],fontSize:u.space[3],padding:u.space[35],boxShadow:"none",border:"none",outline:"none",color:u.colors.greys[2],width:u.space[8],boxSizing:"border-box",fontFamily:"ArialRoundedMTBold"}})]})},w=function(e){var t=e.value,n=e.onChange,o=e.name;return Object(j.jsxs)(a.a,{sx:{width:u.space[32]},children:[Object(j.jsx)(a.a,{sx:{display:"block",fontSize:u.space[33],color:u.colors.greys[0],marginBottom:u.space[34]},children:"Short Break"}),Object(j.jsx)(a.d,{value:t,onChange:n,name:o,type:"number",min:"0",sx:{borderRadius:u.space[34],background:u.colors.greys[1],fontSize:u.space[3],padding:u.space[35],boxShadow:"none",border:"none",outline:"none",color:u.colors.greys[2],width:u.space[8],boxSizing:"border-box",fontFamily:"ArialRoundedMTBold",webkitTapHighlightColor:"transparent"}})]})},A=function(e){var t=e.values,n=e.onChange;return Object(j.jsxs)(a.a,{sx:{borderTop:"".concat(u.space[36]," solid ").concat(u.colors.danger[2]),borderBottom:"".concat(u.space[36]," solid ").concat(u.colors.danger[2]),paddingTop:u.space[16],paddingBottom:u.space[16],display:"flex",flexDirection:"column",justifyContent:"center",fontFamily:"ArialRoundedMTBold"},children:[Object(j.jsx)(a.a,{sx:{color:u.colors.greys[2],fontWeight:"bold",display:"flex",alignItems:"center"},children:"Time (minutes)"}),Object(j.jsxs)(a.a,{sx:{display:"flex",justifyContent:"space-between",marginTop:u.space[35]},children:[Object(j.jsx)(k,{value:t.count,onChange:n,name:"count"}),Object(j.jsx)(w,{value:t.short,onChange:n,name:"short"}),Object(j.jsx)(S,{value:t.long,onChange:n,name:"long"})]})]})},T="ADD_POMODORO_TIME",B="AUTO_BREAK",R=function(){var e=Object(d.c)((function(e){return e.pomodoroCounter.autoBreak})),t=Object(d.b)();return Object(j.jsx)(a.e,{checked:e,onChange:function(){return t({type:B})},sx:{cursor:"pointer",background:e?u.colors.success[1]:u.colors.greys[4]}})},z=function(){return Object(j.jsx)(a.c,{sx:{borderTop:[u.borders[0],u.colors.danger[2]],paddingBottom:u.space[9],paddingTop:u.space[9],flexDirection:"column",justifyContent:"center"},children:Object(j.jsxs)(a.c,{sx:{width:u.space[8],justifyContent:"space-between",alignItems:"center",display:"flex"},children:[Object(j.jsx)(a.c,{sx:{color:u.colors.greys[2],fontWeight:"bold",alignItems:"center"},children:"Auto start Breaks?"}),Object(j.jsx)(a.a,{children:Object(j.jsx)(R,{})})]})})},I=function(){var e=Object(d.c)((function(e){return e.pomodoroCounter})),t=r.a.useState(e),n=Object(i.a)(t,2),o=n[0],c=n[1],s=Object(d.b)(),l=E().closeModalDialog,b=r.a.useRef(null),g=r.a.useCallback((function(){c(e)}),[e]);r.a.useEffect((function(){g()}),[g]);var p=r.a.useCallback((function(e){0===e.count||0===e.short||0===e.long||(s({type:T,payload:e}),l())}),[l,s]),h=r.a.useCallback((function(e){var t=e.target;t instanceof Node&&b.current&&!b.current.contains(t)&&(l(),p(o))}),[l,p,o]);return r.a.useEffect((function(){return document.addEventListener("mousedown",h),function(){document.removeEventListener("mousedown",h)}}),[h]),Object(j.jsxs)(a.a,{ref:b,children:[Object(j.jsxs)(a.c,{sx:{width:u.space[8],justifyContent:"space-between",marginBottom:u.space[3],marginTop:u.space[10],fontFamily:"ArialRoundedMTBold"},children:[Object(j.jsx)(a.a,{sx:{fontSize:u.space[3],color:"rgb(187, 187, 187)",textTransform:"uppercase",fontWeight:"bold"},children:"TIMER SETTING"}),Object(j.jsx)(a.a,{onClick:function(){return p(o)},sx:{cursor:"pointer",fontSize:u.space[37],width:u.space[38],height:u.space[39],display:"flex",alignItems:"center",justifyContent:"flex-end"},children:Object(j.jsx)(a.a,{sx:{transform:"rotate(45deg)",color:"black",marginLeft:u.space[40],marginTop:u.space[41],opacity:u.space[42],zIndex:u.space[43]},children:"+"})})]}),Object(j.jsx)(A,{values:o,onChange:function(e){var t=e.target,n=t.name,r=t.value;c(Object(y.a)(Object(y.a)({},o),{},Object(v.a)({},n,Number(r))))}}),Object(j.jsx)(z,{}),Object(j.jsx)(a.a,{style:{borderTop:"".concat(u.space[36]," solid ").concat(u.colors.danger[2]),textAlign:"right",width:u.space[8]},children:Object(j.jsx)(a.b,{onClick:function(){return p(o)},sx:{marginTop:u.space[33],marginBottom:u.space[10],alignItems:"center",justifyContent:"center",textAlign:"center",borderRadius:u.borderRadiuss[0],cursor:"pointer",color:"white",opacity:u.opacities[2],fontSize:u.space[33],minWidth:u.space[11],backgroundColor:u.colors.greys[3],border:"".concat(u.borders[1]," ").concat(u.colors.greys[3]),display:"inline-block"},children:"OK"})})]})},F=n(25),M=n.n(F),W=function(e){var t=e.visible,n=e.closeModalDialog,o=e.content;return Object(j.jsx)(M.a,{open:t,contentStyle:{borderRadius:u.borderRadiuss[2],zIndex:u.space[45]},closeModalDialog:n,children:o&&o})},D=Object(o.createContext)(null),E=function(){return r.a.useContext(D)},L=function(e){var t=e.children,n=Object(o.useState)(!1),r=Object(i.a)(n,2),c=r[0],s=r[1],a=Object(o.useState)(),l=Object(i.a)(a,2),u=l[0],d=l[1],b=function(){s(!1)};return Object(j.jsxs)(D.Provider,{value:{setDialog:function(e){s(!0),d(e)},closeModalDialog:b},children:[t,Object(j.jsx)(W,{closeModalDialog:b,visible:c,content:u})]})},P=function(){var e=function(){var e=E().setDialog;return function(){e(Object(j.jsx)(I,{}))}}();return Object(j.jsx)(a.c,{sx:{justifyContent:"center",alignItems:"center"},children:Object(j.jsxs)(a.b,{onClick:e,sx:{display:"flex",alignItems:"center",justifyContent:"center",textAlign:"center",borderRadius:u.borderRadiuss[8],cursor:"pointer",opacity:u.radii[8],background:"none rgba(255, 255, 255, 0.2)",fontSize:u.fontSizes[0],minWidth:u.space[11],border:"none",outline:"none",color:u.colors.whites[8],fontWeight:u.fontWeights[5],fontFamily:"ArialRoundedMTBold"},children:[Object(j.jsx)(p,{name:"settings",style:{marginRight:u.space[0],fontSize:u.fontSizes[2]}}),Object(j.jsx)(a.a,{children:"Settings"})]})})},N=function(){return Object(j.jsx)(a.c,{sx:{width:u.space[8],height:u.space[5],justifyContent:"center",alignItems:"center",fontFamily:"ArialRoundedMTBold"},children:Object(j.jsxs)(a.c,{sx:{width:u.space[8],height:u.space[8],justifyContent:"space-between",alignItems:"center"},children:[Object(j.jsxs)(a.c,{sx:{color:u.colors.whites[8],fontSize:u.fontSizes[5],fontWeight:u.fontWeights[9]},children:[Object(j.jsx)(p,{name:"checkCircle",style:{color:u.colors.whites[8],width:u.space[9],marginRight:u.space[0]}}),Object(j.jsx)("span",{children:"Pomocounter"})]}),Object(j.jsx)(P,{})]})})},_=function(e){var t=e.valueSelect,n=e.toggleContent;return Object(j.jsxs)(a.a,{style:{width:u.space[13]},children:[Object(j.jsx)(N,{}),Object(j.jsx)(a.a,{sx:{margin:"auto",borderTop:"".concat(u.borders[0]," solid ").concat(u.colors.blacks[12])},children:Object(j.jsx)(a.a,{sx:{textAlign:"center",width:u.space[8]},children:Object(j.jsx)(C,{valueSelect:t,toggleContent:n})})})]})},H=function(){var e=l(),t=e.valueSelect,n=e.toggleContent,o="pomodoroCounter"===t?u.colors.danger[1]:"shortBreakCounter"===t?"rgb(70, 142, 145)":"longBreakCounter"===t?"rgb(67, 126, 168)":u.colors.danger[1];return Object(j.jsx)(a.c,{sx:{width:u.space[8],height:u.space[12],justifyContent:"center",background:o},children:Object(j.jsx)(_,{valueSelect:t,toggleContent:n})})},J=n(26),K=function(e){var t=e.children;return Object(j.jsx)(J.a,{theme:u,children:t})},G=function(){return Object(j.jsx)(L,{children:Object(j.jsx)(K,{children:Object(j.jsx)(H,{})})})},U=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,58)).then((function(t){var n=t.getCLS,o=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),o(e),r(e),c(e),s(e)}))},V=n(29),q=n(8),Q=n(19),X=n(30),Y=n.n(X),Z=n(31),$=n(32),ee={count:25,short:5,long:15,autoBreak:!1},te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case T:return Object(y.a)(Object(y.a)({},e),t.payload);case B:return Object(y.a)(Object(y.a)({},e),{},{autoBreak:!e.autoBreak});default:return e}},ne=Object(q.combineReducers)({pomodoroCounter:te}),oe={key:"root",storage:Y.a},re=Object(Q.a)(oe,ne),ce=function(){var e=Object(q.createStore)(re,Object(Z.composeWithDevTools)(Object(q.applyMiddleware)($.a)));return{store:e,persistor:Object(Q.b)(e)}}(),se=ce.store,ae=ce.persistor;s.a.render(Object(j.jsx)(d.a,{store:se,children:Object(j.jsx)(V.a,{loading:null,persistor:ae,children:Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(G,{})})})}),document.getElementById("root")),U()}},[[57,1,2]]]);
//# sourceMappingURL=main.57d0a3cd.chunk.js.map