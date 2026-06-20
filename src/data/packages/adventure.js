export const adventurePackages = [
  {
    id: "adventure-001",
    slug: "vagamon-adventure-trek",
    category: "adventure",
    name: "Vagamon Adventure & Paragliding Trek",
    shortDescription: "Trek the rolling meadows of Vagamon and experience the thrill of paragliding.",
    duration: "3 Days / 2 Nights",
    startingPrice: 13999,
    coverImage: "/images/packages/gavi.jpg",
    destinations: ["Vagamon"],
    highlights: ["Pine Forest Trekking", "Paragliding over Vagamon Hills", "Off-Road Jeep Safari"],
    inclusions: ["Adventure Camp/Resort Lodging", "Breakfast & Dinner", "Jeep Safari Ride", "AC Transport to Activities"],
    exclusions: ["Paragliding Activity Charges (Self Pay)", "Personal Trekking Equipment", "Lunch", "Travel Insurance"],
    featured: true,
    active: true,
    itinerary: [
      { day: 1, title: "Arrive in Vagamon & Off-Road Jeep", desc: "Arrive in Vagamon. Check in to your adventure camp. Head out for a thrilling off-road jeep safari to the rugged suicide points and waterfalls." },
      { day: 2, title: "Trek & Paragliding Adventure", desc: "Enjoy a morning trek through the Pine Forest. In the afternoon, head to the paragliding point to glide over the beautiful green hills of Vagamon." },
      { day: 3, title: "Meadows Walk & Departure", desc: "Walk the green rolling meadows of Vagamon. Check out and transfer back to Kochi for departure." }
    ]
  },
  {
    id: "adventure-002",
    slug: "wayanad-trekking-trail",
    category: "adventure",
    name: "Wayanad Peak Trekking Trail",
    shortDescription: "Conquer Chembra Peak and explore wild waterfalls in this adrenaline-filled trail.",
    duration: "4 Days / 3 Nights",
    startingPrice: 16500,
    coverImage: "/images/packages/wayanad-3.jpg",
    destinations: ["Wayanad"],
    highlights: ["Chembra Peak Heart Lake Trek", "Soochipara Waterfalls Visit", "Jungle Camping Experience"],
    inclusions: ["Trekking Permits", "Local Certified Guide", "Jungle Camp Stay & Resort Stay", "All Breakfasts"],
    exclusions: ["Flight/Train Tickets", "Personal Gear", "Meals not specified"],
    featured: true,
    active: true,
    itinerary: [
      { day: 1, title: "Arrive in Wayanad & Camp Check-in", desc: "Arrive in Wayanad. Check in to your jungle adventure camp. Evening orientation session with trekking guides." },
      { day: 2, title: "Chembra Peak & Heart Lake Trek", desc: "Embark on the challenging trek to Chembra Peak. View the famous heart-shaped lake from the highlands." },
      { day: 3, title: "Soochipara Waterfalls & Zip-line", desc: "Explore the Soochipara Waterfalls. Experience the forest zip-line adventure. Enjoy a campfire night at the camp." },
      { day: 4, title: "Wayanad Departure", desc: "Enjoy a final camp breakfast, pack up, and transfer back to Calicut for departure." }
    ]
  },
  {
    id: "adventure-003",
    slug: "kerala-adventure-trail",
    category: "adventure",
    name: "Western Ghats Adventure Trail",
    shortDescription: "An action-packed journey traversing Gavi eco-forests and Vagamon valleys.",
    duration: "5 Days / 4 Nights",
    startingPrice: 24999,
    coverImage: "/images/packages/gavi-1.jpg",
    destinations: ["Pathanamthitta", "Gavi", "Vagamon"],
    highlights: ["Gavi Eco-Forest Safari", "Western Ghats Mountain Trekking", "Waterfall Rappelling"],
    inclusions: ["Resort & Jungle Camp Stays", "Breakfast & Dinner", "Gavi Forest Entry Permit & Guide", "Private 4x4 Jeep/Cab Transportation"],
    exclusions: ["Activity Charges not listed", "Lunch", "Personal expenses"],
    featured: false,
    active: true,
    itinerary: [
      { day: 1, title: "Pathanamthitta Arrival & Base Camp", desc: "Arrive in Pathanamthitta. Check in to your valley resort and meet your outdoor coordinator for the briefing." },
      { day: 2, title: "Gavi Forest Jeep Safari & Camp", desc: "Drive into Gavi forest. Enjoy a wildlife jeep safari to spot elephants and gaur, take a rowboat ride, and overnight in the forest camp." },
      { day: 3, title: "Waterfall Rappelling & Trekking", desc: "Trek the forest buffer zones. Experience thrilling waterfall rappelling. Drive to Vagamon in the evening." },
      { day: 4, title: "Vagamon Meadows Trek & Paragliding", desc: "Trek the Vagamon pine hills. Participate in mountain paragliding. Enjoy a barbecue dinner at the resort." },
      { day: 5, title: "Kochi Departure", desc: "Check out after breakfast and drive to Kochi for your onward departure journey." }
    ]
  }
];
