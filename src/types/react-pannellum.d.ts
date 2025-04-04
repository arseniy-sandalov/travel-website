declare module 'react-pannellum' {
  import * as React from 'react';

  export interface PannellumConfig {
    autoLoad?: boolean;
    autoRotate?: number;
    compass?: boolean;
    showZoomCtrl?: boolean;
    showFullscreenCtrl?: boolean;
    showControls?: boolean;
    mouseZoom?: boolean;
    draggable?: boolean;
    disableKeyboardCtrl?: boolean;
    showInfo?: boolean;
    [key: string]: boolean | number | undefined;
  }

  export interface ReactPannellumProps {
    id: string;
    sceneId: string;
    imageSource: string;
    config?: PannellumConfig;
    style?: React.CSSProperties;
    className?: string;
    onLoad?: () => void;
    onError?: (error: Error) => void;
  }

  export class ReactPannellum extends React.Component<ReactPannellumProps> {
    getViewer(): unknown;
  }
} 