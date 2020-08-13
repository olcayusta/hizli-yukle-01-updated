import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandingWatermarkIconComponent } from './branding-watermark-icon.component';

describe('BrandingWatermarkIconComponent', () => {
  let component: BrandingWatermarkIconComponent;
  let fixture: ComponentFixture<BrandingWatermarkIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrandingWatermarkIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandingWatermarkIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
