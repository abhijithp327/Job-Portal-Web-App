import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import React, { useState } from 'react';
import { Avatar, AvatarImage } from '../ui/avatar';
import { Button } from '../ui/button';
import { LogOut, Menu, User2 } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'sonner';
import { USER_API_END_POINT } from '@/utils/constant';
import { setUser } from '@/redux/authSlice';
import axios from 'axios';

const Navbar = () => {

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const { user } = useSelector((state) => state.auth);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    const logoutHandler = async () => {
        try {
            const response = await axios.get(`${USER_API_END_POINT}/logout`, {
                withCredentials: true
            })
            console.log(response.data);
            if (response.data.status === 200) {
                toast.success(response.data.message);
                dispatch(setUser(null));
                navigate('/');
            }
        } catch (error) {
            toast.error(error.response.data.message);
            console.log(error);
        }
    }

    return (
        <div className='fixed top-0 w-full z-50 bg-white shadow-md'>
            <div className='flex items-center justify-between mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16'>
                {/* Brand Logo */}
                <div>
                    <h1 className='text-xl sm:text-2xl font-bold'>Job<span className='text-[#F83002]'>Portal</span></h1>
                </div>

                {/* Mobile Menu Button */}
                <div className="flex sm:hidden">
                    <button
                        onClick={toggleMobileMenu}
                        className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-white hover:bg-gray-700 focus:outline-none"
                    >
                        <Menu size={24} />
                    </button>
                </div>

                {/* Desktop Navbar Links and User Options */}
                <div className='hidden sm:flex items-center gap-6 sm:gap-10'>
                    {/* Navbar Links */}
                    <ul className='flex font-medium gap-3 sm:gap-5'>
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={'/jobs'}>Jobs</Link></li>
                        <li><Link to={'/browse'}>Browse</Link></li>
                    </ul>

                    {/* User Actions: Login/Signup or Avatar */}
                    {!user ? (
                        <div className='flex items-center gap-2'>
                            <Link to={'/login'}><Button variant='outline' className='text-sm sm:text-base'>Login</Button></Link>
                            <Link to={'/signup'}> <Button className='bg-[#6A38C2] hover:bg-[#582ea0] text-sm sm:text-base'>Signup</Button></Link>
                        </div>
                    ) : (
                        <Popover>
                            <PopoverTrigger asChild>
                                <Avatar className='cursor-pointer'>
                                    <AvatarImage src={user?.profile?.profilePhoto} alt="@shadcn" />
                                </Avatar>
                            </PopoverTrigger>
                            <PopoverContent className='w-64 sm:w-80'>
                                <div>
                                    {/* User Information */}
                                    <div className='flex gap-4 space-y-2'>
                                        <Avatar className='cursor-pointer'>
                                            <AvatarImage src={user?.profile?.profilePhoto} alt="@shadcn" />
                                        </Avatar>
                                        <div>
                                            <h4 className='font-medium'>{user?.fullname}</h4>
                                            <p className='text-sm text-muted-foreground'>Lorem Ipsum description</p>
                                        </div>
                                    </div>
                                    {/* Profile and Logout Buttons */}
                                    <div className='flex flex-col my-2 cursor-pointer'>
                                        <div className='flex w-fit items-center gap-2 cursor-pointer'>
                                            <User2 />
                                            <Button variant='link'>
                                                <Link to='/profile'>View Profile</Link>
                                            </Button>
                                        </div>
                                        <div className='flex w-fit items-center gap-2 cursor-pointer'>
                                            <LogOut />
                                            <Button onClick={logoutHandler} variant='link'>Logout</Button>
                                        </div>
                                    </div>
                                </div>
                            </PopoverContent>
                        </Popover>
                    )}
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className='sm:hidden'>
                    <div className='px-4 pt-2 pb-3 space-y-1'>
                        {/* Navbar Links */}
                        <ul className='flex flex-col items-start font-medium gap-3'>
                            <li>Home</li>
                            <li>Jobs</li>
                            <li>Browse</li>
                        </ul>
                        {/* User Actions: Login/Signup or Avatar */}
                        {!user ? (
                            <div className='mt-4 flex flex-col gap-2'>
                                <Link to={'/login'} className='w-full'>
                                    <Button variant='outline' className='text-sm sm:text-base w-full'>Login</Button>
                                </Link>
                                <Link to={'/signup'} className='w-full'>
                                    <Button className='bg-[#6A38C2] hover:bg-[#582ea0] text-sm sm:text-base w-full'>Signup</Button>
                                </Link>
                            </div>
                        ) : (
                            <div className='mt-4 flex flex-col gap-2'>
                                <Button variant='link' className='flex items-center gap-2'>
                                    <User2 />
                                    <Link to='/profile'>View Profile</Link>
                                </Button>
                                <Button onClick={logoutHandler} variant='link' className='flex items-center gap-2'><LogOut />Logout</Button>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Navbar;
