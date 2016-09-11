import {Component} from 'angular2/core'
import {Post} from './post.component'

@Component({
  selector: 'my-app',
  templateUrl: './app/app.component.html',
  styleUrls: ['./app/app.component.css'],
  directives: [Post]
  
})


export class AppComponent{
  posts = [];

  constructor(){

/*    this.posts.push({
      title: "afzal",
      link: "ashraf"      
    });
*/  }

  addPost(postTitle, postLink){
    this.posts.push({
      title: postTitle,
      link: postLink
    });
  }



}