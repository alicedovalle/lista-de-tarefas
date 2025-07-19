import { addTask } from "@/app/prisma-db";

export async function POST(request: Request) {
  const body = await request.json();
  const { title, description } = body;
  const task = await addTask(title, description);
  return new Response(JSON.stringify(task), {
    headers: { "Content-Type": "application/json" },
  })
}