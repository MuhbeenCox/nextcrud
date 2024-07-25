"use client"

import { useRouter } from "next/navigation";
import { HiOutlineTrash } from "react-icons/hi";

export default function RemoveBtn( { id }){
    const router = useRouter();
    const deleteTopic = async() => {
        const confirmed = confirm("Are You Sure ?");
        if(confirmed)
        {
            const res = await fetch(`/api/topics?id=${id}`, {method: "DELETE",});   
            if(res.ok)
            {
                router.refresh();
            }
        }
    }


    return (
        <button className="text-red-400" onClick={deleteTopic}><HiOutlineTrash size={24}/></button>
    )

}