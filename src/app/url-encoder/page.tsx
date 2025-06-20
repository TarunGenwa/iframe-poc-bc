'use client';

import { useState, useEffect } from 'react';

export default function URLEncoder() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [selectedRoute, setSelectedRoute] = useState('');
  const [queryParams, setQueryParams] = useState([{ key: '', value: '' }]);

  const routes = [
    { path: '/', description: 'Homepage/Dashboard' },
    { path: '/account', description: 'User account management' },
    { path: '/change-password', description: 'Password change form' },
    { path: '/contact', description: 'Contact information' },
    { path: '/contests', description: 'Available contests listing' },
    { path: '/entry-history', description: 'User contest entry history' },
    { path: '/forgot-password', description: 'Password recovery' },
    { path: '/in-play', description: 'Live games view' },
    { path: '/lobby-old', description: 'Legacy lobby interface' },
    { path: '/login', description: 'User login' },
    { path: '/marketing-preferences', description: 'Marketing opt-in/out' },
    { path: '/menu', description: 'Navigation menu' },
    { path: '/mygames', description: 'User active games' },
    { path: '/notifications', description: 'User notifications' },
    { path: '/pg', description: 'Payment gateway' },
    { path: '/picker', description: 'Team selection interface' },
    { path: '/picker/previous', description: 'Previous team selections' },
    { path: '/series', description: 'Series/tournament view' },
    { path: '/signup', description: 'User registration' },
    { path: '/test-components', description: 'Component testing page' },
    { path: '/ticket', description: 'Individual ticket view' },
    { path: '/tnc', description: 'Terms and conditions' },
    { path: '/verify-auth', description: 'Authentication verification' },
    { path: '/verify-email', description: 'Email verification' },
    { path: '/wallet', description: 'Wallet overview' },
    { path: '/wallet/deposit', description: 'Deposit funds' },
    { path: '/wallet/deposit-status', description: 'Deposit status tracking' },
    { path: '/wallet/history', description: 'Transaction history' },
    { path: '/wallet/register-status', description: 'Wallet registration status' },
    { path: '/wallet/saved-cards', description: 'Saved payment methods' },
    { path: '/wallet/withdraw', description: 'Withdraw funds' }
  ];

  const routeParams: Record<string, string[]> = {
    '/': ['view', 'competitionId', 'roundSeriesId', 'gameId', 'gameTypeName', 'refreshTickets', 'refreshXpActions'],
    '/login': ['redirectUrl', 'passwordReset'],
    '/signup': ['redirectUrl', 'utm_source', 'utm_medium', 'utm_campaign', 'source', 'medium', 'campaign'],
    '/forgot-password': ['emailSent'],
    '/verify-auth': ['type', 'redirectUrl'],
    '/verify-email': ['redirectUrl', 'type', 'otp'],
    '/picker': ['gameId', 'ticketId'],
    '/picker/previous': ['gameId'],
    '/in-play': ['gameId', 'roundId', 'ticketId', 'backUrl'],
    '/ticket': ['gameId', 'ticketId', 'roundId'],
    '/series': ['id', 'backUrl'],
    '/mygames': ['pendingCheckout'],
    '/contests': ['backUrl'],
    '/entry-history': ['backUrl'],
    '/wallet': ['backUrl'],
    '/wallet/deposit': ['backUrl'],
    '/wallet/deposit-status': ['backUrl'],
    '/wallet/withdraw': ['backUrl'],
    '/wallet/history': ['backUrl']
  };

  const handleRouteSelect = (routePath: string) => {
    setSelectedRoute(routePath);
  };

  const handleParamChange = (index: number, field: 'key' | 'value', value: string) => {
    const updatedParams = [...queryParams];
    updatedParams[index][field] = value;
    setQueryParams(updatedParams);
  };

  const addParam = () => {
    setQueryParams([...queryParams, { key: '', value: '' }]);
  };

  const addSuggestedParam = (paramKey: string) => {
    const existingParam = queryParams.find(param => param.key === paramKey);
    if (!existingParam) {
      setQueryParams([...queryParams, { key: paramKey, value: '' }]);
    }
  };

  const removeParam = (index: number) => {
    if (queryParams.length > 1) {
      const updatedParams = queryParams.filter((_, i) => i !== index);
      setQueryParams(updatedParams);
    }
  };

  const buildUrl = () => {
    if (!selectedRoute) return;
    
    const validParams = queryParams.filter(param => param.key.trim() && param.value.trim());
    const queryString = validParams.length > 0 
      ? '?' + validParams.map(param => `${encodeURIComponent(param.key)}=${encodeURIComponent(param.value)}`).join('&')
      : '';
    
    const fullUrl = selectedRoute + queryString;
    setInput(fullUrl);
  };

  useEffect(() => {
    buildUrl();
  }, [selectedRoute, queryParams, buildUrl]);

  const handleEncode = () => {
    try {
      const encoded = encodeURIComponent(input);
      setOutput(encoded);
    } catch (error) {
      setOutput('Error: Invalid input');
    }
  };

  const handleDecode = () => {
    try {
      const decoded = decodeURIComponent(input);
      setOutput(decoded);
    } catch (error) {
      setOutput('Error: Invalid encoded input');
    }
  };

  const handleClear = () => {
    setInput('');
    setOutput('');
    setSelectedRoute('');
    setQueryParams([{ key: '', value: '' }]);
  };

  const handleCopyOutput = async () => {
    try {
      await navigator.clipboard.writeText(output);
    } catch (error) {
      console.error('Failed to copy:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
      <div className="max-w-5xl mx-auto px-4">
        <div className="bg-white rounded-xl shadow-xl p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2 text-center">
            URL Encoder/Decoder Tool
          </h1>
          <p className="text-gray-600 text-center mb-8">
            Build URLs with query parameters and encode/decode them safely
          </p>
          
          <div className="space-y-6">
            {/* URL Builder Section */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 p-6 rounded-xl">
              <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <span className="mr-2">🔧</span>
                URL Builder
              </h2>
              
              {/* Route Selector */}
              <div className="mb-4">
                <label htmlFor="route-select" className="block text-sm font-medium text-gray-700 mb-2">
                  Select Route:
                </label>
                <select
                  id="route-select"
                  value={selectedRoute}
                  onChange={(e) => handleRouteSelect(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900"
                >
                  <option value="">Choose a route...</option>
                  {routes.map((route) => (
                    <option key={route.path} value={route.path}>
                      {route.path} - {route.description}
                    </option>
                  ))}
                </select>
              </div>

              {/* Suggested Parameters */}
              {selectedRoute && routeParams[selectedRoute] && (
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Suggested Parameters for {selectedRoute}:
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {routeParams[selectedRoute].map((param) => (
                      <button
                        key={param}
                        onClick={() => addSuggestedParam(param)}
                        className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full hover:bg-green-200 focus:outline-none focus:ring-2 focus:ring-green-500 border border-green-300"
                      >
                        + {param}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Query Parameters */}
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Query Parameters:
                  </label>
                  <button
                    onClick={addParam}
                    className="text-sm bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                  >
                    Add Parameter
                  </button>
                </div>
                
                <div className="space-y-2">
                  {queryParams.map((param, index) => (
                    <div key={index} className="flex gap-2 items-center">
                      <input
                        type="text"
                        placeholder="Parameter key"
                        value={param.key}
                        onChange={(e) => handleParamChange(index, 'key', e.target.value)}
                        className="flex-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900 placeholder-gray-400"
                      />
                      <span className="text-gray-500">=</span>
                      <input
                        type="text"
                        placeholder="Parameter value"
                        value={param.value}
                        onChange={(e) => handleParamChange(index, 'value', e.target.value)}
                        className="flex-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900 placeholder-gray-400"
                      />
                      {queryParams.length > 1 && (
                        <button
                          onClick={() => removeParam(index)}
                          className="text-red-600 hover:text-red-800 focus:outline-none p-1"
                        >
                          ✕
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Manual Input Section */}
            <div>
              <label htmlFor="input" className="block text-sm font-medium text-gray-700 mb-2">
                Manual Input URL or Text:
              </label>
              <textarea
                id="input"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter URL or text to encode/decode, or use the URL builder above..."
                className="w-full h-32 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none bg-white text-gray-900 placeholder-gray-400"
              />
            </div>

            <div className="flex gap-3 justify-center flex-wrap">
              <button
                onClick={handleEncode}
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 shadow-md hover:shadow-lg font-medium"
              >
                🔐 Encode
              </button>
              <button
                onClick={handleDecode}
                className="px-8 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg hover:from-green-700 hover:to-green-800 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-200 shadow-md hover:shadow-lg font-medium"
              >
                🔓 Decode
              </button>
              <button
                onClick={handleClear}
                className="px-8 py-3 bg-gradient-to-r from-gray-600 to-gray-700 text-white rounded-lg hover:from-gray-700 hover:to-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all duration-200 shadow-md hover:shadow-lg font-medium"
              >
                🗑️ Clear
              </button>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label htmlFor="output" className="block text-sm font-medium text-gray-700">
                  Output:
                </label>
                {output && (
                  <button
                    onClick={handleCopyOutput}
                    className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-md hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                  >
                    📋 Copy to Clipboard
                  </button>
                )}
              </div>
              <textarea
                id="output"
                value={output}
                readOnly
                placeholder="Encoded/decoded result will appear here..."
                className="w-full h-32 p-3 border border-gray-300 rounded-md bg-gray-50 resize-none text-gray-900 placeholder-gray-500"
              />
            </div>
          </div>

          <div className="mt-6 text-sm text-gray-600">
            <h3 className="font-semibold mb-2">Usage:</h3>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>URL Builder:</strong> Select a route from the dropdown and add query parameters</li>
              <li><strong>Query Parameters:</strong> Add key-value pairs that will be automatically URL-encoded</li>
              <li><strong>Manual Input:</strong> Enter any URL or text directly in the input field</li>
              <li><strong>Encode:</strong> Converts special characters in URLs to percent-encoded format</li>
              <li><strong>Decode:</strong> Converts percent-encoded characters back to their original form</li>
              <li><strong>Copy:</strong> Click &quot;Copy to Clipboard&quot; to copy the encoded/decoded result</li>
              <li>All routes are from the Fantasy Frontend application documentation</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}