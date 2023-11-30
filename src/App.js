import './index.css'
import Navigation from "./components/Navigation";
import DigitalBanking from './components/DigitalBanking';
import Services from './components/Services';
import Articles from './components/Articles';
import Footer from './components/Footer';


function App() {
  return (
    <>
      <Navigation />
      <main>
        <DigitalBanking />
        <Services />
        <Articles />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
