import { Component, OnInit } from '@angular/core';
import { SeedTrialModel, PersonModel } from '../_models';
import { GenericService, EnumsMock } from '../_services';
import { environment } from '../../environments/environment';
import { GenericDataSource } from '../_helpers';

@Component({
  selector: 'app-observation',
  templateUrl: './observation.component.html',
  styleUrls: ['./observation.component.scss'],
  providers: [GenericService, EnumsMock]
})
export class ObservationComponent implements OnInit {

  trial: SeedTrialModel;
  trials: SeedTrialModel[];
  regions: string[];
  region: string = "";
  seasons: string[];
  season: string = "";
  persons: PersonModel[];
  person = new PersonModel();
  dataSource: GenericDataSource | null;
  displayedColumns = ['Responsible', 'CategoryTitle', 'ProductTitle', 'VariantTitle', 'Region','TrialSeason', 'ResultDate', 'Status','Action']

  constructor(
    private trialService: GenericService<SeedTrialModel>,
    private enumsMock: EnumsMock,
    private personService: GenericService<PersonModel>
  ) {
    this.regions = enumsMock.getRegion();
    this.seasons = enumsMock.getTrialSeason();
    personService.url = `${environment.URLRestFullApi}/personsByUser/${localStorage.getItem('username')}`
    personService.getAll()
      .subscribe(response => {
        this.persons = response;
        trialService.url = `${environment.URLRestFullApi}/trialFilter?Responsible=${ this.persons.map(p => { return p.Code }).join(',')}`;
        trialService.getAll()
          .subscribe(response => {
            this.dataSource = new GenericDataSource(response);
          })
      })






  }

  ngOnInit() {
  }

  selectedRowIndex: number = -1;

  highlight(row) {
    this.selectedRowIndex = row.id;
  }

}
