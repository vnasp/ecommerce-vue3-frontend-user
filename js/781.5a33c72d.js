"use strict";(self["webpackChunkecommerce_vue2_frontend_user"]=self["webpackChunkecommerce_vue2_frontend_user"]||[]).push([[781],{35781:(t,e,r)=>{r.r(e),r.d(e,{default:()=>q});var n=r(56768),o={class:"px-14 my-5"},u={class:"row row-cols-1 row-cols-md-3 row-cols-lg-4"};function c(t,e,r,c,s,a){var i=(0,n.g2)("CategoriesSection"),d=(0,n.g2)("CardProduct");return(0,n.uX)(),(0,n.CE)("main",o,[(0,n.bF)(i,{onFilterCategory:a.filterProducts},null,8,["onFilterCategory"]),(0,n.Lk)("div",u,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(a.filteredProducts,(function(t){return(0,n.uX)(),(0,n.CE)("div",{class:"col mb-2",key:t.id},[(0,n.bF)(d,{product:t},null,8,["product"])])})),128))])])}var s=r(41034),a=(r(2008),r(26099),r(60782)),i=(r(52675),r(89463),r(62010),r(24232)),d=function(t){return(0,n.Qi)("data-v-5f88cfba"),t=t(),(0,n.jt)(),t},l={class:"flex flex-row bg-white w-full rounded-2xl my-10 p-12 h-full relative"},p={class:"w-2/6"},f={class:"inline-flex mb-2 gap-2"},m={class:"bg-cyan-500 px-4 py-1 text-sky-white text-xs text-white rounded-md"},g={key:0,class:"bg-red-100 px-4 py-1 rounded-md text-red-500 text-xs font-medium uppercase"},y=["src","alt"],x={class:"flex flex-col items-start flex-1"},h={class:"font-thin"},k={class:"text-indigo-900"},b={class:"flex flex-row gap-1 my-3"},v={class:"flex flex-col w-1/6"},C=d((function(){return(0,n.Lk)("p",{class:"font-light"},[(0,n.eW)("Disponibilidad: "),(0,n.Lk)("span",{class:"text-green-600"},"Con stock")],-1)})),w={class:"text-red-500 text-xl font-medium mb-4"},L={class:"my-2 text-center"},P={class:"mx-4"},_=d((function(){return(0,n.Lk)("i",{class:"bi bi-cart me-1"},null,-1)}));function F(t,e,r,o,u,c){var s=(0,n.g2)("font-awesome-icon");return(0,n.uX)(),(0,n.CE)("article",l,[(0,n.Lk)("div",p,[(0,n.Lk)("div",f,[(0,n.Lk)("span",m,(0,i.v_)(Math.round(r.product.discount/r.product.price*-100))+"% ",1),!0===r.product.feature?((0,n.uX)(),(0,n.CE)("span",g,"top")):(0,n.Q3)("",!0)]),(0,n.Lk)("img",{src:r.product.image,class:"h-44 w-44 object-contain",alt:r.product.name},null,8,y)]),(0,n.Lk)("div",x,[(0,n.Lk)("small",h,(0,i.v_)(r.product.size)+" g",1),(0,n.Lk)("h5",k,(0,i.v_)(r.product.name),1),(0,n.Lk)("div",b,[((0,n.uX)(),(0,n.CE)(n.FK,null,(0,n.pI)(5,(function(t){return(0,n.bF)(s,{icon:"fa-regular fa-star",size:"2xs",class:"text-amber-400",key:t})})),64))]),((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(r.product.description,(function(t){return(0,n.uX)(),(0,n.CE)("li",{key:t,class:"text-gray-500 capitalize font-light text-sm mb-1"},(0,i.v_)(t),1)})),128))]),(0,n.Lk)("div",v,[C,(0,n.Lk)("p",w,(0,i.v_)(c.formatPrice(r.product.price)),1),(0,n.Lk)("div",L,[c.count()>0?((0,n.uX)(),(0,n.CE)("button",{key:0,type:"button",class:"bg-gris-custom rounded-full px-2 py-1 text-gray-500",onClick:e[0]||(e[0]=function(){return c.disminuir&&c.disminuir.apply(c,arguments)})},[(0,n.bF)(s,{icon:"fa-solid fa-minus"})])):(0,n.Q3)("",!0),(0,n.Lk)("span",P,(0,i.v_)(c.count(r.product)),1),c.count()>0?((0,n.uX)(),(0,n.CE)("button",{key:1,type:"button",class:"bg-verde-custom rounded-full px-2 py-1 text-white",onClick:e[1]||(e[1]=function(){return c.aumentar&&c.aumentar.apply(c,arguments)})},[(0,n.bF)(s,{icon:"fa-solid fa-plus"})])):(0,n.Q3)("",!0)]),(0,n.Lk)("button",{type:"button",class:"bg-verde-custom hover:bg-indigo-900 px-14 text-sm py-3 rounded-3xl uppercase text-white font-bold",onClick:e[2]||(e[2]=function(){return c.agregar&&c.agregar.apply(c,arguments)})},[_,(0,n.eW)("Agregar")])])])}r(50113);const A={name:"CardProduct",props:{product:{type:Object,required:!0}},data:function(){return{}},computed:(0,s.A)({},(0,a.aH)(["cart"])),methods:(0,s.A)((0,s.A)({},(0,a.i0)(["addToCart","addQuantityToProduct","removeQuantityFromProduct"])),{},{formatPrice:function(t){return new Intl.NumberFormat("es-CL",{style:"currency",currency:"CLP"}).format(t)},agregar:function(){var t={sku:this.product.sku,img:this.product.image_url,name:this.product.name,price:this.product.price,quantity:1};this.addToCart(t)},aumentar:function(){try{this.addQuantityToProduct(this.product)}catch(t){alert(t.message)}},disminuir:function(){try{this.removeQuantityFromProduct(this.product)}catch(t){alert(t.message)}},count:function(){var t=this,e=this.cart.find((function(e){return e.sku==t.product.sku}));if(e)return e.quantity}})};var E=r(71241);const X=(0,E.A)(A,[["render",F],["__scopeId","data-v-5f88cfba"]]),Q=X;var I=r(79005);const T={name:"ProductsView",components:{CardProduct:Q,CategoriesSection:I.A},data:function(){return{selectedCategory:null}},computed:(0,s.A)((0,s.A)({},(0,a.L8)(["products"])),{},{filteredProducts:function(){var t=this;return this.selectedCategory?this.products.filter((function(e){return e.category===t.selectedCategory})):this.products}}),methods:(0,s.A)((0,s.A)({},(0,a.i0)(["setProducts"])),{},{filterProducts:function(t){this.selectedCategory=t}}),created:function(){this.setProducts()}},j=(0,E.A)(T,[["render",c]]),q=j}}]);
//# sourceMappingURL=781.5a33c72d.js.map