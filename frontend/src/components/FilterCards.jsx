import React from 'react';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Label } from './ui/label';

const filterData = [
    {
        filterType: "Location",
        array: ["Kerala", "Bangalore", "Goa", "Mumbai", "Hyderabad", "Chennai"]
    },
    {
        filterType: "Industry",
        array: ["Full Stack Developer", "Front End Developer", "Back End Developer", "Data Scientist", "Machine Learning", "Cyber Security"]
    },
    {
        filterType: "Salary",
        array: ["0-40k", "40-1lakh", "1-5lakh", '5-10lakh']
    },
]

const FilterCards = () => {
    return (
        <div className='w-full bg-white p-4 md:p-5 rounded-md shadow-md'>
            <h1 className='font-bold text-lg md:text-xl mb-3'>Filter Jobs</h1>
            <hr className='mt-4' />
            <RadioGroup className='mt-3 space-y-2'>
                {
                    filterData.map((data, index) => (
                        <div key={index} className=''>
                            <h1 className='font-bold text-md md:text-lg mb-2'>{data.filterType}</h1>
                            <div className='flex flex-wrap gap-4'>
                                {
                                    data.array.map((item, index) => (
                                        <div className='flex items-center space-x-2 my-2'>
                                            <RadioGroupItem value={item} />
                                            <Label>{item}</Label>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
            </RadioGroup>
        </div>
    )
}

export default FilterCards;