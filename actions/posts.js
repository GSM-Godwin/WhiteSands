"use server"
import { revalidatePath } from "next/cache"
import { db } from "../lib/db"

async function generatePostId() {
    const currentYear = new Date().getFullYear();
    const lastPost = await prisma.post.findFirst({
      where: {
        id: { endsWith: `${currentYear}` }
      },
      orderBy: { id: 'desc' }
    });
    const lastIdNumber = lastPost ? parseInt(lastPost.id.split('ky')[0]) : 0;
    const newIdNumber = lastIdNumber + 1;
    return `${newIdNumber}ky${currentYear}`;
}

export async function createPost(formData) {
    const postId = await generatePostId();
    const newPost = await db.post.create({
        data: {
            id: postId,
            name: formData.get("name"),
            phone: formData.get("phone"),
            weight: formData.get("weight"),
            height: formData.get("height"),
            length: formData.get("length"),
            width: formData.get("width"),
            numberOfItems: formData.get("numberOfItems"),
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

export async function editPost(formData) {
    try {
        await db.post.update({
            where: { id },
            data: {
                name: formData.get("name"),
                phone: formData.get("phone"),
                weight: (formData.get("weight")),
                height: (formData.get("height")),
                length: (formData.get("length")),
                width: (formData.get("width")),
                numberOfItems: (formData.get("numberOfItems")),
                pickupLocation: formData.get("pickupLocation"),
                dropoffLocation: formData.get("dropoffLocation"),
                isDangerousGoods: formData.get("isDangerousGoods") === 'true',
                isLiveAnimals: formData.get("isLiveAnimals") === 'true',
                isHumanRemains: formData.get("isHumanRemains") === 'true',
                status: formData.get("status"),
                price: parseFloat(formData.get("price")),
            }
        });

        revalidatePath('/dashboard');
    } catch (error) {
        console.error('Error updating post:', error);
    }
}

export async function deletePost(id) {
    await db.post.delete({ where: { id } });
}