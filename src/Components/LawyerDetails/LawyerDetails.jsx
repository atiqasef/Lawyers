import React from 'react';
import { useLoaderData, useParams, useNavigate } from 'react-router';

const LawyerDetails = () => {
    const { id } = useParams();
    const lawyerId = parseInt(id);
    const data = useLoaderData();
    const singleLawyer = data.find(lawyer => lawyer.id === lawyerId);
    const { img, experience, name, expertise, license_no, available_days, consulting_fee } = singleLawyer;

     const navigate = useNavigate();

    const handleBooking = () => {
        // navigate to /my-bookings and send lawyer info as state
        navigate('/my-bookings', { state: { bookedLawyer: singleLawyer } });
    };

    return (
        
       <div>

<div className='my-4 bg-gray-200 p-14 rounded-lg'>
    <h1 className='text-center text-4xl'> Lawyer’s Profile Details</h1>
    <p className='text-xs text-center text-gray-400 mt-2'>Lorem ipsum dolor sit amet consectetur. Sit enim blandit orci tortor amet ut. Suscipit sed est fermentum magna. Quis vitae tempus facilisis <br /> turpis imperdiet mattis donec dignissim volutpat.</p>
</div>


 <div className='flex  items-center'>
            <div>
                <img className='w-48 h-56 p-4 rounded-4xl object-cover' src={img} alt="" />
            </div>
            <div>
                <p className='text-blue-700 bg-blue-100 py-1 rounded-full text-xs font-semibold text-center '>{experience}</p>
                <h1 className='text-2xl'>{name}</h1>
                <div className='flex gap-3 my-2'>
                    <p className='text-xs text-gray-400'>{expertise}</p>
                <p className='text-xs text-gray-400'>Licence No: BD {license_no}</p>
                </div>
                <p className='text-xs mb-2'>Available Days: <span className='ml-2 text-yellow-700 bg-yellow-200'>{available_days.join(' ')}</span></p>
                <p className='text-xs'>Counsulting Fee: <span className='ml-2 text-green-700'>{consulting_fee}</span></p>
            </div>
        </div>

        <div className='mb-20'>
            <h1 className='text-center text-4xl'>Book an Appointment</h1>
            <div className='flex justify-between my-4'>
                <p className='font-bold'>Availability</p>
                <button className=' py-1 px-3 text-success bg-green-100 rounded-lg text-sm'>Lawyer Available Today</button>
            </div>
            <p className='text-center text-yellow-500 bg-yellow-100'>Due to high patient volume, we are currently accepting appointments for today only. We appreciate your understanding and cooperation.</p>
            <div className='text-center'>
                <button onClick={handleBooking} className='text-white bg-green-500 py-2 px-96 rounded-4xl mt-4'>Book Appointment Now</button>
            </div>
        </div>
       </div>

       
    );
};

export default LawyerDetails;