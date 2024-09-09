import { Badge } from './ui/badge';
import React from 'react';
import { Button } from './ui/button';

const JobDescription = () => {

    const isApplied = false;

    return (
        <div className='max-w-7xl mx-auto px-4 my-10'>

            <h1 className='font-bold text-xl md:text-2xl'>Full Stack Developer</h1>
            {/* Badges and Apply Button */}
            <div className='flex flex-col md:flex-row items-start md:items-center justify-between mt-2 space-y-4 md:space-y-0'>
                {/* Badges */}
                <div className='flex flex-wrap items-center gap-2'>
                    <Badge className='text-blue-700 font-bold' variant='ghost'>Positions</Badge>
                    <Badge className='text-[#F83002] font-bold' variant='ghost'>Part Time</Badge>
                    <Badge className='text-[#7209b7] font-bold' variant='ghost'>24LPA</Badge>
                </div>
                {/* Apply Button */}
                <Button
                    variant="outline"
                    disabled={isApplied}
                    className={`rounded-lg ${isApplied ? "bg-gray-800 cursor-not-allowed text-white" : "bg-[#7209b7] text-white hover:bg-[#4e298f] hover:text-white"}`}>
                    {isApplied ? "Already Applied" : "Apply Now"}
                </Button>
            </div>

            {/* Job Description Section */}
            <h1 className='border-b-2 border-b-gray-300 font-medium mt-5 text-lg'>Job Description</h1>
            <div className='mt-4'>
                <h1 className='font-bold mt-2'>Role: <span className='text-gray-800 font-normal pl-4'>Full Stack Developer</span></h1>
                <h1 className='font-bold mt-2'>Location: <span className='text-gray-800 font-normal pl-4'>Kochi, India</span></h1>
                <h1 className='font-bold mt-2'>Description: <span className='text-gray-800 font-normal pl-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span></h1>
                <h1 className='font-bold mt-2'>Skills: <span className='text-gray-800 font-normal pl-4'>Html, Css, Javascript, React</span></h1>
                <h1 className='font-bold mt-2'>Experience: <span className='text-gray-800 font-normal pl-4'>Fresher</span></h1>
                <h1 className='font-bold mt-2'>Salary: <span className='text-gray-800 font-normal pl-4'>8LPA</span></h1>
                <h1 className='font-bold mt-2'>Posted On: <span className='text-gray-800 font-normal pl-4'>23 Jan 2024</span></h1>
            </div>

        </div>
    )
}

export default JobDescription;