webpackJsonp([8],{WzgT:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("Xxa5"),i=a.n(s),n=a("2gGM"),r=a.n(n);a("NYxO");var o={middleware:"admin",scrollToTop:!1,metaInfo:function(){return{title:this.$t("users")+" "+this.$t("settings")}},data:function(){return{lastInvitation:{},lastInvitationUrl:"",form:new r.a({is_admin:!1,name:"",email:""})}},computed:{showInvitationCreatedAlert:function(){return this.lastInvitation.token&&this.isManualEmailSetting},isManualEmailSetting:function(){var t=this.$store.getters["config/email"].type;return"manual"===t||void 0===t}},created:function(){this.lastInvitation={}},methods:{update:function(){var t,e=(t=i.a.mark(function t(){var e,a;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.lastInvitationUrl="",t.next=3,this.form.post("/api/settings/users/invite");case 3:e=t.sent,a=e.data,this.lastInvitation=a,this.form.reset(),this.$store.dispatch("config/fetchInvites");case 8:case"end":return t.stop()}},t,this)}),function(){var e=t.apply(this,arguments);return new Promise(function(t,a){return function s(i,n){try{var r=e[i](n),o=r.value}catch(t){return void a(t)}if(!r.done)return Promise.resolve(o).then(function(t){s("next",t)},function(t){s("throw",t)});t(o)}("next")})});return function(){return e.apply(this,arguments)}}()}},l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("card",{staticClass:"settings-users-invite mb-3",attrs:{title:t.$t("users-invite")}},[t.showInvitationCreatedAlert?a("div",{staticClass:"alert alert-info",attrs:{role:"alert"}},[a("h5",{staticClass:"alert-heading"},[t._v("Invitation Created!")]),t._v(" "),a("div",{staticClass:"input-group mb-0"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.lastInvitation.url,expression:"lastInvitation.url"}],staticClass:"form-control",attrs:{type:"text",readonly:""},domProps:{value:t.lastInvitation.url},on:{input:function(e){e.target.composing||t.$set(t.lastInvitation,"url",e.target.value)}}}),t._v(" "),a("div",{staticClass:"input-group-append"},[a("button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.lastInvitation.url,expression:"lastInvitation.url",arg:"copy"}],staticClass:"btn btn-primary"},[t._v("Copy to Clipboard")])])]),t._v(" "),a("p",{staticClass:"mt-2"},[a("small",[t._v("Send the above link to the new user so they can complete the signup process.")])])]):t._e(),t._v(" "),a("form",{on:{submit:function(e){return e.preventDefault(),t.update(e)},keydown:function(e){t.form.onKeydown(e)}}},[t.isManualEmailSetting?t._e():a("alert-success",{attrs:{form:t.form,message:t.$t("users-invite-sent")}}),t._v(" "),a("div",{staticClass:"form-group row"},[a("div",{staticClass:"col-md-7 offset-md-3"},[a("checkbox",{attrs:{checked:t.form.is_admin,name:"enabled"},model:{value:t.form.is_admin,callback:function(e){t.$set(t.form,"is_admin",e)},expression:"form.is_admin"}},[t._v("\n                        "+t._s(t.$t("users-invite-as-admin"))+"\n                    ")])],1)]),t._v(" "),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-md-3 col-form-label text-md-right"},[t._v(t._s(t.$t("name")))]),t._v(" "),a("div",{staticClass:"col-md-7"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("name")},attrs:{type:"text",name:"name"},domProps:{value:t.form.name},on:{input:function(e){e.target.composing||t.$set(t.form,"name",e.target.value)}}}),t._v(" "),a("has-error",{attrs:{form:t.form,field:"name"}})],1)]),t._v(" "),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-md-3 col-form-label text-md-right"},[t._v(t._s(t.$t("email")))]),t._v(" "),a("div",{staticClass:"col-md-7"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("email")},attrs:{type:"email",name:"email"},domProps:{value:t.form.email},on:{input:function(e){e.target.composing||t.$set(t.form,"email",e.target.value)}}}),t._v(" "),a("has-error",{attrs:{form:t.form,field:"email"}})],1)]),t._v(" "),a("div",{staticClass:"form-group row"},[a("div",{staticClass:"col-md-9 ml-md-auto"},[t.isManualEmailSetting?a("v-button",{attrs:{type:"success",loading:t.form.busy}},[t._v(t._s(t.$t("create-invite")))]):t._e(),t._v(" "),t.isManualEmailSetting?t._e():a("v-button",{attrs:{type:"success",loading:t.form.busy}},[t._v(t._s(t.$t("invite")))])],1)])],1)]),t._v(" "),a("settings-users"),t._v(" "),a("settings-invites")],1)},staticRenderFns:[]},m=a("VU/8")(o,l,!1,null,null,null);e.default=m.exports}});
//# sourceMappingURL=8.ad125d460143e71e3de8.js.map