import React from 'react';
import { useLocation } from 'react-router-dom';

export default function ProgressBar() {
  const location = useLocation();

  return (
    <div className="flex items-center justify-between mb-8">
        {/*Full Name*/}
        <div className="flex-1">
            <div className="flex items-center">
            <div className={`w-8 h-8 rounded-full text-White flex items-center justify-center 
                ${location.pathname === '/FullName' ? 'bg-blue-500' : 'bg-gray-400'}`}>1</div>
            <p className={`ml-2 text-sm ${location.pathname === '/FullName' ? 'text-Black' : 'text-gray-400'}`}>Name</p>
            </div>
        </div>

        {/*Email*/}
        <div className="flex-1">
            <div className="flex items-center">
            <div className={`w-8 h-8 rounded-full text-White flex items-center justify-center 
                ${location.pathname === '/Email' ? 'bg-blue-500' : 'bg-gray-400'}`}>2</div>
            <p className={`ml-2 text-sm ${location.pathname === '/Email' ? 'text-Black' : 'text-gray-400'}`}>Email</p>
            </div>
        </div>

        {/*Phone*/}
        <div className="flex-1">
            <div className="flex items-center">
            <div className={`w-8 h-8 rounded-full text-White flex items-center justify-center 
                ${location.pathname === '/Phone' ? 'bg-blue-500' : 'bg-gray-400'}`}>3</div>
            <p className={`ml-2 text-sm ${location.pathname === '/Phone' ? 'text-Black' : 'text-gray-400'}`}>Phone</p>
            </div>
        </div>

        {/* Address Step */}
        <div className="flex-1">
            <div className="flex items-center">
            <div className={`w-8 h-8 rounded-full text-White flex items-center justify-center 
                ${location.pathname === '/Address' ? 'bg-blue-500' : 'bg-gray-400'}`}>4</div>
            <p className={`ml-2 text-sm ${location.pathname === '/Address' ? 'text-Black' : 'text-gray-400'}`}>Address</p>
            </div>
        </div>

        {/* Agree */}
        <div className="flex-1">
            <div className="flex items-center">
            <div className={`w-8 h-8 rounded-full text-black flex items-center justify-center 
                ${location.pathname === '/Agree' ? 'bg-blue-500' : 'bg-gray-400'}`}>5</div>
            <p className={`ml-2 text-sm ${location.pathname === '/Agree' ? 'text-black' : 'text-gray-400'}`}>Agree</p>
            </div>
        </div>
    </div>
  );
}
