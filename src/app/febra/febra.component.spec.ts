import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FebraComponent } from './febra.component';

describe('FebraComponent', () => {
  let component: FebraComponent;
  let fixture: ComponentFixture<FebraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FebraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FebraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
