-- CreateTable
CREATE TABLE "interesados" (
    "id" SERIAL NOT NULL,
    "nombre" VARCHAR(100) NOT NULL,
    "apellidos" VARCHAR(100) NOT NULL,
    "email" VARCHAR(100) NOT NULL,
    "telefono" VARCHAR(20) NOT NULL,
    "tipoExcursion" VARCHAR(50) NOT NULL,
    "numeroDePersonas" INTEGER NOT NULL,
    "fechaRegistro" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "interesados_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "interesados_email_key" ON "interesados"("email");
