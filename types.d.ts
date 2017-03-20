export declare interface IGame {
  id?: string;
  name: string;
  owner: string;
  started?: boolean;
  position?: number;
  hidden?: boolean;
  players?: IPlayer[];
}

export declare interface IPlayer {
  id?: string;
  name: string;
  gameId: string;
}
