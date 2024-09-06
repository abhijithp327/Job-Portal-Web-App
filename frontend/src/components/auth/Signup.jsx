import React from 'react';
import Navbar from '../shared/Navbar';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { RadioGroup } from '../ui/radio-group';
import { Button } from '../ui/button';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'sonner';
import { USER_API_END_POINT } from '@/utils/constant';
import { useDispatch, useSelector } from 'react-redux';
import { setLoading } from '@/redux/authSlice';
import { Loader2 } from 'lucide-react';

const Signup = () => {

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const { loading } = useSelector((state) => state.auth);

    const [input, setInput] = React.useState({
        fullname: "",
        email: "",
        phoneNumber: "",
        password: "",
        role: "",
        file: "",
    });

    const changeEventHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInput((prev) => ({ ...prev, [name]: value }));
    };

    const changeFileHandler = (e) => {
        const name = e.target.name;
        const value = e.target.files[0];
        setInput((prev) => ({ ...prev, [name]: value }));
    };

    const submitHandler = async (e) => {

        e.preventDefault();

        const formData = new FormData();

        formData.append("fullname", input.fullname);
        formData.append("email", input.email);
        formData.append("phoneNumber", input.phoneNumber);
        formData.append("password", input.password);
        formData.append("role", input.role);
        if (input.file) {
            formData.append("file", input.file);
        };

        try {
            dispatch(setLoading(true));
            const response = await axios.post(`${USER_API_END_POINT}/register`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                },
                withCredentials: true
            });
            if (response.data.status === 200) {
                navigate('/login');
                toast.success(response.data.message);
            }
        } catch (error) {
            toast.error(error.response.data.message);
            console.log(error);
        } finally {
            dispatch(setLoading(false));
        }
    };

    return (
        <div className='h-[90vh] pt-16'>
            <Navbar />
            {/* form */}
            <div className='flex items-center justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <form onSubmit={submitHandler} className='w-full sm:w-3/4 md:w-1/2 sm:border border-gray-200 rounded-md p-4 sm:p-6 my-10 h-full'>
                    <h1 className='font-bold text-xl mb-5'>Signup</h1>

                    <div className='my-2'>
                        <Label>Full Name</Label>
                        <Input
                            className='mt-2 w-full' type="text"
                            placeholder="full name"
                            value={input.fullname}
                            name="fullname"
                            onChange={changeEventHandler}
                        />
                    </div>

                    <div className='my-2'>
                        <Label>Email</Label>
                        <Input
                            className='mt-2 w-full'
                            type="email"
                            placeholder="email"
                            value={input.email}
                            name="email"
                            onChange={changeEventHandler}
                        />
                    </div>

                    <div className='my-2'>
                        <Label>Phone Number</Label>
                        <Input
                            className='mt-2 w-full'
                            type="number"
                            placeholder="phone number"
                            value={input.phoneNumber}
                            name="phoneNumber"
                            onChange={changeEventHandler}
                        />
                    </div>

                    <div className='my-2'>
                        <Label>Password</Label>
                        <Input
                            className='mt-2 w-full'
                            type="password"
                            placeholder="password"
                            value={input.password}
                            name="password"
                            onChange={changeEventHandler}
                        />
                    </div>

                    <div className='flex flex-col sm:flex-row sm:items-center justify-between'>
                        <RadioGroup className='flex items-center gap-5 my-3'>
                            <div className="flex items-center space-x-2">
                                <Input
                                    type="radio"
                                    name="role"
                                    value="student"
                                    checked={input.role === "student"}
                                    className='cursor-pointer'
                                    onChange={changeEventHandler}
                                />
                                <Label htmlFor="option-one">Student</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Input
                                    type="radio"
                                    name="role"
                                    value="recruiter"
                                    checked={input.role === "recruiter"}
                                    className='cursor-pointer'
                                    onChange={changeEventHandler}
                                />
                                <Label htmlFor="option-two">Recruiter</Label>
                            </div>
                        </RadioGroup>
                        <div className='flex flex-col sm:flex-row items-center gap-2 mt-3 sm:mt-0'>
                            <Label>Profile</Label>
                            <Input
                                name="file"
                                accept="image/*"
                                type="file"
                                className='cursor-pointer'
                                onChange={changeFileHandler}
                            />
                        </div>
                    </div>
                    {/* buttons */}
                    {
                        loading ? <Button className='w-full my-1'><Loader2 className='mr-2 h-4 w-4 animate-spin' />Please wait</Button> : <Button className='text-sm sm:text-base w-full my-4'>Signup</Button>
                    }
                    <span className='text-sm'>Already have an account? <Link className='text-blue-600' to={'/login'}> Login </Link></span>

                </form>
            </div>
        </div>

    );
}

export default Signup;
