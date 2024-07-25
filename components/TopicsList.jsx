import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";
import RemoveBtn from "./RemoveBtn";

const getTopics = async() => {
    const apiURL = process.env.API_URL;
    try{
        const res = await fetch(`${apiURL}/api/topics`, {
            cache: "no-cache",
        });
    
        if (!res.ok) {
            throw new Error('Failed to fetch topics');
        }
        const data = await res.json();
        return data;
    } catch (error) {
      console.log("Error Loading Topics", error);
    }
}


export default async function TopicsList(){

    const {topics} = await getTopics();
    return (
        <>
        {topics.map(t => (
            <div  key={t._id} className="flex justify-between border border-gray-500 rounded-sm gap-5 my-3 items-center">
                <div className="p-4">
                    <h2 className="font-extrabold text-2xl py-2">{t.title}</h2>
                    <div>{t.description}</div>
                </div>

                <div className="flex gap-4 p-4">
                    <RemoveBtn id={t._id}/>
                    <Link href={`/editTopic/${t._id}`}>
                       <HiPencilAlt size={24} />
                    </Link>
                </div>
            </div>
        ))}
        </>
    )
}