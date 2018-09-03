export class CompetitorModel {
    _id: string;
    Title: string;
    Incharge: string;
    Incharge2: string;
    Incharge3: string;
    Address: string;
    Country: string;
    City: string;
    District: string;
    TelNrs1: string;
    TelNrs2: string;
    Gsm: string;
    EMail: string;
    IsActive: boolean = true;
    IsDeleted: boolean = false;
    Products: CompetitorProduct[] = [];
}

export class CompetitorProduct {
    _id: string;
    SeedId: string;
    CategoryTitle: string;
    ProductId: string;
    ProductTitle: string;
    Title: string;
    Detail: CompetitorProductDetail[]=[];
}

export class CompetitorProductDetail
{
    _id:string;
    Region:string;
    Season: string;
    Percent: number;
    Trend: number;
}