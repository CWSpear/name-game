export declare interface IGame {
  id?: string;
  name: string;
  owner: string;
  position?: number;
  players?: IPlayer[];
}

export declare interface IPlayer {
  id?: string;
  name: string;
  gameId: string;
}
