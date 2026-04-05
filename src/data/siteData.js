export const designTokens = {
  heroStyle: "cinematic",
  typography: {
    heading: "Playfair Display",
    body: "DM Sans",
    display: "Playfair Display",
  },
  effects: {
    noise: true,
    glassmorphism: "none",
    floatingShapes: false,
    scrollProgress: true,
    meshGradient: false,
    gradientBorders: false,
    cursorGlow: false,
  },
  animationPreset: "dramatic",
  serviceCardStyle: "overlay",
  projectGridStyle: "masonry",
  testimonialStyle: "carousel",
  statsStyle: "overlay",
  bgPattern: "none",
  homeSectionOrder: [
    "hero", "marquee", "services", "portfolio", "stats", "about", "whyChooseUs", "testimonials", "cta"
  ],
};

const siteData = {
  business: {
    name: "GYMNATION FITNESS",
    legalName: "GYMNATION FITNESS",
    tagline: "Where Harare Comes to Train",
    description: "GYMNATION FITNESS is Harare's high-energy fitness destination. Located in the CBD at Netone Building, we offer strength training, cardio, group classes, and personal training at rates that make fitness accessible.",
    phone: "+263 78 129 2959",
    phoneRaw: "+263781292959",
    whatsappNumber: "263781292959",
    email: "info@gymnationfitness.co.zw",
    address: "Netone Building cnr Rotten Raw, Jason Moyo Ave, Harare, Zimbabwe",
    country: "Zimbabwe",
    city: "Harare",
    rating: 4.8,
    ratingRounded: 5,
    reviewCount: 4,
    established: "2020",
    yearsExperience: "4+",
    projectsCompleted: "1500+",
    employees: "15+",
    coordinates: { lat: -17.8292, lng: 31.0522 },
    hours: [
      { day: "Monday - Friday", time: "8:00 AM - 5:00 PM" },
      { day: "Saturday", time: "9:00 AM - 1:00 PM" },
      { day: "Sunday", time: "Closed" },
    ],
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.5!2d31.0522!3d-17.8292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDQ5JzQ1LjEiUyAzMcKwMDMnMDguMCJF!5e0!3m2!1sen!2szw!4v1700000000000!5m2!1sen!2szw",
    cookieConsentKey: "gymnation-fitness-cookie-consent",
    socialLinks: {
      facebook: "#",
      instagram: "#",
      linkedin: "#",
    },
  },

  navbar: {
    logoImage: null,
    logoLine1: "GYMNATION",
    logoLine2: "FITNESS",
  },

  hero: {
    badge: "Harare CBD's Premier Fitness Destination",
    titleParts: [
      { text: "UNLEASH" },
      { text: "YOUR POWER", highlight: true },
      { text: "AT GYMNATION." },
    ],
    subtitle: "GYMNATION FITNESS is Harare's high-energy fitness destination. Located in the CBD at Netone Building, we offer strength training, cardio, group classes, and personal training at rates that make fitness accessible.",
    ctaPrimary: "Join Now",
    ctaSecondary: "View Memberships",
    trustBadge: "1500+ Clients Served",
    backgroundImages: [
      { url: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=85", alt: "Modern gym interior with equipment" },
      { url: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1920&q=85", alt: "Athletes training with weights" },
      { url: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=85", alt: "Fitness centre cardio zone" },
    ],
  },

  stats: [
    { number: "1500+", label: "Active Members" },
    { number: "4+", label: "Years Open" },
    { number: "6AM-9PM", label: "Daily Hours" },
    { number: "4.8", label: "Google Rating" },
  ],

  servicesPreview: [
    { title: "Strength Training", desc: "Free weights, machines, and functional training zones designed for beginners to advanced lifters.", icon: "Star" },
    { title: "Cardio Zone", desc: "Treadmills, bikes, ellipticals, and rowing machines with personal entertainment screens.", icon: "Heart" },
    { title: "Group Fitness", desc: "High-energy classes including spinning, HIIT, yoga, aerobics, and circuit training.", icon: "Briefcase" },
    { title: "Personal Training", desc: "One-on-one coaching with certified trainers. Custom programmes, nutrition guidance, and progress tracking.", icon: "Lightbulb" },
    { title: "Boxing & MMA", desc: "Heavy bags, speed bags, and a training ring. Classes for fitness boxing and competitive fighters.", icon: "Buildings" },
    { title: "Recovery & Wellness", desc: "Sauna, steam room, stretching zone, and sports massage to accelerate recovery and prevent injury.", icon: "Leaf" },
  ],

  services: {
    heroTitle: "Our Services",
    heroSubtitle: "Comprehensive solutions tailored to your needs.",
    items: [
      {
        title: "Strength Training",
        slug: "strength-training",
        desc: "Our strength floor is equipped with premium free weights, plate-loaded machines, cable stations, and functional training rigs. Whether you are a beginner learning compound lifts or an experienced athlete pushing new PRs, our facility has the equipment and space you need.",
        features: ["Free Weights", "Machine Circuit", "Cable Stations", "Power Racks", "Olympic Platforms", "Functional Zone"],
        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
      },
      {
        title: "Cardio Zone",
        slug: "cardio-zone",
        desc: "Burn calories, build endurance, and improve cardiovascular health in our dedicated cardio zone. Equipped with the latest treadmills, stationary bikes, ellipticals, rowing machines, and stair climbers -- each with personal screens and Bluetooth connectivity.",
        features: ["Treadmills", "Stationary Bikes", "Ellipticals", "Rowing Machines", "Stair Climbers", "Heart Rate Tracking"],
        image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80",
      },
      {
        title: "Group Fitness",
        slug: "group-fitness",
        desc: "There is power in numbers. Our group fitness timetable offers something for every fitness level -- from high-intensity HIIT sessions and spinning classes to calming yoga flows and energetic aerobics. Led by qualified instructors who know how to push and motivate.",
        features: ["Spinning", "HIIT Classes", "Yoga & Pilates", "Aerobics", "Circuit Training", "Dance Fitness"],
        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
      },
      {
        title: "Personal Training",
        slug: "personal-training",
        desc: "Results require a plan. Our certified personal trainers design custom programmes based on your goals, fitness level, and lifestyle. Every session is purposeful, every week is progressive, and every milestone is celebrated.",
        features: ["Custom Programmes", "Nutrition Coaching", "Progress Tracking", "Flexible Scheduling", "Body Composition", "Goal Setting"],
        image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80",
      },
      {
        title: "Boxing & MMA",
        slug: "boxing-mma",
        desc: "Whether you want to learn self-defence, compete in the ring, or just smash a heavy bag to de-stress, our combat sports area has you covered. Heavy bags, speed bags, a training ring, and classes for all levels.",
        features: ["Heavy Bag Zone", "Speed Bags", "Training Ring", "Boxing Classes", "MMA Fundamentals", "Fitness Boxing"],
        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
      },
      {
        title: "Recovery & Wellness",
        slug: "recovery-wellness",
        desc: "Training hard means recovering smart. Our wellness facilities include a sauna, steam room, dedicated stretching zone, and sports massage services to help your body repair, rebuild, and come back stronger.",
        features: ["Sauna", "Steam Room", "Stretching Zone", "Sports Massage", "Cold Plunge", "Recovery Classes"],
        image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80",
      },
    ],
  },

  projects: {
    heroTitle: "Our Portfolio",
    heroSubtitle: "A selection of our work that showcases our capabilities.",
    items: [
      {
        title: "Corporate Wellness Programme",
        slug: "corporate-wellness-programme",
        category: "Corporate",
        location: "Harare, Zimbabwe",
        desc: "Designed and delivered a 6-month fitness programme for 80 employees of a banking institution.",
        client: "Financial Institution",
        services: ["Service A", "Service B", "Service C"],
        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
        images: ["https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80", "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80"],
      },
      {
        title: "Transformation Challenge",
        slug: "transformation-challenge",
        category: "Community",
        location: "Harare, Zimbabwe",
        desc: "12-week body transformation competition with 50 participants, producing 5 dramatic success stories.",
        client: "Community Event",
        services: ["Service A", "Service B", "Service C"],
        image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80",
        images: ["https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80", "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80"],
      },
      {
        title: "Boxing Bootcamp Series",
        slug: "boxing-bootcamp-series",
        category: "Events",
        location: "Harare, Zimbabwe",
        desc: "8-week outdoor boxing bootcamp that attracted 120 participants and converted 40 to memberships.",
        client: "Marketing Event",
        services: ["Service A", "Service B", "Service C"],
        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
        images: ["https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80", "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80"],
      },
      {
        title: "Personal Training Showcase",
        slug: "personal-training-showcase",
        category: "Training",
        location: "Harare, Zimbabwe",
        desc: "3-month intensive personal training programme that helped a client lose 25kg and compete in their first 10K.",
        client: "Individual Client",
        services: ["Service A", "Service B", "Service C"],
        image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80",
        images: ["https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80", "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80"],
      },
      {
        title: "Youth Athletics Programme",
        slug: "youth-athletics-programme",
        category: "Community",
        location: "Harare, Zimbabwe",
        desc: "After-school fitness programme for 30 teenagers focused on strength, discipline, and confidence.",
        client: "Community Outreach",
        services: ["Service A", "Service B", "Service C"],
        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
        images: ["https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80", "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80"],
      },
      {
        title: "Equipment Upgrade Project",
        slug: "equipment-upgrade-project",
        category: "Facility",
        location: "Harare, Zimbabwe",
        desc: "Complete gym floor redesign with new equipment layout, flooring, and ventilation improvements.",
        client: "Internal Project",
        services: ["Service A", "Service B", "Service C"],
        image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80",
        images: ["https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80", "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80"],
      },
    ],
  },

  homeTestimonials: [
    { text: "I have been training at GYMNATION FITNESS since they opened and the facility just keeps getting better. Great equipment, great atmosphere, and the trainers actually care.", name: "Tendai Moyo", role: "Member Since Day One", rating: 5, avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80" },
    { text: "My personal trainer at GYMNATION FITNESS completely changed my fitness journey. I have lost 15kg, gained confidence, and actually look forward to training every day.", name: "Grace Chipunza", role: "Personal Training Client", rating: 5, avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&q=80" },
    { text: "The boxing classes at GYMNATION FITNESS are the best workout I have ever had. The instructor pushes you hard but safely. I am hooked and my fitness has never been better.", name: "Robert Manyame", role: "Boxing Class Regular", rating: 5, avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&q=80" },
    { text: "Our company enrolled in GYMNATION FITNESS's corporate wellness programme and the results were incredible. Healthier staff, fewer sick days, and better team morale.", name: "Farai Chisango", role: "Corporate Wellness Participant", rating: 5, avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80" },
  ],

  about: {
    heroTitle: "Our Story",
    heroSubtitle: "Built on expertise, driven by results.",
    story: [
      "GYMNATION FITNESS opened in 2020 with a mission to make serious fitness training accessible to every Harare resident. Located in the CBD at Netone Building, we put a world-class gym within reach of the city centre.",
      "With over 1,500 active members, a full range of equipment, and classes running throughout the day, GYMNATION has become the place Harare comes to train, transform, and belong.",
    ],
    values: [
      { title: "Quality First", desc: "We never compromise on the quality of our work. Every project receives our full attention and best effort." },
      { title: "Transparent Pricing", desc: "No hidden fees, no surprises. We quote honestly and invoice accurately." },
      { title: "Expert Team", desc: "Our team brings years of specialist experience to every project we undertake." },
      { title: "Client Focus", desc: "Your satisfaction is our measure of success. We listen, adapt, and deliver." },
    ],
    team: [
      { name: "Team Leader", role: "Director", bio: "Leading GYMNATION FITNESS with expertise and vision.", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" },
      { name: "Operations Manager", role: "Operations", bio: "Ensuring every project runs smoothly and on schedule.", image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80" },
      { name: "Technical Lead", role: "Technical", bio: "Bringing specialist expertise to every engagement.", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80" },
    ],
  },

  reviews: {
    heroTitle: "Client Voices",
    heroSubtitle: "Hear from the people who trust us with their most important needs.",
    items: [
      { text: "I have been training at GYMNATION FITNESS since they opened and the facility just keeps getting better. Great equipment, great atmosphere, and the trainers actually care.", name: "Tendai Moyo", role: "Member Since Day One", rating: 5 },
      { text: "My personal trainer at GYMNATION FITNESS completely changed my fitness journey. I have lost 15kg, gained confidence, and actually look forward to training every day.", name: "Grace Chipunza", role: "Personal Training Client", rating: 5 },
      { text: "The boxing classes at GYMNATION FITNESS are the best workout I have ever had. The instructor pushes you hard but safely. I am hooked and my fitness has never been better.", name: "Robert Manyame", role: "Boxing Class Regular", rating: 5 },
      { text: "Our company enrolled in GYMNATION FITNESS's corporate wellness programme and the results were incredible. Healthier staff, fewer sick days, and better team morale.", name: "Farai Chisango", role: "Corporate Wellness Participant", rating: 5 },
      { text: "Best gym in the CBD, hands down. GYMNATION FITNESS has everything I need and the membership price is fair.", name: "Simba Karonga", role: "Daily Trainer", rating: 5 },
      { text: "The group fitness classes at GYMNATION FITNESS are my weekly highlight. Great instructors, great energy, great results.", name: "Douglas Mhizha", role: "Group Class Fan", rating: 5 },
      { text: "Clean facilities, well-maintained equipment, and staff who actually greet you by name. GYMNATION FITNESS feels like home.", name: "Linda Masuku", role: "Long-Term Member", rating: 5 },
      { text: "Lost 20kg training at GYMNATION FITNESS with their personal training programme. Life-changing.", name: "Patrick Makoni", role: "Transformation Client", rating: 5 },
      { text: "Started boxing classes at GYMNATION FITNESS for stress relief and now I am competing. Never expected that!", name: "Angela Mhembere", role: "Boxing Convert", rating: 5 },
      { text: "The recovery facilities at GYMNATION FITNESS -- sauna, stretching zone -- are underrated. Essential after hard training.", name: "Brian Mutema", role: "Recovery Enthusiast", rating: 5 },
    ],
  },

  careers: {
    heroTitle: "Join Our Team",
    heroSubtitle: "We are always looking for talented people who share our passion for excellence.",
    positions: [],
  },

  contact: {
    heroTitle: "Get in Touch",
    heroSubtitle: "We would love to hear from you. Reach out and let us discuss how we can help.",
    branches: [
      { name: "Main Office", address: "Netone Building cnr Rotten Raw, Jason Moyo Ave, Harare, Zimbabwe", phone: "+263 78 129 2959", email: "info@gymnationfitness.co.zw" },
    ],
  },

  homeCta: {
    title: "YOUR FITNESS, STARTS NOW",
    subtitle: "GYMNATION FITNESS is Harare's high-energy fitness destination. Located in the CBD at Netone Building, we offer strength training, cardio, group classes, and personal training at rates that make fitness accessible.",
    ctaPrimary: "Join Now",
    ctaSecondary: "Chat on WhatsApp",
    whatsappText: "Hello GYMNATION! I want to enquire about membership.",
    backgroundImage: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1920&q=85",
  },

  footer: {
    description: "GYMNATION FITNESS is Harare's high-energy fitness destination. Located in the CBD at Netone Building, we offer strength ...",
    copyright: "GYMNATION FITNESS",
  },
};

export default siteData;