import React from 'react';
import Navbar from '../shared/Navbar';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <div>
            <Navbar />
            {/* form */}
            <div className='flex items-center justify-center max-w-7xl mx-auto'>
                <form action="" className='w-1/2 border border-gray-200 rounded-md p-4 my-10'>
                    <h1 className='font-bold text-xl mb-5'>Signup</h1>

                    <div className='my-2'>
                        <Label>Full Name</Label>
                        <Input className='mt-2' type="text" placeholder="full name" />
                    </div>

                    <div className='my-2'>
                        <Label>Email</Label>
                        <Input className='mt-2' type="email" placeholder="email" />
                    </div>

                    <div className='my-2'>
                        <Label>Phone Number</Label>
                        <Input className='mt-2' type="number" placeholder="phone number" />
                    </div>

                    <div className='my-2'>
                        <Label>Password</Label>
                        <Input className='mt-2' type="password" placeholder="password" />
                    </div>

                    <div className='flex items-center justify-between'>
                        <RadioGroup className='flex items-center gap-5 my-3'>
                            <div className="flex items-center space-x-2">
                                <Input type="radio" name="role" value="student" className='cursor-pointer' />
                                <Label htmlFor="option-one">Student</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Input type="radio" name="role" value="recruiter" className='cursor-pointer' />
                                <Label htmlFor="option-two">Recruiter</Label>
                            </div>
                        </RadioGroup>
                        <div className='flex items-center gap-2'>
                            <Label>Profile</Label>
                            <Input accept="image/*" type="file" className='cursor-pointer' />
                        </div>
                    </div>
                    {/* buttons */}
                    <Button className='text-sm sm:text-base w-full my-2'>Sign up</Button>
                    <span className='text-sm'>Already have an account? <Link className='text-blue-600' to={'/login'}> Login </Link></span>

                </form>
            </div>
        </div>

    );
}

export default Signup;
