import React from 'react';
import Navbar from '../shared/Navbar';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { COMPANY_API_END_POINT } from '@/utils/constant';
import { toast } from 'sonner';
import { useDispatch } from 'react-redux';
import { setSingleCompany } from '@/redux/companySlice';

const CreateCompany = () => {

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const [loading, setLoading] = React.useState(false);

    const [companyName, setCompanyName] = React.useState('');

    const registerCompany = async () => {
        try {
            const response = await axios.post(`${COMPANY_API_END_POINT}/register-company`, { companyName }, {
                headers: {
                    "Content-Type": "application/json"
                },
                withCredentials: true
            });

            if (response.data.status === 200) {
                dispatch(setSingleCompany(response.data.result.company));
                // setLoading(false);
                toast.success(response.data.message);
                const companyId = response?.data?.result?._id;
                navigate(`/admin/companies/${companyId}`);
            }
        } catch (error) {
            toast.error(error.response.data.message);
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
                        onChange={(e) => setCompanyName(e.target.value)}
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
