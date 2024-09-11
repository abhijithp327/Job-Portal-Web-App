import React from 'react';
import Navbar from '../shared/Navbar';
import { Button } from '../ui/button';
import { ArrowLeft, Loader2 } from 'lucide-react';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { COMPANY_API_END_POINT } from '@/utils/constant';
import { toast } from 'sonner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import useGetCompanyById from '@/hooks/useGetCompany';

const Company = () => {

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const params = useParams();

    const companyId = params.id;

    useGetCompanyById(companyId);

    const { singleCompany } = useSelector((state) => state.company);

    console.log("singleCompany", singleCompany);

    const [input, setInput] = React.useState({
        name: '',
        description: '',
        location: '',
        file: '',
        website: '',
    });

    const [loading, setLoading] = React.useState(false);


    console.log("CompanyId", companyId);

    const changeEventHandler = (event) => {
        setInput({
            ...input,
            [event.target.name]: event.target.value,
        });
    };

    const changeFileHandler = (e) => {
        const name = e.target.name;
        const value = e.target.files[0];
        // console.log('File selected:', value); 
        setInput((prev) => ({ ...prev, [name]: value }));
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData();

        formData.append('name', input.name);
        formData.append('description', input.description);
        formData.append('location', input.location);
        formData.append('website', input.website);
        if (input.file) formData.append('file', input.file);

        try {
            setLoading(true);
            const response = await axios.put(`${COMPANY_API_END_POINT}/update-company/${companyId}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
                withCredentials: true,
            });
            if (response.data.status === 200) {
                toast.success(response.data.message);
                navigate('/admin/companies');
            }
        } catch (error) {
            toast.error(error.response.data.message);
            console.log(error);
        } finally {
            setLoading(false);
        }
    };


    React.useEffect(() => {

        setInput({
            name: singleCompany?.name || '',
            description: singleCompany?.description || '',
            location: singleCompany?.location || '',
            file: singleCompany?.file || '',
            website: singleCompany?.website || '',
        })
    }, [singleCompany]);

    return (
        <div className='pt-16'>
            <Navbar />
            <div className='max-w-xl mx-auto mt-10 p-4'>
                <form onSubmit={submitHandler} className='space-y-8'>
                    {/* Header Section */}
                    <div className='flex flex-col sm:flex-row items-center gap-5 p-4 bg-gray-50 rounded-lg shadow-sm'>
                        <Button onClick={() => navigate('/admin/companies')} variant='outline' className='flex items-center gap-2 text-gray-500 font-semibold'>
                            <ArrowLeft />
                            <span>Back</span>
                        </Button>
                        <h1 className='font-bold text-xl'>Company Details</h1>
                    </div>

                    {/* Form Fields Section */}
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <div>
                            <Label>Company Name</Label>
                            <Input
                                type='text'
                                placeholder='Company Name'
                                className='w-full'
                                name='name'
                                value={input.name}
                                onChange={changeEventHandler}
                            />
                        </div>

                        <div>
                            <Label>Description</Label>
                            <Input
                                type='text'
                                placeholder='Description'
                                className='w-full'
                                name='description'
                                value={input.description}
                                onChange={changeEventHandler}
                            />
                        </div>

                        <div>
                            <Label>Location</Label>
                            <Input
                                type='text'
                                placeholder='Location'
                                className='w-full'
                                name='location'
                                value={input.location}
                                onChange={changeEventHandler}
                            />
                        </div>

                        <div>
                            <Label>Website</Label>
                            <Input
                                type='text'
                                placeholder='Website'
                                className='w-full'
                                name='website'
                                value={input.website}
                                onChange={changeEventHandler}
                            />
                        </div>

                        <div className='md:col-span-2'>
                            <Label>Logo</Label>
                            <Input
                                type='file'
                                accept='image/*'
                                className='w-full'
                                name='file'
                                onChange={changeFileHandler}
                            />
                        </div>
                    </div>

                    {/* Submit Button */}
                    {
                        loading ? <Button className='w-full my-1'><Loader2 className='mr-2 h-4 w-4 animate-spin' />Please wait</Button> : <Button className='text-sm sm:text-base w-full my-1'>Update</Button>
                    }
                </form>
            </div>
        </div>
    );
};

export default Company;
