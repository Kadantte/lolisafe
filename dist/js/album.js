var lsKeys={},page={lazyLoad:null,lightbox:null,lightboxExts:[".gif",".jpeg",".jpg",".png",".svg",".tif",".tiff",".webp",".bmp"],updateImageContainer:function(e){var t=e.parentNode.parentNode;if(t.classList.contains("image-container")){var a=t.querySelector(".file-size");if(a){var n=a.dataset.value||a.innerHTML;a.innerHTML=page.getPrettyBytes(parseInt(n,10))}var i=document.querySelector(".file-date");if(i){var r=i.dataset.value;i.innerHTML=page.getPrettyDate(new Date(1e3*parseInt(r,10)))}}}};window.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector("#count .file-size");if(e){var t=e.dataset.value||e.innerHTML;e.innerHTML=page.getPrettyBytes(parseInt(t,10))}page.lazyLoad=new LazyLoad({unobserve_entered:!0,callback_enter:page.updateImageContainer});var a=new RegExp(""+page.lightboxExts.map((function(e){return e.substring(1)})).join("|"),"i");page.lightbox=new SimpleLightbox("#table a.image",{captions:!0,captionSelector:"img",captionType:"attr",captionsData:"alt",captionPosition:"bottom",captionDelay:500,fileExt:a,preloading:!1,uniqueImages:!1})}));
//# sourceMappingURL=album.js.map
