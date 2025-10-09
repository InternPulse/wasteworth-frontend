import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import Loader from '../../../utils/Loader';
import { PostSchema, type UserData } from '../../../types';
import axios from 'axios';
import { toast } from 'react-toastify';

interface PostFormProps {
  onClose: () => void;
}

export default function PostForm({ onClose }: PostFormProps) {
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors, isSubmitting }
    } = useForm({
        resolver: zodResolver(PostSchema)
    });


        
    const submit = async (data: PostSchema) => {
      
    const userDataString = localStorage.getItem("userData");
      if (!userDataString) {
        toast.error("Your session has expired, please login again");
        return; 
      }
        const formData = new FormData();

        // Append all fields, explicitly handling the file
        Object.keys(data).forEach((key) => {
            const value = data[key as keyof typeof data];
            
            if (value instanceof FileList) {
                // Handle the FileList by appending the first file
                if (value.length > 0) {
                    formData.append(key, value[0]);
                }
            } else if (value !== undefined && value !== null) {
                formData.append(key, String(value));
            }
        });


        // --- Logging data to confirm the formData actually captures the data needed || development only---
        console.log("--- START FormData Logging (Data BEFORE sending) ---");
        for (const [key, value] of formData.entries()) {
            if (value instanceof File) {
                console.log(`${key}: File | Name: ${value.name} | Type: ${value.type} | Size: ${value.size} bytes`);
            } else {
                console.log(`${key}: ${value}`);
            }
        }

        try {
            const userData: UserData = JSON.parse(userDataString);
            const accessToken = userData.tokens?.access;

            const res = await axios.post(
                'https://wasteworth-backend-express.onrender.com/api/v1/listings',
                formData, 
                {
                    headers: {
                        'Authorization': `Bearer ${accessToken}`,
                        'Content-Type': 'multipart/form-data',
                    },
                }
            );
            toast.success("Listing Created successfully")
            onClose();
            const serverRes = res.data;
            console.log("SUCCESS! Submitted Data:", data);
            console.log("SUCCESS! Server Response:", serverRes);
            reset();
            
        } catch (error) {
            // destructed errors to actually see the problem
            if (axios.isAxiosError(error) && error.response && error.response.data) {
                // logged the actual error response from the server 
                console.error("Error Sending Data (Axios Response):", error.response.data);
                toast.error("Error creating Listing")
            } else {
                console.error("Error Sending Data:", error);
                toast.error("Error creating Listing")
            }
        }
}
    
  return (
    <div>
        <form onSubmit={handleSubmit(submit)} className="flex flex-col space-y-5 w-full font-semibold">
            <div className="w-full">
                <label htmlFor="title">Post Title</label>
                <input type="text" {...register('title')} name="title" id="title" className="border border-gray-400 outline-green-500 w-full py-2 px-3 rounded-md mt-2" />
                {errors.title && (
                    <p className="text-red-700 text-sm">{`${errors.title.message}`}</p>
                )}
            </div>
            <div className="w-full space-y-1">
                <label htmlFor="waste_type">Waste Type</label>
                <div className="flex items-center w-1/5 space-x-3 mt-2 text-sm">
                    <div className='flex items-center border border-gray-300 w-full py-2 justify-center rounded-md space-x-3'>
                        <input type="radio" {...register('waste_type')} value='plastic' name="waste_type" id="plastic" className="accent-green-700"/>
                        <label htmlFor="plastic">Plastic</label>
                    </div>
                </div> 
                {errors.waste_type && (
                    <p className="text-red-700 text-sm">{`${errors.waste_type.message}`}</p>
                )}
            </div>
            
            <div className="w-full space-y-1">
                <label htmlFor="quantity">Enter Quantity(Count)</label>
                <input type="number" {...register('quantity', { valueAsNumber: true })} name="quantity" id="quantity" className="border border-gray-400 outline-green-500 w-full py-2 px-3 rounded-md mt-2" />
                {errors.quantity && (
                    <p className="text-red-700 text-sm">{`${errors.quantity.message}`}</p>
                )}
            </div>
            <div className="w-full">
                <label htmlFor="reward_estimate">Listing Price</label>
                <input type="text" {...register('reward_estimate')} name="reward_estimate" id="reward_estimate" className="border border-gray-400 outline-green-500 w-full py-2 px-3 rounded-md mt-2" />
                {errors.reward_estimate && (
                    <p className="text-red-700 text-sm">{`${errors.reward_estimate.message}`}</p>
                )}
            </div>
            <div className="w-full">
                <label htmlFor="photo">Attach Photo</label>
                <input
                    type="file"
                    {...register('image_url')}
                    accept='image/*'
                    name="image_url" 
                    id="photo"
                    className="border border-gray-400 outline-green-500 w-full py-2 px-3 rounded-md mt-2 flex items-center justify-center "
                    placeholder='Upload Photos'
                />
                {errors.image_url && (
                    <p className="text-red-700 text-sm">{`${errors.image_url.message}`}</p>
                )}
            </div>
            <div className="w-full">
                <label htmlFor="pickup_location">Pickup Location</label>
                <input type="text" {...register('pickup_location')} name="pickup_location" id="pickup_location" className="border border-gray-400 outline-green-500 w-full py-2 px-3 rounded-md mt-2" />
                {errors.pickup_location && (
                    <p className="text-red-700 text-sm">{`${errors.pickup_location.message}`}</p>
                )}
            </div>
            
            <div className="w-full">
                <label htmlFor="phone">Contact Details(Call/Whatsapp)</label>
                <input type="tel" {...register('phone')} name="phone" id="phone" className="border border-gray-400 outline-green-500 w-full py-2 px-3 rounded-md mt-2" />
                {errors.phone && (
                    <p className="text-red-700 text-sm">{`${errors.phone.message}`}</p>
                )}
            </div>
            <button
                disabled={isSubmitting}
                type='submit'
                className="w-full bg-green-700 py-2 rounded-md text-white font-bold text-xl disabled:bg-green-700/90 disabled:cursor-not-allowed"
            >
                {isSubmitting ? <Loader /> : "Post" }
            </button>
        </form>
    </div>
  );
}
