import {prisma} from '@/libs/prisma'
import { NextResponse } from 'next/server'

export async function GET() {
  const data = await prisma.tasks.findMany()
  return NextResponse.json(data);
}

export async  function POST(req) {
  const { title, description } = await req.json()
  const newTask = await prisma.tasks.create({
    data: { 
      title, 
      description
    }
  })
  return NextResponse.json(newTask);
}