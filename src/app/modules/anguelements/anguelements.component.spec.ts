import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnguelementsComponent } from './anguelements.component';

describe('AnguelementsComponent', () => {
  let component: AnguelementsComponent;
  let fixture: ComponentFixture<AnguelementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnguelementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnguelementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
