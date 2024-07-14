"use strict";(self["webpackChunkecommerce_vue2_frontend_user"]=self["webpackChunkecommerce_vue2_frontend_user"]||[]).push([[386],{94933:(t,e,r)=>{r.d(e,{A:()=>D});r(62010);var o=r(56768),n=r(24232),a=r(45130),l={class:"border rounded-4 bg-light p-4"},c={class:"table bg-light m-2"},i=(0,o.Lk)("thead",null,[(0,o.Lk)("tr",null,[(0,o.Lk)("th",{scope:"col"},"Imagen"),(0,o.Lk)("th",{scope:"col"},"Producto"),(0,o.Lk)("th",{scope:"col"},"Precio"),(0,o.Lk)("th",{scope:"col"},"Cantidad"),(0,o.Lk)("th",{scope:"col"},"SubTotal")])],-1),d=["src","alt"],u=["onClick"],s=(0,o.Lk)("i",{class:"bi bi-dash"},null,-1),m=[s],p=["onClick"],b=(0,o.Lk)("i",{class:"bi bi-plus"},null,-1),f=[b],k=["onClick"],y=(0,o.Lk)("i",{class:"bi bi-trash"},null,-1),h=[y],L={class:"text-end fs-3",colspan:"6"},C={class:"d-flex justify-content-between mt-4"},v=(0,o.Lk)("button",{class:"btn btn-lg btn-primary",type:"submit"},"Pasar por Caja",-1),g=[v];function w(t,e,r,s,b,y){return(0,o.uX)(),(0,o.CE)(o.FK,null,[(0,o.Lk)("section",l,[(0,o.Lk)("table",c,[i,(0,o.Lk)("tbody",null,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(t.cart,(function(t){return(0,o.uX)(),(0,o.CE)("tr",{key:t.sku},[(0,o.Lk)("td",null,[(0,o.Lk)("img",{src:t.img,class:"img-fluid img-thumbnail p-0",height:"50",width:"80",alt:t.name},null,8,d)]),(0,o.Lk)("td",null,(0,n.v_)(t.name),1),(0,o.Lk)("td",null,(0,n.v_)(t.price),1),(0,o.Lk)("td",null,[r.editableCount?((0,o.uX)(),(0,o.CE)("button",{key:0,type:"button",class:"btn btn-light shadow-sm rounded-pill mx-1",onClick:function(e){return y.removeQty(t)}},m,8,u)):(0,o.Q3)("",!0),(0,o.eW)(" "+(0,n.v_)(t.quantity)+" ",1),r.editableCount?((0,o.uX)(),(0,o.CE)("button",{key:1,type:"button",class:"btn btn-light shadow-sm rounded-pill mx-1",onClick:function(e){return y.addQty(t)}},f,8,p)):(0,o.Q3)("",!0),r.editableCount?((0,o.uX)(),(0,o.CE)("button",{key:2,type:"button",class:"btn btn-danger shadow-sm rounded-pill mx-1",onClick:function(e){return y.deleteProduct(t)}},h,8,k)):(0,o.Q3)("",!0)]),(0,o.Lk)("td",null,(0,n.v_)(t.total),1)])})),128)),(0,o.Lk)("tr",null,[(0,o.Lk)("td",L,[(0,o.eW)("Total (USD): "),(0,o.Lk)("strong",null,"$"+(0,n.v_)(t.cartTotalPrice),1)])])])])]),(0,o.Lk)("section",C,[r.editableCount?((0,o.uX)(),(0,o.CE)("button",{key:0,class:"btn btn-secondary",onClick:e[0]||(e[0]=function(){return y.deleteCart&&y.deleteCart.apply(y,arguments)})},"Vaciar Carrito")):(0,o.Q3)("",!0),r.editableCount?((0,o.uX)(),(0,o.CE)("form",{key:1,onSubmit:e[1]||(e[1]=(0,a.D$)((function(){return y.createOrder&&y.createOrder.apply(y,arguments)}),["prevent"]))},g,32)):(0,o.Q3)("",!0)])],64)}var U=r(41034),P=(r(44114),r(60782));const A={name:"CartDetail",props:{editableCount:{type:Boolean,required:!1,default:!1}},data:function(){return{}},computed:(0,U.A)((0,U.A)({},(0,P.aH)(["cart"])),(0,P.L8)(["productCount","cartTotalPrice"])),methods:(0,U.A)((0,U.A)({},(0,P.i0)(["addQuantityToProduct","removeQuantityFromProduct","removeProductFromCart","emptyCart"])),{},{addQty:function(t){try{this.addQuantityToProduct(t)}catch(e){alert("No se pudo agregar la cantidad.")}},removeQty:function(t){try{this.removeQuantityFromProduct(t)}catch(e){alert("No se pudo disminuir la cantidad.")}},deleteProduct:function(t){try{this.removeProductFromCart(t)}catch(e){alert("No se pudo eliminar el producto.")}},createOrder:function(){this.$router.push("/pasar-por-caja")},deleteCart:function(){this.emptyCart()}})};var E=r(71241);const X=(0,E.A)(A,[["render",w]]),D=X},49386:(t,e,r)=>{r.r(e),r.d(e,{default:()=>z});var o=r(56768),n={class:"container pt-5"},a=(0,o.Lk)("h1",{class:"my-5"},"Pasar por Caja",-1),l={key:0,class:"alert alert-info",role:"alert"},c={key:1,class:"row row-cols-1 row-cols-md-2 row-cols-lg-2"};function i(t,e,r,i,d,u){var s=(0,o.g2)("CheckoutForm"),m=(0,o.g2)("CartDetail");return(0,o.uX)(),(0,o.CE)("main",n,[a,t.productCount<1?((0,o.uX)(),(0,o.CE)("section",l," Aún no has añadido productos a tu carrito. ")):((0,o.uX)(),(0,o.CE)("section",c,[(0,o.bF)(s,{onConfirmOrderSubmit:u.confirmOrder},null,8,["onConfirmOrderSubmit"]),(0,o.bF)(m)]))])}var d=r(41034),u=(r(44114),r(60739),r(33110),r(60782)),s=r(94933),m=(r(62010),r(45130)),p={id:"deliveryAddress",class:"mb-4 p-4 border rounded-4 bg-light"},b=(0,o.Lk)("h4",{class:"mb-3"},"Dirección de Entrega",-1),f={class:"d-flex justify-content-between gap-2 my-2"},k={class:"w-100"},y=(0,o.Lk)("label",{for:"firstName",class:"form-label"},"Nombre",-1),h={class:"w-100"},L=(0,o.Lk)("label",{for:"lastName",class:"form-label"},"Apellido",-1),C={class:"col-12 my-2"},v=(0,o.Lk)("label",{for:"email",class:"form-label"},[(0,o.eW)("Correo Electrónico"),(0,o.Lk)("span",{class:"text-body-secondary"},"(Opcional)")],-1),g={class:"col-12 my-2"},w=(0,o.Lk)("label",{for:"address",class:"form-label"},"Dirección",-1),U={id:"paymentForm",class:"my-4 p-4 border rounded-4 bg-light"},P=(0,o.Lk)("h4",{class:"mb-3"},"Método de pago",-1),A={class:"form-check my-2"},E=(0,o.Lk)("label",{class:"form-check-label",for:"credit"},[(0,o.Lk)("i",{class:"bi bi-credit-card-2-front me-2"}),(0,o.eW)("Tarjeta de débito o crédito")],-1),X={class:"form-check my-2"},D=(0,o.Lk)("label",{class:"form-check-label",for:"debit"},[(0,o.Lk)("i",{class:"bi bi-cash me-2"}),(0,o.eW)("Transferencia o depósito")],-1),O=(0,o.Lk)("button",{class:"w-100 btn btn-primary btn-lg",type:"submit"},"Confirmar compra",-1);function Q(t,e,r,n,a,l){return(0,o.uX)(),(0,o.CE)("form",{onSubmit:e[6]||(e[6]=(0,m.D$)((function(){return l.confirmOrder&&l.confirmOrder.apply(l,arguments)}),["prevent"]))},[(0,o.Lk)("section",p,[b,(0,o.Lk)("div",f,[(0,o.Lk)("div",k,[y,(0,o.bo)((0,o.Lk)("input",{type:"text",class:"form-control",id:"firstName",placeholder:"Juan",required:"","onUpdate:modelValue":e[0]||(e[0]=function(e){return t.client.name=e})},null,512),[[m.Jo,t.client.name]])]),(0,o.Lk)("div",h,[L,(0,o.bo)((0,o.Lk)("input",{type:"text",class:"form-control",id:"lastName",placeholder:"Perez",required:"","onUpdate:modelValue":e[1]||(e[1]=function(e){return t.client.lastname=e})},null,512),[[m.Jo,t.client.lastname]])])]),(0,o.Lk)("div",C,[v,(0,o.bo)((0,o.Lk)("input",{type:"email",class:"form-control",id:"email",placeholder:"usuario@dominio.com","onUpdate:modelValue":e[2]||(e[2]=function(e){return t.client.email=e})},null,512),[[m.Jo,t.client.email]])]),(0,o.Lk)("div",g,[w,(0,o.bo)((0,o.Lk)("input",{type:"text",class:"form-control",id:"address",placeholder:"Ingresa tu dirección",required:"","onUpdate:modelValue":e[3]||(e[3]=function(e){return t.client.address=e})},null,512),[[m.Jo,t.client.address]])])]),(0,o.Lk)("section",U,[P,(0,o.Lk)("div",A,[(0,o.bo)((0,o.Lk)("input",{id:"credit",name:"paymentMethod",type:"radio",class:"form-check-input",checked:"",required:"",value:"credit","onUpdate:modelValue":e[4]||(e[4]=function(e){return t.client.payment.method=e})},null,512),[[m.XL,t.client.payment.method]]),E]),(0,o.Lk)("div",X,[(0,o.bo)((0,o.Lk)("input",{id:"debit",name:"paymentMethod",type:"radio",class:"form-check-input",required:"",value:"debit","onUpdate:modelValue":e[5]||(e[5]=function(e){return t.client.payment.method=e})},null,512),[[m.XL,t.client.payment.method]]),D])]),O],32)}r(94170);var F="undefined"!==typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto);const S={randomUUID:F};r(16280),r(76918),r(11745),r(38309),r(16573),r(78100),r(77936),r(26099),r(21489),r(48140),r(81630),r(72170),r(75044),r(69539),r(31694),r(89955),r(21903),r(91134),r(33206),r(44496),r(66651),r(12887),r(19369),r(66812),r(8995),r(31575),r(36072),r(88747),r(28845),r(29423),r(57301),r(373),r(86614),r(41405),r(37467),r(44732),r(33684),r(79577);var V,_=new Uint8Array(16);function x(){if(!V&&(V="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!V))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return V(_)}r(34782),r(23288),r(38781);for(var T=[],I=0;I<256;++I)T.push((I+256).toString(16).slice(1));function N(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return(T[t[e+0]]+T[t[e+1]]+T[t[e+2]]+T[t[e+3]]+"-"+T[t[e+4]]+T[t[e+5]]+"-"+T[t[e+6]]+T[t[e+7]]+"-"+T[t[e+8]]+T[t[e+9]]+"-"+T[t[e+10]]+T[t[e+11]]+T[t[e+12]]+T[t[e+13]]+T[t[e+14]]+T[t[e+15]]).toLowerCase()}function j(t,e,r){if(S.randomUUID&&!e&&!t)return S.randomUUID();t=t||{};var o=t.random||(t.rng||x)();if(o[6]=15&o[6]|64,o[8]=63&o[8]|128,e){r=r||0;for(var n=0;n<16;++n)e[r+n]=o[n];return e}return N(o)}const q=j,J={name:"CheckoutForm",data:function(){return{client:{name:"",lastname:"",email:"",address:"",payment:{method:""}}}},computed:(0,d.A)({},(0,u.L8)(["cartProductTotal"])),methods:{confirmOrder:function(){var t=q(),e={id:t,client:(0,d.A)({},this.client),products:this.cartProductTotal};this.$emit("confirmOrderSubmit",e)}}};var $=r(71241);const W=(0,$.A)(J,[["render",Q]]),M=W,R={name:"CheckoutView",data:function(){return{}},components:{CartDetail:s.A,CheckoutForm:M},computed:(0,d.A)({},(0,u.L8)(["productCount"])),methods:{confirmOrder:function(t){sessionStorage.order=JSON.stringify(t),this.$router.push({name:"confirmation",params:{orderId:t.id}})}}},K=(0,$.A)(R,[["render",i]]),z=K}}]);
//# sourceMappingURL=386.e5f5455c.js.map