
import { Navbar, Footer, Transaction, Welcome, Services } from './components'
function App() {
  return (
    <div className="min-h-screen">
      <div className='gradient-bg-welcome'>
        <Navbar />
        <Welcome />
      </div>
      <Services />
      <Transaction />
      <Footer />
    </div>
  )
}

export default App;
