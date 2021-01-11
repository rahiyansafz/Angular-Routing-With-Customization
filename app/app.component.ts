import { Component } from '@angular/core';
import { Service, Employee, City, Country, State } from './app.service';
import CustomStore from 'devextreme/data/custom_store';

@Component({
  styleUrls: ['app.component.css'],
  selector: 'demo-app',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  employees: Employee[];
  cities: City[] = [];
  countries: Country[] = [];
  states: State[] = [];

  constructor(private service: Service) {
    this.employees = this.service.getEmployees();
    this.countries = this.service.getCountries();

    this.states = this.service.getStates();
    this.cities = this.service.getCities();

    this.getFilteredStates = this.getFilteredStates.bind(this);
    this.getFilteredCities = this.getFilteredCities.bind(this);
  }
  
      getFilteredStates(options): any {
        const that = this;
        return {
            store: new CustomStore(<any>{
                load: function (loadOptions) {
                    if (options.data && options.data.countryId) {          
                        that.states = that.service.getStates().filter( x=> x.countryId === options.data.countryId) ;
                        return { data: that.states };
                    } else {
                        return that.states;
                    }
                },
                byKey: function (key, extra) {
                     debugger;
                    return that.states.find(x => x.id === key);
                }
            })
        };
    }

    getFilteredCities(options): any {
        const that = this;
        return {
            store: new CustomStore(<any>{
                load: function (loadOptions) {
           
                    if (options.data && options.data.countryId && options.data.stateId) {
                                   // in my app I get the data from server
                                  // Im simulating the load
                                that.cities = that.service.getCities().filter( x=> x.stateId === options.data.stateId) ;
                                return { data: that.cities };
                    } else {
                        return that.cities;
                    }
                },
                byKey: function (key, extra) {
                    return that.cities.find(x => x.id === key);
                }
            })
        };
    }


    setTypeValue(rowData: any, value: any): void {
        rowData.stateId = null;
        rowData.cityId = null;
        (<any>this).defaultSetCellValue(rowData, value);
    }

    setSubtTypeValue(rowData: any, value: any): void {
        rowData.cityId = null;
        (<any>this).defaultSetCellValue(rowData, value);
    }
}