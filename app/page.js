// app/page.js
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-zinc-900 selection:bg-brand-orange selection:text-white">
      {/* Sticky Navigation Bar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Services Section */}
      <Services />
    </main>
  );
}