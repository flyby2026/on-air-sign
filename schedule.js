// =====================
// CONFIG
// =====================
const FALLBACK_IMAGE = "images/MONDAY OPEN STUDIO - 12AM - 10AM.png";
const FADE_DURATION = 800; // ms

// =====================
// WEEKLY SCHEDULE
// =====================
const schedule = {
  monday: [
    { start: "00:00", end: "10:00", image: "MONDAY OPEN STUDIO - 12AM - 10AM.png" },
    { start: "10:00", end: "11:00", image: "DJ Spirit - Show your Spirit! (Monday - 10-11 am).png" },
    { start: "11:00", end: "13:00", image: "MONDAY OPEN STUDIO - 11AM-1PM.png" },
    { start: "13:00", end: "17:00", image: "MONDAY WIKD TRAINING SLOT - 1pm-5pm).png" },
    { start: "17:00", end: "18:00", image: "MONDAY open studio 5-6pm).png" },
    { start: "18:00", end: "19:00", image: "MONDAY DJ L - Showcase (Monday 6-7 pm) (1).png" },
    { start: "19:00", end: "21:00", image: "MONDAY DJ Starman - The Flashback (monday 7-9 pm).png" },
    { start: "21:00", end: "22:00", image: "MONDAY COSMIC JAM 9-10.png" },
    { start: "22:00", end: "23:00", image: "MONDAY OPEN STUDIO - 10-11pm.png" },
    { start: "23:00", end: "24:00", image: "MONDAY DJ noli- holy cannoli (monday 11pm-12am).png" }
  ],

  tuesday: [
    { start: "00:00", end: "01:00", image: "TUESDAY DJ Nine - Nighttimes with Nine (Tuesday 12am - 1am).png" },
    { start: "01:00", end: "02:00", image: "TUESDAY DJ BLUE - The Sorrow Hour (tuesday 1am-2am).png" },
    { start: "02:00", end: "09:00", image: "TUESDAY OPEN STUDIO - 2AM-9AM.png" },
    { start: "09:00", end: "10:00", image: "TUESDAY DJ Rocket - ROCKETFUEL (tuesday 9-10am).png" },
    { start: "10:00", end: "11:00", image: "TUESDAY OPEN STUDIO - 10AM-11AM.png" },
    { start: "11:00", end: "13:00", image: "TUESDAY Greg Keys - The Lunch rush (tuesday 11am-1pm).png" },
    { start: "13:00", end: "14:00", image: "TUESDAY WIKD TRAINING SLOT - (1PM-2PM).png" },
    { start: "14:00", end: "16:00", image: "TUESDAY DJ Haskell - The Soundscape (tuesday 2-4pm).png" },
    { start: "16:00", end: "18:00", image: "TUESDAY OPEN STUDIO - 4PM-6PM.png" },
    { start: "18:00", end: "19:00", image: "TUESDAY DJ Whatsherface - the so and so show (tuesday 6-7pm).png" },
    { start: "19:00", end: "20:00", image: "TUESDAY DJ Flieg - The Shakeup! (tuesday 7-8pm).png" },
    { start: "20:00", end: "21:00", image: "TUESDAY DJ Player - 80s at 8 (tuesday 8-9pm).png" },
    { start: "21:00", end: "22:00", image: "TUESDAY DJ Joe - Joe’s third set (tuesday 9-10pm).png" },
    { start: "22:00", end: "23:00", image: "TUESDAY Dj keem - the altar (10-11pm).png" },
    { start: "23:00", end: "24:00", image: "TUESDAY DJ Tia - the blue hour (11pm-12am).png" }
  ],

  wednesday: [
    { start: "00:00", end: "13:00", image: "WEDNESDAY OPEN STUDIO - 12AM-1PM.png" },
    { start: "13:00", end: "17:00", image: "WEDNESDAY WIKD TRAINING SLOT - 1-5pm .png" },
    { start: "17:00", end: "19:00", image: "WEDNESDAY OPEN STUDIO - 5PM-7PM.png" },
    { start: "19:00", end: "20:00", image: "WEDNESDAY WIKD GENERAL MEETING - 7-8pm.png" },
    { start: "20:00", end: "22:00", image: "WEDNESDAY JT MONEY - PAYDAY 8-10PM.png" },
    { start: "22:00", end: "23:00", image: "WEDNESDAY DJ JOB - RECORD REWIND - 10-11PM.png" },
    { start: "23:00", end: "24:00", image: "WEDNESDAY MC SALEM - THE WITCHING HOUR 11PM-12AM.png" }
  ],

  thursday: [
    { start: "00:00", end: "01:00", image: "THURSDAY XRZUN - X-TUNES - 12AM-1AM.png" },
    { start: "01:00", end: "11:00", image: "THURSDAY OPEN STUDIO - 1AM-11AM.png" },
    { start: "11:00", end: "13:00", image: "THURSDAY Greg Keys - The Lunch Rush ( 11am-1pm).png" },
    { start: "13:00", end: "14:00", image: "THURSDAY OPEN STUDIO - 1-2pm.png" },
    { start: "14:00", end: "15:00", image: "THURSDAY DJ MALEWIFE - NERD OUT! - 2PM-3PM).png" },
    { start: "15:00", end: "19:00", image: "THURSDAY OPEN STUDIO - 3PM-7PM.png" },
    { start: "19:00", end: "20:00", image: "THURSDAY DJ Fizz - The Sunset Hour! - 7-8pm.png" },
    { start: "20:00", end: "21:00", image: "THURSDAY OPEN STUDIO - 8-9PM.png" },
    { start: "21:00", end: "23:00", image: "THURSDAY MC Noble - Deep Cuts - 9-11pm.png" },
    { start: "23:00", end: "24:00", image: "THURSDAY DJ Rishi - Pretty good music - 11pm-12am.png" }
  ],

  friday: [
    { start: "00:00", end: "11:00", image: "FRIDAY OPEN STUDIO - 12AM-11AM.png" },
    { start: "11:00", end: "12:00", image: "FRIDAY DJ Brixtina - Brixieland 11am-12pm.png" },
    { start: "12:00", end: "13:00", image: "FRIDAY OPEN STUDIO - 12PM-1pm.png" },
    { start: "13:00", end: "16:00", image: "FRIDAY WIKD TRAINING SLOT - 1-4PM.png" },
    { start: "16:00", end: "17:00", image: "FRIDAY DJ C-SQD - THE SHOPPING CART - 4-5PM.png" },
    { start: "17:00", end: "19:00", image: "FRIDAY OPEN STUDIO - 5-7PM.png" },
    { start: "19:00", end: "20:00", image: "FRIDAY DJ Flyby - flyin’ with ryan - 7-8pm NORM.png" },
    { start: "20:00", end: "22:00", image: "FRIDAY THE RAVE - 8-10pm.png" },
    { start: "22:00", end: "24:00", image: "FRIDAY DJ Ray - The sound lounge (10pm-12am).png" }
  ],

  saturday: [
    { start: "00:00", end: "01:00", image: "SATURDAY DJ Brixtina - REBELLION - 12am-1am.png" },
    { start: "01:00", end: "09:00", image: "SATURDAY Open studio - 1am-9am.png" },
    { start: "09:00", end: "11:00", image: "SATURDAY DJ Rishi - Productions Slot - 9-11am.png" },
    { start: "11:00", end: "13:00", image: "SATURDAY Open studio - 11am-1pm.png" },
    { start: "13:00", end: "14:00", image: "SATURDAY DJ Palomino - Mixtape Round up - 1-2pm.png" },
    { start: "14:00", end: "15:00", image: "SATURDAY Open studio - 2pm-3pm.png" },
    { start: "15:00", end: "16:00", image: "SATURDAY DJ Meridan - PRIME WMeridian - 3-4pm.png" },
    { start: "16:00", end: "17:00", image: "SATURDAY DJ Plague - The Flight Deck - 4-5pm.png" },
    { start: "17:00", end: "19:00", image: "SATURDAY Dj Spitfire - Ground Control - 5-7pm.png" },
    { start: "19:00", end: "20:00", image: "SATURDAY Big Don - The regular show - 7-8pm.png" },
    { start: "20:00", end: "21:00", image: "SATURDAY DJ Short Boi - Short Bois Beats - 8-9pm.png" },
    { start: "21:00", end: "23:00", image: "SATURDAY DJ Bones - The graveyard shift - 900-11pm.png" },
    { start: "23:00", end: "24:00", image: "SATURDAY DJ Plague - the emergency room - 11pm-12am (goes into sunday) (1).png" }
  ],

  sunday: [
    { start: "00:00", end: "01:00", image: "SUNDAY DJ Plague - the emergency room - 12am-1am (goes into sunday) (2).png" },
    { start: "01:00", end: "10:00", image: "SUNDAY Open studio 1am-10am.png" },
    { start: "10:00", end: "13:00", image: "SUNDAY Mia - productions slot - 10am-1pm.png" },
    { start: "13:00", end: "14:00", image: "SUNDAY Open studio - 1pm-2pm.png" },
    { start: "14:00", end: "15:00", image: "SUNDAY DJ Psyop - sunday sauce - 2-3pm.png" },
    { start: "15:00", end: "16:00", image: "SUNDAY DJ kmooks - sweet release - 3-4pm.png" },
    { start: "16:00", end: "17:00", image: "SUNDAY Dj tornado - outbreak - 4-5pm.png" },
    { start: "17:00", end: "18:00", image: "SUNDAY Dj old money - fined tuned radio - 5-6pm.png" },
    { start: "18:00", end: "21:00", image: "SUNDAY Paxton - Productions Slot - 6-9pm.png" },
    { start: "21:00", end: "22:00", image: "SUNDAY DJ quasar - Disco Galaxy - 9-10pm.png" },
    { start: "22:00", end: "23:00", image: "SUNDAY Open studio 10pm-11pm.png" },
    { start: "23:00", end: "24:00", image: "SUNDAY Dj nishi - the interstates - 11pm-12am.png" }
  ]
};

/* =========================
   IMAGE SWITCHER
========================= */
function updateScheduleImage() {
  const now = new Date();
  const day = now.toLocaleString("en-US", { weekday: "long" }).toLowerCase();
  const currentTime =
    now.getHours().toString().padStart(2, "0") + ":" +
    now.getMinutes().toString().padStart(2, "0");

  const todaySchedule = schedule[day];
  if (!todaySchedule) return;

  for (const slot of todaySchedule) {
    if (currentTime >= slot.start && currentTime < slot.end) {
      const img = document.getElementById("onAirImage");
      const newSrc = "images/" + slot.image;
      if (!img.src.endsWith(newSrc)) {
        img.src = newSrc;
      }
      break;
    }
  }
}

updateScheduleImage();
setInterval(updateScheduleImage, 60000);
