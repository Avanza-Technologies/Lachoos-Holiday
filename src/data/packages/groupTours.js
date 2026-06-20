export const groupToursPackages = [
  {
    id: "group-001",
    slug: "college-tour-kerala",
    category: "group",
    name: "Kerala Explorer College Tour",
    shortDescription: "Fun-filled group tour covering Fort Kochi, Munnar hills, and Alleppey backwater houseboats.",
    duration: "5 Days / 4 Nights",
    startingPrice: 8500,
    coverImage: "/images/packages/Fort_kochi.jpg",
    destinations: ["Kochi", "Munnar", "Alleppey"],
    highlights: ["Kochi Heritage Walk", "Group Campfire in Munnar", "Alleppey Houseboat Day Tour"],
    inclusions: ["Group Sharing Lodging", "All Breakfasts & Dinners", "Large Fleet Coach Transportation", "Tour Coordinator Support"],
    exclusions: ["Flight/Train Fare", "Monument Entry Tickets", "Lunch", "Personal expenses"],
    featured: true,
    active: true,
    itinerary: [
      { day: 1, title: "Kochi Arrival & Heritage Walk", desc: "Arrive in Kochi. Check in to the hotel. Embark on a fun group walking tour of Fort Kochi heritage spots, ending at the beach for the sunset." },
      { day: 2, title: "Munnar Hill Drive & DJ Night", desc: "Drive to Munnar via group coach. Spot waterfalls. Check in to the resort and enjoy a private campfire and music DJ night." },
      { day: 3, title: "Eravikulam & Echo Point Boating", desc: "Visit Eravikulam National Park and take photos. Head to Echo Point and Mattupetty Dam for group boating races." },
      { day: 4, title: "Alleppey Houseboat Day Cruise", desc: "Drive to Alleppey. Board the group houseboats for a day cruise through the canals with a special buffet lunch onboard. Return to hotel in Kochi." },
      { day: 5, title: "Kochi Departure", desc: "Spend the morning shopping for souvenirs, and transfer to airport/station for departure." }
    ]
  },
  {
    id: "group-002",
    slug: "corporate-retreat-munnar",
    category: "group",
    name: "Munnar Corporate Team Retreat",
    shortDescription: "Premium team-building activities, conferences, and relaxation sessions in Munnar hills.",
    duration: "3 Days / 2 Nights",
    startingPrice: 12999,
    coverImage: "/images/packages/munnarTeaEstate-2.jpg",
    destinations: ["Munnar"],
    highlights: ["Team Building Activities", "Conference Hall Access", "Sunset Gala Dinner & DJ Session"],
    inclusions: ["Premium Quad/Twin Resort Rooms", "All Buffet Meals (Breakfast, Lunch, Dinner)", "AC Coach Transit", "DJ & Campfire arrangements"],
    exclusions: ["Corporate specific printing/materials", "Alcoholic Beverages", "Personal expenses"],
    featured: true,
    active: true,
    itinerary: [
      { day: 1, title: "Arrival & Team-Building Briefing", desc: "Arrive in Munnar via premium AC coach. Check in, gather in the conference hall for the corporate briefing, and head out for outdoor team games." },
      { day: 2, title: "Corporate Seminar & Gala Night", desc: "Conduct your morning business session/conference. Spend the afternoon taking a quiet nature walk. In the evening, enjoy a sunset gala dinner, DJ, and campfire." },
      { day: 3, title: "Tea Estate Walks & Departure", desc: "Take a morning walk through the surrounding tea estate contours. Check out and transfer back to Kochi for departure." }
    ]
  },
  {
    id: "group-003",
    slug: "friends-group-varkala",
    category: "group",
    name: "Varkala Cliff Beach Getaway",
    shortDescription: "A relaxing group trip to the stunning red cliffs, beaches, and cafes of Varkala.",
    duration: "4 Days / 3 Nights",
    startingPrice: 9999,
    coverImage: "/images/packages/varkalacliff.jpg",
    destinations: ["Varkala"],
    highlights: ["Varkala Cliff Exploration", "Cafe Hopping & Beach Volleyball", "Water Sports Activities"],
    inclusions: ["Boutique Beach Resort Rooms", "Daily Breakfast", "Sightseeing Cab transfers", "Complimentary Surfing Lesson"],
    exclusions: ["Flight/Train Tickets", "Water Sports Activity Fees (Self-pay)", "Lunch & Dinner"],
    featured: false,
    active: true,
    itinerary: [
      { day: 1, title: "Arrive in Varkala", desc: "Arrive in Varkala. Check in to your beachside resort and head to the cliff to watch the spectacular sunset and explore ocean-view cafes." },
      { day: 2, title: "Surfing Lesson & Beach Volleyball", desc: "Take a complimentary group surfing lesson on the beach. Spend the afternoon playing beach volleyball." },
      { day: 3, title: "Water Sports & Boat Cruise", desc: "Participate in water sports (parasailing, jet-ski options). Take a sunset boat cruise on Kapil Lake." },
      { day: 4, title: "Varkala Departure", desc: "Enjoy a leisurely morning, check out, and transfer to Trivandrum or Varkala station for departure." }
    ]
  }
];
