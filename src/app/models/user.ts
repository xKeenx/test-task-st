export class User{
  public name:string
  public email:string
  public phone:string
  public _id?:string

  constructor(
    data:IUser
  ) {
    this.name = data.name
    this.email = data.email
    this.phone = data.phone
    this._id = data._id
  }
}

export interface IUser{
   name:string,
   email:string,

   phone:string,
   _id?:string
}
