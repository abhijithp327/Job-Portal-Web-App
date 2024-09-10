import React from 'react';
import LatestJobCards from './LatestJobCards';
import { useSelector } from 'react-redux';

// const randomJobs = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const LatestJobs = () => {

    const { allJobs } = useSelector((state) => state.job)

    return (
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>

            <h1 className='text-xl sm:text-2xl lg:text-3xl font-bold my-5'><span className='text-[#6A38C2]'>Latest & Top </span>Job Openings</h1>
            {/* job cards */}
            <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4 my-5'>
                {
                 allJobs.length <= 0 ? <span>No Jobs Available</span> : allJobs?.slice(0, 6).map((job) => (
                        <LatestJobCards key={job._id} job={job} />
                    ))
                }
            </div>

        </div>
    )
}

export default LatestJobs;