(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var c=n(7),o=n.n(c),a=n(2),r=n(3),i=n(5),s=n(4),l=n(1),u=n.n(l),m=(n(12),n(0)),h=function(e){Object(i.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(a.a)(this,n);for(var c=arguments.length,o=new Array(c),r=0;r<c;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={time:new Date},e.timerIdForTime=0,e.handleContextMenu=function(t){t.preventDefault(),e.props.setHasClock(!1)},e.handleClick=function(t){t.preventDefault(),e.props.setHasClock(!0)},e}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var e=this;document.addEventListener("contextmenu",this.handleContextMenu),document.removeEventListener("click",this.handleClick),this.timerIdForTime=window.setInterval((function(){var t=new Date;console.info(t.toUTCString().slice(-12,-4)),e.setState({time:t})}),1e3)}},{key:"componentDidUpdate",value:function(e){e.name!==this.props.name&&console.debug("Renamed from ".concat(e.name," to ").concat(this.props.name))}},{key:"componentWillUnmount",value:function(){document.addEventListener("click",this.handleClick),document.removeEventListener("contextmenu",this.handleContextMenu),clearInterval(this.timerIdForTime)}},{key:"render",value:function(){return Object(m.jsxs)("div",{className:"Clock",children:[Object(m.jsx)("strong",{className:"Clock__name",children:this.props.name})," time is ",Object(m.jsx)("span",{className:"Clock__time",children:this.state.time.toUTCString().slice(-12,-4)})]})}}]),n}(u.a.PureComponent);function d(){var e=Date.now().toString().slice(-4);return"Clock-".concat(e)}var k=function(e){Object(i.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(a.a)(this,n);for(var c=arguments.length,o=new Array(c),r=0;r<c;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={hasClock:!0,clockName:"Clock-0"},e.timerIdForClockName=0,e}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.timerIdForClockName=window.setInterval((function(){e.setState({clockName:d()})}),3300)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerIdForClockName)}},{key:"render",value:function(){var e=this;return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("h1",{children:"React clock"}),this.state.hasClock&&Object(m.jsx)(h,{setHasClock:function(t){return e.setState({hasClock:t})},name:this.state.clockName})]})}}]),n}(u.a.PureComponent);o.a.render(Object(m.jsx)(k,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.e6afb18c.chunk.js.map