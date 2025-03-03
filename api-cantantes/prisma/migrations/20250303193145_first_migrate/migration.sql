-- CreateTable
CREATE TABLE "Cantante" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "nacionalidad" TEXT NOT NULL,
    "edad" INTEGER NOT NULL,
    "discos" INTEGER NOT NULL,
    "canciones" INTEGER NOT NULL,
    "activo" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Cantante_pkey" PRIMARY KEY ("id")
);
