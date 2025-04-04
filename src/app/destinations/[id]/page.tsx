'use client';

import { useState, useEffect, useRef } from 'react';
import { FiCalendar, FiUsers, FiInfo, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { getDestinationById } from '@/data/destinations';
import { branding } from '@/data/branding';

interface PageProps {
  params: {
    id: string;
  };
}

export default function DestinationPage({ params }: PageProps) {
  const [activeTab, setActiveTab] = useState('overview');
  const [bookingData, setBookingData] = useState({
    startDate: '',
    endDate: '',
    guests: 1,
    roomType: 'standard',
  });
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isViewerLoading, setIsViewerLoading] = useState(false);
  const viewerContainerRef = useRef<HTMLDivElement>(null);

  const destinationId = parseInt(params.id);
  const destination = getDestinationById(destinationId);

  useEffect(() => {
    if (activeTab === 'virtual-tour' && destination?.virtualTourUrl && viewerContainerRef.current) {
      setIsViewerLoading(true);
      
      // Create a container for the virtual tour
      const container = document.createElement('div');
      container.className = 'w-full h-full flex flex-col items-center justify-center p-8 text-center';
      
      // Add a message and buttons to open the virtual tour
      const title = document.createElement('h3');
      title.className = 'text-2xl font-bold text-indigo-700 mb-4';
      title.textContent = `Virtual Tour of ${destination.name}`;
      
      const message = document.createElement('p');
      message.className = 'text-lg text-gray-700 mb-6';
      message.textContent = 'Experience the destination in 360° panoramic views. Click the button below to open the virtual tour in a new tab.';
      
      const buttonContainer = document.createElement('div');
      buttonContainer.className = 'flex flex-col sm:flex-row gap-4';
      
      const mainButton = document.createElement('button');
      mainButton.className = 'px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-bold';
      mainButton.textContent = 'Open Virtual Tour';
      mainButton.onclick = (e) => {
        e.preventDefault();
        window.open(destination.virtualTourUrl, '_blank');
      };
      
      const instructions = document.createElement('div');
      instructions.className = 'mt-8 p-4 bg-gray-100 rounded-lg text-left';
      
      const instructionsTitle = document.createElement('h4');
      instructionsTitle.className = 'font-bold text-indigo-700 mb-2';
      instructionsTitle.textContent = 'How to use the virtual tour:';
      
      const instructionsList = document.createElement('ul');
      instructionsList.className = 'list-disc pl-5 text-gray-700 space-y-1';
      
      const instructionsItems = [
        'Click and drag to look around',
        'Use the mouse wheel to zoom in and out',
        'Use the navigation controls to move between different views',
        'Use the fullscreen button for an immersive experience'
      ];
      
      instructionsItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        instructionsList.appendChild(li);
      });
      
      instructions.appendChild(instructionsTitle);
      instructions.appendChild(instructionsList);
      
      buttonContainer.appendChild(mainButton);
      
      container.appendChild(title);
      container.appendChild(message);
      container.appendChild(buttonContainer);
      container.appendChild(instructions);
      
      // Clear the container and add the new elements
      viewerContainerRef.current.innerHTML = '';
      viewerContainerRef.current.appendChild(container);
      
      setIsViewerLoading(false);
    }
  }, [activeTab, destination?.virtualTourUrl, destination?.name]);

  if (!destination) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold">Destination not found</h1>
      </div>
    );
  }

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Booking submitted! We will contact you shortly.');
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === destination.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? destination.images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[60vh]">
        <img
          src={destination.image}
          alt={destination.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">{destination.name}</h1>
            <p className="text-xl">{destination.description}</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex space-x-4 mb-8">
          {['overview', 'attractions', 'virtual-tour', 'gallery', 'travel-info', 'booking'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg ${
                activeTab === tab
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1).replace('-', ' ')}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="mt-8">
          {activeTab === 'overview' && (
            <div className="prose max-w-none">
              <h2 className="text-3xl font-bold mb-4">About {destination.name}</h2>
              <p className="text-lg mb-6">{destination.longDescription}</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-2 text-indigo-700">Best Time to Visit</h3>
                  <p className="text-gray-700 font-medium">{destination.bestTimeToVisit}</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-2 text-indigo-700">Price Range</h3>
                  <p className="text-gray-700 font-medium">{destination.priceRange}</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-2 text-indigo-700">Rating</h3>
                  <p className="text-gray-700 font-medium">{destination.rating}/5.0</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'attractions' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {destination.attractions.map((attraction) => (
                <div key={attraction.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img
                    src={attraction.image}
                    alt={attraction.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-indigo-700">{attraction.name}</h3>
                    <p className="text-gray-600 mb-4">{attraction.description}</p>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-blue-600 font-bold">{attraction.price}</span>
                      <span className="text-gray-500 font-medium">{attraction.duration}</span>
                    </div>
                    <div className="flex items-center mb-4">
                      <span className="text-yellow-400 mr-1">★</span>
                      <span className="font-bold text-gray-800">{attraction.rating}/5.0</span>
                    </div>
                    <p className="text-sm text-gray-500">{attraction.tips}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'virtual-tour' && (
            <div className="relative h-[600px] w-full bg-gray-100 rounded-lg overflow-hidden">
              {isViewerLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                  <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto"></div>
                    <p className="mt-4 text-gray-600">Loading virtual tour...</p>
                  </div>
                </div>
              )}
              <div ref={viewerContainerRef} className="w-full h-full" />
            </div>
          )}

          {activeTab === 'gallery' && (
            <div className="relative">
              <div className="overflow-hidden rounded-lg">
                <div className="relative h-[500px]">
                  <img
                    src={destination.images[currentImageIndex]}
                    alt={`${destination.name} - Image ${currentImageIndex + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                    <div className="text-white text-center">
                      <h3 className="text-2xl font-bold mb-2">{destination.name}</h3>
                      <p className="text-lg">Photo {currentImageIndex + 1} of {destination.images.length}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <button 
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 p-2 rounded-full shadow-md hover:bg-opacity-100 transition-all"
                aria-label="Previous image"
              >
                <FiChevronLeft className="text-2xl text-gray-800" />
              </button>
              
              <button 
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 p-2 rounded-full shadow-md hover:bg-opacity-100 transition-all"
                aria-label="Next image"
              >
                <FiChevronRight className="text-2xl text-gray-800" />
              </button>
              
              <div className="flex justify-center mt-4 space-x-2">
                {destination.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full ${
                      currentImageIndex === index ? 'bg-blue-600' : 'bg-gray-300'
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          )}

          {activeTab === 'travel-info' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-indigo-700">Weather</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <h4 className="font-bold text-indigo-600">Spring</h4>
                    <p className="text-gray-700">{destination.weather.spring}</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <h4 className="font-bold text-indigo-600">Summer</h4>
                    <p className="text-gray-700">{destination.weather.summer}</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <h4 className="font-bold text-indigo-600">Autumn</h4>
                    <p className="text-gray-700">{destination.weather.autumn}</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <h4 className="font-bold text-indigo-600">Winter</h4>
                    <p className="text-gray-700">{destination.weather.winter}</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 text-indigo-700">Transportation</h3>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <ul className="space-y-2">
                    {destination.transportation.map((item, index) => (
                      <li key={index} className="flex items-center">
                        <FiInfo className="mr-2 text-blue-600" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 text-indigo-700">Accommodation</h3>
                <div className="space-y-4">
                  {destination.accommodation.map((item, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                      <h4 className="font-bold mb-2 text-indigo-600">{item.type}</h4>
                      <p className="text-gray-700 mb-2">{item.examples}</p>
                      <p className="text-blue-600 font-medium">{item.priceRange}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 text-indigo-700">Local Cuisine</h3>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <ul className="space-y-2">
                    {destination.cuisine.map((item, index) => (
                      <li key={index} className="flex items-center">
                        <FiInfo className="mr-2 text-blue-600" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'booking' && (
            <div className="max-w-2xl mx-auto">
              <form onSubmit={handleBookingSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-indigo-700 mb-2">
                      Start Date
                    </label>
                    <div className="relative">
                      <FiCalendar className="absolute left-3 top-3 text-gray-400" />
                      <input
                        type="date"
                        value={bookingData.startDate}
                        onChange={(e) =>
                          setBookingData({ ...bookingData, startDate: e.target.value })
                        }
                        className="pl-10 w-full p-2 border rounded-lg text-gray-700"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-indigo-700 mb-2">
                      End Date
                    </label>
                    <div className="relative">
                      <FiCalendar className="absolute left-3 top-3 text-gray-400" />
                      <input
                        type="date"
                        value={bookingData.endDate}
                        onChange={(e) =>
                          setBookingData({ ...bookingData, endDate: e.target.value })
                        }
                        className="pl-10 w-full p-2 border rounded-lg text-gray-700"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-indigo-700 mb-2">
                    Number of Guests
                  </label>
                  <div className="relative">
                    <FiUsers className="absolute left-3 top-3 text-gray-400" />
                    <input
                      type="number"
                      min="1"
                      value={bookingData.guests}
                      onChange={(e) =>
                        setBookingData({ ...bookingData, guests: parseInt(e.target.value) })
                      }
                      className="pl-10 w-full p-2 border rounded-lg text-gray-700"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-indigo-700 mb-2">
                    Room Type
                  </label>
                  <select
                    value={bookingData.roomType}
                    onChange={(e) =>
                      setBookingData({ ...bookingData, roomType: e.target.value })
                    }
                    className="w-full p-2 border rounded-lg text-gray-700"
                    required
                  >
                    <option value="standard">Standard Room</option>
                    <option value="deluxe">Deluxe Room</option>
                    <option value="suite">Suite</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-bold"
                >
                  Book Now
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 