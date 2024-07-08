import React from 'react'
import { db } from '../../../lib/db';

const trackingPoints = ['PENDING', 'PICKEDUP', 'SHIPPED', 'CUSTOMS', 'WAREHOUSE', 'DELIVERED'];

const TrackingPage = async ({ params }) => {
    const post = await db.post.findUnique({
        where: {
            id: params.id,
        }
    });

    const currentStatus = post?.status;
    const currentIndex = trackingPoints.indexOf(currentStatus);

    return (
        <div className='w-full h-full overflow-hidden' style={{ backgroundImage: `url(/assets/track.jpg)`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'top', backgroundBlendMode: 'darken' }}>
            <div className='flex flex-col w-full h-full bg-white bg-opacity-30 backdrop-blur-sm p-6 rounded-lg shadow-md' >
                <h1 className='text-xl font-bold mb-2'>Name: {post?.name}</h1>
                <p className='mb-8'>Shipment ID: {post.id}</p>
                <div className='w-full flex flex-col md:flex-row md:justify-between md:items-center md:space-x-4 mt-4 relative'>
                    {trackingPoints.map((status, index) => (
                        <div key={status} className={`flexflex-row md:items-center ${index % 2 === 0 ? 'md:items-start' : 'md:items-end'} ${index <= currentIndex ? 'text-[#000A3E]' : 'text-gray-400'}`}>
                            <div className={`text-sm md:text-lg font-semibold ${index === currentIndex ? 'text-xl md:text-[1.5rem]' : ''}`}>
                                {status}
                            </div>
                            {index < trackingPoints.length - 1 && (
                                <div className={`hidden md:block h-2 w-8 ${index <= currentIndex ? 'bg-[#000A3E]' : 'bg-gray-400'}`} />
                            )}
                            <div className={`h-8 w-8 rounded-full border-2 ${index <= currentIndex ? 'border-[#000A3E]' : 'border-gray-400'}`} />
                        </div>
                    ))}
                    <div className='hidden md:flex md:absolute top-1/2 left-0 w-full h-1 bg-gray-400' />
                    <div className={`absolute top-1/2 left-0 w-full h-1 ${currentIndex >= 0 ? 'bg-[#000A3E]' : ''} hidden md:block`} style={{ width: `${(currentIndex + 1/2) / trackingPoints.length * 100}%` }} />
                    <div className='absolute left-1/2 top-0 md:top-auto md:left-0 w-1 h-full bg-gray-400 md:bg-transparent' />
                    <div className={`absolute left-1/2 top-0 w-1 h-full ${currentIndex >= 0 ? 'bg-[#000A3E]' : ''} md:hidden`} style={{ height: `${(currentIndex + 1) / trackingPoints.length * 100}%` }} />
                </div>
            </div>
        </div>
    )
}

export default TrackingPage;
