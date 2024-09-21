import * as React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProgressBar from './ProgressBar';

export default function FullName() {
    const navigate = useNavigate();
    const [fullName, setFullName] = useState(''); // State to store full name input

    const handleValidation = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        if (!fullName) {
            alert("You must enter your full name before proceeding.");
        } else {
            navigate('/Email'); // Proceed to the next stage if validation passes
        }
    }

    return (
        <form onSubmit={handleValidation}>
            {/* Use ProgressBar Component */}
            <ProgressBar />

            <div className='w-11/12 max-w-[700px] px-10 py-20 rounded-3xl bg-black border-2 border-gray-100'>
                <label className='text-lg font-medium text-white'>Enter Your Full Name</label>
                <input 
                    className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent text-white' 
                    placeholder="Eg. John Smith" 
                    value={fullName} // Bind input value to fullName state
                    onChange={(e) => setFullName(e.target.value)} // Update state on input change
                    required 
                />
                
                <br/>
                        
                <button 
                    type="submit" // Submit the form and trigger validation
                    className='mt-6 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out transform py-3 px-6 bg-white rounded-xl text-black font-bold text-lg'>
                    Next
                </button>

                <button 
                    type="button" // Prevent form submission
                    onClick={() => navigate(-1)} // Go back to the previous page
                    className='mt-4 ml-4 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out transform py-3 px-6 bg-gray-300 rounded-xl text-black font-bold text-lg'>
                    Previous
                </button>
            </div>
        </form>
    )
}
