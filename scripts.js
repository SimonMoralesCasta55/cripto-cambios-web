// Configuración básica
const whatsappNumber = "573012321900"; // sin el "+" para usar en wa.me
const defaultMessage =
  "Hola, vengo desde la página web de CRIPTO CAMBIOS y quiero más información sobre transacciones con BTC y USDT.";

// Función para construir la URL de WhatsApp
function buildWhatsAppUrl() {
  const encoded = encodeURIComponent(defaultMessage);
  return `https://wa.me/${whatsappNumber}?text=${encoded}`;
}

// Asignar año actual en el footer
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear().toString();
}

// Asignar links y eventos a los botones de WhatsApp
function setupWhatsAppButtons() {
  const btn1 = document.getElementById("whatsappBtn");
  const btn2 = document.getElementById("whatsappBtn2");
  const link = document.getElementById("whatsappLink");

  const url = buildWhatsAppUrl();

  if (link) {
    link.href = url;
  }

  function openWhatsApp() {
    window.open(url, "_blank");
  }

  if (btn1) {
    btn1.addEventListener("click", openWhatsApp);
  }
  if (btn2) {
    btn2.addEventListener("click", openWhatsApp);
  }
}

document.addEventListener("DOMContentLoaded", setupWhatsAppButtons);