import { About, Contact, Experience, Footer, Header, Navbar, Portfolio, Services, Testimonials } from "Components/Index";
import "./App.css";
 
function App() {
  
  return (
    <div >
      <Header/>
      <Navbar/>
      <About/>
      <Experience/>
      <Services/>
      <Portfolio/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
