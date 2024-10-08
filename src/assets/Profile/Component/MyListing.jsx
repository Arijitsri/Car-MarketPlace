import { Button } from '@/components/ui/button'
import { CarImages, CarListing } from './../../../../Configs/schema'
import { desc, eq } from 'drizzle-orm'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { db } from './../../../../Configs'
import Service from '@/components/Shared/Service'
import CarItem from '@/components/CarItem'
import { FaRegTrashCan } from "react-icons/fa6";

function MyListing() {

    const [carList,setCarList] = useState([]);
    useEffect(()=>
    {
        GetUserCarListing();
    },[])

    const GetUserCarListing=async()=>{
        const result=await db.select().from(CarListing)
        .leftJoin(CarImages,eq(CarListing.id,CarImages.carListingId))
        .orderBy(desc(CarListing.id))

        const resp=Service.FormatResult(result)
        console.log(resp);
        setCarList(resp);
    }



  return (
    <div className="mt-6">
         <div className='flex justify-between items-center'>
             <h2 className='font-bold text-4xl'>My Listing</h2>
                <Link to = {'/add-listing'}>
                   <Button>+ Add New Listing</Button>
                </Link>
        </div>
         <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-7 gap-5'>
            {carList.map((item,index)=>(
                <div key={index}>
                    <CarItem car={item} />
                    <div className='p-2 bg-gray-50 rounded-lg flex justify-between gap-3'>
                        <Button variant="outline" className="w-full">Edit</Button>
                        <Button variant="destructive"><FaRegTrashCan /></Button>
                    </div>
                </div>
            ))}
         </div>     
     </div>
  )
}

export default MyListing