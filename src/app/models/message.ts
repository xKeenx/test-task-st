
export class Message {

  public theme_id:string
  public user_id:string|undefined

  public text:string
  public _id?:string
  constructor(data:IMessage) {
    this.theme_id = data.theme_id
    this.user_id = data.user_id
    this.text = data.text
    this._id = data._id
  }
}

export interface IMessage{
  theme_id:string,
  user_id:string|undefined,
  text:string,
  _id?:string
}
