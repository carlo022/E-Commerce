import Hero  from './components/Hero.jsx';
import FeaturedProducts from './components/FeaturedProducts.jsx';
import Testimonials from './components/Testimonials.jsx';
import Faq from './components/Faq.jsx';

export const HomePage = () => {
  return (
    <main>
         <Hero />
         <FeaturedProducts />
         <Testimonials />
         <Faq />
    </main>
  )
};
