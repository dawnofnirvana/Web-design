import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PubliceventsComponent } from './publicevents.component';

describe('PubliceventsComponent', () => {
  let component: PubliceventsComponent;
  let fixture: ComponentFixture<PubliceventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PubliceventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PubliceventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
