import { createContext, useContext } from "react";

export const UserCardDetailsContext = createContext();

export const useUserContext = () => {
  return useContext(UserCardDetailsContext);
};

UserCardDetailsContext.displayName = "UserCardDetailsContext";
