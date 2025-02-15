"use client";
import NavBar from "./_components/Navbar";
import About from "./_components/About";
import Hero from "./_components/Hero";
import Features from "./_components/Features";
import Story from "./_components/Story";
import Contact from "./_components/Contact";
import Footer from "./_components/Footer";
export default function Home() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <NavBar />
      <Hero />
      <About />
      <Features />
      <Story />
      <Contact />
      <Footer />
    </main>
  );
}
