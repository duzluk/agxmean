import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeedInputDialogComponent } from './seedinputdialog.component';

describe('SeedinputdialogComponent', () => {
  let component: SeedInputDialogComponent;
  let fixture: ComponentFixture<SeedInputDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeedInputDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeedInputDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
