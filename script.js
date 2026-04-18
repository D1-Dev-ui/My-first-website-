window.onload = function () {const darkModeBtn = document.getElementById("darkModeBtn");

function setDarkMode(isDark) {
  if (isDark) {
    document.body.classList.add("dark-mode");
    darkModeBtn.innerHTML = "☀️";
  } else {
    document.body.classList.remove("dark-mode");
    darkModeBtn.innerHTML = "🌙";
  }
}

// Auto detect phone theme
function applySystemTheme() {
  const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  setDarkMode(isDark);
}

applySystemTheme();

// Optional toggle override
darkModeBtn.onclick = function () {
  const isDark = document.body.classList.contains("dark-mode");
  setDarkMode(!isDark);
};
  // Mobile menu
  const menuBtn = document.getElementById("menuBtn");
  const menu = document.getElementById("menu");

  if (menuBtn && menu) {
    menuBtn.onclick = function () {
      menu.classList.toggle("show");
    };
  }

  // Premium slider
  const slide = document.getElementById("slide");
  const imgs = [
    "deluxe room.jpeg",
    "pool.jpeg",
    "dining.jpeg"
  ];

  let i = 0;

  if (slide) {
    setInterval(function () {
      slide.classList.add("fade-out");

      setTimeout(function () {
        i = (i + 1) % imgs.length;
        slide.src = imgs[i];
        slide.classList.remove("fade-out");
      }, 800);

    }, 4000);
  }

};

// Booking functions (global so HTML onclick can use them)

function getBookingDetails() {
  return {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    checkin: document.getElementById("checkin").value,
    checkout: document.getElementById("checkout").value,
    room: document.getElementById("room").value,
    guests: document.getElementById("guests").value
  };
}

function sendEmail() {
  const d = getBookingDetails();

  const subject = "New Booking - Royal Residence";

  const body =
`Hello Royal Residence,

I want to book a room.

Name: ${d.name}
Email: ${d.email}
Check In: ${d.checkin}
Check Out: ${d.checkout}
Room: ${d.room}
Guests: ${d.guests}`;

  const receiver = "oyedeletaiwo762@gmail.com";

  const url =
    "mailto:" + receiver +
    "?subject=" + encodeURIComponent(subject) +
    "&body=" + encodeURIComponent(body);

  showPopup(); // 👈 add this
  setTimeout(() => {
    window.location.href = url;
  }, 1200);
}

function sendWhatsApp() {
  const d = getBookingDetails();

  const message =
`Hello Royal Residence, I want to book a room.

Name: ${d.name}
Email: ${d.email}
Check In: ${d.checkin}
Check Out: ${d.checkout}
Room: ${d.room}
Guests: ${d.guests}`;

  const phone = "2349169612742";

  const url ="https://wa.me/" + phone +"?text=" + encodeURIComponent(message);

  showPopup(); // 👈 add this
  setTimeout(() => {
    window.location.href = url;
  }, 1200);
}
function showPopup() {
  document.getElementById("popup").style.display = "flex";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
    }
