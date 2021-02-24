import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutmedbComponent } from './aboutmedb.component';

describe('AboutmedbComponent', () => {
  let component: AboutmedbComponent;
  let fixture: ComponentFixture<AboutmedbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutmedbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutmedbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
