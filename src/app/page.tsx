'use client';

// Import necessary dependencies
import Image from "next/image";
import Link from 'next/link';
import { motion } from 'framer-motion'; // For animations
import { FiArrowRight, FiStar } from 'react-icons/fi'; // Icons for UI elements

// Define the structure of traveler testimonials
// Each testimonial includes:
// - Personal info (name, location, profile image)
// - Their comment about the experience
// - Rating (out of 5 stars)
// - The destination they visited
const travelerComments = [
  {
    id: 1,
    name: 'Sarah Johnson',
    location: 'New York, USA',
    image: '/images/travelers/sarah.webp',
    comment: 'The virtual tours are incredible! I felt like I was actually there. The 360° views of the Eiffel Tower and Louvre were my favorites.',
    rating: 5,
    destination: 'Paris, France'
  },
  {
    id: 2,
    name: 'Michael Chen',
    location: 'Toronto, Canada',
    image: '/images/travelers/michael.webp',
    comment: 'As someone who loves travel but has limited time, this website is a game-changer. The virtual tours of Machu Picchu were breathtaking!',
    rating: 5,
    destination: 'Machu Picchu, Peru'
  },
  {
    id: 3,
    name: 'Emma Rodriguez',
    location: 'Madrid, Spain',
    image: '/images/travelers/emma.webp',
    comment: 'I used this site to plan my trip to Tokyo. The detailed information about attractions and local cuisine was extremely helpful.',
    rating: 4,
    destination: 'Tokyo, Japan'
  },
  {
    id: 4,
    name: 'James Wilson',
    location: 'London, UK',
    image: '/images/travelers/james.webp',
    comment: 'The virtual tour of Angkor Wat was mesmerizing. It gave me a real sense of the scale and beauty of this ancient temple complex.',
    rating: 5,
    destination: 'Angkor Wat, Cambodia'
  },
  {
    id: 5,
    name: 'Aisha Patel',
    location: 'Mumbai, India',
    image: '/images/travelers/aisha.webp',
    comment: 'I loved exploring the Swiss Alps virtually before my actual trip. The information about hiking trails was spot-on!',
    rating: 4,
    destination: 'Swiss Alps'
  },
  {
    id: 6,
    name: 'Lucas Oliveira',
    location: 'Rio de Janeiro, Brazil',
    image: '/images/travelers/lucas.webp',
    comment: 'The virtual tour of Petra was incredible. I could explore every corner of the Treasury and the Monastery from my home.',
    rating: 5,
    destination: 'Petra, Jordan'
  }
];

// Main Home component
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section - Full-screen landing area with background image */}
      <section className="relative h-[80vh] flex items-center">
        {/* Background image container with overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/destinations/hero-bg.webp"
            alt="Beautiful landscape showing various travel destinations"
            fill
            className="object-cover"
            priority // Load this image first as it's above the fold
          />
          {/* Dark overlay to improve text readability */}
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        {/* Hero content - centered text and CTA button */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          {/* Animated main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Discover the World
          </motion.h1>
          {/* Animated subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8"
          >
            Experience destinations through immersive virtual tours
          </motion.p>
          {/* Animated CTA button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              href="/destinations"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              Explore Destinations
              <FiArrowRight className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section - Grid of traveler comments */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What Our Travelers Say
            </h2>
            <p className="text-xl text-gray-600">
              Hear from people who have explored destinations through our platform
            </p>
          </div>

          {/* Testimonials grid - responsive layout with 1, 2, or 3 columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Map through testimonials and create cards */}
            {travelerComments.map((comment) => (
              <motion.div
                key={comment.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg overflow-hidden shadow-lg p-6"
              >
                {/* User info header with avatar */}
                <div className="flex items-center mb-4">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={comment.image}
                      alt={comment.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{comment.name}</h3>
                    <p className="text-sm text-gray-500">{comment.location}</p>
                  </div>
                </div>
                {/* Star rating */}
                <div className="flex mb-2">
                  {[...Array(5)].map((_, i) => (
                    <FiStar
                      key={i}
                      className={`${
                        i < comment.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                {/* Comment text */}
                <p className="text-gray-600 mb-4 italic">"{comment.comment}"</p>
                {/* Destination visited */}
                <div className="text-sm text-blue-600 font-medium">
                  Visited: {comment.destination}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
