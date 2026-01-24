import Hero  from './components/Hero.jsx';
import ProductCard from '../../components/Elements/ProductCard.jsx';
import Testimonials from './components/Testimonials.jsx';

const HomePage = () => {
  return (
    <main>
         <Hero />
         <ProductCard />
         <Testimonials />
    </main>
  )
};

export default HomePage;