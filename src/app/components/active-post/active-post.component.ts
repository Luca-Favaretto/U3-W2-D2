import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/service/post.service';
import { Post } from 'src/app/models/post';
@Component({
  selector: 'app-active-post',
  templateUrl: './active-post.component.html',
  styleUrls: ['./active-post.component.scss'],
})
export class ActivePostComponent implements OnInit {
  arrayPost: Post[] = [];
  constructor(private postSrv: PostService) {
    this.postSrv.getJson().then((post) => {
      let array = post;
      console.log(post);
      array.forEach((post: any) => {
        if (post.active) {
          this.arrayPost.push(post);
        }
      });
    });
  }

  ngOnInit(): void {}
}
