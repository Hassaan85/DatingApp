import { Photo } from "./photo";

export interface Member {
  id:number;
  userName:string;
  photoUrl:string;
  age:string;
  knownAs:string;
  created:Date;
  lastActive:string;
  gender:string;
  introduction:string;
  lookingfor:string;
  interests:string;
  city:string;
  country:string;
  photo:Photo[];
}