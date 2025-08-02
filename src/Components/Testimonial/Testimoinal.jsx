import React from 'react';
import CountUp from 'react-countup';
import successDoc from '../../assets/Image/success-doctor.png'
import successPatients from '../../assets/Image/success-patients.png'
import successReview from '../../assets/Image/success-review.png'
import successStaffs from '../../assets/Image/success-staffs.png'
const Testimoinal = () => {
    return (
        <div className='my-20'>
            <h1 className='text-center text-4xl mb-5'>We Provide Best Law Services</h1>
            <p className='text-center'>Our platform connects you with verified, experienced Lawyers across various specialities — all at your convenience. </p>


           <div className='flex justify-between mt-10'>
             <div className="p-12  bg-[#C4C4C4] shadow rounded">
               <img src={successDoc} alt="" />
                <h2 className="text-4xl font-bold text-black">
                    <CountUp start={0} end={199} duration={5} />+
                </h2>
                <p className="mt-2 text-gray-700">Total Lawyer</p>
            </div>

             <div className="p-12  bg-[#C4C4C4] shadow rounded">
               <img src={successReview} alt="" />
                <h2 className="text-4xl font-bold text-black">
                    <CountUp start={0} end={467} duration={5} />+
                </h2>
                <p className="mt-2 text-gray-700"> Total Review</p>
            </div>

             <div className="p-12  bg-[#C4C4C4] shadow rounded">
               <img src={successPatients } alt="" />
                <h2 className="text-4xl font-bold text-black">
                    <CountUp start={0} end={1900} duration={5} />+
                </h2>
                <p className="mt-2 text-gray-700">Case Candidate</p>
            </div>

             <div className="p-12  bg-[#C4C4C4] shadow rounded">
               <img src={successStaffs } alt="" />
                <h2 className="text-4xl font-bold text-black">
                    <CountUp start={0} end={300} duration={5} />+
                </h2>
                <p className="mt-2 text-gray-700">Total Stuffs</p>
            </div>
           </div>


        </div>
    );
};

export default Testimoinal;