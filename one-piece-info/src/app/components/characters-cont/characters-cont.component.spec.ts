import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactersContComponent } from './characters-cont.component';

describe('CharactersContComponent', () => {
  let component: CharactersContComponent;
  let fixture: ComponentFixture<CharactersContComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharactersContComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharactersContComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
