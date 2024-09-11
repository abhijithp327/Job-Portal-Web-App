import React from 'react';
import Navbar from '../shared/Navbar';
import { Button } from '../ui/button';
import { ArrowLeft } from 'lucide-react';
import { Label } from '../ui/label';
import { Input } from '../ui/input';

const Company = () => {

    const [input, setInput] = React.useState({
        name: '',
        description: '',
        location: '',
        file: null,
        website: '',
    });

    const [loading, setLoading] = React.useState(false);

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
        console.log(input);
    };

    return (
        <div className='pt-16'>
            <Navbar />
            <div className='max-w-xl mx-auto mt-10 p-4'>
                <form onSubmit={submitHandler} className='space-y-8'>
                    {/* Header Section */}
                    <div className='flex flex-col sm:flex-row items-center gap-5 p-4 bg-gray-50 rounded-lg shadow-sm'>
                        <Button variant='outline' className='flex items-center gap-2 text-gray-500 font-semibold'>
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
                    <Button type='submit' className='w-full mt-4'>
                        Update
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default Company;
