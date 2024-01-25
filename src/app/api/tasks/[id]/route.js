import { prisma } from "@/libs/prisma";
import { NextResponse } from "next/server";

export async function GET(req, {params}) {
   const data = await prisma.tasks.findUnique({
    where: {
      id: Number(params.id),
    }
   });
   return NextResponse.json(data);
}

export async function PUT(req, {params}) {
  const data = await req.json()
  const updatedData = await prisma.tasks.update({
    where: {
      id: Number(params.id),
    },
    data: data,
  })
  return NextResponse.json(updatedData);
}

export async function DELETE(req, {params}) {
  const deltedData = await prisma.tasks.delete({
    where: {
      id: Number(params.id),
    }
  })
  return NextResponse.json(deltedData);
}