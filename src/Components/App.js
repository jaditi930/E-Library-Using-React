import '../Css/App.css';
import '../Css/nav.css';
import '../Css/footer.css';
import '../Css/SemesterList.css'
import '../Css/Pbooks.css'
import '../Css/SemesterWise.css'
import Home from './Home';
import NavBar from './NavBar';
import Footer from './Footer';
import Pbooks from './Pbooks';
import SemesterWise from './SemesterWise';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import SemesterList from './SemesterList';
function App() {
  let content={
    first_year:{
      quantums : ["Artificial Intelligence","Basic Electrical Engineering","Chemistry"],
      notes : []
    },
    second_year:{
      quantums: ["Computer Organization Architecture","Computer System Security","Data Structure"],
      notes : []
    },
    third_year:{
      quantums:["Compiler Design","Computer Networks","Constitution Of India"],
      notes:[]
    },
    fourth_year:{
      quantums:["Artificial Intelligence","Cloud Computing","Renewable Energy Resources","Rural Development"],
      notes:[]
    }
  }
  return (
    <>
    <Router>
    <NavBar/>
    <Routes>
    <Route exact path='/' element={<Home/>}></Route>
    <Route exact path='/semesters' element={<SemesterList/>}></Route>
    <Route exact path='/pbooks' element={<Pbooks/>}></Route>
    <Route exact path='/semesters/semester1&2' element={<SemesterWise title="Sem 1&2" quantum={content.first_year.quantums} notes={content.first_year.notes}/>}></Route>
    <Route exact path='/semesters/semester3&4' element={<SemesterWise title="Sem 3&4" quantum={content.second_year.quantums} notes={content.second_year.notes}/>}></Route>
    <Route exact path='/semesters/semester5&6' element={<SemesterWise title="Sem 5&6" quantum={content.third_year.quantums} notes={content.third_year.notes}/>}></Route>
    <Route exact path='/semesters/semester7&8' element={<SemesterWise title="Sem 7&8" quantum={content.fourth_year.quantums} notes={content.fourth_year.notes}/>}></Route>
    </Routes>
    <Footer/>
    </Router>
    </>
  );
}

export default App;
