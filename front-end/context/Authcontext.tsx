import { createContext } from "react";
type User = {
  about: string;
  avatarImage: string;
  backgroundImage: string;
  createdAt: string;
  id: number;
  name: string;
  socialMEdiaURL: string;
  successMessage: string;
  updatedAt: string;
  userId: number;
};
type AuthContextType = {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
};
export const AuthContext = createContext<AuthContextType>({
  user: null,
  setUser: () => {},
});
