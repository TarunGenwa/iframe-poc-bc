"use client";

import { useSearchParams } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react';

const IframeContainer: React.FC = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [height, setHeight] = useState<number>(500); // Default height
  const [iframeUrl, setIframeUrl] = useState<string>(process.env.NEXT_PUBLIC_IFRAME_HOST_URL || 'http://localhost:3000');

  const searchParams = useSearchParams();

  useEffect(() => {
    let utm_source = searchParams.get("source") || '';
    let utm_medium = searchParams.get("medium") || '';
    let utm_campaign = searchParams.get("campaign") || '';
    let ng_action = searchParams.get("ngAction") || '';
    const iframe = iframeRef.current;
    let postMsg: any;
    if (!iframe) {
      console.error('Iframe not found');
      return;
    }

    let type = 'navigate';

    if (ng_action.includes('compArena')) {
      type = 'comparena';
    }

    if(ng_action.includes('change-password')) {
      type = 'navigate';
      ng_action = '/change-password?passwordResetId=' + searchParams.get("passwordResetId") || '';
    }

    postMsg = {
      type,
      utmSource: utm_source,
      utmMedium: utm_medium,
      utmCampaign: utm_campaign,
      ngAction: ng_action,
    }

    console.log('postMsg', postMsg);
     
    iframe.onload = () => {
      iframe.contentWindow?.postMessage(postMsg, '*');
    };
  }, [searchParams]);


  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      // Only accept messages from the iframe source
      // console.log(event)
      const allowedOrigins = process?.env?.NEXT_PUBLIC_IFRAME_ALLOWED_ORIGINS?.split(', ') || []
      if (!allowedOrigins.includes(event.origin)) return;

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
        // console.log('scrolllevent')
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
    <div className=" ">
      <div className="bg-base-100  shadow-lg overflow-hidden">
        <iframe
          id='iframe'
          ref={iframeRef}
          src={iframeUrl}
          width="100%"
          height={`${height}px`}
          style={{ border: 'none', overflow: 'hidden' }}
          title="Embedded content"
        />
      </div>
    </div>
  );
};

export default IframeContainer;