import { Injectable } from "@angular/core";
import { LoginViewModel } from "../_models";
import { environment } from "../../environments/environment";
import { GenericService } from "./generic.service";

@Injectable()
export class EnumsMock {
    // user: LoginViewModel;
    // constructor(private userService: GenericService<LoginViewModel>) {
    //     userService.url = `${environment.URLRestFullApi}/users`
    //     userService.getAll()
    //         .subscribe(response => {
    //             this.user = response.find(r => r.username == localStorage.getItem('username'))
    //         })
    // }
    // private getUser(): LoginViewModel {
    //     return this.user
    // }
    /**
     *
     */
    constructor(private userService: GenericService<LoginViewModel>) {

        
    }
   

    getStatus(): string[] {
        return ['1ST', '2ND', 'Intro', 'GT', 'COM'];
    }
    getTrialSeason(): string[] {
        return ['İB', 'Y', 'SB', 'K'];
    }
    getRegion(): string[] {
        return [
            'Antalya Merkez', 'Antalya Yayla', 'Antalya Batı', 'Antalya Doğu',
            'Çukurova', 'Ege', 'Marmara', 'Karadeniz', 'İç Anadolu', 'Doğu Anadolu'

        ];
    }
    getPersonTrCode(): string[] {
        return [
            'Deneme Sorumlusu',
            'Ürün geliştirme sorumlusu',
            'Satış Sorumlusu',
            'Ticari Sorumlu'
        ]
    }

    getGrowerTrCode():string[]{
        return [
            'Üretici','Tüccar','Halci','Bayi'
        ]
    }
    getGrowerFormOfProduction(){
        return[
           'Örtü altı', 'Açık Saha'
        ]
    }
/*

Üretim Alanı /Dekar

Ekleyen kişi default olarak yetkili olacak. 
Bölge Filtresi eklenecek
*/

}

