import './css/style.css';
import Header from './component/header';
import Bestseller from './component/bestseller';
import Blog from './component/Blog';
import Customers from './component/Customers';
import Banner from './component/Banner';
import Category from './component/Category';
import ReadMore from './component/ReadMore';

function App() {
  return (
    <div>
        <Header/>
        <Banner/>
        <Bestseller/>
        <Category/>
        <ReadMore/>
        <Blog/>
        <Customers/>
    </div>
   
  );
}

export default App;
