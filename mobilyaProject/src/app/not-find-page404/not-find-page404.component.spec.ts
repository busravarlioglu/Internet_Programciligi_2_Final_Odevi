import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFindPage404Component } from './not-find-page404.component';

describe('NotFindPage404Component', () => {
  let component: NotFindPage404Component;
  let fixture: ComponentFixture<NotFindPage404Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotFindPage404Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotFindPage404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
