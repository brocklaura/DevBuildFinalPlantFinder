export interface Plant {
  id: number;
  title: string;
  image: string;
  description: string;
}

export interface MyPlants {
  id: number;
  waterCompleted: boolean;
  userID: number;
}

export interface JoinedPlant {
  id: number;
  title: string;
  image: string;
  description: string;
  waterComplete: boolean;

}

export interface Wishlist {
  id: number;
  userID: number;
}

export interface Users {
  id: number;
  username: string;
  password: string;
  email: string;
  fname: string;
  lname: string;

}
