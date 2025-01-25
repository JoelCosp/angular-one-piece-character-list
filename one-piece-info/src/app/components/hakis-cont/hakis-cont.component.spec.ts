import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HakisContComponent } from './hakis-cont.component';

describe('HakisContComponent', () => {
  let component: HakisContComponent;
  let fixture: ComponentFixture<HakisContComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HakisContComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HakisContComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
