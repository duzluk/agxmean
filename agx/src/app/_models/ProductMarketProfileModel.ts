import { CompetitorProduct } from "./CompetitorModel";

export class ProductMarketProfileModel {
    _id: string;
    SeedId: string;
    CategoryTitle: string;
    ProductId: string;
    ProductTitle: string;
    TrialSeason: string;
    TrialYear:string;
    Region: string;
    VariantDetail:VariantDetail[];
    Comerical: ComericalDetail[];
    Competitor: CompetitorDetail[];
    MarketInformation: MarketInformation[];
}

export class VariantDetail{
    _id:string;
    VariantId: string;
    VariantTitle: string;
    Status: string;
    Result: string;
    SeedOrder: number;
    ProposedForNextSeason: string;
}

export class ComericalDetail {
    _id:string;
    VariantId: string;
    VariantTitle: string;
    Rate: number;
    Trend: number=0;
}

export class CompetitorDetail {
    _id:string
    CompetitorId:string;
    CompetitorTitle: string="";
    Products:CompetitorProduct[];
    CompetitorProductId:string;
    CompetitorProductTitle: string="";
    Rate: number;
    Trend: number=0;
}
export class MarketInformation {
    _id:string;
    MarketSize: number;
    Baf: number;
    Pack: number;
    MarketValue: number;
}
