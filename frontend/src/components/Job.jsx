import React from 'react'
import { Button } from './ui/button'
import { Bookmark } from 'lucide-react'
import { } from '@radix-ui/react-avatar'
import { Avatar, AvatarImage } from './ui/avatar'
import { Badge } from './ui/badge'
import { useNavigate } from 'react-router-dom'
import { formatDate } from '@/utils/formatDate'



const Job = ({ job }) => {

    const navigate = useNavigate();

    const jobId = "9768789";

    return (
        <div className='p-5 rounded-md shadow-xl bg-white border border-gray-100'>
            <div className='flex items-center justify-between mb-3'>
                <p className='text-sm text-gray-500'>{formatDate(job?.createdAt) === 0 ? "Today" : `${formatDate(job?.createdAt)} Days Ago`}</p>
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
                    <h1 className='font-medium text-lg'>{job?.company.name}</h1>
                    <p className='text-sm text-gray-600'>{job?.location}</p>
                </div>
            </div>
            {/* Job Description */}
            <div>
                <h1 className='font-bold text-lg mb-2'>{job?.title}</h1>
                <p className='text-sm text-gray-600'>{job?.description}</p>
            </div>
            {/* Badges */}
            <div className='flex flex-wrap items-center gap-2 mt-4'>
                <Badge className='text-blue-700 font-bold' variant='ghost'>{job?.position} positions</Badge>
                <Badge className='text-[#F83002] font-bold' variant='ghost'>Job type: {job?.jobType}</Badge>
                <Badge className='text-[#7209b7] font-bold' variant='ghost'>{job?.salary} LPA</Badge>
            </div>
            {/* Action Buttons */}
            <div className='flex flex-wrap items-center gap-4 mt-4'>
                <Button variant='outline' onClick={() => navigate(`/description/${job._id}`)} >Details</Button>
                <Button className='bg-[#7209b7] hover:bg-[#4e298f]'>Save for later</Button>
            </div>
        </div>
    )
}

export default Job