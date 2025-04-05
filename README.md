# Tourism Website with Virtual Tours

A modern tourism website that provides detailed information and virtual 360° tours of various destinations. Built with Next.js and React.

## Features

- Responsive design
- Virtual 360° tours integration
- Destination information and galleries
- Interactive UI with smooth animations
- SEO optimized

## Tech Stack

- Next.js 14
- React 19
- Tailwind CSS
- Framer Motion
- React Icons
- React Pannellum (for virtual tours)

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
tourism/
├── public/
│   ├── images/         # Static images
│   └── virtual-tours/  # 360° tour assets
├── src/
│   ├── components/     # Reusable components
│   ├── app/           # Next.js app router pages
│   └── styles/        # Global styles
```

## Pages

1. Home Page (`/`)
2. Destinations (`/destinations`)
3. Destination Detail (`/destinations/[id]`)
4. Virtual Tours (`/virtual-tours`)
5. Virtual Tour Detail (`/virtual-tours/[id]`)
6. About (`/about`)
7. Contact (`/contact`)

## Development

- `npm run dev` - Start development server
- `npm run build` - Build production bundle
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

