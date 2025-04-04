export interface Attraction {
  id: number;
  name: string;
  description: string;
  image: string;
  rating: number;
  price: string;
  duration: string;
  tips: string;
}

export interface Accommodation {
  type: string;
  examples: string;
  priceRange: string;
}

export interface Destination {
  id: number;
  name: string;
  image: string;
  description: string;
  longDescription: string;
  category: string;
  rating: number;
  location: string;
  bestTimeToVisit: string;
  priceRange: string;
  virtualTourUrl: string;
  highlights: string[];
  images: string[];
  attractions: Attraction[];
  weather: {
    spring: string;
    summer: string;
    autumn: string;
    winter: string;
  };
  transportation: string[];
  accommodation: Accommodation[];
  cuisine: string[];
}

export const destinations: Destination[] = [
  {
    id: 1,
    name: 'Paris, France',
    image: '/images/paris.jpg',
    description: 'The City of Light awaits with its iconic landmarks and romantic atmosphere.',
    longDescription: `Paris, France's capital, is a major European city and a global center for art, fashion, gastronomy and culture. Its 19th-century cityscape is crisscrossed by wide boulevards and the River Seine. Beyond such landmarks as the Eiffel Tower and the 12th-century, Gothic Notre-Dame cathedral, the city is known for its cafe culture and designer boutiques along the Rue du Faubourg Saint-Honoré.`,
    category: 'City',
    rating: 4.8,
    location: 'France',
    bestTimeToVisit: 'April to October',
    priceRange: '$$$',
    virtualTourUrl: 'https://www.360cities.net/image/arc-de-triomphe-paris-2024',
    highlights: [
      'Eiffel Tower',
      'Louvre Museum',
      'Notre-Dame Cathedral',
      'Champs-Élysées',
      'Seine River',
    ],
    images: [
      '/images/gallery/paris/1.jpg',
      '/images/gallery/paris/2.jpg',
      '/images/gallery/paris/3.jpg',
      '/images/gallery/paris/4.jpg',
      '/images/gallery/paris/5.jpg',
      '/images/gallery/paris/6.jpg',
    ],
    attractions: [
      {
        id: 1,
        name: 'Eiffel Tower',
        description: 'The iconic symbol of Paris, standing at 324 meters tall. Visit the observation decks for breathtaking views of the city.',
        image: '/images/attractions/eiffel-tower.jpg',
        rating: 4.8,
        price: '€26',
        duration: '2-3 hours',
        tips: 'Book tickets online to avoid long queues. Visit at sunset for the best views.'
      },
      {
        id: 2,
        name: 'Louvre Museum',
        description: 'The world\'s largest art museum, home to the Mona Lisa and thousands of other masterpieces.',
        image: '/images/attractions/louvre.jpg',
        rating: 4.7,
        price: '€17',
        duration: '3-4 hours',
        tips: 'Enter through the Carrousel du Louvre to avoid the main entrance lines. Free entry on first Sunday of each month.'
      },
      {
        id: 3,
        name: 'Notre-Dame Cathedral',
        description: 'A masterpiece of French Gothic architecture, known for its stunning stained glass windows and gargoyles.',
        image: '/images/attractions/notre-dame.jpg',
        rating: 4.9,
        price: 'Free',
        duration: '1-2 hours',
        tips: 'Climb the towers for a close-up view of the gargoyles and panoramic city views.'
      },
      {
        id: 4,
        name: 'Champs-Élysées',
        description: 'Paris\'s most famous avenue, lined with luxury shops, theaters, and cafes.',
        image: '/images/attractions/champs-elysees.jpg',
        rating: 4.6,
        price: 'Free',
        duration: '2-3 hours',
        tips: 'Visit in the evening when the avenue is beautifully lit. Start from the Arc de Triomphe and walk towards the Louvre.'
      },
      {
        id: 5,
        name: 'Seine River Cruise',
        description: 'Experience Paris from the water with a scenic boat tour along the Seine River.',
        image: '/images/attractions/seine.jpg',
        rating: 4.7,
        price: '€15',
        duration: '1 hour',
        tips: 'Take the cruise at night to see the city illuminated. Audio guides are available in multiple languages.'
      },
      {
        id: 6,
        name: 'Montmartre',
        description: 'Historic artistic neighborhood with the stunning Sacré-Cœur Basilica and charming streets.',
        image: '/images/attractions/montmartre.jpg',
        rating: 4.8,
        price: 'Free',
        duration: '3-4 hours',
        tips: 'Visit early in the morning to avoid crowds. Don\'t miss the artists\' square, Place du Tertre.'
      }
    ],
    weather: {
      spring: 'Mild (10-15°C)',
      summer: 'Warm (20-25°C)',
      autumn: 'Cool (10-15°C)',
      winter: 'Cold (5-10°C)',
    },
    transportation: [
      'Metro: The fastest way to get around Paris',
      'Bus: Extensive network covering the entire city',
      'RER: Connects central Paris with suburbs',
      'Taxis: Available throughout the city',
      'Bikes: Vélib\' bike-sharing system',
    ],
    accommodation: [
      {
        type: 'Luxury',
        examples: 'Ritz Paris, Four Seasons Hotel George V',
        priceRange: '€500+ per night',
      },
      {
        type: 'Mid-Range',
        examples: 'Hotel de Crillon, Le Grand Hotel',
        priceRange: '€200-500 per night',
      },
      {
        type: 'Budget',
        examples: 'Generator Paris, St Christopher\'s Inn',
        priceRange: '€50-200 per night',
      },
    ],
    cuisine: [
      'Croissants and Pain au Chocolat',
      'French Onion Soup',
      'Coq au Vin',
      'Beef Bourguignon',
      'Crème Brûlée',
      'Macarons',
      'French Wine and Cheese',
    ],
  },
  {
    id: 2,
    name: 'Tokyo, Japan',
    description: 'A bustling metropolis that seamlessly blends the ultramodern and the traditional.',
    longDescription: 'Tokyo, Japan\'s busy capital, mixes the ultramodern and the traditional, from neon-lit skyscrapers to historic temples. The opulent Meiji Shinto Shrine is known for its towering gate and surrounding woods. The Imperial Palace sits amid large public gardens. The city\'s many museums offer everything from classical art to a reconstructed kabuki theater.',
    image: '/images/tokyo.jpg',
    category: 'City',
    location: 'Japan',
    highlights: [
      'Shibuya Crossing',
      'Senso-ji Temple',
      'Tokyo Skytree',
      'Tsukiji Outer Market',
      'Shinjuku Gyoen National Garden'
    ],
    images: [
      '/images/tokyo.jpg',
      '/images/tokyo2.jpg',
      '/images/tokyo3.jpg',
      '/images/tokyo4.jpg',
    ],
    rating: 4.7,
    bestTimeToVisit: 'March to May and September to November',
    priceRange: '$$$',
    weather: {
      spring: 'Mild (15-20°C), cherry blossom season',
      summer: 'Hot and humid (25-30°C), rainy season in June',
      autumn: 'Pleasant (15-20°C), colorful foliage',
      winter: 'Cool (5-10°C), occasional snow'
    },
    transportation: [
      'Extensive train and subway system',
      'JR Pass for long-distance travel',
      'Prepaid IC cards for easy payment',
      'Taxis are available but expensive'
    ],
    accommodation: [
      {
        type: 'Luxury Hotels',
        examples: 'Mandarin Oriental Tokyo, Park Hyatt Tokyo, The Peninsula Tokyo',
        priceRange: '¥50,000+ per night'
      },
      {
        type: 'Business Hotels',
        examples: 'Tokyu Stay, Hotel Century Southern Tower, Citadines Central Shinjuku',
        priceRange: '¥15,000-¥30,000 per night'
      },
      {
        type: 'Capsule Hotels',
        examples: 'Nine Hours, Capsule Hotel Asakusa River Side, Book and Bed Tokyo',
        priceRange: '¥3,000-¥5,000 per night'
      },
      {
        type: 'Ryokan (Traditional)',
        examples: 'Ryokan Sawanoya, Ryokan Kamogawa Asakusa, Ryokan Katsutaro',
        priceRange: '¥10,000-¥30,000 per night'
      }
    ],
    cuisine: [
      'Sushi and sashimi at Tsukiji Outer Market',
      'Ramen in various styles (shoyu, miso, tonkotsu)',
      'Tempura at specialized restaurants',
      'Street food in Asakusa and other districts',
      'Izakaya (Japanese pub) dining experience'
    ],
    attractions: [
      {
        id: 1,
        name: 'Senso-ji Temple',
        description: 'Ancient Buddhist temple located in Asakusa, Tokyo, Japan.',
        image: '/images/sensoji.jpg',
        price: 'Free',
        duration: '1-2 hours',
        rating: 4.6,
        tips: 'Visit early morning to avoid crowds. Try traditional snacks at Nakamise shopping street.'
      },
      {
        id: 2,
        name: 'Shibuya Crossing',
        description: 'Famous intersection and scramble crossing in Shibuya, Tokyo.',
        image: '/images/shibuya.jpg',
        price: 'Free',
        duration: '30 minutes',
        rating: 4.5,
        tips: 'View from Starbucks or Shibuya Sky for the best perspective. Visit at different times of day for different experiences.'
      },
      {
        id: 3,
        name: 'Tokyo Skytree',
        description: 'Tallest structure in Japan and second-tallest in the world at the time of its completion.',
        image: '/images/skytree.jpg',
        price: '¥3,100',
        duration: '2-3 hours',
        rating: 4.7,
        tips: 'Book tickets online to avoid queues. Visit at sunset for city lights. Check weather forecast for clear views.'
      }
    ],
    virtualTourUrl: 'https://www.360cities.net/image/shibuya-crossing-tokyo'
  },
  {
    id: 3,
    name: 'New York City, USA',
    description: 'The city that never sleeps, offering iconic landmarks, world-class museums, and diverse neighborhoods.',
    longDescription: 'New York City comprises 5 boroughs sitting where the Hudson River meets the Atlantic Ocean. At its core is Manhattan, a densely populated borough that\'s among the world\'s major commercial, financial and cultural centers. Its iconic sites include skyscrapers such as the Empire State Building and sprawling Central Park. Broadway theater is staged in neon-lit Times Square.',
    image: '/images/newyork.jpg',
    category: 'City',
    location: 'USA',
    highlights: [
      'Times Square',
      'Central Park',
      'Empire State Building',
      'Statue of Liberty',
      'Brooklyn Bridge'
    ],
    images: [
      '/images/newyork.jpg',
      '/images/newyork2.jpg',
      '/images/newyork3.jpg',
      '/images/newyork4.jpg',
    ],
    rating: 4.6,
    bestTimeToVisit: 'April to June and September to November',
    priceRange: '$$$',
    weather: {
      spring: 'Mild (10-20°C), occasional rain',
      summer: 'Hot and humid (25-30°C), occasional thunderstorms',
      autumn: 'Cool (10-20°C), colorful foliage',
      winter: 'Cold (0-10°C), snow and ice'
    },
    transportation: [
      'Subway system is extensive and runs 24/7',
      'Buses connect areas not served by subway',
      'Taxis and ride-sharing services readily available',
      'Walking is a great way to explore Manhattan'
    ],
    accommodation: [
      {
        type: 'Luxury Hotels',
        examples: 'The Plaza, The St. Regis New York, The Ritz-Carlton New York',
        priceRange: '$500+ per night'
      },
      {
        type: 'Boutique Hotels',
        examples: 'The Greenwich Hotel, The NoMad Hotel, The Bowery Hotel',
        priceRange: '$200-$500 per night'
      },
      {
        type: 'Mid-Range Hotels',
        examples: 'The Jane Hotel, citizenM New York Times Square, Hotel Indigo Lower East Side',
        priceRange: '$100-$200 per night'
      },
      {
        type: 'Budget Options',
        examples: 'HI NYC Hostel, The Local NYC, Jazz on the Park Hostel',
        priceRange: '$50-$100 per night'
      }
    ],
    cuisine: [
      'New York-style pizza and bagels',
      'Street food: hot dogs, pretzels, halal carts',
      'Diverse international cuisines in various neighborhoods',
      'Fine dining at world-renowned restaurants',
      'Food markets: Chelsea Market, Smorgasburg'
    ],
    attractions: [
      {
        id: 1,
        name: 'Statue of Liberty',
        description: 'Iconic copper statue on Liberty Island in New York Harbor.',
        image: '/images/statue-of-liberty.jpg',
        price: '$24.50',
        duration: '3-4 hours',
        rating: 4.8,
        tips: 'Book tickets in advance, especially for crown access. Arrive early to avoid crowds. Take the audio tour for historical context.'
      },
      {
        id: 2,
        name: 'Central Park',
        description: 'Urban oasis in the heart of Manhattan, featuring walking trails, lakes, and various attractions.',
        image: '/images/central-park.jpg',
        price: 'Free',
        duration: '2-6 hours',
        rating: 4.9,
        tips: 'Rent a bike to cover more ground. Visit Bethesda Fountain and the Conservatory Garden. Check event calendar for performances.'
      },
      {
        id: 3,
        name: 'Empire State Building',
        description: 'Iconic 102-story skyscraper in Midtown Manhattan.',
        image: '/images/empire-state.jpg',
        price: '$44',
        duration: '1-2 hours',
        rating: 4.7,
        tips: 'Visit at sunset for city lights. Book online to skip lines. Consider the "Dawn Patrol" for sunrise views.'
      }
    ],
    virtualTourUrl: 'https://www.360cities.net/image/times-square-new-york'
  },
  {
    id: 4,
    name: 'Sydney, Australia',
    description: 'A vibrant metropolis known for its stunning harbor, iconic Opera House, and beautiful beaches.',
    longDescription: 'Sydney, capital of New South Wales and one of Australia\'s largest cities, is best known for its harbourfront Sydney Opera House, with a distinctive sail-like design. Massive Darling Harbour and the smaller Circular Quay port are hubs of waterside life, with the arched Harbour Bridge and esteemed Royal Botanic Garden nearby. Sydney Tower\'s outdoor platform, the Skywalk, offers 360-degree views of the city and suburbs.',
    image: '/images/sydney.jpg',
    category: 'City',
    location: 'Australia',
    highlights: [
      'Sydney Opera House',
      'Sydney Harbour Bridge',
      'Bondi Beach',
      'Darling Harbour',
      'Royal Botanic Garden'
    ],
    images: [
      '/images/sydney.jpg',
      '/images/sydney2.jpg',
      '/images/sydney3.jpg',
      '/images/sydney4.jpg',
    ],
    rating: 4.7,
    bestTimeToVisit: 'September to November and March to May',
    priceRange: '$$$',
    weather: {
      spring: 'Mild to warm (15-25°C), occasional rain',
      summer: 'Hot (25-30°C), high humidity, occasional storms',
      autumn: 'Mild (15-25°C), decreasing rain',
      winter: 'Cool (10-15°C), occasional rain'
    },
    transportation: [
      'Opal card for public transport (trains, buses, ferries)',
      'Sydney Metro for rapid transit',
      'Ferries across Sydney Harbour',
      'Taxis and ride-sharing services available'
    ],
    accommodation: [
      {
        type: 'Luxury Hotels',
        examples: 'Four Seasons Hotel Sydney, Park Hyatt Sydney, Shangri-La Hotel Sydney',
        priceRange: 'AUD 500+ per night'
      },
      {
        type: 'Boutique Hotels',
        examples: 'QT Sydney, The Old Clare Hotel, Ovolo Woolloomooloo',
        priceRange: 'AUD 200-500 per night'
      },
      {
        type: 'Mid-Range Hotels',
        examples: 'Meriton Suites, Adina Apartment Hotel, Vibe Hotel Sydney',
        priceRange: 'AUD 150-300 per night'
      },
      {
        type: 'Budget Options',
        examples: 'Sydney Harbour YHA, Wake Up! Sydney Central, Base Backpackers',
        priceRange: 'AUD 30-100 per night'
      }
    ],
    cuisine: [
      'Fresh seafood at Sydney Fish Market',
      'Modern Australian cuisine',
      'Asian fusion restaurants',
      'Café culture with brunch options',
      'Wine bars and craft beer venues'
    ],
    attractions: [
      {
        id: 1,
        name: 'Sydney Opera House',
        description: 'Multi-venue performing arts centre at Sydney Harbour, known for its distinctive shell-like design.',
        image: '/images/opera-house.jpg',
        price: 'AUD 42',
        duration: '1-2 hours',
        rating: 4.9,
        tips: 'Book a guided tour for behind-the-scenes access. Take photos from Mrs Macquarie\'s Chair. Attend a performance for the full experience.'
      },
      {
        id: 2,
        name: 'Sydney Harbour Bridge',
        description: 'Steel arch bridge across Sydney Harbour, offering climbing experiences and pedestrian access.',
        image: '/images/harbour-bridge.jpg',
        price: 'Free (walking), AUD 304 (climb)',
        duration: '1-3 hours',
        rating: 4.8,
        tips: 'Walk across for free views. Book BridgeClimb in advance for the ultimate experience. Visit at sunset for golden hour photos.'
      },
      {
        id: 3,
        name: 'Bondi Beach',
        description: 'Famous beach and surrounding suburb in Sydney, known for surfing and coastal walks.',
        image: '/images/bondi.jpg',
        price: 'Free',
        duration: '2-6 hours',
        rating: 4.7,
        tips: 'Visit early morning for fewer crowds. Walk the Bondi to Coogee Coastal Walk. Check surf conditions before swimming.'
      }
    ],
    virtualTourUrl: 'https://www.360cities.net/image/sydney-opera-house'
  },
  {
    id: 5,
    name: 'Rome, Italy',
    image: '/images/rome.jpg',
    description: 'The Eternal City, where ancient history meets vibrant modern life.',
    longDescription: 'Rome, Italy\'s capital, is a sprawling, cosmopolitan city with nearly 3,000 years of globally influential art, architecture and culture on display. Ancient ruins such as the Forum and the Colosseum evoke the power of the former Roman Empire. Vatican City, headquarters of the Roman Catholic Church, has St. Peter\'s Basilica and the Vatican Museums, which house masterpieces such as the Sistine Chapel frescoes.',
    category: 'City',
    rating: 4.8,
    location: 'Italy',
    bestTimeToVisit: 'April to June and September to October',
    priceRange: '$$$',
    virtualTourUrl: 'https://www.360cities.net/image/colosseum-rome',
    highlights: [
      'Colosseum',
      'Vatican Museums',
      'Trevi Fountain',
      'Roman Forum',
      'Pantheon'
    ],
    images: [
      '/images/rome.jpg',
      '/images/rome2.jpg',
      '/images/rome3.jpg',
      '/images/rome4.jpg',
    ],
    attractions: [
      {
        id: 1,
        name: 'Colosseum',
        description: 'The iconic ancient Roman amphitheater, once the site of gladiatorial contests and public spectacles.',
        image: '/images/attractions/colosseum.jpg',
        rating: 4.9,
        price: '€16',
        duration: '2-3 hours',
        tips: 'Book skip-the-line tickets in advance. Visit early morning or late afternoon to avoid crowds.'
      },
      {
        id: 2,
        name: 'Vatican Museums',
        description: 'Home to one of the world\'s greatest art collections, including the Sistine Chapel.',
        image: '/images/attractions/vatican.jpg',
        rating: 4.8,
        price: '€17',
        duration: '3-4 hours',
        tips: 'Book tickets online to avoid long queues. Dress modestly as it\'s a religious site.'
      },
      {
        id: 3,
        name: 'Trevi Fountain',
        description: 'The largest Baroque fountain in the city and one of the most famous fountains in the world.',
        image: '/images/attractions/trevi.jpg',
        rating: 4.7,
        price: 'Free',
        duration: '30 minutes',
        tips: 'Visit early morning or late evening to avoid crowds. Don\'t forget to throw a coin over your shoulder.'
      }
    ],
    weather: {
      spring: 'Mild to warm (15-22°C), occasional rain',
      summer: 'Hot (25-35°C), dry',
      autumn: 'Mild (15-22°C), increasing rain',
      winter: 'Cool (5-15°C), occasional rain'
    },
    transportation: [
      'Metro: Fast and efficient way to get around',
      'Bus: Extensive network covering the entire city',
      'Tram: Connects central Rome with suburbs',
      'Taxis: Available throughout the city',
      'Walking: Best way to explore the historic center'
    ],
    accommodation: [
      {
        type: 'Luxury',
        examples: 'Hotel de Russie, Hassler Roma, St. Regis Rome',
        priceRange: '€400+ per night'
      },
      {
        type: 'Mid-Range',
        examples: 'Hotel Artemide, Hotel Quirinale, Hotel Delle Muse',
        priceRange: '€150-400 per night'
      },
      {
        type: 'Budget',
        examples: 'Generator Rome, YellowSquare, The Beehive',
        priceRange: '€50-150 per night'
      }
    ],
    cuisine: [
      'Roman-style pizza',
      'Pasta dishes (Carbonara, Cacio e Pepe)',
      'Saltimbocca alla Romana',
      'Supplì (fried rice balls)',
      'Gelato',
      'Italian coffee and pastries'
    ]
  },
  {
    id: 6,
    name: 'Barcelona, Spain',
    image: '/images/barcelona.jpg',
    description: 'A vibrant city known for its unique architecture, beaches, and Catalan culture.',
    longDescription: 'Barcelona, the cosmopolitan capital of Spain\'s Catalonia region, is known for its art and architecture. The fantastical Sagrada Família church and other modernist landmarks designed by Antoni Gaudí dot the city. Museu Picasso and Fundació Joan Miró feature modern art by their namesakes. City history museum MUHBA, includes several Roman archaeological sites.',
    category: 'City',
    rating: 4.7,
    location: 'Spain',
    bestTimeToVisit: 'May to June and September to October',
    priceRange: '$$$',
    virtualTourUrl: 'https://www.360cities.net/image/sagrada-familia-barcelona',
    highlights: [
      'Sagrada Familia',
      'Park Güell',
      'La Rambla',
      'Gothic Quarter',
      'Barceloneta Beach'
    ],
    images: [
      '/images/barcelona.jpg',
      '/images/barcelona2.jpg',
      '/images/barcelona3.jpg',
      '/images/barcelona4.jpg',
    ],
    attractions: [
      {
        id: 1,
        name: 'Sagrada Familia',
        description: 'Antoni Gaudí\'s unfinished masterpiece, a unique basilica with distinctive spires and organic architecture.',
        image: '/images/attractions/sagrada.jpg',
        rating: 4.9,
        price: '€26',
        duration: '2-3 hours',
        tips: 'Book tickets online well in advance. Audio guides are worth the extra cost.'
      },
      {
        id: 2,
        name: 'Park Güell',
        description: 'A public park system with gardens and architectural elements designed by Gaudí.',
        image: '/images/attractions/park-guell.jpg',
        rating: 4.8,
        price: '€10',
        duration: '2-3 hours',
        tips: 'Book timed entry tickets online. Visit early morning or late afternoon for fewer crowds.'
      },
      {
        id: 3,
        name: 'Gothic Quarter',
        description: 'The heart of the old city, with narrow medieval streets and historic buildings.',
        image: '/images/attractions/gothic-quarter.jpg',
        rating: 4.7,
        price: 'Free',
        duration: '3-4 hours',
        tips: 'Get lost in the narrow streets. Visit the Barcelona Cathedral and Plaça Reial.'
      }
    ],
    weather: {
      spring: 'Mild to warm (15-22°C), occasional rain',
      summer: 'Hot (25-30°C), dry',
      autumn: 'Mild (15-22°C), increasing rain',
      winter: 'Cool (8-15°C), occasional rain'
    },
    transportation: [
      'Metro: Fast and efficient way to get around',
      'Bus: Extensive network covering the entire city',
      'Tram: Connects central Barcelona with suburbs',
      'Taxis: Available throughout the city',
      'Bikes: Bicing bike-sharing system'
    ],
    accommodation: [
      {
        type: 'Luxury',
        examples: 'Hotel Arts Barcelona, W Barcelona, Mandarin Oriental Barcelona',
        priceRange: '€300+ per night'
      },
      {
        type: 'Mid-Range',
        examples: 'Hotel Soho Barcelona, Hotel 1898, Hotel Neri',
        priceRange: '€150-300 per night'
      },
      {
        type: 'Budget',
        examples: 'Generator Barcelona, Hostel One Paralelo, Kabul Party Hostel',
        priceRange: '€30-150 per night'
      }
    ],
    cuisine: [
      'Paella',
      'Tapas',
      'Patatas Bravas',
      'Jamón Ibérico',
      'Seafood',
      'Catalan cream dessert'
    ]
  },
  {
    id: 7,
    name: 'Dubai, UAE',
    image: '/images/dubai.jpg',
    description: 'A futuristic city of skyscrapers, luxury shopping, and desert adventures.',
    longDescription: 'Dubai is a city and emirate in the United Arab Emirates known for luxury shopping, ultramodern architecture and a lively nightlife scene. Dubai is also a major global transport hub for passengers and cargo. Oil revenue helped accelerate the early development of the city, but its reserves are limited and production levels are low: today, less than 5% of the emirate\'s revenues come from oil.',
    category: 'City',
    rating: 4.6,
    location: 'United Arab Emirates',
    bestTimeToVisit: 'November to March',
    priceRange: '$$$$',
    virtualTourUrl: 'https://www.360cities.net/image/burj-khalifa-dubai',
    highlights: [
      'Burj Khalifa',
      'Dubai Mall',
      'Palm Jumeirah',
      'Dubai Marina',
      'Desert Safari'
    ],
    images: [
      '/images/dubai.jpg',
      '/images/dubai2.jpg',
      '/images/dubai3.jpg',
      '/images/dubai4.jpg',
    ],
    attractions: [
      {
        id: 1,
        name: 'Burj Khalifa',
        description: 'The world\'s tallest building, offering panoramic views of the city and beyond.',
        image: '/images/attractions/burj-khalifa.jpg',
        rating: 4.8,
        price: 'AED 135',
        duration: '2-3 hours',
        tips: 'Book tickets online in advance. Visit at sunset for the best views.'
      },
      {
        id: 2,
        name: 'Dubai Mall',
        description: 'One of the world\'s largest shopping malls, with over 1,200 retail stores and entertainment options.',
        image: '/images/attractions/dubai-mall.jpg',
        rating: 4.7,
        price: 'Free entry',
        duration: '3-4 hours',
        tips: 'Visit the Dubai Aquarium and Underwater Zoo. Watch the Dubai Fountain show in the evening.'
      },
      {
        id: 3,
        name: 'Desert Safari',
        description: 'Experience the Arabian desert with dune bashing, camel rides, and traditional entertainment.',
        image: '/images/attractions/desert-safari.jpg',
        rating: 4.9,
        price: 'AED 250-350',
        duration: '6-7 hours',
        tips: 'Book through a reputable tour operator. Bring sunscreen and comfortable clothing.'
      }
    ],
    weather: {
      spring: 'Warm to hot (25-35°C), dry',
      summer: 'Very hot (35-45°C), dry',
      autumn: 'Warm to hot (25-35°C), dry',
      winter: 'Mild to warm (15-25°C), occasional rain'
    },
    transportation: [
      'Metro: Fast and efficient way to get around',
      'Tram: Connects Dubai Marina with Palm Jumeirah',
      'Taxis: Available throughout the city',
      'Ride-sharing: Uber and Careem are popular',
      'Water taxis: Traditional abra boats in Dubai Creek'
    ],
    accommodation: [
      {
        type: 'Luxury',
        examples: 'Burj Al Arab, Atlantis The Palm, Armani Hotel Dubai',
        priceRange: 'AED 2,000+ per night'
      },
      {
        type: 'Mid-Range',
        examples: 'Address Dubai Mall, Sofitel Dubai Downtown, Grand Hyatt Dubai',
        priceRange: 'AED 800-2,000 per night'
      },
      {
        type: 'Budget',
        examples: 'Rove Downtown, Premier Inn Dubai, Ibis Styles Dubai',
        priceRange: 'AED 300-800 per night'
      }
    ],
    cuisine: [
      'Shawarma',
      'Hummus and falafel',
      'Arabic mezze',
      'Grilled meats',
      'Dates and Arabic sweets',
      'International cuisine from around the world'
    ]
  },
  {
    id: 8,
    name: 'Maldives',
    image: '/images/maldives.jpg',
    description: 'A tropical paradise with crystal-clear waters, white sandy beaches, and luxurious overwater bungalows.',
    longDescription: 'The Maldives is a tropical nation in the Indian Ocean composed of 26 coral atolls, which are made up of hundreds of islands. It\'s known for its beaches, blue lagoons and extensive reefs. The capital, Malé, has a busy fish market, restaurants and shops on Majeedhee Magu, and 17th-century Hukuru Miskiy (also known as Friday Mosque) made of carved white coral.',
    category: 'Beach',
    rating: 4.9,
    location: 'Indian Ocean',
    bestTimeToVisit: 'November to April',
    priceRange: '$$$$',
    virtualTourUrl: 'https://www.360cities.net/image/overwater-bungalow-maldives',
    highlights: [
      'Overwater bungalows',
      'Crystal-clear lagoons',
      'Coral reefs and marine life',
      'Island hopping',
      'Water sports'
    ],
    images: [
      '/images/maldives.jpg',
      '/images/maldives2.jpg',
      '/images/maldives3.jpg',
      '/images/maldives4.jpg',
    ],
    attractions: [
      {
        id: 1,
        name: 'Snorkeling at House Reef',
        description: 'Explore vibrant coral reefs teeming with tropical fish and marine life.',
        image: '/images/attractions/maldives-snorkeling.jpg',
        rating: 4.9,
        price: 'Included in resort activities',
        duration: '1-2 hours',
        tips: 'Bring your own snorkel gear if possible. Best visibility is in the morning.'
      },
      {
        id: 2,
        name: 'Sunset Cruise',
        description: 'Enjoy a romantic boat ride while watching the sun set over the Indian Ocean.',
        image: '/images/attractions/maldives-sunset.jpg',
        rating: 4.8,
        price: 'USD 100-200',
        duration: '2-3 hours',
        tips: 'Book in advance. Bring a camera for stunning photos.'
      },
      {
        id: 3,
        name: 'Spa Treatment',
        description: 'Relax with a traditional Maldivian massage in an overwater spa.',
        image: '/images/attractions/maldives-spa.jpg',
        rating: 4.7,
        price: 'USD 150-300',
        duration: '1-2 hours',
        tips: 'Book treatments early in your stay to ensure availability.'
      }
    ],
    weather: {
      spring: 'Hot (28-32°C), dry season',
      summer: 'Hot (28-30°C), monsoon season',
      autumn: 'Hot (28-30°C), monsoon season',
      winter: 'Warm to hot (27-29°C), dry season'
    },
    transportation: [
      'Seaplane: Transfers to remote resorts',
      'Speedboat: Transfers to closer islands',
      'Domestic flights: Between major atolls',
      'Dhoni boats: Traditional wooden boats for local transport',
      'Walking: On small islands'
    ],
    accommodation: [
      {
        type: 'Luxury Resort',
        examples: 'Soneva Jani, Gili Lankanfushi, Four Seasons Resort Maldives',
        priceRange: 'USD 1,000+ per night'
      },
      {
        type: 'Mid-Range Resort',
        examples: 'Kandolhu Maldives, Coco Bodu Hithi, Constance Moofushi',
        priceRange: 'USD 500-1,000 per night'
      },
      {
        type: 'Budget Guesthouse',
        examples: 'Various guesthouses on local islands',
        priceRange: 'USD 100-300 per night'
      }
    ],
    cuisine: [
      'Fresh seafood',
      'Maldivian curry',
      'Tuna dishes',
      'Coconut-based dishes',
      'International cuisine at resorts',
      'Fresh tropical fruits'
    ]
  },
  {
    id: 9,
    name: 'Bali, Indonesia',
    image: '/images/bali.jpg',
    description: 'A tropical paradise with beautiful beaches, lush rice terraces, and rich cultural heritage.',
    longDescription: 'Bali is an Indonesian island known for its forested volcanic mountains, iconic rice paddies, beaches and coral reefs. The island is home to religious sites such as cliffside Uluwatu Temple. To the south, the beachside city of Kuta has lively bars, while Seminyak, Sanur and Nusa Dua are popular resort towns. The island is also known for its yoga and meditation retreats.',
    category: 'Beach',
    rating: 4.8,
    location: 'Indonesia',
    bestTimeToVisit: 'April to October',
    priceRange: '$$',
    virtualTourUrl: 'https://www.360cities.net/image/rice-terraces-bali',
    highlights: [
      'Rice terraces',
      'Beautiful beaches',
      'Temples and culture',
      'Waterfalls',
      'Volcanoes'
    ],
    images: [
      '/images/bali.jpg',
      '/images/bali2.jpg',
      '/images/bali3.jpg',
      '/images/bali4.jpg',
    ],
    attractions: [
      {
        id: 1,
        name: 'Tegalalang Rice Terraces',
        description: 'Stunning terraced rice fields in Ubud, offering beautiful views and photo opportunities.',
        image: '/images/attractions/rice-terraces.jpg',
        rating: 4.8,
        price: 'IDR 20,000',
        duration: '2-3 hours',
        tips: 'Visit early morning for the best light and fewer crowds. Wear comfortable shoes for walking.'
      },
      {
        id: 2,
        name: 'Uluwatu Temple',
        description: 'A cliffside temple with stunning ocean views and traditional Kecak dance performances.',
        image: '/images/attractions/uluwatu.jpg',
        rating: 4.7,
        price: 'IDR 50,000',
        duration: '2-3 hours',
        tips: 'Stay for the sunset Kecak dance performance. Beware of monkeys that may steal belongings.'
      },
      {
        id: 3,
        name: 'Nusa Penida',
        description: 'A beautiful island with stunning viewpoints, beaches, and snorkeling spots.',
        image: '/images/attractions/nusa-penida.jpg',
        rating: 4.9,
        price: 'IDR 500,000+ for day trip',
        duration: 'Full day',
        tips: 'Book a tour in advance. The roads are rough, so be prepared for a bumpy ride.'
      }
    ],
    weather: {
      spring: 'Hot (27-30°C), dry season',
      summer: 'Hot (27-30°C), dry season',
      autumn: 'Hot (27-30°C), dry season',
      winter: 'Hot (27-30°C), rainy season'
    },
    transportation: [
      'Scooter: Most popular way to get around',
      'Private driver: Convenient for day trips',
      'Taxi: Available in tourist areas',
      'Ride-sharing: Grab and Go-Jek are popular',
      'Ferry: For island hopping'
    ],
    accommodation: [
      {
        type: 'Luxury Resort',
        examples: 'Four Seasons Resort Bali, St. Regis Bali Resort, Bulgari Resort Bali',
        priceRange: 'USD 500+ per night'
      },
      {
        type: 'Boutique Hotel',
        examples: 'Alila Ubud, COMO Shambhala Estate, Fivelements Retreat',
        priceRange: 'USD 200-500 per night'
      },
      {
        type: 'Budget Guesthouse',
        examples: 'Various guesthouses and hostels throughout the island',
        priceRange: 'USD 20-100 per night'
      }
    ],
    cuisine: [
      'Nasi Goreng',
      'Mie Goreng',
      'Babi Guling',
      'Bebek Betutu',
      'Fresh seafood',
      'Balinese coffee'
    ]
  },
  {
    id: 10,
    name: 'Cancun, Mexico',
    image: '/images/cancun.jpg',
    description: 'A popular beach destination with pristine white sand, turquoise waters, and ancient Mayan ruins nearby.',
    longDescription: 'Cancún is a Mexican city on the Yucatán Peninsula bordering the Caribbean Sea. It\'s known for its beaches, numerous resorts and nightlife. It\'s composed of 2 distinct areas: the more traditional downtown area, El Centro, and Zona Hotelera, a long, beachfront strip of high-rise hotels, nightclubs, shops and restaurants. Cancun is also a famed destination for students during universities\' spring break period.',
    category: 'Beach',
    rating: 4.7,
    location: 'Mexico',
    bestTimeToVisit: 'December to April',
    priceRange: '$$$',
    virtualTourUrl: 'https://www.360cities.net/image/cancun-beach-mexico',
    highlights: [
      'Beautiful beaches',
      'Ancient Mayan ruins',
      'Water parks',
      'Isla Mujeres',
      'Cenotes'
    ],
    images: [
      '/images/cancun.jpg',
      '/images/cancun2.jpg',
      '/images/cancun3.jpg',
      '/images/cancun4.jpg',
    ],
    attractions: [
      {
        id: 1,
        name: 'Chichen Itza',
        description: 'One of the New Seven Wonders of the World, this ancient Mayan city features the iconic El Castillo pyramid.',
        image: '/images/attractions/chichen-itza.jpg',
        rating: 4.9,
        price: 'MXN 571',
        duration: 'Full day',
        tips: 'Visit early morning to avoid crowds and heat. Bring plenty of water and sunscreen.'
      },
      {
        id: 2,
        name: 'Isla Mujeres',
        description: 'A beautiful island with pristine beaches, snorkeling spots, and a relaxed atmosphere.',
        image: '/images/attractions/isla-mujeres.jpg',
        rating: 4.8,
        price: 'MXN 300+ for ferry',
        duration: 'Full day',
        tips: 'Rent a golf cart to explore the island. Visit Playa Norte for the best beach.'
      },
      {
        id: 3,
        name: 'Xel-Ha Park',
        description: 'A natural aquarium with snorkeling, swimming, and water activities in a beautiful lagoon.',
        image: '/images/attractions/xel-ha.jpg',
        rating: 4.7,
        price: 'USD 89',
        duration: 'Full day',
        tips: 'Book online for better prices. Arrive early to make the most of your day.'
      }
    ],
    weather: {
      spring: 'Warm to hot (25-30°C), dry season',
      summer: 'Hot (30-35°C), rainy season',
      autumn: 'Warm to hot (25-30°C), rainy season',
      winter: 'Warm (22-28°C), dry season'
    },
    transportation: [
      'ADO Bus: Connects Cancun with other cities',
      'Taxi: Available throughout the hotel zone',
      'Rental car: Good for exploring the Riviera Maya',
      'Ferry: To Isla Mujeres and Cozumel',
      'Collectivo: Shared vans for local transport'
    ],
    accommodation: [
      {
        type: 'All-Inclusive Resort',
        examples: 'Grand Fiesta Americana Coral Beach, Le Blanc Spa Resort, Hyatt Ziva Cancun',
        priceRange: 'USD 300+ per night'
      },
      {
        type: 'Hotel',
        examples: 'Live Aqua Beach Resort, JW Marriott Cancun, Fiesta Americana Condesa',
        priceRange: 'USD 150-300 per night'
      },
      {
        type: 'Budget Hotel',
        examples: 'Various hotels in downtown Cancun',
        priceRange: 'USD 50-150 per night'
      }
    ],
    cuisine: [
      'Tacos',
      'Guacamole and chips',
      'Ceviche',
      'Pescado a la Veracruzana',
      'Chiles en Nogada',
      'Mexican street food'
    ]
  },
  {
    id: 11,
    name: 'Swiss Alps',
    image: '/images/swiss-alps.jpg',
    description: 'Majestic mountains, pristine lakes, and charming villages in the heart of Europe.',
    longDescription: 'The Swiss Alps form a major part of Switzerland\'s landscape, covering about 60% of the country. The region is known for its stunning mountain peaks, crystal-clear lakes, and picturesque villages. Popular destinations include Zermatt, with views of the iconic Matterhorn, and Interlaken, a gateway to the Jungfrau region. The area offers world-class hiking, skiing, and mountaineering opportunities.',
    category: 'Mountain',
    rating: 4.9,
    location: 'Switzerland',
    bestTimeToVisit: 'June to September for hiking, December to March for skiing',
    priceRange: '$$$$',
    virtualTourUrl: 'https://www.360cities.net/image/matterhorn-switzerland',
    highlights: [
      'Matterhorn',
      'Jungfraujoch',
      'Lake Geneva',
      'Glacier Express',
      'Swiss villages'
    ],
    images: [
      '/images/swiss-alps.jpg',
      '/images/swiss-alps2.jpg',
      '/images/swiss-alps3.jpg',
      '/images/swiss-alps4.jpg',
    ],
    attractions: [
      {
        id: 1,
        name: 'Matterhorn',
        description: 'The iconic pyramid-shaped peak, one of the most photographed mountains in the world.',
        image: '/images/attractions/matterhorn.jpg',
        rating: 4.9,
        price: 'Free to view, CHF 92 for Gornergrat Railway',
        duration: 'Full day',
        tips: 'Take the Gornergrat Railway for the best views. Visit Zermatt, a car-free village at its base.'
      },
      {
        id: 2,
        name: 'Jungfraujoch',
        description: 'Known as the "Top of Europe," this is the highest railway station in Europe at 3,454 meters.',
        image: '/images/attractions/jungfraujoch.jpg',
        rating: 4.8,
        price: 'CHF 235',
        duration: 'Full day',
        tips: 'Book tickets in advance. Check weather conditions before going.'
      },
      {
        id: 3,
        name: 'Glacier Express',
        description: 'A scenic train journey through the Swiss Alps, crossing 291 bridges and 91 tunnels.',
        image: '/images/attractions/glacier-express.jpg',
        rating: 4.7,
        price: 'CHF 152',
        duration: '8 hours',
        tips: 'Book seats in advance, especially in peak season. The journey is from Zermatt to St. Moritz.'
      }
    ],
    weather: {
      spring: 'Cool to mild (5-15°C), variable conditions',
      summer: 'Mild to warm (15-25°C), best for hiking',
      autumn: 'Cool (5-15°C), variable conditions',
      winter: 'Cold (-5-5°C), snow for skiing'
    },
    transportation: [
      'Swiss Pass: For unlimited travel on public transport',
      'Cable cars and funiculars: For mountain access',
      'Trains: Extensive network connecting all major destinations',
      'Buses: Connect villages and trailheads',
      'Walking: Many car-free villages and hiking trails'
    ],
    accommodation: [
      {
        type: 'Luxury Hotel',
        examples: 'Grand Hotel Zermatterhof, Badrutt\'s Palace Hotel, Kulm Hotel St. Moritz',
        priceRange: 'CHF 500+ per night'
      },
      {
        type: 'Mountain Lodge',
        examples: 'Various mountain huts and lodges throughout the Alps',
        priceRange: 'CHF 100-300 per night'
      },
      {
        type: 'Budget Hostel',
        examples: 'Youth hostels in major towns and villages',
        priceRange: 'CHF 30-100 per night'
      }
    ],
    cuisine: [
      'Fondue',
      'Raclette',
      'Rösti',
      'Swiss chocolate',
      'Alpine cheese',
      'Local wines'
    ]
  },
  {
    id: 12,
    name: 'Patagonia',
    image: '/images/patagonia.jpg',
    description: 'A vast region of stunning landscapes, glaciers, and remote wilderness at the southern tip of South America.',
    longDescription: 'Patagonia is a sparsely populated region at the southern end of South America, shared by Argentina and Chile. The region comprises the southern section of the Andes mountains, with lakes, fjords, and glaciers. It\'s known for its dramatic landscapes, including the Perito Moreno Glacier, Torres del Paine National Park, and the windswept plains of the Patagonian Steppe.',
    category: 'Mountain',
    rating: 4.8,
    location: 'Argentina and Chile',
    bestTimeToVisit: 'November to March (Southern Hemisphere summer)',
    priceRange: '$$$',
    virtualTourUrl: 'https://www.360cities.net/image/torres-del-paine-patagonia',
    highlights: [
      'Torres del Paine',
      'Perito Moreno Glacier',
      'Fitz Roy',
      'Ushuaia',
      'Patagonian Steppe'
    ],
    images: [
      '/images/patagonia.jpg',
      '/images/patagonia2.jpg',
      '/images/patagonia3.jpg',
      '/images/patagonia4.jpg',
    ],
    attractions: [
      {
        id: 1,
        name: 'Torres del Paine',
        description: 'A national park featuring dramatic mountain peaks, glaciers, and pristine lakes.',
        image: '/images/attractions/torres-del-paine.jpg',
        rating: 4.9,
        price: 'CLP 21,000',
        duration: '3-5 days for full circuit',
        tips: 'Book accommodations in advance, especially in peak season. Be prepared for rapidly changing weather.'
      },
      {
        id: 2,
        name: 'Perito Moreno Glacier',
        description: 'One of the few glaciers in the world that is still advancing, with spectacular ice calving events.',
        image: '/images/attractions/perito-moreno.jpg',
        rating: 4.8,
        price: 'ARS 5,000',
        duration: 'Full day',
        tips: 'Visit early morning for fewer crowds. Take a boat tour for closer views of the glacier.'
      },
      {
        id: 3,
        name: 'Fitz Roy',
        description: 'A dramatic mountain peak in Los Glaciares National Park, popular among climbers and hikers.',
        image: '/images/attractions/fitz-roy.jpg',
        rating: 4.7,
        price: 'ARS 3,000',
        duration: 'Full day to multi-day',
        tips: 'The weather is unpredictable; be prepared for all conditions. The best views are from Laguna de los Tres.'
      }
    ],
    weather: {
      spring: 'Cool to mild (5-15°C), variable conditions',
      summer: 'Mild to warm (10-20°C), best for hiking',
      autumn: 'Cool (5-15°C), variable conditions',
      winter: 'Cold (-5-5°C), snow and ice'
    },
    transportation: [
      'Flights: Connect major cities like Punta Arenas and El Calafate',
      'Buses: Long-distance services between major towns',
      'Rental car: Good for exploring at your own pace',
      'Ferries: Connect parts of Chilean Patagonia',
      'Walking: Many remote areas require hiking'
    ],
    accommodation: [
      {
        type: 'Luxury Lodge',
        examples: 'Explora Patagonia, Tierra Patagonia, Awasi Patagonia',
        priceRange: 'USD 500+ per night'
      },
      {
        type: 'Refugio',
        examples: 'Mountain refuges in Torres del Paine and other parks',
        priceRange: 'USD 50-150 per night'
      },
      {
        type: 'Hostel',
        examples: 'Various hostels in towns like El Calafate and Puerto Natales',
        priceRange: 'USD 20-50 per night'
      }
    ],
    cuisine: [
      'Asado (Argentine barbecue)',
      'Lamb',
      'King crab',
      'Curanto',
      'Local wines',
      'Mate tea'
    ]
  },
  {
    id: 13,
    name: 'Nepal',
    image: '/images/nepal.jpg',
    description: 'Home to eight of the world\'s fourteen highest peaks, including Mount Everest, and rich cultural heritage.',
    longDescription: 'Nepal is a landlocked country in South Asia. It is located mainly in the Himalayas, but also includes parts of the Indo-Gangetic Plain. Nepal is bordered by China to the north and India to the south, east and west. Nepal has a diverse geography, including fertile plains, subalpine forested hills, and eight of the world\'s ten tallest mountains, including Mount Everest.',
    category: 'Mountain',
    rating: 4.8,
    location: 'Nepal',
    bestTimeToVisit: 'October to November and March to May',
    priceRange: '$$',
    virtualTourUrl: 'https://www.360cities.net/image/mount-everest-nepal',
    highlights: [
      'Mount Everest',
      'Annapurna Circuit',
      'Kathmandu Valley',
      'Chitwan National Park',
      'Temples and monasteries'
    ],
    images: [
      '/images/nepal.jpg',
      '/images/nepal2.jpg',
      '/images/nepal3.jpg',
      '/images/nepal4.jpg',
    ],
    attractions: [
      {
        id: 1,
        name: 'Mount Everest Base Camp Trek',
        description: 'A challenging trek to the base camp of the world\'s highest mountain, offering stunning views of the Himalayas.',
        image: '/images/attractions/everest-base-camp.jpg',
        rating: 4.9,
        price: 'USD 1,200-2,000',
        duration: '12-14 days',
        tips: 'Acclimatize properly to avoid altitude sickness. Best trekking seasons are March-May and September-November.'
      },
      {
        id: 2,
        name: 'Annapurna Circuit',
        description: 'One of the most popular treks in the world, circling the Annapurna massif and crossing the Thorong La pass.',
        image: '/images/attractions/annapurna-circuit.jpg',
        rating: 4.8,
        price: 'USD 800-1,500',
        duration: '15-20 days',
        tips: 'The circuit can be shortened. Tea houses provide accommodation along the route.'
      },
      {
        id: 3,
        name: 'Kathmandu Durbar Square',
        description: 'A historic plaza in front of the old royal palace, featuring temples, courtyards, and traditional architecture.',
        image: '/images/attractions/durbar-square.jpg',
        rating: 4.7,
        price: 'NPR 1,000',
        duration: 'Half day',
        tips: 'Visit early morning to avoid crowds. Hire a guide to learn about the history and architecture.'
      }
    ],
    weather: {
      spring: 'Mild to warm (15-25°C), good for trekking',
      summer: 'Hot and rainy (20-30°C), monsoon season',
      autumn: 'Mild to warm (15-25°C), best for trekking',
      winter: 'Cool to cold (5-15°C), snow in mountains'
    },
    transportation: [
      'Flights: Connect Kathmandu with Lukla and other remote areas',
      'Buses: Connect major cities and trekking trailheads',
      'Taxis: Available in Kathmandu and other cities',
      'Jeeps: For rough terrain and remote areas',
      'Walking: Many areas are only accessible on foot'
    ],
    accommodation: [
      {
        type: 'Luxury Hotel',
        examples: 'Dwarika\'s Hotel, Yak & Yeti Hotel, Hyatt Regency Kathmandu',
        priceRange: 'USD 200+ per night'
      },
      {
        type: 'Tea House',
        examples: 'Various tea houses along trekking routes',
        priceRange: 'USD 5-20 per night'
      },
      {
        type: 'Guesthouse',
        examples: 'Various guesthouses in Kathmandu and other cities',
        priceRange: 'USD 10-50 per night'
      }
    ],
    cuisine: [
      'Dal Bhat',
      'Momos',
      'Thukpa',
      'Newari cuisine',
      'Tibetan bread',
      'Local tea'
    ]
  },
  {
    id: 14,
    name: 'Petra, Jordan',
    image: '/images/petra.jpg',
    description: 'An ancient city carved into rose-colored rock faces, featuring the iconic Treasury and numerous tombs.',
    longDescription: 'Petra is a famous archaeological site in Jordan\'s southwestern desert. Dating to around 300 B.C., it was the capital of the Nabatean Kingdom. Accessed via a narrow canyon called Al Siq, it contains tombs and temples carved into pink sandstone cliffs, earning its nickname, the "Rose City." Perhaps its most famous structure is Al Khazneh (the Treasury), a 45m-high mausoleum with an ornate, Greek-style facade.',
    category: 'Historical',
    rating: 4.9,
    location: 'Jordan',
    bestTimeToVisit: 'March to May and September to November',
    priceRange: '$$$',
    virtualTourUrl: 'https://www.360cities.net/image/treasury-petra-jordan',
    highlights: [
      'The Treasury (Al Khazneh)',
      'The Monastery (Ad Deir)',
      'The Siq',
      'Royal Tombs',
      'High Place of Sacrifice'
    ],
    images: [
      '/images/petra.jpg',
      '/images/petra2.jpg',
      '/images/petra3.jpg',
      '/images/petra4.jpg',
    ],
    attractions: [
      {
        id: 1,
        name: 'The Treasury (Al Khazneh)',
        description: 'The most iconic structure in Petra, a massive tomb with an ornate facade carved into the rock face.',
        image: '/images/attractions/treasury.jpg',
        rating: 4.9,
        price: 'Included in Petra entrance fee',
        duration: '1-2 hours',
        tips: 'Visit early morning for the best light and fewer crowds. The first view from the Siq is spectacular.'
      },
      {
        id: 2,
        name: 'The Monastery (Ad Deir)',
        description: 'A massive structure similar to the Treasury but larger, located high in the mountains.',
        image: '/images/attractions/monastery.jpg',
        rating: 4.8,
        price: 'Included in Petra entrance fee',
        duration: '3-4 hours round trip',
        tips: 'The climb is steep but worth it. Consider taking a donkey for part of the journey if needed.'
      },
      {
        id: 3,
        name: 'The Siq',
        description: 'The narrow canyon that serves as the main entrance to Petra, with dramatic rock formations.',
        image: '/images/attractions/siq.jpg',
        rating: 4.7,
        price: 'Included in Petra entrance fee',
        duration: '30-45 minutes',
        tips: 'Walk slowly to appreciate the changing colors and formations. Look for ancient carvings and water channels.'
      }
    ],
    weather: {
      spring: 'Mild to warm (15-25°C), occasional rain',
      summer: 'Hot (25-35°C), dry',
      autumn: 'Mild to warm (15-25°C), occasional rain',
      winter: 'Cool (5-15°C), occasional rain'
    },
    transportation: [
      'Tour bus: From Amman or Aqaba',
      'Taxi: From nearby towns',
      'Horse carriage: Available within Petra',
      'Walking: The main way to explore the site',
      'Donkey: Available for steep climbs'
    ],
    accommodation: [
      {
        type: 'Luxury Hotel',
        examples: 'Mövenpick Resort Petra, Petra Marriott Hotel, Petra Guest House',
        priceRange: 'USD 200+ per night'
      },
      {
        type: 'Mid-Range Hotel',
        examples: 'Petra Moon Hotel, Seven Wonders Hotel, Petra Panorama Hotel',
        priceRange: 'USD 100-200 per night'
      },
      {
        type: 'Budget Hotel',
        examples: 'Various guesthouses in Wadi Musa',
        priceRange: 'USD 30-100 per night'
      }
    ],
    cuisine: [
      'Mansaf',
      'Maqluba',
      'Meze',
      'Falafel',
      'Shawarma',
      'Arabic coffee'
    ]
  },
  {
    id: 15,
    name: 'Machu Picchu, Peru',
    image: '/images/machu-picchu.jpg',
    description: 'An ancient Incan citadel set high in the Andes Mountains, featuring impressive stone architecture and terraces.',
    longDescription: 'Machu Picchu is a 15th-century Inca citadel, located in the Eastern Cordillera of southern Peru, on a 2,430-meter (7,970 ft) mountain ridge. It is located in the Cusco Region, Urubamba Province, Machupicchu District, above the Sacred Valley, which is 80 kilometers (50 mi) northwest of Cusco. The Urubamba River flows past it, cutting through the Cordillera and creating a tropical mountain canyon.',
    category: 'Historical',
    rating: 4.9,
    location: 'Peru',
    bestTimeToVisit: 'April to October (dry season)',
    priceRange: '$$$',
    virtualTourUrl: 'https://www.360cities.net/image/machu-picchu-peru',
    highlights: [
      'Main Plaza',
      'Temple of the Sun',
      'Intihuatana Stone',
      'Terraces',
      'Sacred Valley'
    ],
    images: [
      '/images/machu-picchu.jpg',
      '/images/machu-picchu2.jpg',
      '/images/machu-picchu3.jpg',
      '/images/machu-picchu4.jpg',
    ],
    attractions: [
      {
        id: 1,
        name: 'Main Plaza',
        description: 'The central area of Machu Picchu, surrounded by important buildings and temples.',
        image: '/images/attractions/main-plaza.jpg',
        rating: 4.9,
        price: 'Included in entrance fee',
        duration: '1-2 hours',
        tips: 'Visit early morning for fewer crowds and better light. A guide can explain the significance of each structure.'
      },
      {
        id: 2,
        name: 'Temple of the Sun',
        description: 'A semi-circular temple with precise stonework, believed to have astronomical significance.',
        image: '/images/attractions/temple-sun.jpg',
        rating: 4.8,
        price: 'Included in entrance fee',
        duration: '30 minutes',
        tips: 'The temple is only accessible with a guide. Look for the window that aligns with the sun during solstice.'
      },
      {
        id: 3,
        name: 'Intihuatana Stone',
        description: 'A carved rock pillar believed to have been an astronomical clock or calendar.',
        image: '/images/attractions/intihuatana.jpg',
        rating: 4.7,
        price: 'Included in entrance fee',
        duration: '30 minutes',
        tips: 'This is one of the few remaining Intihuatana stones not destroyed by the Spanish. Don\'t touch it as it\'s considered sacred.'
      }
    ],
    weather: {
      spring: 'Mild (15-20°C), dry season',
      summer: 'Mild to warm (15-25°C), dry season',
      autumn: 'Mild (15-20°C), dry season',
      winter: 'Cool to mild (10-15°C), rainy season'
    },
    transportation: [
      'Train: From Cusco or Ollantaytambo to Aguas Calientes',
      'Bus: From Aguas Calientes to Machu Picchu entrance',
      'Hiking: Inca Trail or alternative treks',
      'Walking: Within the Machu Picchu site',
      'Flight: To Cusco from Lima'
    ],
    accommodation: [
      {
        type: 'Luxury Hotel',
        examples: 'Inkaterra Machu Picchu Pueblo Hotel, Sumaq Machu Picchu Hotel, Belmond Sanctuary Lodge',
        priceRange: 'USD 300+ per night'
      },
      {
        type: 'Mid-Range Hotel',
        examples: 'Casa del Sol Machupicchu, Tierra Viva Machu Picchu, Gringo Bill\'s Boutique Hotel',
        priceRange: 'USD 100-300 per night'
      },
      {
        type: 'Budget Hotel',
        examples: 'Various hostels and guesthouses in Aguas Calientes',
        priceRange: 'USD 30-100 per night'
      }
    ],
    cuisine: [
      'Cuy (guinea pig)',
      'Lomo Saltado',
      'Ceviche',
      'Pachamanca',
      'Quinoa dishes',
      'Chicha de Jora'
    ]
  },
  {
    id: 16,
    name: 'Angkor Wat, Cambodia',
    image: '/images/angkor-wat.jpg',
    description: 'The largest religious monument in the world, featuring intricate stone carvings and stunning architecture.',
    longDescription: 'Angkor Wat is a temple complex in Cambodia and the largest religious monument in the world, on a site measuring 162.6 hectares (1,626,000 m²; 402 acres). It was originally constructed as a Hindu temple dedicated to the god Vishnu for the Khmer Empire, gradually transforming into a Buddhist temple towards the end of the 12th century. It was built by the Khmer King Suryavarman II in the early 12th century in Yaśodharapura, the capital of the Khmer Empire, as his state temple and eventual mausoleum.',
    category: 'Historical',
    rating: 4.9,
    location: 'Cambodia',
    bestTimeToVisit: 'November to February (dry season)',
    priceRange: '$$',
    virtualTourUrl: 'https://www.360cities.net/image/angkor-wat-cambodia',
    highlights: [
      'Angkor Wat Temple',
      'Bayon Temple',
      'Ta Prohm',
      'Angkor Thom',
      'Banteay Srei'
    ],
    images: [
      '/images/angkor-wat.jpg',
      '/images/angkor-wat2.jpg',
      '/images/angkor-wat3.jpg',
      '/images/angkor-wat4.jpg',
    ],
    attractions: [
      {
        id: 1,
        name: 'Angkor Wat Temple',
        description: 'The main temple, featuring five towers representing Mount Meru and extensive bas-reliefs.',
        image: '/images/attractions/angkor-wat-temple.jpg',
        rating: 4.9,
        price: 'USD 37 for 1-day pass',
        duration: '3-4 hours',
        tips: 'Visit at sunrise for the iconic view. Climb to the top level for panoramic views (requires appropriate clothing).'
      },
      {
        id: 2,
        name: 'Bayon Temple',
        description: 'Known for its massive stone faces, this temple is the centerpiece of Angkor Thom.',
        image: '/images/attractions/bayon.jpg',
        rating: 4.8,
        price: 'Included in Angkor pass',
        duration: '1-2 hours',
        tips: 'Visit early morning or late afternoon for the best light on the faces. The temple has multiple levels to explore.'
      },
      {
        id: 3,
        name: 'Ta Prohm',
        description: 'Known as the "Tomb Raider Temple," this temple is famous for the trees growing out of its ruins.',
        image: '/images/attractions/ta-prohm.jpg',
        rating: 4.7,
        price: 'Included in Angkor pass',
        duration: '1-2 hours',
        tips: 'Visit early morning to avoid crowds. The temple is partially in ruins, so wear sturdy shoes.'
      }
    ],
    weather: {
      spring: 'Hot (30-35°C), dry season',
      summer: 'Hot and rainy (30-35°C), monsoon season',
      autumn: 'Hot and rainy (30-35°C), monsoon season',
      winter: 'Mild to warm (25-30°C), dry season'
    },
    transportation: [
      'Tuk-tuk: Popular way to get around the temples',
      'Bicycle: Good for exploring at your own pace',
      'Car with driver: Most comfortable option in the heat',
      'Electric golf cart: Available for temple tours',
      'Walking: Within temple complexes'
    ],
    accommodation: [
      {
        type: 'Luxury Hotel',
        examples: 'Raffles Grand Hotel d\'Angkor, Park Hyatt Siem Reap, Shinta Mani Angkor',
        priceRange: 'USD 200+ per night'
      },
      {
        type: 'Mid-Range Hotel',
        examples: 'Heritage Suites Hotel, Viroth\'s Hotel, Golden Temple Hotel',
        priceRange: 'USD 50-200 per night'
      },
      {
        type: 'Budget Guesthouse',
        examples: 'Various guesthouses in Siem Reap',
        priceRange: 'USD 10-50 per night'
      }
    ],
    cuisine: [
      'Amok',
      'Fish curry',
      'Lok Lak',
      'Khmer red curry',
      'Fresh spring rolls',
      'Cambodian coffee'
    ]
  }
];

export const getDestinationById = (id: number): Destination | undefined => {
  return destinations.find(destination => destination.id === id);
}; 