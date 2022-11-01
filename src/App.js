import { Routes, Route } from 'react-router-dom';
import NavigationBar from './routes/navigation/navigation.component.jsx';
import Home from './routes/home/home.component.jsx';
import Shop from './routes/shop/shop.component.jsx';

function App(){
  return(
    <Routes>
      <Route path='/' element={<NavigationBar />}>
        <Route index element={<Home />} />
        <Route path='/shop' element={<Shop />} />
      </Route>
    </Routes>
  )
}

export default App;