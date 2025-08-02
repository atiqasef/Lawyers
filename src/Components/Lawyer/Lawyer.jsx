import React from 'react';
import { Link } from 'react-router';

const Lawyer = ({ singleLawyer }) => {
  const { name,id, availability, experience, expertise, license_no, img } = singleLawyer;
  return (
    
    <div className='flex flex-col md:flex-row justify-between px-3 md:px-5 py-4 border border-slate-300 rounded-lg shadow-sm bg-white mb-6'>
      <figure className='mr-0 md:mr-10 mb-4 md:mb-0'>
        <img
          className='w-36 h-40 p-4 rounded-2xl object-cover'
          src={img}
          alt={name}
        />
      </figure>
      <div className="card-body flex flex-col justify-between">
        <div>
          <div className='flex gap-4 justify-start items-center mb-2'>
            <span className='text-green-700 bg-green-100 py-1 px-3 rounded-full text-xs font-semibold'>
              {availability}
            </span>
            <span className='text-blue-700 bg-blue-100 py-1 px-3 rounded-full text-xs font-semibold'>
              {experience}
            </span>
          </div>
          <h2 className="card-title m-0 text-lg font-bold">{name}</h2>
          <p className='m-0 p-0 text-gray-700'>{expertise}</p>
          <p className='text-sm text-gray-500'>License No: {license_no}</p>
        </div>

        <Link to={`/lawyerdetails/${id}`}><button className="mt-4 self-start border border-blue-500 text-blue-500 rounded-full py-1 px-24 hover:bg-blue-100 transition">
          View Details
        </button></Link>
      </div>
    </div>
  );
};

export default Lawyer;
