import { ProductDetail, Variant } from ".";

export class SeedInputModel {
    _id: string;
    /// İşlem Türü
    /// 0 - Demo Girişi
    /// 1 - Demo Çıkışı
    TrCode: string;    
    //Kutu No
    BoxNo: string;
    /// Tarih
    Date: Date;
    ///Tür
    CategoryId: string;
    CategoryTitle: string;
    ///Cins
    ProductId:string;
    ProductTitle: string;
    ProductDetail:ProductDetail[]=[];
    ///Çeşit
    VariantId:string;
    VariantTitle: string;
    Variants:Variant[];
    /// Bölge
    Region: string="";
    /// E-Numarası
    ENumber: string;
    // AG Kodu
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
    Deliverer: string="";
    /// Sorumlu
    Responsible: string="";
    /// Firma
    Producer: string;
    /// Kargo Numarası
    ShipmentNumber: string;
    /// Adres
    Address:string;
    ///Notlar
    Notes: string;
}