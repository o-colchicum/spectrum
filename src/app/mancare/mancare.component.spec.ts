import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MancareComponent } from './mancare.component';

describe('MancareComponent', () => {
  let component: MancareComponent;
  let fixture: ComponentFixture<MancareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MancareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MancareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
