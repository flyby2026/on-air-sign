const mondaySchedule = [
  { start: "00:00", end: "10:00", image: "images/MONDAY OPEN STUDIO - 12AM - 10AM.png" },
  { start: "10:00", end: "11:00", image: "images/DJ Spirit - Show your Spirit! (Monday - 10-11 am).png" },
  { start: "11:00", end: "13:00", image: "images/MONDAY OPEN STUDIO - 11AM-1PM.png" },
  { start: "13:00", end: "17:00", image: "images/MONDAY WIKD TRAINING SLOT - 1pm-5pm).png" },
  { start: "17:00", end: "18:00", image: "images/MONDAY open studio 5-6pm).png" },
  { start: "18:00", end: "19:00", image: "images/MONDAY DJ L - Showcase (Monday 6-7 pm) (1).png" },
  { start: "19:00", end: "21:00", image: "images/MONDAY DJ Starman - The Flashback (monday 7-9 pm).png" },
  { start: "21:00", end: "22:00", image: "images/MONDAY DJ Desinova - The Cosmic Jam (monday 9-10 pm).png" },
  { start: "22:00", end: "23:00", image: "images/MONDAY DJ biscuit- The Jam (monday 10-11 pm).png" },
  { start: "23:00", end: "24:00", image: "images/MONDAY DJ noli- holy cannoli (monday 11pm-12am).png" }
];

function timeToMinutes(time) {
  const [h, m] = time.split(":").map(Number);
  return h * 60 + m;
}

function updateImage() {
  const now = new Date();
  const day = now.getDay(); // Monday = 1
  const currentMinutes = now.getHours() * 60 + now.getMinutes();

  if (day !== 1) return;

  for (const slot of mondaySchedule) {
    const start = timeToMinutes(slot.start);
    const end = timeToMinutes(slot.end);

    if (currentMinutes >= start && currentMinutes < end) {
      document.getElementById("onAirImage").src = slot.image;
      return;
    }
  }
}

updateImage();
setInterval(updateImage, 60000);
