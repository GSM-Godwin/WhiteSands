import { Status, YesNo } from "@prisma/client"
import { db } from "../../../lib/db"
import { createPost } from "@/actions/posts"

const page = async () => {
    const posts = await db.post.findMany()
  return (
    <div>
      <form action={createPost} className="bg-gray-300 flex flex-col gap-2">
        <input type="text" name="name" placeholder="Name" className="px-2 py-1 rounded-sm border-2 border-gray-500" />
        <input type="text" name="weight" placeholder="Weight" className="px-2 py-1 rounded-sm border-2 border-gray-500" />
        <input type="text" name="height" placeholder="Height" className="px-2 py-1 rounded-sm border-2 border-gray-500" />
        <input type="text" name="length" placeholder="Length" className="px-2 py-1 rounded-sm border-2 border-gray-500" />
        <input type="text" name="width" placeholder="Width" className="px-2 py-1 rounded-sm border-2 border-gray-500" />
        <input type="text" name="pickupLocation" placeholder="PickupLocation" className="px-2 py-1 rounded-sm border-2 border-gray-500" />
        <input type="text" name="dropoffLocation" placeholder="DropoffLocation" className="px-2 py-1 rounded-sm border-2 border-gray-500" />
        <select name="dangerousGoods" className="px-2 py-1 rounded-sm border-2 border-gray-500">
          <option value="">Dangerous Goods</option>
          <option value={YesNo.YES}>YES</option>
          <option value={YesNo.NO}>NO</option>
        </select>
        <select name="liveAnimals" className="px-2 py-1 rounded-sm border-2 border-gray-500">
          <option value="">Live Animals</option>
          <option value={YesNo.YES}>YES</option>
          <option value={YesNo.NO}>NO</option>
        </select>
        <select name="humanRemains" className="px-2 py-1 rounded-sm border-2 border-gray-500">
          <option value="">Human Remains</option>
          <option value={YesNo.YES}>YES</option>
          <option value={YesNo.NO}>NO</option>
        </select>
        <select name="status" className="px-2 py-1 hidden rounded-sm border-2 border-gray-500">
          <option value={Status.PENDING}>Pending</option>
          <option value={Status.PICKEDUP}>Picked Up</option>
          <option value={Status.SHIPPED}>Shipped</option>
          <option value={Status.CUSTOMS}>In Customs</option>
          <option value={Status.WAREHOUSE}>In Warehouse</option>
          <option value={Status.DELIVERED}>Ready for Pickup</option>
        </select>
        <input type="text" name="price" placeholder="price" className="px-2 py-1 rounded-sm border-2 border-gray-500" />
        <button type="submit" className="bg-blue-500 py-2 text-white rounded-sm">Create Post</button>
      </form>
    </div>
  )
}

export default page
