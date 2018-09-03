import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeedTrialComponent } from './seed.trial.component';

describe('Seed.TrialComponent', () => {
  let component: SeedTrialComponent;
  let fixture: ComponentFixture<SeedTrialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeedTrialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeedTrialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
