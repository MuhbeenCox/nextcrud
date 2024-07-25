"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddTopic(){

    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");

    const router = useRouter();

    const handleSubmit = async(e) => {
        e.preventDefault();
        if(!title || !description)
        {
            alert('Title & Description Are Required Fields');
            return;
        }

        try{
            const res = await fetch('/api/topics', {
                method : "POST",
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({title:title , description:description})
            });

            if(!res.ok){
                throw new Error('Failed To Create Topic');
            }

            router.push('/');

        }catch(error){
            console.log(error);
        }

    }

    return (
       <>
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    Topic Heading
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="topicHeading" type="text" 
                    onChange={(e)=> setTitle(e.target.value)}
                    value = {title}
                    placeholder="Topic Heading"/>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    Topic Description
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="topicDescription" type="text" 
                     onChange={(e)=> setDescription(e.target.value)}
                     value = {description}
                    placeholder="Topic Description"/>
            </div>

            <button className="bg-slate-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                Submit
            </button>
        </form>
       </>
    )
}