export class SpecsContextInterface {

    public name: string = 'Sport';
    public color: string = 'White';
    public interior: string = 'Leather';
    public AirSuspension: boolean = true;
    public engine: string = '3.5L';
    public rims: string = '20 inches';
    public signature: string = 'fast and furious';
    public typeOfWheels: string = 'BBS';
  
  public setName(value:string) : void{
    this.name = value;
  }
  public setColor(value:string) : void{
    this.color = value;
  }
  public setInterior(value:string) : void{
    this.interior = value;
  }
  public setAirSuspension(value:boolean) : void{
    this.AirSuspension = value;
  }
  public setEngine(value:string) : void{
    this.engine = value;
  }
  public setRims(value:string) : void{
    this.rims = value;
  }
  public setSignature(value:string) : void{
    this.signature = value;
  }
  public setTypeOfWeels(value:string) : void{
    this.typeOfWheels = value;
  }
}