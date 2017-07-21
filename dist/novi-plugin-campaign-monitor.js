module.exports=function(e){function t(o){if(n[o])return n[o].exports;var i=n[o]={exports:{},id:o,loaded:!1};return e[o].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var i=n(1),r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(i),a=n(2),u=o(a),l=n(5),c=o(l),s=novi.react.React,p={name:"novi-plugin-campaign-monitor",title:"Novi Campaign Monitor",description:"Novi Campaign Monitor description",version:"1.0.3",dependencies:{},defaults:{querySelector:'[class*="campaign-mailform"]'},ui:{editor:[u.default],settings:s.createElement(c.default,null)},excerpt:r.validCampaignMonitorForm};novi.plugins.register(p)},function(e,t){"use strict";function n(e){return o(e)&&i(e)}function o(e){return novi.element.hasAttribute(e,"action")}function i(e){for(var t=e.querySelectorAll("input[type='email']"),n=t.length-1;n>=0;){if(novi.element.hasStaticReference(t[n]))return!0;n-=n}return!1}Object.defineProperty(t,"__esModule",{value:!0}),t.validCampaignMonitorForm=n},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){var n=t[0];n.initActionValue===n.action&&n.initInputName===n.name||(novi.element.setAttribute(n.element,"action",n.action),novi.element.setAttribute(n.input,"name",n.name),novi.page.forceUpdate())}Object.defineProperty(t,"__esModule",{value:!0});var r=n(3),a=o(r),u=n(4),l=o(u),c=novi.react.React,s=novi.ui.icons,p={trigger:c.createElement(a.default,null),tooltip:"Change mailchimp sign up url",header:[s.ICON_CAMPAIGN_MONITOR,c.createElement("span",null,"CampaignMonitor Settings")],body:[c.createElement(l.default,null)],closeIcon:"submit",onSubmit:i,width:360,height:170,title:"Campaign monitor settings"};t.default=p},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=novi.ui.icon,u=novi.ui.icons,l=novi.react.React,c=novi.react.Component,s=function(e){function t(){return n(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this))}return i(t,e),r(t,[{key:"render",value:function(){return l.createElement(a,null,u.ICON_CAMPAIGN_MONITOR)}}]),t}(c);t.default=s},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=novi.ui.input,u=novi.react.React,l=novi.react.Component,c=function(e){function t(e){n(this,t);var i=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e)),r=e.element.querySelectorAll("input[type='email']"),a=i._getInput(r),u=novi.element.getAttribute(e.element,"action"),l=novi.element.getAttribute(a,"name");return i.state={action:u,name:l,input:a,initActionValue:u,initInputName:l,element:e.element},i._handleActionChange=i._handleActionChange.bind(i),i}return i(t,e),r(t,[{key:"render",value:function(){return u.createElement("div",{className:"campaign-monitor-wrap",style:{padding:"0 12px",display:"flex",flexDirection:"column",justifyContent:"center",height:"100%",color:"#6E778A"}},u.createElement("p",{className:"novi-label",style:{marginTop:"0"}},"CampaignMonitor Signup Url:"),u.createElement(a,{onChange:this._handleActionChange,value:this.state.action}),u.createElement("p",{className:"novi-label",style:{marginTop:"20"}},"CampaignMonitor Input Name:"),u.createElement(a,{onChange:this._handleNameChange,value:this.state.name}))}},{key:"_getInput",value:function(e){for(var t=e.length-1;t>=0;){if(novi.element.hasStaticReference(e[t]))return e[t];t-=t}return null}},{key:"_handleActionChange",value:function(e){var t=e.target.value;this.setState({action:t})}},{key:"_handleNameChange",value:function(e){var t=e.target.value;this.setState({name:t})}}]),t}(l);t.default=c},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=novi.react.React,u=novi.react.Component,l=novi.ui.input,c=novi.ui.button,s=function(e){function t(e){n(this,t);var i=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return i.state={settings:e.settings},i.saveSettings=i.saveSettings.bind(i),i.onChange=i.onChange.bind(i),i}return i(t,e),r(t,[{key:"componentWillReceiveProps",value:function(e){this.setState({settings:e.settings})}},{key:"render",value:function(){return a.createElement("div",null,a.createElement("span",{style:{letterSpacing:"0,0462em"}},"Campaign Monitor Plugin"),a.createElement("div",{style:{fontSize:13,color:"#6E778A",marginTop:21}},"Apply this plugin to elements which are matching selector:"),a.createElement(l,{style:{marginTop:10,width:340},value:this.state.settings.querySelector,onChange:this.onChange}),a.createElement("div",{style:{marginTop:30}},a.createElement(c,{type:"primary",messages:{textContent:"Save Settings"},onClick:this.saveSettings})))}},{key:"onChange",value:function(e){var t=e.target.value;this.setState({settings:{querySelector:t}})}},{key:"saveSettings",value:function(){novi.plugins.settings.update("novi-plugin-campaign-monitor",this.state.settings)}}]),t}(u);t.default=s}]);