import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EhiContactListComponent } from './ehi-contact-list.component';

describe('EhiContactListComponent', () => {
  let component: EhiContactListComponent;
  let fixture: ComponentFixture<EhiContactListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EhiContactListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EhiContactListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
