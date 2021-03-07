import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObiecteComponent } from './obiecte.component';

describe('ObiecteComponent', () => {
  let component: ObiecteComponent;
  let fixture: ComponentFixture<ObiecteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObiecteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObiecteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
