import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SertchComponent } from './sertch.component';

describe('SertchComponent', () => {
  let component: SertchComponent;
  let fixture: ComponentFixture<SertchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SertchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SertchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
