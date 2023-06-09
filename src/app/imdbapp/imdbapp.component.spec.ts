import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImdbappComponent } from './imdbapp.component';

describe('ImdbappComponent', () => {
  let component: ImdbappComponent;
  let fixture: ComponentFixture<ImdbappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImdbappComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImdbappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
