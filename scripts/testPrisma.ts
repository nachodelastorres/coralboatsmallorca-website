import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const interesado = await prisma.interesado.create({
    data: {
      nombre: 'Juan',
      apellidos: 'Pérez',
      email: 'juan@example.com',
      telefono: '123456789',
      tipoExcursion: 'mañana',
      numeroDePersonas: 2,
    },
  });

  console.log('✅ Interesado creado:', interesado);
}

main()
  .catch((e) => {
    console.error('❌ Error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
