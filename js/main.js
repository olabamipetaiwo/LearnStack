window.addEventListener('load',function() {
    document.querySelector('.loading').classList.add('loaded');
});


$(document).ready(function(){ 
    var role = 'customer';

    function showPanel(n) {
        $tab =  $('.tab-'+n);
        $tab.siblings().removeClass('block').removeClass('fade-in')
        $tab.addClass('block').outerWidth();
        $tab.addClass('fade-in');
    }  
    
    function clearData() {
        $("#email").val('');
        $("#email").val('');
        role = '';
    }

    $('input[name=role]').click(function() {
        role = $(this).val();
    });


    $('#signupform').on('submit',function(e) {
        e.preventDefault();
        var ok = $('.parsley-error').length === 0;
        if(ok) {
            $('li.2').addClass('active').siblings().removeClass('active');
            $('.alert__box').html('');
            showPanel(2);
        }else {
            $('.alert__box').html(`
                <div class="alert alert-danger text-center">
                    <strong class="text-center">Error!</strong> Please read the error messages carefully and make necessary changes.
                </div>
            `);
        }
       
    });

    $('#prevBtn').on('click',function() {
        $('li.1').addClass('active');
        $('li.1').siblings().removeClass('active');
        showPanel(1);
    });

    $('#register').on('click',function() {
    
        // Comment out block A to prevent success state
        // Start of Block A
        $('#chosenRole').text(role);
        showPanel(3);

        setTimeout(() => {
            window.location.replace(`${role}/login.html`);
        },5000);
        //Start of Block B

        // UnComment  block b to replicate error state
        // Start of Block B
        // var email =    $("#email").val();
        // var password = $("#password").val();

        // $.ajax({
        //     type: "POST",
        //     url: "server.php",
        //     data:{
        //         'type':'signup',
        //         'email':email,
        //         'password':password,
        //         'role':role
        //     },
        //     beforeSend: function(){
        //     },
        //     success:function (data) {
        //         $('li.3').addClass('active');
        //         $('li.3').siblings().removeClass('active');
        //         $('#chosenRole').text(role)
        //         showPanel(3);
        //         setTimeout(() => {
        //             window.location.replace(`${role}/login.html`);
        //         },5000);
        //     },
        //     error: function (err) {
        //         $('li.1').addClass('active');
        //         $('li.1').siblings().removeClass('active');
        //         $('.alert__box').html(`
        //             <div class="alert alert-danger text-center">
        //                 <strong class="text-center">Status Error: ${err.statusText}</strong> 
        //                 ${err.responseText}
        //             </div>
        //         `);
        //         showPanel(1);
        //     }
        // });
          // End of Block B
    });

    $('.login').click(function() {
        clearData();
        window.location.replace(`${role}/login.html`);
    });

    showPanel(1);
});

