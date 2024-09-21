import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import ProgressBar from './ProgressBar';

export default function Agree() {
    const navigate = useNavigate();
    const [isChecked, setIsChecked] = useState(false);

    const handleValidation = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        if (isChecked) {
            // Proceed only if checkbox is checked
            navigate('/ThankYou');
        } else {
            alert("You must agree before proceeding.");
        }
    }

    return (
        <form onSubmit={handleValidation}>
            {/* Use ProgressBar Component */}
            <ProgressBar/>
            
            <div className='w-11/12 max-w-[700px] px-10 py-20 rounded-3xl bg-black border-2 border-gray-100'>
                
                {/* Agree Checkbox */}
                <label className='text-lg font-medium text-white'>Agree to Terms</label>
                
                <div className="flex items-center mt-4">
                    <input 
                        type="checkbox" 
                        id="agree" 
                        className="mr-2" 
                        onChange={() => setIsChecked(!isChecked)}
                        required
                    />
                    <label htmlFor="agree" className="text-white">I agree to the terms and conditions</label>
                </div>

                <div className="mt-6">
                    <button 
                        type="submit" 
                        className='active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out transform py-3 px-6 bg-white rounded-xl text-black font-bold text-lg'>
                        Next
                    </button>

                    <button 
                        type="button"
                        onClick={() => navigate(-1)} // Go back to the previous page
                        className='mt-4 ml-4 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out transform py-3 px-6 bg-gray-300 rounded-xl text-black font-bold text-lg'>
                        Previous
                    </button>
                </div>
            </div>
        </form>
    );
}
