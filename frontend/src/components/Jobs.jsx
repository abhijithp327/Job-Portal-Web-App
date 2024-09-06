import React from 'react';
import Navbar from './shared/Navbar';
import FilterCards from './FilterCards';
import Job from './Job';


const jobsArray = [1, 2, , 4, 5, 6, 7, 8];

const Jobs = () => {
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
                        jobsArray.length <= 0 ? <span>No Jobs Found</span> : (
                            <div className='w-full md:flex-1 h-full pb-5'>
                                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                                    {/* Job Card */}
                                    {
                                        jobsArray.map((item, index) => (
                                            <div>
                                                <Job key={index} />
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