import './App.css';
import {Routes, Route, Link} from 'react-router-dom'
import Dashboard from './components/Dashboard';
import Add from './components/Add';
import Edit from './components/Edit';
import ViewOne from './components/ViewOne';
import FileUpload from './components/FileUpload';




function App() {
  return (
    <div className="App">
      
      <div className="App-header">
        
        <Routes>
      <Route path="/" element={<Dashboard/>}></Route>
      <Route path="/add" element={<Add/>}></Route>
      <Route path="/edit/:id" element={<Edit/>}></Route>
      <Route path="/viewOne/:id" element={<ViewOne/>}></Route>
      <Route path="/file" element={<FileUpload/>}></Route>
    </Routes>

      </div>
      








    
    </div>
  );
}

export default App;
