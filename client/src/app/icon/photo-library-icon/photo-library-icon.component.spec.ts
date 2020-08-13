import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoLibraryIconComponent } from './photo-library-icon.component';

describe('PhotoLibraryIconComponent', () => {
  let component: PhotoLibraryIconComponent;
  let fixture: ComponentFixture<PhotoLibraryIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoLibraryIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoLibraryIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
