webpackJsonp([5],{"9yDr":function(t,s){},AaL1:function(t,s){},v6xc:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e("T7CL"),i=e("d7EF"),n=e.n(i),l=e("//Fk"),r=e.n(l),o=e("Dd8w"),c=e.n(o),u=e("NYxO"),m=(e("ldx2"),e("W1GH")),p=e.n(m),v=e("HPD8"),d=e("k7rT"),h={data:function(){return{more_show:!1,output_show:!1,eth_amount:0,token:0,formula:0,exchange_last:0,fee:0,reserve:0,direct:0,single:0,double:0,triple:0,community:0,set_token:!1}},watch:{is_metamask:function(t){t?this.set_token=!1:this.token=1e4,this.output_show=!1},token_sum:function(t){this.is_metamask&&!this.set_token&&(this.token=_.floor(t,8),this.output_show=!1,this.set_token=!0)}},filters:{floor:function(t){return 0==t?0:p.a.accounting.formatNumber(_.floor(t,8),8)}},computed:c()({token_sum:function(){return this.ms+this.msd+this.msd2+this.msr+this.ms2r},rateFee:function(){var t=this.formula,s=this.exchange_last;return 0==t?0:(s<t&&(s=t),.01+.2*(s-t)/t)}},Object(u.b)({is_metamask:function(t){return t.wallet.is_metamask},address:function(t){return t.wallet.address},metamask_address:function(t){return t.wallet.metamask_address},is_search:function(t){return t.wallet.is_search},invite_code:function(t){return t.wallet.invite_code},trade_method:function(t){return t.wallet.trade_method},ms:function(t){return v.a.getInstance().formatTokenDecimals(t.wallet.ms,t.wallet.ms_decimal)},msd:function(t){return v.a.getInstance().formatTokenDecimals(t.wallet.msd,t.wallet.msd_decimal)},msd2:function(t){return v.a.getInstance().formatTokenDecimals(t.wallet.msd2,t.wallet.msd2_decimal)},msr:function(t){return v.a.getInstance().formatTokenDecimals(t.wallet.msr,t.wallet.msr_decimal)},ms2r:function(t){return v.a.getInstance().formatTokenDecimals(t.wallet.ms2r,t.wallet.ms2r_decimal)},formula_price:function(t){return t.base.formula_price},exchange_last_price:function(t){return t.statistic.exchange_last_price}})),created:function(){this.reset()},mounted:function(){},methods:{reset:function(){var t=this;this.eth_amount=1,this.token=this.is_metamask?parseFloat(this.token_sum):1e4,this.formula=this.formula_price,this.exchange_last=this.exchange_last_price,this.output_show=!1,r.a.all([this.$wallet.getTokenBalance(d.m,this.$wallet.getContractAddress(d.k)),this.$wallet.getTokenBalance(d.m,this.$wallet.getContractAddress(d.j))]).then(function(s){var e=n()(s,2),a=e[0],i=e[1];t.fee=t.floor(t.$wallet.formatWei(a)),t.reserve=t.floor(t.$wallet.formatWei(i))})},calculation:function(){this.output_show=!0;var t=this.rateFee*this.eth_amount,s=parseFloat(this.token);this.direct=.5*(t+t*this.fee/(this.reserve+t))*s/(s+1e4),this.single=.25*(t+t*this.fee/(this.reserve+t))*s/(s+1e4),this.double=.125*(t+t*this.fee/(this.reserve+t))*s/(s+1e4),this.triple=.065*(t+t*this.fee/(this.reserve+t))*s/(s+1e4),this.community=.02*(t+t*this.fee/(this.reserve+t))*s/(s+1e4)},floor:function(t){if(0==t)return 0;var s=p.a.accounting.formatNumber(_.floor(t,8),8);return Number(s)}}},f=e("XyMi");var P=function(t){e("AaL1")},E=Object(f.a)(h,function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"calculator"}},[e("div",{staticClass:"calculator-div"},[e("div",{staticClass:"calculator"},[e("div",{staticClass:"input-div"},[e("div",{staticClass:"input-row"},[e("div",{staticClass:"input-left"},[e("span",[t._v(t._s(t.$t("INVITE.INPUT.INPUT0")))])]),e("div",{staticClass:"input-right"},[e("input",{directives:[{name:"model",rawName:"v-model.number",value:t.eth_amount,expression:"eth_amount",modifiers:{number:!0}}],attrs:{type:"number",step:"0.000000001"},domProps:{value:t.eth_amount},on:{input:function(s){s.target.composing||(t.eth_amount=t._n(s.target.value))},blur:function(s){t.$forceUpdate()}}}),e("span",{staticClass:"unit"},[t._v("ETH")])])]),e("div",{staticClass:"input-row"},[e("div",{staticClass:"input-left"},[e("span",[t._v(t._s(t.$t("INVITE.INPUT.INPUT1")))])]),e("div",{staticClass:"input-right"},[e("input",{directives:[{name:"model",rawName:"v-model.number",value:t.token,expression:"token",modifiers:{number:!0}}],attrs:{type:"number",step:"0.000000001"},domProps:{value:t.token},on:{input:function(s){s.target.composing||(t.token=t._n(s.target.value))},blur:function(s){t.$forceUpdate()}}})])]),e("div",{staticClass:"input-row"},[e("div",{staticClass:"input-left"},[e("span",[t._v(t._s(t.$t("INVITE.INPUT.INPUT4")))]),e("i",{staticClass:"arrow",class:{open:t.more_show},on:{click:function(s){t.more_show=!t.more_show}}})]),t._m(0)]),e("div",{directives:[{name:"show",rawName:"v-show",value:t.more_show,expression:"more_show"}],staticClass:"more"},[e("div",{staticClass:"input-row"},[e("div",{staticClass:"input-left"},[e("span",[t._v(t._s(t.$t("INVITE.INPUT.INPUT2")))])]),e("div",{staticClass:"input-right"},[e("input",{directives:[{name:"model",rawName:"v-model.number",value:t.formula,expression:"formula",modifiers:{number:!0}}],attrs:{type:"number",step:"0.000000001"},domProps:{value:t.formula},on:{input:function(s){s.target.composing||(t.formula=t._n(s.target.value))},blur:function(s){t.$forceUpdate()}}}),e("span",{staticClass:"unit"},[t._v("ETH")])])]),e("div",{staticClass:"input-row"},[e("div",{staticClass:"input-left"},[e("span",[t._v(t._s(t.$t("INVITE.INPUT.INPUT3")))])]),e("div",{staticClass:"input-right"},[e("input",{directives:[{name:"model",rawName:"v-model.number",value:t.exchange_last,expression:"exchange_last",modifiers:{number:!0}}],attrs:{type:"number",step:"0.000000001"},domProps:{value:t.exchange_last},on:{input:function(s){s.target.composing||(t.exchange_last=t._n(s.target.value))},blur:function(s){t.$forceUpdate()}}}),e("span",{staticClass:"unit"},[t._v("ETH")])])]),e("div",{staticClass:"input-row"},[e("div",{staticClass:"input-left"},[e("span",[t._v(t._s(t.$t("INVITE.INPUT.INPUT5")))])]),e("div",{staticClass:"input-right"},[e("input",{directives:[{name:"model",rawName:"v-model.number",value:t.fee,expression:"fee",modifiers:{number:!0}}],attrs:{type:"number",step:"0.000000001"},domProps:{value:t.fee},on:{input:function(s){s.target.composing||(t.fee=t._n(s.target.value))},blur:function(s){t.$forceUpdate()}}}),e("span",{staticClass:"unit"},[t._v("ETH")])])]),e("div",{staticClass:"input-row"},[e("div",{staticClass:"input-left"},[e("span",[t._v(t._s(t.$t("INVITE.INPUT.INPUT6")))])]),e("div",{staticClass:"input-right"},[e("input",{directives:[{name:"model",rawName:"v-model.number",value:t.reserve,expression:"reserve",modifiers:{number:!0}}],attrs:{type:"number",step:"0.000000001"},domProps:{value:t.reserve},on:{input:function(s){s.target.composing||(t.reserve=t._n(s.target.value))},blur:function(s){t.$forceUpdate()}}}),e("span",{staticClass:"unit"},[t._v("ETH")])])])])]),e("div",{staticClass:"button-div"},[e("button",{staticClass:"button0",on:{click:t.reset}},[t._v(t._s(t.$t("INVITE.CALCULATOR.RESET")))]),e("button",{staticClass:"button1",on:{click:t.calculation}},[t._v(t._s(t.$t("INVITE.CALCULATOR.CALCULATION")))])]),t.output_show?e("div",{staticClass:"output"},[e("div",{staticClass:"output-row2"},[e("span",[t._v(t._s(t.$t("INVITE.CALCULATOR.OUTPUT0")))])]),e("div",{staticClass:"output-row2"},[e("span",[t._v(t._s(t.$t("INVITE.CALCULATOR.OUTPUT1"))+" "+t._s(t._f("floor")(t.direct)))])]),e("div",{staticClass:"output-row2"},[e("span",[t._v(t._s(t.$t("INVITE.CALCULATOR.OUTPUT2"))+" "+t._s(t._f("floor")(t.single)))])]),e("div",{staticClass:"output-row2"},[e("span",[t._v(t._s(t.$t("INVITE.CALCULATOR.OUTPUT3"))+" "+t._s(t._f("floor")(t.double)))])]),e("div",{staticClass:"output-row2"},[e("span",[t._v(t._s(t.$t("INVITE.CALCULATOR.OUTPUT4"))+" "+t._s(t._f("floor")(t.triple)))])]),e("div",{staticClass:"output-row2 community"},[e("span",[t._v(t._s(t.$t("INVITE.CALCULATOR.OUTPUT5"))+" "+t._s(t._f("floor")(t.community)))])])]):t._e()])])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"input-right"},[s("div",{staticClass:"input-line"})])}],!1,P,"data-v-5d57c0db",null).exports,L={name:"Help",components:{Bottom:a.a,Calculator:E}};var C=function(t){e("9yDr")},H=Object(f.a)(L,function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"help"}},[e("div",{staticClass:"content"},[e("p",{staticClass:"title"},[t._v(t._s(t.$t("HELP.FAQ.HELP_1")))]),e("p",{staticClass:"sub"},[t._v(t._s(t.$t("HELP.FAQ.HELP_2_0")))]),e("p",{staticClass:"child"},[t._v(t._s(t.$t("HELP.FAQ.HELP_2_1")))]),e("p",{staticClass:"child"},[t._v(t._s(t.$t("HELP.FAQ.HELP_2_2")))]),e("p",{staticClass:"child"},[t._v(t._s(t.$t("HELP.FAQ.HELP_2_3")))]),e("p",{staticClass:"child"},[t._v(t._s(t.$t("HELP.FAQ.HELP_2_4")))]),e("p",{staticClass:"sub"},[t._v(t._s(t.$t("HELP.FAQ.HELP_2_5")))]),e("br"),e("p",[t._v(t._s(t.$t("HELP.FAQ.HELP_13_0")))]),e("p",{staticClass:"sub"},[t._v(t._s(t.$t("HELP.FAQ.HELP_13_16")))]),e("p",{staticClass:"sub"},[t._v(t._s(t.$t("HELP.FAQ.HELP_13_1")))]),e("p",{staticClass:"child"},[t._v(t._s(t.$t("HELP.FAQ.HELP_13_2")))]),e("p",{staticClass:"child"},[t._v(t._s(t.$t("HELP.FAQ.HELP_13_3")))]),e("p",{staticClass:"child"},[t._v(t._s(t.$t("HELP.FAQ.HELP_13_17")))]),e("p",{staticClass:"sub"},[t._v(t._s(t.$t("HELP.FAQ.HELP_13_4")))]),e("p",{staticClass:"child"},[t._v(t._s(t.$t("HELP.FAQ.HELP_13_18")))]),e("p",{staticClass:"child"},[t._v(t._s(t.$t("HELP.FAQ.HELP_13_7")))]),e("p",{staticClass:"child"},[t._v(t._s(t.$t("HELP.FAQ.HELP_13_6")))]),e("p",{staticClass:"child"},[t._v(t._s(t.$t("HELP.FAQ.HELP_13_5")))]),e("p",{staticClass:"child"},[t._v(t._s(t.$t("HELP.FAQ.HELP_13_8")))]),e("p",{staticClass:"sub-child"},[t._v(t._s(t.$t("HELP.FAQ.HELP_13_9")))]),e("p",{staticClass:"sub-child"},[t._v(t._s(t.$t("HELP.FAQ.HELP_13_10")))]),e("p",{staticClass:"sub-child"},[t._v(t._s(t.$t("HELP.FAQ.HELP_13_11")))]),e("p",{staticClass:"sub-child"},[t._v(t._s(t.$t("HELP.FAQ.HELP_13_12")))]),e("p",{staticClass:"child"},[t._v(t._s(t.$t("HELP.FAQ.HELP_13_13")))]),e("p",{staticClass:"child"},[t._v(t._s(t.$t("HELP.FAQ.HELP_13_14")))]),e("p",{staticClass:"child"},[t._v(t._s(t.$t("HELP.FAQ.HELP_13_15")))]),e("p",{staticClass:"child"},[t._v(t._s(t.$t("HELP.FAQ.HELP_13_19")))]),e("br"),e("p",[t._v(t._s(t.$t("HELP.FAQ.HELP_3_3")))]),e("p",{staticClass:"sub"},[t._v(t._s(t.$t("HELP.FAQ.HELP_3_4")))]),e("p",{staticClass:"child"},[t._v(t._s(t.$t("HELP.FAQ.HELP_3_5")))]),e("p",{staticClass:"child"},[t._v(t._s(t.$t("HELP.FAQ.HELP_3_5_0")))]),e("p",{staticClass:"child"},[t._v(t._s(t.$t("HELP.FAQ.HELP_3_6")))]),e("p",{staticClass:"sub"},[t._v(t._s(t.$t("HELP.FAQ.HELP_3_7")))]),e("p",{staticClass:"sub"},[t._v(t._s(t.$t("HELP.FAQ.HELP_3_8")))]),e("p",{staticClass:"child"},[t._v(t._s(t.$t("HELP.FAQ.HELP_3_9")))]),e("p",{staticClass:"child"},[t._v(t._s(t.$t("HELP.FAQ.HELP_3_10")))]),e("p",{staticClass:"child"},[t._v(t._s(t.$t("HELP.FAQ.HELP_3_11")))]),e("p",{staticClass:"sub"},[t._v(t._s(t.$t("HELP.FAQ.HELP_3_12")))]),e("Calculator",{ref:"calculator"}),e("br"),e("p",[t._v(t._s(t.$t("HELP.FAQ.HELP_3")))]),e("p",{staticClass:"sub"},[t._v(t._s(t.$t("HELP.FAQ.HELP_4")))]),e("p",{staticClass:"child"},[t._v(t._s(t.$t("HELP.FAQ.HELP_5")))]),e("p",{staticClass:"child"},[t._v(t._s(t.$t("HELP.FAQ.HELP_6")))]),e("br"),e("p",{staticClass:"title"},[t._v(t._s(t.$t("HELP.FAQ.HELP_7")))]),e("p",{staticClass:"sub break"},[t._v(t._s(t.$t("HELP.FAQ.HELP_8"))),e("a",{attrs:{href:"https://1smart.fund/m/#/help/MobileMetamask",target:"_blank"}},[t._v("https://1smart.fund/m/#/help/MobileMetamask")])]),e("br"),e("p",{staticClass:"title"},[t._v(t._s(t.$t("HELP.FAQ.HELP_9")))]),e("p",{staticClass:"sub break"},[t._v(t._s(t.$t("HELP.FAQ.HELP_10"))),e("a",{attrs:{href:"https://1smart.fund/m/#/help/MobileMetaMaskManagement",target:"_blank"}},[t._v("https://1smart.fund/m/#/help/MobileMetaMaskManagement")])]),e("br"),e("p",{staticClass:"title"},[t._v(t._s(t.$t("HELP.FAQ.HELP_11")))]),e("p",{staticClass:"sub break"},[t._v(t._s(t.$t("HELP.FAQ.HELP_12"))),e("a",{attrs:{href:"https://1smart.fund/m/#/help/ImtokenUse",target:"_blank"}},[t._v("https://1smart.fund/m/#/help/ImtokenUse")])])],1),e("Bottom",{staticClass:"bottom"})],1)},[],!1,C,"data-v-cd602422",null);s.default=H.exports}});