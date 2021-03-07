import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmotiiComponent } from './emotii.component';

describe('EmotiiComponent', () => {
  let component: EmotiiComponent;
  let fixture: ComponentFixture<EmotiiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmotiiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmotiiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
