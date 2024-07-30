import React from 'react'
import { editPost } from "@/actions/posts"
import { YesNo } from '@prisma/client';

import logo from '@/public/logo.png'
import Image from 'next/image'
import Link from 'next/link';
import UpdatePost from '../../../_components/updatePost';
import { db } from '@/lib/db';


const page = async ({ params }) => {
    const post = await db.post.findUnique({
        where: {
            id: params.id,
        }
    });
  return (
    <div className='w-full'>
        <UpdatePost post={post} />
    </div>
  )
}

export default page
