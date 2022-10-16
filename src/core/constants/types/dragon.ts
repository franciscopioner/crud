export type Dragon = {
  id?: string;
  createdAt?: string;
  name: string;
  type: string;
  histories: string;
}

export type Dragons = Dragon[];

export type User = {
  name: string;
  password: string;
}
