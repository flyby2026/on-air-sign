const schedule = [
  { start: 0,    end: 600,  image: "images/MONDAY OPEN STUDIO - 12AM - 10AM.png" }, // 12:00–10:00
  { start: 600,  end: 660,  image: "images/DJ Spirit - Show your Spirit! (Monday - 10-11 am).png" },
  { start: 660,  end: 780,  image: "images/MONDAY OPEN STUDIO - 11AM-1PM.png" },
  { start: 780,  end: 1020, image: "images/MONDAY WIKD TRAINING SLOT - 1pm-5pm).png" },
  { start: 1020, end: 1080, image: "images/MONDAY open studio 5-6pm).png" },
  { start: 1080, end: 1140, image: "images/MONDAY DJ L - Showcase (Monday 6-7 pm) (1).png" },
  { start: 1140, end: 1260, image: "images/MONDAY DJ Starman - The Flashback (monday 7-9 pm).png" },
  { start: 1260, end: 1320, image: "images/MONDAY DJ Desinova - The Cosmic Jam (monday 9-10 pm).png" },
  { start: 1320, end: 1380, image: "images/MONDAY DJ biscuit- The Jam (monday 10-11 pm).png" },
  { start: 1380, end: 1440, image: "images/MONDAY DJ noli- holy cannoli (monday 11pm-12am).png" }
];

function updateImage() {
  const now = new Date();
  const minutesNow = now.getHours() * 60 + now.getMinutes();

  for (const slot of schedule) {
    if (minutesNow >= slot.start && minutesNow < slot.end) {
      document.getElementById("onAirImage").src = slot.image;
      return;
    }
  }
}

updateImage();
setInterval(updateImage, 30000); // every 30 seconds
