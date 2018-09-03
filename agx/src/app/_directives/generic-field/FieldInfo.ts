export class FieldInfo {
    constructor(
      public _id?: string,
      public Type?: string,
      public Caption?: string,
      public Value?: any,
      public Options?:any[],
      public IsActive:boolean=true,
      public IsDeleted:boolean=false
    ){
    }    

  }
  