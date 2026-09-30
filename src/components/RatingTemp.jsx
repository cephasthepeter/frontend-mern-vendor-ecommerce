import React from 'react';
import { FaStar } from 'react-icons/fa';
import { CiStar } from 'react-icons/ci';

const RatingTemp = ({rating}) => {
     if (rating === 5) {
        return (
            <div className='flex items-center gap-1'>
            <span className='text-[#Edbb0E]'><FaStar/></span>
            <span className='text-[#Edbb0E]'><FaStar/></span>
            <span className='text-[#Edbb0E]'><FaStar/></span>
            <span className='text-[#Edbb0E]'><FaStar/></span>
            <span className='text-[#Edbb0E]'><FaStar/></span>
            </div>
        ) 
     }

     else if (rating === 4) {
        return (
            <div className='flex items-center gap-1'>
            <span className='text-[#Edbb0E]'><FaStar/></span>
            <span className='text-[#Edbb0E]'><FaStar/></span>
            <span className='text-[#Edbb0E]'><FaStar/></span>
            <span className='text-[#Edbb0E]'><FaStar/></span>
            <span className='text-[#Edbb0E]'><CiStar/></span>
            </div>
        ) 
     }

     else if (rating === 3) {
        return (
            <div className='flex items-center gap-1'>
            <span className='text-[#Edbb0E]'><FaStar/></span>
            <span className='text-[#Edbb0E]'><FaStar/></span>
            <span className='text-[#Edbb0E]'><FaStar/></span>
            <span className='text-[#Edbb0E]'><CiStar/></span>
            <span className='text-[#Edbb0E]'><CiStar/></span>
            </div>
        ) 
     }
     else if (rating === 2) {
        return (
            <div className='flex items-center gap-1'>
            <span className='text-[#Edbb0E]'><FaStar/></span>
            <span className='text-[#Edbb0E]'><FaStar/></span>
            <span className='text-[#Edbb0E]'><CiStar/></span>
            <span className='text-[#Edbb0E]'><CiStar/></span>
            <span className='text-[#Edbb0E]'><CiStar/></span>
            </div>
        ) 
     }
     else if (rating === 1) {
        return (
            <div className='flex items-center gap-1'>
            <span className='text-[#Edbb0E]'><FaStar/></span>
            <span className='text-[#Edbb0E]'><CiStar/></span>
            <span className='text-[#Edbb0E]'><CiStar/></span>
            <span className='text-[#Edbb0E]'><CiStar/></span>
            <span className='text-[#Edbb0E]'><CiStar/></span>
            </div>
        ) 
     }
     else  {
        return (
            <div className='flex items-center gap-1'>
            <span className='text-[#Edbb0E]'><CiStar/></span>
            <span className='text-[#Edbb0E]'><CiStar/></span>
            <span className='text-[#Edbb0E]'><CiStar/></span>
            <span className='text-[#Edbb0E]'><CiStar/></span>
            <span className='text-[#Edbb0E]'><CiStar/></span>
            </div>
        ) 
     }
};

export default RatingTemp;