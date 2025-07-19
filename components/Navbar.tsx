import Link from "next/link"

export default function Navbar() {
    return (
        <nav className="flex justify-between 
        items-center bg-[#240742] px-8 py-3
        rounded-b-4xl">
            <Link
                className="
                    font-bold
                    font-[Vibur]
                    text-2xl
                "
                href={"/"}
            >
                Tarefinha ✰
            </Link>
            <Link
                className="
                    text-white bg-[#ff66b3]
                    py-2 px-4 font-bold rounded-lg
                "
                href={"/addTask"}
            >
                Adicionar tarefa
            </Link>
        </nav>
    )
}