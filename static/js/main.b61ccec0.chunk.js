(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{11:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__1vhYp",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__2ExF-"}},12:function(e,t,a){e.exports={Overlay:"Modal_Overlay__1xNXs",Modal:"Modal_Modal__23eRr"}},29:function(e,t,a){e.exports={App:"App_App__3isSd"}},30:function(e,t,a){e.exports={Button:"Button_Button__r6h4I"}},31:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__ToaNZ"}},38:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__3zSh3"}},46:function(e,t,a){},5:function(e,t,a){e.exports={SearchForm:"SearchForm_SearchForm__3Gf3a",SearchFormButton:"SearchForm_SearchFormButton__2l2d5",SearchFormButtonLabel:"SearchForm_SearchFormButtonLabel__1CCvD",SearchFormInput:"SearchForm_SearchFormInput__3D1iS"}},88:function(e,t,a){"use strict";a.r(t);var r,n=a(0),c=a.n(n),o=a(24),i=a.n(o),s=(a(46),a(9)),l=a.n(s),u=a(13),m=a(25),h=a(26),d=a(27),p=a(41),b=a(39),j=a(28),g=a.n(j),f=function(e,t){return g.a.get("".concat("https://pixabay.com/api","/?q=").concat(e,"&page=").concat(t,"&key=").concat("20667212-59f505c313ab383d6de9d3ab5","&image_type=photo&orientation=horizontal&per_page=12"))},v=a(29),x=a.n(v),O=a(30),S=a.n(O),_=a(1),y=function(e){var t=e.loadMore;return Object(_.jsx)(_.Fragment,{children:Object(_.jsx)("button",{onClick:t,className:S.a.Button,type:"button",children:"Load more"})})},I=a(40),w=a(5),M=a.n(w),F=function(e){var t=e.onSubmit,a=Object(n.useState)(""),r=Object(I.a)(a,2),c=r[0],o=r[1];return Object(_.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(c)},className:M.a.SearchForm,children:[Object(_.jsx)("button",{type:"submit",className:M.a.SearchFormButton,children:Object(_.jsx)("span",{className:M.a.SearchFormButtonLabel,children:"Search"})}),Object(_.jsx)("input",{onChange:function(e){var t=e.target.value;o(t)},className:M.a.SearchFormInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",name:"quary"})]})},L=a(31),N=a.n(L),k=function(e){var t=e.onSubmit;return Object(_.jsx)("header",{className:N.a.Searchbar,children:Object(_.jsx)(F,{onSubmit:t})})},G=a(32),B=a(33),C=a.n(B),E=a(34),P=function(){return Object(_.jsx)(A,{children:Object(_.jsx)(C.a,{type:"ThreeDots",color:"#00BFFF",height:100,width:100,timeout:3e3})})},A=E.a.div(r||(r=Object(G.a)(["\n  position: fixed;\n  top:50%;\n  left:50%;\n  transform: translate(-50%, -50%);\n"]))),D=a(11),R=a.n(D),U=function(e){var t=e.previewURL,a=e.tags,r=e.activeModal;return Object(_.jsx)("li",{className:R.a.ImageGalleryItem,children:Object(_.jsx)("img",{onClick:r,src:t,alt:a,className:R.a.ImageGalleryItemImage})})},Q=a(38),T=a.n(Q),q=function(e){var t=e.images,a=e.activeModal;return Object(_.jsx)("ul",{className:T.a.ImageGallery,children:t.map((function(e){var t=e.id,r=e.previewURL,n=e.tags;return Object(_.jsx)(U,{activeModal:function(){return a(e)},previewURL:r,type:n},t)}))})},z=a(12),J=a.n(z),H=function(e){var t=e.children,a=e.activeModal;Object(n.useEffect)((function(){var e=function(e){"Escape"===e.code&&a()};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[a]);return Object(_.jsx)("div",{onClick:function(e){e.currentTarget===e.target&&a()},className:J.a.Overlay,children:Object(_.jsx)("div",{className:J.a.Modal,children:t})})},X=function(e){Object(p.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(h.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={images:[],searchQuary:"",currentPage:1,isLoading:!1,error:!1,showModal:!1,selectedImage:null},e.loadMore=function(){e.setState((function(e){return{currentPage:e.currentPage+1}}))},e.onSubmit=function(t){e.setState({searchQuary:t,currentPage:1,images:[]})},e.activeModal=function(t){e.setState((function(e){return{showModal:!e.showModal,selectedImage:t}}))},e}return Object(d.a)(a,[{key:"componentDidUpdate",value:function(){var e=Object(m.a)(l.a.mark((function e(t,a){var r,n,c,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=this.state,n=r.searchQuary,(c=r.currentPage)===a.currentPage&&n===a.searchQuary){e.next=14;break}return e.prev=2,this.setState({isLoading:!0}),e.next=6,f(n,c);case 6:o=e.sent,this.setState((function(e){return{images:[].concat(Object(u.a)(e.images),Object(u.a)(o.data.hits)),isLoading:!1}})),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2),this.setState({error:!0,isLoading:!1});case 14:case"end":return e.stop()}}),e,this,[[2,11]])})));return function(t,a){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.images,a=e.isLoading,r=e.error,n=e.showModal,c=e.selectedImage,o=t.length>0&&!a;return Object(_.jsxs)("div",{className:x.a.App,children:[Object(_.jsx)(k,{onSubmit:this.onSubmit}),r&&Object(_.jsx)("h2",{children:"Oops!"}),n&&Object(_.jsx)(H,{activeModal:this.activeModal,children:Object(_.jsx)("img",{src:c.largeImageURL,alt:c.tags})}),a?Object(_.jsx)(P,{}):Object(_.jsx)(q,{activeModal:this.activeModal,showModal:n,images:t}),o&&Object(_.jsx)(y,{loadMore:this.loadMore})]})}}]),a}(n.Component);a(87);i.a.render(Object(_.jsx)(c.a.StrictMode,{children:Object(_.jsx)(X,{})}),document.getElementById("root"))}},[[88,1,2]]]);
//# sourceMappingURL=main.b61ccec0.chunk.js.map