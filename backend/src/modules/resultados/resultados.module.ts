import { Module } from '@nestjs/common'
import { PrismaService } from 'src/database/prisma.service'
import { ResultadosController } from './resultados.controller'
import { ResultadosService } from './resultados.service'

@Module({
  controllers: [ResultadosController],
  providers: [ResultadosService, PrismaService],
})
export class ResultadosModule {}
