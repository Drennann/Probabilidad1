(this["webpackJsonpel-borracho"]=this["webpackJsonpel-borracho"]||[]).push([[0],{17:function(t,e,a){},20:function(t,e,a){"use strict";a.r(e);var n=a(6),r=a.n(n),o=a(11),c=a.n(o),s=(a(17),a(9)),i=a.n(s),u=a(12),l=a(0),h=a(1),v=a(3),d=a(2),b=a(10);function f(t){var e=Math.trunc(4*Math.random());return t=0==e?[t[0]+1,t[1]]:1==e?[t[0],t[1]+1]:2==e?[t[0]-1,t[1]]:[t[0],t[1]-1]}function m(t,e){for(;e>0;)t=f(t),e--;return t}var j=a(5);console.log(b.a);var x=function(t){Object(v.a)(a,t);var e=Object(d.a)(a);function a(t){var n;return Object(l.a)(this,a),(n=e.call(this,t)).state={cvx:null,load:!1},n}return Object(h.a)(a,[{key:"componentDidMount",value:function(){}},{key:"componentDidUpdate",value:function(){this.state.load||this.cambiarEstado(),this.state.load&&this.armarGrafico()}},{key:"simularDatos",value:function(){for(var t,e=[],a=0;a<100;a++){var n={x:(t=m([0,0],50))[0],y:t[1]};e.push(n)}return console.log(e),this.metrosRecorridos(e),e}},{key:"metrosRecorridos",value:function(t){for(var e=0,a=0;a<t.length;a++)e+=Math.sqrt(Math.abs(t[a].x)^2+Math.abs(t[a].y)^2);console.log(e/t.length)}},{key:"armarGrafico",value:function(){var t={type:"scatter",data:{datasets:[{label:"Posiciones Finales",data:this.simularDatos(),pointRadius:10,backgroundColor:"green"}]},options:{scales:{x:{min:-10,max:10},y:{min:-10,max:10}}}};new b.a(this.state.cvx,t)}},{key:"cambiarEstado",value:function(){this.setState({cvx:this.props.cvx}),this.setState({load:!0})}},{key:"render",value:function(){return Object(j.jsx)("div",{})}}]),a}(r.a.Component),p=function(t){Object(v.a)(a,t);var e=Object(d.a)(a);function a(t){var n;return Object(l.a)(this,a),(n=e.call(this,t)).state={cvx:null},n}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var t=document.getElementById("myChart").getContext("2d");null===this.state.cvx&&this.cambiarEstado(t)}},{key:"cambiarEstado",value:function(){var t=Object(u.a)(i.a.mark((function t(e){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.setState({cvx:e});case 2:console.log(this.state),console.log("HOLA");case 4:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"render",value:function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)("canvas",{id:"myChart"}),Object(j.jsx)(x,{cvx:this.state.cvx})]})}}]),a}(r.a.Component);var y=function(){return Object(j.jsx)("div",{children:Object(j.jsx)(p,{})})};c.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(y,{})}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.95740e9d.chunk.js.map