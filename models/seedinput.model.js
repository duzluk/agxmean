const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SeedInputSchema = new Schema({
    //Kutu No
    BoxNo: String,
    /// İşlem Türü
    /// 0 - Demo Girişi
    /// 1 - Demo Çıkışı
    TrCode: String,
    /// Tarih
    Date: { type: Date, default: Date.now },
    ///Tür
    CategoryId: Schema.Types.ObjectId,
    CategoryTitle:String,
    ///Cins
    ProductId: Schema.Types.ObjectId,
    ProductTitle:String,
    VariantId: Schema.Types.ObjectId,
    VariantTitle:String,
    /// Bölge
    Region: String,
    /// E-Numarası
    ENumber: String,
    /// AG-Code
    AGCode: String,
    /// Lot No
    LotNo: String,
    /// Ambalaj
    Pack: Number,
    ///Ana Birim
    MainUnit: String,
    ///Miktar
    Amount: Number,
    ///İkinci Birim
    SecondUnit: String,
    ///Katsayı 1
    ConvFact1: Number,
    ///Katsayı 2
    ConvFact2: Number,
    /// Toplam Miktar;
    TotalAmount:Number,
    /// Tohumu Veren    
    Deliverer: String,
    /// Sorumlu
    Responsible: String,
    /// Firma
    Producer: String,
    /// Kargo Numarası
    ShipmentNumber: String,
     ///Notlar
    Notes: String,
     ///Adres
    Address:String
    },
    {
        collection:'SeedInputs'
    });

const SeedInput = mongoose.model('SeedInput', SeedInputSchema);

module.exports = SeedInput;
