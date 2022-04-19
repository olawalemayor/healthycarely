import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurRatingComponent } from './our-rating.component';

describe('OurRatingComponent', () => {
  let component: OurRatingComponent;
  let fixture: ComponentFixture<OurRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurRatingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
