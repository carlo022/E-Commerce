import Hero  from './components/Hero.jsx';
import FeaturedProducts from './components/FeaturedProducts.jsx';
import Testimonials from './components/Testimonials.jsx';
import Faq from './components/Faq.jsx';
import { Usetitle } from '../../hooks/Usetitle.jsx';

export const HomePage = () => {
  Usetitle("Happy Shopping");
  return (
    <main>
         <Hero />
         <FeaturedProducts />
         <Testimonials />
         <Faq />
    </main>
  )
};
