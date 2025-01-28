import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Brush, Home, Building2, PaintBucket, Star, Users, CheckCircle } from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Transform Your Space with Professional Painting
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Expert painting services for residential and commercial properties across the USA
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg">
              Get Free Quote
            </Button>
            <Button size="lg" variant="outline" className="text-lg">
              View Our Work
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We offer a comprehensive range of painting services to meet all your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <Home className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">Interior Painting</h3>
                <p className="text-gray-600">
                  Transform your interior spaces with our expert painting services
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Building2 className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">Exterior Painting</h3>
                <p className="text-gray-600">
                  Enhance your property's curb appeal with durable exterior painting
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <PaintBucket className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">Commercial Services</h3>
                <p className="text-gray-600">
                  Professional painting solutions for businesses and commercial properties
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We take pride in delivering exceptional quality and service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <Star className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Quality Guaranteed</h3>
              <p className="text-gray-600">
                We use premium materials and proven techniques for lasting results
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <Users className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Expert Team</h3>
              <p className="text-gray-600">
                Our skilled painters have years of experience and training
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <CheckCircle className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">100% Satisfaction</h3>
              <p className="text-gray-600">
                We're not happy until you're completely satisfied with our work
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}