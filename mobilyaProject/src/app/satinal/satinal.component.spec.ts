import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SatinalComponent } from './satinal.component';

describe('SatinalComponent', () => {
  let component: SatinalComponent;
  let fixture: ComponentFixture<SatinalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SatinalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SatinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
