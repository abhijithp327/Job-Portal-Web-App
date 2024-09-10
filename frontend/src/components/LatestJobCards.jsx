import React from 'react';
import { Badge } from './ui/badge';

const LatestJobCards = ({ job }) => {
    return (
        <div className="p-5 rounded-md shadow-xl bg-white border border-gray-100 cursor-pointer transition-transform transform hover:scale-105">
            <div>
                <h1 className='font-medium text-lg'>{job?.company.name}</h1>
                <p className='text-sm text-gray-500'>{job?.location}</p>
            </div>
            <div>
                <h1 className='font-bold text-lg my-2'>{job?.title}</h1>
                <p className='text-sm text-gray-600'>{job?.description}</p>
            </div>
            <div className='flex flex-wrap items-center gap-2 mt-4'>
                <Badge className='text-blue-700 font-bold' variant='ghost'>{job?.position} position</Badge>
                <Badge className='text-[#F83002] font-bold' variant='ghost'>Job type: {job?.jobType}</Badge>
                <Badge className='text-[#7209b7] font-bold' variant='ghost'>Salary: {job?.salary}</Badge>
            </div>
        </div>
    )
}

export default LatestJobCards;