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
      console.log('event', event.data)

      if(event.data.type === 'setAccessToken') {
        console.log(event.data)
        const { accessToken } = event.data;
        if (typeof accessToken === 'string') {
          console.log('seeting localstorage')
          localStorage.setItem('accessToken', accessToken);
        }
      }
      // Check if the message contains a height parameter
      if (event.data && typeof event.data === 'object' && 'height' in event.data) {
        const { height } = event.data;
        if (typeof height === 'number' && height > 0) {
          setHeight(height);
        }
      }

      if (event.data && typeof event.data === 'object' && event.data.type === 'scroll' ) {
        const { type } = event.data;

        if (type === 'scroll') {
        console.log('scrolllevent')
          if(document) {
            const iframe = document.getElementById('iframe');
            if (iframe) {
              // const headerHeight = 100; // Approximate header height in pixels
              // const iframePosition = iframe.getBoundingClientRect().top + window.scrollY;
              // console.log('iframe postition',iframePosition)
              window.scrollTo({
                top: 0,
                behavior: 'smooth'
              });
            }
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
    <div className="container ">
      <div className="bg-white  shadow-lg overflow-hidden">
        <iframe
          id='iframe'
          ref={iframeRef}
          src="https://bvf2p.if.stage.bc.networkgaming.co.uk"
          // src='http://localhost:3000'
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