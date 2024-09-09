import React from 'react'
import { Button } from './ui/button'
import { Bookmark } from 'lucide-react'
import { } from '@radix-ui/react-avatar'
import { Avatar, AvatarImage } from './ui/avatar'
import { Badge } from './ui/badge'
import { useNavigate } from 'react-router-dom'



const Job = () => {

    const navigate = useNavigate();

    const jobId = "9768789";

    return (
        <div className='p-5 rounded-md shadow-xl bg-white border border-gray-100'>
            <div className='flex items-center justify-between mb-3'>
                <p className='text-sm text-gray-500'>2 days ago</p>
                <Button variant='outline' className='rounded-full' size='icon'>
                    <Bookmark />
                </Button>
            </div>
            <div className='flex items-center gap-4 mb-4'>
                <Button className='p-0' variant='outline' size='icon'>
                    <Avatar className='w-10 h-10'>
                        <AvatarImage src='https://i.pinimg.com/736x/b0/33/c1/b033c1e388efef133716a5364a056ed9.jpg' />
                    </Avatar>
                </Button>
                <div>
                    <h1 className='font-medium text-lg'>Liverpool</h1>
                    <p className='text-sm text-gray-600'>India</p>
                </div>
            </div>
            {/* Job Description */}
            <div>
                <h1 className='font-bold text-lg mb-2'>Title</h1>
                <p className='text-sm text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dolor voluptatum voluptas eos nemo earum nisi nulla, ipsam facilis laboriosam!</p>
            </div>
            {/* Badges */}
            <div className='flex flex-wrap items-center gap-2 mt-4'>
                <Badge className='text-blue-700 font-bold' variant='ghost'>Positions</Badge>
                <Badge className='text-[#F83002] font-bold' variant='ghost'>Part Time</Badge>
                <Badge className='text-[#7209b7] font-bold' variant='ghost'>24LPA</Badge>
            </div>
             {/* Action Buttons */}
            <div className='flex flex-wrap items-center gap-4 mt-4'>
                <Button variant='outline' onClick={() => navigate(`/description/${jobId}`)} >Details</Button>
                <Button className='bg-[#7209b7] hover:bg-[#4e298f]'>Save for later</Button>
            </div>
        </div>
    )
}

export default Job