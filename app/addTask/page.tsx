"use client"

import { useRouter } from "next/router"
import React, { useState } from "react"

export default function AddTask() {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [loading, setLoading] = useState(false)

    const router = useRouter()

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading(true)
        try {
            const response = await fetch("form/api", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ title, description }),
        })
        if (response.ok) {
            router.push("/tarefinha-db")
        }
        } catch (error) {
        console.error("Error:", error)
        } finally {
        setLoading(false)
        }
    }

    return (
        <form
            className="
                bg-[#240742] flex flex-col 
                gap-3 p-6 rounded-lg"
            onSubmit={handleSubmit}
        >
            <input
                className="
                    bg-white text-black 
                    px-8 py-4 rounded-lg
                " 
                type="text"
                name="title"
                placeholder="Título da tarefa"
                onChange={(e) => setTitle(e.target.value)}
            />
            
            <textarea
                className="
                    bg-white text-black
                    px-8 py-4 rounded-md
                    h-60 resize-y
                "
                name="description"
                placeholder="Descrição da tarefa"
                onChange={(e) => setDescription(e.target.value)}
            />

            <button
                className="
                    mt-2 h-10 bg-[#ff66b3]
                    rounded-md font-bold"
                type="submit"
                disabled={loading}
            >
                {loading ? "Adicionando tarefa..." : "Adicionar tarefa"}
            </button>
        </form>
    )
}