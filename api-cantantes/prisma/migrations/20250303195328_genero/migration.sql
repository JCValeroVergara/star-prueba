/*
  Warnings:

  - Added the required column `genero` to the `Cantante` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Cantante" ADD COLUMN     "genero" TEXT NOT NULL;
