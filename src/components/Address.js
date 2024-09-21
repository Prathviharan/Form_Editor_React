import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import ProgressBar from './ProgressBar';

export default function Address() {
    const navigate = useNavigate();
    const [doorNo, setDoorNo] = useState('');
    const [streetName, setStreetName] = useState('');
    const [city, setCity] = useState('');
    const [district, setDistrict] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate if all fields are filled
        if (!doorNo || !streetName || !city || !district || !postalCode) {
            setErrorMessage('All fields are required.');
            return;
        }

        // Validate if postal code is a number and has a minimum of 5 digits
        if (!/^\d{5,}$/.test(postalCode)) {
            setErrorMessage('Please enter a valid postal code (at least 5 digits).');
            return;
        }

        // Clear error message after successful validation
        setErrorMessage('');

        // Log the address details (or you can handle form submission here)
        const address = {
            doorNo,
            streetName,
            city,
            district,
            postalCode,
        };
        console.log(address);

        // Navigate to the next page
        navigate('/Agree');
    };

    return (
        <form onSubmit={handleSubmit} className="w-full max-w-md">
            {/* Use ProgressBar Component */}
            <ProgressBar />

            <div className="w-full max-w-[1200px] px-10 py-20 rounded-3xl bg-black border-2 border-gray-100">
                <label className="text-lg font-medium text-white">Enter Your Residence Address</label>
                <br />

                <label className="block text-white font-regular mb-1">Door Number:</label>
                <input
                    className="w-full border-2 border-gray-100 rounded-xl p-4 bg-transparent text-white"
                    type="text"
                    placeholder="Eg. 123"
                    value={doorNo}
                    onChange={(e) => setDoorNo(e.target.value)}
                    required
                />

                <label className="block text-white font-regular mb-1">Street Name:</label>
                <input
                    className="w-full border-2 border-gray-100 rounded-xl p-4 bg-transparent text-white"
                    type="text"
                    placeholder="Eg. Main Street"
                    value={streetName}
                    onChange={(e) => setStreetName(e.target.value)}
                    required
                />

                <label className="block text-white font-regular mb-1">City:</label>
                <input
                    className="w-full border-2 border-gray-100 rounded-xl p-4 bg-transparent text-white"
                    type="text"
                    placeholder="Eg. Kandy"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    required
                />

                <label className="block text-white font-regular mb-1">District:</label>
                <input
                    className="w-full border-2 border-gray-100 rounded-xl p-4 bg-transparent text-white"
                    type="text"
                    placeholder="Eg. Kandy"
                    value={district}
                    onChange={(e) => setDistrict(e.target.value)}
                    required
                />

                <label className="block text-white font-regular mb-1">Postal Code:</label>
                <input
                    className="w-full border-2 border-gray-100 rounded-xl p-4 bg-transparent text-white"
                    type="number"
                    placeholder="Eg. 20000"
                    value={postalCode}
                    onChange={(e) => setPostalCode(e.target.value)}
                    required
                />

                {/* Display error message if any */}
                {errorMessage && <p className="text-red-500 mb-3">{errorMessage}</p>}

                <button
                    type="submit"
                    className="mt-6 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out transform py-3 px-6 bg-white rounded-xl text-black font-bold text-lg"
                >
                    Next
                </button>

                <button
                    type="button"
                    onClick={() => navigate(-1)}
                    className="mt-4 ml-4 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out transform py-3 px-6 bg-gray-300 rounded-xl text-black font-bold text-lg"
                >
                    Previous
                </button>
            </div>
        </form>
    );
}
