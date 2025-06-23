"use client";

import { useSearchParams } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react';

const IframeContainer: React.FC = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [height, setHeight] = useState<number>(500); // Default height
  const [iframeUrl, setIFrameUrl] = useState<string>(process.env.NEXT_PUBLIC_IFRAME_HOST_URL || 'http://localhost:3000');

  const searchParams = useSearchParams();

  useEffect(() => {
    const utm_source = searchParams.get("source") || '';
    const utm_medium = searchParams.get("medium") || '';
    const utm_campaign = searchParams.get("campaign") || '';
    const ng_action = searchParams.get("ngAction") || '';

    setIFrameUrl((prevUrl) => {
      const url = new URL(prevUrl);
      if (utm_source) url.searchParams.set('utm_source', utm_source);
      if (utm_medium) url.searchParams.set('utm_medium', utm_medium);
      if (utm_campaign) url.searchParams.set('utm_campaign', utm_campaign);
      if (ng_action) url.searchParams.set('ngAction', ng_action);
      return url.toString();
    });

  }, [searchParams]);
  // useEffect(() => {
  //   const utm_source = searchParams.get("source") || '';
  //   const utm_medium = searchParams.get("medium") || '';
  //   const utm_campaign = searchParams.get("campaign") || '';
  //   let ng_action = searchParams.get("ngAction") || '';
  //   const iframe = iframeRef.current;
  //   // let postMsgData: { type: string; utmSource: string; utmMedium: string; utmCampaign: string; ngAction: string; };
  //   if (!iframe) {
  //     console.error('Iframe not found');
  //     return;
  //   }

  //   let type = 'navigate';

  //   if (ng_action.includes('view')) {
  //     type = 'view';
  //   }

  //   if(ng_action.includes('change-password')) {
  //     type = 'navigate';
  //     ng_action = '/change-password?passwordResetId=' + searchParams.get("passwordResetId") || '';
  //   }

  //    const postMsgData = {
  //     type,
  //     utmSource: utm_source,
  //     utmMedium: utm_medium,
  //     utmCampaign: utm_campaign,
  //     ngAction: ng_action,
  //   }

  //   console.log('postMsg', postMsgData);
     
  //   iframe.onload = () => {
  //     iframe.contentWindow?.postMessage(postMsgData, '*');
  //   };
  // }, [searchParams]);


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