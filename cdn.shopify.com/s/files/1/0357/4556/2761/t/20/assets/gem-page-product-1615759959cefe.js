jQuery(function(){var t=jQuery("#m-1592636460035").children(".module");t.gfV3Product()}),jQuery(function(){var t=jQuery("#m-1592636462018").children(".module"),n=t.attr("data-effect");t.gfV3ProductImage({effect:n})}),jQuery(function(){var t=jQuery("#m-1592636461636").children(".module");t.gfV3ProductImageList({onImageClicked:function(C,b){}});var n=t.attr("data-style");switch(n){case"slider":var a=t.data("navspeed"),r=t.data("navlg"),s=t.data("navmd"),d=t.data("navsm"),o=t.data("navxs"),e=t.data("collg"),i=t.data("colmd"),u=t.data("colsm"),l=t.data("colxs"),m=t.data("dotslg"),f=t.data("dotsmd"),g=t.data("dotssm"),v=t.data("dotsxs"),y=parseInt(t.data("mlg")),h=parseInt(t.data("mmd")),p=parseInt(t.data("msm")),Q=parseInt(t.data("mxs")),j=jQuery(".gryffeditor").hasClass("editing")?"dev":"production";if(j=="production")var c=t.data("loop");else var c=0;t.find(".gf_product-images-list").owlCarousel({mouseDrag:!1,navSpeed:a,autoWidth:!1,loop:c,responsiveClass:!0,responsive:{0:{items:l,nav:o,dots:v,margin:Q},768:{items:u,nav:d,dots:g,margin:p},992:{items:i,nav:s,dots:f,margin:h},1200:{items:e,nav:r,dots:m,margin:y}}});break}}),jQuery(function(){var t=jQuery("#m-1592636461080").children(".module");t.gfV3ProductPrice({displayCurrency:!0})}),function(t){var n=t("#m-1616197025651").children(".module"),a=n.attr("data-style"),r=n.attr("data-updateprice");n.gfV3ProductQuantity({style:a,updatePrice:r})}(window.GemQuery||jQuery),jQuery(function(){var t=jQuery("#m-1592636460091").children(".module");t.gfV3ProductCartButton({onItemAdded:function(n){}})}),jQuery(function(){var t=jQuery("#m-1603136072459").children(".module")}),jQuery(function(){try{var t=jQuery("#m-1595121363494").children(".module"),n=t.attr("data-single"),a=t.attr("data-openDefault"),r=t.attr("data-openTab"),s=jQuery(".gryffeditor").hasClass("editing")?"dev":"production";(a==0||a=="0")&&(r="0"),t.gfAccordion({single:n,openTab:r,mode:s,onChanged:function(){t.find('.module-wrap[data-label="(P) Description"]').each(function(e,i){jQuery(i).children(".module").data("gfv3productdesc")!=null&&jQuery(i).children(".module").data("gfv3productdesc").initReadMore()})}});var d=t.attr("data-borderColor"),o=t.attr("data-borderSize");t.children("[data-accordion]").children("[data-control]").css("border-bottom",o+" solid "+d),t.children("[data-accordion]").children("[data-content]").children().css("border-bottom",o+" solid "+d)}catch(e){}}),jQuery(function(){var t=jQuery("#m-1592697281060").children(".module");t.gfV3Product()}),jQuery(function(){var t=jQuery("#m-1592697355024").children(".module");t.gfV3ProductImageList({onImageClicked:function(C,b){}});var n=t.attr("data-style");switch(n){case"slider":var a=t.data("navspeed"),r=t.data("navlg"),s=t.data("navmd"),d=t.data("navsm"),o=t.data("navxs"),e=t.data("collg"),i=t.data("colmd"),u=t.data("colsm"),l=t.data("colxs"),m=t.data("dotslg"),f=t.data("dotsmd"),g=t.data("dotssm"),v=t.data("dotsxs"),y=parseInt(t.data("mlg")),h=parseInt(t.data("mmd")),p=parseInt(t.data("msm")),Q=parseInt(t.data("mxs")),j=jQuery(".gryffeditor").hasClass("editing")?"dev":"production";if(j=="production")var c=t.data("loop");else var c=0;t.find(".gf_product-images-list").owlCarousel({mouseDrag:!1,navSpeed:a,autoWidth:!1,loop:c,responsiveClass:!0,responsive:{0:{items:l,nav:o,dots:v,margin:Q},768:{items:u,nav:d,dots:g,margin:p},992:{items:i,nav:s,dots:f,margin:h},1200:{items:e,nav:r,dots:m,margin:y}}});break}}),jQuery(function(){var t=jQuery("#m-1592697281060-2").children(".module");t.gfV3ProductPrice({displayCurrency:!0})}),function(t){var n=t("#m-1616197041413").children(".module"),a=n.attr("data-style"),r=n.attr("data-updateprice");n.gfV3ProductQuantity({style:a,updatePrice:r})}(window.GemQuery||jQuery),jQuery(function(){var t=jQuery("#m-1592697281060-3").children(".module");t.gfV3ProductCartButton({onItemAdded:function(n){}})}),jQuery(function(){var t=jQuery("#m-1603137970545").children(".module")}),jQuery(function(){try{var t=jQuery("#m-1592821589934").children(".module"),n=t.attr("data-single"),a=t.attr("data-openDefault"),r=t.attr("data-openTab"),s=jQuery(".gryffeditor").hasClass("editing")?"dev":"production";(a==0||a=="0")&&(r="0"),t.gfAccordion({single:n,openTab:r,mode:s,onChanged:function(){t.find('.module-wrap[data-label="(P) Description"]').each(function(e,i){jQuery(i).children(".module").data("gfv3productdesc")!=null&&jQuery(i).children(".module").data("gfv3productdesc").initReadMore()})}});var d=t.attr("data-borderColor"),o=t.attr("data-borderSize");t.children("[data-accordion]").children("[data-control]").css("border-bottom",o+" solid "+d),t.children("[data-accordion]").children("[data-content]").children().css("border-bottom",o+" solid "+d)}catch(e){}}),jQuery(function(){var t=jQuery(".gryffeditor").hasClass("editing")?"dev":"production",n=jQuery("#m-1616115425528").children(".module");if(t=="dev"){jQuery("#m-1616115425528").attr("data-name","").css("background-image","none").removeAttr("data-image");var a=!0,r=parent.jQuery("body").find("#gfFrame").contents().find("#module-1616115425528");if(r&&r.length>0){var s=r.find(".settings");try{var d="",o="";settings=JSON.parse(s.html());for(var e=0;e<settings.length;e++)settings[e].name=="name"&&(d=settings[e].default_value),settings[e].name=="image"&&(o=settings[e].default_value);o!=""&&(a=!1,jQuery("#m-1616115425528").css("background-image","url("+o+")").css("min-height","100px").attr("data-image","true")),d!=""&&d!="Custom Code"&&(a=!1,jQuery("#m-1616115425528").attr("data-name",d))}catch(i){console.log(i)}}a&&jQuery("#m-1616115425528").attr("data-name","Right click on the module, then choose Edit Html / Liquid option to start writing your custom code.")}}),jQuery(function(){var t=jQuery(".gryffeditor").hasClass("editing")?"dev":"production",n=jQuery("#m-1616115235030").children(".module");if(t=="dev"){jQuery("#m-1616115235030").attr("data-name","").css("background-image","none").removeAttr("data-image");var a=!0,r=parent.jQuery("body").find("#gfFrame").contents().find("#module-1616115235030");if(r&&r.length>0){var s=r.find(".settings");try{var d="",o="";settings=JSON.parse(s.html());for(var e=0;e<settings.length;e++)settings[e].name=="name"&&(d=settings[e].default_value),settings[e].name=="image"&&(o=settings[e].default_value);o!=""&&(a=!1,jQuery("#m-1616115235030").css("background-image","url("+o+")").css("min-height","100px").attr("data-image","true")),d!=""&&d!="Custom Code"&&(a=!1,jQuery("#m-1616115235030").attr("data-name",d))}catch(i){console.log(i)}}a&&jQuery("#m-1616115235030").attr("data-name","Right click on the module, then choose Edit Html / Liquid option to start writing your custom code.")}}),jQuery(function(){var t=jQuery(".gryffeditor").hasClass("editing")?"dev":"production",n=jQuery("#m-1588484871887").children(".module");if(t=="dev"){jQuery("#m-1588484871887").attr("data-name","").css("background-image","none").removeAttr("data-image");var a=!0,r=parent.jQuery("body").find("#gfFrame").contents().find("#module-1588484871887");if(r&&r.length>0){var s=r.find(".settings");try{var d="",o="";settings=JSON.parse(s.html());for(var e=0;e<settings.length;e++)settings[e].name=="name"&&(d=settings[e].default_value),settings[e].name=="image"&&(o=settings[e].default_value);o!=""&&(a=!1,jQuery("#m-1588484871887").css("background-image","url("+o+")").css("min-height","100px").attr("data-image","true")),d!=""&&d!="Custom Code"&&(a=!1,jQuery("#m-1588484871887").attr("data-name",d))}catch(i){console.log(i)}}a&&jQuery("#m-1588484871887").attr("data-name","Right click on the module, then choose Edit Html / Liquid option to start writing your custom code.")}}),jQuery(function(){try{var t=jQuery("#m-1588479724299").children(".module"),n=t.attr("data-single"),a=t.attr("data-openDefault"),r=t.attr("data-openTab"),s=jQuery(".gryffeditor").hasClass("editing")?"dev":"production";(a==0||a=="0")&&(r="0"),t.gfAccordion({single:n,openTab:r,mode:s,onChanged:function(){t.find('.module-wrap[data-label="(P) Description"]').each(function(e,i){jQuery(i).children(".module").data("gfv3productdesc")!=null&&jQuery(i).children(".module").data("gfv3productdesc").initReadMore()})}});var d=t.attr("data-borderColor"),o=t.attr("data-borderSize");t.children("[data-accordion]").children("[data-control]").css("border-bottom",o+" solid "+d),t.children("[data-accordion]").children("[data-content]").children().css("border-bottom",o+" solid "+d)}catch(e){}}),function(t){try{if(t().gfV2Lazyload){var n=t(window);n.gfV2Lazyload({delay:125})}}catch(a){console.error(a)}}(window.GemQuery||jQuery);
//# sourceMappingURL=/s/files/1/0357/4556/2761/t/20/assets/gem-page-product-1615759959.js.map?v=107012449873659392881671712744
