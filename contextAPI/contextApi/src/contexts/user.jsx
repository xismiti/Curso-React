import { useState, createContext } from "react";

export const UserContext = createContext({});

function UserProvider({ children }) {
  const [alunos, setAlunos] = useState("Sujeito FODA");
  return (
    <UserContext.Provider value={{ alunos, setAlunos }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
