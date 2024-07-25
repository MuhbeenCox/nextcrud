"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EditTopicForm({ id , title , description }){

    const [newTitle , setUpdatedTitle] = useState(title);
    const [newDescription , setUpdatedDescription] = useState(description);

    const router = useRouter();

    const submitUpdatedForm = async(e) => {
        e.preventDefault();

        try{
            const res = await fetch(`/api/topics/${id}`, {
                method: "PUT",
                headers: {
                    'Content-type':"application/json",
                },
                body: JSON.stringify({ newTitle , newDescription}),
            });
        
            if (!res.ok) {
                throw new Error('Failed to update Topic');
            }

            router.push('/');
            
        } catch (error) {
          console.log("Error Loading Topics", error);
        }

    }
    return (
        <form onSubmit={submitUpdatedForm} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    Topic Heading
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="topicHeading" type="text" 
                    onChange={(e)=> setUpdatedTitle(e.target.value)}
                    value={newTitle}
                    placeholder="Topic Heading"/>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    Topic Description
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="topicDescription" type="text" 
                    onChange={(e)=> setUpdatedDescription(e.target.value)}
                    value={newDescription}
                placeholder="Topic Description"/>
            </div>

            <button className="bg-slate-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                Update
            </button>
        </form>
    )
};