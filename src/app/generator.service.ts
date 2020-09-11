import { Injectable } from '@angular/core';
import { Attribute } from './models/attribute.model';
import { NgForm } from '@angular/forms';
import faker from 'faker';

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
    this.generatedData = [];
    for (let i = 0; i < this.recordNumber; i++) {
      let record = {};
      this.attributeList.forEach(element => {
        record[element.name] = this.getData(element.type, element.custom);
      });
      this.generatedData.push(record);
    }
  }


  getData(type: string, custom: string): any {
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
    else if (type == 'Non-integer number')
      return this.generateNonInteger();
    else if (type == 'Custom Table')
      return this.generateCustomTable(custom);
    else if (type == 'uuID')
      return this.generateUUID();
  }


  // Push attribute to attributeList
  addAtr(form: NgForm): void {
    this.attributeList.push(form.value);
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
    return faker.address.streetAddress();
  }
  generateCityAddress(): string {
    return faker.address.city();
  }
  generatePhone(): string {
    faker.locale = 'pl';
    let res: string = faker.phone.phoneNumber();
    let final = res.split('-').join('');
    faker.locale = 'en';
    return final;
  }
  generateNonInteger(): number {
    return faker.random.float();
  }

  generateUUID(): string {
    return faker.random.uuid();
  }
  generateCustomTable(string): string {
    let array: any[] = string.split(",");
    return faker.random.arrayElement(array);
  }



  constructor() {
  }
}
