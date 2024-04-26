import {Routes,Route} from 'react-router-dom';
import Upload from "./pages/upload/Upload";
import Dashboard from './pages/dashboard/Dashboard';


const AllRoutes=()=>{
 
    return(
        <>
        <Routes>
            <Route path='/login' />
            <Route path='/register'/>
            <Route exact path='/' element={<Upload/>}/>
            <Route path='/dashboard' element={<Dashboard/>}/>
        </Routes>
        </>
    )

};

export default AllRoutes;