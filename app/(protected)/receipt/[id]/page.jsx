import React from 'react'
import { db } from '../../../../lib/db'
import Button from '../../_components/button'
import logo from '@/public/logo.png'
import Image from 'next/image'

const page = async ({ params }) => {
    const post = await db.post.findUnique({
        where: {
            id: params.id,
        }
    });
    
    return (
        <div className='bg-white p-8 my-[-30px] rounded-lg shadow-lg w-full max-w-2xl'>
            <Image src={logo} width={100} className='mx-auto'/>
            <h1 className='text-xl font-bold mb-4 flex justify-center'>Shipment Invoice</h1>
            <form className="flex flex-col gap-4" id='receipt'>
                <div className='flex flex-col'>
                    <label htmlFor="name" className='font-medium'>Name</label>
                    <input type="text" name="name" placeholder="name" value={post.name} readOnly className="px-4 py-2 rounded-sm border border-gray-300" />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="phone" className='font-medium'>Phone</label>
                    <input type="tel" name="phone" placeholder="Phone" value={post.phone} readOnly className="px-4 py-2 rounded-sm border border-gray-300" />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="id" className='font-medium'>Shipment ID</label>
                    <input type="text" name="id" placeholder="id" value={post.id} readOnly className="px-4 py-2 rounded-sm border border-gray-300" />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="dropoffLocation" className='font-medium'>Dropoff Location</label>
                    <input type="text" name="dropoffLocation"  placeholder="dropoffLocation" readOnly value={post.dropoffLocation} className="px-4 py-2 rounded-sm border border-gray-300" />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="date" className='font-medium'>Label Date</label>
                    <input type="text" name='date' placeholder='date' readOnly value={new Date(post.createdAt).toLocaleString()} className="px-4 py-2 rounded-sm border border-gray-300" />
                </div>
                <div className='flex flex-col w-52'>
                    <label htmlFor="qrCode" className='font-medium'>QR Code</label>
                    <img 
                        src={`https://api.qrserver.com/v1/create-qr-code/?size=126x126&data=https://www.whitesandsagency.ky/posts/${post.id}`}
                        alt='QR Code'
                        className='mt-2'
                    />
                </div>
                <p>Whitesands Agency (345)922-3922</p>
            </form>
            <Button selector={'#receipt'} className='mt-6' />
        </div>
    )
}

export default page
