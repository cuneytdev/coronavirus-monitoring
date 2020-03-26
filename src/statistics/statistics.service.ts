import { Injectable } from '@nestjs/common';
const fetch = require('node-fetch');
const URL = require('url').URL;

const options = {
  method: 'GET',
  headers: {
    'content-type': 'application/json',
    'x-rapidapi-host': 'coronavirus-monitor.p.rapidapi.com',
    'x-rapidapi-key': '828dca4aa0msh03c9e5b61da4118p1c0a6ejsn7d24496e71db',
  },
};

@Injectable()
export class StatisticsService {
  async getCasesByCountry() {
    const result = await fetch(
      'https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php',
      options,
    );
    const res = await result.json();
    return res;
  }

  async getEffectedCountries() {
    const result = await fetch(
      'https://coronavirus-monitor.p.rapidapi.com/coronavirus/affected.php',
      options,
    );
    const res = await result.json();
    return res;
  }

  async getHistoryByParticularCountry(country: string) {
    let url = new URL('https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_particular_country.php');
    url.searchParams.append('country', country);
    const result = await fetch(url, options);
    const res = await result.json();
    return res;
  }

  async getLatestStatusByCountryName(country: string) {
    let url = new URL('https://coronavirus-monitor.p.rapidapi.com/coronavirus/latest_stat_by_country.php');
    url.searchParams.append('country', country);
    const result = await fetch(url, options);
    const res = await result.json();
    return res;
  }

  async getWorldTotalStatus() {
    const result = await fetch(
      'https://coronavirus-monitor.p.rapidapi.com/coronavirus/worldstat.php',
      options,
    );
    const res = await result.json();
    return res;
  }
  
}
