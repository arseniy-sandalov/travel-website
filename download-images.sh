#!/bin/bash

# Create necessary directories
mkdir -p public/images/{destinations,attractions,travelers}

# Download destination images
cd public/images/destinations

# Download New York image
curl -L -o new-york.jpg "https://cdn.pixabay.com/photo/2014/09/07/21/52/city-438393_1280.jpg"

# Download Sydney image
curl -L -o sydney.jpg "https://cdn.pixabay.com/photo/2014/06/06/09/36/sydney-opera-house-363244_1280.jpg"

# Download Rome image
curl -L -o rome.jpg "https://cdn.pixabay.com/photo/2016/11/08/05/29/rome-1807524_1280.jpg"

# Download Barcelona image
curl -L -o barcelona.jpg "https://cdn.pixabay.com/photo/2014/837572/pexels-photo-360996_1280.jpg"

# Download Dubai image
curl -L -o dubai.jpg "https://cdn.pixabay.com/photo/2016/11/13/12/35/dubai-1820024_1280.jpg"

# Download Bali image
curl -L -o bali.jpg "https://cdn.pixabay.com/photo/2017/08/31/05/36/buildings-2704359_1280.jpg"

# Download Maldives image
curl -L -o maldives.jpg "https://cdn.pixabay.com/photo/2017/01/31/13/14/computer-2023780_1280.jpg"

# Download Cancun image
curl -L -o cancun.jpg "https://cdn.pixabay.com/photo/2016/11/13/12/35/cancun-1820024_1280.jpg"

# Download Swiss Alps image
curl -L -o swiss-alps.jpg "https://cdn.pixabay.com/photo/2016/11/13/12/35/alps-1820024_1280.jpg"

# Download Patagonia image
curl -L -o patagonia.jpg "https://cdn.pixabay.com/photo/2016/11/13/12/35/patagonia-1820024_1280.jpg"

# Download Nepal image
curl -L -o nepal.jpg "https://cdn.pixabay.com/photo/2016/11/13/12/35/nepal-1820024_1280.jpg"

# Download Petra image
curl -L -o petra.jpg "https://cdn.pixabay.com/photo/2016/11/13/12/35/petra-1820024_1280.jpg"

# Download Machu Picchu image
curl -L -o machu-picchu.jpg "https://cdn.pixabay.com/photo/2016/11/13/12/35/machu-picchu-1820024_1280.jpg"

# Download Angkor Wat image
curl -L -o angkor-wat.jpg "https://cdn.pixabay.com/photo/2016/11/13/12/35/angkor-wat-1820024_1280.jpg"

# Download hero background image
curl -L -o hero-bg.jpg "https://cdn.pixabay.com/photo/2016/11/13/12/35/landscape-1820024_1280.jpg"

# Download traveler profile images
cd ../travelers

# Profile images
curl -o sarah.jpg "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80&fm=webp"
curl -o michael.jpg "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80&fm=webp"
curl -o emma.jpg "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&q=80&fm=webp"
curl -o james.jpg "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80&fm=webp"
curl -o aisha.jpg "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&q=80&fm=webp"
curl -o lucas.jpg "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80&fm=webp"

# Make the script executable
chmod +x download-images.sh 