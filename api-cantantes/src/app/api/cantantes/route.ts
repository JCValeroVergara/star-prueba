
import prisma from '@/lib/prisma'
import { NextResponse, NextRequest } from 'next/server'
import { number, object, string } from 'yup';

export async function GET(request: Request) {

    const { searchParams } = new URL(request.url)
    const offset = Number(searchParams.get('offset')) || 0;
    const limit = Number(searchParams.get('limit')) || 10;

    const cantantes = await prisma.cantante.findMany({
        take: limit,
        skip: offset*limit,
    })

    return NextResponse.json(cantantes)
}


const postSchema = object({
    nombre: string().required(),
    genero: string().required(),
    nacionalidad: string().required(),
    edad: number().required(),
    discos: number().required(),
    canciones: number().required(),
})

export async function POST(request: Request) {

    try {
        const body = await postSchema.validate(await request.json())
        const cantante = await prisma.cantante.create({ data: body })
        return NextResponse.json(cantante)
        
    } catch (error) {
        return NextResponse.json( error, { status: 400 })
    }
}