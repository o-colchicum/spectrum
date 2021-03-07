import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsistComponent } from './asist.component';

describe('AsistComponent', () => {
  let component: AsistComponent;
  let fixture: ComponentFixture<AsistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
