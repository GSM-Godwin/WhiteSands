import { db } from "../../../lib/db"
import { createPost } from "@/actions/posts"

const page = async () => {
    const posts = await db.post.findMany()
  return (
    <div>
      <h1>All Transactions:{posts.length}</h1>
      <ul>
        {posts.map((post, index) => (
            <li key={index} className="flex items-center flex-col justify-center">
                <ul>{post.name}</ul>
            </li>
        ))}
      </ul>

      <form action={createPost} className="bg-gray-300 flex flex-col gap-2">
        <input type="text" name="name" placeholder="name" className="px-2 py-1 rounded-sm border-2 border-gray-500" />
        <input type="text" name="weight" placeholder="weight" className="px-2 py-1 rounded-sm border-2 border-gray-500" />
        <input type="text" name="height" placeholder="height" className="px-2 py-1 rounded-sm border-2 border-gray-500" />
        <input type="text" name="length" placeholder="length" className="px-2 py-1 rounded-sm border-2 border-gray-500" />
        <input type="text" name="width" placeholder="width" className="px-2 py-1 rounded-sm border-2 border-gray-500" />
        <input type="text" name="pickupLocation" placeholder="pickupLocation" className="px-2 py-1 rounded-sm border-2 border-gray-500" />
        <input type="text" name="dropoffLocation" placeholder="dropoffLocation" className="px-2 py-1 rounded-sm border-2 border-gray-500" />
        <input type="text" name="dangerousGoods" placeholder="dangerousGoods" className="px-2 py-1 rounded-sm border-2 border-gray-500" />
        <input type="text" name="liveAnimals" placeholder="liveAnimals" className="px-2 py-1 rounded-sm border-2 border-gray-500" />
        <input type="text" name="humanRemains" placeholder="humanRemains" className="px-2 py-1 rounded-sm border-2 border-gray-500" />
        <input type="text" name="seaFreight" placeholder="seaFreight" className="px-2 py-1 rounded-sm border-2 border-gray-500" />
        <input type="text" name="price" placeholder="price" className="px-2 py-1 rounded-sm border-2 border-gray-500" />
        <button type="submit" className="bg-blue-500 py-2 text-white rounded-sm">Create Post</button>
      </form>
    </div>
  )
}

export default page
