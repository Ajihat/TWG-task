export interface User {
  email: String;
  firstName: String;
  id: string;
  lastName: string;
  role: string;
}

export interface SingleRoom {
  id: string;
  name: string;
}

export interface Message {
  id: string;
  body: string;
  insertedAt: string;
  user: User;
}

export type RootStackParamList = {
  Home: undefined;
  Chat: {
    roomId: string;
    roomName: string;
  };
};
