webpackJsonp([5],{SAuA:function(t,s,e){var a=e("gSRv");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);e("rjj0")("2ee194cf",a,!0,{})},WzgT:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e("Xxa5"),i=e.n(a),n=e("2gGM"),r=e.n(n),o=e("NYxO");var l={middleware:"admin",scrollToTop:!1,metaInfo:function(){return{title:this.$t("users")+" "+this.$t("settings")}},data:function(){return{loading:!0,lastInvitation:{},lastInvitationUrl:"",form:new r.a({is_admin:!1,name:"",email:""})}},computed:(Object.assign||function(t){for(var s=1;s<arguments.length;s++){var e=arguments[s];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a])}return t})({showInvitationCreatedAlert:function(){return this.lastInvitation.token&&this.isManualEmailSetting},isManualEmailSetting:function(){var t=this.$store.getters["config/email"].type;return"manual"===t||void 0===t}},Object(o.mapGetters)({users:"config/users"})),watch:{users:function(t){this.loading=!1}},created:function(){this.lastInvitation={},this.loading=!0,this.$store.dispatch("config/fetchUsers")},methods:{update:function(){var t,s=(t=i.a.mark(function t(){var s,e;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.lastInvitationUrl="",t.next=3,this.form.post("/api/settings/users/invite");case 3:s=t.sent,e=s.data,this.lastInvitation=e,this.form.reset();case 7:case"end":return t.stop()}},t,this)}),function(){var s=t.apply(this,arguments);return new Promise(function(t,e){return function a(i,n){try{var r=s[i](n),o=r.value}catch(t){return void e(t)}if(!r.done)return Promise.resolve(o).then(function(t){a("next",t)},function(t){a("throw",t)});t(o)}("next")})});return function(){return s.apply(this,arguments)}}()}},c={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("card",{staticClass:"settings-users-invite mb-3",attrs:{title:t.$t("users-invite")}},[t.showInvitationCreatedAlert?e("div",{staticClass:"alert alert-info",attrs:{role:"alert"}},[e("h5",{staticClass:"alert-heading"},[t._v("Invitation Created!")]),t._v(" "),e("div",{staticClass:"input-group mb-0"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.lastInvitation.url,expression:"lastInvitation.url"}],staticClass:"form-control",attrs:{type:"text",readonly:""},domProps:{value:t.lastInvitation.url},on:{input:function(s){s.target.composing||t.$set(t.lastInvitation,"url",s.target.value)}}}),t._v(" "),e("div",{staticClass:"input-group-append"},[e("button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.lastInvitation.url,expression:"lastInvitation.url",arg:"copy"}],staticClass:"btn btn-primary"},[t._v("Copy to Clipboard")])])]),t._v(" "),e("p",{staticClass:"mt-2"},[e("small",[t._v("Send the above link to the new user so they can complete the signup process.")])])]):t._e(),t._v(" "),e("form",{on:{submit:function(s){return s.preventDefault(),t.update(s)},keydown:function(s){t.form.onKeydown(s)}}},[t.isManualEmailSetting?t._e():e("alert-success",{attrs:{form:t.form,message:t.$t("users-invite-sent")}}),t._v(" "),e("div",{staticClass:"form-group row"},[e("div",{staticClass:"col-md-7 offset-md-3"},[e("checkbox",{attrs:{checked:t.form.is_admin,name:"enabled"},model:{value:t.form.is_admin,callback:function(s){t.$set(t.form,"is_admin",s)},expression:"form.is_admin"}},[t._v("\n                        "+t._s(t.$t("users-invite-as-admin"))+"\n                    ")])],1)]),t._v(" "),e("div",{staticClass:"form-group row"},[e("label",{staticClass:"col-md-3 col-form-label text-md-right"},[t._v(t._s(t.$t("name")))]),t._v(" "),e("div",{staticClass:"col-md-7"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("name")},attrs:{type:"text",name:"name"},domProps:{value:t.form.name},on:{input:function(s){s.target.composing||t.$set(t.form,"name",s.target.value)}}}),t._v(" "),e("has-error",{attrs:{form:t.form,field:"name"}})],1)]),t._v(" "),e("div",{staticClass:"form-group row"},[e("label",{staticClass:"col-md-3 col-form-label text-md-right"},[t._v(t._s(t.$t("email")))]),t._v(" "),e("div",{staticClass:"col-md-7"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("email")},attrs:{type:"email",name:"email"},domProps:{value:t.form.email},on:{input:function(s){s.target.composing||t.$set(t.form,"email",s.target.value)}}}),t._v(" "),e("has-error",{attrs:{form:t.form,field:"email"}})],1)]),t._v(" "),e("div",{staticClass:"form-group row"},[e("div",{staticClass:"col-md-9 ml-md-auto"},[t.isManualEmailSetting?e("v-button",{attrs:{type:"success",loading:t.form.busy}},[t._v(t._s(t.$t("create-invite")))]):t._e(),t._v(" "),t.isManualEmailSetting?t._e():e("v-button",{attrs:{type:"success",loading:t.form.busy}},[t._v(t._s(t.$t("invite")))])],1)])],1)]),t._v(" "),e("card",{staticClass:"settings-users-active",attrs:{title:t.$t("users")}},[t.loading?e("div",{staticClass:"text-center m-5"},[e("h2",[t._v(t._s(t.$t("loading")+" "+t.$t("users")+" "+t.$t("settings")))]),t._v(" "),e("fa",{staticClass:"global-searching-spinner mt-3",attrs:{icon:"cog",size:"6x",spin:""}})],1):t._e(),t._v(" "),e("div",{staticClass:"row pb-2"},t._l(t.users,function(s,a){return e("div",{key:s.id+"-"+s.email,staticClass:"col-6"},[e("card",{staticClass:"mt-4",attrs:{title:s.email}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-6"},[e("h5",[t._v(t._s(s.name))])]),t._v(" "),e("div",{staticClass:"col-6"},[e("p",{staticClass:"text-right"},[t._v(t._s(t.$t("users-role"))+": "+t._s(s.role))])])])])],1)}))])],1)},staticRenderFns:[]};var m=e("VU/8")(l,c,!1,function(t){e("SAuA")},null,null);s.default=m.exports},gSRv:function(t,s,e){(t.exports=e("FZ+f")(!1)).push([t.i,".settings-users-active>.card-body{padding-top:0}",""])}});
//# sourceMappingURL=5.b8d727fcb3eb4c6339f8.js.map