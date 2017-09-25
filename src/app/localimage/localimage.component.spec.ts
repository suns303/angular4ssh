import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalimageComponent } from './localimage.component';

describe('LocalimageComponent', () => {
  let component: LocalimageComponent;
  let fixture: ComponentFixture<LocalimageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalimageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
