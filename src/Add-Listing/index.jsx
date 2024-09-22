import Header from '@/components/Header'
import React, { useState } from 'react'
import CarDetails from '../components/Shared/CarDetails.json'
import { Item } from '@radix-ui/react-select'
import InputField from './Component/InputField'
import DropdownField from './Component/DropdownField'
import TextAreaField from './Component/TextAreaField'
import { Separator } from '@/components/ui/separator'
import Featurs from '../components/Shared/Featurs.json'
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from '@/components/ui/button'
import { db } from './../../Configs'
import { CarListing } from './../../Configs/schema'



function AddListing() {

    const [formData,setFormData] = useState([]);
    const [featuresData,setFeaturesData] = useState([]);

    const handleInputChange=(name,value)=>{
        setFormData((prevData)=>({
            ...prevData,
            [name]:value
        }))
        console.log(formData);
    }

    const handleFeatureChange=(name,value) => {
        setFeaturesData((prevData) => ({
            ...prevData,
            [name]:value
        }))
        console.log(featuresData);
    }

    const onSubmit= async(e)=>{
        e.preventDefault();
        console.log(formData);

        try{
            const result = await db.insert(CarListing).values({
                ...formData,
                features:featuresData
            });
            if(result)
            {
                console.log("Data Saved")
            }
        }catch(e){
            console.log("Error",e)
        }
    }

  return (
    <div>
        <Header/>
        <div className='px-10 md:px-20 my-10'>
            <h2 className='font-bold text-4xl'>Add New Listing</h2>
            <form className='p-10 border rounded-xl mt-10'>
                <div>
                    <h2 className='font-medium text-xl mb-6'>Car Details</h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                        {CarDetails.carDetails.map((item,index)=>(
                            <div key={index}>
                                <label className='text-sm'>{item?.label} {item.required&&<span className='text-red-500'>*</span>} </label>
                                {item.fieldType=='text'||item.fieldType=='number'
                                ?<InputField item ={item} handleInputChange={handleInputChange}/>
                                :item.fieldType=='dropdown'
                                ?<DropdownField item={item} handleInputChange={handleInputChange}/>   
                                :item.fieldType=='textarea'
                                ?<TextAreaField item={item} handleInputChange={handleInputChange}/>
                                :null}
                            </div>    
                        ))}
                    </div>
                </div>
                <Separator className='my-6'/>
                <div>
                    <h2 className='font-medium text-xl my-6'>Features</h2>
                    <div className='grid grid-cols-2 md:grid-cols-3 gap-2'>
                        {Featurs.features.map((item,index)=>(
                            <div key={index} className='flex gap-2 items-center'>
                                <Checkbox onCheckedChange={(value)=>handleFeatureChange(item.name,value)}/> <h2>{item.label}</h2>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Car Images */}

                <div className='mt-10 flex justify-end'> 
                    <Button onClick={(e)=>onSubmit(e)}>Submit</Button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default AddListing