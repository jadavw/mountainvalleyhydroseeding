import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function About() {
  return (
    <div className="min-h-screen font-sans text-stone-800 bg-white flex flex-col">
      {/* Navigation */}
      <Navbar />

      {/* Hero Banner */}
      <header className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-[#08520e]">
        <div className="absolute inset-0">
          <Image
            src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/EhtxBchNxGDPYyPgjTg9/media/69b1af06584eaa1d05410bb1.jpeg"
            alt="About Us Background"
            fill
            sizes="100vw"
            className="object-cover opacity-30 mix-blend-overlay"
            referrerPolicy="no-referrer"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 flex flex-col items-center justify-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white uppercase tracking-wider drop-shadow-md">
            About Us
          </h1>
        </div>
      </header>

      {/* About Content */}
      <div className="flex-grow">
        <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-16 items-center">
            {/* Text Side */}
            <div className="space-y-6 w-full max-w-3xl">
              <h2 className="text-4xl md:text-5xl font-bold text-[#08520e]">Our Story</h2>
              <div className="w-20 h-2 bg-[#ffbe3f] rounded-full"></div>
              <div className="prose prose-lg md:prose-xl prose-stone text-stone-600 font-medium leading-relaxed">
                <p className="mb-6">
                  <strong className="text-stone-900">
                    Mountain Valley Landscaping
                  </strong>{" "}
                  is a family-owned and operated business that has been a staple
                  of the Flathead Valley since 1989. After years of complete
                  landscape services, we made a strategic shift in 2008 to focus
                  exclusively on Hydroseeding installation.
                </p>
                <p className="mb-6">
                  By narrowing our focus, we’ve mastered the finish grade and
                  the science of the perfect lawn. We don’t try to do
                  everything; we focus on being the best at one thing so our
                  customers get a superior result every time.
                </p>
                <p>
                  Our reputation isn’t built on flashy ads—it’s grown through
                  the honest word-of-mouth of satisfied customers for over 35
                  years.
                </p>
              </div>
            </div>

            {/* Image Side */}
            <div className="relative w-full max-w-5xl h-[400px] md:h-[600px] rounded-xl overflow-hidden shadow-2xl border-4 border-stone-100">
              <Image
                src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/EhtxBchNxGDPYyPgjTg9/media/69b3280500505156f93825e5.jpeg"
                alt="Mountain Valley Landscaping"
                fill
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-[#08520e] py-8 border-t border-white/10 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-white/70 text-sm font-medium">
            &copy; {new Date().getFullYear()} Mountain Valley Hydroseeding. All
            Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
