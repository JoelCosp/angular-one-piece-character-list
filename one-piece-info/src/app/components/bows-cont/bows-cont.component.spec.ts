import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BowsContComponent } from './bows-cont.component';

describe('BowsContComponent', () => {
  let component: BowsContComponent;
  let fixture: ComponentFixture<BowsContComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BowsContComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BowsContComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
