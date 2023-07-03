var texts = [
  "HELLO, i'm mHFz",
  "Novice Developer",
  "Python",
  "Network",
  "Internet of Things",
  "Programming",
];

var speed = 100; // Kecepatan efek pengetikan (ms)
var eraseDelay = 250; // Waktu jeda sebelum penghapusan dimulai (ms)
var eraseSpeed = 100; // Kecepatan efek penghapusan (ms)

var element = document.getElementById("typing-effect");
var textIndex = 0;
var isDeleting = false;
var typingSpeed = speed;

function typeEffect() {
  var currentText = texts[textIndex];

  if (isDeleting) {
    element.textContent = currentText.substring(0, element.textContent.length - 1);
  } else {
    element.textContent = currentText.substring(0, element.textContent.length + 1);
  }

  if (!isDeleting && element.textContent === currentText) {
    typingSpeed = eraseDelay;
    isDeleting = true;
  } else if (isDeleting && element.textContent === "") {
    isDeleting = false;
    textIndex++;
    typingSpeed = speed;

    if (textIndex === texts.length) {
      textIndex = 0;
    }
  }

  setTimeout(typeEffect, typingSpeed);
}

// Menambahkan waktu jeda sebelum memulai efek pengetikan
setTimeout(typeEffect, 2000); // Menunggu selama 2000 ms (2 detik) sebelum memulai efek pengetikan
