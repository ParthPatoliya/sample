(function(t){var a=t("#m-1620015573450").children(".module");a.gfV3Product()})(window.GemQuery||jQuery),function(t){var a=t("#m-1620015573450-0").children(".module"),r=a.attr("data-effect"),d=a.attr("data-zoom-level"),n=a.attr("data-displaytype");a.gfV3ProductImage({effect:r,displayType:n,magnify:d})}(window.GemQuery||jQuery),function(t){var a=t("#m-1620015573435").children(".module");a.gfV4ProductImageList({onImageClicked:function(l,x){}});var r=a.attr("data-style");switch(r){case"slider":var d=a.data("navspeed"),n=a.data("navlg"),o=a.data("navmd"),i=a.data("navsm"),e=a.data("navxs"),s=a.data("collg"),c=a.data("colmd"),f=a.data("colsm"),v=a.data("colxs"),g=a.data("dotslg"),m=a.data("dotsmd"),h=a.data("dotssm"),p=a.data("dotsxs"),y=parseInt(a.data("mlg")),w=parseInt(a.data("mmd")),Q=parseInt(a.data("msm")),b=parseInt(a.data("mxs")),C=t(".gryffeditor").hasClass("editing")?"dev":"production";if(C=="production")var u=a.data("loop");else var u=0;a.find(".gf_product-images-list").children().each(function(l){t(this).attr("data-position",l)}),a.find(".gf_product-images-list").owlCarousel({mouseDrag:!1,navSpeed:d,autoWidth:!1,loop:u,responsiveClass:!0,responsive:{0:{items:v,nav:e,dots:p,margin:b},768:{items:f,nav:i,dots:h,margin:Q},992:{items:c,nav:o,dots:m,margin:w},1200:{items:s,nav:n,dots:g,margin:y}},onInitialized:function(){a.closest('.module-wrap[data-label="(P) Image List"]').addClass("gf-carousel-loaded")}});break}}(window.GemQuery||jQuery),function(t){var a=t("#m-1620015573461").children(".module");a.gfV3ProductPrice({displayCurrency:!0})}(window.GemQuery||jQuery),function(t){var a=t("#m-1620015573469").children(".module"),r=a.attr("data-swatch-text")!=null?a.attr("data-swatch-text"):"1";a.gfV3ProductSwatches({swatchText:r,onSwatchSelected:function(d,n){}})}(window.GemQuery||jQuery),function(t){var a=t("#m-1620015573320").children(".module");a.gfV3ProductCartButton({onItemAdded:function(r){}})}(window.GemQuery||jQuery),function(t){try{var a=t("#m-1620015573409").children(".module"),r=a.attr("data-single"),d=a.attr("data-openDefault"),n=a.attr("data-openTab"),o=t(".gryffeditor").hasClass("editing")?"dev":"production";(d==0||d=="0")&&(n="0"),a.gfAccordion({single:r,openTab:n,mode:o,onChanged:function(){a.find('.module-wrap[data-label="(P) Description"]').each(function(s,c){t(c).children(".module").data("gfv3productdesc")!=null&&t(c).children(".module").data("gfv3productdesc").initReadMore()})}});var i=a.attr("data-borderColor"),e=a.attr("data-borderSize");a.children("[data-accordion]").children("[data-control]").css("border-bottom",e+" solid "+i),a.children("[data-accordion]").children("[data-content]").children().css("border-bottom",e+" solid "+i)}catch(s){}}(window.GemQuery||jQuery),function(t){try{var a=t("#m-1620015573406").children(".module"),r=a.attr("data-single"),d=a.attr("data-openDefault"),n=a.attr("data-openTab"),o=t(".gryffeditor").hasClass("editing")?"dev":"production";(d==0||d=="0")&&(n="0"),a.gfAccordion({single:r,openTab:n,mode:o,onChanged:function(){a.find('.module-wrap[data-label="(P) Description"]').each(function(s,c){t(c).children(".module").data("gfv3productdesc")!=null&&t(c).children(".module").data("gfv3productdesc").initReadMore()})}});var i=a.attr("data-borderColor"),e=a.attr("data-borderSize");a.children("[data-accordion]").children("[data-control]").css("border-bottom",e+" solid "+i),a.children("[data-accordion]").children("[data-content]").children().css("border-bottom",e+" solid "+i)}catch(s){}}(window.GemQuery||jQuery),function(t){try{var a=t("#m-1620015573383").children(".module"),r=a.attr("data-single"),d=a.attr("data-openDefault"),n=a.attr("data-openTab"),o=t(".gryffeditor").hasClass("editing")?"dev":"production";(d==0||d=="0")&&(n="0"),a.gfAccordion({single:r,openTab:n,mode:o,onChanged:function(){a.find('.module-wrap[data-label="(P) Description"]').each(function(s,c){t(c).children(".module").data("gfv3productdesc")!=null&&t(c).children(".module").data("gfv3productdesc").initReadMore()})}});var i=a.attr("data-borderColor"),e=a.attr("data-borderSize");a.children("[data-accordion]").children("[data-control]").css("border-bottom",e+" solid "+i),a.children("[data-accordion]").children("[data-content]").children().css("border-bottom",e+" solid "+i)}catch(s){}}(window.GemQuery||jQuery),function(t){}(window.GemQuery||jQuery),function(t){}(window.GemQuery||jQuery),function(t){}(window.GemQuery||jQuery),function(t){}(window.GemQuery||jQuery),function(t){}(window.GemQuery||jQuery),function(t){try{var a=t("#m-1635196154909").children(".module"),r=a.data("navspeed"),d=a.data("autoplaytimeout"),n=a.data("autoplayhoverpause"),o=a.data("navlg"),i=a.data("navmd"),e=a.data("navsm"),s=a.data("navxs"),c=a.data("collg"),f=a.data("colmd"),v=a.data("colsm"),g=a.data("colxs"),m=a.data("dotslg"),h=a.data("dotsmd"),p=a.data("dotssm"),y=a.data("dotsxs"),w=parseInt(a.data("marginlg")),Q=parseInt(a.data("marginmd")),b=parseInt(a.data("marginsm")),C=parseInt(a.data("marginxs")),u=t(".gryffeditor").hasClass("editing")?"dev":"production";if(u=="production")var l=a.data("autoplay"),x=a.data("loop");else var l=0,x=0;var G=function(){a.owlCarousel({mouseDrag:!1,autoplayHoverPause:n,autoplay:l,autoplaySpeed:r,autoplayTimeout:d,loop:x,navSpeed:r,autoWidth:!1,responsiveClass:!0,responsive:{0:{items:g,nav:s,dots:y,margin:C},768:{items:v,nav:e,dots:p,margin:b},992:{items:f,nav:i,dots:h,margin:Q},1200:{items:c,nav:o,dots:m,margin:w}},onInitialized:function(){a.closest('.module-wrap[data-label="Carousel"]').addClass("gf-carousel-loaded"),t(window).trigger("resize")}})};a.parent().parent().closest('.module-wrap[data-label="Carousel"]').length>0?setTimeout(function(){G()},300):G()}catch(I){}}(window.GemQuery||jQuery),function(t){var a=t("#m-1620162822064").children(".module");a.gfV3Product()}(window.GemQuery||jQuery),function(t){var a=t("#m-1620162822177").children(".module");a.gfV4ProductImageList({onImageClicked:function(l,x){}});var r=a.attr("data-style");switch(r){case"slider":var d=a.data("navspeed"),n=a.data("navlg"),o=a.data("navmd"),i=a.data("navsm"),e=a.data("navxs"),s=a.data("collg"),c=a.data("colmd"),f=a.data("colsm"),v=a.data("colxs"),g=a.data("dotslg"),m=a.data("dotsmd"),h=a.data("dotssm"),p=a.data("dotsxs"),y=parseInt(a.data("mlg")),w=parseInt(a.data("mmd")),Q=parseInt(a.data("msm")),b=parseInt(a.data("mxs")),C=t(".gryffeditor").hasClass("editing")?"dev":"production";if(C=="production")var u=a.data("loop");else var u=0;a.find(".gf_product-images-list").children().each(function(l){t(this).attr("data-position",l)}),a.find(".gf_product-images-list").owlCarousel({mouseDrag:!1,navSpeed:d,autoWidth:!1,loop:u,responsiveClass:!0,responsive:{0:{items:v,nav:e,dots:p,margin:b},768:{items:f,nav:i,dots:h,margin:Q},992:{items:c,nav:o,dots:m,margin:w},1200:{items:s,nav:n,dots:g,margin:y}},onInitialized:function(){a.closest('.module-wrap[data-label="(P) Image List"]').addClass("gf-carousel-loaded")}});break}}(window.GemQuery||jQuery),function(t){var a=t("#m-1620162822141").children(".module");a.gfV3ProductPrice({displayCurrency:!0})}(window.GemQuery||jQuery),function(t){var a=t("#m-1620162822156").children(".module"),r=a.attr("data-swatch-text")!=null?a.attr("data-swatch-text"):"1";a.gfV3ProductSwatches({swatchText:r,onSwatchSelected:function(d,n){}})}(window.GemQuery||jQuery),function(t){var a=t("#m-1620162822139").children(".module");a.gfV3ProductCartButton({onItemAdded:function(r){}})}(window.GemQuery||jQuery),function(t){try{var a=t("#m-1620162822119").children(".module"),r=a.attr("data-single"),d=a.attr("data-openDefault"),n=a.attr("data-openTab"),o=t(".gryffeditor").hasClass("editing")?"dev":"production";(d==0||d=="0")&&(n="0"),a.gfAccordion({single:r,openTab:n,mode:o,onChanged:function(){a.find('.module-wrap[data-label="(P) Description"]').each(function(s,c){t(c).children(".module").data("gfv3productdesc")!=null&&t(c).children(".module").data("gfv3productdesc").initReadMore()})}});var i=a.attr("data-borderColor"),e=a.attr("data-borderSize");a.children("[data-accordion]").children("[data-control]").css("border-bottom",e+" solid "+i),a.children("[data-accordion]").children("[data-content]").children().css("border-bottom",e+" solid "+i)}catch(s){}}(window.GemQuery||jQuery),function(t){try{var a=t("#m-1620162822154").children(".module"),r=a.attr("data-single"),d=a.attr("data-openDefault"),n=a.attr("data-openTab"),o=t(".gryffeditor").hasClass("editing")?"dev":"production";(d==0||d=="0")&&(n="0"),a.gfAccordion({single:r,openTab:n,mode:o,onChanged:function(){a.find('.module-wrap[data-label="(P) Description"]').each(function(s,c){t(c).children(".module").data("gfv3productdesc")!=null&&t(c).children(".module").data("gfv3productdesc").initReadMore()})}});var i=a.attr("data-borderColor"),e=a.attr("data-borderSize");a.children("[data-accordion]").children("[data-control]").css("border-bottom",e+" solid "+i),a.children("[data-accordion]").children("[data-content]").children().css("border-bottom",e+" solid "+i)}catch(s){}}(window.GemQuery||jQuery),function(t){try{var a=t("#m-1620162822125").children(".module"),r=a.attr("data-single"),d=a.attr("data-openDefault"),n=a.attr("data-openTab"),o=t(".gryffeditor").hasClass("editing")?"dev":"production";(d==0||d=="0")&&(n="0"),a.gfAccordion({single:r,openTab:n,mode:o,onChanged:function(){a.find('.module-wrap[data-label="(P) Description"]').each(function(s,c){t(c).children(".module").data("gfv3productdesc")!=null&&t(c).children(".module").data("gfv3productdesc").initReadMore()})}});var i=a.attr("data-borderColor"),e=a.attr("data-borderSize");a.children("[data-accordion]").children("[data-control]").css("border-bottom",e+" solid "+i),a.children("[data-accordion]").children("[data-content]").children().css("border-bottom",e+" solid "+i)}catch(s){}}(window.GemQuery||jQuery),function(t){}(window.GemQuery||jQuery),function(t){}(window.GemQuery||jQuery),function(t){}(window.GemQuery||jQuery),function(t){}(window.GemQuery||jQuery),function(t){try{var a=t("#m-1635196346383").children(".module"),r=a.data("navspeed"),d=a.data("autoplaytimeout"),n=a.data("autoplayhoverpause"),o=a.data("navlg"),i=a.data("navmd"),e=a.data("navsm"),s=a.data("navxs"),c=a.data("collg"),f=a.data("colmd"),v=a.data("colsm"),g=a.data("colxs"),m=a.data("dotslg"),h=a.data("dotsmd"),p=a.data("dotssm"),y=a.data("dotsxs"),w=parseInt(a.data("marginlg")),Q=parseInt(a.data("marginmd")),b=parseInt(a.data("marginsm")),C=parseInt(a.data("marginxs")),u=t(".gryffeditor").hasClass("editing")?"dev":"production";if(u=="production")var l=a.data("autoplay"),x=a.data("loop");else var l=0,x=0;var G=function(){a.owlCarousel({mouseDrag:!1,autoplayHoverPause:n,autoplay:l,autoplaySpeed:r,autoplayTimeout:d,loop:x,navSpeed:r,autoWidth:!1,responsiveClass:!0,responsive:{0:{items:g,nav:s,dots:y,margin:C},768:{items:v,nav:e,dots:p,margin:b},992:{items:f,nav:i,dots:h,margin:Q},1200:{items:c,nav:o,dots:m,margin:w}},onInitialized:function(){a.closest('.module-wrap[data-label="Carousel"]').addClass("gf-carousel-loaded"),t(window).trigger("resize")}})};a.parent().parent().closest('.module-wrap[data-label="Carousel"]').length>0?setTimeout(function(){G()},300):G()}catch(I){}}(window.GemQuery||jQuery),function(t){}(window.GemQuery||jQuery),jQuery(function(){try{var t=jQuery("#m-1620015573485").children(".module"),a=t.attr("data-single"),r=t.attr("data-openDefault"),d=t.attr("data-openTab"),n=jQuery(".gryffeditor").hasClass("editing")?"dev":"production";(r==0||r=="0")&&(d="0"),t.gfAccordion({single:a,openTab:d,mode:n,onChanged:function(){t.find('.module-wrap[data-label="(P) Description"]').each(function(e,s){jQuery(s).children(".module").data("gfv3productdesc")!=null&&jQuery(s).children(".module").data("gfv3productdesc").initReadMore()})}});var o=t.attr("data-borderColor"),i=t.attr("data-borderSize");t.children("[data-accordion]").children("[data-control]").css("border-bottom",i+" solid "+o),t.children("[data-accordion]").children("[data-content]").children().css("border-bottom",i+" solid "+o)}catch(e){}}),jQuery(function(){var t=jQuery(".gryffeditor").hasClass("editing")?"dev":"production",a=jQuery("#m-1620015573316").children(".module");if(t=="dev"){jQuery("#m-1620015573316").attr("data-name","").css("background-image","none").removeAttr("data-image");var r=!0,d=parent.jQuery("body").find("#gfFrame").contents().find("#module-1620015573316");if(d&&d.length>0){var n=d.find(".settings");try{var o="",i="";settings=JSON.parse(n.html());for(var e=0;e<settings.length;e++)settings[e].name=="name"&&(o=settings[e].default_value),settings[e].name=="image"&&(i=settings[e].default_value);i!=""&&(r=!1,jQuery("#m-1620015573316").css("background-image","url("+i+")").css("min-height","100px").attr("data-image","true")),o!=""&&o!="Custom Code"&&(r=!1,jQuery("#m-1620015573316").attr("data-name",o))}catch(s){console.log(s)}}r&&jQuery("#m-1620015573316").attr("data-name","Right click on the module, then choose Edit Html / Liquid option to start writing your custom code.")}}),function(t){try{if(t().gfV2Lazyload){var a=t(window);a.gfV2Lazyload({delay:125})}}catch(r){console.error(r)}}(window.GemQuery||jQuery);
//# sourceMappingURL=/s/files/1/0357/4556/2761/t/20/assets/gem-page-product-1635204521.js.map?v=82664874050508361521671712765
