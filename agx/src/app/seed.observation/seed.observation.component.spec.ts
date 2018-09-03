import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeedObservationComponent } from './seed.observation.component';

describe('Seed.ObservationComponent', () => {
  let component: SeedObservationComponent;
  let fixture: ComponentFixture<SeedObservationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeedObservationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeedObservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
