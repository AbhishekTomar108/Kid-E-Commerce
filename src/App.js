import './css/style.css';
import './css/responsive.css';
import Header from './component/header';
import Bestseller from './component/bestseller';
import Blog from './component/Blog';
import Customers from './component/Customers';
import Banner from './component/Banner';
import Category from './component/Category';
import ReadMore from './component/ReadMore';
import Newsletter from './component/Newsletter';
import Footer from './component/Footer';

function App() {
  return (
    <div>
        <Header/>
        <Banner/>
        <Bestseller/>
        <Category/>
        <Bestseller/>
        <ReadMore/>
        <Newsletter/>
        <Blog/>
        <Customers/>
        <Footer/>
    </div>
   
  );
}

export default App;
