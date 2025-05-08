
import React from 'react';
import { FiUser, FiUserPlus } from 'react-icons/fi';
import { IoCallOutline } from 'react-icons/io5';
import { LiaFlagUsaSolid } from 'react-icons/lia';
import { TfiLocationPin } from 'react-icons/tfi';

const Footer = () => {
    return (
        <div>
            {/* navTop container */}
            <div className='flex items-center justify-between py-1 border-b border-b-gray-300'>
                {/* navTop left section */}
                <div className='flex items-center justify-center mx-6'>
                    <TfiLocationPin />
                    <p className='pr-4 pl-1'>Dhaka, Bangladesh</p>
                    <IoCallOutline />
                    +88 01929564378
                </div>
                {/* navTop right section */}
                <div className='flex items-center justify-center gap-4 mx-6'>
                    <p className='flex items-center justify-center gap-1'><LiaFlagUsaSolid /> English</p>
                    <p className='flex items-center justify-center gap-1'><FiUser /> Register</p>
                    <p className='flex items-center justify-center gap-1'><FiUserPlus /> Sign in</p>
                </div>
            </div>
            {/* navMiddle container */}
            <div className='flex items-center justify-between'>
                {/* navLogo */}
                <img src="" alt="" />
                {/* navSearch container*/}
                <div></div>
                {/* navright container */}
                <div></div>
            </div>

            {/* navBottom container */}
            <div></div>

            {/* banner */}
            <div className='h-80 w-full '>
                {/* shape-1 */}
                <div className='h-40 w-40 border-r-[52px] border-r-rose-400 border-b-[52px] border-b-rose-400 rounded-br-full'></div>
                <div className='flex items-center justify-end '>
                    <div className='h-40 w-40 border-l-[52px] border-l-rose-400 border-t-[52px] border-t-rose-400 rounded-tl-full'></div>
                </div>
            </div>
        </div>
    );
};

export default Footer;