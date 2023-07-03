window.addEventListener('load', function() {
    var preloader = document.getElementById('preloader');
  
    // Tampilkan preloader saat halaman dimuat
    preloader.style.display = 'block';
  
    // Simulasikan penundaan selama 2 detik (2000 milidetik)
    setTimeout(function() {
      // Sembunyikan preloader setelah penundaan selesai
      preloader.style.display = 'none';
    }, 2000);
  });
  