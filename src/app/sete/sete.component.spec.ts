import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeteComponent } from './sete.component';

describe('SeteComponent', () => {
  let component: SeteComponent;
  let fixture: ComponentFixture<SeteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
