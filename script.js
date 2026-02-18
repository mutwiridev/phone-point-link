document.addEventListener("DOMContentLoaded", function () {

  // Dark Mode
  const toggle = document.getElementById("darkToggle");
  if (toggle) {
    toggle.addEventListener("click", function () {
      document.body.classList.toggle("dark");
    });
  }

  // Click Counter
  function trackClick(platform) {
    let count = localStorage.getItem(platform) || 0;
    count++;
    localStorage.setItem(platform, count);
    const el = document.getElementById(platform + "-count");
    if (el) el.innerText = count;
  }
  window.trackClick = trackClick;

  // Load counts
  ["whatsapp","facebook","instagram","tiktok","twitter","website"].forEach(p => {
    const el = document.getElementById(p + "-count");
    if (el) el.innerText = localStorage.getItem(p) || 0;
  });

  // QR code → WhatsApp
  const qrContainer = document.getElementById("qrcode");
  if (qrContainer && typeof QRCode !== "undefined") {
    new QRCode(qrContainer, {
      text: "https://wa.me/254796714711",
      width: 180,
      height: 180
    });
  }

});
