import * as React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Welcome(){
    const navigate = useNavigate();

    return(   
        <div className=' w-11/12 max-w-[700px] px-10 py-20 rounded-3xl bg-black border-2 border-gray-100'>
                <h1 className='text-5xl font-semibold text-white'>Welcome!</h1>
                <p className='font-medium text-lg text-gray-300 mt-4'>Let’s make this process a breeze. Fill out the form below, and we’ll take care of the rest. 😊</p>
                
            <div className='flex justify-center mt-8'>
            
            <button onClick={() => navigate('/FullName')} // Redirect to the FullName component
                    className='active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out transform py-6 px-12 bg-white rounded-xl text-black font-bold text-xl'>
                    Let's Start
            </button>
            </div>
        </div>
    )
}