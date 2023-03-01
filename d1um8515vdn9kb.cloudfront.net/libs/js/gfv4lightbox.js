(()=>{"use strict";var n=function(){return(n=Object.assign||function(e){for(var t,i=1,o=arguments.length;i<o;i++)for(var n in t=arguments[i])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)};Object.create;Object.create;function e(){Object.defineProperty(this,"gfFirstLoadVimeo",{enumerable:!0,configurable:!0,writable:!0,value:!0}),Object.defineProperty(this,"gfFirstLoadYoutube",{enumerable:!0,configurable:!0,writable:!0,value:!0}),Object.defineProperty(this,"gfLoadedVimeo",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"gfLoadedYoutube",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"gfLoadingVimeoList",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(this,"gfLoadingYoutubeList",{enumerable:!0,configurable:!0,writable:!0,value:[]}),window.gfListVideoPlayer={},window.gfCurrentVideoPlayer=""}Object.defineProperty(e.prototype,"newYoutube",{enumerable:!1,configurable:!0,writable:!0,value:function(e,t,i){window.gfListVideoPlayer[e]?(window.gfCurrentVideoPlayer=e,i(e)):window.gfListVideoPlayer[e]=new window.YT.Player(e,{videoId:t,playerVars:{autoplay:0,autohide:1,modestbranding:1,rel:0,showinfo:0,controls:1,disablekb:1,enablejsapi:0,iv_load_policy:3,hd:1},events:{onReady:function(){window.gfCurrentVideoPlayer=e,i&&i(e)}}})}}),Object.defineProperty(e.prototype,"loadYoutube",{enumerable:!1,configurable:!0,writable:!0,value:function(e,t,i){var o,n=this;i=i||function(){},this.gfLoadedYoutube||window.YT&&window.YT.loaded?this.newYoutube(e,t,i):(this.gfLoadingYoutubeList.push({targetId:e,videoId:t,callback:i}),o=function(){},window.onYouTubeIframeAPIReady&&(o=window.onYouTubeIframeAPIReady),window.onYouTubeIframeAPIReady=function(){n.gfLoadedYoutube=!0;for(var e=0;e<n.gfLoadingYoutubeList.length;e++)n.newYoutube(n.gfLoadingYoutubeList[e].targetId,n.gfLoadingYoutubeList[e].videoId,n.gfLoadingYoutubeList[e].callback);o()},this.gfFirstLoadYoutube&&(this.gfFirstLoadYoutube=!1,e="https://www.youtube.com/iframe_api",0==jQuery(document).find("script[src^='"+e+"']").length)&&((t=document.createElement("script")).onload=function(){},(i=document.getElementsByTagName("script")[0]).parentNode.insertBefore(t,i),t.src=e))}}),Object.defineProperty(e.prototype,"newVimeo",{enumerable:!1,configurable:!0,writable:!0,value:function(e,t,i,o){window.gfListVideoPlayer[e]?(window.gfCurrentVideoPlayer=e,i&&i(e)):(t={url:t,loop:!1,autoplay:!1,title:!1,byline:!1},Object(t).responsive=!0,o&&Object.keys(o).length&&(t=n(n({},t),o)),window.gfListVideoPlayer[e]=new window.Vimeo.Player(e,t),window.gfListVideoPlayer[e].on("loaded",function(){window.gfCurrentVideoPlayer=e,i&&i(e)}))}}),Object.defineProperty(e.prototype,"loadVimeo",{enumerable:!1,configurable:!0,writable:!0,value:function(e,t,i,o){var n=this;i=i||function(){},this.gfLoadedVimeo||window.Vimeo?this.newVimeo(e,t,i,o):(this.gfLoadingVimeoList.push({targetId:e,videoUrl:t,callback:i,args:o}),this.gfFirstLoadVimeo&&(this.gfFirstLoadVimeo=!1,e="https://player.vimeo.com/api/player.js",0==jQuery(document).find("script[src^='"+e+"']").length)&&((t=document.createElement("script")).onload=function(){n.gfLoadedVimeo=!0;for(var e=0;e<n.gfLoadingVimeoList.length;e++)n.newVimeo(n.gfLoadingVimeoList[e].targetId,n.gfLoadingVimeoList[e].videoUrl,n.gfLoadingVimeoList[e].callback,n.gfLoadingVimeoList[e].args)},(i=document.getElementsByTagName("script")[0]).parentNode.insertBefore(t,i),t.src=e))}}),Object.defineProperty(e.prototype,"newHtml5Video",{enumerable:!1,configurable:!0,writable:!0,value:function(e,t,i){if(window.gfListVideoPlayer[e])window.gfCurrentVideoPlayer=e,i&&i(e);else{for(var o=e+"-video",n='<video id="'+o+'" controls>',a=0;a<t.length;a++)n+='<source src="'+t[a].src+'" type="'+t[a].type+'">';n+="Your browser does not support HTML5 video.</video>";var r=$("#"+e);r.html(n),window.gfListVideoPlayer[e]=r.find("#"+o).on("loadstart",function(){window.gfCurrentVideoPlayer=e,i&&i(e)})}}}),Object.defineProperty(e.prototype,"pauseCurrentVideo",{enumerable:!1,configurable:!0,writable:!0,value:function(){var e;window.gfCurrentVideoPlayer&&window.gfListVideoPlayer&&(e=window.gfListVideoPlayer[window.gfCurrentVideoPlayer])&&(null!=e.pause?e.pause():e[0]&&null!=e[0].pause?e[0].pause():null!=e.pauseVideo&&e.pauseVideo())}}),Object.defineProperty(e.prototype,"playCurrentVideo",{enumerable:!1,configurable:!0,writable:!0,value:function(){var e;window.gfCurrentVideoPlayer&&window.gfListVideoPlayer&&(e=window.gfListVideoPlayer[window.gfCurrentVideoPlayer])&&(null!=e.play?e.play():e[0]&&null!=e[0].play?e[0].play():null!=e.playVideo&&e.playVideo())}});var t=new e,i=window.GemQuery||jQuery;const c=function(e){var t=new RegExp(/[`"'()#]/g);return e.replace(t,"_")};var w,g=function(e){var t=!1;return t=/\.(gif|jpe?g|tiff|png|webp|bmp)$/i.test(e)?!0:t},h=function(e){for(var t=[],i=0;i<e.length;i++)e[i]&&t.push(e[i]);return t};function p(e,t,i){if(e&&null!=t){var o=t;if(!!(n=e)&&(-1!=n.indexOf("cdn.shopify.com/s/files/")||-1!=n.indexOf("apps.shopifycdn.com/"))){var n="",a=e.split("?"),a=(a&&a.length&&2<=a.length&&(n=a[1]),a[0].split("/").pop()),a=null==a?void 0:a.split("."),r=null==a?void 0:a.pop();if(r&&-1!==["jfif"].indexOf(r))return e;for(var d,a=null==a?void 0:a.join("."),l=null==a?void 0:a.split("_"),s=(l&&2<=l.length&&(l=l.pop(),d=new RegExp(/(\d+)x(\d+)|(\d+)x|x(\d+)/,"gm"),l)&&d.test(l)&&""==l.replace(d,"")&&(null!=(l=null==a?void 0:a.split("_"))&&l.pop(),a=null==l?void 0:l.join("_")),e.split("?")[0].split("/")),u="",f=0;f<s.length-1;f++)u+=s[f]+"/";e=t?u+a+"_"+t+"."+r:u+a+"."+r,n&&(e=e+"?"+n)}!(d=e)||-1==d.indexOf("ucarecdn.com/")&&-1==d.indexOf("cdn.gempages.net/")||(e=function(e,t){var i,o=h(new URL(e).pathname.split("/")),n=o[0],n=(g(e)&&(i=o.pop()),o=new URL(e).pathname.includes("//")?new URL(e).origin+"//".concat(n):new URL(e).origin+"/".concat(n),new URL(e).pathname.split("/-"));if(n&&n.length){var a=n.length,r=n.slice(1,a);r&&r.length&&(n=r[r.length-1],i&&n.includes(i)&&(n=n.replace(i,"")),r[r.length-1]=n),i=i&&c(i),r.find(function(e){return e.includes("preview")})||r.unshift("/preview");for(var d=0;d<r.length;d++){var l,s=r[d];"/"==r[d][0]&&(s=r[d].slice(1,s.length)),(s="/"==r[d][s.length-1]?r[d].slice(0,s.length-1):s).includes("preview")&&(s=r[d],t.includes("x")?(l=t.split("x"))&&l.length&&1==(l=l.filter(function(e){return e.trim().length})).length&&(t=l[0]+"x"+l[0]):isNaN(parseInt(t))||(t=t+"x"+t),s="/preview/".concat(t),r&&1==r.length&&"/preview"==r[0]&&(s+="/"),r[d]=s)}e=o+"/-"+r.join("/-"),i&&!g(e)&&(a=!1,e=(a="/"==(n=r.join("/-")).charAt(n.length-1)?!0:a)?o+"/-"+n+"".concat(i):o+"/-"+r.join("/-")+"/".concat(i))}return e}(e,o))}return e}window.GEMMEDIA&&0!==Object.keys(window.GEMMEDIA).length||(window.GEMMEDIA=t),(w=i).gfV4Lightbox=function(e,t){var c,g,i=w(e),o={},h=(this.settings={},this);this.version="v4",this.init=function(){this.settings=w.extend({},o,t);var e=void(window.gfProductLightboxIndex=0)!==i.attr("data-gallery")?i.attr("data-gallery"):"0";return i.find(".gf_product-image-hover-zoom").remove(),e&&"1"==e&&(h.initLightbox(),i.find(".gf_product-image-thumb, .gf_product-video-thumb").off("click.gallery").on("click.gallery",function(){window.$itemThumbCurrent=w(this),h.setupLightbox()}),c)&&0<c.length&&(c.off("click.hide").on("click.hide",function(e){0==w(e.target).closest(".gf_featherlight-content").length&&h.hideLightbox()}),c.find(".gf_featherlight-close").off("click.close").on("click.close",function(e){e.preventDefault(),h.hideLightbox()}),c.find('[data-action="next"]').off("click.next").on("click.next",function(e){e.preventDefault();var e=".item",t=window.$itemThumbCurrent.closest(".item"),i=(t.parent().hasClass("owl-item")&&(t=t.parent(),e=".owl-item"),t.next(e));0==i.length&&(i=t.parent().find(e).first()),window.$itemThumbCurrent=i.find(".gf_product-image-thumb, .gf_product-video-thumb"),h.setupLightbox("next")}),c.find('[data-action="previous"]').off("click.prev").on("click.prev",function(e){e.preventDefault();var e=".item",t=window.$itemThumbCurrent.closest(".item"),i=(t.parent().hasClass("owl-item")&&(t=t.parent(),e=".owl-item"),t.prev(e));0==i.length&&(i=t.parent().find(e).last()),window.$itemThumbCurrent=i.find(".gf_product-image-thumb, .gf_product-video-thumb"),h.setupLightbox("previous")})),!1},this.setupLightbox=function(e){e=e||"";var t,i,o=window.$itemThumbCurrent.attr("data-video"),n=window.$itemThumbCurrent.attr("data-type"),a=window.$itemThumbCurrent.attr("data-video-host"),r=window.$itemThumbCurrent.attr("data-video-id");null!=o&&""!=o||n?(n=n||"external_video",(t={}).host=a,t.videoId=r,i=[],window.$itemThumbCurrent.find("source").each(function(){$(this).attr("src")&&i.push({src:$(this).attr("src")||"",type:$(this).attr("type")||"video/mp4"})}),t.sources=i,h.showLightbox(o,e,n,t)):(o=window.$itemThumbCurrent.attr("src")||window.$itemThumbCurrent.attr("data-image")||"",h.showLightbox(o,e,n="image"))},this.resize=function(e,t,i){var o;t&&i&&(e.css("width",t).css("height",i),1<(o=Math.max(t/(e.parent().width()-1),i/(e.parent().height()-1))))&&(o=i/Math.floor(i/o),e.css("width",t/o+"px").css("height",i/o+"px"))},this.showLightbox=function(i,o,e,t){var n=!1,a="",r=(o=o||"","image"!=(e=e||"image")&&(n=!0),t=t||{},c.find('[data-src="'+i+'"]'));if(t.host&&t.videoId&&(r=c.find('[data-video-id="'+t.videoId+'"]')),(r=t.sources&&t.sources[0]&&t.sources[0].src?c.find('[data-source="'+t.sources[0].src+'"]'):r).length){if(!(a=r.attr("id")||""))return}else{a="gf_featherlight-item-"+window.gfProductLightboxIndex,window.gfProductLightboxIndex++;var d=n?"gf_featherlight-video":"gf_featherlight-image",l='<div id="'+a+'" class="gf_featherlight-item '+d+'" data-src="'+i+'"></div>';t.host&&t.videoId&&(l='<div id="'+a+'" class="gf_featherlight-item '+d+'" data-video-id="'+t.videoId+'"></div>'),t.sources&&t.sources[0]&&t.sources[0].src&&(l='<div id="'+a+'" class="gf_featherlight-item '+d+'" data-source="'+t.sources[0].src+'"></div>'),g.append(l),r=g.find("#"+a)}if(window.GEMMEDIA.pauseCurrentVideo(),c&&0<c.length){c.show();var s,u,f=c.find(".gf_featherlight-item");if(f.css("opacity",0),r.attr("data-loaded"))f.css("display","none"),r.css("display","block"),!o||"next"!=o&&"previous"!=o?r.css("opacity",1):r.fadeTo(700,1),c.find(".gf_featherlight-loading").removeClass("active"),n?(window.gfCurrentVideoPlayer=a,window.GEMMEDIA.playCurrentVideo()):(s=r.attr("data-width"),u=r.attr("data-height"),h.resize(r,s,u),w(window).off("resize.lightbox").on("resize.lightbox",function(){window.setTimeout(function(){h.resize(r,s,u)},16)}));else{if(c.find(".gf_featherlight-loading").addClass("active"),r.attr("data-loading"))return;if(r.attr("data-loading",1),n){d=i;if(d&&-1!=d.indexOf("vimeo.com/"))return void window.GEMMEDIA.loadVimeo(a,d,function(){h.showWhenVideoLoaded(a,o)});if(d&&(-1!=d.indexOf("youtu.be")||-1!=d.indexOf("youtube.com")))return l="",n=[],void((l=(n=-1!=d.indexOf("youtu.be/")?d.split("youtu.be/"):d.split(/watch\?v=/)).length&&null!=n[1]?n[1].split(/&/)[0]:l)&&window.GEMMEDIA.loadYoutube(a,l,function(){h.showWhenVideoLoaded(a,o)}));n=t.host,l=t.videoId;if(!d&&"vimeo"==n&&l)return void window.GEMMEDIA.loadVimeo(a,l,function(){h.showWhenVideoLoaded(a,o)},{responsive:!1});if(!d&&"youtube"==n&&l)return void window.GEMMEDIA.loadYoutube(a,l,function(){h.showWhenVideoLoaded(a,o)});if(!d&&"video"==e)return void window.GEMMEDIA.newHtml5Video(a,t.sources,function(){h.showWhenVideoLoaded(a,o)})}else{i=p(i,"2048x2048");n=new Image;n.onload=function(){var e=this.width,t=this.height;r.attr("data-loaded",1),r.removeAttr("data-loading"),r.attr("data-width",e),r.attr("data-height",t),r.html("<img>"),r.find("img").attr("src",i),f.css("display","none"),r.css("display","block"),c.find(".gf_featherlight-loading").removeClass("active"),!o||"next"!=o&&"previous"!=o?r.css("opacity",1):r.fadeTo(700,1),h.resize(r,e,t),w(window).off("resize.lightbox").on("resize.lightbox",function(){h.resize(r,e,t)})},n.src=i}}}return!1},this.showWhenVideoLoaded=function(e,t){t=t||"";var i=c.find(".gf_featherlight-item"),o=$("#"+e);o.attr("data-loaded",1),o.removeAttr("data-loading"),i.css("opacity",0),i.css("display","none"),o.css("display","block"),!t||"next"!=t&&"previous"!=t?o.css("opacity",1):o.fadeTo(700,1),c.find(".gf_featherlight-loading").removeClass("active"),window.gfCurrentVideoPlayer=e,window.GEMMEDIA.playCurrentVideo()},this.hideLightbox=function(){var e;window.GEMMEDIA.pauseCurrentVideo(),c.hide(),"dev"==(w(".gryffeditor").hasClass("editing")?"dev":"production")&&(e=i.closest('[data-label="(P) Image List"]').attr("id"))&&null!=(e=w("body").find("#gfFrame").contents().find("#"+e)).data("gfmodule")&&e.data("gfmodule").openModuleSettings()},this.initLightbox=function(){var e,t=this.getLightBoxId();return 0==w("body").children(".gf_featherlight").length&&(e='<div id="'+t+'" class="gf_featherlight">',e+='<div class="gf_featherlight-content"><button class="gf_featherlight-close-icon gf_featherlight-close" aria-label="Close">✕</button><span class="gf_featherlight-previous"><span title="previous" data-action="previous"><svg viewBox="0 0 448 512" ><path d="M231.536 475.535l7.071-7.07c4.686-4.686 4.686-12.284 0-16.971L60.113 273H436c6.627 0 12-5.373 12-12v-10c0-6.627-5.373-12-12-12H60.113L238.607 60.506c4.686-4.686 4.686-12.284 0-16.971l-7.071-7.07c-4.686-4.686-12.284-4.686-16.97 0L3.515 247.515c-4.686 4.686-4.686 12.284 0 16.971l211.051 211.05c4.686 4.686 12.284 4.686 16.97-.001z" class=""></path></svg></span></span><span class="gf_featherlight-next"><span title="next" data-action="next"><svg viewBox="0 0 448 512"><path d="M216.464 36.465l-7.071 7.07c-4.686 4.686-4.686 12.284 0 16.971L387.887 239H12c-6.627 0-12 5.373-12 12v10c0 6.627 5.373 12 12 12h375.887L209.393 451.494c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l211.051-211.05c4.686-4.686 4.686-12.284 0-16.971L233.434 36.465c-4.686-4.687-12.284-4.687-16.97 0z" class=""></path></svg></span></span><div class="gf_featherlight-loading"><div></div><div></div><div></div><div></div></div></div></div>',w("body").append(e)),c=w("body").children("#".concat(t)),g=c.find(".gf_featherlight-content"),!1},this.getLightBoxId=function(){return"gf_featherlight-".concat(this.version)},this.init()},w.fn.gfV4Lightbox=function(t){return this.each(function(){var e;null==w(this).data("gfv4lightbox")&&(e=new w.gfV4Lightbox(this,t),w(this).data("gfv4lightbox",e))})}})();