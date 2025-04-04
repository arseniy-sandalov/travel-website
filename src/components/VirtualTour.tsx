'use client';

import { useRef } from 'react';
import { ReactPannellum } from 'react-pannellum';

interface VirtualTourProps {
  url: string;
}

export default function VirtualTour({ url }: VirtualTourProps) {
  const pannellumRef = useRef<ReactPannellum | null>(null);

  const config = {
    autoLoad: true,
    autoRotate: -2,
    compass: true,
    showZoomCtrl: true,
    showFullscreenCtrl: true,
    showControls: true,
    mouseZoom: true,
    draggable: true,
    disableKeyboardCtrl: false,
    showInfo: false,
  };

  return (
    <div className="relative w-full h-[500px] rounded-lg overflow-hidden">
      <ReactPannellum
        ref={pannellumRef}
        id="virtual-tour"
        sceneId="default"
        imageSource={url}
        config={config}
      />
    </div>
  );
} 