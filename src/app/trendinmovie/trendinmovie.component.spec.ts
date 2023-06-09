import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendinmovieComponent } from './trendinmovie.component';

describe('TrendinmovieComponent', () => {
  let component: TrendinmovieComponent;
  let fixture: ComponentFixture<TrendinmovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrendinmovieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrendinmovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
