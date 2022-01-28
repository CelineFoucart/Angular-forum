import { Component, OnInit } from '@angular/core';
import { Category } from '../model/Category';
import { QueryService } from '../services/query.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  categories!:Category[];

  constructor(private queryService:QueryService) { }

  ngOnInit(): void {
    this.categories = this.queryService.findAllCategories();
  }

}
