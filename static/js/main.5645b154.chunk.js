(this.webpackJsonpblogdesign=this.webpackJsonpblogdesign||[]).push([[0],{20:function(e,c,s){},43:function(e,c,s){"use strict";s.r(c);var t=s(1),l=s.n(t),j=s(14),i=s.n(j),n=(s(20),s(4)),o=s(15),a=s.n(o),r=s.p+"static/media/blog-list-2.6c2ccb5d.png",d=s(3),b=s.n(d),h=s(0),x={height:"520px"},O=function(){var e=Object(t.useState)(),c=Object(n.a)(e,2),s=c[0],l=c[1],j=Object(t.useState)(),i=Object(n.a)(j,2),o=i[0],d=i[1],O=Object(t.useState)(1),A=Object(n.a)(O,2),g=A[0],G=A[1];Object(t.useEffect)((function(){a.a.get("https://jsonplaceholder.typicode.com/posts").then((function(e){console.log(e.data),l(e.data),d(b()(e.data).slice(0).take(10).value())}))}),[]);var p=s?Math.ceil(s.length/10):0;if(1===p)return null;var K=b.a.range(1,p+1);return Object(h.jsxs)("div",{className:"container",children:[o?Object(h.jsx)("div",{class:"row",children:o.map((function(e,c){return Object(h.jsx)("div",{className:"col-md-3",children:Object(h.jsx)("div",{className:"card mb-5 shadow-sm",style:x,children:Object(h.jsxs)("div",{className:"card-body",children:[Object(h.jsx)("img",{src:r}),Object(h.jsx)("div",{className:"card-title",style:{paddingTop:"15px",height:"60px"},children:Object(h.jsxs)("h5",{children:[" ",e.title]})}),Object(h.jsx)("div",{className:"card-text",style:{paddingTop:"10px"},children:e.body}),Object(h.jsx)("div",{style:{marginTop:"6px"},children:Object(h.jsx)("a",{href:"#",className:"btn btn-outline-primary rounded-0",children:"Read More"})})]})})},e.id)}))}):"No data found",Object(h.jsx)("nav",{className:"d-flex justify-content-center",children:Object(h.jsx)("ul",{className:"pagination",children:K.map((function(e){return Object(h.jsx)("li",{className:e===g?"page-item active":"page-item",children:Object(h.jsx)("p",{className:"page-link",onClick:function(){return function(e){G(e);var c=10*(e-1),t=b()(s).slice(c).take(10).value();d(t)}(e)},children:e})})}))})})]})},A=s.p+"static/media/blog-list-1.bfc6e489.png",g=function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("header",{class:"header",children:Object(h.jsx)("div",{class:"main-header",children:Object(h.jsx)("div",{class:"container",children:Object(h.jsxs)("nav",{class:"navbar navbar-expand-lg",children:[Object(h.jsx)("a",{class:"navbar-brand",children:Object(h.jsx)("img",{src:"data:image/png;base64,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"})}),Object(h.jsx)("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#collapsibleNavbar",children:Object(h.jsx)("span",{class:"fa fa-bars"})}),Object(h.jsxs)("div",{class:"collapse navbar-collapse",id:"collapsibleNavbar",children:[Object(h.jsxs)("ul",{class:"navbar-nav",children:[Object(h.jsx)("li",{class:"nav-item",children:Object(h.jsx)("a",{class:"nav-link",children:"Blogging Tools"})}),Object(h.jsx)("li",{class:"nav-item",children:Object(h.jsx)("a",{class:"nav-link",children:"Google"})}),Object(h.jsx)("li",{class:"nav-item",children:Object(h.jsx)("a",{class:"nav-link",children:"Internet Marketing"})}),Object(h.jsx)("li",{class:"nav-item dropdown",children:Object(h.jsx)("a",{class:"nav-link",children:"Our Services"})}),Object(h.jsx)("li",{class:"nav-item",children:Object(h.jsx)("a",{class:"nav-link",children:"Advertise With Us"})})]}),Object(h.jsx)("div",{class:"header-btn",children:Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{children:Object(h.jsx)("a",{class:"btn request-btn",children:"Request a Free quote"})}),Object(h.jsx)("li",{children:Object(h.jsx)("a",{class:"btn",children:"Contact Us"})})]})})]})]})})})}),Object(h.jsx)("section",{class:"newsletter-sec",children:Object(h.jsxs)("div",{class:"container",children:[Object(h.jsxs)("h1",{children:["Smart marketing ",Object(h.jsx)("br",{}),"starts here"]}),Object(h.jsx)("h4",{children:"Join over 150,000 marketing managers who get our best digital marketing insights, strategies and tips delivered straight to their inbox."}),Object(h.jsx)("form",{action:"",method:"",children:Object(h.jsx)("div",{class:"service-form-box",children:Object(h.jsx)("div",{class:"form-group",children:Object(h.jsx)("input",{type:"email",name:"",class:"form-control",placeholder:"ENTER YOUR WORK EMAIL"})})})})]})}),Object(h.jsx)("section",{class:"blog-page-sec",children:Object(h.jsx)("div",{class:"container",children:Object(h.jsx)("div",{class:"blog-page-in",children:Object(h.jsx)("div",{class:"blog-list-top",children:Object(h.jsxs)("div",{class:"row align-items-center",children:[Object(h.jsx)("div",{class:"col-lg-6",children:Object(h.jsx)("div",{class:"blog-list-top-img",children:Object(h.jsx)("a",{href:"single-blog.html",children:Object(h.jsx)("img",{src:A})})})}),Object(h.jsx)("div",{class:"col-lg-6",children:Object(h.jsxs)("div",{class:"blog-list-box",children:[Object(h.jsx)("h3",{children:Object(h.jsx)("a",{href:"single-blog.html",children:"Top Software Development Companies in London \u2013 Compare Quotes"})}),Object(h.jsx)("p",{class:"blog-desc",children:"Kickstart the growth of your business with a professionally designed website and software development services offered by Logicsofts, one of the leading software development"}),Object(h.jsx)("a",{href:"single-blog.html",class:"btn btn-white arrow-btn",children:"Read more"}),Object(h.jsxs)("div",{class:"blog-list-author",children:[Object(h.jsx)("div",{class:"blog-author-img",children:Object(h.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAXpQTFRFAAAAjKG0jKG0jKG0jKG0jKG0jKG0jKG0jKG0jKG0jKG0jKG0jKG0jKG0jKG0jKG0jKG0jKG0jKG0jKG0jKG0jKG0jKG0jKG0jKG0jKG0jKG0jKG0jKG0jKG0jKG0jKG0jKG0jKG0jKG0jKG0jKG0jKG0jKG0jKG0jKG0jKG0jKG0jKG0jKG0jKG0jKG0jKG0jKG0jKG0jKG0jKG0jKG0jKG0jKG0jKG0jKG0jKG0jKG0jKG0jKG0jKG0jKG0jKG0jKG0jKG0jKG0jKG0jKG0jKG0jKG0jKG0jKG0jKG0jKG0jKG0jKG0jKG0jKG0jKG0jKG0jKG0jKG0jKG0jKG0jKG0jKG0jKG0jKG0jKG0jKG0jKG0jKG0jKG0jKG0jKG0jKG0jKG0jKG0jKG0jKG0jKG0jKG0jKG0jKG0jKG0jKG0jKG0jKG0jKG0jKG0jKG0jKG0jKG0jKG0jKG0jKG0jKG0jKG0jKG0jKG0jKG0jKG0jKG0jKG0jKG03nOBUwAAAH50Uk5TABQrO0xdZmdhTz0uGEBqgG5LGh9ZDVNzVUIpHRkbJ1EteFYEJXk5RQpHVwFUcSFjZQUONk08RGhGIFp+NFsoSDN8Uj9Ydm0cSV4Hfy9gZB4qdQJfJEEII1xwTnJ7EQYJFRAmQ2wPFgt9aSwDbz4iMFB3FxMMejhKEjcyOnRrUpv7QgAAAxlJREFUeJx9VWlDGjEQjYiAoH1e4I2ixaKIKNWiom1RsPUWahU8K4qg1tajh9X63zuBzSa7aOfDZvLe22xmJpNlzGxVlmprjc3uqHW66ipIs7b+BRRraGz6j7i5BRXmsDwjdntKfGtbe0dnV12319nTUAJqup5S9/o412fpV7CXVj8HByrVrzjuqTLDgUGODwVN8DCBoZGnvloVJmo0WKHuG9MmkdeNHs/4hP6lN0RGVfUkAYOaPzUd05ISFkmZocmsVL+l6TvNd6pZHNfA9+TX6+HEgRbNrzZmfU6D58kXFUsASRGXuUpejXAAC2WvidAPGvrRLF/UiKVlYKXkrQIJsa81qvr6hiKPL8mYUnx0E+jWsHQKn2hYX5D6TrFSCtik4bOy+Bb86XKqW4V8W3Cky9CQlfGwftQIb3vHtrtH8mbB7QOxA/5MpvUKxBxMWvDwyxCO9CnFmGO9wLBUJGPMYLOQ/jHg5BHP64g1dHKkqpcyKbmWF2hjVmBDRzAQMPRnJJ+TuzkFbGxR1ojkVmayFQSEmwdOWBSQCy7CLA8ldbdQRJadqXI3wka1VZaJn8QQPzvK5XAOw94v0KgEskynrJZnU5rvqyqfg9J0dFrt/CRPKIIRKA1bwKVCfeNd8R24UhdUo124VplL3lE3dAMYosOZ8GphqFkGoOZNAlMq6kaqVIjbsBH/QR1f4LnCjmH5QBg/o/YUdm8M8C9e1FLAxTEDwaZ2MhnPhhFjdGG6+EhX9G+JHin7jdxJ3wX4S1ndpCaIaPtzXeEPY4fTe/GzW84k7sUbfj3ha+U7bWtllS4cdNBbKF8Op3yMPuSJ7NE6m+eAQOfY5HW5OfkG95Po5jGUkeWeAyoR3op9DdDkr+jl2fKnefTHAkvFDcVMqDfRXSlpHjpgewr6qGbJphDT7IL/SPZZuwJeF1R50K5QXYw/6/pVdd5YhLTy0/PxG3yejUokGmFmu5SsjeXumUfOrekKNf1V1xQ9dYawhvMnxNxmHnVNUTihevNfT7Fci0/NadHhunhezG3L++AJP2azJ6NDTktFhP8AJDx8XnhYZh8AAAAASUVORK5CYII="})}),Object(h.jsx)("div",{class:"blog-author-name",children:Object(h.jsxs)("h4",{children:[Object(h.jsx)("span",{children:"Author : "}),Object(h.jsx)("a",{href:"#",children:"Sam Singh"})]})})]})]})})]})})})})})]})},G=function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("section",{class:"service-contact-sec",children:Object(h.jsx)("div",{class:"container",children:Object(h.jsxs)("div",{class:"row",children:[Object(h.jsx)("div",{class:"col-lg-6",children:Object(h.jsxs)("div",{class:"service-contact-left",children:[Object(h.jsxs)("h3",{children:[Object(h.jsx)("b",{children:"Get in touch/ also schedule a call/meet"})," "]}),Object(h.jsxs)("h4",{children:[Object(h.jsx)("span",{children:"Schedule a call or meeting"})," with our digital marketing expert for ",Object(h.jsx)("span",{children:"FREE consultation"}),"."]}),Object(h.jsx)("a",{href:"#",className:"btn btn-primary",style:{backgroundColor:"#be2664",borderColor:"#be2664",color:"#fff",fontSize:"18px",fontFamily:"SegoeUI-Semibold",transition:"all 0.3s ease 0s",borderRadius:"40px",padding:"13px 55px 13px 40px"},children:"Schedule Consultation"})]})}),Object(h.jsx)("div",{class:"col-lg-6",children:Object(h.jsxs)("div",{class:"service-contact-form",children:[Object(h.jsxs)("h4",{children:[Object(h.jsx)("span",{children:"If you want us to prepare a digital marketing scope for your business,"})," please fill in the necessary information required for us to proceed."]}),Object(h.jsxs)("form",{action:"",method:"",children:[Object(h.jsxs)("div",{class:"service-form-box",children:[Object(h.jsxs)("div",{class:"form-group",style:{padding:"10px"},children:[Object(h.jsx)("label",{children:"Full Name"}),Object(h.jsx)("input",{type:"text",name:"",class:"form-control"})]}),Object(h.jsxs)("div",{class:"form-group",style:{padding:"10px"},children:[Object(h.jsx)("label",{children:"Email"}),Object(h.jsx)("input",{type:"email",name:"",class:"form-control"})]}),Object(h.jsxs)("div",{class:"form-group",style:{padding:"10px"},children:[Object(h.jsx)("label",{children:"Phone"}),Object(h.jsx)("input",{type:"tel",name:"",class:"form-control"})]}),Object(h.jsxs)("div",{class:"form-group",style:{padding:"10px"},children:[Object(h.jsx)("label",{children:"Service Category"}),Object(h.jsxs)("select",{class:"form-control",children:[Object(h.jsx)("option",{children:"Select"}),Object(h.jsx)("option",{children:"Web Design"}),Object(h.jsx)("option",{children:"Web Development"}),Object(h.jsx)("option",{children:"Digital Marketing"}),Object(h.jsx)("option",{children:"Graphic Design"}),Object(h.jsx)("option",{children:"IT Services"}),Object(h.jsx)("option",{children:"Mobile Apps"}),Object(h.jsx)("option",{children:"White Label Solutions"}),Object(h.jsx)("option",{children:"Outsourcing"}),Object(h.jsx)("option",{children:"Printing"}),Object(h.jsx)("option",{children:"Consultation"})]})]}),Object(h.jsxs)("div",{class:"form-group",style:{padding:"10px"},children:[Object(h.jsx)("label",{children:"Date"}),Object(h.jsx)("input",{type:"date",name:"",class:"form-control"})]}),Object(h.jsxs)("div",{class:"form-group",style:{padding:"10px"},children:[Object(h.jsx)("label",{children:"Time"}),Object(h.jsxs)("select",{class:"form-control",children:[Object(h.jsx)("option",{children:"Morning"}),Object(h.jsx)("option",{children:"Noon"}),Object(h.jsx)("option",{children:"Evening"})]})]})]}),Object(h.jsx)("div",{class:"submit-btn text-right",children:Object(h.jsx)("button",{type:"submit",className:"btn btn-primary",style:{backgroundColor:"#be2664",borderColor:"#be2664",color:"#fff",fontSize:"18px",fontFamily:"SegoeUI-Semibold",transition:"all 0.3s ease 0s",borderRadius:"40px",padding:"13px 30px 13px 25px"},children:"Submit"})})]})]})})]})})}),Object(h.jsxs)("footer",{class:"footer",children:[Object(h.jsx)("div",{class:"top-footer",children:Object(h.jsx)("div",{class:"container",children:Object(h.jsxs)("div",{class:"row",children:[Object(h.jsx)("div",{class:"col-lg-8 col-6",children:Object(h.jsxs)("div",{class:"row",children:[Object(h.jsx)("div",{class:"col-lg-3",children:Object(h.jsx)("div",{class:"footer-box",children:Object(h.jsxs)("ul",{class:"footer-menu",children:[Object(h.jsx)("li",{children:"Home"}),Object(h.jsx)("li",{children:"About Us"}),Object(h.jsx)("li",{children:"Our Work"}),Object(h.jsx)("li",{children:"Faq's"}),Object(h.jsx)("li",{children:"How We Work"})]})})}),Object(h.jsx)("div",{class:"col-lg-9",children:Object(h.jsxs)("div",{class:"footer-box",children:[Object(h.jsx)("h3",{style:{fontSize:"16px"},children:Object(h.jsx)("b",{children:"Services"})}),Object(h.jsxs)("ul",{class:"footer-service-menu",children:[Object(h.jsx)("li",{children:"Web Design"}),Object(h.jsx)("li",{children:"Web Development"}),Object(h.jsx)("li",{children:"Digital Marketing"}),Object(h.jsx)("li",{children:"Graphic Design"}),Object(h.jsx)("li",{children:"IT Services"}),Object(h.jsx)("li",{children:"Mobile Apps"}),Object(h.jsx)("li",{children:"White Label Solutions"}),Object(h.jsx)("li",{children:"Outsourcing"}),Object(h.jsx)("li",{children:"Printing"}),Object(h.jsx)("li",{children:"Consultation"})]})]})})]})}),Object(h.jsxs)("div",{class:"col-lg-4 col-6",children:[Object(h.jsxs)("div",{class:"footer-box footer-contact",children:[Object(h.jsx)("h3",{children:Object(h.jsx)("b",{children:"Contact Us"})}),Object(h.jsxs)("ul",{children:[Object(h.jsxs)("li",{children:[Object(h.jsx)("span",{children:"Address: "}),"Suite 6, 17 Comalco Ct Thomastown, 3074"]}),Object(h.jsxs)("li",{children:[Object(h.jsx)("span",{children:"Telephone:"}),Object(h.jsx)("a",{href:"tel:03 8595 5246",children:"03 8595 5246"})]}),Object(h.jsxs)("li",{children:[Object(h.jsx)("span",{children:"Email:"}),Object(h.jsx)("a",{href:"mailto:info@logicsofts.com.au",children:"info@logicsofts.com.au"})]})]})]}),Object(h.jsx)("div",{class:"footer-box footer-social"})]}),Object(h.jsx)("div",{class:"col-lg-7 col-12 footer-tech-row",children:Object(h.jsx)("div",{class:"footer-box",children:Object(h.jsx)("div",{class:"tech-img"})})})]})})}),Object(h.jsx)("div",{class:"copyright",children:Object(h.jsx)("div",{class:"container",children:Object(h.jsx)("p",{children:"Copyright - 2020-2021 All Right Reserved - Logicsofts Australia Ptv Ltd. - ABN29611694529"})})})]})]})};var p=function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)(g,{}),Object(h.jsx)(O,{}),Object(h.jsx)(G,{})]})},K=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,44)).then((function(c){var s=c.getCLS,t=c.getFID,l=c.getFCP,j=c.getLCP,i=c.getTTFB;s(e),t(e),l(e),j(e),i(e)}))};s(42);i.a.render(Object(h.jsx)(l.a.StrictMode,{children:Object(h.jsx)(p,{})}),document.getElementById("root")),K()}},[[43,1,2]]]);
//# sourceMappingURL=main.5645b154.chunk.js.map