document.addEventListener("DOMContentLoaded", function () {

  // Dark Mode Toggle
  const toggle = document.getElementById("darkToggle");

  toggle.addEventListener("click", function () {
    document.body.classList.toggle("dark");
  });

  // Click Counter
  function trackClick(platform) {
    let count = localStorage.getItem(platform) || 0;
    count++;
    localStorage.setItem(platform, count);
    document.getElementById(platform + "-count").innerText = count;
  }

  window.trackClick = trackClick;

  // Load counts
  ["whatsapp","facebook","instagram","tiktok","twitter","website"].forEach(p => {
    let count = localStorage.getItem(p) || 0;
    const element = document.getElementById(p + "-count");
    if (element) element.innerText = count;
  });

  // QR → WhatsApp
  new QRCode(document.getElementById("qrcode"), {
    text: "https://wa.me/254796714711",
    width: 180,
    height: 180
  });

});
