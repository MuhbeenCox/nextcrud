import Link from "next/link";

export default function Navbar(){
    return (
        <nav className="flex justify-between items-center bg-slate-800 px-8 py-4 rounded">
            <Link className="font-bold text-white" href={""}>GT Coding</Link>
            <Link className="bg-white p-2 text-black rounded-sm" href={"/addTopic"}>Add Topic</Link>
        </nav>
    )
}