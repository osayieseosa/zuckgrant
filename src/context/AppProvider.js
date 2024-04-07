import { createContext, useState,useEffect} from 'react'
import axios from '../api/axios'

const AppContext = createContext({})

export const AppProvider = ({children}) => {
    const companyName = 'Zucker Global Relief Grants'
    const [lotteryWinners, setLotteryWinners] = useState({})
    const getLotteryWinners = async () => {
        try {
          const response = await axios.get("/lotteryInfo");
          setLotteryWinners(response.data);
        } catch (error) {
          console.log(error);
        }
      };
    useEffect(() => {
        getLotteryWinners();
      }, []);

    return (
    <AppContext.Provider value={{companyName,lotteryWinners,setLotteryWinners, getLotteryWinners}}>{children}</AppContext.Provider>
    )
}

export default AppContext