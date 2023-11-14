(function(){
    jQuery(document).ready(function(){
        jQuery('.form_ty_subscribe').submit(function (e) {
            e.preventDefault();

            var div_submit = jQuery(this).closest('div');
            var mainForm = jQuery(div_submit).closest('form');

            var error = false;

            var formData = new FormData();

            formData.append('name', jQuery(this).find('#name-tp').val());
            formData.append('email', jQuery(this).find('#email-tp').val());
            formData.append('checkbox', jQuery(this).find('#privacy').val());

            jQuery.ajax({
                url: ty_subscribe_script.ajaxurl_handle,
                type: 'POST',
                data: formData,
                nonce: ty_subscribe_script.nonce,
                cache: false,
                processData: false,
                contentType: false,
                beforeSend: function(){
                    jQuery('.wrapper_typical_subscribe').animate({
                        opacity: 0
                    }, 2000 );
                },
                success: function(result){
                    jQuery('.wrapper_typical_subscribe_message').append(result);
                    jQuery('.wrapper_typical_subscribe_message').animate({
                        opacity: 1
                    },2000 );
                    jQuery('.form_ty_subscribe').trigger("reset");
                    setTimeout(function(){
                        jQuery('.wrapper_typical_subscribe_message').animate({
                            opacity: 0
                        },2000 );
                        jQuery('.wrapper_typical_subscribe').animate({
                            opacity: 1
                        }, 2000 );
                        jQuery('.wrapper_typical_subscribe_message').remove();
                    }, 4000);
                }
            });
        });
    });
})();