(function(t){var a=t("#m-1656292827994").children(".module");a.gfV3Product()})(window.GemQuery||jQuery),function(t){var a=t("#m-1656292827994-0").children(".module"),e=a.attr("data-effect"),d=a.attr("data-zoom-level"),i=a.attr("data-displaytype");a.gfV3ProductImage({effect:e,displayType:i,magnify:d})}(window.GemQuery||jQuery),function(t){var a=t("#m-1656292827980").children(".module");a.gfV4ProductImageList({onImageClicked:function(l,I){}});var e=a.attr("data-style");switch(e){case"slider":var d=a.data("navspeed"),i=a.data("navlg"),n=a.data("navmd"),o=a.data("navsm"),r=a.data("navxs"),s=a.data("collg"),c=a.data("colmd"),u=a.data("colsm"),g=a.data("colxs"),f=a.data("dotslg"),v=a.data("dotsmd"),p=a.data("dotssm"),h=a.data("dotsxs"),y=parseInt(a.data("mlg")),w=parseInt(a.data("mmd")),b=parseInt(a.data("msm")),C=parseInt(a.data("mxs")),Q=t(".gryffeditor").hasClass("editing")?"dev":"production";if(Q=="production")var m=a.data("loop");else var m=0;a.find(".gf_product-images-list").children().each(function(l){t(this).attr("data-position",l)}),a.find(".gf_product-images-list").owlCarousel({mouseDrag:!1,navSpeed:d,autoWidth:!1,loop:m,responsiveClass:!0,responsive:{0:{items:g,nav:r,dots:h,margin:C},768:{items:u,nav:o,dots:p,margin:b},992:{items:c,nav:n,dots:v,margin:w},1200:{items:s,nav:i,dots:f,margin:y}},onInitialized:function(){a.closest('.module-wrap[data-label="(P) Image List"]').addClass("gf-carousel-loaded")}});break}}(window.GemQuery||jQuery),function(t){var a=t("#m-1662029078071").children(".module");a.gfV4ProductImageList({onImageClicked:function(l,I){}});var e=a.attr("data-style");switch(e){case"slider":var d=a.data("navspeed"),i=a.data("navlg"),n=a.data("navmd"),o=a.data("navsm"),r=a.data("navxs"),s=a.data("collg"),c=a.data("colmd"),u=a.data("colsm"),g=a.data("colxs"),f=a.data("dotslg"),v=a.data("dotsmd"),p=a.data("dotssm"),h=a.data("dotsxs"),y=parseInt(a.data("mlg")),w=parseInt(a.data("mmd")),b=parseInt(a.data("msm")),C=parseInt(a.data("mxs")),Q=t(".gryffeditor").hasClass("editing")?"dev":"production";if(Q=="production")var m=a.data("loop");else var m=0;a.find(".gf_product-images-list").children().each(function(l){t(this).attr("data-position",l)}),a.find(".gf_product-images-list").owlCarousel({mouseDrag:!1,navSpeed:d,autoWidth:!1,loop:m,responsiveClass:!0,responsive:{0:{items:g,nav:r,dots:h,margin:C},768:{items:u,nav:o,dots:p,margin:b},992:{items:c,nav:n,dots:v,margin:w},1200:{items:s,nav:i,dots:f,margin:y}},onInitialized:function(){a.closest('.module-wrap[data-label="(P) Image List"]').addClass("gf-carousel-loaded")}});break}}(window.GemQuery||jQuery),function(t){var a=t("#m-1656292827974").children(".module");a.gfV3ProductPrice({displayCurrency:!0})}(window.GemQuery||jQuery),function(t){var a=t("#m-1660813186972").children(".module"),e=t(".gryffeditor").hasClass("editing")?"dev":"production",d=a.attr("data-blankoption"),i=a.attr("data-blankoptiontext"),n=a.attr("data-style");a.gfV3ProductVariants({mode:e,blankOption:d,blankOptionText:i,style:n,onVariantSelected:function(o,r){}})}(window.GemQuery||jQuery),function(t){var a=t("#m-1656292828030").children(".module");a.gfV3ProductCartButton({onItemAdded:function(e){}})}(window.GemQuery||jQuery),function(t){try{var a=t("#m-1656292828083").children(".module"),e=a.attr("data-single"),d=a.attr("data-openDefault"),i=a.attr("data-openTab"),n=t(".gryffeditor").hasClass("editing")?"dev":"production";(d==0||d=="0")&&(i="0"),a.gfAccordion({single:e,openTab:i,mode:n,onChanged:function(){a.find('.module-wrap[data-label="(P) Description"]').each(function(s,c){t(c).children(".module").data("gfv3productdesc")!=null&&t(c).children(".module").data("gfv3productdesc").initReadMore()})}});var o=a.attr("data-borderColor"),r=a.attr("data-borderSize");a.children("[data-accordion]").children("[data-control]").css("border-bottom",r+" solid "+o),a.children("[data-accordion]").children("[data-content]").children().css("border-bottom",r+" solid "+o)}catch(s){}}(window.GemQuery||jQuery),function(t){try{var a=t("#m-1656292827930").children(".module"),e=a.attr("data-single"),d=a.attr("data-openDefault"),i=a.attr("data-openTab"),n=t(".gryffeditor").hasClass("editing")?"dev":"production";(d==0||d=="0")&&(i="0"),a.gfAccordion({single:e,openTab:i,mode:n,onChanged:function(){a.find('.module-wrap[data-label="(P) Description"]').each(function(s,c){t(c).children(".module").data("gfv3productdesc")!=null&&t(c).children(".module").data("gfv3productdesc").initReadMore()})}});var o=a.attr("data-borderColor"),r=a.attr("data-borderSize");a.children("[data-accordion]").children("[data-control]").css("border-bottom",r+" solid "+o),a.children("[data-accordion]").children("[data-content]").children().css("border-bottom",r+" solid "+o)}catch(s){}}(window.GemQuery||jQuery),jQuery(function(){var t=jQuery(".gryffeditor").hasClass("editing")?"dev":"production",a=jQuery("#m-1610924930192").children(".module");if(t=="dev"){jQuery("#m-1610924930192").attr("data-name","").css("background-image","none").removeAttr("data-image");var e=!0,d=parent.jQuery("body").find("#gfFrame").contents().find("#module-1610924930192");if(d&&d.length>0){var i=d.find(".settings");try{var n="",o="";settings=JSON.parse(i.html());for(var r=0;r<settings.length;r++)settings[r].name=="name"&&(n=settings[r].default_value),settings[r].name=="image"&&(o=settings[r].default_value);o!=""&&(e=!1,jQuery("#m-1610924930192").css("background-image","url("+o+")").css("min-height","100px").attr("data-image","true")),n!=""&&n!="Custom Code"&&(e=!1,jQuery("#m-1610924930192").attr("data-name",n))}catch(s){console.log(s)}}e&&jQuery("#m-1610924930192").attr("data-name","Right click on the module, then choose Edit Html / Liquid option to start writing your custom code.")}}),function(t){try{var a=t("#m-1656292828050").children(".module"),e=a.data("navspeed"),d=a.data("autoplaytimeout"),i=a.data("autoplayhoverpause"),n=a.data("navlg"),o=a.data("navmd"),r=a.data("navsm"),s=a.data("navxs"),c=a.data("collg"),u=a.data("colmd"),g=a.data("colsm"),f=a.data("colxs"),v=a.data("dotslg"),p=a.data("dotsmd"),h=a.data("dotssm"),y=a.data("dotsxs"),w=parseInt(a.data("marginlg")),b=parseInt(a.data("marginmd")),C=parseInt(a.data("marginsm")),Q=parseInt(a.data("marginxs")),m=t(".gryffeditor").hasClass("editing")?"dev":"production";if(m=="production")var l=a.data("autoplay"),I=a.data("loop");else var l=0,I=0;var x=function(){a.owlCarousel({mouseDrag:!1,autoplayHoverPause:i,autoplay:l,autoplaySpeed:e,autoplayTimeout:d,loop:I,navSpeed:e,autoWidth:!1,responsiveClass:!0,responsive:{0:{items:f,nav:s,dots:y,margin:Q},768:{items:g,nav:r,dots:h,margin:C},992:{items:u,nav:o,dots:p,margin:b},1200:{items:c,nav:n,dots:v,margin:w}},onInitialized:function(){a.closest('.module-wrap[data-label="Carousel"]').addClass("gf-carousel-loaded"),t(window).trigger("resize")}})};a.parent().parent().closest('.module-wrap[data-label="Carousel"]').length>0?setTimeout(function(){x()},300):x()}catch(j){}}(window.GemQuery||jQuery),jQuery(function(){try{var t=jQuery("#m-1656292828096").children(".module"),a=t.attr("data-single"),e=t.attr("data-openDefault"),d=t.attr("data-openTab"),i=jQuery(".gryffeditor").hasClass("editing")?"dev":"production";(e==0||e=="0")&&(d="0"),t.gfAccordion({single:a,openTab:d,mode:i,onChanged:function(){t.find('.module-wrap[data-label="(P) Description"]').each(function(r,s){jQuery(s).children(".module").data("gfv3productdesc")!=null&&jQuery(s).children(".module").data("gfv3productdesc").initReadMore()})}});var n=t.attr("data-borderColor"),o=t.attr("data-borderSize");t.children("[data-accordion]").children("[data-control]").css("border-bottom",o+" solid "+n),t.children("[data-accordion]").children("[data-content]").children().css("border-bottom",o+" solid "+n)}catch(r){}}),jQuery(function(){var t=jQuery(".gryffeditor").hasClass("editing")?"dev":"production",a=jQuery("#m-1656292828128").children(".module");if(t=="dev"){jQuery("#m-1656292828128").attr("data-name","").css("background-image","none").removeAttr("data-image");var e=!0,d=parent.jQuery("body").find("#gfFrame").contents().find("#module-1656292828128");if(d&&d.length>0){var i=d.find(".settings");try{var n="",o="";settings=JSON.parse(i.html());for(var r=0;r<settings.length;r++)settings[r].name=="name"&&(n=settings[r].default_value),settings[r].name=="image"&&(o=settings[r].default_value);o!=""&&(e=!1,jQuery("#m-1656292828128").css("background-image","url("+o+")").css("min-height","100px").attr("data-image","true")),n!=""&&n!="Custom Code"&&(e=!1,jQuery("#m-1656292828128").attr("data-name",n))}catch(s){console.log(s)}}e&&jQuery("#m-1656292828128").attr("data-name","Right click on the module, then choose Edit Html / Liquid option to start writing your custom code.")}}),function(t){try{if(t().gfV2Lazyload){var a=t(window);a.gfV2Lazyload({delay:125})}}catch(e){console.error(e)}}(window.GemQuery||jQuery);
//# sourceMappingURL=/s/files/1/0357/4556/2761/t/20/assets/gem-page-product-1656593095.js.map?v=4708942655788771121671712746