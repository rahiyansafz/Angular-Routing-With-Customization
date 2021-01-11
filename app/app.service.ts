import { Injectable } from '@angular/core';

export class Employee {
    id: number;
    cityId: number;
    cityName: string;
    stateId: number;
    stateName: string;
    countryId: number;
    countryName: string;
}


export class City {
  id: number;
  name: string;
  stateId: number;
}

export class State {
  id: number;
  name: string;
  countryId: number;
}

export class Country {
  id: number;
  name: string;
}

@Injectable()
export class Service {
    getEmployees(): Employee[] {
        return [
          {id: 1, cityId: 1, cityName:"Caba", stateId: 1, stateName: "Buenos Aires", countryId: 1, countryName: "Argentina"  },
              {id: 2, cityId: 2, cityName:"Rio", stateId: 2, stateName: "Rio Janeiro", countryId: 2, countryName: "Brasil"  }
        ];
    }

    getCities(): City[]{
            return [
        {id: 1, name:"caba", stateId: 1 },
        {id: 2, name:"rio", stateId: 2}
      ];
    }

    getStates(): State[]{
      return [
        {id: 1, name:"Buenos aires", countryId: 1 },
        {id: 2, name:"Rio Janeiro", countryId: 2}
      ];
    }

    getCountries(): Country[]{
      return [
        {id: 1, name:"Argentina"},
        {id: 2, name:"Brasil"}
      ];
    }
}
