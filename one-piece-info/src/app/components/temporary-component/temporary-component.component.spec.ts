import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemporaryComponentComponent } from './temporary-component.component';

describe('TemporaryComponentComponent', () => {
  let component: TemporaryComponentComponent;
  let fixture: ComponentFixture<TemporaryComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemporaryComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemporaryComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
