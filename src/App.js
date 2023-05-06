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
import ProductList from './component/Product/ProductList';
// import Filter from './component/Product/Filter';

import {
  // BrowserRouter as Router,
  BrowserRouter,
  Routes,
  Route,
  HashRouter
 
} from "react-router-dom";
import Product from './component/Product/Product';



function App() {
  return (
    <div>
      <HashRouter>
        <Header/>
        <Routes>
        <Route  exact path="/books" element={<Product/>}/>
        <Route  exact path="/" element={[<Banner/>,<Bestseller/>,<Category/>,<Bestseller/>,<ReadMore/>,<Newsletter/>,<Blog/>,<Customers/>]}/>

       
        {/* <Banner/>
        <Bestseller/>
        <Category/>
        <Bestseller/>
        <ReadMore/>
        <Newsletter/>
        <Blog/>
        <Customers/> */}
        </Routes>
        <Footer/>

        </HashRouter>
    </div>
   
  );
}

export default App;
