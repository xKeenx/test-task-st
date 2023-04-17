export class User{
  public name:string
  public email:string
  public phone:string
  public id?:number

  constructor(
    data:IUser
  ) {
    this.name = data.name
    this.email = data.email
    this.phone = data.phone
    this.id = data.id
  }
}

export interface IUser{
   name:string,
   email:string,

   phone:string,
   id?:number
}
