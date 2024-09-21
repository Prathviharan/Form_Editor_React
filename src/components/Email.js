import * as React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProgressBar from './ProgressBar';

export default function Email(){
    const navigate = useNavigate();
    const [email, setEmail] = useState('');

    const handleValidation = (e) => {
        e.preventDefault();
        const emailPattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

        if(!email.match(emailPattern)){ // Check if email matches the pattern
            alert('Please enter a valid email address.');
        } else {
            navigate('/Phone'); // Navigate to the next step if the email is valid
        }
    }

    return(
        <form onSubmit={handleValidation}>
            {/* ProgressBar Component */}
            <ProgressBar />
            <div className='w-11/12 max-w-[700px] px-10 py-20 rounded-3xl bg-black border-2 border-gray-100'>
                <label className='text-lg font-medium text-white'>Enter Your Email Address</label>
                <input 
                    className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent text-white' 
                    type="email" 
                    placeholder="Eg. johnsmith@example.com" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required 
                />

                <button 
                    type="submit" // This ensures form validation is triggered
                    className='mt-6 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out transform py-3 px-6 bg-white rounded-xl text-black font-bold text-lg'>Next
                </button>

                <button 
                    type="button" // Prevent form submission
                    onClick={() => navigate(-1)} // Go back to the previous page
                    className='mt-4 ml-4 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out transform py-3 px-6 bg-gray-300 rounded-xl text-black font-bold text-lg'>Previous
                </button>
            </div>
        </form>
    )
}
