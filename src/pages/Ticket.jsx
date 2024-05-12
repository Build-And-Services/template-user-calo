import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Hero from "./Hero"

const Ticket = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <section
        id="price"
        className="sm:py-20 py-10 bg-[#f8f9fa] dark:bg-neutral-900"
      >
        <div className="container">
          <div className="flex items-center justify-center mb-16">
            <div className="max-w-2xl text-center">
              <h5 className="capitalize text-lg  text-gray-800 font-medium mb-2">
                Event{" "}
                <span className="font-semibold text-primary">Tickets</span>
              </h5>
              <h2 className="text-3xl/snug font-bold capitalize text-gray-800 mb-1.5">
                Resignation Tickets
              </h2>
              <p className="text-base font-medium text-gray-500 max-w-xl">
                Itaque earum rerum hic tenetur a sapiente delectus ut sit aut
                reiciendis doloribus asperiores repellat.
              </p>
            </div>
          </div>
          {/* Flex End */}
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
            <div className="bg-white border-b-2 rounded-lg transition-all duration-500 border-b-primary hover:-translate-y-3">
              <div className="p-6">
                <h3 className="text-4xl font-bold text-gray-800 mb-10">
                  $08<sub className="text-lg">/ Day</sub>
                </h3>
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="">
                    <p className="text-base font-nunito font-semibold text-gray-600">
                      Speaker
                    </p>
                    <h5 className="text-black text-lg font-bold">John Smith</h5>
                  </div>
                  <div className="h-20 w-20 inline-flex items-center justify-center border border-gray-300 bg-gray-100 overflow-hidden rounded-full p-1">
                    {/* <img
                      src="public/assets/images/avatars/img-1.png"
                      alt=""
                      className="max-w-full max-h-full rounded-full"
                    /> */}
                  </div>
                </div>
                s
                <div className="mb-6">
                  <a href="#" className="hover:text-primary text-lg font-bold">
                    Digital Conference Event Intro
                  </a>
                  <p className="text-gray-500 font-medium mt-2">
                    The most well-known dummy text is the which is said to have
                    originated in the 16th century
                  </p>
                </div>
                <ul className="mb-6">
                  <li className="flex items-center gap-2 mb-4 font-medium text-base">
                    <i
                      data-lucide="badge-check"
                      className="inline h-5 w-5 text-primary"
                    />
                    <p className="text-gray-900">2 person</p>
                  </li>
                  <li className="flex items-center gap-2 mb-4 font-medium text-base">
                    <i
                      data-lucide="badge-x"
                      className="inline h-5 w-5 text-red-500"
                    />
                    <p className="text-gray-900">free for age under 18</p>
                  </li>
                  <li className="flex items-center gap-2 font-medium text-base">
                    <i
                      data-lucide="badge-x"
                      className="inline h-5 w-5 text-red-500"
                    />
                    <p className="text-gray-900">vip pass</p>
                  </li>
                </ul>
                <a
                  href="#"
                  className="flex items-center justify-center border border-dashed font-semibold border-primary text-primary px-4 py-2 transition-all duration-200 rounded-md hover:bg-primary hover:text-white"
                >
                  Buy Tickits{" "}
                  <i
                    data-lucide="shopping-cart"
                    className="inline h-5 w-5 ms-2"
                  />
                </a>
              </div>
            </div>
            {/* end grid-col */}
            <div className="relative bg-white border-b-2 rounded-lg transition-all duration-500 border-b-primary overflow-hidden hover:-translate-y-3">
              <div className="absolute bg-primary text-sm text-center inline-flex items-center gap-2 text-white font-semibold rounded-s-full py-1 px-2 end-0 top-2">
                <i className="uil uil-link text-base/none" />
                Most Populer
              </div>
              <div className="p-6">
                <h3 className="text-4xl font-bold text-gray-800 mb-10">
                  $28<sub className="text-lg">/ Day</sub>
                </h3>
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="">
                    <p className="text-base font-nunito font-semibold text-gray-600">
                      Speaker
                    </p>
                    <h5 className="text-black text-lg font-bold">
                      Lenny Morton
                    </h5>
                  </div>
                  <div className="h-20 w-20 inline-flex items-center justify-center border border-gray-300 bg-gray-100 overflow-hidden rounded-full p-1">
                    {/* <img
                      src="public/assets/images/avatars/img-2.png"
                      alt=""
                      className="max-w-full max-h-full rounded-full"
                    /> */}
                  </div>
                </div>
                <div className="mb-6">
                  <a href="#" className="hover:text-primary text-lg font-bold">
                    Digital Conference Event Intro
                  </a>
                  <p className="text-gray-500 font-medium mt-2">
                    The most well-known dummy text is the which is said to have
                    originated in the 16th century
                  </p>
                </div>
                <ul className="mb-6">
                  <li className="flex items-center gap-2 mb-4 font-medium text-base">
                    <i
                      data-lucide="badge-check"
                      className="inline h-5 w-5 text-primary"
                    />
                    <p className="text-gray-900">4 person</p>
                  </li>
                  <li className="flex items-center gap-2 mb-4 font-medium text-base">
                    <i
                      data-lucide="badge-check"
                      className="inline h-5 w-5 text-primary"
                    />
                    <p className="text-gray-900">free for age under 18</p>
                  </li>
                  <li className="flex items-center gap-2 font-medium text-base">
                    <i
                      data-lucide="badge-x"
                      className="inline h-5 w-5 text-red-500"
                    />
                    <p className="text-gray-900">vip pass</p>
                  </li>
                </ul>
                <a
                  href="#"
                  className="flex items-center justify-center border border-dashed font-semibold border-primary text-primary px-4 py-2 transition-all duration-200 rounded-md hover:bg-primary hover:text-white"
                >
                  Buy Tickits{" "}
                  <i
                    data-lucide="shopping-cart"
                    className="inline h-5 w-5 ms-2"
                  />
                </a>
              </div>
            </div>
            {/* end grid-col */}
            <div className="bg-white border-b-2 rounded-lg transition-all duration-500 border-b-primary hover:-translate-y-3">
              <div className="p-6">
                <h3 className="text-4xl font-bold text-gray-800 mb-10">
                  $48<sub className="text-lg">/ Day</sub>
                </h3>
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="">
                    <p className="text-base font-nunito font-semibold text-gray-600">
                      Speaker
                    </p>
                    <h5 className="text-black text-lg font-bold">
                      Amanda Erickson
                    </h5>
                  </div>
                  <div className="h-20 w-20 inline-flex items-center justify-center border border-gray-300 bg-gray-100 overflow-hidden rounded-full p-1">
                    {/* <img
                      src="public/assets/images/avatars/img-8.png"
                      alt=""
                      className="max-w-full max-h-full rounded-full"
                    /> */}
                  </div>
                </div>
                <div className="mb-6">
                  <a href="#" className="hover:text-primary text-lg font-bold">
                    Digital Conference Event Intro
                  </a>
                  <p className="text-gray-500 font-medium mt-2">
                    The most well-known dummy text is the, which is said to have
                    originated in the 16th century
                  </p>
                </div>
                <ul className="mb-6">
                  <li className="flex items-center gap-2 mb-4 font-medium text-base">
                    <i
                      data-lucide="badge-check"
                      className="inline h-5 w-5 text-primary"
                    />
                    <p className="text-gray-900">8 person</p>
                  </li>
                  <li className="flex items-center gap-2 mb-4 font-medium text-base">
                    <i
                      data-lucide="badge-check"
                      className="inline h-5 w-5 text-primary"
                    />
                    <p className="text-gray-900">free for age under 18</p>
                  </li>
                  <li className="flex items-center gap-2 font-medium text-base">
                    <i
                      data-lucide="badge-check"
                      className="inline h-5 w-5 text-primary"
                    />
                    <p className="text-gray-900">vip pass</p>
                  </li>
                </ul>
                <a
                  href="#"
                  className="flex items-center justify-center border border-dashed font-semibold border-primary text-primary px-4 py-2 transition-all duration-200 rounded-md hover:bg-primary hover:text-white"
                >
                  Buy Tickits{" "}
                  <i
                    data-lucide="shopping-cart"
                    className="inline h-5 w-5 ms-2"
                  />
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

export default Ticket