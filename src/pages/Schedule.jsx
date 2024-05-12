import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Hero from "./Hero"

const Schedule = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <section id="schedule" className="py-20 bg-slate-50">
        <div className="container">
          <div className="flex items-center justify-center mb-16">
            <div className="max-w-2xl text-center">
              <h5 className="capitalize text-lg  text-gray-800 font-medium mb-2">
                Our <span className="font-semibold text-primary">Schedule</span>
              </h5>
              <h2 className="text-3xl/snug font-bold capitalize text-gray-800 mb-1.5">
                Conference Schedule
              </h2>
              <p className="text-base font-medium text-gray-500 max-w-xl">
                Sed ut perspiciatis unde omnis iste natus error voluptatem
                accusantium doloremque rem aperiam.
              </p>
            </div>
          </div>
          {/* end flex */}
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-6 mb-20">
            <div className="relative border dark:border-gray-700 rounded-lg shadow-lg overflow-hidden bg-no-repeat bg-center bg-cover bg-[url('../images/landing/event/bg.jpg')]">
              <div className="absolute inset-0 bg-black/60" />
              <div className="text-center relative shadow p-10">
                <div className="mb-12">
                  <p className="text-gray-100 font-semibold mb-2">
                    01 January 2020
                  </p>
                  <h4 className="text-2xl font-bold text-white">
                    Designers Meeting
                  </h4>
                </div>
                <div className="mb-8">
                  <h6 className="text-white font-bold italic mb-1">
                    09:00 am - 11:00 am
                  </h6>
                  <p className="text-slate-200 font-medium mb-8">
                    Nam libero not tempore that is cum soluta omnis us
                    repellendus is as temporibus autem quibusdam.
                  </p>
                  <h6 className="text-white font-bold italic mb-1">
                    02:00 pm - 04:00 pm
                  </h6>
                  <p className="text-slate-200 font-medium mb-8">
                    Sed ut perspiciatis unde omnis iste natus doloremque
                    laudantium as aperiam inventore quasi.
                  </p>
                  <h6 className="text-white font-bold italic mb-1">
                    06:00 pm - 08:30 pm
                  </h6>
                  <p className="text-slate-200 font-medium mb-3">
                    Itaque earum as tenetur sapiente delectus aut reiciendis
                    voluptatibus maiores perferendis.
                  </p>
                </div>
                <a
                  href="#price"
                  className="group relative inline-block font-semibold tracking-wide align-middle text-base text-center border-none text-primary hover:text-primary duration-500"
                >
                  <span className="absolute h-px w-7/12 group-hover:w-full transition-all duration-500 rounded bg-primary/80 -bottom-0" />
                  <i className="uil uil-shopping-cart-alt text-xl/none align-middle" />{" "}
                  Buy tickits
                </a>
              </div>
            </div>
            {/* end grid-col */}
            <div className="relative border dark:border-gray-700 rounded-lg shadow-lg overflow-hidden bg-no-repeat bg-center bg-cover bg-[url('../images/landing/event/bg.jpg')]">
              <div className="absolute inset-0 bg-black/60" />
              <div className="text-center relative shadow p-10">
                <div className="mb-12">
                  <p className="text-gray-100 font-semibold mb-2">
                    13 February 2020
                  </p>
                  <h4 className="text-2xl font-bold text-white">Workshops</h4>
                </div>
                <div className="mb-8">
                  <h6 className="text-white font-bold italic mb-1">
                    09:00 am - 11:00 am
                  </h6>
                  <p className="text-slate-200 font-medium mb-8">
                    Temporibu autem quibusdam et aut officiis debitis a rerum
                    necessitatibus saepe repudiandae.
                  </p>
                  <h6 className="text-white font-bold italic mb-1">
                    02:00 pm - 04:00 pm
                  </h6>
                  <p className="text-slate-200 font-medium mb-8">
                    At vero eos et accusamus us dignissimos qui blanditiis
                    praesentium voluptatum deleniti quas.
                  </p>
                  <h6 className="text-white font-bold italic mb-1">
                    06:00 pm - 08:30 pm
                  </h6>
                  <p className="text-slate-200 font-medium mb-3">
                    The wise a therefore always holds in these principle
                    selection a rejects pleasures greater pains.
                  </p>
                </div>
                <a
                  href="#price"
                  className="group relative inline-block font-semibold tracking-wide align-middle text-base text-center border-none text-primary hover:text-primary duration-500"
                >
                  <span className="absolute h-px w-7/12 group-hover:w-full transition-all duration-500 rounded bg-primary/80 -bottom-0" />
                  <i className="uil uil-shopping-cart-alt text-xl/none align-middle" />{" "}
                  Buy tickits
                </a>
              </div>
            </div>
            {/* end grid-col */}
            <div className="relative border dark:border-gray-700 rounded-lg shadow-lg overflow-hidden bg-no-repeat bg-center bg-cover bg-[url('../images/landing/event/bg.jpg')]">
              <div className="absolute inset-0 bg-black/60" />
              <div className="text-center relative shadow p-10">
                <div className="mb-12">
                  <p className="text-gray-100 font-semibold mb-2">
                    24 June 2020
                  </p>
                  <h4 className="text-2xl font-bold text-white">Prestation</h4>
                </div>
                <div className="mb-8">
                  <h6 className="text-white font-bold italic mb-1">
                    09:00 am - 11:00 am
                  </h6>
                  <p className="text-slate-200 font-medium mb-8">
                    These casese are perfectly simple and easy untrammelled when
                    nothing prevents we like best, every.
                  </p>
                  <h6 className="text-white font-bold italic mb-1">
                    02:00 pm - 04:00 pm
                  </h6>
                  <p className="text-slate-200 font-medium mb-8">
                    On the other we denounce with righteous men are beguiled and
                    demoralized of pleasure.
                  </p>
                  <h6 className="text-white font-bold italic mb-1">
                    06:00 pm - 08:30 pm
                  </h6>
                  <p className="text-slate-200 font-medium mb-3">
                    No one rejects, dislikes, or avoids pleasure but because
                    those who do not know extremely painful.
                  </p>
                </div>
                <a
                  href="#price"
                  className="group relative inline-block font-semibold tracking-wide align-middle text-base text-center border-none text-primary hover:text-primary duration-500"
                >
                  <span className="absolute h-px w-7/12 group-hover:w-full transition-all duration-500 rounded bg-primary/80 -bottom-0" />
                  <i className="uil uil-shopping-cart-alt text-xl/none align-middle" />{" "}
                  Buy tickits
                </a>
              </div>
            </div>
            {/* end grid-col */}
          </div>
          {/* Grid End */}
          <div className="flex justify-center items-center mt-14">
            <a
              href="#"
              className="inline-flex items-center justify-center border border-dashed font-semibold border-primary text-primary px-4 py-2 transition-all duration-200 rounded-md hover:bg-primary hover:text-white"
            >
              Download PDF <i data-lucide="download" className="h-5 w-5 ms-2" />
            </a>
          </div>
        </div>
        {/* Container End */}
      </section>
      <Footer/>
    </div>
  )
}

export default Schedule