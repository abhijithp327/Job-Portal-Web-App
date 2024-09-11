import React from 'react';
import Navbar from '../shared/Navbar';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CreateCompany = () => {

    const navigate = useNavigate();

    const registerCompany = async () => {
        try {
const response = await axios.post(`${COMPANY_API_END_POINT}/create-company`, {
    
})
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className='pt-20'>
            <Navbar />

            <div className='max-w-full sm:max-w-4xl px-4 sm:px-6 lg:px-8 mx-auto flex flex-col items-center'>
                <div className='mt-6 sm:mt-10 text-center'>
                    <h1 className='text-2xl sm:text-3xl font-bold'>Your company name</h1>
                    <p className='text-gray-500 mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>

                <div className='mt-4 sm:mt-6 w-full sm:w-3/4 md:w-2/3 lg:w-1/2'>
                    <Label>Company Name</Label>
                    <Input
                        type='text'
                        placeholder='Company Name'
                        className='mt-2 w-full'
                    />
                </div>

                <div className='flex flex-col sm:flex-row items-center justify-center gap-4 mt-6 w-full sm:w-auto'>
                    <Button variant='outline' onClick={() => navigate('/admin/companies')}>
                        Cancel
                    </Button>
                    <Button onClick={registerCompany}>
                        Continue
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default CreateCompany;
