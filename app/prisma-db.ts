import { Prisma, PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

const seedTasks = async () => {
    const count = await prisma.task.count()
    if (count === 0) {
        await prisma.task.createMany({
            data: [
                { title: "Tarefa 1", description: "Descrição 1" },
                { title: "Tarefa 2", description: "Descrição 2" },
                { title: "Tarefa 3", description: "Descrição 3" },
            ]
        })
    }
}

seedTasks()

export async function getTasks(query?: string) {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  if (query) {
    return prisma.task.findMany({
      where: {
        OR: [
          { title: { contains: query } },
          { description: { contains: query } },
        ],
      },
    });
  }
  return prisma.task.findMany();
}

export async function getTask(id: number) {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  return prisma.task.findUnique({
    where: { id },
  });
}

export async function addTask(
  title: string,
  description: string
) {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  return prisma.task.create({
    data: { title, description },
  });
}

export async function updateTask(
  id: number,
  title: string,
  description: string
) {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  return prisma.task.update({
    where: { id },
    data: { title, description },
  });
}

export async function deleteTask(id: number) {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  return prisma.task.delete({
    where: { id },
  });
}