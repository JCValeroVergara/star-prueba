
import { NextResponse, NextRequest } from 'next/server'
import prisma from '@/lib/prisma';
import { number, object, string } from 'yup';
import { Cantante } from '@prisma/client';

interface Segment{
    params: {
        id: string
    }
}

const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
};

export async function OPTIONS(request: Request) {
    return NextResponse.json(null, {
        status: 200,
        headers: corsHeaders,
    });
}

const getCantante = async (id: number): Promise<Cantante | null> => {
    const cantante = await prisma.cantante.findFirst({ where: { id } });
    return cantante;
}

export async function GET(request: Request, { params }: Segment) {

    const { id } = params
    const cantante = await getCantante(+id)

    if (!cantante) {
        return NextResponse.json({
            status: 404,
            message: 'Cantante no encontrado'
        })
    }

    return NextResponse.json((cantante), {
        status: 200,
        headers: corsHeaders,
    });
}


const putSchema = object({
    nombre: string().optional(),
    genero: string().optional(),
    nacionalidad: string().optional(),
    edad: number().optional(),
    discos: number().optional(),
    canciones: number().optional(),
})

export async function PUT(request: Request, { params }: Segment) {

    const { id } = params;

    const cantante = await getCantante(+id);

    if (!cantante) {
        return NextResponse.json({
        status: 404,
        message: 'Cantante no encontrado',
        });
    }

    try {
        const body = await putSchema.validate(await request.json());
        const updatedCantante = await prisma.cantante.update({
            where: {id:+id},
            data: body
        });
    
        return NextResponse.json(updatedCantante, {
            status: 200,
            headers: corsHeaders,
        });
        
    } catch (error) {
        return NextResponse.json( error, { status: 400 })
    }
}


export async function DELETE(request: Request, { params }: Segment) {
    const { id } = params;
    const cantante = await getCantante(+id);

    if (!cantante) {
        return NextResponse.json({
        status: 404,
        message: 'Cantante no encontrado',
        });
    }

    try {
        await prisma.cantante.delete({ where: { id: +id } });
        return NextResponse.json(({ message: 'Cantante eliminado' }), {
            status: 200,
            headers: corsHeaders,
        });
        
    } catch (error) {
        return NextResponse.json( error, { status: 400 })
        
    }

}