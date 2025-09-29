import Loader from "../../utils/Loader";
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import { ProfileSchema } from "../../types";


export default function ProfileForm() {

    const {
            register,
            reset, 
            handleSubmit, 
            formState: { errors, isSubmitting }
    } = useForm({
        resolver: zodResolver(ProfileSchema)
    })
    
    const submit = async (data: ProfileSchema) => {

        await new Promise((resolve) => setTimeout(resolve, 2000))

        console.log(data)

        reset()
    }
  return ( 
    <section className="w-full py-5 bg-white rounded-md">
          <div className="space-y-10 px-3 sm:px-5">
                <div className="flex items-center justify-left">
                    <h2 className="text-3xl rounded-full bg-white border border-green-700 w-20 h-20 px-7 py-5">G</h2>
                </div>
                <form onSubmit={handleSubmit(submit)} className="flex flex-col space-y-3 w-full font-semibold">
                    <div className="md:flex items-center space-x-20 w-full space-y-3">
                        <div className="w-full">
                            <label htmlFor="last_name">Last Name</label>
                            <input type="text" {...register('last_name')} name="last_name" id="last-name" className="border border-gray-400 outline-green-500 w-full py-2 px-3 rounded-md mt-2" />
                          {errors.last_name && (
                              <p className="text-red-700 text-sm">{`${errors.last_name.message}`}</p>
                            )}
                        </div>
                        <div  className="w-full">
                            <label htmlFor="first_name">First Name</label>
                            <input type="text" {...register('first_name')} name="first_name" id="first_name" className="border border-gray-400 outline-green-500 w-full py-2 px-3 rounded-md mt-2" />
                            {errors.first_name && (
                              <p className="text-red-700 text-sm">{`${errors.first_name.message}`}</p>
                            )}
                        </div>
                    </div>
                    <div className="md:flex items-center space-x-20 space-y-3">
                        <div className="w-full">
                            <label htmlFor="email">Email</label>
                            <input type="email" {...register('email')} name="email" id="email" className="border border-gray-400 outline-green-500 w-full py-2 px-3 rounded-md mt-2" />
                          {errors.email && (
                              <p className="text-red-700 text-sm">{`${errors.email.message}`}</p>
                            )}
                        </div>
                        <div className="w-full">
                            <label htmlFor="phone">Mobile Number</label>
                                <input type="tel" {...register('phone')} name="phone" id="phone" className="border border-gray-400 outline-green-500 w-full py-2 px-3 rounded-md mt-2" />
                                {errors.phone && (
                                    <p className="text-red-700 text-sm">{`${errors.phone.message}`}</p>
                                )}
                        </div>
                    </div>
                    
                    <div  className="md:flex items-center space-x-20 space-y-3">
                      <div className="w-full space-y-1">
                            <label htmlFor="gender_male">Gender</label>
                            <div className="flex items-center w-full space-x-5 mt-2">
                                    <div className='flex items-center border border-gray-300 w-full py-2 justify-center rounded-md space-x-5'>
                                        <input type="radio" {...register('gender')} value='male' name="gender" id="gender_male" className="accent-green-700"/>
                                        <label htmlFor="gender_male">Male</label>
                                    </div>
                                <div className='flex items-center border border-gray-300 w-full py-2 justify-center rounded-md space-x-5'>
                                        <input type="radio" {...register('gender')} value='female' name="gender" id="gender_female" className="accent-green-700" />
                                        <label htmlFor="gender_female">Female</label>
                              </div>
                            </div> 
                            {errors.gender && (
                                  <p className="text-red-700 text-sm">{`${errors.gender.message}`}</p>
                              )}
                        </div>
                        <div className="w-full">
                            <label htmlFor="id">ID (NIN)</label>
                                <input type="text" {...register('id')} name="id" id="id" className="border border-gray-400 outline-green-500 w-full py-2 px-3 rounded-md mt-2" />
                                {errors.id && (
                                    <p className="text-red-700 text-sm">{`${errors.id.message}`}</p>
                                )}
                        </div>
                    </div>
                   
                    <div className="flex flex-col space-y-2">
                        <label htmlFor="address">Residential Address</label>
                        <input type="text" {...register('address')} name="address" id="address" className="border border-gray-400 outline-green-500 w-full py-2 px-3 rounded-md" />
                        {errors.address && (
                            <p className="text-red-700 text-sm">{`${errors.address.message}`}</p>
                        )}
                    </div>
                        
                  <button
                      disabled={isSubmitting}
                      type='submit'
                      className="w-full bg-green-700 py-2 rounded-md text-white font-bold text-xl disabled:bg-green-700/90 disabled:cursor-not-allowed"
                  >
                      {isSubmitting ? <Loader /> : "Save" }
                   </button>
            </form>   
        </div>
    </section>
  )
}
