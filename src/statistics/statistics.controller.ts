import { Controller, Get, Query, Param } from '@nestjs/common';
import { StatisticsService } from './statistics.service';
import { NestFactory } from '@nestjs/core/nest-factory';
import { AppModule } from 'src/app.module';

@Controller('statistics')
export class StatisticsController {
  constructor(private readonly service: StatisticsService) {
  }

  @Get('cases')
  getCasesByCountry(): any {
    return this.service.getCasesByCountry();
  }

  @Get('effectedCountries')
  getEffectedCountries(): any {
    return this.service.getEffectedCountries();
  }

  @Get('getHistoryByParticularCountry/:country')
  getHistoryByParticularCountry(@Param() params: any): any {
    return this.service.getHistoryByParticularCountry(params.country);
  }

  @Get('getLatestStatusByCountryName/:country')
  getLatestStatusByCountryName(@Param() params: any): any {
    return this.service.getLatestStatusByCountryName(params.country);
  }

  @Get('getWorldTotalStatus')
  getWorldTotalStatus(@Param() params: any): any {
    return this.service.getWorldTotalStatus();
  }
}
