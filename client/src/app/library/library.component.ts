import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '@shared/models/post.model';

export interface SortItem {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LibraryComponent implements OnInit {
  posts: Post[];

  sorts: SortItem[] = [
    {value: 'newest', viewValue: 'Eklenme tarihi (en yeni)'},
    {value: 'oldest', viewValue: 'Eklenme tarihi (en eski)'}
  ];

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.posts = this.route.snapshot.data.library;
  }

}
