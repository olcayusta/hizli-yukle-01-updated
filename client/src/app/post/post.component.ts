import { ChangeDetectorRef, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Title } from '@angular/platform-browser';
import { HttpEventType } from '@angular/common/http';
import { Image } from '@shared/models/image.model';
import { MatDialog } from '@angular/material/dialog';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';
import { ImageService } from '@shared/services/image.service';

interface UploadState {
  progress: boolean;
  files: FileList;
}

interface MyFile {
  readonly id?: string;
  data: File;
  inProgress: boolean;
  progress: number;
  paddingTop: number;
  foo: string;
  readonly publicUrl?: string;
}

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  images: Image[];

  @ViewChild('fileUpload', {static: false}) fileUpload: ElementRef;
  files: MyFile[] = [];

  isUploading = false;

  @HostListener('window:beforeunload', ['$event'])
  doSomething($event) {
    /*   if (this.isUploading) {
         $event.returnValue = 'Your data will be lost!';
       }*/
    // $event.returnValue = 'Your data will be lost!';
  }

  constructor(
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
    private cdr: ChangeDetectorRef,
    private title: Title,
    private imageService: ImageService,
    private dialog: MatDialog
  ) {
  }

  async ngOnInit() {
    this.isUploading = !this.route.snapshot.data.post;

    const {progress, files} = history.state as UploadState;
    if (progress) {
      for (const file of Object.values(files)) {
        const img: any = await this.getImageInfo(file);
        const paddingTop = (img.height / img.width) * 100;
        this.files.push({data: file, inProgress: false, foo: 'bar', progress: 0, paddingTop});
      }
      this.files.forEach(file => {
        this.uploadFile(file);
      });
    } else {
      this.images = this.route.snapshot.data.post;
      // this.title.setTitle(`${this.images[0].postId} - ${environment.appName}`);
    }
  }

  visibilityTest() {
    /* Notification.requestPermission();
   const notification = new Notification('1 / 4', {
     body: 'blabla yüklendi.',
     image: 'https://www.bing.com/th/id/OIP.JKgmipycDyunv3E_I86eFgHaLK?w=198&h=300&c=7&o=5&pid=1.7'
   });*/

    document.onvisibilitychange = ev => {
      console.log(document.visibilityState);
    };
  }

  async getImageInfo(file) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      const objectUrl = URL.createObjectURL(file);
      img.onload = () => {
        URL.revokeObjectURL(objectUrl);
        resolve(img);
      };
      img.onerror = reject;
      img.src = objectUrl;
    });
  }

  uploadFile(file) {
    this.imageService.create(file).subscribe(e => {
      if (e.type === HttpEventType.Sent) {
        file.inProgress = true;
      }

      if (e.type === HttpEventType.UploadProgress) {
        file.progress = Math.round((e.loaded * 100) / e.total);
      }

      if (e.type === HttpEventType.Response) {
        file.id = e.body.id;
        file.publicUrl = e.body.publicUrl;
      }
    });
  }

  imgLoad($event: Event) {
    const img = $event.target as HTMLImageElement;
    URL.revokeObjectURL(img.src);
  }

  linkCopied() {
    this.snackBar.open('Panoya kopyalandı');
  }

  deleteButtonClicked($event, postId: string) {
    $event.preventDefault();

    const dialog = this.dialog.open(DeleteDialogComponent, {
      width: '512px',
      autoFocus: false,
      restoreFocus: false,
      data: {
        postId
      }
    });
  }
}
