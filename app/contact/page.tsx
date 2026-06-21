import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { PhoneCall, MapPin, Clock, Mail } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen font-sans text-stone-800 bg-[#f7f7f8] flex flex-col">
      {/* Navigation */}
      <Navbar />

      {/* Hero Banner */}
      <header className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-[#08520e]">
        <div className="absolute inset-0">
          <Image
            src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/EhtxBchNxGDPYyPgjTg9/media/69b1af06584eaa1d05410bb1.jpeg"
            alt="Contact Background"
            fill
            className="object-cover opacity-30 mix-blend-overlay"
            referrerPolicy="no-referrer"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 flex flex-col items-center justify-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white uppercase tracking-wider drop-shadow-md">
            Contact Us
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-grow py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-white rounded-xl shadow-xl shadow-stone-200/50 border-2 border-stone-100 overflow-hidden">
            
            {/* Image Section */}
            <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] w-full border-b-2 border-stone-100 bg-stone-100/50">
               <Image
                  src="https://i.postimg.cc/mkDGz7nQ/69b9c95aad02760a9c5ae5ba.png"
                  alt="Mountain Valley Hydroseeding Equipment"
                  fill
                  sizes="100vw"
                  className="object-cover"
                  referrerPolicy="no-referrer"
                  priority
               />
            </div>

            <div className="grid lg:grid-cols-2">
              
              {/* Contact Info Section */}
              <div className="p-6 sm:p-10 md:p-16 flex flex-col justify-center space-y-10 sm:space-y-12 border-b-2 lg:border-b-0 lg:border-r-2 border-stone-100">
                
                <div className="space-y-4">
                  <h2 className="text-3xl md:text-4xl font-bold text-[#08520e]">Business Information</h2>
                  <div className="w-16 h-1 bg-[#ffbe3f] rounded-full"></div>
                </div>

                <div className="space-y-8">
                  {/* Owner */}
                  <div className="flex items-start">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#08520e]/10 rounded-full flex items-center justify-center flex-shrink-0 mr-4 sm:mr-6">
                      <div className="w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center text-[#009961] font-bold text-lg sm:text-xl">W</div>
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-bold text-stone-400 uppercase tracking-wider mb-1">Owner</div>
                      <p className="text-lg sm:text-xl font-bold text-stone-800">
                        Joe Wargo
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#08520e]/10 rounded-full flex items-center justify-center flex-shrink-0 mr-4 sm:mr-6">
                      <PhoneCall className="w-6 h-6 sm:w-7 sm:h-7 text-[#009961]" />
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-bold text-stone-400 uppercase tracking-wider mb-1">Phone</div>
                      <a href="tel:+14067524548" className="text-xl sm:text-2xl font-bold text-stone-800 hover:text-[#009961] transition-colors whitespace-nowrap">
                        (406) 752-4548
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#08520e]/10 rounded-full flex items-center justify-center flex-shrink-0 mr-4 sm:mr-6">
                      <Mail className="w-6 h-6 sm:w-7 sm:h-7 text-[#009961]" />
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-bold text-stone-400 uppercase tracking-wider mb-1">Email</div>
                      <a href="mailto:mountainvalley@montanasky.net" className="text-[15px] sm:text-lg font-bold text-stone-800 hover:text-[#009961] transition-colors whitespace-nowrap">
                        mountainvalley@montanasky.net
                      </a>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#08520e]/10 rounded-full flex items-center justify-center flex-shrink-0 mr-4 sm:mr-6">
                      <MapPin className="w-6 h-6 sm:w-7 sm:h-7 text-[#009961]" />
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-bold text-stone-400 uppercase tracking-wider mb-1">Location</div>
                      <p className="text-lg sm:text-xl font-bold text-stone-800">
                        Columbia Falls, Montana
                      </p>
                    </div>
                  </div>

                  {/* Licensed & Insured */}
                  <div className="pt-2">
                    <div className="inline-block px-4 py-2 bg-[#08520e]/10 text-[#08520e] font-bold text-sm tracking-widest uppercase rounded-full">
                      Licensed & Insured
                    </div>
                  </div>
                </div>

                <div className="pt-8 text-center border-t border-stone-100">
                  <a 
                    href="tel:+14067524548"
                    className="inline-flex w-full md:w-auto items-center justify-center bg-[#009961] hover:bg-[#08520e] text-white px-10 py-5 rounded-full font-bold text-xl transition-all shadow-xl hover:scale-105"
                  >
                    <PhoneCall className="w-6 h-6 mr-3" /> Call Now
                  </a>
                </div>

              </div>

              {/* Map Section */}
              <div className="relative h-[400px] lg:h-auto w-full bg-stone-100/50">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d173367.62589255677!2d-114.41723507567794!3d48.18859187310574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53665a3962e080eb%3A0xe726cc053530e159!2sFlathead%20Valley!5e0!3m2!1sen!2sus!4v1703273412586!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mountain Valley Hydroseeding Service Area"
                  className="w-full h-full object-cover"
                ></iframe>
              </div>

            </div>

          </div>

        </div>
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
