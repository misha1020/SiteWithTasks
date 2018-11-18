import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmmaComponent } from './emma.component';

describe('EmmaComponent', () => {
  let component: EmmaComponent;
  let fixture: ComponentFixture<EmmaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmmaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
