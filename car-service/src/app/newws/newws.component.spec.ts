import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewwsComponent } from './newws.component';

describe('NewwsComponent', () => {
  let component: NewwsComponent;
  let fixture: ComponentFixture<NewwsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewwsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewwsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
