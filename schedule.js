// Fallback image (never black screen)
const FALLBACK_IMAGE = "images/MONDAY OPEN STUDIO - 12AM - 10AM.png";

// Weekly schedule
const weeklySchedule = {

  // MONDAY (1)
  1: [
    { start: 0, end: 600, image: "images/MONDAY OPEN STUDIO - 12AM - 10AM.png" },
    { start: 600, end: 660, image: "images/DJ Spirit - Show your Spirit! (Monday - 10-11 am).png" },
    { start: 660, end: 780, image: "images/MONDAY OPEN STUDIO - 11AM-1PM.png" },
    { start: 780, end: 1020, image: "images/MONDAY WIKD TRAINING SLOT - 1pm-5pm).png" },
    { start: 1020, end: 1080, image: "images/MONDAY open studio 5-6pm).png" },
    { start: 1080, end: 1140, image: "images/MONDAY DJ L - Showcase (Monday 6-7 pm) (1).png" },
    { start: 1140, end: 1260, image: "images/MONDAY DJ Starman - The Flashback (monday 7-9 pm).png" },
    { start: 1260, end: 1320, image: "images/MONDAY DJ Desinova - The Cosmic Jam (monday 9-10 pm).png" },
    { start: 1320, end: 1380, image: "images/MONDAY DJ biscuit- The Jam (monday 10-11 pm).png" },
    { start: 1380, end: 1440, image: "images/MONDAY DJ noli- holy cannoli (monday 11pm-12am).png" }
  ],

  // TUESDAY (2)
  2: [
    { start: 0, end: 60, image: "images/TUESDAY DJ Nine - Nighttimes with Nine (Tuesday 12am - 1am).png" },
    { start: 60, end: 120, image: "images/TUESDAY DJ BLUE - The Sorrow Hour (tuesday 1am-2am).png" },
    { start: 120, end: 540, image: "images/TUESDAY OPEN STUDIO - 2AM-9AM.png" },
    { start: 540, end: 600, image: "images/TUESDAY DJ Rocket - ROCKETFUEL (tuesday 9-10am).png" },
    { start: 600, end: 660, image: "images/TUESDAY OPEN STUDIO - 10AM-11AM.png" },
    { start: 660, end: 780, image: "images/TUESDAY Greg Keys - The Lunch rush (tuesday 11am-1pm).png" },
    { start: 780, end: 840, image: "images/TUESDAY WIKD TRAINING SLOT - (1PM-2PM).png" },
    { start: 840, end: 960, image: "images/TUESDAY DJ Haskell - The Soundscape (tuesday 2-4pm).png" },
    { start: 960, end: 1080, image: "images/TUESDAY OPEN STUDIO - 4PM-6PM.png" },
    { start: 1080, end: 1140, image: "images/TUESDAY DJ Whatsherface - the so and so show (tuesday 6-7pm).png" },
    { start: 1140, end: 1200, image: "images/TUESDAY DJ Flieg - The Shakeup! (tuesday 7-8pm).png" },
    { start: 1200, end: 1260, image: "images/TUESDAY DJ Player - 80s at 8 (tuesday 8-9pm).png" },
    { start: 1260, end: 1320, image: "images/TUESDAY DJ Joe - Joe’s third set (tuesday 9-10pm).png" },
    { start: 1320, end: 1380, image: "images/TUESDAY Dj keem - the altar (10-11pm).png" },
    { start: 1380, end: 1440, image: "images/TUESDAY DJ Tia - the blue hour (11pm-12am).png" }
  ]
};

// Core logic
function updateImage() {
  const img = document.getElementById("onAirImage");
  const onAir = document.getElementById("onAir");
  const offAir = document.getElementById("offAir");

  const now = new Date();
  const day = now.getDay();
  const minutesNow = now.getHours() * 60 + now.getMinutes();

  img.src = FALLBACK_IMAGE;
  onAir.style.display = "none";
  offAir.style.display = "block";

  const todaySchedule = weeklySchedule[day];
  if (!todaySchedule) return;

  for (const slot of todaySchedule) {
    if (minutesNow >= slot.start && minutesNow < slot.end) {
      img.src = slot.image;

      if (
        slot.image.toUpperCase().includes("OPEN STUDIO") ||
        slot.image.toUpperCase().includes("TRAINING")
      ) {
        onAir.style.display = "none";
        offAir.style.display = "block";
      } else {
        offAir.style.display = "none";
        onAir.style.display = "block";
      }
      return;
    }
  }
}

updateImage();
setInterval(updateImage, 15000);
