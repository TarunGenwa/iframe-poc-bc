"use client";

import React, { useEffect, useRef, useState } from 'react';

const IframeContainer: React.FC = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [height, setHeight] = useState<number>(500); // Default height

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      // Only accept messages from the iframe source
      // if (event.origin !== 'https://bvf2p.if.stage.bc.networkgaming.co.uk') return;
      const allowedOrigins = ['http://localhost:3000', 'https://bvf2p.if.stage.bc.networkgaming.co.uk']
      if (!allowedOrigins.includes(event.origin)) return;

      
      // Check if the message contains a height parameter
      if (event.data && typeof event.data === 'object' && 'height' in event.data) {
        const { height } = event.data;
        console.log(height)
        if (typeof height === 'number' && height > 0) {
          setHeight(height);
        }
      }

      if (event.data && typeof event.data === 'object' && event.data.type === 'scroll' ) {
        const { type } = event.data;
        if (type === 'scroll') {
          if(document) {
            document.getElementById('iframe')?.scrollIntoView();
          } 
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
    <div className="container mx-auto p-2">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <iframe
          id='iframe'
          ref={iframeRef}
          src="https://bvf2p.if.stage.bc.networkgaming.co.uk"
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