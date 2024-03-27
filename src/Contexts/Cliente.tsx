import { createContext, useEffect, useState } from "react";
import { api } from "../Axios";

interface IClientContext {
  jobs: any[]
}

interface IClientProviderProps {
  children: React.ReactNode;
}




export const ClientContext = createContext<IClientContext>({} as IClientContext);



export function ClienteContextProvider({ children }: IClientProviderProps) {

  const [jobs,setJobs] = useState([]);

   async function getJobs() {
    await api
      .get("jobs")
      .then((response) => {
        setJobs(response.data)
      })
      .catch((error) => {
        console.warn(error)
      })
      
  };
  
  
  useEffect(() => {
    getJobs()
  })

  return <ClientContext.Provider value={{jobs}}>{children}</ClientContext.Provider>;
}



