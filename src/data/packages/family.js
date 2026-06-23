export const familyPackages = [
  {
    id: "family-001",
    slug: "kerala-highlights",
    category: "family",
    name: "Kerala Highlights Family Tour",
    shortDescription: "A comprehensive family tour covering Kochi heritage, Munnar hills, and Alleppey backwaters.",
    duration: "6 Days / 5 Nights",
    startingPrice: 24500,
    coverImage: "/images/packages/Family-kochi.jpg",
    destinations: ["Kochi", "Munnar", "Alleppey"],
    highlights: ["Fort Kochi Sightseeing", "Eravikulam National Park", "Alleppey Backwater Day Cruise"],
    inclusions: ["Family Room Stays", "Daily Breakfast", "Sightseeing Cab & Driver", "Airport Pickup & Drop"],
    exclusions: ["Flight/Train Tickets", "Entry Tickets to parks", "Lunch & Dinner", "Personal expenses"],
    featured: true,
    active: true,
    itinerary: [
      { day: 1, title: "Arrival at Kochi & Heritage Tour", desc: "Arrive at Kochi. Check in to your family suite and head out to explore Fort Kochi, Chinese fishing nets, Jewish Synagogue, and Dutch Palace." },
      { day: 2, title: "Scenic Drive to Munnar Hills", desc: "Drive to Munnar, enjoying valleys, rubber plantations, and waterfalls along the road. Check in to resort and enjoy a quiet evening." },
      { day: 3, title: "Munnar Tea Museum & Lakes", desc: "Explore Mattupetty Dam, Echo Point, and Kundala Lake. Tour the Tata Tea Museum to see traditional tea leaf processing methods." },
      { day: 4, title: "Wildlife Spotting at Eravikulam", desc: "Visit Eravikulam National Park to see Nilgiri Tahr and take in the panoramic mountain views from the heights." },
      { day: 5, title: "Alleppey Backwaters & Houseboat", desc: "Drive to Alleppey. Board your family houseboat. Relax on the canals and enjoy traditional Kuttanad buffet lunch and dinner onboard." },
      { day: 6, title: "Cochin Departure", desc: "Check out after breakfast, shop for Kerala spices and handlooms at Kochi markets, and transfer to airport/station for departure." }
    ]
  },
  {
    id: "family-002",
    slug: "family-adventure-tour",
    category: "family",
    name: "Family Adventure & Wildlife Tour",
    shortDescription: "Exciting wildlife safari, spice plantation walks, and bamboo rafting in Thekkady for the family.",
    duration: "4 Days / 3 Nights",
    startingPrice: 18999,
    coverImage: "/images/packages/tiger.jpg",
    destinations: ["Thekkady", "Vagamon"],
    highlights: ["Periyar Lake Boat Safari", "Spice Plantation Walk", "Vagamon Pine Forest Walk"],
    inclusions: ["3-Star Hotel Stays", "Breakfast Included", "Periyar Boat Tickets", "Private Cab Service"],
    exclusions: ["Train/Flight Tickets", "Optional Adventure Activities", "Meals not specified"],
    featured: false,
    active: true,
    itinerary: [
      { day: 1, title: "Arrive in Thekkady", desc: "Arrive in Thekkady (Kumily). Check in to your forest resort and take a guided evening walk through a local spice garden to smell cardamom, pepper, and vanilla." },
      { day: 2, title: "Periyar Lake Boat Safari", desc: "Take a morning boat safari on Periyar Lake inside the wildlife sanctuary to spot wild elephants, bison, and exotic birds. Enjoy an evening traditional Kathakali cultural show." },
      { day: 3, title: "Vagamon Hills & Meadows", desc: "Take a day excursion to Vagamon hills. Walk through the Vagamon Pine Forest and enjoy outdoor sports with family on the green rolling meadows." },
      { day: 4, title: "Departure", desc: "Enjoy breakfast, check out of the resort, and transfer back to Kochi or Kottayam railway station for your departure." }
    ]
  },
  {
    id: "family-003",
    slug: "complete-kerala-experience",
    category: "family",
    name: "Complete Kerala Experience",
    shortDescription: "The ultimate family getaway traversing hills, wildlife reserves, backwaters, and pristine beaches.",
    duration: "8 Days / 7 Nights",
    startingPrice: 38999,
    coverImage: "/images/packages/wayanad-1.jpg",
    destinations: ["Munnar", "Thekkady", "Alleppey", "Kovalam"],
    highlights: ["Tea Gardens & Waterfalls", "Periyar Wildlife Sanctuary", "Overnight Houseboat Stay", "Kovalam Beach Sunset"],
    inclusions: ["Resort Stays", "All Meals in Houseboat", "Breakfast at Resorts", "AC Cab with Experienced Driver"],
    exclusions: ["Flights/Trains", "Activity Costs", "Lunch & Dinner at Resorts"],
    featured: true,
    active: true,
    itinerary: [
      { day: 1, title: "Arrival in Kochi & Munnar Transit", desc: "Meet our driver at Kochi Airport/Station. Transfer to Munnar through valleys and waterfalls. Check in and enjoy a campfire night." },
      { day: 2, title: "Munnar Hill Stations Sightseeing", desc: "Full day in Munnar: Eravikulam National Park, tea garden contours walks, Echo Point, and Mattupetty Dam boating." },
      { day: 3, title: "Munnar to Thekkady Wilderness", desc: "Drive to Thekkady. Spot spice plantations, check in, and spend the afternoon at elephant junction (elephant ride/bath options)." },
      { day: 4, title: "Periyar Boating & Spice Shopping", desc: "Boat cruise on Periyar Lake. Spend the afternoon shopping for authentic Kerala cardamoms, pepper, and tea leaves." },
      { day: 5, title: "Alleppey Luxury Houseboat Cruise", desc: "Transfer to Alleppey. Board the private houseboat. Relax as the boat glides through the lagoons, and enjoy hot local Kerala meals." },
      { day: 6, title: "Alleppey to Kovalam Beach", desc: "Check out and drive down south to Kovalam beach. Check in to your beach resort and spend a relaxing evening by the Lighthouse beach." },
      { day: 7, title: "Trivandrum Temple & Beach Walk", desc: "Visit the historical Sree Padmanabhaswamy temple in Trivandrum. Spend the evening walking the beaches of Kovalam." },
      { day: 8, title: "Trivandrum Departure", desc: "Check out of the resort and transfer to Trivandrum Airport or railway station for your departure home." }
    ]
  }
];
