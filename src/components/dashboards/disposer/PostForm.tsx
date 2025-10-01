import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import Loader from '../../../utils/Loader'
import { PostSchema } from '../../../types'



export default function PostForm() {

      const {
                register,
                reset, 
                handleSubmit, 
                formState: { errors, isSubmitting }
        } = useForm({
            resolver: zodResolver(PostSchema)
        })
        
        const submit = async (data: PostSchema) => {
    
            await new Promise((resolve) => setTimeout(resolve, 2000))
    
            console.log(data)
    
            reset()
    }
    
  return (
    <div>
        <form onSubmit={handleSubmit(submit)}  className="flex flex-col space-y-5 w-full font-semibold">
            <div className="w-full">
                <label htmlFor="title">Post Title</label>
                <input type="text" {...register('title')} name="title" id="title" className="border border-gray-400 outline-green-500 w-full py-2 px-3 rounded-md mt-2" />
                {errors.title && (
                            <p className="text-red-700 text-sm">{`${errors.title.message}`}</p>
                )}
            </div>
            <div className="w-full space-y-1">
                <label htmlFor="waste_type">Select Waste Type</label>
                <div className="flex items-center w-full space-x-5 mt-2 text-sm">
                    <div className='flex items-center border border-gray-300 w-full py-2 justify-center rounded-md space-x-5'>
                        <input type="radio" {...register('waste_type')} value='plastic' name="waste_type" id="plastic" className="accent-green-700"/>
                        <label htmlFor="plastic">Plastic</label>
                    </div>
                    <div className='flex items-center border border-gray-300 w-full py-2 justify-center rounded-md space-x-5'>
                        <input type="radio" {...register('waste_type')}  value='iron' name="waste_type" id="iron" className="accent-green-700"/>
                        <label htmlFor="iron">Iron</label>
                    </div>
                    <div className='flex items-center border border-gray-300 w-full py-2 justify-center rounded-md space-x-5'>
                            <input type="radio" {...register('waste_type')}  value='paper' name="waste_type" id="paper" className="accent-green-700" />
                            <label htmlFor="paper">Paper</label>
                    </div>
                </div> 
                {errors.waste_type && (
                    <p className="text-red-700 text-sm">{`${errors.waste_type.message}`}</p>
                )}
            </div>
            
            <div className="w-full space-y-1">
                <label htmlFor="quantity">Enter Quantity(Kg/g)</label>
                    <div className="flex items-center w-full space-x-5 mt-2 text-sm">
                        <div className='flex items-center border border-gray-300 w-full py-2 justify-center rounded-md space-x-5'>
                            <input type="radio" {...register('quantity_type')}  value='kg' name="quantity_type" id="kg" className="accent-green-700"/>
                            <label htmlFor="kg">kg</label>
                        </div>
                        <div className='flex items-center border border-gray-300 w-full py-2 justify-center rounded-md space-x-5'>
                            <input type="radio" {...register('quantity_type')}  value='g' name="quantity_type" id="g" className="accent-green-700"/>
                            <label htmlFor="g">g</label>
                        </div>
                        <div className='flex items-center border border-gray-300 w-full py-2 justify-center rounded-md space-x-5'>
                                <input type="radio" {...register('quantity_type')}  value='count' name="quantity_type" id="count" className="accent-green-700" />
                                <label htmlFor="count">count</label>
                      </div>
                      {errors.quantity_type && (
                            <p className="text-red-700 text-sm">{`${errors.quantity_type.message}`}</p>
                    )}
                  </div> 
                  <input type="number" {...register('quantity')} name="quantity" id="quantity" className="border border-gray-400 outline-green-500 w-full py-2 px-3 rounded-md mt-2" />
                  {errors.quantity && (
                            <p className="text-red-700 text-sm">{`${errors.quantity.message}`}</p>
                    )}
            </div>
            <div className="w-full">
                <label htmlFor="price">Listing Price</label>
                  <input type="number" {...register('price')} name="price" id="price" className="border border-gray-400 outline-green-500 w-full py-2 px-3 rounded-md mt-2" />
                  {errors.price && (
                            <p className="text-red-700 text-sm">{`${errors.price.message}`}</p>
                )}
            </div>
            <div className="w-full">
                <label htmlFor="photo">Attach Photo</label>
                  <input type="file" {...register('photo')} name="photo" id="photo" className="border border-gray-400 outline-green-500 w-full py-2 px-3 rounded-md mt-2  flex items-center justify-center " placeholder='Upload Photos' />
                  {errors.photo && (
                            <p className="text-red-700 text-sm">{`${errors.photo.message}`}</p>
                )}
            </div>
             <div className="w-full">
                <label htmlFor="location">Pickup Location</label>
                  <input type="text" {...register('location')} name="location" id="location" className="border border-gray-400 outline-green-500 w-full py-2 px-3 rounded-md mt-2" />
                  {errors.location && (
                            <p className="text-red-700 text-sm">{`${errors.location.message}`}</p>
                )}
            </div>
            <div className="w-full space-y-1">
                <label htmlFor="preferred_contact">Preferred Contact</label>
                <div className="flex items-center w-full space-x-5 mt-2 text-sm">
                    <div className='flex items-center border border-gray-300 w-full py-2 justify-center rounded-md space-x-5'>
                        <input type="radio" {...register('preferred_contact')} value='call' name="preferred_contact" id="call" className="accent-green-700"/>
                        <label htmlFor="call">Call</label>
                    </div>
                    <div className='flex items-center border border-gray-300 w-full py-2 justify-center rounded-md space-x-5'>
                        <input type="radio" {...register('preferred_contact')} value='whatsapp' name="preferred_contact" id="whatsapp" className="accent-green-700"/>
                        <label htmlFor="whatsapp">Whatsapp</label>
                    </div>
                    
                </div> 
                {errors.preferred_contact && (
                            <p className="text-red-700 text-sm">{`${errors.preferred_contact.message}`}</p>
                    )}
            </div>
           
            <div className="w-full">
                <label htmlFor="contact">Contact Details</label>
                <input type="tel" {...register('contact')} name="contact" id="contact" className="border border-gray-400 outline-green-500 w-full py-2 px-3 rounded-md mt-2" />
                {errors.contact && (
                            <p className="text-red-700 text-sm">{`${errors.contact.message}`}</p>
                )}
            </div>
               <button
                    disabled={isSubmitting}
                    type='submit'
                    className="w-full bg-green-700 py-2 rounded-md text-white font-bold text-xl disabled:bg-green-700/90 disabled:cursor-not-allowed"
                >
                    {isSubmitting ? <Loader /> : "Publish" }
                </button> 
        </form>
    </div>
  )
}
