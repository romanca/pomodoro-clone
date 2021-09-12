(this["webpackJsonppomodoro-clone"]=this["webpackJsonppomodoro-clone"]||[]).push([[0],{21:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),c=n(13),i=n.n(c),s=(n(21),n(6)),a=n(3),l=function(){var e=r.a.useState("pomodoroCounter"),t=Object(a.a)(e,2),n=t[0],o=t[1];return{valueSelect:n,setValueSelect:o,toggleContent:function(e){o(e)}}},u={space:[4,8,12,16,32,60,64,128,"100%",20,10,70,"100vh",620,"480px",40,"20px","0px","30px","2px","12px",28,55,200],fontSizes:[13,16,18,24,28,20,22],fontWeights:[100,200,300,400,500,600,700,800,900,"bold"],lineHeights:[1.5,1.8,2,2.5],borderRadiuss:[4,6],borders:["1px solid","2px solid","4px solid","6px solid","8px solid","10px solid"],opacities:[0,1],radii:[0,2,4,6,8,10,12,16,.9],colors:{info:"#1ecbe1",primary:"#1676e9",danger:["#e72918","rgb(219, 82, 77)"],success:"#6bc33c",warning:"#fff900",blacks:["rgba(0,0,0)","rgba(0,0,0,.1)","rgba(0,0,0,.2)","rgba(0,0,0,.25)","rgba(0,0,0,.3)","rgba(0,0,0,.4)","rgba(0,0,0,.5)","rgba(0,0,0,.6)","rgba(0,0,0,.7)","rgba(0,0,0,.8)","rgba(0,0,0,.9)","rgba(0, 0, 0, 0.15)","rgba(0, 0, 0, 0.1)"],whites:["rgba(255,255,255,.1)","rgba(255,255,255,.2)","rgba(255,255,255,.3)","rgba(255,255,255,.4)","rgba(255,255,255,.5)","rgba(255,255,255,.6)","rgba(255,255,255,.7)","rgba(255,255,255,.8)","rgba(255,255,255,.9)","rgba(255, 255, 255, 0.1)"]}},d=function(e,t){var n=r.a.useState(e),o=Object(a.a)(n,2),c=o[0],i=o[1],s=r.a.useState(t),l=Object(a.a)(s,2),u=l[0],d=l[1],b=r.a.useState(!1),h=Object(a.a)(b,2),j=h[0],g=h[1];return r.a.useEffect((function(){var e=null;return j&&(e=setInterval((function(){i((function(e){return e-1})),d((function(e){return e}))}),1e3)),j&&0!==u&&0===c&&(i(59),d((function(e){return e-1}))),j&&0===u&&0===c&&(clearInterval(e),g(!j),i(5),d(1)),function(){return clearInterval(e)}}),[j,c,u]),{seconds:c,minutes:u,start:j,startCounter:function(){g(!j)}}},b=n(1),h={checkCircle:"fa fa-check-circle",settings:"fa fa-cog",rightArrow:"fa fa-caret-right",minus:"fa fa-minus"},j=function(e){var t=e.name,n=e.color,o=e.style;return Object(b.jsx)(s.a,{children:Object(b.jsx)("i",{className:h[t],color:n,style:o})})},g=function(e){var t=e.isActive,n=e.handleStopCounter;return Object(b.jsx)(s.a,{children:t?Object(b.jsxs)(s.b,{onClick:n,sx:{cursor:"pointer",border:"none",width:58,height:58,alignItems:"center",justifyContent:"center",display:"flex",fontSize:35,position:"absolute",right:540,top:335,background:"transparent"},children:[Object(b.jsx)(j,{name:"rightArrow"}),Object(b.jsx)(s.a,{sx:{width:28,height:28,fontSize:23,marginTop:0,alignItems:"center",justifyContent:"center",display:"flex",transform:"rotate(90deg)",position:"absolute",marginLeft:3},children:Object(b.jsx)(j,{name:"minus"})})]}):null})},f=function(e){var t=e.valueSelect,n=e.startCounter,o=e.isActive,r=e.handleActive,c="pomodoroCounter"===t?u.colors.danger[1]:"shortBreakCounter"===t?"rgb(70, 142, 145)":"longBreakCounter"===t?"rgb(67, 126, 168)":u.colors.danger[1];return Object(b.jsx)(s.b,{onClick:function(){n(),r()},sx:{cursor:"pointer",border:"none",outline:"none",margin:"20px 0px 0px",borderRadius:u.fontSizes[0],fontFamily:"ArialRoundedMTBold",fontSize:u.fontSizes[6],height:u.space[22],color:c,fontWeight:u.fontWeights[9],width:u.space[23],backgroundColor:u.colors.whites[8]},children:o?"STOP":"START"})},x=function(e){var t=e.valueSelect,n=e.handleActive,o=e.isActive,r=e.handleStopCounter,c=d(0,15),i=c.seconds,a=c.startCounter,l=c.minutes;return Object(b.jsxs)(s.c,{sx:{fontSize:120,fontWeight:"bold",marginTop:20,fontFamily:"ArialRoundedMTBold",color:"white",alignItems:"center",justifyContent:"center",flexDirection:"column"},children:[Object(b.jsxs)(s.c,{children:[Object(b.jsx)(s.a,{children:l<10?"0"+l:l}),Object(b.jsx)(s.a,{children:":"}),Object(b.jsx)(s.a,{children:i<10?"0"+i:i})]}),Object(b.jsx)(f,{startCounter:a,valueSelect:t,isActive:o,handleActive:n}),Object(b.jsx)(g,{isActive:o,handleStopCounter:r})]})},p=function(e){var t=e.valueSelect,n=e.isActive,o=e.handleActive,r=e.handleStopCounter,c=d(0,25),i=c.seconds,a=c.minutes,l=c.startCounter;return Object(b.jsxs)(s.c,{sx:{fontSize:120,fontWeight:"bold",marginTop:20,fontFamily:"ArialRoundedMTBold",color:"white",alignItems:"center",justifyContent:"center",flexDirection:"column"},children:[Object(b.jsxs)(s.c,{children:[Object(b.jsx)(s.a,{children:a<10?"0"+a:a}),Object(b.jsx)(s.a,{children:":"}),Object(b.jsx)(s.a,{children:i<10?"0"+i:i})]}),Object(b.jsx)(f,{startCounter:l,valueSelect:t,isActive:n,handleActive:o}),Object(b.jsx)(g,{isActive:n,handleStopCounter:r})]})},m=function(e){var t=e.valueSelect,n=e.handleActive,o=e.isActive,r=e.handleStopCounter,c=d(0,5),i=c.seconds,a=c.startCounter,l=c.minutes;return Object(b.jsxs)(s.c,{sx:{fontSize:120,fontWeight:"bold",marginTop:20,fontFamily:"ArialRoundedMTBold",color:"white",alignItems:"center",justifyContent:"center",flexDirection:"column"},children:[Object(b.jsxs)(s.c,{children:[Object(b.jsx)(s.a,{children:l<10?"0"+l:l}),Object(b.jsx)(s.a,{children:":"}),Object(b.jsx)(s.a,{children:i<10?"0"+i:i})]}),Object(b.jsx)(f,{startCounter:a,valueSelect:t,isActive:o,handleActive:n}),Object(b.jsx)(g,{isActive:o,handleStopCounter:r})]})},C=function(e){var t=e.valueSelect,n=e.toggleContent,o=r.a.useState(!1),c=Object(a.a)(o,2),i=c[0],l=c[1],d=function(){l((function(e){return!e}))},h=function(e){return function(){i?window.confirm("The timer is still running, are you sure you want to switch?")&&(n(e),d()):n(e)}},j=function(){i&&(window.confirm("Are you sure you wanto stop the counter?")&&"pomodoroCounter"===t?(n("shortBreakCounter"),d()):(n("pomodoroCounter"),d()))};return Object(b.jsx)(s.a,{sx:{width:u.space[14],margin:"auto",marginTop:u.space[15],borderRadius:u.borderRadiuss[1]},children:Object(b.jsxs)(s.a,{sx:{background:u.colors.whites[9],padding:[u.space[16],u.space[17],u.space[18]],borderRadius:u.borderRadiuss[1],marginBottom:u.space[9],width:u.space[8]},children:[Object(b.jsxs)(s.c,{sx:{justifyContent:"center",alignItems:"center"},children:[Object(b.jsx)(s.b,{onClick:h("pomodoroCounter"),sx:{border:"none",outline:"none",borderRadius:u.borderRadiuss[0],fontFamily:"ArialRoundedMTBold",fontSize:u.fontSizes[1],height:u.space[21],cursor:"pointer",background:"pomodoroCounter"===t?u.colors.blacks[11]:"transparent",color:u.colors.whites[8],opacity:u.opacities[1],fontWeight:u.fontWeights[9],display:"flex",justifyContent:"center",alignItems:"center"},children:"Pomodoro"}),Object(b.jsx)(s.b,{onClick:h("shortBreakCounter"),sx:{border:"none",color:u.colors.whites[8],borderRadius:u.borderRadiuss[0],fontFamily:"ArialRoundedMTBold",fontSize:u.fontSizes[1],height:u.space[21],cursor:"pointer",fontWeight:u.fontWeights[9],background:"shortBreakCounter"===t?u.colors.blacks[11]:"transparent",display:"flex",justifyContent:"center",alignItems:"center"},children:"Short Break"}),Object(b.jsx)(s.b,{onClick:h("longBreakCounter"),sx:{border:"none",outline:"none",color:u.colors.whites[8],borderRadius:u.borderRadiuss[0],fontFamily:"ArialRoundedMTBold",fontSize:u.fontSizes[1],height:u.space[21],cursor:"pointer",background:"longBreakCounter"===t?u.colors.blacks[11]:"transparent",fontWeight:u.fontWeights[9],display:"flex",justifyContent:"center",alignItems:"center"},children:"Long Break"})]}),"pomodoroCounter"===t?Object(b.jsx)(p,{valueSelect:t,isActive:i,handleActive:d,handleStopCounter:j}):"shortBreakCounter"===t?Object(b.jsx)(m,{valueSelect:t,handleActive:d,isActive:i,handleStopCounter:j}):Object(b.jsx)(x,{valueSelect:t,handleActive:d,isActive:i,handleStopCounter:j})]})})},O=function(){return Object(b.jsx)(s.c,{sx:{width:u.space[8],height:u.space[5],justifyContent:"center",alignItems:"center"},children:Object(b.jsxs)(s.c,{sx:{width:u.space[8],height:u.space[8],justifyContent:"space-between",alignItems:"center"},children:[Object(b.jsxs)(s.c,{sx:{color:u.colors.whites[8],fontSize:u.fontSizes[5],fontWeight:u.fontWeights[9]},children:[Object(b.jsx)(j,{name:"checkCircle",style:{color:u.colors.whites[8],width:u.space[9],marginRight:u.space[0]}}),Object(b.jsx)("span",{children:"Pomocounter"})]}),Object(b.jsx)(s.c,{sx:{justifyContent:"center",alignItems:"center"},children:Object(b.jsxs)(s.b,{sx:{display:"flex",alignItems:"center",justifyContent:"center",textAlign:"center",borderRadius:u.borderRadiuss[8],cursor:"pointer",opacity:u.radii[8],background:"none rgba(255, 255, 255, 0.2)",fontSize:u.fontSizes[0],minWidth:u.space[11],border:"none",outline:"none",color:u.colors.whites[8],fontWeight:u.fontWeights[5]},children:[Object(b.jsx)(j,{name:"settings",style:{marginRight:u.space[0],fontSize:u.fontSizes[2]}}),Object(b.jsx)(s.a,{children:"Settings"})]})})]})})},v=function(e){var t=e.valueSelect,n=e.toggleContent;return Object(b.jsxs)(s.a,{style:{width:u.space[13]},children:[Object(b.jsx)(O,{}),Object(b.jsx)(s.a,{sx:{padding:"0px 12px",margin:"auto",borderTop:"1px solid rgba(0, 0, 0, 0.1)"},children:Object(b.jsx)(s.a,{sx:{textAlign:"center",width:"100%"},children:Object(b.jsx)(C,{valueSelect:t,toggleContent:n})})})]})},S=function(){var e=l(),t=e.valueSelect,n=e.toggleContent,o="pomodoroCounter"===t?u.colors.danger[1]:"shortBreakCounter"===t?"rgb(70, 142, 145)":"longBreakCounter"===t?"rgb(67, 126, 168)":u.colors.danger[1];return Object(b.jsx)(s.c,{sx:{width:u.space[8],height:u.space[12],justifyContent:"center",background:o},children:Object(b.jsx)(v,{valueSelect:t,toggleContent:n})})},y=n(14),A=function(e){var t=e.children;return Object(b.jsx)(y.a,{theme:u,children:t})},w=function(){return Object(b.jsx)(A,{children:Object(b.jsx)(S,{})})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,26)).then((function(t){var n=t.getCLS,o=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),o(e),r(e),c(e),i(e)}))};i.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(w,{})}),document.getElementById("root")),k()}},[[25,1,2]]]);
//# sourceMappingURL=main.8b15146d.chunk.js.map