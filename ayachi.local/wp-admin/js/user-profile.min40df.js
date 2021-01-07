/*! This file is auto-generated */
!function(r){var e,a,t,n,i,o,d,l,p,c,u=!1,h=wp.i18n.__;function w(){"function"==typeof zxcvbn?(!a.val()||c.hasClass("is-open")?(a.val(a.data("pw")),a.trigger("pwupdate")):v(),b(),1!==parseInt(o.data("start-masked"),10)?a.attr("type","text"):o.trigger("click"),r("#pw-weak-text-label").text(h("Confirm use of weak password"))):setTimeout(w,50)}function f(s){o.attr({"aria-label":h(s?"Show password":"Hide password")}).find(".text").text(h(s?"Show":"Hide")).end().find(".dashicons").removeClass(s?"dashicons-hidden":"dashicons-visibility").addClass(s?"dashicons-visibility":"dashicons-hidden")}function m(){var s;e=r(".user-pass1-wrap, .user-pass-wrap"),r(".user-pass2-wrap").hide(),l=r("#submit, #wp-submit").on("click",function(){u=!1}),d=l.add(" #createusersub"),n=r(".pw-weak"),(i=n.find(".pw-checkbox")).change(function(){d.prop("disabled",!i.prop("checked"))}),(a=r("#pass1")).length?(p=a.val(),1===parseInt(a.data("reveal"),10)&&w(),a.on("input pwupdate",function(){a.val()!==p&&(p=a.val(),a.removeClass("short bad good strong"),b())})):a=r("#user_pass"),t=r("#pass2").on("input",function(){0<t.val().length&&(a.val(t.val()),t.val(""),p="",a.trigger("pwupdate"))}),a.is(":hidden")&&(a.prop("disabled",!0),t.prop("disabled",!0)),c=e.find(".wp-pwd"),s=e.find("button.wp-generate-pw"),(o=e.find(".wp-hide-pw")).show().on("click",function(){"password"===a.attr("type")?(a.attr("type","text"),f(!1)):(a.attr("type","password"),f(!0))}),s.show(),s.on("click",function(){u=!0,s.attr("aria-expanded","true"),c.show().addClass("is-open"),a.attr("disabled",!1),t.attr("disabled",!1),w(),f(!1),wp.ajax.post("generate-password").done(function(s){a.data("pw",s)})}),e.find("button.wp-cancel-pw").on("click",function(){u=!1,a.prop("disabled",!0),t.prop("disabled",!0),a.val("").trigger("pwupdate"),f(!1),c.hide().removeClass("is-open"),d.prop("disabled",!1)}),e.closest("form").on("submit",function(){u=!1,a.prop("disabled",!1),t.prop("disabled",!1),t.val(a.val())})}function v(){var s=r("#pass1").val();if(r("#pass-strength-result").removeClass("short bad good strong empty"),s&&""!==s.trim())switch(wp.passwordStrength.meter(s,wp.passwordStrength.userInputDisallowedList(),s)){case-1:r("#pass-strength-result").addClass("bad").html(pwsL10n.unknown);break;case 2:r("#pass-strength-result").addClass("bad").html(pwsL10n.bad);break;case 3:r("#pass-strength-result").addClass("good").html(pwsL10n.good);break;case 4:r("#pass-strength-result").addClass("strong").html(pwsL10n.strong);break;case 5:r("#pass-strength-result").addClass("short").html(pwsL10n.mismatch);break;default:r("#pass-strength-result").addClass("short").html(pwsL10n.short)}else r("#pass-strength-result").addClass("empty").html("&nbsp;")}function b(){var s=r("#pass-strength-result")[0];s.className&&(a.addClass(s.className),r(s).is(".short, .bad")?(i.prop("checked")||d.prop("disabled",!0),n.show()):(r(s).is(".empty")?(d.prop("disabled",!0),i.prop("checked",!1)):d.prop("disabled",!1),n.hide()))}r(document).ready(function(){var s,a,t,n,i=r("#display_name"),e=i.val(),o=r("#wp-admin-bar-my-account").find(".display-name");r("#pass1").val("").on("input pwupdate",v),r("#pass-strength-result").show(),r(".color-palette").click(function(){r(this).siblings('input[name="admin_color"]').prop("checked",!0)}),i.length&&(r("#first_name, #last_name, #nickname").bind("blur.user_profile",function(){var t=[],n={display_nickname:r("#nickname").val()||"",display_username:r("#user_login").val()||"",display_firstname:r("#first_name").val()||"",display_lastname:r("#last_name").val()||""};n.display_firstname&&n.display_lastname&&(n.display_firstlast=n.display_firstname+" "+n.display_lastname,n.display_lastfirst=n.display_lastname+" "+n.display_firstname),r.each(r("option",i),function(s,e){t.push(e.value)}),r.each(n,function(s,e){if(e){var a=e.replace(/<\/?[a-z][^>]*>/gi,"");n[s].length&&-1===r.inArray(a,t)&&(t.push(a),r("<option />",{text:a}).appendTo(i))}})}),i.on("change",function(){if(t===n){var s=r.trim(this.value)||e;o.text(s)}})),s=r("#color-picker"),a=r("#colors-css"),t=r("input#user_id").val(),n=r('input[name="checkuser_id"]').val(),s.on("click.colorpicker",".color-option",function(){var s,e=r(this);if(!e.hasClass("selected")&&(e.siblings(".selected").removeClass("selected"),e.addClass("selected").find('input[type="radio"]').prop("checked",!0),t===n)){if(0===a.length&&(a=r('<link rel="stylesheet" />').appendTo("head")),a.attr("href",e.children(".css_url").val()),"undefined"!=typeof wp&&wp.svgPainter){try{s=r.parseJSON(e.children(".icon_colors").val())}catch(s){}s&&(wp.svgPainter.setColors(s),wp.svgPainter.paint())}r.post(ajaxurl,{action:"save-user-color-scheme",color_scheme:e.children('input[name="admin_color"]').val(),nonce:r("#color-nonce").val()}).done(function(s){s.success&&r("body").removeClass(s.data.previousScheme).addClass(s.data.currentScheme)})}}),m()}),r("#destroy-sessions").on("click",function(s){var e=r(this);wp.ajax.post("destroy-sessions",{nonce:r("#_wpnonce").val(),user_id:r("#user_id").val()}).done(function(s){e.prop("disabled",!0),e.siblings(".notice").remove(),e.before('<div class="notice notice-success inline"><p>'+s.message+"</p></div>")}).fail(function(s){e.siblings(".notice").remove(),e.before('<div class="notice notice-error inline"><p>'+s.message+"</p></div>")}),s.preventDefault()}),window.generatePassword=w,r(window).on("beforeunload",function(){if(!0===u)return h("Your new password has not been saved.")})}(jQuery);