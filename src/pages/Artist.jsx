import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Hero from "./Hero"

const Artist = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <section id="speakers" className="py-20">
        <div className="container">
          <div className="flex items-center justify-center mb-16">
            <div className="max-w-2xl text-center">
              <h5 className="capitalize text-lg  text-gray-800 font-medium mb-2">
                Our <span className="font-semibold text-primary">Speakers</span>
              </h5>
              <h2 className="text-3xl/snug font-bold capitalize text-gray-800 mb-1.5">
                Event Speakers
              </h2>
              <p className="text-base font-medium text-gray-500 max-w-xl">
                Sed ut perspiciatis unde omnis iste natus error voluptatem
                accusantium doloremque rem aperiam.
              </p>
            </div>
          </div>
          {/* end flex */}
          <div className="grid md:grid-cols-12 grid-cols-1 mt-8 gap-[30px]">
            <div className="lg:col-span-3 md:col-span-6">
              <div className="group text-center">
                <div className="relative inline-block mx-auto rounded-lg overflow-hidden">
                  <img
                    src="public/assets/images/landing/event/speakers/1.jpg"
                    className=""
                    alt=""
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black rounded-lg opacity-0 group-hover:opacity-100 duration-500" />
                  <div className="absolute start-0 end-0 -bottom-20 group-hover:bottom-5 duration-500">
                    <ul className="mb-4 space-x-2">
                      <li className="inline-block">
                        <a
                          href=""
                          className="h-10 w-10 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-lg bg-white"
                        >
                          <i
                            data-lucide="facebook"
                            className="h-5 w-5 text-primary fill-primary/25"
                          />
                        </a>
                      </li>
                      <li className="inline-block">
                        <a
                          href=""
                          className="h-10 w-10 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-lg bg-white"
                        >
                          <i
                            data-lucide="instagram"
                            className="h-5 w-5 text-pink-500 fill-pink-500/25"
                          />
                        </a>
                      </li>
                      <li className="inline-block">
                        <a
                          href=""
                          className="h-10 w-10 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-lg bg-white"
                        >
                          <i
                            data-lucide="twitter"
                            className="h-5 w-5 text-sky-500 fill-sky-500/25"
                          />
                        </a>
                      </li>
                    </ul>
                    {/* end social*/}
                    <p className="text-base font-semibold text-white">Singer</p>
                  </div>
                </div>
                <a
                  href=""
                  className="block text-lg font-semibold group-hover:text-primary duration-500 mt-3"
                >
                  John Smith
                </a>
              </div>
            </div>
            {/* end grid-col */}
            <div className="lg:col-span-3 md:col-span-6">
              <div className="group text-center">
                <div className="relative inline-block mx-auto rounded-lg overflow-hidden">
                  <img
                    src="public/assets/images/landing/event/speakers/2.jpg"
                    className=""
                    alt=""
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black rounded-lg opacity-0 group-hover:opacity-100 duration-500" />
                  <div className="absolute start-0 end-0 -bottom-20 group-hover:bottom-5 duration-500">
                    <ul className="mb-4 space-x-2">
                      <li className="inline-block">
                        <a
                          href=""
                          className="h-10 w-10 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-lg bg-white"
                        >
                          <i
                            data-lucide="facebook"
                            className="h-5 w-5 text-primary fill-primary/25"
                          />
                        </a>
                      </li>
                      <li className="inline-block">
                        <a
                          href=""
                          className="h-10 w-10 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-lg bg-white"
                        >
                          <i
                            data-lucide="instagram"
                            className="h-5 w-5 text-pink-500 fill-pink-500/25"
                          />
                        </a>
                      </li>
                      <li className="inline-block">
                        <a
                          href=""
                          className="h-10 w-10 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-lg bg-white"
                        >
                          <i
                            data-lucide="twitter"
                            className="h-5 w-5 text-sky-500 fill-sky-500/25"
                          />
                        </a>
                      </li>
                    </ul>
                    {/*end social*/}
                    <p className="text-base font-semibold text-white">
                      motivational speaker.
                    </p>
                  </div>
                </div>
                <a
                  href=""
                  className="block text-lg font-semibold group-hover:text-primary duration-500 mt-3"
                >
                  Lenny Morton
                </a>
              </div>
            </div>
            {/* end grid-col */}
            <div className="lg:col-span-3 md:col-span-6">
              <div className="group text-center">
                <div className="relative inline-block mx-auto rounded-lg overflow-hidden">
                  <img
                    src="public/assets/images/landing/event/speakers/3.jpg"
                    className=""
                    alt=""
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black rounded-lg opacity-0 group-hover:opacity-100 duration-500" />
                  <div className="absolute start-0 end-0 -bottom-20 group-hover:bottom-5 duration-500">
                    <ul className="mb-4 space-x-2">
                      <li className="inline-block">
                        <a
                          href=""
                          className="h-10 w-10 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-lg bg-white"
                        >
                          <i
                            data-lucide="facebook"
                            className="h-5 w-5 text-primary fill-primary/25"
                          />
                        </a>
                      </li>
                      <li className="inline-block">
                        <a
                          href=""
                          className="h-10 w-10 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-lg bg-white"
                        >
                          <i
                            data-lucide="instagram"
                            className="h-5 w-5 text-pink-500 fill-pink-500/25"
                          />
                        </a>
                      </li>
                      <li className="inline-block">
                        <a
                          href=""
                          className="h-10 w-10 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-lg bg-white"
                        >
                          <i
                            data-lucide="twitter"
                            className="h-5 w-5 text-sky-500 fill-sky-500/25"
                          />
                        </a>
                      </li>
                    </ul>
                    {/*end social */}
                    <p className="text-base font-semibold text-white">
                      Organizer
                    </p>
                  </div>
                </div>
                <a
                  href=""
                  className="block text-lg font-semibold group-hover:text-primary duration-500 mt-3"
                >
                  Jessica Parker
                </a>
              </div>
            </div>
            {/* end grid-col */}
            <div className="lg:col-span-3 md:col-span-6">
              <div className="group text-center">
                <div className="relative inline-block mx-auto rounded-lg overflow-hidden">
                  <img
                    src="public/assets/images/landing/event/speakers/4.jpg"
                    className=""
                    alt=""
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black rounded-lg opacity-0 group-hover:opacity-100 duration-500" />
                  <div className="absolute start-0 end-0 -bottom-20 group-hover:bottom-5 duration-500">
                    <ul className="mb-4 space-x-2">
                      <li className="inline-block">
                        <a
                          href=""
                          className="h-10 w-10 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-lg bg-white"
                        >
                          <i
                            data-lucide="facebook"
                            className="h-5 w-5 text-primary fill-primary/25"
                          />
                        </a>
                      </li>
                      <li className="inline-block">
                        <a
                          href=""
                          className="h-10 w-10 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-lg bg-white"
                        >
                          <i
                            data-lucide="instagram"
                            className="h-5 w-5 text-pink-500 fill-pink-500/25"
                          />
                        </a>
                      </li>
                      <li className="inline-block">
                        <a
                          href=""
                          className="h-10 w-10 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-lg bg-white"
                        >
                          <i
                            data-lucide="twitter"
                            className="h-5 w-5 text-sky-500 fill-sky-500/25"
                          />
                        </a>
                      </li>
                    </ul>
                    {/*end icon*/}
                    <p className="text-base font-semibold text-white">
                      Event Manager
                    </p>
                  </div>
                </div>
                <a
                  href=""
                  className="block text-lg font-semibold group-hover:text-primary duration-500 mt-3"
                >
                  Leon Erickson
                </a>
              </div>
            </div>
            {/* end grid-col */}
          </div>
          {/* end grid */}
        </div>
        {/* Container End */}
      </section>
      <Footer/>
    </div>
  )
}

export default Artist