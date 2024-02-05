import {Routes, Route, Navigate} from 'react-router-dom'
import ColorList from './ColorList';
import Color from './Color';
import AddColor from './AddColor';

function AppRoutes({colors, setColor}) {
  return (
    <Routes>
      <Route exact path="/colors/new" element={<AddColor setColor={setColor}/>}/>
      <Route exact path="/colors/:name" element={<Color colors={colors}/>}/>
      <Route exact path="/colors" element={<ColorList colors={colors}/>}/>
      <Route path="*" element={<Navigate to="/colors" replace/>} />
  </Routes>
  )
}

export default AppRoutes;
