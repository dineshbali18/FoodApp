(this["webpackJsonprestaurant-app"]=this["webpackJsonprestaurant-app"]||[]).push([[0],{120:function(e,t,c){},121:function(e,t,c){},122:function(e,t,c){},123:function(e,t,c){},124:function(e,t,c){},125:function(e,t,c){},126:function(e,t,c){"use strict";c.r(t);var s=c(0),a=c.n(s),n=c(12),i=c.n(n),r=(c(91),c(8)),o=c.n(r),l=c(15),j=c(5),d=c(81),b=(c(93),c(94),c(21)),u=c(11),h=c.n(u),m=c(71),O=c.n(m),x=c(1),p=function(){return Object(x.jsx)("div",{children:Object(x.jsx)(O.a,{fontSize:"large",color:"primary"})})},f=c(159);var v=function(e){var t=e.id,c=e.name,n=e.price,i=e.image,r=a.a.useState({}),o=Object(j.a)(r,2),l=(o[0],o[1],a.a.useState(!1)),d=Object(j.a)(l,2),u=d[0],m=d[1],O=Object(s.useContext)(ee),v=(O.carts,O.setCarts,a.a.useState(sessionStorage.getItem("user"))),g=Object(j.a)(v,2),N=g[0];return g[1],Object(x.jsxs)("div",{className:"each-product",children:[Object(x.jsx)(b.b,{to:"/view/".concat(t),children:Object(x.jsx)("img",{className:"img",src:i,alt:"",width:"280px",height:"250px"})}),Object(x.jsxs)("div",{className:"details",children:[Object(x.jsxs)("div",{children:[Object(x.jsx)(f.a,{variant:"h4",children:c}),Object(x.jsxs)(f.a,{variant:"h5",children:["\u20b9",n]})]}),u?Object(x.jsx)(p,{}):Object(x.jsx)("div",{}),Object(x.jsx)("div",{children:Object(x.jsx)("button",{className:"myButton",onClick:function(e){e.preventDefault(),h.a.post("http://localhost:5000/insert",{name:c,price:n,user:N}),m(!0),setTimeout((function(){m(!1)}),800)},children:"Add"})})]})]})},g=(c(120),function(e){e.products;var t=e.setProducts,c=Object(s.useState)([]),a=Object(j.a)(c,2),n=a[0],i=a[1],r=Object(s.useState)(""),d=Object(j.a)(r,2),u=d[0],m=d[1],O=Object(s.useState)(""),p=Object(j.a)(O,2),f=p[0],v=p[1],g=function(){var e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,sessionStorage.getItem("user");case 2:t=e.sent,v(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(s.useEffect)((function(){g()}),[localStorage.getItem("user")]);var N=function(){var e=Object(l.a)(o.a.mark((function e(){var t,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("http://localhost:5000/data");case 2:t=e.sent,c=t.data,i(c);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(s.useEffect)((function(){N()}),[]);var w=function(e){if("All"!==e){var c=n.filter((function(t){return t.category===e}));t(c)}else t(n)};return Object(x.jsxs)("div",{className:"search",children:[Object(x.jsx)("div",{className:"all",children:Object(x.jsx)(b.b,{to:"/HomePage",children:Object(x.jsx)("button",{className:"btn-search",onClick:function(){return w("All")},children:"All"})})}),Object(x.jsx)("div",{className:"breakfast",children:Object(x.jsx)(b.b,{to:"/HomePage",children:Object(x.jsx)("button",{className:"btn-search",onClick:function(){return w("breakfast")},children:"Breakfast"})})}),Object(x.jsx)("div",{className:"lunch",children:Object(x.jsx)(b.b,{to:"/HomePage",children:Object(x.jsx)("button",{className:"btn-search",onClick:function(){return w("Lunch")},children:"Lunch"})})}),Object(x.jsx)("div",{className:"dinner",children:Object(x.jsx)(b.b,{to:"/HomePage",children:Object(x.jsx)("button",{className:"btn-search",onClick:function(){return w("Dinner")},children:"Dinner"})})}),Object(x.jsx)("form",{action:"",children:Object(x.jsxs)("div",{children:[Object(x.jsx)("input",{className:"searchInput",placeholder:"HI...".concat(null==f?"\ud83c\udf54\ud83c\udf5f\ud83c\udf2d\ud83e\udd63\ud83c\udf70":f),type:"text",value:u,onChange:function(e){m(e.target.value)}}),Object(x.jsx)("button",{className:"searchButton",onClick:function(e){e.preventDefault(),function(e){var c=n.filter((function(t){return""==e||t.name.toLowerCase().includes(e.toLowerCase())?t:void 0}));t(c)}(u)},children:Object(x.jsx)("i",{class:"fas fa-search fa-1x"})})]})})]})}),N=(c(121),function(){var e=Object(s.useState)(""),t=Object(j.a)(e,2),c=t[0],a=t[1],n=Object(s.useState)(""),i=Object(j.a)(n,2),r=i[0],o=i[1];return Object(x.jsx)("div",{className:"feedback",children:Object(x.jsx)("div",{className:"feed_box",children:Object(x.jsxs)("form",{children:[Object(x.jsx)("div",{className:"cross mb-10",children:Object(x.jsx)("button",{onClick:function(){return window.location.reload},children:"X"})}),Object(x.jsx)("div",{className:"feed_btn mb",children:Object(x.jsx)("h3",{children:"Your opinion matters!"})}),Object(x.jsx)("div",{children:Object(x.jsx)("input",{className:"login_input_",type:"text",placeholder:"name",value:c,onChange:function(e){a(e.target.value)}})}),Object(x.jsx)("div",{children:Object(x.jsx)("input",{className:"login_input_",type:"text",placeholder:"feedback",value:r,onChange:function(e){o(e.target.value)}})}),Object(x.jsx)("div",{className:"feed_btn",children:Object(x.jsx)("button",{type:"submit",onClick:function(e){e.preventDefault(),h.a.post("http://localhost:5000/feedback",{customer_name:c,feedback:r}),a(""),o("")},className:"myButton",children:"submit"})})]})})})}),w=c(161),y=function(e){var t=e.total,c=Object(s.useRef)();return Object(s.useEffect)((function(){window.paypal.Buttons({createOrder:function(e,c,s){return c.order.create({intent:"CAPTURE",purchase_units:[{description:"lunch-box food",amount:{currency_code:"INR",value:t}}]})},onApprove:function(){var e=Object(l.a)(o.a.mark((function e(t,c){var s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.order.capture();case 2:s=e.sent,console.log(s);case 4:case"end":return e.stop()}}),e)})));return function(t,c){return e.apply(this,arguments)}}(),onError:function(e){console.log(e)}}).render(c.current)}),[]),Object(x.jsx)("div",{children:Object(x.jsx)("div",{ref:c})})},k=function(e){var t=e.total,c=a.a.useState(!1),s=Object(j.a)(c,2),n=s[0],i=s[1];return Object(x.jsx)("div",{children:n?Object(x.jsx)(y,{total:t}):Object(x.jsx)(w.a,{variant:"contained",color:"primary",onClick:function(){i(!0)},children:"CheckOut"})})},C=c(76),S=c.n(C);var _=function(){var e=Object(s.useState)([]),t=Object(j.a)(e,2),c=t[0],a=t[1],n=Object(s.useState)(!1),i=Object(j.a)(n,2),r=i[0],d=i[1],b=Object(s.useState)(!1),u=Object(j.a)(b,2),m=u[0],O=u[1],p=Object(s.useState)(0),v=Object(j.a)(p,2),g=v[0],y=v[1],C=Object(s.useState)(sessionStorage.getItem("user")),_=Object(j.a)(C,2),A=_[0],I=(_[1],Object(s.useState)([])),P=Object(j.a)(I,2),B=(P[0],P[1],function(){var e=Object(l.a)(o.a.mark((function e(){var t,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,d(!0),e.next=4,h.a.post("http://localhost:5000/userCart",{user:A});case 4:t=e.sent,c=t.data,d(!1),a(c),console.log(c),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),O(!0),d(!1);case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}());Object(s.useEffect)((function(){B()}),[]);var E=Object(s.useState)(!1),T=Object(j.a)(E,2),F=T[0],L=T[1];return Object(s.useEffect)((function(){!function(){for(var e=0,t=0;t<c.length;t++)e+=parseInt(c[t].price);y(e)}()}),[c]),m?Object(x.jsx)("div",{className:"error",children:Object(x.jsx)("img",{src:"https://media3.giphy.com/media/DYJJkeOnkk0Le0mf9a/200w.webp?cid=ecf05e47ant61bmrzhbkybu3oejxkuh3j52mmdy8hv6hbdc1&rid=200w.webp",alt:""})}):r?Object(x.jsx)("div",{className:"error",children:Object(x.jsx)("img",{src:"https://media3.giphy.com/media/FbbRaTLzKXzA3K1q8U/200w.webp?cid=ecf05e47w6dyq98mklrxvog86jh5lr2d0t9x9m2d8hhkogfs&rid=200w.webp",alt:"",width:"150rem",height:"150rem"})}):0==c.length?Object(x.jsxs)("div",{className:"error",children:[Object(x.jsx)("img",{src:"https://media3.giphy.com/media/PFrfp4s3Pnf0xBhZJT/200.webp?cid=ecf05e474j62vjxx4b7frf6hwsp7r6z0xbi5kmvbtqcih3qi&rid=200.webp",alt:"",width:"150rem",height:"150rem"}),Object(x.jsx)("h3",{children:"  Cart is Empty"})]}):Object(x.jsxs)("div",{children:[c.map((function(e){var t=e.food,s=e.price,n=e.id;return Object(x.jsx)("div",{className:"cartItem",children:Object(x.jsxs)("div",{className:"cart_data",children:[Object(x.jsx)("div",{className:"cartItem__name",children:Object(x.jsx)(f.a,{variant:"h3",children:t})}),Object(x.jsx)("div",{children:Object(x.jsxs)("p",{children:["\u20b9",s]})}),Object(x.jsx)("div",{className:"remove-btn",children:Object(x.jsx)(S.a,{style:{cursor:"pointer"},color:"primary",fontSize:"large",onClick:function(){return function(e){h.a.delete("http://localhost:5000/delete/".concat(e)).then((function(t){a(c.filter((function(t){return t.id!==e})))}))}(n)}})})]})})})),Object(x.jsxs)("center",{children:[Object(x.jsxs)(f.a,{color:"primary",style:{marginBottom:"2rem"},variant:"h3",children:["Total Price : \u20b9",g]}),g>0?Object(x.jsx)(k,{total:g}):Object(x.jsx)("div",{})]}),F?Object(x.jsx)(N,{}):Object(x.jsx)(w.a,{style:{position:"absolute",top:"15rem",right:10,cursor:"pointer"},onClick:function(){L(!0)},children:Object(x.jsx)("i",{class:"fas fa-comments fa-3x"})})]})},A=c(14),I=c(80),P=(c(122),c(160));var B=function(e){var t=e.match,c=a.a.useState([]),n=Object(j.a)(c,2),i=n[0],r=n[1],d=a.a.useState(""),b=Object(j.a)(d,2),u=b[0],m=b[1],O=a.a.useState([]),p=Object(j.a)(O,2),v=p[0],g=p[1];console.log(t.params.id);var N=function(){var e=Object(l.a)(o.a.mark((function e(){var t,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("http://localhost:5000/data");case 2:t=e.sent,c=t.data,r(c);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(s.useEffect)((function(){N()}),[]);var y=i.find((function(e){return e.id===t.params.id})),k=function(){var e=Object(l.a)(o.a.mark((function e(t){var c,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,h.a.post("http://localhost:5000/foodReview",{food:y.name});case 3:c=e.sent,s=c.data,g(s),console.log(s);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return y?Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("div",{className:"intro",children:[Object(x.jsx)("div",{className:"img-col",children:Object(x.jsx)("img",{className:"view-img",src:y.image,alt:""})}),Object(x.jsxs)("div",{className:"view-content",children:[Object(x.jsx)("center",{className:"center",children:Object(x.jsxs)("div",{className:"price",children:[Object(x.jsx)(f.a,{variant:"h1",children:y.name}),Object(x.jsxs)("h3",{children:["\u20b9",y.price]})]})}),Object(x.jsx)("div",{children:Object(x.jsx)(f.a,{variant:"h4",children:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta blanditiis rerum cupiditate consequuntur excepturi sunt, ratione labore non necessitatibus consectetur, tempore nam, ullam repellendus voluptas consequatur reprehenderit. Aliquam, sint est tenetur voluptate ullam dolor nesciunt distinctio nam."})}),Object(x.jsx)("div",{className:"view-btn",children:Object(x.jsx)(w.a,{variant:"outlined",color:"primary",onClick:function(e){e.preventDefault(),h.a.post("http://localhost:5000/insert",{name:y.name,price:y.price})},children:"Add to cart"})})]})]}),Object(x.jsx)("div",{className:"reviewPost",children:Object(x.jsxs)("form",{className:"review_btn",action:"",children:[Object(x.jsx)(P.a,{id:"standard-basic",label:"Add a public review",value:u,className:"review_input",type:"text",onChange:function(e){m(e.target.value)}}),Object(x.jsx)(w.a,{style:{marginLeft:"1rem",marginTop:"1rem"},color:"primary",variant:"outlined",onClick:function(e){e.preventDefault(),h.a.post("http://localhost:5000/reviews",{user:sessionStorage.getItem("user"),review:u,food:y.name}),g([{users:sessionStorage.getItem("user"),review:u,food:y.name}].concat(Object(I.a)(v))),m("")},children:"Post"})]})}),Object(x.jsx)("div",{className:"reviewPost",children:Object(x.jsx)("form",{action:"",children:Object(x.jsx)(w.a,{variant:"outlined",color:"primary",onClick:k,children:"Check reviews"})})}),Object(x.jsx)("div",{className:"Posts",children:Object(x.jsx)("div",{className:"post_data",children:v.map((function(e){var t=e.users,c=e.review;return Object(x.jsxs)("div",{className:"comments",children:[Object(x.jsx)("p",{children:t}),Object(x.jsx)("h5",{children:c})]})}))})})]}):Object(x.jsx)("div",{children:"Page Not Found ;-;"})},E=(c(123),c.p+"static/media/chef.7a160b00.jpeg"),T=c.p+"static/media/aboutus.e06e970f.jpeg",F=c.p+"static/media/start.ecd8164e.jpeg",L=c.p+"static/media/main.e0d01f9a.jpeg",D=c.p+"static/media/meal.daaf8f94.jpeg",H=function(){return Object(x.jsxs)("div",{className:"body",children:[Object(x.jsxs)("div",{className:"d1",children:[Object(x.jsx)("div",{children:Object(x.jsx)("img",{className:"img1",src:T,alt:"rest",width:"300",height:"300"})}),Object(x.jsxs)("div",{children:[Object(x.jsx)("h1",{className:"a",children:Object(x.jsx)("b",{children:"ABOUT US"})}),Object(x.jsx)("p",{className:"p",children:"Our aim is to provide a fun and safe environment where our customers can enjoy good food made with quality ingredients at affordable prices."})]})]}),Object(x.jsxs)("div",{className:"d2",children:[Object(x.jsxs)("div",{children:[Object(x.jsx)("h1",{className:"b",children:"Expect the Best."}),Object(x.jsx)("p",{className:"p",children:"Scrumtious to the core,snacks and starters are served before the maincourse,so that people get to taste a variety of flavours and textures while engaging in colourful conversations. "})]}),Object(x.jsx)("div",{children:Object(x.jsx)("img",{className:"img2",src:F,alt:"start",width:"300",height:"300"})})]}),Object(x.jsxs)("div",{className:"d3",children:[Object(x.jsx)("div",{children:Object(x.jsx)("img",{className:"img3",src:L,alt:"maincourse",width:"300",height:"300"})}),Object(x.jsxs)("div",{children:[Object(x.jsx)("h1",{className:"c",children:"We serve the deliciousness."}),Object(x.jsx)("p",{className:"p",children:" There's nothing like noodle time! Come rain, come shine, digging into a bowl of noodles is the epitome of comfort food. The strings of happiness come in many forms and can be tossed in a number of ways with myriad ingredients to make spectacular treats. "})]})]}),Object(x.jsxs)("div",{className:"d4",children:[Object(x.jsxs)("div",{children:[Object(x.jsx)("h1",{className:"d",children:"Made fresh for YOU!"}),Object(x.jsx)("p",{className:"p",children:" \u201cStressed spelled backwards is desserts.\u201d Coincidence? We think not! A little bit of sugar goes a long way . No meal is complete without something meetha. We take immense pride in our wide array of delicious treats, ranging from Apple pie to Creamy Caramel Pancakes."})]}),Object(x.jsx)("div",{children:Object(x.jsx)("img",{className:"img4",src:D,alt:"dessert",width:"300",height:"300"})})]}),Object(x.jsxs)("div",{className:"d5",children:[Object(x.jsx)("div",{children:Object(x.jsx)("img",{className:"img5",src:E,alt:"chef",width:"300",height:"300"})}),Object(x.jsxs)("div",{children:[Object(x.jsx)("h1",{className:"e",children:"A Taste of Home."}),Object(x.jsx)("p",{className:"p",children:"The imagination of our chefs will never bore you with always different and delicious dishes. The attention in choice of genuine and local ingredients will relax you The accurate service, the elegance of our dining halls will make you feel at ease. The availability of our friendly staff will pamper you. And you'll come back for more. We promise. :)"})]})]})]})},U=c(77),q=c.n(U),R=(c.p,function(){var e=Object(A.e)();return Object(x.jsx)("div",{className:"back",style:{display:"flex",alignItems:"center",justifyContent:"center",position:"absolute",width:"100%",height:"100%",top:"0",zIndex:"1000",backgroundColor:"white",backgroundImage:"./images/background.jpeg"},children:Object(x.jsx)(q.a,{storyStyles:{height:"100%",width:"100%"},stories:["https://i.pinimg.com/564x/a1/9e/08/a19e085860835d9b79fa9762d2124324.jpg","https://i.pinimg.com/564x/cd/71/75/cd717535d3187a7de2c26195973e0ea7.jpg","https://i.pinimg.com/564x/01/53/87/015387cd4627657891e3f7239406385e.jpg","https://i.pinimg.com/564x/02/b9/e5/02b9e53ccb2ab2c81a1c6010af6796cf.jpg","https://i.pinimg.com/564x/a5/f0/4f/a5f04fa3b10ec68ed8a8c82072e7042b.jpg"],defaultInterval:1500,width:480,height:700,onAllStoriesEnd:function(){e.goBack()}})})}),Y=(c(32),c(78)),J=(Object(Y.a)("pk_test_51IZtR0SCs916rYoGKAwVYldgN28YNSddeCpcxZLDNO4MLvsN5aAQWKGaEAxmWexyCmwN6YSAV4hBAbCBpUALOfcH005M78fMIa"),c(124),c.p+"static/media/pica.84da2eb2.png"),z=c.p+"static/media/picb.a4970953.png",M=c.p+"static/media/picc.8bbc9d49.png",W=c.p+"static/media/thumb1.3104f39a.png",K=c.p+"static/media/thumb2.238c0a6a.png",G=c.p+"static/media/thumb3.c2473e6d.png";var V=function(e,t){var c=Object(s.useState)((function(){try{var c=window.sessionStorage.getItem(e);return c?JSON.parse(c):t}catch(s){return console.log(s),t}})),a=Object(j.a)(c,2),n=a[0],i=a[1];return[n,function(t){try{var c=t instanceof Function?t(n):t;i(c),window.sessionStorage.setItem(e,JSON.stringify(c))}catch(s){console.log(s)}}]},Z=(c(69),function(){var e=Object(A.e)(),t=Object(s.useState)(""),c=Object(j.a)(t,2),a=c[0],n=c[1],i=Object(s.useState)(""),r=Object(j.a)(i,2),d=r[0],b=r[1],u=Object(s.useState)(""),m=Object(j.a)(u,2),O=m[0],p=m[1],f=V("user",""),v=Object(j.a)(f,2),g=(v[0],v[1]),N=function(){var t=Object(l.a)(o.a.mark((function t(c){var s,i;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c.preventDefault(),t.next=3,h.a.post("http://localhost:5000/realLogin",{email:a,password:d});case 3:s=t.sent,i=s.data,console.log(i),i.status?(console.log("lovelyyyyyy"),g("".concat(i.name)),p(""),e.push("/HomePage"),window.location.reload()):p("".concat(i.notify)),n(""),b("");case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(x.jsx)("div",{children:Object(x.jsxs)("div",{className:"login_screen",children:[Object(x.jsxs)("form",{className:"input_",children:[Object(x.jsxs)("div",{className:"input__name",children:[Object(x.jsx)("i",{className:"fas fa-envelope-square fa-2x "}),Object(x.jsx)("input",{type:"text",id:"name",name:"email",placeholder:"Email ",value:a,onChange:function(e){n(e.target.value)}})]}),Object(x.jsxs)("div",{className:"input__name",children:[Object(x.jsx)("i",{className:"fas fa-lock fa-2x"}),Object(x.jsx)("input",{type:"password",id:"name",name:"phone",placeholder:"Password",value:d,onChange:function(e){b(e.target.value)}})]}),Object(x.jsx)("div",{className:"input__btn",children:Object(x.jsx)("button",{type:"submit",onClick:N,id:"btn",children:"Login"})})]}),O.length>0?Object(x.jsx)("div",{className:"errorMsg",children:Object(x.jsx)("h3",{children:O})}):Object(x.jsx)("div",{})]})})}),X=function(){var e=Object(s.useState)(""),t=Object(j.a)(e,2),c=t[0],a=t[1],n=Object(s.useState)(""),i=Object(j.a)(n,2),r=i[0],d=i[1],b=Object(s.useState)(""),u=Object(j.a)(b,2),m=u[0],O=u[1],p=Object(s.useState)(""),f=Object(j.a)(p,2),v=f[0],g=f[1],N=function(){var e=Object(l.a)(o.a.mark((function e(t){var s,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,h.a.post("http://localhost:5000/userSignUp",{userName:c,password:r,email:m});case 3:s=e.sent,n=s.data,g("".concat(n.notify)),console.log(n),a(""),d(""),O("");case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(x.jsx)("div",{children:Object(x.jsxs)("div",{className:"login_screen",children:[Object(x.jsxs)("form",{className:"input_",children:[Object(x.jsxs)("div",{className:"input__name",children:[Object(x.jsx)("i",{className:"far fa-user fa-2x"}),Object(x.jsx)("input",{type:"text",id:"name",name:"name",placeholder:"User Name",value:c,onChange:function(e){a(e.target.value)}})]}),Object(x.jsxs)("div",{className:"input__name",children:[Object(x.jsx)("i",{className:"fas fa-envelope-square fa-2x"}),Object(x.jsx)("input",{type:"text",id:"name",name:"email",placeholder:"Email ",value:m,onChange:function(e){O(e.target.value)}})]}),Object(x.jsxs)("div",{className:"input__name",children:[Object(x.jsx)("i",{className:"fas fa-lock fa-2x"}),Object(x.jsx)("input",{type:"password",id:"name",name:"phone",placeholder:"Password",value:r,onChange:function(e){d(e.target.value)}})]}),Object(x.jsx)("div",{className:"input__btn",children:Object(x.jsx)("button",{type:"submit",onClick:N,id:"btn",children:"Sign Up"})})]}),v.length>0?Object(x.jsx)("div",{className:"errorMsg",children:Object(x.jsx)("h3",{children:v})}):Object(x.jsx)("div",{})]})})},Q=function(){var e=Object(s.useRef)(0),t=Object(s.useRef)(0),c=Object(s.useRef)(0),a=Object(s.useState)(J),n=Object(j.a)(a,2),i=n[0],r=n[1],o=Object(s.useState)(!1),l=Object(j.a)(o,2),d=l[0],b=l[1],u=Object(s.useState)(!1),h=Object(j.a)(u,2),m=h[0],O=h[1],p=Object(s.useState)(!0),f=Object(j.a)(p,2);f[0],f[1];return Object(x.jsx)("div",{className:"homepage",children:Object(x.jsxs)("section",{children:[Object(x.jsx)("div",{ref:e,className:"circle"}),Object(x.jsx)("header",{children:Object(x.jsxs)("ul",{children:[Object(x.jsx)("a",{href:"#",onClick:function(){b(!1),O(!1)},children:Object(x.jsx)("li",{children:"Home"})}),Object(x.jsx)("a",{href:"/Team",children:Object(x.jsx)("li",{children:"Developers"})}),Object(x.jsx)("a",{href:"#",onClick:function(){return b(!0)},children:Object(x.jsx)("li",{children:"Login"})}),Object(x.jsx)("a",{href:"#",onClick:function(){b(!1),O(!0)},children:Object(x.jsx)("li",{children:"Sign Up"})})]})}),Object(x.jsxs)("div",{className:"content",children:[Object(x.jsx)("div",{className:"textBox",children:d?Object(x.jsx)(Z,{}):m?Object(x.jsx)(X,{}):Object(x.jsxs)("div",{children:[Object(x.jsxs)("h1",{children:["You don't need a ",Object(x.jsx)("em",{children:"silver fork to eat"})," ",Object(x.jsx)("span",{ref:t,children:"good food."})," "]}),Object(x.jsx)("a",{ref:c,href:"#",children:"Order Now!"})]})}),Object(x.jsx)("div",{className:"imgBox",children:Object(x.jsx)("img",{src:i,alt:"pic1",className:"pic1"})})]}),Object(x.jsxs)("ul",{className:"thumb",children:[Object(x.jsx)("li",{children:Object(x.jsx)("img",{src:W,onClick:function(){r(J),e.current.style.backgroundColor="#AED6F1",0==d&&0==m&&(t.current.style.color="#AED6F1",c.current.style.backgroundColor="#AED6F1")},alt:""})}),Object(x.jsx)("li",{children:Object(x.jsx)("img",{src:K,onClick:function(){r(z),e.current.style.backgroundColor="#F1C40F",0==d&&0==m&&(t.current.style.color="#F1C40F",c.current.style.backgroundColor="#F1C40F")},alt:""})}),Object(x.jsx)("li",{children:Object(x.jsx)("img",{src:G,onClick:function(){r(M),e.current.style.backgroundColor="#E74C3C",0==d&&0==m&&(t.current.style.color="#E74C3C",c.current.style.backgroundColor="#E74C3C")},alt:""})})]}),Object(x.jsxs)("ul",{className:"con",children:[Object(x.jsx)("li",{children:Object(x.jsx)("a",{href:"#",children:Object(x.jsx)("img",{src:"https://cdn2.iconfinder.com/data/icons/2018-social-media-app-logos/1000/2018_social_media_popular_app_logo_facebook-512.png",alt:""})})}),Object(x.jsx)("li",{children:Object(x.jsx)("a",{href:"#",children:Object(x.jsx)("img",{src:"https://cdn2.iconfinder.com/data/icons/2018-social-media-app-logos/1000/2018_social_media_popular_app_logo_instagram-512.png",alt:""})})}),Object(x.jsx)("li",{children:Object(x.jsx)("a",{href:"#",children:Object(x.jsx)("img",{src:"https://cdn2.iconfinder.com/data/icons/2018-social-media-app-logos/1000/2018_social_media_popular_app_logo_twitter-512.png",alt:""})})})]})]})})},$=(c(70),c(125),function(){return Object(x.jsxs)("div",{className:"team_page",children:[Object(x.jsx)("div",{className:"circle1"}),Object(x.jsx)("header",{children:Object(x.jsx)("ul",{})}),Object(x.jsxs)("div",{className:"containers",children:[Object(x.jsxs)("div",{className:"card",children:[Object(x.jsx)("div",{className:"imgBoxes",children:Object(x.jsx)("img",{src:"https://i.pinimg.com/564x/df/cf/1a/dfcf1afbae0ae79e5a287dff2a8b7385.jpg",alt:""})}),Object(x.jsxs)("div",{className:"contents",children:[Object(x.jsx)("h1",{children:"GAYATHRI "}),Object(x.jsxs)("p",{children:["Team Lead ",Object(x.jsx)("br",{})," Frontend developer ",Object(x.jsx)("br",{})," ",Object(x.jsx)("br",{})," likes:coffee,bishes ",Object(x.jsx)("br",{}),"dislikes: nerds "]})]})]}),Object(x.jsxs)("div",{className:"card",children:[Object(x.jsx)("div",{className:"imgBoxes",children:Object(x.jsx)("img",{src:"https://i.pinimg.com/564x/5d/58/bb/5d58bbc83229aad332f3cd39e857ab33.jpg",alt:""})}),Object(x.jsxs)("div",{className:"contents",children:[Object(x.jsx)("h1",{children:"YASWANTH "}),Object(x.jsxs)("p",{children:[" Fullstack developer ",Object(x.jsx)("br",{}),Object(x.jsx)("br",{})," likes: Adriana Lima ",Object(x.jsx)("br",{}),"dislikes:social ",Object(x.jsx)("br",{}),"interaction "]})]})]}),Object(x.jsxs)("div",{className:"card",children:[Object(x.jsx)("div",{className:"imgBoxes",children:Object(x.jsx)("img",{src:"https://i.pinimg.com/236x/b0/b9/00/b0b900e3742560c2f740c3b5b871e5a7.jpg",alt:""})}),Object(x.jsxs)("div",{className:"contents",children:[Object(x.jsx)("h1",{children:"JANVI"}),Object(x.jsxs)("p",{children:["Frontend developer ",Object(x.jsx)("br",{})," ",Object(x.jsx)("br",{})," likes: Jungkook,BTS ",Object(x.jsx)("br",{}),"dislikes: no-jams ",Object(x.jsx)("br",{})," people"]})]})]}),Object(x.jsxs)("div",{className:"card",children:[Object(x.jsx)("div",{className:"imgBoxes",children:Object(x.jsx)("img",{src:"https://i.pinimg.com/564x/45/37/bd/4537bd9b68d10c186dd198721781de70.jpg",alt:""})}),Object(x.jsxs)("div",{className:"contents",children:[Object(x.jsx)("h1",{children:"DINESH"}),Object(x.jsxs)("p",{children:["Backend developer ",Object(x.jsx)("br",{}),Object(x.jsx)("br",{})," likes:stupid ",Object(x.jsx)("br",{})," people ",Object(x.jsx)("br",{}),"dislikes: marie ",Object(x.jsx)("br",{})," biscuits"]})]})]})]})]})});c(27),c(79);var ee=a.a.createContext(),te=function(e){var t=e.products;e.setProducts;return Object(x.jsx)("div",{className:"again",children:t.map((function(e,t){return Object(x.jsx)(v,Object(d.a)({id:t},e))}))})};var ce=function(){var e=a.a.useState([]),t=Object(j.a)(e,2),c=t[0],n=t[1],i=a.a.useState([]),r=Object(j.a)(i,2),d=r[0],u=r[1],m=function(){var e=Object(l.a)(o.a.mark((function e(){var t,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("http://localhost:5000/data");case 2:t=e.sent,c=t.data,n(c);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){m()}),[]),Object(x.jsx)(ee.Provider,{value:{carts:d,setCarts:u},children:Object(x.jsx)(b.a,{children:Object(x.jsxs)("div",{className:"screen",children:[Object(x.jsxs)("nav",{className:"row",children:[Object(x.jsx)("div",{className:"screen__logo",children:Object(x.jsx)("a",{href:"/homePage",children:"Lunch Box"})}),Object(x.jsxs)("div",{children:[Object(x.jsx)("a",{className:"added",href:"/cart",children:"Cart"}),Object(x.jsx)("a",{href:"/about",children:"About Us"}),Object(x.jsx)("a",{href:"/Specials",children:"Specials"}),Object(x.jsx)("a",{href:"/",children:"Logout"})]}),Object(x.jsx)("tailwin1",{})]}),Object(x.jsxs)("main",{children:[Object(x.jsx)(g,{products:c,setProducts:n}),Object(x.jsx)(A.a,{path:"/HomePage",render:function(){return Object(x.jsx)(te,{products:c})},exact:!0}),Object(x.jsx)(A.a,{path:"/view/:id",component:B,exact:!0}),Object(x.jsx)(A.a,{path:"/cart",render:function(){return Object(x.jsx)(_,{})},exact:!0}),Object(x.jsx)(A.a,{path:"/about",render:function(){return Object(x.jsx)(H,{})},exact:!0}),Object(x.jsx)(A.a,{path:"/Specials",render:function(){return Object(x.jsx)(R,{})},exact:!0}),Object(x.jsx)(A.a,{path:"/",component:Q,exact:!0}),Object(x.jsx)(A.a,{path:"/Team",component:$,exact:!0})]}),Object(x.jsx)("footer",{className:"row center"})]})})})},se=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,163)).then((function(t){var c=t.getCLS,s=t.getFID,a=t.getFCP,n=t.getLCP,i=t.getTTFB;c(e),s(e),a(e),n(e),i(e)}))};i.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(ce,{})}),document.getElementById("root")),se()},69:function(e,t,c){},70:function(e,t,c){},91:function(e,t,c){},93:function(e,t,c){},94:function(e,t,c){}},[[126,1,2]]]);
//# sourceMappingURL=main.0fab4146.chunk.js.map