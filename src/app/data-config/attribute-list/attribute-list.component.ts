import { Component, OnInit } from '@angular/core';
import { GeneratorService } from 'src/app/generator.service';

@Component({
  selector: 'app-attribute-list',
  templateUrl: './attribute-list.component.html',
  styleUrls: ['./attribute-list.component.scss']
})
export class AttributeListComponent implements OnInit {

  constructor(public generator: GeneratorService) { }

  deleteAttribute(index: number) {
    this.generator.deleteAtr(index);
  }

  ngOnInit(): void {
  }

}
