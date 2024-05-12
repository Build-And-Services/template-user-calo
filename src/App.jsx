import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";

function App() {
  return (
    <div>
      <Navbar/>
      {/* Navbar End */}
      {/* Hero Section Start */}
      <Hero/>
      {/* hero section End */}
      {/* About section start */}
      {/* <About/> */}
      {/* About section End */}
      {/* Schedule section start */}
      {/* <Schedule/> */}
      {/* Schedule section End */}
      {/* Speakers section start */}
      {/* <Artist/> */}
      {/* Speakers section End */}
      {/* Tickets section start */}
      {/* <Ticket/> */}
      {/* Tickets section End */}
      {/* schedules section start */}
      <section className="py-20">
        <div className="container">
          <div className="relative z-30">
            <div className="flex items-center justify-center mb-16">
              <div className="max-w-2xl text-center">
                <h5 className="capitalize text-lg  text-gray-800 font-medium mb-2">
                  Event{" "}
                  <span className="font-semibold text-primary">Schedules</span>
                </h5>
                <h2 className="text-3xl/snug font-bold capitalize text-gray-800 mb-1.5">
                  Management &amp; Schedules
                </h2>
                <p className="text-base font-medium text-gray-500 max-w-xl">
                  Sed ut perspiciatis unde omnis iste natus error voluptatem
                  accusantium doloremque rem aperiam.
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="flex bg-white rounded-lg transition">
                <nav className="flex" aria-label="Tabs" role="tablist">
                  <button
                    type="button"
                    className="hs-tab-active:border-primary hs-tab-active:text-primary border-b-2 py-3 px-8 inline-flex items-center gap-2 bg-transparent text-sm text-gray-500 hover:text-gray-700 font-medium active"
                    id="day-1"
                    data-hs-tab="#day-items-1"
                    aria-controls="day-items-1"
                    role="tab"
                  >
                    <h5 className="text-base">First Day</h5>
                  </button>
                  <button
                    type="button"
                    className="hs-tab-active:border-primary hs-tab-active:text-primary border-b-2 py-3 px-8 inline-flex items-center gap-2 bg-transparent text-sm text-gray-500 hover:text-gray-700 font-medium"
                    id="day-2"
                    data-hs-tab="#day-items-2"
                    aria-controls="day-items-2"
                    role="tab"
                  >
                    <h5 className="text-base">Second Day</h5>
                  </button>
                  <button
                    type="button"
                    className="hs-tab-active:border-primary hs-tab-active:text-primary border-b-2 py-3 px-8 inline-flex items-center gap-2 bg-transparent text-sm text-gray-500 hover:text-gray-700 font-medium"
                    id="day-3"
                    data-hs-tab="#day-items-3"
                    aria-controls="day-items-3"
                    role="tab"
                  >
                    <h5 className="text-base">Third Day</h5>
                  </button>
                </nav>
                {/* end nav-tabs */}
              </div>
            </div>
            {/* end flex */}
            <div className="mt-10">
              <div id="day-items-1">
                <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
                  <div className="bg-white border border-b-2 rounded-lg transition-all duration-500 hover:border-b-primary hover:-translate-y-3">
                    <div className="flex gap-4 p-6 h-full">
                      <div className="text-center">
                        <span className="inline-flex items-center justify-center h-10 w-10 font-semibold rounded-md bg-primary/20 text-primary">
                          16
                        </span>
                        <p className="text-base font-medium">Jun</p>
                      </div>
                      <div className="flex flex-col h-full">
                        <h4 className="text-xl font-bold capitalize text-gray-800 mb-2">
                          Singing event intro
                        </h4>
                        <p className="shrink text-sm font-medium text-slate-500 mb-6">
                          Sed ut perspiciatis unde omnis iste natu sit us
                          voluptatem accusantiumu as doloremque totam rem
                          aperiam.
                        </p>
                        <div className="mt-auto">
                          <a
                            href="#"
                            className="group relative inline-block font-semibold tracking-wide align-middle text-base text-center border-none text-primary hover:text-primary duration-500"
                          >
                            <span className="absolute h-px w-7/12 group-hover:w-full transition-all duration-500 rounded bg-primary/80 -bottom-0" />
                            Read More{" "}
                            <i className="uil uil-angle-right text-xl/none align-middle" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* end grid-cols */}
                  <div className="bg-white border border-b-2 rounded-lg transition-all duration-500 hover:border-b-primary hover:-translate-y-3">
                    <div className="flex gap-4 p-6 h-full">
                      <div className="text-center">
                        <span className="inline-flex items-center justify-center h-10 w-10 font-semibold rounded-md bg-primary/20 text-primary">
                          16
                        </span>
                        <p className="text-base font-medium">Jun</p>
                      </div>
                      <div className="flex flex-col h-full">
                        <h4 className="text-xl font-bold capitalize text-gray-800 mb-2">
                          Conference On User Interface
                        </h4>
                        <p className="shrink text-sm font-medium text-slate-500 mb-6">
                          Sed ut perspiciatis unde omnis iste natu sit us
                          voluptatem accusantiumu as doloremque totam rem
                          aperiam.
                        </p>
                        <div className="mt-auto">
                          <a
                            href="#"
                            className="group relative inline-block font-semibold tracking-wide align-middle text-base text-center border-none text-primary hover:text-primary duration-500"
                          >
                            <span className="absolute h-px w-7/12 group-hover:w-full transition-all duration-500 rounded bg-primary/80 -bottom-0" />
                            Read More{" "}
                            <i className="uil uil-angle-right text-xl/none align-middle" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* end grid-cols */}
                  <div className="bg-white border border-b-2 rounded-lg transition-all duration-500 hover:border-b-primary hover:-translate-y-3">
                    <div className="flex gap-4 p-6 h-full">
                      <div className="text-center">
                        <span className="inline-flex items-center justify-center h-10 w-10 font-semibold rounded-md bg-primary/20 text-primary">
                          16
                        </span>
                        <p className="text-base font-medium">Jun</p>
                      </div>
                      <div className="flex flex-col h-full">
                        <h4 className="text-xl font-bold capitalize text-gray-800 mb-2">
                          Business Conference for professional
                        </h4>
                        <p className="shrink text-sm font-medium text-slate-500 mb-6">
                          Sed ut perspiciatis unde omnis iste natu sit us
                          voluptatem accusantiumu as doloremque totam rem
                          aperiam.
                        </p>
                        <div className="mt-auto">
                          <a
                            href="#"
                            className="group relative inline-block font-semibold tracking-wide align-middle text-base text-center border-none text-primary hover:text-primary duration-500"
                          >
                            <span className="absolute h-px w-7/12 group-hover:w-full transition-all duration-500 rounded bg-primary/80 -bottom-0" />
                            Read More{" "}
                            <i className="uil uil-angle-right text-xl/none align-middle" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* end grid-cols */}
                  <div className="bg-white border border-b-2 rounded-lg transition-all duration-500 hover:border-b-primary hover:-translate-y-3">
                    <div className="flex gap-4 p-6 h-full">
                      <div className="text-center">
                        <span className="inline-flex items-center justify-center h-10 w-10 font-semibold rounded-md bg-primary/20 text-primary">
                          16
                        </span>
                        <p className="text-base font-medium">Jun</p>
                      </div>
                      <div className="flex flex-col h-full">
                        <h4 className="text-xl font-bold capitalize text-gray-800 mb-2">
                          Business World Event Intro
                        </h4>
                        <p className="shrink text-sm font-medium text-slate-500 mb-6">
                          Sed ut perspiciatis unde omnis iste natu sit us
                          voluptatem accusantiumu as doloremque totam rem
                          aperiam.
                        </p>
                        <div className="mt-auto">
                          <a
                            href="#"
                            className="group relative inline-block font-semibold tracking-wide align-middle text-base text-center border-none text-primary hover:text-primary duration-500"
                          >
                            <span className="absolute h-px w-7/12 group-hover:w-full transition-all duration-500 rounded bg-primary/80 -bottom-0" />
                            Read More{" "}
                            <i className="uil uil-angle-right text-xl/none align-middle" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* end grid-cols */}
                  <div className="bg-white border border-b-2 rounded-lg transition-all duration-500 hover:border-b-primary hover:-translate-y-3">
                    <div className="flex gap-4 p-6 h-full">
                      <div className="text-center">
                        <span className="inline-flex items-center justify-center h-10 w-10 font-semibold rounded-md bg-primary/20 text-primary">
                          16
                        </span>
                        <p className="text-base font-medium">Jun</p>
                      </div>
                      <div className="flex flex-col h-full">
                        <h4 className="text-xl font-bold capitalize text-gray-800 mb-2">
                          Digital world event intro
                        </h4>
                        <p className="shrink text-sm font-medium text-slate-500 mb-6">
                          Sed ut perspiciatis unde omnis iste natu sit us
                          voluptatem accusantiumu as doloremque totam rem
                          aperiam.
                        </p>
                        <div className="mt-auto">
                          <a
                            href="#"
                            className="group relative inline-block font-semibold tracking-wide align-middle text-base text-center border-none text-primary hover:text-primary duration-500"
                          >
                            <span className="absolute h-px w-7/12 group-hover:w-full transition-all duration-500 rounded bg-primary/80 -bottom-0" />
                            Read More{" "}
                            <i className="uil uil-angle-right text-xl/none align-middle" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* end grid-cols */}
                </div>
                {/* end grid */}
              </div>
              {/* end day iteam */}
              <div id="day-items-2" className="hidden">
                <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
                  <div className="bg-white border border-b-2 rounded-lg transition-all duration-500 hover:border-b-primary hover:-translate-y-3">
                    <div className="flex gap-4 p-6 h-full">
                      <div className="text-center">
                        <span className="inline-flex items-center justify-center h-10 w-10 font-semibold rounded-md bg-primary/20 text-primary">
                          17
                        </span>
                        <p className="text-base font-medium">Jun</p>
                      </div>
                      <div className="flex flex-col h-full">
                        <h4 className="text-xl font-bold capitalize text-gray-800 mb-2">
                          Business World Event Intro
                        </h4>
                        <p className="shrink text-sm font-medium text-slate-500 mb-6">
                          Sed ut perspiciatis unde omnis iste natu sit us
                          voluptatem accusantiumu as doloremque totam rem
                          aperiam.
                        </p>
                        <div className="mt-auto">
                          <a
                            href="#"
                            className="group relative inline-block font-semibold tracking-wide align-middle text-base text-center border-none text-primary hover:text-primary duration-500"
                          >
                            <span className="absolute h-px w-7/12 group-hover:w-full transition-all duration-500 rounded bg-primary/80 -bottom-0" />
                            Read More{" "}
                            <i className="uil uil-angle-right text-xl/none align-middle" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* end grid-cols */}
                  <div className="bg-white border border-b-2 rounded-lg transition-all duration-500 hover:border-b-primary hover:-translate-y-3">
                    <div className="flex gap-4 p-6 h-full">
                      <div className="text-center">
                        <span className="inline-flex items-center justify-center h-10 w-10 font-semibold rounded-md bg-primary/20 text-primary">
                          17
                        </span>
                        <p className="text-base font-medium">Jun</p>
                      </div>
                      <div className="flex flex-col h-full">
                        <h4 className="text-xl font-bold capitalize text-gray-800 mb-2">
                          Digital world event intro
                        </h4>
                        <p className="shrink text-sm font-medium text-slate-500 mb-6">
                          Sed ut perspiciatis unde omnis iste natu sit us
                          voluptatem accusantiumu as doloremque totam rem
                          aperiam.
                        </p>
                        <div className="mt-auto">
                          <a
                            href="#"
                            className="group relative inline-block font-semibold tracking-wide align-middle text-base text-center border-none text-primary hover:text-primary duration-500"
                          >
                            <span className="absolute h-px w-7/12 group-hover:w-full transition-all duration-500 rounded bg-primary/80 -bottom-0" />
                            Read More{" "}
                            <i className="uil uil-angle-right text-xl/none align-middle" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* end grid-cols */}
                </div>
                {/* end grid */}
              </div>
              {/* end day iteam */}
              <div id="day-items-3" className="hidden">
                <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
                  <div className="bg-white border border-b-2 rounded-lg transition-all duration-500 hover:border-b-primary hover:-translate-y-3">
                    <div className="flex gap-4 p-6 h-full">
                      <div className="text-center">
                        <span className="inline-flex items-center justify-center h-10 w-10 font-semibold rounded-md bg-primary/20 text-primary">
                          18
                        </span>
                        <p className="text-base font-medium">Jun</p>
                      </div>
                      <div className="flex flex-col h-full">
                        <h4 className="text-xl font-bold capitalize text-gray-800 mb-2">
                          Conference On User Interface
                        </h4>
                        <p className="shrink text-sm font-medium text-slate-500 mb-6">
                          Sed ut perspiciatis unde omnis iste natu sit us
                          voluptatem accusantiumu as doloremque totam rem
                          aperiam.
                        </p>
                        <div className="mt-auto">
                          <a
                            href="#"
                            className="group relative inline-block font-semibold tracking-wide align-middle text-base text-center border-none text-primary hover:text-primary duration-500"
                          >
                            <span className="absolute h-px w-7/12 group-hover:w-full transition-all duration-500 rounded bg-primary/80 -bottom-0" />
                            Read More{" "}
                            <i className="uil uil-angle-right text-xl/none align-middle" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* end grid-cols */}
                  <div className="bg-white border border-b-2 rounded-lg transition-all duration-500 hover:border-b-primary hover:-translate-y-3">
                    <div className="flex gap-4 p-6 h-full">
                      <div className="text-center">
                        <span className="inline-flex items-center justify-center h-10 w-10 font-semibold rounded-md bg-primary/20 text-primary">
                          18
                        </span>
                        <p className="text-base font-medium">Jun</p>
                      </div>
                      <div className="flex flex-col h-full">
                        <h4 className="text-xl font-bold capitalize text-gray-800 mb-2">
                          Business Conference for professional
                        </h4>
                        <p className="shrink text-sm font-medium text-slate-500 mb-6">
                          Sed ut perspiciatis unde omnis iste natu sit us
                          voluptatem accusantiumu as doloremque totam rem
                          aperiam.
                        </p>
                        <div className="mt-auto">
                          <a
                            href="#"
                            className="group relative inline-block font-semibold tracking-wide align-middle text-base text-center border-none text-primary hover:text-primary duration-500"
                          >
                            <span className="absolute h-px w-7/12 group-hover:w-full transition-all duration-500 rounded bg-primary/80 -bottom-0" />
                            Read More{" "}
                            <i className="uil uil-angle-right text-xl/none align-middle" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* end grid-cols */}
                  <div className="bg-white border border-b-2 rounded-lg transition-all duration-500 hover:border-b-primary hover:-translate-y-3">
                    <div className="flex gap-4 p-6 h-full">
                      <div className="text-center">
                        <span className="inline-flex items-center justify-center h-10 w-10 font-semibold rounded-md bg-primary/20 text-primary">
                          16
                        </span>
                        <p className="text-base font-medium">Jun</p>
                      </div>
                      <div className="flex flex-col h-full">
                        <h4 className="text-xl font-bold capitalize text-gray-800 mb-2">
                          Singing event intro
                        </h4>
                        <p className="shrink text-sm font-medium text-slate-500 mb-6">
                          Sed ut perspiciatis unde omnis iste natu sit us
                          voluptatem accusantiumu as doloremque totam rem
                          aperiam.
                        </p>
                        <div className="mt-auto">
                          <a
                            href="#"
                            className="group relative inline-block font-semibold tracking-wide align-middle text-base text-center border-none text-primary hover:text-primary duration-500"
                          >
                            <span className="absolute h-px w-7/12 group-hover:w-full transition-all duration-500 rounded bg-primary/80 -bottom-0" />
                            Read More{" "}
                            <i className="uil uil-angle-right text-xl/none align-middle" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* end grid-cols */}
                </div>
                {/* end grid */}
              </div>
              {/* end day iteam */}
            </div>
            <div className="flex justify-center items-center mt-14">
              <a
                href="#"
                className="inline-flex items-center justify-center border border-dashed font-semibold border-primary text-primary px-4 py-2 transition-all duration-200 rounded-md hover:bg-primary hover:text-white"
              >
                Show More Events{" "}
                <i data-lucide="move-right" className="inline h-5 w-5 ms-2" />
              </a>
            </div>
          </div>
        </div>
        {/* Container End */}
      </section>
      {/* schedules section start */}
      {/* blog section start */}
      {/* <AppsPromotion/> */}
      {/* blog section start */}
      {/* location section start */}
      {/* location section End */}
      {/* Footer section start */}
      <Footer/>
      {/* Footer section End */}
      {/* Back To Top Start */}
      <button
        id="back-to-top"
        className="fixed text-xl rounded-full z-10 bottom-5 end-5 h-9 w-9 text-center bg-primary/20 text-primary flex justify-center items-center"
      >
        <i className="uil uil-arrow-up text-base" />
      </button>

    </div>
  );
}

export default App;
