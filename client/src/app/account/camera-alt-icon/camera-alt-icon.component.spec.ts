import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CameraAltIconComponent } from './camera-alt-icon.component';

describe('CameraAltIconComponent', () => {
  let component: CameraAltIconComponent;
  let fixture: ComponentFixture<CameraAltIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CameraAltIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CameraAltIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
