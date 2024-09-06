import React from 'react';
import Navbar from './shared/Navbar';
import Job from './Job';

const randomJobs = [1, 2, 3, 4, 5];

const Browse = () => {
    return (
        <div className='pt-12'>
            <Navbar />
            <div className='max-w-7xl mx-auto my-10 px-4 sm:px-6 lg:px-8'>
                <h1 className='font-bold text-xl my-7'>Search Results ({randomJobs.length})</h1>
                <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-5'>
                    {
                        randomJobs.map((item, index) => (
                            <div key={index}>
                                <Job />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Browse;