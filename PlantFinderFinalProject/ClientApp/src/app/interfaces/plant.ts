export interface Plant {
  id: number;
  title: string;
  image: string;
  description: string;
}

export interface MyPlants {
  plantID: number;
  waterCompleted:boolean;
  userID: number;
}

export interface JoinedPlant {
  plantID: number;
  userID: number,
  waterCompleted: boolean;
  title: string;
  image: string;
  description: string;
}

export interface Wishlist {
  
  
  userID: number;
  plantID: number;
}

export interface Users {
  id: number;
  username: string;
  password: string;
  email: string;
  fname: string;
  lname: string;

}
