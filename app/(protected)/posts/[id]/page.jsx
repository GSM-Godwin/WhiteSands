import React from 'react'
import { db } from '../../../../lib/db'
import { editPost } from "@/actions/posts"
import { YesNo } from '@prisma/client';

import logo from '@/public/logo.png'
import Image from 'next/image'
import Link from 'next/link';


const page = async ({ params }) => {
    const post = await db.post.findUnique({
        where: {
            id: params.id,
        }
    });
  return (
    <div className='w-full'>
        <div>
          <Image src={logo} width={100} className='mx-auto' />
          <h1 className='text-2xl font-bold mb-4 flex justify-center'>Shipment Details</h1>
          <form action={editPost} className="bg-[#F1F5F9] flex flex-col gap-2">
            <label htmlFor="name" className='flex flex-col'>
              Name
              <input type="text" name="name" placeholder="name" value={post.name} className="px-2 py-1 rounded-sm border-2 border-gray-500" />
            </label>
            <label htmlFor="name" className='flex flex-col'>
              Phone
              <input type="tel" name="phone" placeholder="Phone" value={post.phone} className="px-2 py-1 rounded-sm border-2 border-gray-500" />
            </label>
            <label htmlFor="id" className='flex flex-col'>
              Shipment ID
              <input type="text" name="id" placeholder="id" value={post.id} className="px-2 py-1 rounded-sm border-2 border-gray-500" />
            </label>
            <label htmlFor="weight" className='flex flex-col'>
              Weight(Pounds)
              <input type="text" name="weight" placeholder="weight" value={post.weight} className="px-2 py-1 rounded-sm border-2 border-gray-500" />
            </label>
              <label htmlFor="height" className='flex flex-col'>
                Height(inches)
                <input type="text" name="height" placeholder="height" value={post.height} className="px-2 py-1 rounded-sm border-2 border-gray-500" />
              </label>
              <label htmlFor="length" className='flex flex-col'>
                Length(inches)
                <input type="text" name="length" placeholder="length" value={post.length} className="px-2 py-1 rounded-sm border-2 border-gray-500" />
              </label>
              <label htmlFor="numberOfItems" className='flex flex-col'>
                Number of Items
                <input type="number" name="numberOfItems" placeholder="Number of Items" value={post.numberOfItems} min={0} className="px-2 py-1 rounded-sm border-2 border-gray-500" />
              </label>
              <label htmlFor="width" className='flex flex-col'>
                Width(inches)
                <input type="text" name="width" placeholder="width" value={post.width} className="px-2 py-1 rounded-sm border-2 border-gray-500" />
              </label>
              <label htmlFor="pickupLocation" className='flex flex-col'>
                Pickup Location
                <input type="text" name="pickupLocation" placeholder="pickupLocation" value={post.pickupLocation} className="px-2 py-1 rounded-sm border-2 border-gray-500" />
              </label>
              <label htmlFor="dropoffLocation" className='flex flex-col'>
                DropoffLocation
                <input type="text" name="dropoffLocation" placeholder="dropoffLocation" value={post.dropoffLocation} className="px-2 py-1 rounded-sm border-2 border-gray-500" />
              </label>
              <label htmlFor="dangerousGoods" className='flex flex-col'>
                Dangerous Goods  
                <select name="dangerousGoods" className="px-2 py-1 rounded-sm border-2 border-gray-500">
                  <option value={post.isDangerousGoods}>{post.isDangerousGoods}</option>
                  <option value={YesNo.YES}>YES</option>
                  <option value={YesNo.NO}>NO</option>
                </select>
              </label>    
              <label htmlFor="liveAnimals" className='flex flex-col'>
                Live Animals
                <select name="liveAnimals" className="px-2 py-1 rounded-sm border-2 border-gray-500">
                  <option value={post.isLiveAnimals}>{post.isLiveAnimals}</option>
                  <option value={YesNo.YES}>YES</option>
                  <option value={YesNo.NO}>NO</option>
                </select>
              </label>  
              <label htmlFor="humanRemains" className='flex flex-col'>
                Human Remains
                <select name="humanRemains" className="px-2 py-1 rounded-sm border-2 border-gray-500">
                  <option value={post.isHumanRemains}>{post.isHumanRemains}</option>
                  <option value={YesNo.YES}>YES</option>
                  <option value={YesNo.NO}>NO</option>
                </select>
              </label>  
              <label htmlFor="price" className='flex flex-col'>
                Estimated Price ($)
                <input type="text" name="price" placeholder="price" value={post.price} className="px-2 py-1 rounded-sm border-2 border-gray-500" />
              </label>      
              <label htmlFor="status" className='flex flex-col'>
                Status
                <input type='text' name="status" value={post.status} className="px-2 py-1 rounded-sm border-2 border-gray-500" />
              </label>
            <Link href={`/receipt/${post.id}`} className='border-2 bg-gray-500 hover:text-black hover:bg-transparent hover:border-gray-500 text-white transition-all duration-300 p-3 rounded-lg my-5 w-max'>View Invoice</Link>
          </form>
        </div>
    </div>
  )
}

export default page
