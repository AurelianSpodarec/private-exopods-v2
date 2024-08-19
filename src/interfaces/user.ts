export interface IUser {
  _id: string;
  credits: number;
  txn_id: string[];
  is_active: boolean;
  updated_at: string;
  created_at: string;
  email: string;
  email_verified: boolean;
  name: string;
  nickname: string;
  picture: string;
  sub: string;
  __v: number;
}
