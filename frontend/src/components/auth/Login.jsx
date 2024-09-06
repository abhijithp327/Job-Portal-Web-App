import React from 'react';
import Navbar from '../shared/Navbar';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import { Button } from '../ui/button';
import { Link, useNavigate } from 'react-router-dom';
import { USER_API_END_POINT } from '@/utils/constant';
import { toast } from 'sonner';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { Loader2 } from 'lucide-react';
import { setLoading, setUser } from '@/redux/authSlice';

const Login = () => {

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const { loading } = useSelector((state) => state.auth);


    const [input, setInput] = React.useState({
        email: "",
        password: "",
        role: "",
    });

    const changeEventHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInput((prev) => ({ ...prev, [name]: value }));
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            dispatch(setLoading(true));
            const response = await axios.post(`${USER_API_END_POINT}/login`, input, {
                headers: {
                    "Content-Type": "application/json"
                },
                withCredentials: true
            });
            if (response.data.status === 200) {
                dispatch(setUser(response.data.result.user));
                navigate('/');
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
        <div className='h-[90vh]'>
            <Navbar />
            {/* form */}
            <div className='flex items-center justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full'>
                <form onSubmit={submitHandler} className='justify-center sm:w-3/4 md:w-1/2 md:border border-gray-200 rounded-md p-4 sm:p-6 my-10'>
                    <h1 className='font-bold text-xl mb-5'>Login</h1>

                    <div className='my-2'>
                        <Label>Email</Label>
                        <Input
                            className='mt-2 w-full'
                            type="email"
                            placeholder="email"
                            name="email"
                            value={input.email}
                            onChange={changeEventHandler}
                        />
                    </div>

                    <div className='my-2'>
                        <Label>Password</Label>
                        <Input
                            className='mt-2 w-full'
                            type="password"
                            placeholder="password"
                            name="password"
                            value={input.password}
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
                                    className='cursor-pointer'
                                    onChange={changeEventHandler}
                                    checked={input.role === "student"}
                                />
                                <Label htmlFor="option-one">Student</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Input
                                    type="radio"
                                    name="role"
                                    value="recruiter"
                                    className='cursor-pointer'
                                    onChange={changeEventHandler}
                                    checked={input.role === "recruiter"}
                                />
                                <Label htmlFor="option-two">Recruiter</Label>
                            </div>
                        </RadioGroup>
                    </div>
                    {
                        loading ? <Button className='w-full my-1'><Loader2 className='mr-2 h-4 w-4 animate-spin' />Please wait</Button> : <Button className='text-sm sm:text-base w-full my-1'>Login</Button>
                    }

                    <span className='text-sm'>Don't have an account? <Link className='text-blue-600' to={'/signup'}> Signup </Link></span>

                </form>
            </div>
        </div>

    );
}

export default Login;
