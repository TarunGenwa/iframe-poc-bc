"use client";

import React, { useEffect, useRef, useState } from 'react';

const IframeContainer: React.FC = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [height, setHeight] = useState<number>(500); // Default height

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      // Only accept messages from the iframe source
      // if (event.origin !== 'https://bvf2p.if.stage.bc.networkgaming.co.uk') return;
      if (event.origin !== 'http://localhost:3000') return;

      
      // Check if the message contains a height parameter
      if (event.data && typeof event.data === 'object' && 'height' in event.data) {
        const { height } = event.data;
        console.log(height)
        if (typeof height === 'number' && height > 0) {
          setHeight(height);
        }
      }
    };

    // Add event listener
    window.addEventListener('message', handleMessage);

    // Clean up
    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <iframe
          id='iframe'
          ref={iframeRef}
          src="http://localhost:3000"
          width="100%"
          height={`${height}px`}
          style={{ border: 'none', overflow: 'hidden' }}
          // scrolling="no"
          title="Embedded content"
        />
      </div>
    </div>
  );
};

export default IframeContainer;