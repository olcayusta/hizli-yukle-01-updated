import {ChangeDetectionStrategy, Component, HostListener, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import {PostService} from '@shared/services/post.service';
import {Subscription} from 'rxjs';
import {ImageService} from '@shared/services/image.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  filesToUpload: Array<File> = [];
  subscription: Subscription;

  @HostListener('document:paste', ['$event'])
  public async onPaste(e: ClipboardEvent) {
    const dataText = e.clipboardData.getData('Text');
    if (dataText) {
      try {
        await this.isLinkImageFile(dataText);
        const file = await this.srcToFile(dataText);

        // Request new token
        this.postService.requestToken().subscribe(value => {
          sessionStorage.setItem('TEMP_TOKEN', value.token);

          this.router.navigate([`/p/${value.id}`], {
            state: {
              progress: true,
              files: [file]
            }
          });
        });
      } catch (e) {
        this.snackBar.open(e);
      }
    } else {
      const items = e.clipboardData.items;
      if (items.length > 0) {
        this.dataTransferItemToFile(items);
      }
    }
  }

  constructor(
    private postService: PostService, private imageService: ImageService, private router: Router, private snackBar: MatSnackBar) {
  }

  dataTransferItemToFile(items: DataTransferItemList) {
    for (const item of Object.values(items)) {
      this.filesToUpload.push(item.getAsFile());
    }

    this.postService.requestToken().subscribe(async (value: any) => {
      sessionStorage.setItem('TEMP_TOKEN', value.token);

      await this.router.navigate([`/p/${value.id}`], {
        state: {
          progress: true,
          files: this.filesToUpload
        }
      });
    });
  }

  async isLinkImageFile(src: string) {
    return new Promise((resolve, reject) => {
      const fakeImage = new Image();
      fakeImage.src = src;
      fakeImage.onload = (img) => resolve(true);
      fakeImage.onerror = () => reject(new Error('Maalesef, URL yüklenemedi.'));
    });
  }

  async srcToFile(src: string) {
    // var proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const response = await fetch(src);
    const blobPart = await response.blob();
    const fileType = blobPart.type;
    const dotIndex = fileType.lastIndexOf('/') + 1;
    return new File([blobPart], `file.${fileType.substring(dotIndex)}`, {type: blobPart.type});
  }

  ngOnInit() {
  }

  onChange($event: Event) {
    this.subscription = this.postService.requestToken().subscribe((value: any) => {
      sessionStorage.setItem('TEMP_TOKEN', value.token);

      this.router.navigate([`/p/${value.id}`], {
        state: {
          progress: true,
          files: ($event.target as HTMLInputElement).files
        }
      }).then(r => {
        console.log('navigate oldu');
      })

    });
  }
}
