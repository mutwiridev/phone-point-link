// =======================
// Dark Mode Toggle
// =======================
const darkToggle = document.getElementById('darkToggle');
darkToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  // Optional: change icon
  darkToggle.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});

// =======================
// QR Code Generation
// =======================
const qrcodeContainer = document.getElementById('qrcode');
const phoneNumber = '254796714711';
const whatsappLink = `https://wa.me/${phoneNumber}`;
new QRCode(qrcodeContainer, {
  text: whatsappLink,
  width: 150,
  height: 150,
  colorDark: "#010101",
  colorLight: "#ffffff",
  correctLevel: QRCode.CorrectLevel.H
});

// =======================
// Button Click Tracking
// =======================
const clickCounts = {
  whatsapp: 0,
  facebook: 0,
  instagram: 0,
  tiktok: 0,
  twitter: 0,
  website: 0
};

function trackClick(platform) {
  if (clickCounts.hasOwnProperty(platform)) {
    clickCounts[platform]++;
    const countSpan = document.getElementById(`${platform}-count`);
    if (countSpan) {
      countSpan.textContent = clickCounts[platform];
    }
  }
}
