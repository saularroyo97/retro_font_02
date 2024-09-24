import 'primereact/resources/themes/lara-light-indigo/theme.css'; //theme
import 'primereact/resources/primereact.min.css'; //core css
import 'primeicons/primeicons.css'; //icons    
import  Rigth  from "./components/Rigth";
import Left from './components/Left';
import "./App.css"  




function App() {
  return (

    <main className='flex justify-center ' >

     <Rigth  />
     <Left  />
     </main>

  );
};

export default App;