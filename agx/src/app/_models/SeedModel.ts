export class SeedModel{
    _id:string;
    GroupCode:string;
    Title:string;
    ProductDetail:ProductDetail[]=[];
    IsActive:boolean=true;
    IsDeleted:boolean=false;
    TableObservationHeadId:string;
    FormObservationHeadId:string;
    Seasons:Season[]=[];
}
export class ProductDetail
{
    _id:string;
    Title:string="";
    IsActive:boolean=true;
    IsDeleted:boolean=false;
    Variant:Variant[]=[];
    TableObservationHeadId:string;
    FormObservationHeadId:string;
    Seasons:Season[]=[];
}

export class Variant
{
    _id:string;
    Title:string;
    MainUnit:string="Adet";
    SecondUnit:string="Paket";
    ConvFact1:number=1;
    ConvFact2:number=1;
    IsActive:boolean=true;
    IsDeleted:boolean=false;
    ENumber:string="";
    AGCode:string="";
    TrialYear:string="";
    Seasons:Season[]=[];
}

export class Season
{
    Season:string="";
    Status:string="";
    Region:string;
}