
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Calendar, Shield, Tool, CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';
import { cars } from '@/data/cars';
import CarCard from '@/components/CarCard';

const Index = () => {
  // Get 3 featured cars
  const featuredCars = cars.slice(0, 3);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center rounded-lg overflow-hidden mb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
          alt="Luxury car on the road" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="container relative z-20 text-white">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold mb-4">Your Long-Term Car Rental Solution</h1>
            <p className="text-xl mb-8">
              Rent quality vehicles for 2+ weeks with better rates for 3+ month commitments.
              No hassle, transparent pricing, and full maintenance support.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/cars">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Browse Cars
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/list-your-car">
                <Button variant="outline" size="lg" className="bg-white/10 backdrop-blur-sm hover:bg-white/20 border-white/20">
                  List Your Car
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">How CarRento Works</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We simplify long-term car rentals with a straightforward process for both car owners and renters
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">1. Choose Your Car</h3>
            <p className="text-gray-600">
              Browse our selection of quality vehicles and select one that fits your needs.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">2. Book Your Dates</h3>
            <p className="text-gray-600">
              Select your rental period (minimum 2 weeks) and delivery preferences.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <CreditCard className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">3. Pay Securely</h3>
            <p className="text-gray-600">
              Complete your payment including the $500 refundable deposit.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">4. Enjoy Your Ride</h3>
            <p className="text-gray-600">
              Pick up your car or have it delivered and enjoy your long-term rental.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Cars Section */}
      <section className="mb-20">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Featured Vehicles</h2>
          <Link to="/cars" className="text-primary font-semibold flex items-center">
            View All <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCars.map(car => (
            <CarCard 
              key={car.id}
              id={car.id}
              title={car.title}
              image={car.image}
              location={car.location}
              pricePerMonth={car.pricePerMonth}
              pricePerWeek={car.pricePerWeek}
              carType={car.carType}
              year={car.year}
              availability={`From ${new Date(car.availableFrom).toLocaleDateString()}`}
              rentalType={car.rentalType}
            />
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="mb-20 bg-gray-50 py-16 px-4 rounded-xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose CarRento</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer unique benefits for both car owners and renters
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Calendar className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Flexible Rental Periods</h3>
                <p className="text-gray-600">
                  Choose from short-term (2 weeks to 3 months) or long-term (3+ months) options with better rates for longer commitments.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Tool className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Maintenance Included</h3>
                <p className="text-gray-600">
                  All maintenance is handled by our service center, ensuring your rental experience is worry-free.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Insurance Coverage</h3>
                <p className="text-gray-600">
                  Comprehensive insurance coverage for peace of mind during your rental period.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <CreditCard className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Transparent Pricing</h3>
                <p className="text-gray-600">
                  No hidden fees or surprises. Pay only for what you see, with clear pricing structures.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Check className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Quality Assured</h3>
                <p className="text-gray-600">
                  All vehicles undergo rigorous inspection before being listed to ensure top quality.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <ArrowRight className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Delivery Options</h3>
                <p className="text-gray-600">
                  Choose between free self-pickup or convenient door-to-door delivery for an additional fee.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mb-8 bg-primary text-white rounded-lg p-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Browse our selection of quality vehicles and find the perfect long-term rental for your needs.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/cars">
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              Browse Cars
            </Button>
          </Link>
          <Link to="/register">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              Create Account
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
