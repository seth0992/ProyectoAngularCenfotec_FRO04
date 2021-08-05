import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventTWComponent } from './event-tw.component';

describe('EventTWComponent', () => {
  let component: EventTWComponent;
  let fixture: ComponentFixture<EventTWComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventTWComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventTWComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
