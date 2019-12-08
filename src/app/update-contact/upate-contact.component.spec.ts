import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpateContactComponent } from './update-contact.component';

describe('UpateContactComponent', () => {
  let component: UpateContactComponent;
  let fixture: ComponentFixture<UpateContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpateContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpateContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
