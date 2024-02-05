import './App.css';
import {BrowserRouter} from 'react-router-dom'
import AppRoutes from './AppRoutes';
import AddColor from './hooks/useAddToArray';
function App({INITIAL_COLORS}) {

  const [colors, setColor] = AddColor(INITIAL_COLORS, true);

  return (
    <div className="App">
      <BrowserRouter>
        <AppRoutes colors={colors} setColor={setColor} />
      </BrowserRouter>
    </div>
  );
}

App.defaultProps = {
  INITIAL_COLORS: [
    { 
      colorName: "green",
      colorValue: "#008000"
    },
    { 
      colorName: "red",
      colorValue: "#ff0000"  
    },
    { 
      colorName: "blue",
      colorValue: "#0000ff"
    }, 
  ]
}

export default App;
