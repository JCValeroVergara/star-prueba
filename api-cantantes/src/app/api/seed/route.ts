
import prisma from '@/lib/prisma'
import { NextResponse, NextRequest } from 'next/server'
import { cantantes } from './data'

export async function GET(request: Request) { 

    try {
        const createdCantantes = await prisma.cantante.createMany({
            data: cantantes,
            skipDuplicates: true,
        })

        return NextResponse.json({ message: 'SEED Executed', count: createdCantantes.count })
        
    } catch (error) {
        console.error(error)
        return NextResponse.json({ message: 'SEED Failed' })
    }


    return NextResponse.json({ message: 'SEED Executed' })
}