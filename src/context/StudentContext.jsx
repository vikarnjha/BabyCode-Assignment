import { createContext, useContext, useState } from "react";

const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
  const [studentItems, setStudentItems] = useState([]);

  const addToList = (student) => {
    setStudentItems((prev) => [...prev, student]);
  };

  const value = { studentItems,addToList };

  return (
    <StudentContext.Provider value={value}>{children}</StudentContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useStudent = () => useContext(StudentContext);
