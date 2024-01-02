import { Module } from '@nestjs/common'
import { ResultadosModule } from './modules/resultados/resultados.module'

@Module({
  imports: [ResultadosModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
