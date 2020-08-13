import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExitToAppIconComponent } from './exit-to-app-icon.component';

describe('ExitToAppIconComponent', () => {
  let component: ExitToAppIconComponent;
  let fixture: ComponentFixture<ExitToAppIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExitToAppIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExitToAppIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
