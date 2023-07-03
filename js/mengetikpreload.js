  // Kata yang akan ditampilkan secara berurutan
  var kata1 = "LOADING";
  var kata2 = "WAIT......";
  var index1 = 0;
  var index2 = 0;
  var speed = 50; // Kecepatan mengetik dalam milidetik

  function ketik1() {
    if (index1 < kata1.length) {
      document.getElementById("loading-text").innerHTML += kata1.charAt(index1);
      index1++;
      setTimeout(ketik1, speed);
    }
  }

  function ketik2() {
    if (index2 < kata2.length) {
      document.getElementById("loading-h3").innerHTML += kata2.charAt(index2);
      index2++;
      setTimeout(ketik2, speed);
    }
  }

  // Panggil fungsi ketik saat halaman dimuat
  window.onload = function() {
    ketik1();
    setTimeout(ketik2, kata1.length * speed); // Menunggu hingga teks pertama selesai ditampilkan sebelum memulai teks kedua
  };