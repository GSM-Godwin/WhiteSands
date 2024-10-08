import { db } from "@/lib/db";
import styles from './users.module.css';
import Image from "next/image";
import pic from "../../../../../public/assets/pic.png";
import Search from "../search/search";
import RoleDropdown from "@/app/(protected)/_components/RoleDropdown";

const Users = async ({ searchParams }) => {
    const q = searchParams?.q || "";
    const users = await db.user.findMany({
        where: {
            OR: [
                { name: { contains: q, mode: 'insensitive' } },
                { email: { contains: q, mode: 'insensitive' } },
                // { id: { contains: q, mode: 'insensitive'} }
            ]
        }
    });
    
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <Search placeholder="Search for a user" />
            </div>

            <table className={styles.table}>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>ID</td>
                        <td>Email</td>
                        <td>Role</td>
                        <td>Address</td>
                        <td>Postal Address</td>
                        <td>Phone Number</td>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>
                                <div className={styles.user}>
                                    <Image
                                        src={pic}
                                        alt={user.name}
                                        width={40}
                                        height={40}
                                        className={styles.userImage}
                                    />
                                    {user.name}
                                </div>
                            </td>
                            <td>{`WA-${user.id}`}</td>
                            <td>{user.email}</td>
                            <td>
                                <li className="list-none" key={user.id}>
                                    <RoleDropdown id={user.id} role={user.role} />
                                </li>
                            </td>
                            <td>{user.address}</td>
                            <td>{user.post}</td>
                            <td>{user.phone}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Users;
