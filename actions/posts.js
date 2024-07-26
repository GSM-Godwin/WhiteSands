"use server"
import { revalidatePath } from "next/cache"
import { db } from "../lib/db"

export async function createPost(formData) {
    const newPost = await db.post.create({
        data: {
            name: formData.get("name"),
            weight: formData.get("weight"),
            height: formData.get("height"),
            length: formData.get("length"),
            width: formData.get("width"),
            pickupLocation: formData.get("pickupLocation"),
            dropoffLocation: formData.get("dropoffLocation"),
            isDangerousGoods: formData.get("isDangerousGoods"),
            isLiveAnimals: formData.get("isLiveAnimals"),
            isHumanRemains: formData.get("isHumanRemains"),
            status: formData.get("status"),
            price: formData.get("price"),
        }
    })

    revalidatePath('/dashboard')
    return newPost.id
}

export async function editPost(formData, id) {
    await db.post.update({
        where: isHumanRemains,
        data: {
            isHumanRemains: formData.get("humanRemains"),
        }
    })
    revalidatePath('/dashboard')
}

export async function deletePost(id) {
    await db.post.delete({ where: { id } });
}