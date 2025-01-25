import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevilfruitsContComponent } from './devilfruits-cont.component';

describe('DevilfruitsContComponent', () => {
  let component: DevilfruitsContComponent;
  let fixture: ComponentFixture<DevilfruitsContComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DevilfruitsContComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevilfruitsContComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
