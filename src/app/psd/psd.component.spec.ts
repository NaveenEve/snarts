import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PsdComponent } from './psd.component';

describe('PsdComponent', () => {
  let component: PsdComponent;
  let fixture: ComponentFixture<PsdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PsdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PsdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
