import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StatisticsController } from './statistics/statistics.controller';
import { StatisticsService } from './statistics/statistics.service';


@Module({
  imports: [],
  controllers: [AppController, StatisticsController],
  providers: [AppService, StatisticsService],
})
export class AppModule {}
