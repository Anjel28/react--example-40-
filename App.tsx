import React from 'react';
//import ChatComponent from './components/ChatComponent';
//import Counter from './components/Counter';
//import Userprofile from './components/Userprofile';
//import DropdownMenu from './components/Dropdownmenu';
//import Anjel from './components/Anjel';
//import Dairy from './components/Dairy';
//import Rims from './components/Rims';
//import ProductDetails from './components/ProductDetails'
//import  Cart from './components/Cart';
//import Dashboard from './components/Dashboard';
//import CafeSpecial from './components/CafeSpecial';
//import UserDashboard from './components/UserDashboard';
//import Searchbar from './components/Searchbar';
//import LoginForm from './components/LoginForm';
//import ChatBox from './components/ChatBox';
//import VideoPlayer from './components/VideoPlayer';
//import RenderCounter from './components/RenderCounter';
//import ThemeProvider from './components/ThemeProvider';
//import   Header  from './components/Header';
//import { ThemeContext, Theme } from './components/ThemeContexts';
//import DashBoards from './components/DashBoards';
//import MeterDisplay from './components/MeterDisplay';
//import MeterControl from './components/MeterControl';
//import MeterProvider from './components/MeterContext';
//import { HouseSelector } from './components/HouseSelector';
//import { HouseDetails }  from './components/HouseDetails';
//import HouseProvider from './components/HouseContext';
//import House from './components/House';
//import UserCard from './components/UserCard';
//import TypingTest from './components/TypingTest';
//import Elevator from './components/Elevator';
//import ShoopingBasket from './components/ShoopingBasket';
//import UserList from './components/UserList';
//import SongPlaylist  from './components/SongPlaylist';
//import ClassRoom from './components/ClassRoom';
//import RoomControl from './components/RoomControl';
//import  Parent from './components/Parent';
//import Form from './components/Form';
//import Preview from './components/Preview';,
import Quiz from './components/Quiz';


//interface UserData {
  //name: string;
  //email: string;
//}

const App:React.FC=()=>{

 //const [userData, setUserData] = useState<UserData>({
   // name: '',
    //email: '',
  //});
  

 // const [theme, setTheme] = useState<Theme>('light');
 //const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
   // const { name, value } = e.target;
    //setUserData(prevData => ({
      //...prevData,
     // [name]: value,
    //}));
  //};

  return(
    <>

    <Quiz />
   {/* <div>
      <h1>State Lifting Example</h1>
      <Form 
        userData={userData} // Current data for initial value
        onInputChange={handleInputChange} 
      />
       <hr />
         <Preview data={userData} />
    </div>*/}
    {/*<Parent />*/}
   {/* <RoomControl />*/}
    {/*<ClassRoom />*/}
    {/*<SongPlaylist/>*/}
    {/*<UserList/>*/}
    {/*<ShoopingBasket/>*/}
   {/* <Elevator />*/}
 {/*  <TypingTest/>*/}
{/*<UserCard name="Anjel Chaudhary" age={18} isOnline={true}/>
  <UserCard name="Anjali Kumari" age={38} isOnline={false}/>*/}
    
    {/*<House address="near medical store" rooms={4}/>*/}
    {/*<HouseProvider>
    <HouseSelector />
    <HouseDetails />
  </HouseProvider>*/}
    {/*<MeterProvider>
     <div>
      <h1>House Meter</h1>
      <MeterControl />
      <MeterDisplay/>
     </div>
    </MeterProvider>*/}
    {/* <ThemeContext.Provider value={theme}>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Toggle Theme
      </button>
      <DashBoards />
    </ThemeContext.Provider>*/}
   {/* <ThemeProvider>
      <Header />
    </ThemeProvider>*/}
    {/*<RenderCounter/>*/}
    {/*<VideoPlayer />*/}
   {/* <ChatBox/>*/}
    {/*<LoginForm />*/}
    {/*<Searchbar />*/}
    {/*<ChatComponent />*/}
   {/* <UserDashboard/>*/}
    {/*<CafeSpecial/>*/}
    {/*<Dashboard/>*/}
    {/*<Cart Name="Laptop" Price={999.99} /> */}

{/*<ProductDetails />*/}
    {/*<Rims />*/}
   {/* <Dairy />*/}
   {/* <Anjel />*/}
    {/*<DropdownMenu/>*/}
    {/*<Userprofile />*/}
   {/* <Counter /> */}
    </>
  )
}

export default App;