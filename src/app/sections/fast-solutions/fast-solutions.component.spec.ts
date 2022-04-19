import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FastSolutionsComponent } from './fast-solutions.component';

describe('FastSolutionsComponent', () => {
  let component: FastSolutionsComponent;
  let fixture: ComponentFixture<FastSolutionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FastSolutionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FastSolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
