import { UserModel } from "../models/UserModel";
import { axiosInstance } from "./indexApi";

export async function getUsers(): Promise<UserModel[]> {
  const response = await axiosInstance.get<UserModel[]>(`users`);
  return response.data;
}
