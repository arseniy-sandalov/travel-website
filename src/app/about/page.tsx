'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiUsers, FiGlobe, FiCamera, FiHeart } from 'react-icons/fi';

const stats = [
  { icon: FiUsers, label: 'Happy Travelers', value: '50K+' },
  { icon: FiGlobe, label: 'Destinations', value: '100+' },
  { icon: FiCamera, label: 'Virtual Tours', value: '200+' },
  { icon: FiHeart, label: '5-Star Reviews', value: '10K+' },
];

const team = [
  {
    name: 'Sarah Johnson',
    role: 'CEO & Founder',
    image: '/images/team/sarah.jpg',
    bio: 'Travel enthusiast with 15+ years of experience in the tourism industry.',
  },
  {
    name: 'Michael Chen',
    role: 'Head of Virtual Tours',
    image: '/images/team/michael.jpg',
    bio: 'VR specialist passionate about creating immersive travel experiences.',
  },
  {
    name: 'Emma Rodriguez',
    role: 'Travel Director',
    image: '/images/team/emma.jpg',
    bio: 'Expert in curating unique travel experiences and destination management.',
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-blue-600 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About Us
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              We're on a mission to make travel more accessible through virtual experiences
              and comprehensive destination guides.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  <stat.icon className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <div className="prose max-w-none text-gray-600">
                <p className="mb-4">
                  We believe that everyone should have the opportunity to explore and
                  experience the world's most amazing destinations, whether physically
                  or virtually.
                </p>
                <p className="mb-4">
                  Our platform combines cutting-edge virtual tour technology with
                  detailed travel guides to help you plan your next adventure or
                  explore from the comfort of your home.
                </p>
                <p>
                  We work with local experts and photographers worldwide to bring
                  you authentic, immersive experiences of each destination.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative h-[400px] rounded-lg overflow-hidden"
            >
              <Image
                src="/images/about-mission.jpg"
                alt="Our mission"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600">
              The passionate people behind our virtual travel experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg overflow-hidden shadow-lg"
              >
                <div className="relative h-64">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-medium mb-4">
                    {member.role}
                  </p>
                  <p className="text-gray-600">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 