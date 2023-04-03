import { createContext, useContext, useState } from "react";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [link,setLink] = useState();
  const [skeleton,setSkeleton]=useState(true)
  const [loader,setLoader]=useState(false)
  const [BranchData,setBranchData]=useState()
  return (
    <Context.Provider
      value={{
       link,setLink,skeleton,setSkeleton,loader,setLoader,BranchData,setBranchData
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);