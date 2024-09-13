import React from 'react';
import Navbar from './shared/Navbar';
import FilterCards from './FilterCards';
import Job from './Job';
import { useSelector } from 'react-redux';


const jobsArray = [1, 2, , 4, 5, 6, 7, 8];

const Jobs = () => {

    const { allJobs } = useSelector((state) => state.job);

    return (
        <div>
            <Navbar />
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24'>
                <div className='flex flex-col md:flex-row gap-5'>
                    <div className='w-full md:w-1/4 lg:w-1/5 mb-5 md:mb-0'>
                        {/* side bar filter page */}
                        <FilterCards />
                    </div>
                    {
                        allJobs?.length <= 0 ? <span>No Jobs Found</span> : (
                            <div className='w-full md:flex-1 h-full pb-5'>
                                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                                    {/* Job Card */}
                                    {
                                        allJobs?.map((job) => (
                                            <div>
                                                <Job key={job?._id} job={job} />
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>

        </div>
    )
}

export default Jobs;