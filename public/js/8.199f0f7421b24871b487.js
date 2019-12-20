webpackJsonp([8],{OMNW:function(t,e,n){"use strict";var o=n("Xxa5"),r=n.n(o),i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};var a={name:"LoginWithGithub",computed:{githubAuth:function(){return window.config.githubAuth},url:function(){return"/api/oauth/github"}},mounted:function(){window.addEventListener("message",this.onMessage,!1)},beforeDestroy:function(){window.removeEventListener("message",this.onMessage)},methods:{login:function(){var t,e=(t=r.a.mark(function t(){return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$store.dispatch("auth/fetchOauthUrl",{provider:"github"});case 2:u(t.sent,this.$t("login"));case 4:case"end":return t.stop()}},t,this)}),function(){var e=t.apply(this,arguments);return new Promise(function(t,n){return function o(r,i){try{var s=e[r](i),a=s.value}catch(t){return void n(t)}if(!s.done)return Promise.resolve(a).then(function(t){o("next",t)},function(t){o("throw",t)});t(a)}("next")})});return function(){return e.apply(this,arguments)}}(),onMessage:function(t){t.origin===window.origin&&t.data.token&&(this.$store.dispatch("auth/saveToken",{token:t.data.token}),this.$router.push({name:"home"}))}}};function u(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};"object"===(void 0===t?"undefined":s(t))&&(n=t,t=""),n=i({url:t,title:e,width:600,height:720},n);var o=void 0!==window.screenLeft?window.screenLeft:window.screen.left,r=void 0!==window.screenTop?window.screenTop:window.screen.top,a=window.innerWidth||document.documentElement.clientWidth||window.screen.width,u=window.innerHeight||document.documentElement.clientHeight||window.screen.height;n.left=a/2-n.width/2+o,n.top=u/2-n.height/2+r;var c=Object.keys(n).reduce(function(t,e){return t.push(e+"="+n[e]),t},[]).join(","),l=window.open(t,e,c);return window.focus&&l.focus(),l}var c=n("XyMi"),l=Object(c.a)(a,function(){var t=this.$createElement,e=this._self._c||t;return this.githubAuth?e("button",{staticClass:"btn btn-dark ml-auto",attrs:{type:"button"},on:{click:this.login}},[this._v("\n  "+this._s(this.$t("login_with"))+"\n  "),e("fa",{attrs:{icon:["fab","github"]}})],1):this._e()},[],!1,null,null,null);e.a=l.exports},yNuM:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("Xxa5"),r=n.n(o),i=n("2gGM"),s=n.n(i);var a={middleware:"guest",components:{LoginWithGithub:n("OMNW").a},metaInfo:function(){return{title:this.$t("login")}},data:function(){return{form:new s.a({email:"",password:""}),remember:!1}},methods:{login:function(){var t,e=(t=r.a.mark(function t(){var e,n;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.form.post("/api/login");case 2:return e=t.sent,n=e.data,this.$store.dispatch("auth/saveToken",{token:n.token,remember:this.remember}),t.next=7,this.$store.dispatch("auth/fetchUser");case 7:this.$router.push({name:"home"});case 8:case"end":return t.stop()}},t,this)}),function(){var e=t.apply(this,arguments);return new Promise(function(t,n){return function o(r,i){try{var s=e[r](i),a=s.value}catch(t){return void n(t)}if(!s.done)return Promise.resolve(a).then(function(t){o("next",t)},function(t){o("throw",t)});t(a)}("next")})});return function(){return e.apply(this,arguments)}}()}},u=n("XyMi"),c=Object(u.a)(a,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-8 m-auto"},[n("card",{attrs:{title:t.$t("login")}},[n("form",{on:{submit:function(e){return e.preventDefault(),t.login(e)},keydown:function(e){t.form.onKeydown(e)}}},[n("div",{staticClass:"form-group row"},[n("label",{staticClass:"col-md-3 col-form-label text-md-right"},[t._v(t._s(t.$t("email")))]),t._v(" "),n("div",{staticClass:"col-md-7"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("email")},attrs:{type:"email",name:"email"},domProps:{value:t.form.email},on:{input:function(e){e.target.composing||t.$set(t.form,"email",e.target.value)}}}),t._v(" "),n("has-error",{attrs:{form:t.form,field:"email"}})],1)]),t._v(" "),n("div",{staticClass:"form-group row"},[n("label",{staticClass:"col-md-3 col-form-label text-md-right"},[t._v(t._s(t.$t("password")))]),t._v(" "),n("div",{staticClass:"col-md-7"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.form.password,expression:"form.password"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("password")},attrs:{type:"password",name:"password"},domProps:{value:t.form.password},on:{input:function(e){e.target.composing||t.$set(t.form,"password",e.target.value)}}}),t._v(" "),n("has-error",{attrs:{form:t.form,field:"password"}})],1)]),t._v(" "),n("div",{staticClass:"form-group row"},[n("div",{staticClass:"col-md-3"}),t._v(" "),n("div",{staticClass:"col-md-7 d-flex"},[n("checkbox",{attrs:{name:"remember"},model:{value:t.remember,callback:function(e){t.remember=e},expression:"remember"}},[t._v("\n              "+t._s(t.$t("remember_me"))+"\n            ")]),t._v(" "),n("router-link",{staticClass:"small ml-auto my-auto",attrs:{to:{name:"password.request"}}},[t._v("\n              "+t._s(t.$t("forgot_password"))+"\n            ")])],1)]),t._v(" "),n("div",{staticClass:"form-group row"},[n("div",{staticClass:"col-md-7 offset-md-3 d-flex"},[n("v-button",{attrs:{loading:t.form.busy}},[t._v("\n              "+t._s(t.$t("login"))+"\n            ")]),t._v(" "),n("login-with-github")],1)])])])],1)])},[],!1,null,null,null);e.default=c.exports}});
//# sourceMappingURL=8.199f0f7421b24871b487.js.map