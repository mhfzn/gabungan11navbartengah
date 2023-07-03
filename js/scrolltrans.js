//scroll transparan<t
$(document).ready(function() {
    $(window).scroll(function() {
      if ($(this).scrollTop() > 50) { // Ubah angka 50 sesuai kebutuhan
        $('.navbar').addClass('navbar-transparent');
      } else {
        $('.navbar').removeClass('navbar-transparent');
      }
    });
  });

