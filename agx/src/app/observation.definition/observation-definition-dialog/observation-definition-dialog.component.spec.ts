import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservationDefinitionDialogComponent } from './observation-definition-dialog.component';

describe('ObservationDefinitionDialogComponent', () => {
  let component: ObservationDefinitionDialogComponent;
  let fixture: ComponentFixture<ObservationDefinitionDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObservationDefinitionDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservationDefinitionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
