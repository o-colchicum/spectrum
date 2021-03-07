import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { MeniuCartonaseComponent } from './meniu-cartonase.component';

describe('MeniuCartonaseComponent', () => {
  let component: MeniuCartonaseComponent;
  let fixture: ComponentFixture<MeniuCartonaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ MeniuCartonaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeniuCartonaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
