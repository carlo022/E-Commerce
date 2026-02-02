import Hero  from './components/Hero.jsx';
import ProductCard from '../../components/Elements/ProductCard.jsx';
import FeaturedProducts from './components/FeaturedProducts.jsx';
import Testimonials from './components/Testimonials.jsx';
import Faq from './components/Faq.jsx';

const HomePage = () => {
  return (
    <main>
         <Hero />
         <FeaturedProducts />
         <Testimonials />
         <Faq />
    </main>
  )
};

export default HomePage;