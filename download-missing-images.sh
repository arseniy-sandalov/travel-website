#!/bin/bash

# Create necessary directories
mkdir -p public/images/destinations

# Download missing destination images
cd public/images/destinations

# Download Petra image
curl -o petra.jpg "https://images.unsplash.com/photo-1579606037717-e576962c31c8?w=1200&q=80&fm=webp"

# Download Patagonia image
curl -o patagonia.jpg "https://images.unsplash.com/photo-1531794506823-8f9f1ee42ff4?w=1200&q=80&fm=webp"

# Make the script executable
chmod +x download-missing-images.sh 