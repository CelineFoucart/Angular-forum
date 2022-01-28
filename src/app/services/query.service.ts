import { Injectable } from '@angular/core';
import { Category } from '../model/Category';
import { Forum } from '../model/Forum';
import data from '../../assets/data.json';
import { Topic } from '../model/Topic';


@Injectable({
  providedIn: 'root'
})
export class QueryService {

  private categories:Category[] = [];
  private forums:Forum[] = [];
  private topics:Topic[] = [];

  constructor() { 
    this.init();
  }

  public findAllCategories(): Category[] {
    return this.categories;
  }

  public findForumById(id:number): Forum {
    const forum = this.forums.find(forum => forum.id === id);
    if(forum !== undefined) {
      return forum;
    }
    throw new Error("Ce forum n'existe pas");
  }

  public findForumTopics(forumId:number): Topic[] {
    return this.topics.filter(topic => topic.parentId === forumId);
  }

  private init() {
    for (let i = 0; i < data.forums.length; i++) {
      const element = data.forums[i];
      this.forums.push(new Forum(element.id, element.title, element.description, element.parentId));
    }

    for (let i = 0; i < data.categories.length; i++) {
      const element = data.categories[i];
      const forums = this.forums.filter(forum => forum.parentId === element.id);
      this.categories.push(new Category(element.id, element.title, forums));
    }

    for (let i = 0; i < data.topics.length; i++) {
      const element = data.topics[i];
      this.topics.push(new Topic(element.id, element.title, element.parentId, element.author));
    }
  }
}
