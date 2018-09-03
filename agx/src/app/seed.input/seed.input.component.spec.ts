import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeedInputComponent } from './seed.input.component';

describe('SeedInputComponent', () => {
  let component: SeedInputComponent;
  let fixture: ComponentFixture<SeedInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeedInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeedInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
