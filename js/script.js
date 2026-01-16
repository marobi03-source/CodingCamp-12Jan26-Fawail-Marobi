// welcome message
function welcomeMessage() {
    let userResponse = prompt("Your Name");

    if (userResponse === null || userResponse.trim() === "") {
        userResponse = "Guest";
    }

    document.getElementById("welcome-speech").innerText =
        `Welcome, ${userResponse}! to Neko Go Gakuin.`;
}

// panggil function saat halaman dibuka
window.onload = welcomeMessage;

function validateForm(event) {
    event.preventDefault(); // 

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        alert("Harap isi semua kolom dulu ya 😊");
        return;
    }

       alert(`Terima kasih ${name}! Pesan kamu sudah terkirim 🎉`);

    document.getElementById("contactForm").reset();
}

document
  .getElementById("contactForm")
  .addEventListener("submit", validateForm);
