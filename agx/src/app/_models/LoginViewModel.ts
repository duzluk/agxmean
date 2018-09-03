export class LoginViewModel {
    _id:string;
    username: string;
    password: string;
    FirstName:string;
    LastName:string;
    GsmNr:string;
    Email:string;
    Roll:string="";
    Authority:Authority;
}
export class Authority
{
    Persons:string[]=[];
    Modules:string[]=[];
}
