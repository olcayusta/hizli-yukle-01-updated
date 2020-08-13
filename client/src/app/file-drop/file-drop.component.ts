import { ChangeDetectionStrategy, Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { PostService } from '@shared/services/post.service';
import { ImageService } from '@shared/services/image.service';

@Component({
  selector: 'app-file-drop',
  templateUrl: './file-drop.component.html',
  styleUrls: ['./file-drop.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({opacity: 0}),
        animate(150, style({opacity: 1}))
      ]),
      transition(':leave', [
        animate(150, style({opacity: 0}))
      ])
    ])
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FileDropComponent implements OnInit {
  dragEnterCount = 0;
  filesToUpload: Array<File> = [];

  @Output() hovered = new EventEmitter();

  subscription: Subscription;

  @HostListener('document:dragenter', ['$event'])
  public onDragEnter(e: DragEvent) {
    e.preventDefault();
    this.dragEnterCount += 1;
    this.hovered.emit(true);
  }

  @HostListener('document:dragleave', ['$event'])
  public onDragLeave(e: DragEvent) {
    e.preventDefault();
    this.dragEnterCount += -1;
  }

  @HostListener('document:dragover', ['$event'])
  public onDragOver(e: DragEvent) {
    e.preventDefault();
  }

  @HostListener('document:drop', ['$event'])
  public onDrop(e: DragEvent) {
    e.preventDefault();
    e.stopPropagation();

    this.dragEnterCount = 0;

    this.dataTransferItemToFile(e.dataTransfer.items);
    this.uploadToTheServer();
  }

  constructor(
    private router: Router,
    private imageService: ImageService,
    private postService: PostService
  ) {
  }

  ngOnInit() {
  }

  dataTransferItemToFile(items: DataTransferItemList) {
    for (const item of Object.values(items)) {
      this.filesToUpload.push(item.getAsFile());
    }
  }

  resetFiles() {
    this.filesToUpload = [];
  }

  uploadToTheServer() {
    this.subscription = this.postService.requestToken().subscribe(async (value: any) => {
      sessionStorage.setItem('TEMP_TOKEN', value.token);

      await this.router.navigate([`/p/${value.id}`], {
        state: {
          progress: true,
          files: this.filesToUpload
        }
      });
      this.resetFiles();
      this.subscription.unsubscribe();
    });
  }
}
