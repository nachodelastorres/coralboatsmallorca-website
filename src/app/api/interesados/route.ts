export const dynamic = 'force-dynamic';
import { prisma as db} from '@/lib/prisma'; //

import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { nombre, apellidos, email, telefono, tipoExcursion, numeroDePersonas } = body;

    // ✅ Validación básica
    if (!nombre || !apellidos || !email || !telefono || !tipoExcursion || !numeroDePersonas) {
      return NextResponse.json({ error: '❌ Todos los campos son obligatorios' }, { status: 400 });
    }

    // ✅ Guardar en la base de datos
    const interesado = await db.interesado.create({
      data: {
        nombre,
        apellidos,
        email,
        telefono,
        tipoExcursion: tipoExcursion,
        numeroDePersonas: numeroDePersonas,
      },
    });

    console.log('✅ Reserva creada:', interesado);

    return NextResponse.json({ message: '✅ Reserva guardada correctamente' }, { status: 201 });
  } catch (error) {
    console.error('❌ Error al guardar los datos:', error);
    return NextResponse.json({ error: '❌ Error interno del servidor' }, { status: 500 });
  }
}
