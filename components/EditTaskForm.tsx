export default function EditTaskForm() {
    return(
        <form className="bg-[#240742] flex flex-col 
            gap-3 p-6 rounded-lg">
            <input
                className="
                    bg-white text-black 
                    px-8 py-4 rounded-lg
                " 
                type="text" 
                placeholder="Título da tarefa"
            />
            
            <textarea
                className="
                    bg-white text-black
                    px-8 py-4 rounded-md
                    h-60 resize-y
                "
                placeholder="Descrição da tarefa"
            />

            <button className="mt-2 h-10 bg-[#ff66b3] rounded-md font-bold">
                Atualizar tarefa
            </button>
        </form>
    )
}