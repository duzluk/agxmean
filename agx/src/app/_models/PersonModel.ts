export class PersonModel{
    _id:string;
    Code:string;
    TrCode:string;
    FirstName:string;
    LastName:string;
    EMail:string;
    GsmNr:string;
    Seeds:PersonSeed[];
    Users:string[];
}
export class PersonSeed
{
    ProductId:string;
    Roll:number;
}