import React, { useState } from 'react';
import Lawyer from '../Lawyer/Lawyer';

const Lawyers = ({ data }) => {
  const [showAll, setShowAll] = useState(false);

  const visibleLawyers = showAll ? data : data.slice(0, 6);

  return (
    <>
    <div className='text-center my-20'>
        <h1 className='text-6xl mb-4'>Our Best Lawyers</h1>
        <p>Our platform connects you with verified, experienced Lawyers across various specialties — all at your convenience. Whether it's a routine <br /> checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
    </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
        {visibleLawyers.map((singleLawyer) => (
          <Lawyer key={singleLawyer.id} singleLawyer={singleLawyer} />
        ))}
      </div>

      {!showAll && data.length > 6 && (
        <div className="flex justify-center mt-6">
          <button
            onClick={() => setShowAll(true)}
            className="px-6 py-2 bg-green-600 text-white rounded-4xl hover:bg-green-700 transition"
          >
            Show All Lawyers
          </button>
        </div>
      )}
    </>
  );
};

export default Lawyers;
