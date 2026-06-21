import Image from "next/image";
import Link from "next/link";
import { 
  PhoneCall, 
  ChevronRight,
  Clock,
  ShieldCheck,
  Star
} from "lucide-react";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen font-sans text-stone-800 bg-white">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-stone-900 h-[600px] md:h-[700px] flex items-center justify-center">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="https://i.postimg.cc/5t4d0sgP/herobackground.jpg"
            alt="Hydroseeding site"
            fill
            sizes="100vw"
            className="object-cover"
            referrerPolicy="no-referrer"
            priority
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative mt-8 md:mt-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 flex flex-col items-center text-center">
          <div className="relative w-[576px] max-w-full h-[180px] sm:h-[240px] md:w-[1200px] md:h-[400px] mb-0 sm:mb-2 md:mb-6">
            <Image
              src="https://i.postimg.cc/26bDR2C1/Joe-Wargo-Logo.png"
              alt="Mountain Valley Hydroseeding Logo"
              fill
              sizes="(max-width: 768px) 100vw, 1200px"
              className="object-contain drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)]"
              referrerPolicy="no-referrer"
              priority
            />
          </div>
          <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white mb-10 md:mb-14 tracking-widest drop-shadow-lg uppercase text-center px-2 sm:px-0 mx-[-10px] sm:mx-0">
            Proudly Serving The Flathead <br className="block sm:hidden" /> Community Since 1989
          </h2>
          <a 
            href="tel:+14067524548" 
            className="bg-white hover:bg-stone-100 text-[#08520e] px-10 py-4 rounded-full font-bold text-lg text-center transition-all flex items-center justify-center gap-2 shadow-xl hover:scale-105"
          >
            <PhoneCall className="w-5 h-5 text-[#08520e]" /> Call Now
          </a>
        </div>
      </section>

      {/* Gallery & Description Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-6">Expert Hydroseeding Installation for a Perfect Lawn – <span className="text-[#009961]">See the Difference!</span></h2>
          <p className="text-lg text-stone-600 max-w-3xl mx-auto mb-16">
            Our hydroseeding installation process ensures even growth and deep roots without the premium price of sod. Browse the gallery below to see some of our recent installations.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "https://i.postimg.cc/PqCbmwtK/P9280632.jpg",
              "https://i.postimg.cc/5t4d0sgP/herobackground.jpg",
              "https://i.postimg.cc/dVmcwb2r/Joe-Wargo-Photo-8.jpg",
              "https://i.postimg.cc/VNfQ6Kgg/Joe-Wargo-Photo-11.jpg",
              "https://i.postimg.cc/6pNNsWvd/Joe-Wargo-Photo-7.jpg",
              "https://i.postimg.cc/13c1skGn/Joe-Wargo-Photo-9.jpg"
            ].map((src, idx) => (
              <div key={idx} className="relative h-64 rounded-xl overflow-hidden group shadow-md">
                <Image
                  src={src}
                  alt={`Hydroseeding gallery image ${idx + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-[#08520e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#ffbe3f] font-bold tracking-widest uppercase text-sm mb-4">SERVICES</p>
            <h2 className="text-3xl md:text-5xl font-bold text-white">Complete Installation Solutions for Results That Last</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-2xl shadow-xl flex flex-col">
              <h3 className="text-2xl font-bold text-[#08520e] mb-4">Hydroseeding</h3>
              <p className="text-stone-600 mb-8 flex-grow leading-relaxed">
                A specialized application technique that distributes a nutrient-dense slurry of seed and mulch for accelerated germination and consistent, uniform growth.
              </p>
              <a href="/services" className="text-[#009961] font-bold uppercase tracking-wide flex items-center hover:text-[#08520e] transition-colors">
                Learn More <ChevronRight className="w-5 h-5 ml-1" />
              </a>
            </div>

            <div className="bg-white p-10 rounded-2xl shadow-xl flex flex-col">
              <h3 className="text-2xl font-bold text-[#08520e] mb-4">Finish Grading</h3>
              <p className="text-stone-600 mb-8 flex-grow leading-relaxed">
                A precision-leveling process that refines the soil surface and removes debris to ensure maximum seed-to-soil contact for deep, stable root establishment.
              </p>
              <a href="/services" className="text-[#009961] font-bold uppercase tracking-wide flex items-center hover:text-[#08520e] transition-colors">
                Learn More <ChevronRight className="w-5 h-5 ml-1" />
              </a>
            </div>

            <div className="bg-white p-10 rounded-2xl shadow-xl flex flex-col">
              <h3 className="text-2xl font-bold text-[#08520e] mb-4">Natural Restoration</h3>
              <p className="text-stone-600 mb-8 flex-grow leading-relaxed">
                A service that utilizes hydroseeding or dry seeding for pastures and property borders to promote native vegetation and sustainable land cover.
              </p>
              <a href="/services" className="text-[#009961] font-bold uppercase tracking-wide flex items-center hover:text-[#08520e] transition-colors">
                Learn More <ChevronRight className="w-5 h-5 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#009961] mb-6 leading-tight">
              Why Choose Mountain Valley Hydroseeding?
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-[#08520e] flex items-center justify-center mb-6 shadow-lg">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-2xl font-bold text-stone-900 mb-4">35+ Years Of Experience</h3>
              <p className="text-stone-600 leading-relaxed">
                Built on decades of hard work, we provide the Flathead Valley with the honest, local reliability your property deserves.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-[#08520e] flex items-center justify-center mb-6 shadow-lg">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-2xl font-bold text-stone-900 mb-4">Satisfaction Guaranteed</h3>
              <p className="text-stone-600 leading-relaxed">
                This guarantee remains in effect when our provided post-installation maintenance steps are followed as directed.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-[#08520e] flex items-center justify-center mb-6 shadow-lg">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-2xl font-bold text-stone-900 mb-4">Happy Customers</h3>
              <p className="text-stone-600 leading-relaxed">
                Since 1989 our clients have trusted us for reliable and professional services, proven by our outstanding reputation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 bg-[#08520e] text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-10">Give Us A Call Today For A Free Estimate!</h2>
          <a 
            href="tel:+14067524548" 
            className="inline-flex items-center justify-center bg-white hover:bg-stone-100 text-[#08520e] px-12 py-5 rounded-full font-bold text-xl transition-all shadow-xl hover:scale-105"
          >
            <PhoneCall className="w-6 h-6 mr-3" /> Call Now
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#08520e] py-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-white/70 text-sm">
            &copy; {new Date().getFullYear()} Mountain Valley Hydroseeding. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
