import { Injectable } from '@angular/core';
import { Attribute } from './models/attribute.model';
import { NgForm } from '@angular/forms';
import faker from 'faker';
import { DictionaryComponent } from './dictionary/dictionary.component';

@Injectable({
  providedIn: 'root'
})
export class GeneratorService {
  attribute: Attribute;
  attributeList: Attribute[];
  generatedData = [];
  recordNumber: number = 10;

  //Generate final dataset
  generateData(): void {
    faker.locale = "pl";
    this.generatedData = [];
    for (let i = 0; i < this.recordNumber; i++) {
      let record = {};
      this.attributeList.forEach(element => {
        record[element.name] = this.getData(element.type, element.custom, element.minDate, element.maxDate, element.minTime, element.maxTime, element.minNumber, element.maxNumber, element.decimalPlaces);
      });
      this.generatedData.push(record);
    }
  }


  getData(type: string, custom: string, minDate: string, maxDate: string, minTime: string, maxTime: string, minNumber: number, maxNumber: number, decimalPlaces: number): any {
    if (type == 'First Name')
      return this.generateFirstName();
    else if (type == 'Last Name')
      return this.generateLastName();
    else if (type == 'Mail')
      return this.generateMail();
    else if (type == 'Street Address')
      return this.generateStreetAddress();
    else if (type == 'City Address')
      return this.generateCityAddress();
    else if (type == 'Phone number')
      return this.generatePhone();
    else if (type == 'Number')
      return this.generateNonInteger(minNumber, maxNumber, decimalPlaces);
    else if (type == 'Custom Table')
      return this.generateCustomTable(custom);
    else if (type == 'uuID')
      return this.generateUUID();
    else if (type == 'Date')
      return this.generateDate(minDate, maxDate);
    else if (type == 'Time')
      return this.generateTime(minTime, maxTime);
  }


  // Push attribute to attributeList
  addAtr(form: NgForm): void {
    this.attributeList.push(form.value);
    console.log(this.attributeList);
  }


  //Delete attribute from attribute list
  deleteAtr(index: number): void {
    this.attributeList.splice(index, 1);
  }




  // Generate random value for every type //

  generateFirstName(): string {

    return faker.name.firstName();
  }
  generateLastName(): string {
    return faker.name.lastName();
  }
  generateMail(): string {
    return faker.internet.email();
  }
  generateStreetAddress(): string {
    let dict = new DictionaryComponent();
    return faker.random.arrayElement(dict.street) + " " + Math.floor(Math.random() * 100 + 1);
  }
  generateCityAddress(): string {
    let dict = new DictionaryComponent();
    return faker.random.arrayElement(dict.city);
  }
  generatePhone(): string {
    faker.locale = 'pl';
    let res: string = faker.phone.phoneNumber();
    let final = res.split('-').join('');
    return final;
  }
  generateNonInteger(min, max, decimalPlaces): number {
    let precision = 1 / (Math.pow(10, decimalPlaces));
    return faker.random.number({
      'min': min,
      'max': max,
      'precision': precision,
    })
  }

  generateUUID(): string {
    return faker.random.uuid();
  }
  generateCustomTable(string): string {
    let array: any[] = string.split(",");
    return faker.random.arrayElement(array);
  }

  generateDate(min: string, max: string): Date {
    let minArray: any[] = min.split("-");
    let maxArray: any[] = max.split("-");
    let minDate: Date = new Date(minArray[0], minArray[1], minArray[2]);
    let maxDate: Date = new Date(maxArray[0], maxArray[1], maxArray[2]);
    return faker.date.between(minDate, maxDate).toLocaleDateString().split('.').join('-');
  }

  generateTime(min, max): void {

    let minDate: Date = new Date();
    let minArray: any[] = min.split(":");
    minDate.setHours(minArray[0]);
    minDate.setMinutes(minArray[1]);
    let maxDate: Date = new Date();
    let maxArray: any[] = max.split(":");
    maxDate.setHours(maxArray[0]);
    maxDate.setMinutes(maxArray[1]);
    return faker.date.between(minDate, maxDate).toLocaleTimeString();
  }



  constructor() {
  }
}
