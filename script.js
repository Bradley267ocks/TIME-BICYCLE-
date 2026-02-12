function sendWhatsApp(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const message = document.getElementById("message").value;

  const fullMessage = `Hello Time Bicycle Workshop,%0A%0AName: ${name}%0APhone: ${phone}%0AMessage: ${message}`;

  const whatsappURL = `https://wa.me/27723851589?text=${fullMessage}`;

  window.open(whatsappURL, "_blank");
}