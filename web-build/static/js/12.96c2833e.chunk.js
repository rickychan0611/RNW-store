(this.webpackJsonp=this.webpackJsonp||[]).push([[12],{1272:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(115),c=a(59),i=a(876),o=a(873),u=a(874),s=a(6),m=a(21),p=a(53),g=(s.a.create({}),function(){return l.a.createElement(m.a,null,l.a.createElement("title",null,"Unknown Error - "+p.g),l.a.createElement("link",{rel:"canonical",href:p.k+"/500"}),l.a.createElement("meta",{name:"robots",content:"noindex"}),l.a.createElement("style",null,""))});t.default=function(e){return l.a.createElement(r.j,null,l.a.createElement(g,null),l.a.createElement(i.a,e),l.a.createElement(u.a,null,l.a.createElement(r.p,{id:"UnknownError",type:"gray",level:1},"Oops! An unexpected error has occurred..."),l.a.createElement(r.o,null,"Please try again in a few minutes.\xa0",l.a.createElement(r.i,{to:Object(c.a)("/")},"Click here"),"\xa0 to go back to the home page.")),l.a.createElement(o.a,null))}},871:function(e,t,a){"use strict";t.a=function(e){var t=[{label:"Home",url:"/"},{label:"About",url:"/about"}];return e&&("VISITOR"===e.role?(t.push({label:"Log In",url:"/login"}),t.push({label:"Sign Up",url:"/signup"})):t.push({label:"Logout",url:"/logout"})),t}},872:function(e,t,a){"use strict";var n=a(34),l=a.n(n),r=a(12),c=a.n(r),i=a(0),o=a.n(i),u=(a(2),a(42)),s=a(115),m=function(e){var t=e.to,a=e.exact,n=e.strict,r=e.location,i=e.activeClassName,m=e.className,p=e.activeStyle,g=e.style,d=e.type,y=e.activeType,f=e.isActive,E=e["aria-current"],h=c()(e,["to","exact","strict","location","activeClassName","className","activeStyle","style","type","activeType","isActive","aria-current"]),v="object"===typeof t?t.pathname:t,b=v&&v.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1");return o.a.createElement(u.b,{path:b,exact:a,strict:n,location:r,children:function(e){var a=e.location,n=e.match,r=!!(f?f(n,a):n);return o.a.createElement(s.i,l()({to:t,type:r&&y?y:d,className:r?[m,i].filter((function(e){return e})).join(" "):m,style:r?[g,p]:g,"aria-current":r&&E||null},h))}})};m.defaultProps={children:null,activeClassName:"active","aria-current":"page"},t.a=m},873:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=a(6),c=a(115),i=a(53),o=r.a.create({disclaimer:{alignSelf:"flex-end",textAlign:"center",lineHeight:40}});t.a=function(){return i.c?l.a.createElement(c.o,{type:"lightGray",style:o.disclaimer},i.c):null}},874:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=(a(2),a(6)),c=a(115),i=a(21),o=r.a.create({view:{flex:1,width:"100%"},container:{paddingBottom:30}}),u=function(e){var t=e.children,a=e.style;return l.a.createElement(l.a.Fragment,null,l.a.createElement(i.a,null,l.a.createElement("style",null,'\n          @media (min-width: 992px) {\n            [data-class~="LimitedContainer__view"] {\n              padding-top: 30px;\n            }\n          }\n        ')),l.a.createElement(c.r,{style:o.view,className:"LimitedContainer__view"},l.a.createElement(c.g,{type:"limited",style:[o.container,a]},t)))};u.defaultProps={style:null,children:null},t.a=u},876:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=a(6),c=a(16),i=(a(2),a(115)),o=a(54),u=a(38),s=(a(21),a(53),a(871)),m=a(59),p=(a(34),a(12),a(872)),g=r.a.create({row:{paddingTop:"web"===c.a.OS?20:35,justifyContent:"center"},leftColumn:{height:50,justifyContent:"center"},rightColumn:{height:50,alignItems:"flex-end",justifyContent:"center"},menuRow:{flexDirection:"row",alignItems:"center",justifyContent:"flex-end"},menuItem:{paddingRight:15},logo:{fontSize:20,color:"red"}}),d=function(e){return"VISITOR"===e.user.role?l.a.createElement(l.a.Fragment,null,l.a.createElement(i.d,{small:!0,to:Object(m.a)("/login")},"Log In"),l.a.createElement(i.d,{small:!0,to:Object(m.a)("/signup")},"Sign Up")):l.a.createElement(i.d,{small:!0,to:Object(m.a)("/logout")},"Logout")};t.a=function(e){var t=e.user,a=e.openLeft,n=(Object(o.b)(),Object(u.f)());return l.a.createElement(i.k,{style:g.row,className:"Header__row"},l.a.createElement(i.g,{type:"limited"},l.a.createElement(i.f,{xs:6,style:g.leftColumn},l.a.createElement(i.o,{type:"navy",auto:!0,style:g.logo},"Tin Tin Food Wholesale")),l.a.createElement(i.f,{xs:6,style:g.rightColumn},l.a.createElement(i.r,{style:g.menuRow},n.reduced?l.a.createElement(i.d,{small:!0,onPress:a},"Menu button"):l.a.createElement(l.a.Fragment,null,Object(s.a)().map((function(e){return l.a.createElement(p.a,{auto:!0,exact:!0,key:e.label,type:"lightGray",activeType:"gray",className:"Header_navLink",style:g.menuItem,to:Object(m.a)(e.url)},e.label)})),l.a.createElement(d,{user:t}))))))}}}]);
//# sourceMappingURL=12.96c2833e.chunk.js.map