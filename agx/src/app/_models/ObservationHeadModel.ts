import { FieldInfo } from "../_directives/generic-field/FieldInfo";

export class ObservationHead{
    _id:string;
    Code:string;
    Name:string;
    Place:string;
    GenericFields:FieldInfo[]=[];
    IsDeleted:boolean=false;
    IsActive:boolean=true;

}