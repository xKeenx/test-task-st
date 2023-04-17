export class Theme {
  public name:string
  public id?:number
  constructor(data:Theme) {
    this.name = data.name
    this.id = data.id
  }
}

export interface ITheme{
  name:string,
  id?:number
}
