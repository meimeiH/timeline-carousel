(function(t){function e(e){for(var n,r,l=e[0],s=e[1],c=e[2],d=0,u=[];d<l.length;d++)r=l[d],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&u.push(a[r][0]),a[r]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);m&&m(e);while(u.length)u.shift()();return o.push.apply(o,c||[]),i()}function i(){for(var t,e=0;e<o.length;e++){for(var i=o[e],n=!0,r=1;r<i.length;r++){var s=i[r];0!==a[s]&&(n=!1)}n&&(o.splice(e--,1),t=l(l.s=i[0]))}return t}var n={},a={index:0},o=[];function r(t){return l.p+"js/"+({}[t]||t)+"."+{"chunk-2d21a3d2":"4dba0710"}[t]+".js"}function l(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,l),i.l=!0,i.exports}l.e=function(t){var e=[],i=a[t];if(0!==i)if(i)e.push(i[2]);else{var n=new Promise((function(e,n){i=a[t]=[e,n]}));e.push(i[2]=n);var o,s=document.createElement("script");s.charset="utf-8",s.timeout=120,l.nc&&s.setAttribute("nonce",l.nc),s.src=r(t);var c=new Error;o=function(e){s.onerror=s.onload=null,clearTimeout(d);var i=a[t];if(0!==i){if(i){var n=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+n+": "+o+")",c.name="ChunkLoadError",c.type=n,c.request=o,i[1](c)}a[t]=void 0}};var d=setTimeout((function(){o({type:"timeout",target:s})}),12e4);s.onerror=s.onload=o,document.head.appendChild(s)}return Promise.all(e)},l.m=t,l.c=n,l.d=function(t,e,i){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(l.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)l.d(i,n,function(e){return t[e]}.bind(null,n));return i},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/",l.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var d=0;d<s.length;d++)e(s[d]);var m=c;o.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"3bbd":function(t,e,i){t.exports=i.p+"img/6.32747db2.jpg"},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var n=i("2b0e"),a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("router-view")],1)},o=[],r=i("2877"),l={},s=Object(r["a"])(l,a,o,!1,null,null,null),c=s.exports,d=(i("d3b7"),i("8c4f"));n["a"].use(d["a"]);var m=[{path:"/",name:"Home",component:function(){return i.e("chunk-2d21a3d2").then(i.bind(null,"bb51"))}}],u=new d["a"]({routes:m}),f=u,h=i("2f62");n["a"].use(h["a"]);var p=new h["a"].Store({state:{},mutations:{},actions:{},modules:{}}),v=i("77ed"),x=i.n(v),g=(i("fdc9"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container",style:t.changeThemeColor},[t.carouseIsShow?i("div",{staticClass:"full-width slider"},[i("transition-group",{attrs:{"enter-active-class":t.enterActiveClass}},t._l(t.carouselList,(function(e,n){return i("div",{directives:[{name:"show",rawName:"v-show",value:n===t.currentIndex,expression:"index === currentIndex"}],key:e.id,staticClass:"slider-box",on:{mouseover:t.handleSliderMouseOver,mouseleave:t.handleSliderMouseLeave}},[i("div",{staticClass:"slider-box__item"},[i("img",{attrs:{src:e.img,alt:""}})]),i("div",{staticClass:"slider-box__item"},[i("div",{staticClass:"item-title"},[t._v(t._s(e.title))]),i("div",{staticClass:"item-info"},[t._v(t._s(e.info))])])])})),0)],1):t._e(),i("div",{staticClass:"timeline",class:{mt:!t.carouseIsShow}},[i("div",{staticClass:"line full-width"}),i("div",{staticClass:"timeline-container"},[i("div",{staticClass:"item",on:{click:function(e){return t.go(t.prevIndex,"prev")}}},[i("button",{staticClass:"item-prev",class:{"item-disabled":!t.loop&&0===t.currentIndex},attrs:{disabled:!t.loop&&0===t.currentIndex}},[i("span",{staticClass:"iconfont icon-jiantouarrow506"})])]),i("div",{staticClass:"item"},t._l(t.timelineList,(function(e,n){return i("div",{key:e.id,staticClass:"list",style:{transform:"translateX("+t.translateNum+"px)",width:t.timelineWidth+"px"},on:{click:function(e){return t.go(n,"")},mouseover:function(i){return t.handleMouseOver(e.text,n)},mouseleave:function(i){return t.handleMouseLeave(e.text,n)}}},[i("div",{staticClass:"circle",class:{active:n===t.currentIndex}}),i("div",{staticClass:"line",class:{on:n===t.currentIndex&&t.onIsActive,go:n===t.currentIndex&&!t.onIsActive}}),i("div",{staticClass:"text"},[t._v(" "+t._s(e.text)+" ")]),i("div",{ref:"tip",refInFor:!0,staticClass:"tip"},[t._v(" "+t._s(e.text)+" "),i("div",{staticClass:"triangle"})])])})),0),i("div",{staticClass:"item",on:{click:function(e){return t.go(t.nextIndex,"next")}}},[i("button",{staticClass:"item-next",class:{"item-disabled":!t.loop&&t.currentIndex===t.timelineList.length-1},attrs:{disabled:!t.loop&&t.currentIndex===t.timelineList.length-1}},[i("span",{staticClass:"iconfont icon-jiantouarrow484"})])])])])])}),b=[],w={name:"timelineCarousel",props:{timelineList:{type:Array,default(){return[{id:1,text:"2020-09-28"},{id:2,text:"2020-09-28 12:00:002020-09-28 12:00:00"},{id:3,text:"0333333333333333"},{id:4,text:"04"},{id:5,text:"05"},{id:6,text:"06"},{id:7,text:"07"},{id:8,text:"08"},{id:9,text:"09"},{id:10,text:"10"}]}},autoPlay:{type:Boolean,default:!0},loop:{type:Boolean,default:!0},carouselList:{type:Array,default(){return[{id:1,img:i("69af"),title:"陶渊明",info:"盛年不重来，一日难再晨。及时宜自勉，岁月不待人。"},{id:2,img:i("89ff"),title:"老子",info:"千里之行，始于足下。"},{id:3,img:i("ed5a"),title:"朱熹",info:"少年易学老难成，一寸光阴不可轻。"},{id:4,img:i("d976"),title:"王勃",info:"海内存知已，天涯若比邻。"},{id:5,img:i("d007"),title:"高适",info:"莫愁前路无知已，天下谁人不识君。"},{id:6,img:i("3bbd"),title:"孟子",info:"穷则独善其身，达则兼济天下。"},{id:7,img:i("bc33"),title:"杜甫",info:"读书破万卷，下笔如有神。"},{id:8,img:i("69af"),title:"陶渊明",info:"盛年不重来，一日难再晨。及时宜自勉，岁月不待人。"},{id:9,img:i("89ff"),title:"老子",info:"千里之行，始于足下。"},{id:10,img:i("ed5a"),title:"朱熹",info:"少年易学老难成，一寸光阴不可轻。"}]}},timelineNum:{type:Number,default:6},timelineWidth:{type:Number,default:150},themeColor:{type:String,default:"#bd1622"},enterActiveClass:{type:String,default:"animate__animated animate__fadeInLeft"},mouseEvent:{type:Boolean,default:!1},carouseIsShow:{type:Boolean,default:!0}},data(){return{currentIndex:0,timer:null,timer2:null,onIsActive:!0,translateNum:0}},computed:{prevIndex(){return this.loop?0==this.currentIndex?this.timelineList.length-1:this.currentIndex-1:0==this.currentIndex?0:this.currentIndex-1},nextIndex(){return this.loop?this.currentIndex==this.timelineList.length-1?0:this.currentIndex+1:this.currentIndex==this.timelineList.length-1?this.timelineList.length-1:this.currentIndex+1},changeThemeColor(){return{"--theme-color":this.themeColor}}},methods:{go(t,e){this.currentIndex=t,this.onIsActive=!0,this.autoPlay&&(this.setGo(),this.setOnActive()),this.calcTranslateNum(e),this.$emit("getCurrentItem",t,this.timelineList[t],this.carouselList[t])},setOnActive(){clearTimeout(this.timer2),this.timer2=setTimeout(()=>{this.onIsActive=!1},2800)},setGo(){clearInterval(this.timer),this.timer=setInterval(()=>{this.go(this.nextIndex),this.calcTranslateNum("next")},3600)},calcTranslateNum(t){const e=this.timelineList.length-1;if("next"===t)this.currentIndex>=this.timelineNum&&(this.translateNum=(e-this.timelineNum)*-this.timelineWidth),0===this.currentIndex&&(this.translateNum=0);else if("prev"===t){if(this.currentIndex<=this.timelineNum)return void(this.translateNum=0);if(this.currentIndex>=this.timelineNum)return void(this.translateNum=(e-this.timelineNum)*-this.timelineWidth);this.translateNum+=this.timelineWidth}else{if(this.currentIndex<this.timelineNum)return void(this.translateNum=0);if(this.currentIndex>=this.timelineNum)return void(this.translateNum=(e+1-this.timelineNum)*-this.timelineWidth);this.translateNum+=this.timelineWidth}},handleMouseOver(t,e){t.length>=16&&(this.$refs.tip[e].style="display: block;")},handleMouseLeave(t,e){t.length>=16&&(this.$refs.tip[e].style="display: none;")},handleSliderMouseOver(){this.autoPlay&&this.mouseEvent&&(clearInterval(this.timer),clearTimeout(this.timer2))},handleSliderMouseLeave(){this.autoPlay&&this.mouseEvent&&(this.setGo(),this.setOnActive())}},mounted(){this.autoPlay&&(this.setGo(),this.setOnActive()),this.$emit("getCurrentItem",0,this.timelineList[0],this.carouselList[0])},beforeDestroy(){clearInterval(this.timer),clearTimeout(this.timer2)}},y=w,A=(i("aa81"),Object(r["a"])(y,g,b,!1,null,"70a2a26c",null)),I=A.exports;I.install=function(t){t.component(I.name,I)};var C=I;const _=[C],k=function(t){k.installed||(k.installed=!0,_.map(e=>{t.component(e.name,e)}))};"undefined"!==typeof window&&window.Vue&&k(window.Vue);var j={install:k,..._};n["a"].use(j),n["a"].use(x.a),n["a"].config.productionTip=!1,new n["a"]({router:f,store:p,render:function(t){return t(c)}}).$mount("#app")},"69af":function(t,e,i){t.exports=i.p+"img/1.fc6953ac.jpg"},"89ff":function(t,e,i){t.exports=i.p+"img/2.c6402b15.jpg"},aa81:function(t,e,i){"use strict";var n=i("f4d9"),a=i.n(n);a.a},bc33:function(t,e,i){t.exports=i.p+"img/7.a3443846.jpg"},d007:function(t,e,i){t.exports=i.p+"img/5.e12a5b79.jpg"},d489:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'*[data-v-70a2a26c]{margin:0;padding:0}.container[data-v-70a2a26c]{width:100%}.container .slider[data-v-70a2a26c]{width:100%;padding:12% 15% 4% 15%;box-sizing:border-box}.container .slider[data-v-70a2a26c],.container .slider span[data-v-70a2a26c]{display:flex;justify-content:center;align-items:center;overflow:hidden}.container .slider span[data-v-70a2a26c]{height:260px}.container .slider .leave-to[data-v-70a2a26c]{position:relative}.container .slider .enter-active-class[data-v-70a2a26c]{-webkit-animation:fadeIn-data-v-70a2a26c 1s linear;animation:fadeIn-data-v-70a2a26c 1s linear}.container .slider .slider-box[data-v-70a2a26c]{width:100%;height:100%;display:flex;justify-content:center;align-items:center}.container .slider .slider-box.active[data-v-70a2a26c]{-webkit-animation:fadeIn-data-v-70a2a26c 1s linear;animation:fadeIn-data-v-70a2a26c 1s linear}.container .slider .slider-box .slider-box__item[data-v-70a2a26c]{width:50%;height:100%}.container .slider .slider-box .slider-box__item[data-v-70a2a26c]:nth-child(2){padding-left:10%;box-sizing:border-box;position:relative}.container .slider .slider-box .slider-box__item:nth-child(2) .item-title-bg[data-v-70a2a26c]{position:absolute;color:rgba(0,0,0,.05);right:0;top:0;font-size:5rem;filter:blur(3px);opacity:1;width:100%;text-align:center;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.container .slider .slider-box .slider-box__item:nth-child(2) .item-title[data-v-70a2a26c]{font-size:24px;font-weight:700;color:#000;margin-bottom:20px}.container .slider .slider-box .slider-box__item:nth-child(2) .item-info[data-v-70a2a26c]{font-size:14px;color:#5a5b5b;line-height:24px}.container .slider .slider-box .slider-box__item img[data-v-70a2a26c]{width:100%}.container .timeline[data-v-70a2a26c]{width:100%;box-sizing:border-box;display:flex;justify-content:center;align-items:center;flex-wrap:wrap}.container .timeline.mt[data-v-70a2a26c]{margin-top:80px}.container .timeline .line[data-v-70a2a26c]{width:100%;height:1px;background:#ccc}.container .timeline .timeline-container[data-v-70a2a26c]{width:100%}.container .timeline .timeline-container .item[data-v-70a2a26c]{width:12.5%;float:left;text-align:center}.container .timeline .timeline-container .item[data-v-70a2a26c]:nth-child(2){width:75%;display:flex;justify-content:space-between;align-items:center;overflow:hidden;padding-top:150px;margin-top:-150px}.container .timeline .timeline-container .item .list[data-v-70a2a26c]{position:relative;text-align:center;cursor:pointer;transition:all .5s linear;display:flex;justify-content:center}.container .timeline .timeline-container .item .list:last-child .line[data-v-70a2a26c]{display:none}.container .timeline .timeline-container .item .list .circle[data-v-70a2a26c]{position:absolute;left:48%;width:8px;height:8px;background:#ccc;border-radius:50%;margin:-4px auto 0;z-index:2}.container .timeline .timeline-container .item .list .circle.active[data-v-70a2a26c],.container .timeline .timeline-container .item .list .circle[data-v-70a2a26c]:hover{background-color:var(--theme-color)}.container .timeline .timeline-container .item .list .line[data-v-70a2a26c]{width:100%;height:1px;position:absolute;left:48%;top:-1px;opacity:0;z-index:1}.container .timeline .timeline-container .item .list .line[data-v-70a2a26c]:after{content:"";position:absolute;width:100%;height:100%;top:0;left:0;background-color:var(--theme-color);-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:2.8s;animation-duration:2.8s;-webkit-animation-timing-function:linear;animation-timing-function:linear}.container .timeline .timeline-container .item .list .line.on[data-v-70a2a26c]{opacity:1}.container .timeline .timeline-container .item .list .line.on[data-v-70a2a26c]:after{-webkit-animation-name:line_1-data-v-70a2a26c;animation-name:line_1-data-v-70a2a26c}.container .timeline .timeline-container .item .list .line.go[data-v-70a2a26c]{opacity:1}.container .timeline .timeline-container .item .list .line.go[data-v-70a2a26c]:after{right:0;left:auto;-webkit-animation-duration:.8s;animation-duration:.8s;-webkit-animation-name:line_2-data-v-70a2a26c;animation-name:line_2-data-v-70a2a26c}.container .timeline .timeline-container .item .list .text[data-v-70a2a26c]{margin-top:14px;width:150px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;position:relative}.container .timeline .timeline-container .item .list .tip[data-v-70a2a26c]{position:absolute;top:-55px;padding:10px 20px;border-radius:5px;background-color:var(--theme-color);color:#fff;width:-webkit-max-content;width:-moz-max-content;width:max-content;display:none}.container .timeline .timeline-container .item .list .tip .triangle[data-v-70a2a26c]{width:0;height:0;border-top:8px solid var(--theme-color);border-right:5px solid transparent;border-left:5px solid transparent;position:absolute;left:50%;bottom:-8px;margin-left:-3.5px}.container .timeline .timeline-container .item .item-next[data-v-70a2a26c],.container .timeline .timeline-container .item .item-prev[data-v-70a2a26c]{width:45px;height:45px;border-radius:50%;color:#909090;background-color:#e9e9e9;cursor:pointer;margin:-24px auto 0;display:flex;align-items:center;justify-content:center;border:none;outline:none}.container .timeline .timeline-container .item .item-next[data-v-70a2a26c]:hover,.container .timeline .timeline-container .item .item-prev[data-v-70a2a26c]:hover{color:#fff;background-color:var(--theme-color)}.container .timeline .timeline-container .item .item-next.item-disabled[data-v-70a2a26c],.container .timeline .timeline-container .item .item-prev.item-disabled[data-v-70a2a26c]{background:#666;cursor:no-drop}@-webkit-keyframes line_1-data-v-70a2a26c{0%{width:0}to{width:100%}}@keyframes line_1-data-v-70a2a26c{0%{width:0}to{width:100%}}@-webkit-keyframes line_2-data-v-70a2a26c{0%{width:100%}to{width:0}}@keyframes line_2-data-v-70a2a26c{0%{width:100%}to{width:0}}@-webkit-keyframes fadeIn-data-v-70a2a26c{0%{opacity:0}to{opacity:1}}@keyframes fadeIn-data-v-70a2a26c{0%{opacity:0}to{opacity:1}}',""]),t.exports=e},d976:function(t,e,i){t.exports=i.p+"img/4.c326fcfd.jpg"},ed5a:function(t,e,i){t.exports=i.p+"img/3.b7dc19d7.jpg"},f4d9:function(t,e,i){var n=i("d489");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("499e").default;a("43a71b68",n,!0,{sourceMap:!1,shadowMode:!1})},f5d0:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@font-face{font-family:iconfont;src:url(//at.alicdn.com/t/font_2081515_lvlkae3wmcf.eot?t=1600920068885);src:url(//at.alicdn.com/t/font_2081515_lvlkae3wmcf.eot?t=1600920068885#iefix) format("embedded-opentype"),url("data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAANsAAsAAAAAB6gAAAMdAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDMgqCNIITATYCJAMUCwwABCAFhG0HWxuyBiMRdnIPMpL9xQFPFjdSkHIpmQLXKVKz4FcuhIZd6/pwkPfBA7+/r3PxMBCShEimSRPJBUP6addJaG6QEyeu+RFF04E+vkCBLM4jUj/Stj5v4SVAgFrobT/nj0GYqElC+8mjf5C0nF6a0f9ck1fi+e1sLtUWFXahO9o7wFG0zoadVim8gUwHwlOQXcQfvajNEIAz4SQgKqoaOiDQkF4CEJNjI30QOR8aLSVtBGbNRI3YwcCWq/I62A4/Lz5IEzZIDAXZqmW4chDrdeDr02rm/4xOtcrSdBZAmgYKSAA0iKla2yRwHEtA4Ww0RygBwBkbiZyqUeRrx+vT//+TyohD4ExtoCf540kQJhzaFYASNq7hdaArSbWRLAIFrx0IBLw+HUcCz6XjWtHQCsCkxIrVCvqyoECJix1MlYq/10LdY/YhCM4imnXDi1oNBlOfYpzgqNXCmV6PDmqg2OwhADrhPlK6nvk6VVtOeNC9aDb4W3v/GVjxLjceM1Pg+IzVMR2VRqUt59ZdOGOtmIfNFetMYs4NW1XVdGAeT89TuGMEvtsHIw5euEqFASG9lN595gh3eDvcCCX7zrGGlIhn56Nnz9235O8j16/tKWAaElDr8lTION5NSB/4rw6o1R/zHQLSrMoej4JftosG4MHufM16/mswDW9XCyz9DVIwTZtyoje0nupKdIdBEKiRRpYz8PJd3jyeRucH40Fg4zfAYRGWgsImlqZZCWDgQgaY2BSDM/FUT3fBhylghHYC4lhkQODJUZC4cwEUntygadYjMPDnE5h4CgXO/PPffMG+RVHvTdAoerAviBzn5Bi1F2G/MbilRrLykP2PUkZB2CzXxeQX5ihTDCnvwVaVgIQz+GS2wzRlKIRjdLoMVYvrakV1V1o6zio9bwQyFPKA9QIiDsuRn1n1Su//hgI3KUNaSA3Bf0iUovrBxtIaoH1pcoh0K/uU7gJbShFABMuAT8aCUhpjoKhvF0OOWgoHRApXK46KUM1yeV32josAZ+SnRlIooYUhTMZHJle+GRF+7M/7fPiwPjZ80CJvWSaTB5UKAAAA") format("woff2"),url(//at.alicdn.com/t/font_2081515_lvlkae3wmcf.woff?t=1600920068885) format("woff"),url(//at.alicdn.com/t/font_2081515_lvlkae3wmcf.ttf?t=1600920068885) format("truetype"),url(//at.alicdn.com/t/font_2081515_lvlkae3wmcf.svg?t=1600920068885#iconfont) format("svg")}.iconfont{font-family:iconfont!important;font-size:16px;font-style:normal;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.icon-jiantouarrow484:before{content:"\\e6a8"}.icon-jiantouarrow506:before{content:"\\e6b5"}.icon-down:before{content:"\\e620"}.icon-bofang:before{content:"\\e618"}',""]),t.exports=e},fdc9:function(t,e,i){var n=i("f5d0");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("499e").default;a("0b822fb3",n,!0,{sourceMap:!1,shadowMode:!1})}});
//# sourceMappingURL=index.6d792ffc.js.map