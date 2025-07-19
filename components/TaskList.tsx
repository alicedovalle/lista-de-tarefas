import Link from "next/link";
import DeleteButton from "./DeleteButton";
import { CiEdit } from "react-icons/ci";
import { getTasks } from "@/app/prisma-db";

type Task = {
    id: number
    title: string
    description: string | null
}

export default async function TaskList() {

    const tasks: Task[] = await getTasks()

    return (
        <>
            {tasks.map((task) => (
                <div
                    key={task.id}
                    className="p-4 bg-white text-black my-3 
                    flex justify-between gap-5 items-start
                    rounded-lg"
                >
                    <div>
                        <h2 className="font-bold text-2xl">{task.title}</h2>
                        <p>{task.description}</p>
                    </div>
                    <div className="flex gap-2">
                        <DeleteButton/>
                        <Link className="text-[#ff66b3]" href={'/editTask/' + task.id}>
                            <CiEdit size={32}/>
                        </Link>
                    </div>
                </div>
            ))}
        </>
    )
}