/*Components*/
import MainContent from './components/MainContent'
import Sidebar from './components/Sidebar'

/*Styles*/
import './styles/components/app.sass'

function App() {

  return (
    <div id="portfolio">
      <h1>César Daniel</h1>
      <Sidebar />
      <MainContent />
    </div>
  )
}

export default App
