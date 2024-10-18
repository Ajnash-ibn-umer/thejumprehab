import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  PhoneCall,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Twitter,
  Activity,
  TrendingUp,
  Hand,
  Dumbbell,
  Shield,
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky pl-3 top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl">The JumpRehab</span>
          </Link>
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <Link
              className="text-sm font-medium hover:underline underline-offset-4"
              href="#about"
            >
              About
            </Link>
            <Link
              className="text-sm font-medium hover:underline underline-offset-4"
              href="#services"
            >
              Services
            </Link>
            <Link
              className="text-sm font-medium hover:underline underline-offset-4"
              href="#contact"
            >
              Contact
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full h-[60vh] relative overflow-hidden">
          <video
            className="absolute top-0 left-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            src="/placeholder.mp4"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl font-bold mb-4">
                Welcome to The JumpRehab
              </h1>
              <p className="text-xl mb-8">
                Specialized Physiotherapy for Athletes
              </p>
              <Button size="lg" asChild>
                <Link href="#contact">Book an Appointment</Link>
              </Button>
            </div>
          </div>
        </section>

        <section id="about" className="py-16 bg-muted p-5">
          <div className="container">
            <h2 className="text-3xl font-bold mb-8 text-center">About Us</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-lg mb-4">
                  The JumpRehab is a specialized physiotherapy clinic dedicated
                  to helping athletes recover from injuries and improve their
                  performance. Our team of expert physiotherapists combines
                  cutting-edge techniques with personalized care to get you back
                  in the game faster and stronger.
                </p>
                <p className="text-lg">
                  With years of experience working with professional athletes
                  and sports teams, we understand the unique challenges faced by
                  athletes of all levels. Our goal is to not only treat your
                  injuries but also to prevent future ones through comprehensive
                  rehabilitation and training programs.
                </p>
              </div>
              <div className="aspect-video rounded-lg overflow-hidden">
                <img
                  src="/p1.jpg?height=400&width=600"
                  alt="Physiotherapist working with an athlete"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="py-16 p-5">
          <div className="container">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Our Services
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: "Sports Injury Rehabilitation", icon: Activity },
                { name: "Performance Enhancement", icon: TrendingUp },
                { name: "Biomechanical Analysis", icon: Activity },
                { name: "Manual Therapy", icon: Hand },
                { name: "Exercise Prescription", icon: Dumbbell },
                { name: "Injury Prevention Programs", icon: Shield },
              ].map((service, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex items-center space-x-2">
                      <service.icon className="h-6 w-6 text-primary" />
                      <CardTitle>{service.name}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Specialized treatment and programs designed to help
                      athletes recover and perform at their best.
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="py-16 bg-gradient-to-b from-background to-muted p-5"
        >
          <div className="container">
            <h2 className="text-3xl font-bold mb-8 text-center">Contact Us</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
                <form className="space-y-4">
                  <div className="flex flex-col space-y-1">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <Input
                      id="name"
                      placeholder="Your Name"
                      className="border-primary"
                    />
                  </div>
                  <div className="flex flex-col space-y-1">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      className="border-primary"
                    />
                  </div>
                  <div className="flex flex-col space-y-1">
                    <label htmlFor="phone" className="text-sm font-medium">
                      Phone
                    </label>
                    <Input
                      id="phone"
                      placeholder="Your Phone Number"
                      className="border-primary"
                    />
                  </div>
                  <div className="flex flex-col space-y-1">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="How can we help you?"
                      className="border-primary"
                      rows={4}
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </div>
              <div className="space-y-4">
                <Card className="bg-primary text-primary-foreground">
                  <CardContent className="flex items-center space-x-4 pt-6">
                    <PhoneCall className="h-6 w-6" />
                    <div>
                      <h3 className="font-semibold">Phone</h3>
                      <p className="text-sm">+91 8089474040</p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-primary text-primary-foreground">
                  <CardContent className="flex items-center space-x-4 pt-6">
                    <Mail className="h-6 w-6" />
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <p className="text-sm">hr@thejumprehab.com</p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-primary text-primary-foreground">
                  <CardContent className="flex items-center space-x-4 pt-6">
                    <MapPin className="h-6 w-6" />
                    <div>
                      <h3 className="font-semibold">Address</h3>
                      <p className="text-sm">
                      physiotherapy and sports rehabilitation Opp: chethupaalam <br />
                      Masjid. Calicut Road, Kottappadi - Malappuram
                      </p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-primary text-primary-foreground">
                  <CardContent className="flex items-center space-x-4 pt-6">
                    <Clock className="h-6 w-6" />
                    <div>
                      <h3 className="font-semibold">Hours</h3>
                      <p className="text-sm">Mon-Fri: 8am-7pm, Sat: 9am-2pm</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-background border-t p-5">
        <div className="container py-8 md:py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#about"
                    className="text-sm text-muted-foreground hover:underline"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#services"
                    className="text-sm text-muted-foreground hover:underline"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contact"
                    className="text-sm text-muted-foreground hover:underline"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-sm text-muted-foreground hover:underline"
                  >
                    Sports Injury Rehab
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-muted-foreground hover:underline"
                  >
                    Performance Enhancement
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-muted-foreground hover:underline"
                  >
                    Injury Prevention
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="text-sm text-muted-foreground">
                  physiotherapy and sports rehabilitation Opp: chethupaalam <br />
                  Masjid. Calicut Road, Kottappadi - Malappuram
                </li>
                <li className="text-sm text-muted-foreground">
                  hr@thejumprehab.com
                </li>
                <li className="text-sm text-muted-foreground">
                  +91 8089474040
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  <Facebook className="h-6 w-6" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link
                  href="https://www.instagram.com/the_jump_rehab/profilecard/?igsh=MWU1aWRibmdxN2Fubg=="
                  className="text-muted-foreground hover:text-foreground"
                >
                  <Instagram className="h-6 w-6" />
                  <span className="sr-only">Instagram</span>
                </Link>
                {/* <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  <Twitter className="h-6 w-6" />
                  <span className="sr-only">Twitter</span>
                </Link> */}
              </div>
            </div>
          </div>
          <div className="mt-8 border-t pt-8 text-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} The JumpRehab. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
