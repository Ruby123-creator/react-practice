import './App.css';
import Calculator from './Components/Calculator';
import CounterBtn from './Components/CounterBtn';
import DisableBtn from './Components/DisableBtn';
import ShowHideRender from './Components/ShowHideRender';
import FetchData from './Components/FetchData';
import SearchFilter from './Components/SearchFilter';
import TodoList from './Components/TodoList';
import SortList from './Components/SortList';
import Flames from './Assignments/Flames';
import DropList from './Assignments/DropList';
import Calendar from './Assignments/Calendar';
import StopWatch from './Assignments/StopWatch';
import WeatherApp from './Assignments/WeatherApp';
import FileUpload from './Assignments/FileUpload';
import Drag_Drop from './Assignments/Drag_Drop';
import Home from './Redux(Cart)/Components/Home';
import CustomRoutes from './Redux(Cart)/CustomRoutes';
import Pagintation from './Assignments/Pagintation';
import BMIcalculator from './Components/BMIcalculator';
function App() {
  return (
    <div className="App">
       <Home/>
       <CustomRoutes/>
       <hr />
      <CounterBtn/>
      <hr />
      <Calculator/>
      <hr />
      <DisableBtn/>
      <hr />
      <ShowHideRender/>
      <hr />
      <FetchData/>
      <hr />
      <SearchFilter/>
      <hr />
      <TodoList/>
      <hr />
      <SortList/>
      <hr />
      <Flames/>
      <hr />
      <DropList/>
      <hr />
      <Calendar/>
      <hr />
      <StopWatch/>
      <hr />
      <WeatherApp/>
      <hr />
      <FileUpload/>
      <hr />
      <Drag_Drop/>
      <hr />
      <Pagintation/>
      <hr />
      <BMIcalculator/>
    </div>
  );
}

export default App;
