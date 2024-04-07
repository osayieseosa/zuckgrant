import { createContext, useState,useEffect} from 'react'
import axios from '../api/axios'

const AppContext = createContext({})

export const AppProvider = ({children}) => {
    const companyName = 'Zucker Global Relief Grants'
    const [lotteryWinners, setLotteryWinners] = useState({})
    const [applicants, setApplicants] = useState({})


    const getApplicants = async () => {
      try {
        const response = await axios.get('/apply')
        setApplicants(response.data)
        console.log(response.data)
      } catch (error) {
        console.log(error)
      }
    }
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
        getApplicants()
      }, []);

    return (
    <AppContext.Provider value={{companyName,lotteryWinners,setLotteryWinners, getLotteryWinners, getApplicants, applicants, setApplicants}}>{children}</AppContext.Provider>
    )
}

export default AppContext