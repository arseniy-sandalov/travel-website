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
    virtualTourUrl: '/virtual-tours/paris/index.html',
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
  // More destinations will be added here
];

export const getDestinationById = (id: number): Destination | undefined => {
  return destinations.find(destination => destination.id === id);
}; 