webpackJsonp([4],{"9ADW":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("Dd8w"),i=s.n(a),r=s("Xxa5"),n=s.n(r),o=s("exGp"),_=s.n(o),c=s("yoxC"),l=s("HPD8"),d=s("NhiX"),u=s("MDfy"),f=(s("71e1"),s("NYxO")),p=(s("k7rT"),s("M4fF")),v=s.n(p),h=(s("uotZ"),s("5nvG")),m=s("hKzJ"),E={props:["type"],components:{Dialog:u.a},filters:{floor:function(t){return v.a.floor(t,2).toFixed(2)}},mixins:[h.a,m.a],data:function(){return{speedup_save_time:0,speedup_order_amount:0,speedup_use_sfp:0,loading:!1}},watch:{},computed:i()({formatted_speedup_save_time:function(){var t="",e=v.a.floor(this.speedup_save_time/86400,0);e>0&&(t+=e+this.$t("PURCHASE.DAY"));var s=v.a.floor((this.speedup_save_time-86400*e)/3600);s>0&&(t+=(t.length>0?":":"")+s+this.$t("PURCHASE.HOUR"));var a=v.a.floor((this.speedup_save_time-86400*e-3600*s)/60);return 0==e&&0==s&&0==a&&(a+=1),a>0&&(t+=(t.length>0?":":"")+a+this.$t("PURCHASE.MINUTE")),t}},Object(f.b)({msi:function(t){return l.a.getInstance().formatTokenDecimals(t.wallet.msi,t.wallet.msi_decimal)}})),methods:{open:function(){var t=_()(n.a.mark(function t(e){var s,a,i;return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.loading=!0,this.to=e.item.rel_address,this.order_num=e.item.order_num,this.$refs.dialog.open(),t.next=6,this.$wallet.getAccSaveTimeFor(this.to,this.order_num);case 6:s=t.sent,a=s.speedup_use_sfp,i=s.speedup_save_time,this.speedup_use_sfp=a,this.speedup_save_time=i,this.speedup_order_amount=v.a.floor(this.$wallet.formatWei(e.item.amount),2),this.loading=!1;case 13:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),close:function(){this.speedup_use_sfp=0,this.speedup_save_time=0,this.speedup_order_amount=0,this.$refs.dialog.close()},confirm:function(){this.$wallet.accOrderFor(this.to,this.order_num),this.close()}}},R={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Dialog",{ref:"dialog",attrs:{id:"acc-order",icon:t.type,title:t.$t("POPUP.ACCELERATE.TITLE"),width:"600px"}},[a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"content",attrs:{slot:"content"},slot:"content"},[[t.speedup_save_time>0?[a("img",{staticClass:"rocket",attrs:{src:s("XUtr")}}),a("div",{staticClass:"show_wait"},[t._v(t._s(t.$t("POPUP.ACCELERATE.CONSUME",{sfp:t.speedup_use_sfp})))]),a("div",{staticClass:"show_wait"},[t._v(t._s(t.$t("POPUP.ACCELERATE.TIME",{sfo:t.speedup_order_amount,time:t.formatted_speedup_save_time})))]),a("div",{staticClass:"show_wait_tip"},[t._v(t._s(t.$t("POPUP.ACCELERATE.TIPS",{sfp:t.speedup_use_sfp})))]),a("div",{staticClass:"btn",on:{click:t.confirm}},[t._v(t._s(t.$t("POPUP.ACCELERATE.OK")))])]:0==t.msi?[a("img",{staticClass:"rocket",attrs:{src:s("V2O3")}}),a("div",{staticClass:"show_wait"},[t._v(t._s(t.$t("POPUP.ACCELERATE.TIP_SFP")))]),a("div",{staticClass:"btn",on:{click:t.close}},[t._v(t._s(t.$t("POPUP.ACCELERATE.KNOW")))])]:[a("img",{staticClass:"rocket",attrs:{src:s("V2O3")}}),a("div",{staticClass:"show_wait"},[t._v(t._s(t.$t("POPUP.ACCELERATE.TIP")))]),a("div",{staticClass:"btn",on:{click:t.close}},[t._v(t._s(t.$t("POPUP.ACCELERATE.KNOW")))])]]],2)])},staticRenderFns:[]};var A=s("VU/8")(E,R,!1,function(t){s("RA5a")},"data-v-7e58381c",null).exports,P=s("ldx2"),C=s.n(P),T={components:{Dialog:u.a},filters:{floor:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return v.a.floor(l.a.getInstance().formatWei(t),e)},percent_format:function(t){return console.log(t),100*t+"%"}},data:function(){return{type:"",T:"",B:"",amount:"",sf_amount:"",era:"",reward:""}},computed:{fee:function(){return v.a.floor(this.$wallet.formatWei(this.amount)*(.01+.2*this.$wallet.formatWei(this.T)),8)},percent:function(){if("invitation"==this.type)switch(parseInt(this.era)){case 0:return.08;case 1:return.16;case 2:return.08;case 3:return.04;case 4:return.02}else if("$FP"==this.type)switch(parseInt(this.era)){case 0:return.12;case 1:return.16;case 2:return.08}else{if("agent"==this.type)return.01;if("XInvitation"==this.type)switch(parseInt(this.era)){case 1:return.5;case 2:return.25;case 3:return.125;case 4:return.065}else if("XAgent"==this.type)switch(parseInt(this.era)){case 1:case 2:case 3:return.02}}}},methods:{open:function(t){this.type=t.type,this.T=100*t.T,this.amount=t.amount,this.sf_amount=t.sf_amount,this.B=t.B,this.era=t.era,this.reward=t.reward,this.$refs.dialog.open()},close:function(){this.$refs.dialog.close()}}},D={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("Dialog",{ref:"dialog",attrs:{id:"reward-detail",icon:t.type,width:"880px"}},[s("div",{staticClass:"content",attrs:{slot:"content"},slot:"content"},[s("div",{staticClass:"title"},[t._v(t._s(t.$t("POPUP.REWARD_DETAIL.TITLE")))]),"invitation"==t.type?s("div",{staticClass:"list"},[s("div",{staticClass:"item"},[t._v(t._s(t.$t("POPUP.REWARD_DETAIL.AMOUNT"))+": "+t._s(t._f("floor")(t.amount,8))+" ,"+t._s(t.$t("POPUP.REWARD_DETAIL.AMOUNT_SF"))+": "+t._s(t._f("floor")(t.sf_amount)))]),s("div",{staticClass:"item"},[t._v(t._s(t.$t("POPUP.REWARD_DETAIL.ORDER_LENGTH"))+" T = "+t._s(t._f("floor")(t.T,8)))]),t.era>0?s("div",{staticClass:"item"},[t._v(t._s(t.$t("POPUP.REWARD_DETAIL.BALANCE"))+" B = "+t._s(t._f("floor")(t.B)))]):t._e(),s("div",{staticClass:"item"},[t._v(t._s(t.$t("POPUP.REWARD_DETAIL.PERCENT"))+" RC = "+t._s(t._f("percent_format")(t.percent)))]),s("div",{staticClass:"item bold"},[s("div",{staticClass:"label"},[t._v(t._s(t.$t("POPUP.REWARD_DETAIL.REWARD")))]),t.era>0?s("div",{staticClass:"val"},[t._v(" = RC * T/(T+20)*B/(B+10000) * Cnt"),s("br"),t._v("= "+t._s(t._f("floor")(t.reward,8)))]):t._e(),0==t.era?s("div",{staticClass:"val"},[t._v(" = RC * T/(T+20) * Cnt"),s("br"),t._v("= "+t._s(t._f("floor")(t.reward,8)))]):t._e()])]):t._e(),"$FP"==t.type?s("div",{staticClass:"list"},[s("div",{staticClass:"item"},[t._v(t._s(t.$t("POPUP.REWARD_DETAIL.AMOUNT"))+": "+t._s(t._f("floor")(t.amount,8))+" ,"+t._s(t.$t("POPUP.REWARD_DETAIL.AMOUNT_SF"))+": "+t._s(t._f("floor")(t.sf_amount)))]),s("div",{staticClass:"item"},[t._v(t._s(t.$t("POPUP.REWARD_DETAIL.ORDER_LENGTH"))+" T = "+t._s(t._f("floor")(t.T,8)))]),s("div",{staticClass:"item"},[t._v(t._s(t.$t("POPUP.REWARD_DETAIL.PERCENT"))+" RC = "+t._s(t._f("percent_format")(t.percent)))]),s("div",{staticClass:"item bold"},[s("div",{staticClass:"label"},[t._v(t._s(t.$t("POPUP.REWARD_DETAIL.REWARD")))]),s("div",{staticClass:"val"},[t._v(" = RC * T/(T+20) * Cnt"),s("br"),t._v("= "+t._s(t._f("floor")(t.reward,8)))])])]):t._e(),"agent"==t.type?s("div",{staticClass:"list"},[s("div",{staticClass:"item"},[t._v(t._s(t.$t("POPUP.REWARD_DETAIL.AMOUNT"))+": "+t._s(t._f("floor")(t.amount))+" ,"+t._s(t.$t("POPUP.REWARD_DETAIL.AMOUNT_SF"))+": "+t._s(t._f("floor")(t.sf_amount)))]),s("div",{staticClass:"item"},[t._v(t._s(t.$t("POPUP.REWARD_DETAIL.ORDER_LENGTH"))+" T = "+t._s(t._f("floor")(t.T,8)))]),s("div",{staticClass:"item"},[t._v(t._s(t.$t("POPUP.REWARD_DETAIL.BALANCE"))+" B = "+t._s(t._f("floor")(t.B)))]),s("div",{staticClass:"item"},[t._v(t._s(t.$t("POPUP.REWARD_DETAIL.PERCENT"))+" RC = "+t._s(t._f("percent_format")(t.percent)))]),s("div",{staticClass:"item bold"},[s("div",{staticClass:"label"},[t._v(t._s(t.$t("POPUP.REWARD_DETAIL.REWARD")))]),s("div",{staticClass:"val"},[t._v(" = RC * T/(T+20)*B/(B+10000) * Cnt"),s("br"),t._v("= "+t._s(t._f("floor")(t.reward,8)))])])]):t._e(),"XInvitation"==t.type?s("div",{staticClass:"list"},[s("div",{staticClass:"item"},[t._v(t._s(t.$t("POPUP.REWARD_DETAIL.AMOUNT"))+": ethBuy = "+t._s(t._f("floor")(t.amount,8)))]),s("div",{staticClass:"item"},[t._v(t._s(t.$t("POPUP.REWARD_DETAIL.RATEFEE"))+" rateFee = "+t._s(t._f("floor")(t.T,8)))]),s("div",{staticClass:"item"},[t._v(t._s(t.$t("POPUP.REWARD_DETAIL.PERCENT"))+" RC = "+t._s(t._f("percent_format")(t.percent)))]),s("div",{staticClass:"item"},[t._v(t._s(t.$t("POPUP.REWARD_DETAIL.BALANCE"))+" B = "+t._s(t._f("floor")(t.B)))]),s("div",{staticClass:"item"},[t._v(t._s(t.$t("POPUP.REWARD_DETAIL.FEE"))+" fee = ethBuy * (1% + 20% * rateFee) = "+t._s(t.fee))]),s("div",{staticClass:"item"},[t._v(t._s(t.$t("POPUP.REWARD_DETAIL.PARAMS"))+" R = pool / (reserve + fee) = "+t._s(t._f("floor")(t.sf_amount,8)))]),s("div",{staticClass:"item bold"},[s("div",{staticClass:"label"},[t._v(t._s(t.$t("POPUP.REWARD_DETAIL.REWARD")))]),s("div",{staticClass:"val"},[t._v(" = (fee + fee * R) * RC * B / (B+10000)"),s("br"),t._v("= "+t._s(t._f("floor")(t.reward,8)))])])]):t._e(),"XAgent"==t.type?s("div",{staticClass:"list"},[s("div",{staticClass:"item"},[t._v(t._s(t.$t("POPUP.REWARD_DETAIL.AMOUNT"))+": ethBuy = "+t._s(t._f("floor")(t.amount,8)))]),s("div",{staticClass:"item"},[t._v(t._s(t.$t("POPUP.REWARD_DETAIL.RATEFEE"))+" rateFee = "+t._s(t._f("floor")(t.T,8)))]),s("div",{staticClass:"item"},[t._v(t._s(t.$t("POPUP.REWARD_DETAIL.PERCENT"))+" RC = "+t._s(t._f("percent_format")(t.percent)))]),s("div",{staticClass:"item"},[t._v(t._s(t.$t("POPUP.REWARD_DETAIL.BALANCE"))+" B = "+t._s(t._f("floor")(t.B)))]),s("div",{staticClass:"item"},[t._v(t._s(t.$t("POPUP.REWARD_DETAIL.FEE"))+" fee = ethBuy * (1% + 20% * rateFee) = "+t._s(t.fee))]),s("div",{staticClass:"item"},[t._v(t._s(t.$t("POPUP.REWARD_DETAIL.PARAMS"))+" R = pool / (reserve + fee) = "+t._s(t._f("floor")(t.sf_amount,8)))]),s("div",{staticClass:"item bold"},[s("div",{staticClass:"label"},[t._v(t._s(t.$t("POPUP.REWARD_DETAIL.REWARD")))]),s("div",{staticClass:"val"},[t._v(" = (fee + fee * R) * RC * B / (B+10000)"),s("br"),t._v("= "+t._s(t._f("floor")(t.reward,8)))])])]):t._e(),s("div",{staticClass:"btn",on:{click:t.close}},[t._v(t._s(t.$t("POPUP.REWARD_DETAIL.OK")))])])])},staticRenderFns:[]};var $=s("VU/8")(T,D,!1,function(t){s("PcUe")},"data-v-4080a768",null).exports,w=s("bm7V"),O=s.n(w),g=s("Du/2"),U={components:{RewardDetail:$,Detection:d.a,AccOrder:A},data:function(){return{detection_type:"",address:this.$route.params.address,list:[],page:1,per_page:10,loading:!1,selected_type:"XCoin",type_list:["all","reward","PurchaseOrder","AccOrder","CancleOrder","DealOrder","BindRecommender","XCoin"]}},created:function(){var t=this;return _()(n.a.mark(function e(){return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.getDate();case 1:case"end":return e.stop()}},e,t)}))()},mounted:function(){},computed:i()({show_list:function(){if("all"==this.selected_type)return this.list;var t=[];if("reward"==this.selected_type)for(var e=0;e<this.list.length;e++)"reward"==this.list[e].type&&(["XInvitation","XAgent"].indexOf(this.list[e].extra.cause)>-1||t.push(this.list[e]));else if("XCoin"==this.selected_type)for(var s=0;s<this.list.length;s++)"reward"==this.list[s].type&&-1!=["XInvitation","XAgent"].indexOf(this.list[s].extra.cause)&&t.push(this.list[s]);else t=v.a.filter(this.list,{type:this.selected_type});return t}},Object(f.b)({is_metamask:function(t){return t.wallet.is_metamask},is_search:function(t){return t.wallet.is_search},is_ask_trade:function(t){return t.wallet.is_ask_trade},trade_method:function(t){return t.wallet.trade_method}})),filters:{date:function(t){return C.a.format(t,"YYYY/MM/DD HH:mm:ss")},fee_format:function(t){return isNaN(parseInt(t))?0:v.a.floor(l.a.getInstance().formatWei(t),4)},short_address:function(t){return t.slice(0,6)+"..."+t.slice(t.length-6,t.length)}},methods:{handle:function(){var t=_()(n.a.mark(function t(e){return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("string"==typeof e&&(e={method:e}),"divestmentDetail"!=e.method){t.next=4;break}return this[e.method](e),t.abrupt("return",!0);case 4:if(this.is_metamask){t.next=8;break}return t.next=7,this.connect(e);case 7:return t.abrupt("return",!1);case 8:if(!this.is_search){t.next=12;break}return this.$emit("clear-search"),t.next=12,this.back();case 12:this[e.method](e);case 13:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),connect:function(){var t=_()(n.a.mark(function t(){var e=this,s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.is_metamask){t.next=2;break}return t.abrupt("return",!1);case 2:if(this.$wallet.isInstalled()){t.next=12;break}if(this.$wallet.isSupport()){t.next=9;break}return this.detection_type="browser",this.$nextTick(function(){e.$refs.detection.open(s)}),t.abrupt("return",!1);case 9:return this.detection_type="plugin",this.$nextTick(function(){e.$refs.detection.open(s)}),t.abrupt("return",!1);case 12:return t.next=14,this.$wallet.isUnlock();case 14:if(t.sent){t.next=19;break}return this.detection_type="unlock",this.$nextTick(function(){e.$refs.detection.open(s)}),t.abrupt("return",!1);case 19:return this.$store.commit(g.t,!0),this.$emit("clear-search"),t.next=23,this.$wallet.connectMetaMask();case 23:if(t.sent){t.next=28;break}return this.$store.commit(g.t,!1),this.$toast(this.$t("TOAST.CONENCT_ERROR")),t.abrupt("return",!1);case 28:return t.next=30,this.$wallet.updateAllProjectList();case 30:this.$forceUpdate(),this.is_metamask&&"metamask"!=this.trade_method&&this.$store.commit(g.G,{trade_method:"metamask",is_ask_trade:!1}),this.$emit("connected"),this.$store.commit(g.t,!1),void 0!==s.method&&this[s.method](s);case 35:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),afterConnect:function(){var t=_()(n.a.mark(function t(e){return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:void 0!==e.method&&this[e.method](e);case 1:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),accOrder:function(t){this.$refs.acc_order.open(t)},pageChange:function(t){this.page=t,O.a.scrollTo("body",300)},wait_time:function(t){var e="",s=v.a.floor(t/86400,0);s>0&&(e+=s+this.$t("PURCHASE.DAY"));var a=v.a.floor((t-86400*s)/3600);a>0&&(e+=(e.length>0?":":"")+a+this.$t("PURCHASE.HOUR"));var i=v.a.floor((t-86400*s-3600*a)/60);return 0==s&&0==a&&0==i&&(i+=1),i>0&&(e+=(e.length>0?":":"")+i+this.$t("PURCHASE.MINUTE")),e},getTxUrl:function(t){return"https://etherscan.io/tx/"+t},typeUpdate:function(t){this.selected_type=t,this.page=1},getDate:function(){var t=_()(n.a.mark(function t(){var e,s=this;return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=!1,t.prev=1,this.loading=!0,setTimeout(function(){e||(e=!0,s.$toast(s.$t("TOAST.CONENCT_ERROR")),s.loading=!1)},12e4),t.next=6,c.a.getInstance().getRewardList(this.address);case 6:this.list=t.sent,console.log(this.list),e=!0,this.loading=!1,t.next=16;break;case 12:t.prev=12,t.t0=t.catch(1),console.log(t.t0),e||(e=!0,this.$toast(this.$t("TOAST.CONENCT_ERROR")),this.loading=!1);case 16:case"end":return t.stop()}},t,this,[[1,12]])}));return function(){return t.apply(this,arguments)}}(),rewardDetail:function(t){console.log(t),this.$refs.reward_detail.open({type:t.extra.cause,era:t.extra.era,T:t.extra.T,B:t.extra.balance,amount:t.extra.deal_amount,sf_amount:t.extra.sf_amount,reward:t.amount})}}},y={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],class:t.$i18n.locale,attrs:{id:"my-invite","element-loading-text":"loading "}},[a("div",{staticClass:"title"},[a("h3",[t._v(t._s(t.$t("REWARD.TITLE0")))])]),a("table",[a("thead",[a("tr",[a("th",[t._v(t._s(t.$t("REWARD.TIME")))]),a("th",[a("el-dropdown",{ref:"dropdown",attrs:{trigger:"click"}},[a("span",{staticClass:"el-dropdown-link"},[t._v(t._s(t.$t("REWARD.TYPE_"+t.selected_type.toUpperCase()))),a("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},t._l(t.type_list,function(e,s){return a("el-dropdown-item",{key:s,class:{"el-dropdown-active":e==t.selected_type},nativeOn:{click:function(s){t.typeUpdate(e)}}},[t._v(t._s(t.$t("REWARD.TYPE_"+e.toUpperCase())))])}))],1)],1),a("th",[t._v(t._s(t.$t("REWARD.RELATION")))]),a("th",[t._v(t._s(t.$t("REWARD.NUMBER")))]),a("th",[t._v(t._s(t.$t("REWARD.ADDRESS")))]),a("th",[t._v(t._s(t.$t("REWARD.NOTE")))]),a("th")])]),a("tbody",t._l(t.show_list.slice((t.page-1)*t.per_page,t.page*t.per_page),function(e,s){return a("tr",{key:s},[a("td",[t._v(t._s(t._f("date")(e.timestamp)))]),"reward"==e.type&&["XInvitation","XAgent"].indexOf(e.extra.cause)>-1?a("td",[t._v(t._s(t.$t("REWARD.TYPE_XCOIN")))]):a("td",[t._v(t._s(t.$t("REWARD.TYPE_"+e.type.toUpperCase())))]),"reward"==e.type&&["agent","XAgent"].indexOf(e.extra.cause)>-1?a("td",[t._v(t._s(t.$t("REWARD.RELATION_AGENT_"+e.relation)))]):"reward"==e.type&&["$FP"].indexOf(e.extra.cause)>-1?a("td",[t._v(t._s(t.$t("REWARD.RELATION_$FP_"+e.relation)))]):a("td",[t._v(t._s(t.$t("REWARD.RELATION_"+e.relation)))]),a("td",[t._v(t._s(t._f("fee_format")(e.amount))+" \n                    "),"reward"==e.type&&["XInvitation","XAgent"].indexOf(e.extra.cause)>-1?a("span",[t._v("SFM")]):"reward"==e.type?a("span",[t._v("SFD")]):a("span",[t._v("ETH")])]),a("td",{attrs:{title:e.rel_address}},[t._v(t._s(t._f("short_address")(e.rel_address)))]),a("td",["PurchaseOrder"==e.type?[e.extra.order_wait_time>0?a("span",[t._v("\n                        "+t._s(t.$t("REWARD.NOTE_"+e.note.toUpperCase()))+"\n                        "+t._s(t.wait_time(e.extra.order_wait_time))+"\n                        "),e.extra.is_acc_alowed?a("a",{on:{click:function(s){t.handle({method:"accOrder",item:e})}}},[t._v(t._s(t.$t("REWARD.ACC_ORDER")))]):t._e()]):t._e()]:t._e(),"AccOrder"==e.type?void 0:t._e(),"CancleOrder"==e.type?void 0:t._e(),"DealOrder"==e.type?void 0:t._e(),"BindRecommender"==e.type?void 0:t._e(),"XCoin"==e.type?void 0:t._e(),"reward"==e.type?[a("span",[t._v(t._s(t.$t("REWARD.NOTE_"+e.note.toUpperCase())))]),void 0!==e.extra.T?[t._v("\n                        ,"),"candy"!=e.extra.cause?a("a",{on:{click:function(s){t.rewardDetail(e)}}},[t._v(t._s(t.$t("REWARD.REWARD_DETAIL")))]):t._e()]:t._e()]:t._e()],2),a("td",[a("a",{staticClass:"hover",attrs:{href:t.getTxUrl(e.hash),target:"_blank"}},[t._v(t._s(t.$t("REWARD.DETAILS")))])])])}))]),a("div",{directives:[{name:"show",rawName:"v-show",value:0==t.show_list.length,expression:"show_list.length == 0"}],staticClass:"nodata"},[a("img",{attrs:{src:s("QnZW")}}),a("br")]),a("el-pagination",{directives:[{name:"show",rawName:"v-show",value:t.show_list.length>0,expression:"show_list.length > 0"}],staticClass:"pagination",attrs:{background:"",layout:"prev, pager, next","page-size":t.per_page,total:t.show_list.length},on:{"current-change":t.pageChange}}),a("RewardDetail",{ref:"reward_detail"}),a("Detection",{ref:"detection",attrs:{type:t.detection_type},on:{success:t.afterConnect}}),a("AccOrder",{ref:"acc_order",attrs:{type:"metamask"}})],1)},staticRenderFns:[]};var x=s("VU/8")(U,y,!1,function(t){s("nT5/")},"data-v-7d050716",null);e.default=x.exports},PcUe:function(t,e){},RA5a:function(t,e){},V2O3:function(t,e,s){t.exports=s.p+"static/img/no_accelerate.9d52ee8.png"},XUtr:function(t,e,s){t.exports=s.p+"static/img/accelerate.cad4e19.png"},"nT5/":function(t,e){}});