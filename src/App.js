import {Routes, Route} from 'react-router-dom'
import HomePage from './components/HomePage';
import Layout from './components/Layout';
import Drawer from './components/Drawer';
import About from './components/About';
import Contact from './components/Contact';
import LotteryWinners from './components/LotteryWinners';
import Terms from './components/Terms';
import PrivacyPolicy from './components/PrivacyPolicy';
import Admin from './components/Admin';
import NewUser from './components/NewUser';
import EditWinner from './components/EditWinner';
import AdminLogin from './components/AdminLogin';
import RequireAuth from './components/RequireAuth';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout/>} >
        <Route element={<Drawer/>}>
          <Route index element={<HomePage />}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/winners' element={<LotteryWinners/>}/>
          <Route path='/terms' element={<Terms/>}/>
          <Route path='/privacy' element={<PrivacyPolicy/>}/>
          <Route path='/private/page/admin/login' element={<AdminLogin/>}/>
          <Route element={<RequireAuth allowedRoles="1849"/>}>
          <Route path='/admin' element={<Admin/>}/>
          <Route path='/newWinner' element={<NewUser/>}/>
          <Route path='/edit/:reqName/:reqAmount/:reqNationality/:reqId' element={<EditWinner/>}/>
          </Route>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
