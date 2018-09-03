import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeasonDialogComponent } from './season-dialog.component';

describe('SeasonDialogComponent', () => {
  let component: SeasonDialogComponent;
  let fixture: ComponentFixture<SeasonDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeasonDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeasonDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
