import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitorDialogComponent } from './competitor-dialog.component';

describe('CompetitorDialogComponent', () => {
  let component: CompetitorDialogComponent;
  let fixture: ComponentFixture<CompetitorDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetitorDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetitorDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
