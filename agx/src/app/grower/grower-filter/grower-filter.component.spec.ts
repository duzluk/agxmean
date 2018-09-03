import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrowerFilterComponent } from './grower-filter.component';

describe('GrowerFilterComponent', () => {
  let component: GrowerFilterComponent;
  let fixture: ComponentFixture<GrowerFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrowerFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrowerFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
