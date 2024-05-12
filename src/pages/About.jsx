import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Hero from "./Hero"

const About = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <section id="about" className="sm:py-20 pt-20 pb-10">
        <div className="container">
          <div className="grid lg:grid-cols-2 grid-cols-1 items-center gap-10">
            <div className="lg:order-2">
              <div className="grid grid-cols-12 items-center gap-6">
                <div className="col-span-5">
                  <img
                    src="public/assets/images/landing/event/speakers/2.jpg"
                    className="max-w-full max-h-full rounded-md"
                    alt=""
                  />
                </div>
                <div className="col-span-7">
                  <img
                    src="public/assets/images/landing/event/event-speakers.jpg"
                    className="max-w-full max-h-full rounded-md"
                    alt=""
                  />
                </div>
              </div>
            </div>
            {/* end grid-col */}
            <div className="lg:me-6">
              <div className="my-auto">
                <h2 className="text-3xl text-gray-800 font-bold mb-4">
                  Welcome to <span className="text-primary">Calo Project.</span>
                </h2>
                <div className="flex flex-col mb-6">
                  <p className="text-lg font-medium text-slate-500 mb-6 pe-2">
                    Temporibus autem quibusdam et aut officiis debitis aut
                    voluptates at rerum molestiae non recusandae earum rerum.
                  </p>
                  <p className="text-base font-medium text-slate-500 mb-2">
                    <i className="uil uil-check-circle text-xl text-primary align-middle me-1" />{" "}
                    Cras ultricies turpis hendrerit fringilla.
                  </p>
                  <p className="text-base font-medium text-slate-500 mb-2">
                    <i className="uil uil-check-circle text-xl text-primary align-middle me-1" />{" "}
                    Maecenas tempus tellus condimentum rhoncus.
                  </p>
                  <p className="text-base font-medium text-slate-500 mb-2">
                    <i className="uil uil-check-circle text-xl text-primary align-middle me-1" />{" "}
                    Donec pede justo fringilla.
                  </p>
                </div>
                <div className="grid grid-cols-2 items-center gap-6 mb-10">
                  <div className="">
                    <div className="h-10 w-10 inline-flex justify-center items-center bg-primary/20 text-primary text-2xl/none rounded-md mb-4">
                      <i data-lucide="map-pin" className="h-6 w-6" />
                    </div>
                    <h6 className="text-lg font-bold mb-1">Where</h6>
                    <p className="text-base font-semibold text-gray-500">
                      3929 Hide Gate A Way Main Road Santa Clara, CA 95054
                    </p>
                  </div>
                  <div className="">
                    <div className="h-10 w-10 inline-flex justify-center items-center bg-primary/20 text-primary text-2xl/none rounded-md mb-4">
                      <i data-lucide="circle-dot-dashed" className="h-6 w-6" />
                    </div>
                    <h6 className="text-lg font-bold mb-1">When</h6>
                    <p className="text-base font-semibold text-gray-500">
                      Saturday to Thursday (09:00 am to 05:00 pm) July 15 to 19,
                      2017
                    </p>
                  </div>
                </div>
                <a
                  href="#"
                  className="group relative inline-block font-semibold tracking-wide align-middle text-base text-center border-none text-primary hover:text-primary duration-500"
                >
                  <span className="absolute h-px w-7/12 group-hover:w-full transition-all duration-500 rounded bg-primary/80 -bottom-0" />
                  Learn More{" "}
                  <i className="uil uil-angle-right text-xl/none align-middle" />
                </a>
              </div>
            </div>
            {/* end grid-col */}
          </div>
          {/* Grid End */}
        </div>
        {/* Container End */}
      </section>
      <Footer/>
    </div>
  )
}

export default About