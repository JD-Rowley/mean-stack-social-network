import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // posts = [
  //   { title: 'First Post', content: 'First post\'s content.' },
  //   { title: 'Second Post', content: 'Second post\'s content.' },
  //   { title: 'Third Post', content: 'Third post\'s content.' }
  // ];
  posts = [];
}
