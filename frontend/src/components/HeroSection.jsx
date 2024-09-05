import React from 'react';
import { Button } from './ui/button';
import { Search } from 'lucide-react';

const HeroSection = () => {
    return (
        <div className='text-center px-4'>
            <div className='flex flex-col gap-5 my-10 max-w-4xl mx-auto'>
                <span className='mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#F83002] font-medium'>No. 1 Job Hunt Website</span>
                <h1 className='text-3xl md:text-5xl font-bold'>Search, Apply & <br className='hidden md:block' /> Get Your <span className='text-[#6A38C2]'>Dream Jobs</span></h1>
                <p className='text-sm md:text-base text-gray-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad voluptates, dicta nam tempora vero quia!</p>
                <div className='flex w-full md:w-[60%] shadow-lg border border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto'>
                    <input
                        type='text'
                        placeholder='Find your dream jobs'
                        className='outline-none border-none w-full px-3 py-2'
                    />
                    <Button className='rounded-r-full bg-[#6A38C2] hover:bg-[#7a40df]'>
                        <Search className='h-5 w-5' />
                    </Button>
                </div>
            </div>
        </div>
    )
};

export default HeroSection;