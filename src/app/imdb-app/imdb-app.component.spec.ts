import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImdbAppComponent } from './imdb-app.component';

describe('ImdbAppComponent', () => {
  let component: ImdbAppComponent;
  let fixture: ComponentFixture<ImdbAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImdbAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImdbAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
