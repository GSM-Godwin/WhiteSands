"use server"
import { revalidatePath } from "next/cache"
import { db } from "../lib/db"

export async function createPost(formData) {
    await db.post.create({
        data: {
            name: formData.get("name"),
            weight: formData.get("weight"),
            height: formData.get("height"),
            length: formData.get("length"),
            width: formData.get("width"),
            pickupLocation: formData.get("pickupLocation"),
            dropoffLocation: formData.get("dropoffLocation"),
            dangerousGoods: formData.get("dangerousGoods"),
            liveAnimals: formData.get("liveAnimals"),
            humanRemains: formData.get("humanRemains"),
            seaFreight: formData.get("seaFreight"),
            price: formData.get("price"),
        }
    })

    revalidatePath('/dashboard')
}