export class Utils {
    static getProperties(obj: any): string[] {
      const result = [];
      for (let property in obj) {
        if (obj.hasOwnProperty(property) && !property.startsWith('_')) {
          result.push(property);
        }
      }
      return result;
    }   
  }

  export class DynClass {
    someProperty:boolean
  
    constructor( json:string ) {
      const parsedJson:any = JSON.parse( json )
  
      Object.keys( parsedJson ).forEach(
        ( key:string ) => {
          this[ key ] = parsedJson[ key ]
        }
      )
  
      this['someProperty'] = true
    }
  }