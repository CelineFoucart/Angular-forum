import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Forum } from '../model/Forum';
import { Topic } from '../model/Topic';
import { QueryService } from '../services/query.service';

@Component({
  selector: 'app-viewforum',
  templateUrl: './viewforum.component.html',
  styleUrls: ['./viewforum.component.css']
})
export class ViewforumComponent implements OnInit {
  
  forum!:Forum;
  topics!:Topic[];
  notFound:boolean = false;

  constructor(private queryService:QueryService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    const id = parseInt(this.route.snapshot.params['id']);
    try {
      this.forum = this.queryService.findForumById(id);
      this.topics = this.queryService.findForumTopics(this.forum.id);
    } catch (error) {
      this.notFound = true;
    }
  }

}
