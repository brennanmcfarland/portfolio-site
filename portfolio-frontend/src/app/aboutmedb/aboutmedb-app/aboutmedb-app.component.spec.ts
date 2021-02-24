import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutmedbAppComponent } from './aboutmedb-app.component';

describe('AboutmedbAppComponent', () => {
  let component: AboutmedbAppComponent;
  let fixture: ComponentFixture<AboutmedbAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutmedbAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutmedbAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
