import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeedCardComponent } from './seed.card.component';

describe('SeedCardComponent', () => {
  let component: SeedCardComponent;
  let fixture: ComponentFixture<SeedCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeedCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeedCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
