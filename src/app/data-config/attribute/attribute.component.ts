import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GeneratorService } from '../../generator.service';

@Component({
  selector: 'app-attribute',
  templateUrl: './attribute.component.html',
  styleUrls: ['./attribute.component.scss']
})
export class AttributeComponent implements OnInit {

  types = ['uuID', 'First Name', 'Last Name', 'Mail', 'City Address', 'Street Address', 'Non-integer number', 'Phone number', 'Custom Table'];
  selectedType: string;
  name: string;
  custom: string;

  constructor(public generator: GeneratorService) { }

  ngOnInit(): void {
    this.generator.attributeList = [];
  }

  addAttribute(form: NgForm): void {
    this.generator.addAtr(form);
    form.resetForm();
  }
}
