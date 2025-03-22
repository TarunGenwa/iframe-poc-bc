# IFrame Parent Application

This is a Next.js application that demonstrates embedding an iframe and handling postMessage communication between the parent and child frames.

## Features

- Parent application running on port 3001
- Embeds an iframe that loads content from localhost:3000
- Implements a postMessage listener to dynamically adjust iframe height
- Sets iframe scrolling to "none" for seamless integration
- Responsive design with header and footer

## Getting Started

1. Clone this repository
2. Install dependencies:
   ```
   npm install
   ```
3. Run the development server:
   ```
   npm run dev
   ```
4. The parent application will run on [http://localhost:3001](http://localhost:3001)

## Child Application

For this to work properly, you need to have a child application running on port 3000 that sends height information via postMessage. Example implementation for the child application:

```javascript
// In your child application (running on port 3000)
useEffect(() => {
  // Function to send the height to the parent
  const sendHeightToParent = () => {
    const height = document.body.scrollHeight;
    window.parent.postMessage({ height }, 'http://localhost:3001');
  };

  // Send initial height
  sendHeightToParent();

  // Send height when window is resized
  window.addEventListener('resize', sendHeightToParent);

  // Optional: Send height when content changes
  const observer = new MutationObserver(sendHeightToParent);
  observer.observe(document.body, { childList: true, subtree: true });

  return () => {
    window.removeEventListener('resize', sendHeightToParent);
    observer.disconnect();
  };
}, []);
```

## Deployment

To build the application for production:

```
npm run build
```

To start the production server:

```
npm start
```

## Notes

- For production, update the iframe URL and origins in the postMessage handlers
- Add proper CORS headers and security measures for production use
