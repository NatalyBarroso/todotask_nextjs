import TaskCard from '@/components/TaskCard'
import { prisma } from '@/libs/prisma'
import ButtonNew from '@/components/ButtonNew'


async function loadtasks() {
  return await prisma.tasks.findMany()
}

async function Home() {
  const tasks = await loadtasks()
  return (
    <section className=' container mx-auto'>
      <div className="h-screen flex justify-center items-center">
      <div className="bg-third-color p-10 lg:w-1/4 md:w-1/2">
        <ButtonNew/>
        {tasks.map((task) => (
          <TaskCard task={task} key={task.id}/>
        ))}
      </div>
    </div>
    </section>
  )
}

export default Home