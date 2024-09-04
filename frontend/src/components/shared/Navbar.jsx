import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import React from 'react';
import { Avatar, AvatarImage } from '../ui/avatar';

const Navbar = () => {
    return (
        <div className='bg-white'>

            <div className='flex items-center justify-between mx-auto max-w-7xl h-16'>
                <div>
                    <h1 className='text-2xl font-bold'>Job<span className='text-[#F83002]'>Portal</span></h1>
                </div>
                <div className='flex items-center gap-10'>
                    <ul className='flex font-medium gap-5'>
                        <li>Home</li>
                        <li>Jobs</li>
                        <li>Browse</li>
                    </ul>

                    <Popover>
                        <PopoverTrigger asChild>
                            <Avatar className='cursor-pointer'>
                                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                            </Avatar>
                        </PopoverTrigger>
                        <PopoverContent className='w-80'>
                            <div className='flex gap-4'>
                                <Avatar className='cursor-pointer'>
                                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                </Avatar>
                                <h4 className='font-medium'>Abhijith..</h4>
                            </div>
                        </PopoverContent>
                    </Popover>
                </div>
            </div>

        </div>
    );
}

export default Navbar;
