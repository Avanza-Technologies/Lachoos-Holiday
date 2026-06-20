export const pilgrimagePackages = [
  {
    id: "pilgrimage-001",
    slug: "sabarimala-darshan-comfort",
    category: "pilgrimage",
    name: "Sabarimala Darshan Comfort Package",
    shortDescription: "Hassle-free pilgrimage logistics with driver guidance, hotel stays, and temple transfers.",
    duration: "3 Days / 2 Nights",
    startingPrice: 11999,
    coverImage: "/images/packages/sabarimala.jpg",
    destinations: ["Pathanamthitta", "Pamba"],
    highlights: ["Safe Transit via Pamba Route", "Experienced Pilgrim Drivers", "Comfortable Lodging Assistance"],
    inclusions: ["AC Hotel Stay in Pathanamthitta", "Dedicated Transport (Sedan/SUV)", "Driver Food & Lodging", "Water & Snacks in Vehicle"],
    exclusions: ["Dakshina / Offerings", "Special Darshan Passes", "Personal Meals"],
    featured: true,
    active: true,
    itinerary: [
      { day: 1, title: "Arrival at Pathanamthitta & Prep", desc: "Arrive at Kochi/Trivandrum and transfer to Pathanamthitta. Check in to your comfort pilgrim hotel. Orientation with our local pilgrimage specialist, including assistance collecting ritual items." },
      { day: 2, title: "Ritual Prep & Trek to Sannidhanam", desc: "Start early morning. Drive to Pamba via Nilakkal. Begin the sacred trek through the forest path to Sabarimala temple (Sannidhanam). Guided assistance along the route. Perform Darshan and return to Pamba." },
      { day: 3, title: "Check-out & Return Journey", desc: "Rest at the hotel. Check out after breakfast and transfer back to your airport or railway station for your return journey." }
    ]
  },
  {
    id: "pilgrimage-002",
    slug: "temple-circuit-tour",
    category: "pilgrimage",
    name: "South Kerala Temple Circuit Tour",
    shortDescription: "Visit the sacred temples of Guruvayur, Chottanikkara, and Padmanabhaswamy.",
    duration: "5 Days / 4 Nights",
    startingPrice: 19500,
    coverImage: "/images/packages/sabarimala-1.jpg",
    destinations: ["Guruvayur", "Kochi", "Trivandrum"],
    highlights: ["Guruvayur Sree Krishna Temple", "Chottanikkara Bhagavathy Temple", "Sree Padmanabhaswamy Temple"],
    inclusions: ["3-Star Hotel Accommodations", "Daily Breakfast", "AC Cab Transportation", "Dedicated Local Route Guidance"],
    exclusions: ["Pooja / Worship Ticket Costs", "Meals not specified", "Camera/Locker fees"],
    featured: true,
    active: true,
    itinerary: [
      { day: 1, title: "Trivandrum Arrival & Padmanabhaswamy", desc: "Arrive in Trivandrum. Transfer to hotel. In the afternoon, visit the magnificent Sree Padmanabhaswamy Temple. Evening walk at Kovalam Beach." },
      { day: 2, title: "Trivandrum to Kochi & Chottanikkara", desc: "Drive to Kochi. Check in. Visit the famous Chottanikkara Bhagavathy Temple for the evening worship (Bhajanam)." },
      { day: 3, title: "Kochi to Guruvayur Temple", desc: "Drive to Guruvayur, the sacred abode of Sree Krishna. Check in and visit the temple for evening Darshan and witness the elephant sanctuary." },
      { day: 4, title: "Guruvayur Morning Darshan & Transit", desc: "Attend the auspicious early morning Nirmalyam Darshan at Guruvayur. Depart Guruvayur and transfer to Kochi. Explore quiet churches and heritage walks." },
      { day: 5, title: "Kochi Departure", desc: "Check out of the hotel and transfer to Cochin Airport or railway station for departure." }
    ]
  },
  {
    id: "pilgrimage-003",
    slug: "kerala-spiritual-journey",
    category: "pilgrimage",
    name: "Kerala Spiritual Journey & Wellness",
    shortDescription: "A peaceful pilgrimage coupled with authentic Ayurvedic rejuvenation sessions.",
    duration: "4 Days / 3 Nights",
    startingPrice: 16999,
    coverImage: "/images/packages/sabarimala-main.jpg",
    destinations: ["Ettumanoor", "Vaikom", "Kochi"],
    highlights: ["Vaikom Mahadeva Temple", "Ettumanoor Mahadeva Temple", "Ayurvedic Wellness Therapy"],
    inclusions: ["Hotel Accommodation", "Ayurvedic Treatment Session", "Breakfast", "Private Cab Sightseeing"],
    exclusions: ["Flight/Train Fare", "Worship Fees", "Personal Expenditures"],
    featured: false,
    active: true,
    itinerary: [
      { day: 1, title: "Kochi Arrival & Spiritual Orientation", desc: "Arrive at Kochi. Transfer to your wellness resort. Afternoon consultation with an Ayurvedic doctor to customize your massage treatments." },
      { day: 2, title: "Vaikom & Ettumanoor Shiva Temples", desc: "Visit the historic Vaikom Mahadeva Temple and Ettumanoor Mahadeva Temple. Experience the peaceful, historic architecture and evening oil lamps." },
      { day: 3, title: "Ayurvedic Rejuvenation Session", desc: "Spend a quiet day at the resort enjoying complete Ayurvedic body massage and herbal steam bath therapies to recharge." },
      { day: 4, title: "Check-out & Kochi Departure", desc: "Check out after breakfast. Enjoy a short Kochi sightseeing tour before transferring to the airport/station for your departure." }
    ]
  }
];
