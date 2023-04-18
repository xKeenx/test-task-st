export class Theme {
  public _id?:number
  public name:string

  constructor(data:Theme) {
    this._id = data._id
    this.name = data.name
  }
}

export interface ITheme{
  _id?:number
  name:string,
}
