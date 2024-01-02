/*
  Warnings:

  - A unique constraint covering the columns `[disciplina,bimestre]` on the table `resultados` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "resultados_disciplina_bimestre_key" ON "resultados"("disciplina", "bimestre");
