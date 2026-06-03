import { colorModeContext ,useMode } from "./Theme";
import { CssBaseline,ThemeProvider } from "@mui/material";
import {Routes ,Route} from "react-router-dom"
import TopBar from './scenes/globel/TopBar'
import Dashboard from './scenes/dashboard/Index'
import Team from './scenes/team/Team'
import SideBar from './scenes/globel/SideBar'
import Contacts from './scenes/contects/Contacts'
import Invoices from './scenes/invoices/Invoices'
import Form from './scenes/form/Form'
import Calendar from "./scenes/calendar/Calendar";
import FAQ from './scenes/faq/Faq'
import Bar from './scenes/bar/Bar'
import Pie from './scenes/pie/Pie'
import Line from './scenes/lineChart/LinesChart'

function App() {
  const [theme,colorMode]=useMode();

  return(
  <colorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
      <CssBaseline/>
    <div className="app">
      <SideBar/>
      <main className='content'>
        <TopBar/>
        <Routes>
          <Route path='/' element={<Dashboard/>}></Route>
          <Route path='/team' element={<Team/>} ></Route>
          <Route path='/contacts' element={<Contacts/>}></Route>
          <Route path='/invoices' element={<Invoices/>}></Route>
          <Route path='/form' element={<Form/>}></Route>
          <Route path="/calendar" element={<Calendar />} />
          <Route path='/faq' element={<FAQ/>}></Route>
          <Route path='/bar' element={<Bar/>}></Route>
          <Route path='/pie' element={<Pie/>}></Route>
          <Route path='/line' element={<Line/>}></Route>
          
        </Routes>
      </main>
    </div>
    </ThemeProvider>
  </colorModeContext.Provider>
  )
  
}

export default App