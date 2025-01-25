import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GBtnComponent } from './g-btn.component';

describe('GBtnComponent', () => {
  let component: GBtnComponent;
  let fixture: ComponentFixture<GBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GBtnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
