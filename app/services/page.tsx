import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { ChevronRight, PhoneCall, CheckCircle } from "lucide-react";

export default function Services() {
  return (
    <div className="min-h-screen font-sans text-stone-800 bg-white flex flex-col">
      {/* Navigation */}
      <Navbar />

      {/* Hero Banner */}
      <header className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-[#08520e]">
        <div className="absolute inset-0">
          <Image
            src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/EhtxBchNxGDPYyPgjTg9/media/69b1af06584eaa1d05410bb1.jpeg"
            alt="Services Background"
            fill
            sizes="100vw"
            className="object-cover opacity-30 mix-blend-overlay"
            referrerPolicy="no-referrer"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 flex flex-col items-center justify-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white uppercase tracking-wider drop-shadow-md">
            Our Services
          </h1>
        </div>
      </header>

      {/* Services Content */}
      <div className="flex-grow">
        <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16">
            
            {/* Service 1: Hydroseeding */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative w-full h-[350px] md:h-[450px] rounded-xl overflow-hidden shadow-2xl border-4 border-stone-100">
                <Image
                  src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/EhtxBchNxGDPYyPgjTg9/media/69b3280500505156f93825e5.jpeg"
                  alt="Hydroseeding"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-[#08520e]">Hydroseeding</h2>
                <div className="w-20 h-2 bg-[#ffbe3f] rounded-full"></div>
                <p className="text-lg md:text-xl text-stone-600 font-medium leading-relaxed">
                  Hydroseeding is a specialized application technique that distributes a nutrient-dense slurry of seed, mulch, and fertilizer for accelerated germination and consistent, uniform growth over large areas. Highly cost-effective and efficient for commercial or residential properties.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-[#009961] mr-3 flex-shrink-0" />
                    <span className="text-stone-700 text-lg font-medium">Faster, thicker weed-resistant growth</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-[#009961] mr-3 flex-shrink-0" />
                    <span className="text-stone-700 text-lg font-medium">Exceptional erosion control capabilities</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-[#009961] mr-3 flex-shrink-0" />
                    <span className="text-stone-700 text-lg font-medium">Fraction of the cost of traditional sod</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Service 2: Finish Grading */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 space-y-6">
                <h2 className="text-4xl font-bold text-[#08520e]">Finish Grading</h2>
                <div className="w-20 h-2 bg-[#ffbe3f] rounded-full"></div>
                <p className="text-lg md:text-xl text-stone-600 font-medium leading-relaxed">
                  A precision-leveling process that refines the soil surface and removes debris to ensure maximum seed-to-soil contact for deep, stable root establishment. Proper grading directs water safely away from foundations and prepares the optimal canvas for seeding.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-[#009961] mr-3 flex-shrink-0" />
                    <span className="text-stone-700 text-lg font-medium">Essential for water drainage management</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-[#009961] mr-3 flex-shrink-0" />
                    <span className="text-stone-700 text-lg font-medium">Removes debris, rocks, and hard clumps</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-[#009961] mr-3 flex-shrink-0" />
                    <span className="text-stone-700 text-lg font-medium">Creates the perfect smooth, ready-to-seed bed</span>
                  </li>
                </ul>
              </div>
              <div className="order-1 lg:order-2 relative w-full h-[350px] md:h-[450px] rounded-xl overflow-hidden shadow-2xl border-4 border-stone-100 bg-[#08520e]/10">
                <Image
                  src="https://i.postimg.cc/6pNNsWvd/Joe-Wargo-Photo-7.jpg"
                  alt="Finish Grading"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Service 3: Natural Restoration */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative w-full h-[350px] md:h-[450px] rounded-xl overflow-hidden shadow-2xl border-4 border-stone-100 bg-stone-200">
                {/* Fallback color if no specific image is available */}
                <div className="absolute inset-0 flex items-center justify-center text-stone-400">
                   <Image
                    src="https://i.postimg.cc/P5C73NKf/tmpw5kavcn8.webp"
                    alt="Natural Restoration"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-[#08520e]">Natural Restoration</h2>
                <div className="w-20 h-2 bg-[#ffbe3f] rounded-full"></div>
                <p className="text-lg md:text-xl text-stone-600 font-medium leading-relaxed">
                  A targeted service that utilizes specialized hydroseeding or dry seeding for pastures, property borders, and distressed land. We focus on returning land to its natural state, promoting native vegetation and sustainable land cover.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-[#009961] mr-3 flex-shrink-0" />
                    <span className="text-stone-700 text-lg font-medium">Re-establishment of native grasses</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-[#009961] mr-3 flex-shrink-0" />
                    <span className="text-stone-700 text-lg font-medium">Ideal for wild-land interface perimeters</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-[#009961] mr-3 flex-shrink-0" />
                    <span className="text-stone-700 text-lg font-medium">Fast stabilization of disturbed soils</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Service 4: Snow Removal */}
            <div className="bg-[#08520e]/5 p-8 md:p-12 rounded-2xl border-4 border-stone-100 space-y-6 relative overflow-hidden">
              <div className="inline-block px-4 py-2 bg-white text-stone-500 font-bold text-sm tracking-widest uppercase rounded-full shadow-sm border border-stone-200 mb-2">
                [ SEASONAL SERVICE ]
              </div>
              <h2 className="text-4xl font-bold text-[#08520e]">Snow Removal</h2>
              <div className="w-20 h-2 bg-[#ffbe3f] rounded-full"></div>
              <p className="text-lg md:text-xl text-stone-600 font-medium leading-relaxed max-w-4xl">
                We offer a seasonal snow plowing service in the East Flathead Valley for residential properties and subdivision associations.
              </p>
            </div>

          </div>
        </section>

        {/* CTA Banner */}
        <section className="bg-stone-100 py-20 border-t-2 border-stone-200">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h3 className="text-3xl font-bold text-[#08520e] mb-6">Ready to Transform Your Landscape?</h3>
            <p className="text-stone-600 text-xl font-medium mb-10">Give us a call today to get your free estimate and secure your spot on our list for the season.</p>
            <a 
              href="tel:+14067524548"
              className="inline-flex bg-[#009961] hover:bg-[#08520e] text-white px-10 py-5 rounded-full font-bold text-xl text-center transition-all items-center gap-3 shadow-xl hover:scale-105"
            >
              <PhoneCall className="w-6 h-6" /> Call Now
            </a>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-[#08520e] py-8 border-t border-white/10 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-white/70 text-sm font-medium">
            &copy; {new Date().getFullYear()} Mountain Valley Hydroseeding. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
