import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GeneratorService } from '../generator.service';

@Component({
  selector: 'app-mock-data',
  templateUrl: './mock-data.component.html',
  styleUrls: ['./mock-data.component.scss']
})
export class MockDataComponent implements OnInit {
  @ViewChild('#json') json: ElementRef;

  constructor(public generator: GeneratorService) {

  }

  ngOnInit(): void {
  }


  downloadJson(myJson) {
    var sJson = JSON.stringify(myJson);
    var element = document.createElement('a');
    element.setAttribute('href', "data:text/json;charset=UTF-8," + encodeURIComponent(sJson));
    element.setAttribute('download', "mockData.json");
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click(); // simulate click
    document.body.removeChild(element);
  }

}
