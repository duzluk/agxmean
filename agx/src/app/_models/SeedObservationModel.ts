import { FieldInfo } from "../_directives/generic-field/FieldInfo";

export class SeedObservationModel {
    _id: string;

    // Tohum
    SeedId: string;
    
    // Alt Segment
    ProductDetailId:string;

    // Çeşit
    VariantId:string;
    Region?: string;
    PersonId?: string;
    GrowerId?:string;
    ObservationLine:any[];// ObservationLine[];

    Form:any[];
    
}
export class ObsrvLine {
    _id?: string;
    Value?: any;
    FieldType?: FieldInfo
}
export class ObservationLine {
    Line: ObsrvLine[];
}

