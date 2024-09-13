import React from 'react';
import Navbar from '../shared/Navbar';
import { Label } from '../ui/label';
import { Input } from '../ui/input';

const PostJob = () => {

    const [input, setInput] = React.useState({
        title: '',
        description: '',
        requirements: '',
        salary: '',
        location: '',
        jobType: '',
        experience: '',
        position: 0,
        company: ''
    });

    const changeEventHandler = (event) => {
        setInput({
            ...input,
            [event.target.name]: event.target.value,
        });
    };

    return (
        <div className='pt-16'>
            <Navbar />
            <div className='flex items-center justify-center w-screen mt-16'>
                {/* <h1 className='font-medium text-xl'>Post Job</h1> */}

                <form className='p-8 max-w-4xl border-gray-200 shadow-lg rounded-sm'>

                    <div className='grid grid-cols-2 gap-2'>

                        <div className=''>
                            <Label>Title</Label>
                            <Input
                                type='text'
                                name='title'
                                className='focus-visible:ring-offset-0 focus-visible:ring-0 mt-1'
                                value={input.title}
                                onChange={changeEventHandler}
                            />
                        </div>

                        <div className=''>
                            <Label>Description</Label>
                            <Input
                                type='text'
                                name='description'
                                className='focus-visible:ring-offset-0 focus-visible:ring-0 mt-1'
                                value={input.description}
                                onChange={changeEventHandler}
                            />
                        </div>

                        <div className=''>
                            <Label>Requirements</Label>
                            <Input
                                type='text'
                                name='requirements'
                                className='focus-visible:ring-offset-0 focus-visible:ring-0 mt-1'
                                value={input.requirements}
                                onChange={changeEventHandler}
                            />
                        </div>

                        <div className=''>
                            <Label>salary</Label>
                            <Input
                                type='text'
                                name='salary'
                                className='focus-visible:ring-offset-0 focus-visible:ring-0 mt-1'
                                value={input.salary}
                                onChange={changeEventHandler}
                            />
                        </div>

                        <div className=''>
                            <Label>Location</Label>
                            <Input
                                type='text'
                                name='location'
                                className='focus-visible:ring-offset-0 focus-visible:ring-0 mt-1'
                                value={input.location}
                                onChange={changeEventHandler}
                            />
                        </div>

                        <div className=''>
                            <Label>Job Type</Label>
                            <Input
                                type='text'
                                name='jobType'
                                className='focus-visible:ring-offset-0 focus-visible:ring-0 mt-1'
                                value={input.jobType}
                                onChange={changeEventHandler}
                            />
                        </div>

                        <div className=''>
                            <Label>Experience</Label>
                            <Input
                                type='text'
                                name='experience'
                                className='focus-visible:ring-offset-0 focus-visible:ring-0 mt-1'
                                value={input.experience}
                                onChange={changeEventHandler}
                            />
                        </div>

                        <div className=''>
                            <Label>No of Position</Label>
                            <Input
                                type='number'
                                name='position'
                                className='focus-visible:ring-offset-0 focus-visible:ring-0 mt-1'
                                value={input.position}
                                onChange={changeEventHandler}
                            />
                        </div>

                        <div className=''>
                            <Label>Company</Label>
                            <Input
                                type='text'
                                name='experience'
                                className='focus-visible:ring-offset-0 focus-visible:ring-0 mt-1'
                                value={input.company}
                                onChange={changeEventHandler}
                            />
                        </div>

                    </div>

                </form>
            </div>
        </div>
    )
};

export default PostJob;