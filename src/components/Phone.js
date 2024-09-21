import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import ProgressBar from './ProgressBar';

export default function Phone(){
    const navigate = useNavigate();
    const [phone, setPhone] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleValidation = (e) => {
        e.preventDefault();
        const phonePattern = /^[0-9]{10}$/;  // Phone number pattern for 10 digits

        // Validate if phone number matches the pattern
        if (!phonePattern.test(phone)) {
            setErrorMessage('Please enter a valid 10 digit phone number');
        } else {
            // Clear the error message and proceed if valid
            setErrorMessage('');
            navigate('/Address');
        }
    }

    return (
        <form onSubmit={handleValidation}>
            {/* Use ProgressBar Component */}
            <ProgressBar />

            <div className='w-11/12 max-w-[700px] px-10 py-20 rounded-3xl bg-black border-2 border-gray-100'>
                <label className='text-lg font-medium text-white'>Enter Your Phone Number</label>
                
                <input 
                    className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent text-white' 
                    type="tel" 
                    placeholder="Eg. 0712345678" 
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required 
                />

                {/* Error message for invalid phone number */}
                {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}

                {/* Submit button for validation and moving to the next step */}
                <button 
                    type="submit"  // Form submission triggers validation
                    className='mt-6 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out transform py-3 px-6 bg-white rounded-xl text-black font-bold text-lg'>
                    Next
                </button>

                <button 
                    type="button"
                    onClick={() => navigate(-1)}  // Go back to the previous page
                    className='mt-4 ml-4 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out transform py-3 px-6 bg-gray-300 rounded-xl text-black font-bold text-lg'>
                    Previous
                </button>
            </div>
        </form>
    );
}
