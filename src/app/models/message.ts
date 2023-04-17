import {User} from './user';
import {Theme} from './theme';

export class Message {

  public theme:Theme
  public user:User

  public content:string
  public id?:number
  constructor(data:IMessage) {
    this.theme = data.theme
    this.user = data.user
    this.content = data.content
    this.id = data.id
  }
}

export interface IMessage{
  theme:Theme,
  user:User,

  content:string,
  id?:number
}
