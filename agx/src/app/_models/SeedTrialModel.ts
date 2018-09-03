import { Variant, ProductDetail, Season } from ".";

export class SeedTrialModel {
    _id: string;
    //Kutu No
    BoxNo: string;
    /// İşlem Türü
    /// 0 - Demo Girişi
    /// 1 - Demo Çıkışı
    TrCode: number;
    /// Tarih
    Date: Date;
    ///Tür
    CategoryId: string;
    CategoryTitle: string;
    ///Cins
    ProductId:string;
    ProductTitle: string;
    ProductDetail:ProductDetail[];
    ///Çeşit
    VariantId:string;
    VariantTitle: string;
    Variants:Variant[];
    /// Bölge
    Region: string;
    /// E-Numarası
    ENumber: string;
    /// AG Kodu
    AGCode:string;
    /// Lot No
    LotNo: string;
    /// Ambalaj
    Pack: number;
    ///Ana Birim
    MainUnit: string;
    ///Miktar
    Amount: number;
    ///İkinci Birim
    SecondUnit: string;
    ///Katsayı 1
    ConvFact1: number;
    ///Katsayı 2
    ConvFact2: number;
    /// Toplam Miktar;
    TotalAmount:number;
    /// Tohumu Veren    
    Deliverer: string;
    /// Sorumlu
    Responsible: string;
    /// Firma
    Producer: string;
    /// Kargo Numarası
    ShipmentNumber: string;
    /// İthalat Şekli
    ImportMethod: string;
    /// Deneme Yılı
    TrialYear: string;
    /// Sezonu
    /// İB; Y; SB; K
    TrialSeason: string;
    TrialSeasons:Season[];
    /// Çeşidin Statüsü
    /// 1st; 2nd; GT; INTRO
    Status: string;
    ///Ürün Sorumlusu Notu
    ResponsibleNotes: string;
    ///Notlar
    Notes: string;
    ///Sonuç Tarihi
    ResultDate: Date;
    ///Sonuç
    Result: string;
    
}