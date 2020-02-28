import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EeeComponent } from './eee.component';

describe('EeeComponent', () => {
  let component: EeeComponent;
  let fixture: ComponentFixture<EeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
