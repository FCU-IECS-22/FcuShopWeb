(function(t){function e(e){for(var n,o,s=e[0],i=e[1],l=e[2],d=0,m=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&m.push(c[o][0]),c[o]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n]);u&&u(e);while(m.length)m.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,s=1;s<a.length;s++){var i=a[s];0!==c[i]&&(n=!1)}n&&(r.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},c={app:0},r=[];function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/FcuShopWeb/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=i;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0ec7":function(t,e,a){},"20a3":function(t,e,a){"use strict";a("38ed")},2278:function(t,e,a){"use strict";a("e64b")},2690:function(t,e,a){"use strict";a("0ec7")},"38ed":function(t,e,a){},"56b2":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("7a23"),c=a("5502"),r=Object(c["a"])({state:function(){return{cartNum:0}},mutations:{setup:function(t,e){t.cartNum=e},increase:function(t){t.cartNum++},decrease:function(t,e){t.cartNum=t.cartNum-e}},actions:{setup:function(t,e){t.commit("setup",e)},increase:function(t){t.commit("increase")},decrease:function(t,e){t.commit("decrease",e)}}});function o(t,e,a,c,r,o){var s=Object(n["z"])("Navbar"),i=Object(n["z"])("router-view");return Object(n["s"])(),Object(n["e"])(n["a"],null,[Object(n["i"])(s),Object(n["i"])(i)],64)}a("d3b7"),a("159b"),a("b0c0");var s=function(t){return Object(n["v"])("data-v-3f596885"),t=t(),Object(n["t"])(),t},i={class:"navbar navbar-expand-lg navbar-light bg-light"},l={class:"container-fluid"},u=s((function(){return Object(n["f"])("a",{class:"navbar-brand"},"FCU Shop",-1)})),d=s((function(){return Object(n["f"])("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(n["f"])("span",{class:"navbar-toggler-icon"})],-1)})),m={class:"collapse navbar-collapse",id:"navbarSupportedContent"},b={class:"navbar-nav me-auto mb-2 mb-lg-0"},f={class:"nav-item"},p=Object(n["h"])("首頁"),O={key:0,class:"navbar-nav mb-2 mb-lg-0 d-flex not-login"},h={class:"nav-item"},j=Object(n["h"])("登入"),v={class:"nav-item"},g=Object(n["h"])("註冊"),y={class:"navbar-nav mb-2 mb-lg-0 d-flex is-login"},w={class:"nav-item"},k={class:"nav-item"},I=s((function(){return Object(n["f"])("button",{class:"btn btn-outline-success my-2 my-sm-0",type:"submit","data-toggle":"modal","data-target":"#searchBotton"},"Search",-1)})),x={key:0,class:"btn btn-outline-warning my-2 my-sm-0",type:"submit","data-toggle":"modal","data-target":"#createBotton"},S={class:"modal fade windowset1",id:"searchBotton",tabindex:"-1",role:"dialog"},C={class:"modal-dialog windowset",role:"document"},N={class:"modal-content windowset2"},$=s((function(){return Object(n["f"])("div",{class:"modal-header"},[Object(n["f"])("h5",{class:"modal-title"},"MY SHOP"),Object(n["f"])("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close"},[Object(n["f"])("span",{"aria-hidden":"true"},"×")])],-1)})),_={class:"modal-body"},D={class:"modal-footer"},U={class:"modal fade",id:"createBotton",tabindex:"-1",role:"dialog"},E={class:"modal-dialog modal-dialog-centered"},P={class:"modal-content"},B={class:"modal-body"},A={class:"form-group"},T=s((function(){return Object(n["f"])("label",null,"商品名稱",-1)})),F={class:"form-group"},J=s((function(){return Object(n["f"])("label",{for:"exampleInputPassword1"},"商品圖片",-1)})),R={class:"form-group"},z=s((function(){return Object(n["f"])("label",{for:"exampleInputPassword1"},"商品價錢",-1)})),G={class:"form-group"},V=s((function(){return Object(n["f"])("label",{for:"exampleInputPassword1"},"商品細節",-1)})),H={class:"modal-footer"};function L(t,e,a,c,r,o){var s=Object(n["z"])("router-link");return Object(n["s"])(),Object(n["e"])(n["a"],null,[Object(n["f"])("nav",i,[Object(n["f"])("div",l,[u,d,Object(n["f"])("div",m,[Object(n["f"])("ul",b,[Object(n["f"])("li",f,[Object(n["i"])(s,{to:"/",class:Object(n["o"])(["nav-link active",o.isAdmin]),"aria-current":"page"},{default:Object(n["F"])((function(){return[p]})),_:1},8,["class"])])]),o.show?(Object(n["s"])(),Object(n["e"])("ul",O,[Object(n["f"])("li",h,[Object(n["i"])(s,{to:"/login",class:"nav-link"},{default:Object(n["F"])((function(){return[j]})),_:1})]),Object(n["f"])("li",v,[Object(n["i"])(s,{to:"/signup",class:"nav-link"},{default:Object(n["F"])((function(){return[g]})),_:1})])])):Object(n["d"])("",!0),Object(n["f"])("ul",y,[Object(n["f"])("li",w,[Object(n["i"])(s,{to:"/cart",class:"nav-link"},{default:Object(n["F"])((function(){return[Object(n["h"])("購物車("+Object(n["B"])(o.cartNum)+")",1)]})),_:1})]),Object(n["f"])("li",k,[o.show?Object(n["d"])("",!0):(Object(n["s"])(),Object(n["e"])("a",{key:0,onClick:e[0]||(e[0]=function(t){return o.logout()}),class:"nav-link",href:""},"登出"))])])]),I,o.adminshow?(Object(n["s"])(),Object(n["e"])("button",x,"Create")):Object(n["d"])("",!0)])]),Object(n["f"])("div",S,[Object(n["f"])("div",C,[Object(n["f"])("div",N,[$,Object(n["f"])("div",_,[Object(n["G"])(Object(n["f"])("input",{type:"text",class:"form-control",placeholder:"商品名稱",id:"productKeyword","onUpdate:modelValue":e[1]||(e[1]=function(t){return r.key=t})},null,512),[[n["D"],r.key]])]),Object(n["f"])("div",D,[Object(n["f"])("button",{onClick:e[2]||(e[2]=function(t){return o.searchKey()}),class:"btn btn-outline-secondary",type:"button",id:"searchProduct","data-dismiss":"modal"},"Search")])])])]),Object(n["f"])("div",U,[Object(n["f"])("div",E,[Object(n["f"])("div",P,[Object(n["f"])("form",{onSubmit:e[8]||(e[8]=Object(n["H"])((function(){}),["prevent"]))},[Object(n["f"])("div",B,[Object(n["f"])("div",A,[T,Object(n["G"])(Object(n["f"])("input",{class:"form-control",name:"newName","onUpdate:modelValue":e[3]||(e[3]=function(t){return r.arr.name=t})},null,512),[[n["D"],r.arr.name]])]),Object(n["f"])("div",F,[J,Object(n["G"])(Object(n["f"])("input",{class:"form-control",name:"imageUrl","onUpdate:modelValue":e[4]||(e[4]=function(t){return r.arr.img_url=t})},null,512),[[n["D"],r.arr.img_url]])]),Object(n["f"])("div",R,[z,Object(n["G"])(Object(n["f"])("input",{class:"form-control",name:"price","onUpdate:modelValue":e[5]||(e[5]=function(t){return r.arr.price=t})},null,512),[[n["D"],r.arr.price]])]),Object(n["f"])("div",G,[V,Object(n["G"])(Object(n["f"])("textarea",{name:"description",rows:"5",class:"form-control","onUpdate:modelValue":e[6]||(e[6]=function(t){return r.arr.detail=t})},null,512),[[n["D"],r.arr.detail]])])]),Object(n["f"])("div",H,[Object(n["f"])("button",{onClick:e[7]||(e[7]=function(t){return o.createProduct()}),type:"submit",class:"btn btn-primary","data-dismiss":"modal"},"新增")])],32)])])])],64)}var M={name:"Nav",data:function(){return{num:0,arr:{name:"",img_url:"",price:0,detail:""},key:""}},computed:{cartNum:function(){return this.$store.state.cartNum},buy:function(){return this.num},show:function(){return null==this.$route.params.USER},adminshow:function(){return"admin"==this.$route.params.USER},isAdmin:function(){return"Admin"==this.$route.name?"disabled":""}},components:{},methods:{searchKey:function(){this.$emitter.emit("keyword",this.key),this.key=""},backhome:function(){var t=document.getElementsByClassName("modal-backdrop"),e=t[0].parentNode;e.removeAttribute("style"),e.removeAttribute("class"),e.removeChild(t[0])},logout:function(){this.num=0,this.$router.push("Index")},createProduct:function(){var t=this;this.$http.post("https://fcushop.herokuapp.com/new",{name:this.arr.name,imageUrl:this.arr.img_url,price:this.arr.price,description:this.arr.detail}).then((function(){return t.$emitter.emit("reload",1)})).catch((function(t){return console.log(t)})),this.arr.name="",this.arr.img_url="",this.arr.price=0,this.arr.detail=""}},mounted:function(){this.$emitter.on("cartNum",(function(){}))}},K=(a("cc3d"),a("6b0d")),W=a.n(K);const Y=W()(M,[["render",L],["__scopeId","data-v-3f596885"]]);var q=Y,Q={name:"App",components:{Navbar:q},mounted:function(){if("cartItems"in localStorage){var t=0;JSON.parse(localStorage.getItem("cartItems")).forEach((function(e){return t+=e.hitTimes})),this.$store.dispatch("setup",t)}}};a("db05");const X=W()(Q,[["render",o]]);var Z=X,tt=a("bc3a"),et=a.n(tt),at=a("6c02"),nt={key:0};function ct(t,e,a,c,r,o){var s=Object(n["z"])("Card");return Object(n["s"])(),Object(n["e"])(n["a"],null,[o.show?Object(n["d"])("",!0):(Object(n["s"])(),Object(n["e"])("span",nt," 現在的使用者是"+Object(n["B"])(o.USER),1)),Object(n["i"])(s)],64)}a("a4d3"),a("e01a");var rt=function(t){return Object(n["v"])("data-v-6687af33"),t=t(),Object(n["t"])(),t},ot={class:"container"},st={class:"mt-3 row"},it=["src"],lt={class:"card-body"},ut={class:"card-title"},dt={class:"id",style:{display:"none"}},mt={class:"card-text"},bt=["onClick"],ft=["data-target"],pt=["id"],Ot={class:"modal-dialog modal-dialog-centered"},ht={class:"modal-content"},jt=["id"],vt={class:"modal-body"},gt={class:"form-group"},yt=rt((function(){return Object(n["f"])("label",null,"商品名稱",-1)})),wt=["placeholder"],kt=["value"],It={class:"form-group"},xt=rt((function(){return Object(n["f"])("label",{for:"exampleInputPassword1"},"商品圖片",-1)})),St=["value"],Ct={class:"form-group"},Nt=rt((function(){return Object(n["f"])("label",{for:"exampleInputPassword1"},"商品價錢",-1)})),$t=["value"],_t={class:"form-group"},Dt=rt((function(){return Object(n["f"])("label",{for:"exampleInputPassword1"},"商品細節",-1)})),Ut=["value"],Et={class:"modal-footer"},Pt=["onClick"],Bt=["onClick"];function At(t,e,a,c,r,o){return Object(n["s"])(),Object(n["e"])("div",ot,[Object(n["f"])("div",st,[(Object(n["s"])(!0),Object(n["e"])(n["a"],null,Object(n["y"])(o.itemList,(function(t){return Object(n["s"])(),Object(n["e"])("div",{class:"card col-4",key:t.id},[Object(n["f"])("img",{src:t.imageUrl,class:"card-img-top",alt:"瑪利歐派對 超級巨星"},null,8,it),Object(n["f"])("div",lt,[Object(n["f"])("h5",ut,Object(n["B"])(t.name),1),Object(n["f"])("a",dt,Object(n["B"])(t.id),1),Object(n["f"])("p",mt,Object(n["B"])(t.description),1),Object(n["f"])("button",{onClick:function(e){return o.plus(t.id)},class:"btn btn-primary me-md-2"},Object(n["B"])(t.price),9,bt),o.show?(Object(n["s"])(),Object(n["e"])("button",{key:0,type:"button",class:"btn btn-danger","data-toggle":"modal","data-target":"#card-"+t.id}," 編輯 ",8,ft)):Object(n["d"])("",!0)]),Object(n["f"])("div",{class:"modal fade",id:"card-"+t.id,tabindex:"-1",role:"dialog"},[Object(n["f"])("div",Ot,[Object(n["f"])("div",ht,[Object(n["f"])("form",{id:"form-"+t.id},[Object(n["f"])("div",vt,[Object(n["f"])("div",gt,[yt,Object(n["f"])("input",{class:"form-control",name:"oldName",type:"text",placeholder:t.name,readonly:""},null,8,wt),Object(n["f"])("input",{class:"form-control",name:"newName",value:t.name},null,8,kt)]),Object(n["f"])("div",It,[xt,Object(n["f"])("input",{class:"form-control",name:"imageUrl",value:t.imageUrl},null,8,St)]),Object(n["f"])("div",Ct,[Nt,Object(n["f"])("input",{class:"form-control",name:"price",value:t.price},null,8,$t)]),Object(n["f"])("div",_t,[Dt,Object(n["f"])("textarea",{name:"description",rows:"5",class:"form-control",value:t.description},null,8,Ut)])]),Object(n["f"])("div",Et,[Object(n["f"])("button",{onClick:function(e){return o.editItem(t.id)},type:"submit",class:"btn btn-primary","data-dismiss":"modal"},"修改",8,Pt),Object(n["f"])("button",{onClick:function(e){return o.deleteItem(t.id)},type:"submit",class:"btn btn-danger","data-dismiss":"modal"},"刪除",8,Bt)])],8,jt)])])],8,pt)])})),128))])])}a("7db0"),a("e9c4");var Tt={name:"Card",data:function(){return{arr:[],editedData:{oldName:"",newName:"",imageUrl:"",price:0,description:""},cartItems:[]}},computed:{itemList:function(){return this.arr},show:function(){return"admin"==this.$route.params.USER}},components:{},mounted:function(){var t=this;this.getData(),this.getCartHistory(),this.$emitter.on("reload",(function(){return t.getData()})),this.$emitter.on("keyword",(function(e){return t.searchData(e)}))},methods:{getData:function(){var t=this;this.$http.get("https://fcushop.herokuapp.com/products").then((function(e){return t.arr=e.data})).catch((function(t){return console.log(t)}))},searchData:function(t){var e=this;this.$http.get("https://fcushop.herokuapp.com/products/"+t).then((function(t){0==t.data.length?(alert("查無符合項目!"),e.getData()):e.arr=t.data})).catch((function(t){return console.log(t)}))},getCartHistory:function(){localStorage.cartItems&&(this.cartItems=JSON.parse(localStorage.cartItems))},plus:function(t){var e=this.cartItems.find((function(e){return e.id===t}));if(e)e.hitTimes++;else{console.log("not found "+t);var a={id:t,hitTimes:1};this.cartItems.push(a)}this.$store.dispatch("increase"),this.cartItems&&(localStorage.cartItems=JSON.stringify(this.cartItems))},editItem:function(t){var e=this,a=document.getElementById("form-"+t).getElementsByTagName("input"),n=document.getElementById("form-"+t).getElementsByTagName("textarea");this.editedData.oldName=a[0].placeholder,this.editedData.newName=a[1].value,this.editedData.imageUrl=a[2].value,this.editedData.price=a[3].value,this.editedData.description=n[0].value,this.$http.post("https://fcushop.herokuapp.com/edit",{oldName:this.editedData.oldName,newName:this.editedData.newName,imageUrl:this.editedData.imageUrl,price:this.editedData.price,description:this.editedData.description}).then((function(){return e.getData()})).catch((function(t){return console.log(t)}))},deleteItem:function(t){var e=this;this.$http.post("https://fcushop.herokuapp.com/deleteProduct",{id:t}).then((function(){e.getData(),console.log("9999")})).catch((function(t){return console.log(t)}))}}};a("fcde");const Ft=W()(Tt,[["render",At],["__scopeId","data-v-6687af33"]]);var Jt=Ft,Rt={name:"Admin",data:function(){return{}},computed:{USER:function(){return this.$route.params.USER},show:function(){return null==this.$route.params.USER}},components:{Card:Jt}};const zt=W()(Rt,[["render",ct]]);var Gt=zt;function Vt(t,e,a,c,r,o){var s=Object(n["z"])("Carousel"),i=Object(n["z"])("Card");return Object(n["s"])(),Object(n["e"])(n["a"],null,[Object(n["i"])(s),Object(n["i"])(i)],64)}var Ht=function(t){return Object(n["v"])("data-v-cad4c03e"),t=t(),Object(n["t"])(),t},Lt={id:"carouselExampleIndicators",class:"carousel slide mt-3","data-ride":"carousel"},Mt=Object(n["g"])('<ol class="carousel-indicators" data-v-cad4c03e><li data-target="#carouselExampleIndicators" data-slide-to="0" class="active" data-v-cad4c03e></li><li data-target="#carouselExampleIndicators" data-slide-to="1" data-v-cad4c03e></li><li data-target="#carouselExampleIndicators" data-slide-to="2" data-v-cad4c03e></li></ol><div class="carousel-inner" data-v-cad4c03e><div class="carousel-item active" data-v-cad4c03e><img class="d-block w-100" src="https://cdn.kingstone.com.tw/resp/980x300_koboxmas12.avif" alt="First slide" data-v-cad4c03e></div><div class="carousel-item" data-v-cad4c03e><img class="d-block w-100" src="https://cdn.kingstone.com.tw/resp/980x300_a2112042.avif" alt="Second slide" data-v-cad4c03e></div><div class="carousel-item" data-v-cad4c03e><img class="d-block w-100" src="https://cdn.kingstone.com.tw/resp/980x300_20211223diarydks.avif" alt="Third slide" data-v-cad4c03e></div></div>',2),Kt=Ht((function(){return Object(n["f"])("a",{class:"carousel-control-prev",href:"#carouselExampleIndicators",role:"button","data-slide":"prev"},[Object(n["f"])("span",{class:"carousel-control-prev-icon","aria-hidden":"true"}),Object(n["f"])("span",{class:"sr-only"},"Previous")],-1)})),Wt=Ht((function(){return Object(n["f"])("a",{class:"carousel-control-next",href:"#carouselExampleIndicators",role:"button","data-slide":"next"},[Object(n["f"])("span",{class:"carousel-control-next-icon","aria-hidden":"true"}),Object(n["f"])("span",{class:"sr-only"},"Next")],-1)})),Yt=[Mt,Kt,Wt];function qt(t,e,a,c,r,o){return Object(n["s"])(),Object(n["e"])("div",Lt,Yt)}var Qt={name:"Carousel"};a("20a3");const Xt=W()(Qt,[["render",qt],["__scopeId","data-v-cad4c03e"]]);var Zt=Xt,te={name:"Index",data:function(){return{}},components:{Carousel:Zt,Card:Jt}};const ee=W()(te,[["render",Vt]]);var ae=ee,ne=function(t){return Object(n["v"])("data-v-5ba45185"),t=t(),Object(n["t"])(),t},ce={class:"mb-3"},re=ne((function(){return Object(n["f"])("label",{for:"username",class:"form-label"},"Username",-1)})),oe={class:"mb-3"},se=ne((function(){return Object(n["f"])("label",{for:"password",class:"form-label"},"Password",-1)}));function ie(t,e,a,c,r,o){return Object(n["s"])(),Object(n["e"])("form",{onSubmit:e[3]||(e[3]=Object(n["H"])((function(){}),["prevent"])),modelAttribute:"product",class:Object(n["o"])([o.isSign,"form loginwindow"]),action:"/login",method:"post"},[Object(n["f"])("p",null,"會員"+Object(n["B"])(o.path),1),Object(n["f"])("div",ce,[re,Object(n["G"])(Object(n["f"])("input",{"onUpdate:modelValue":e[0]||(e[0]=function(t){return r.username=t}),type:"text",class:"form-control loginset",id:"username",name:"username"},null,512),[[n["D"],r.username]])]),Object(n["f"])("div",oe,[se,Object(n["G"])(Object(n["f"])("input",{"onUpdate:modelValue":e[1]||(e[1]=function(t){return r.password=t}),type:"password",class:"form-control loginset"},null,512),[[n["D"],r.password]])]),Object(n["f"])("button",{onClick:e[2]||(e[2]=function(t){return o.submit()}),class:"btn btn-primary loginset"},Object(n["B"])(o.path),1)],34)}var le={name:"Account",data:function(){return{username:"",password:""}},computed:{path:function(){return"login"==this.$route.name?"登入":"signup"==this.$route.name?"註冊":"System Error"},isSign:function(){return"signup"==this.$route.name?"Signup":"Login"}},components:{},methods:{submit:function(){var t=this,e="";"登入"==this.path?e="loginn":"註冊"==this.path&&(e="signUpp"),this.$http.post("https://fcushop.herokuapp.com/"+e,{id:123,username:this.username,password:this.password}).then((function(e){"unknown user"==e.data?alert(e.data):t.$router.push({name:"Admin",params:{USER:e.data}})})).catch((function(t){return console.log(t)}))}}};a("2690");const ue=W()(le,[["render",ie],["__scopeId","data-v-5ba45185"]]);var de=ue,me={class:"container"},be={class:"card text-white bg-dark my-3"},fe=["id"],pe={class:"col-md-4"},Oe=["src"],he={class:"col-md-8"},je={class:"card-body"},ve={class:"card-title"},ge={class:"id",style:{display:"none"}},ye={class:"card-text"},we=["onClick"],ke=Object(n["h"])("送出訂單");function Ie(t,e,a,c,r,o){var s=Object(n["z"])("router-link");return Object(n["s"])(),Object(n["e"])("div",me,[Object(n["f"])("div",be,[(Object(n["s"])(!0),Object(n["e"])(n["a"],null,Object(n["y"])(o.itemList,(function(t,e){return Object(n["s"])(),Object(n["e"])("div",{class:"row g-0",key:t.id,id:"card-"+t.id},[Object(n["f"])("div",pe,[Object(n["f"])("img",{src:t.imageUrl,class:"card-img-top",alt:"瑪利歐派對 超級巨星"},null,8,Oe)]),Object(n["f"])("div",he,[Object(n["f"])("div",je,[Object(n["f"])("h5",ve,Object(n["B"])(t.name),1),Object(n["f"])("a",ge,Object(n["B"])(t.id),1),Object(n["f"])("p",ye,Object(n["B"])(t.description),1),Object(n["f"])("p",null,"訂購數量："+Object(n["B"])(r.cartItems[e].hitTimes),1),Object(n["f"])("button",{onClick:function(e){return o.remove(t.id)},class:"btn btn-primary me-md-2 btn-danger"},"移除此商品",8,we)])])],8,fe)})),128)),Object(n["i"])(s,{onClick:e[0]||(e[0]=function(t){return o.clear()}),to:"/",class:"btn btn-primary me-md-2 btn-primary"},{default:Object(n["F"])((function(){return[ke]})),_:1})])])}a("b64b"),a("a434");var xe={name:"Cart",data:function(){return{arr:[],cartItems:[],getId:[]}},computed:{itemList:function(){return this.arr}},components:{},mounted:function(){this.getCartData()},methods:{getCartData:function(){var t=this;if(localStorage.cartItems){this.cartItems=JSON.parse(localStorage.cartItems);for(var e=0;e<Object.keys(this.cartItems).length;e++)console.log(this.cartItems[e].id),this.getId.push(this.cartItems[e].id);this.$http.post("https://fcushop.herokuapp.com/productsOfCart",{cartItems:this.getId}).then((function(e){t.arr=e.data})).catch((function(t){return console.log(t)}))}},remove:function(t){var e=0;this.arr.forEach((function(e,a,n){e.id===t&&n.splice(a,1)}));var a=JSON.parse(localStorage.getItem("cartItems"));a.forEach((function(a,n,c){a.id===t&&(e=a.hitTimes,c.splice(n,1))})),localStorage.setItem("cartItems",JSON.stringify(a)),this.$store.dispatch("decrease",e)},clear:function(){localStorage.removeItem("cartItems"),console.log(localStorage.cartItems),location.href="/"}}};a("2278");const Se=W()(xe,[["render",Ie],["__scopeId","data-v-72897840"]]);var Ce=Se,Ne=[{path:"/index",redirect:{name:"Index"}},{path:"/",name:"Index",component:ae},{path:"/admin",name:"Admin",component:Gt},{path:"/signup",name:"signup",component:de},{path:"/login",name:"login",component:de},{path:"/cart",name:"cart",component:Ce}],$e=Object(at["a"])({history:Object(at["b"])(),linkExactActiveClass:"active",routes:Ne}),_e=$e,De=a("1344"),Ue=Object(n["c"])(Z);Ue.use(_e),Ue.use(r),Ue.config.globalProperties.$http=et.a,Ue.config.globalProperties.$emitter=Object(De["a"])(),Ue.mount("#app")},"5b3d":function(t,e,a){},6368:function(t,e,a){},cc3d:function(t,e,a){"use strict";a("6368")},db05:function(t,e,a){"use strict";a("56b2")},e64b:function(t,e,a){},fcde:function(t,e,a){"use strict";a("5b3d")}});
//# sourceMappingURL=app.b4f23470.js.map