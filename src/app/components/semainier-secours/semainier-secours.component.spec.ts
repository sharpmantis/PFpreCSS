import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SemainierSecoursComponent } from './semainier-secours.component';

describe('SemainierSecoursComponent', () => {
  let component: SemainierSecoursComponent;
  let fixture: ComponentFixture<SemainierSecoursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SemainierSecoursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SemainierSecoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
