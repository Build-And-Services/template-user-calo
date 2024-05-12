import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Hero from "./Hero"

const JadiPartner = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <section
        id="blog"
        className="py-20 relative bg-slate-50 bg-cover bg-no-repeat bg-[url('../images/landing/directory/cta-bg.png')]"
      >
        <div className="container">
          <div className="relative z-30">
            <div className="flex items-center justify-center mb-16">
              <div className="max-w-2xl text-center">
                <h5 className="capitalize text-lg  text-gray-800 font-medium mb-2">
                  Event{" "}
                  <span className="font-semibold text-primary">Blogs</span>
                </h5>
                <h2 className="text-3xl/snug font-bold capitalize text-gray-800 mb-1.5">
                  Latest Blog
                </h2>
                <p className="text-base font-medium text-gray-500 max-w-xl">
                  Sed ut perspiciatis unde omnis iste natus error voluptatem
                  accusantium doloremque rem aperiam.
                </p>
              </div>
            </div>
            {/* end flex */}
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                <div className="grid sm:grid-cols-2 grid-cols-1">
                  <div className="relative p-2 h-full w-full overflow-hidden">
                    <img
                      src="public/assets/images/landing/directory/directory/1.jpg"
                      className="w-full h-full rounded-md transition-all duration-700"
                      alt=""
                    />
                    <div className="absolute inset-0 top-auto bottom-5 right-5 left-auto">
                      <i
                        data-lucide="star"
                        className="inline h-4 w-4 fill-amber-300 text-amber-300"
                      />
                      <i
                        data-lucide="star"
                        className="inline h-4 w-4 fill-amber-300 text-amber-300"
                      />
                      <i
                        data-lucide="star"
                        className="inline h-4 w-4 fill-amber-300 text-amber-300"
                      />
                      <i
                        data-lucide="star"
                        className="inline h-4 w-4 fill-amber-300 text-amber-300"
                      />
                      <i
                        data-lucide="star"
                        className="inline h-4 w-4 text-amber-300"
                      />
                    </div>
                  </div>
                  {/* end grid-col */}
                  <div className="p-4">
                    <a
                      href="javascript:void(0);"
                      className="text-lg font-bold mb-2.5"
                    >
                      The Langham-Chicago
                    </a>
                    <p className="text-sm font-medium text-slate-500 mb-10 mt-3">
                      Sed ut perspiciatis unde omnis iste natu sit us voluptatem
                      accusantiumu as doloremque totam rem aperiam.
                    </p>
                    <div className="flex flex-col items-start">
                      <span className="inline-flex items-center bg-primary/20 text-primary text-xs/none font-semibold capitalize rounded mb-2.5 border-s-2 border-primary px-2 py-1.5">
                        $49 Per person
                      </span>
                      <div className="flex items-center justify-center">
                        <img
                          src="public/assets/images/avatars/img-1.png"
                          className="w-10 h-10 rounded-full"
                          alt=""
                        />
                        <h5 className="text-base font-semibold text-slate-800 ps-4">
                          Gina Sanchez
                        </h5>
                      </div>
                    </div>
                  </div>
                  {/* end grid-col */}
                </div>
                {/* end grid */}
              </div>
              {/* end grid-col */}
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                <div className="grid sm:grid-cols-2 grid-cols-1">
                  <div className="relative p-2 h-full w-full overflow-hidden">
                    <img
                      src="public/assets/images/landing/directory/directory/2.jpg"
                      className="w-full h-full rounded-md transition-all duration-700"
                      alt=""
                    />
                    <div className="absolute inset-0 top-auto bottom-5 right-5 left-auto">
                      <i
                        data-lucide="star"
                        className="inline h-4 w-4 fill-amber-300 text-amber-300"
                      />
                      <i
                        data-lucide="star"
                        className="inline h-4 w-4 fill-amber-300 text-amber-300"
                      />
                      <i
                        data-lucide="star"
                        className="inline h-4 w-4 fill-amber-300 text-amber-300"
                      />
                      <i
                        data-lucide="star"
                        className="inline h-4 w-4 fill-amber-300 text-amber-300"
                      />
                      <i
                        data-lucide="star"
                        className="inline h-4 w-4 fill-amber-300 text-amber-300"
                      />
                    </div>
                  </div>
                  {/* end grid-col */}
                  <div className="p-4">
                    <a
                      href="javascript:void(0);"
                      className="text-lg font-bold mb-2.5"
                    >
                      Primland - Meadows of dan
                    </a>
                    <p className="text-sm font-medium text-slate-500 mb-10 mt-3">
                      At vero eos et accusamus et iusto dignissimos ducimus
                      blanaitiis praesentium voluptatum.
                    </p>
                    <div className="flex flex-col items-start">
                      <span className="inline-flex items-center bg-primary/20 text-primary text-xs/none font-semibold capitalize rounded mb-2.5 border-s-2 border-primary px-2 py-1.5">
                        $69 Per person
                      </span>
                      <div className="flex items-center justify-center">
                        <img
                          src="public/assets/images/avatars/img-2.png"
                          className="w-10 h-10 rounded-full"
                          alt=""
                        />
                        <h5 className="text-base font-semibold text-slate-800 ps-4">
                          Joseph Cohen
                        </h5>
                      </div>
                    </div>
                  </div>
                  {/* end grid-col */}
                </div>
                {/* end grid */}
              </div>
              {/* end grid-col */}
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                <div className="grid sm:grid-cols-2 grid-cols-1">
                  <div className="relative p-2 h-full w-full overflow-hidden">
                    <img
                      src="public/assets/images/landing/directory/directory/3.jpg"
                      className="w-full h-full rounded-md transition-all duration-700"
                      alt=""
                    />
                    <div className="absolute inset-0 top-auto bottom-5 right-5 left-auto">
                      <i
                        data-lucide="star"
                        className="inline h-4 w-4 fill-amber-300 text-amber-300"
                      />
                      <i
                        data-lucide="star"
                        className="inline h-4 w-4 fill-amber-300 text-amber-300"
                      />
                      <i
                        data-lucide="star"
                        className="inline h-4 w-4 fill-amber-300 text-amber-300"
                      />
                      <i
                        data-lucide="star"
                        className="inline h-4 w-4 fill-amber-300 text-amber-300"
                      />
                      <i
                        data-lucide="star"
                        className="inline h-4 w-4 text-amber-300"
                      />
                    </div>
                  </div>
                  {/* end grid-col */}
                  <div className="p-4">
                    <a
                      href="javascript:void(0);"
                      className="text-lg font-bold mb-2.5"
                    >
                      The Hay-Adams-Washington
                    </a>
                    <p className="text-sm font-medium text-slate-500 mb-10 mt-3">
                      Et harum quidem rerum facilis set et expedita distinctio.
                      Nam lidero tempore cum soluta nobis.
                    </p>
                    <div className="flex flex-col items-start">
                      <span className="inline-flex items-center bg-primary/20 text-primary text-xs/none font-semibold capitalize rounded mb-2.5 border-s-2 border-primary px-2 py-1.5">
                        $69 Per person
                      </span>
                      <div className="flex items-center justify-center">
                        <img
                          src="public/assets/images/avatars/img-3.png"
                          className="w-10 h-10 rounded-full"
                          alt=""
                        />
                        <h5 className="text-base font-semibold text-slate-800 ps-4">
                          Aaron Johnson
                        </h5>
                      </div>
                    </div>
                  </div>
                  {/* end grid-col */}
                </div>
                {/* end grid */}
              </div>
              {/* end grid-col */}
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                <div className="grid sm:grid-cols-2 grid-cols-1">
                  <div className="relative p-2 h-full w-full overflow-hidden">
                    <img
                      src="public/assets/images/landing/directory/directory/4.jpg"
                      className="w-full h-full rounded-md transition-all duration-700"
                      alt=""
                    />
                    <div className="absolute inset-0 top-auto bottom-5 right-5 left-auto">
                      <i
                        data-lucide="star"
                        className="inline h-4 w-4 fill-amber-300 text-amber-300"
                      />
                      <i
                        data-lucide="star"
                        className="inline h-4 w-4 fill-amber-300 text-amber-300"
                      />
                      <i
                        data-lucide="star"
                        className="inline h-4 w-4 fill-amber-300 text-amber-300"
                      />
                      <i
                        data-lucide="star"
                        className="inline h-4 w-4 fill-amber-300 text-amber-300"
                      />
                      <i
                        data-lucide="star"
                        className="inline h-4 w-4 fill-amber-300 text-amber-300"
                      />
                    </div>
                  </div>
                  {/* end grid-col */}
                  <div className="p-4">
                    <a
                      href="javascript:void(0);"
                      className="text-lg font-bold mb-2.5"
                    >
                      Montage Deer Valley-Utah
                    </a>
                    <p className="text-sm font-medium text-slate-500 mb-10 mt-3">
                      Nemo enim ipsam voluptatem aut odit us fugit sed quia
                      magni dolores aut odit us fugit magni dolores.
                    </p>
                    <div className="flex flex-col items-start">
                      <span className="inline-flex items-center bg-primary/20 text-primary text-xs/none font-semibold capitalize rounded mb-2.5 border-s-2 border-primary px-2 py-1.5">
                        $49 Per person
                      </span>
                      <div className="flex items-center justify-center">
                        <img
                          src="public/assets/images/avatars/img-4.png"
                          className="w-10 h-10 rounded-full"
                          alt=""
                        />
                        <h5 className="text-base font-semibold text-slate-800 ps-4">
                          Sharom Donato
                        </h5>
                      </div>
                    </div>
                  </div>
                  {/* end grid-col */}
                </div>
                {/* end grid */}
              </div>
              {/* end grid-col */}
            </div>
            {/* end grid */}
            <div className="flex justify-center items-center mt-14">
              <a
                href="#"
                className="inline-flex items-center justify-center border border-dashed font-semibold border-primary text-primary px-4 py-2 transition-all duration-200 rounded-md hover:bg-primary hover:text-white"
              >
                Load More{" "}
                <i data-lucide="loader" className="inline h-5 w-5 ms-2" />
              </a>
            </div>
          </div>
        </div>
        {/* Container End */}
      </section>
      <Footer/>
    </div>
    )
}

export default JadiPartner