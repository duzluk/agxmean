const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SeedTrialSchema = new Schema({
    ///Tür
    CategoryId: String,
    CategoryTitle: String,
    ///Cins
    ProductId: Schema.Types.ObjectId,
    ProductTitle: String,
    VariantId:Schema.Types.ObjectId,
    VariantTitle: String,
    /// E-Numarası
    ENumber: String,
    /// AG-Code
    AGCode: String,
    /// Statüsü
    Status: String,
    /// Bölge
    Region: String,
    /// Deneneceği Sezon
    TrialSeason: String,
    /// Deneneceği Yıl
    TrialYear: String,
    /// Sorumlu
    Responsible: String,
    /// Giriş Çıkış Tarihi 
    Date: { type: Date, default: Date.now },
    /// Ambalaj
    Pack: Number,
    ///Ana Birim
    MainUnit: String,
    ///Miktar
    Amount: Number,
    ///İkinci Birim
    SecondUnit: String,
    ///Toplam Miktar
    TotalAmount: Number,
    /// Tohumu Veren    
    Deliverer: String,
    /// Sorumlu Notları
    ResponsibleNotes :String,
    /// Notlar
    Notes:String,
    /// ÜGS den Beklenen sonuç tarihi
    ResultDate: { type: Date},
    /// Sonuç
    Result:String,
    /// UppId
    UppId:Schema.Types.ObjectId
},
    {
        collection:'SeedTrials'
    });

    SeedTrialSchema.index({ "CategoryId" : 1, "ProductId" : 1, "VariantId" : 1, "Region" : 1, "TrialSeason" : 1  }, { unique : true })

const SeedTrial = mongoose.model('SeedTrial', SeedTrialSchema);

module.exports = SeedTrial;
