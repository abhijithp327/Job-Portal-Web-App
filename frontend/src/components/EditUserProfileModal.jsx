import React from 'react';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from './ui/dialog';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { Loader2 } from 'lucide-react';
import { Button } from './ui/button';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { USER_API_END_POINT } from '@/utils/constant';
import { toast } from 'sonner';
import { setUser } from '@/redux/authSlice';

const EditUserProfileModal = ({ open, setOpen }) => {

    const dispatch = useDispatch();

    const [loading, setLoading] = React.useState(false);

    const { user } = useSelector((state) => state.auth);

    const [input, setInput] = React.useState({
        fullname: user?.fullname,
        email: user?.email,
        phoneNumber: user?.phoneNumber,
        bio: user?.profile?.bio,
        skills: user?.profile?.skills?.map((skill) => skill),
        file: user?.profile?.resume
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
        formData.append('fullname', input.fullname);
        formData.append('email', input.email);
        formData.append('phoneNumber', input.phoneNumber);
        formData.append('bio', input.bio);
        formData.append('skills', input.skills);
        // Attach the resume file only if it exists
        if (input.file) {
            formData.append('file', input.file);
        }

        try {
            setLoading(true);
            const response = await axios.put(`${USER_API_END_POINT}/update-profile`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                },
                withCredentials: true
            });

            console.log(response.data.result);
            console.log(response.data.result.user);

            if (response.data.status === 200) {
                dispatch(setUser(response.data.result));
                toast.success(response.data.message);
            }
        } catch (error) {
            toast.error(error.response.data.message);
            console.log(error);
        } finally {
            setLoading(false);
        }
        setOpen(false);
        // console.log("input", input);
    };

    return (
        <div>
            <Dialog open={open}>
                <DialogContent className="sm:max-w-[425px]" onInteractOutside={() => setOpen(false)}>
                    <DialogHeader>
                        <DialogTitle>Update Profile</DialogTitle>
                    </DialogHeader>
                    <form onSubmit={submitHandler}>
                        <div className='grid gap-4 pt-4'>

                            <div className='grid grid-cols-4 items-center gap-4'>
                                <Label htmlFor="fullname" className="text-right">Name</Label>
                                <Input
                                    id='fullname'
                                    name='fullname'
                                    type='text'
                                    value={input.fullname}
                                    onChange={changeEventHandler}
                                    className="col-span-3"
                                />
                            </div>

                            <div className='grid grid-cols-4 items-center gap-4'>
                                <Label htmlFor="email" className="text-right">Email</Label>
                                <Input
                                    id='email'
                                    name='email'
                                    type='email'
                                    value={input.email}
                                    onChange={changeEventHandler}
                                    className="col-span-3"
                                />
                            </div>

                            <div className='grid grid-cols-4 items-center gap-4'>
                                <Label htmlFor="phoneNumber" className="text-right">Number</Label>
                                <Input
                                    id='phoneNumber'
                                    value={input.phoneNumber}
                                    type='number'
                                    name='phoneNumber'
                                    onChange={changeEventHandler}
                                    className="col-span-3"
                                />
                            </div>

                            <div className='grid grid-cols-4 items-center gap-4'>
                                <Label htmlFor="bio" className="text-right">Bio</Label>
                                <Input
                                    id='bio'
                                    name='bio'
                                    value={input.bio}
                                    type='text'
                                    onChange={changeEventHandler}
                                    className="col-span-3"
                                />
                            </div>

                            <div className='grid grid-cols-4 items-center gap-4'>
                                <Label htmlFor="skills" className="text-right">Skills</Label>
                                <Input
                                    id='skills'
                                    name='skills'
                                    value={input.skills}
                                    type='text'
                                    onChange={changeEventHandler}
                                    className="col-span-3"
                                />
                            </div>

                            <div className='grid grid-cols-4 items-center gap-4'>
                                <Label htmlFor="file" className="text-right">Resume</Label>
                                <Input
                                    id='file'
                                    name='file'
                                    type='file'
                                    accept='application/pdf'
                                    className="col-span-3"
                                    onChange={changeFileHandler}

                                />
                            </div>

                        </div>
                    </form>
                    <DialogFooter>
                        {
                            loading ? <Button className='w-full my-1'><Loader2 className='mr-2 h-4 w-4 animate-spin' />Please wait</Button> : <Button className='text-sm sm:text-base w-full my-1' onClick={submitHandler}>Update</Button>
                        }
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default EditUserProfileModal;