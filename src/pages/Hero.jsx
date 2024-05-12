
const Hero = () => {
  return (
    <div>
        <section
        id="home"
        className="py-64 relative overflow-hidden bg-fixed bg-no-repeat bg-center bg-cover bg-[url('../images/landing/event/hero-bg.jpg')]"
      >
        <div className="absolute bg-black/25 inset-0 w-full h-full" />
        <div className="absolute inset-0 bg-black/70" />
        {/* end backdrop */}
        <div className="">
          <div className="relative text-center">
            <span className="text-white font-medium bg-white/20 py-[5px] px-4 rounded-md">
              1 <sup>th</sup> Show, 01 January 2023
            </span>
            <h1 className="lg:text-6xl text-4xl font-extrabold text-white my-8">
              PKM Calo Project Fakultas Ilmu Komputer Universitas Jember 
            </h1>
            <div className="flex justify-center">
              <div className="max-w-xl text-center">
                <p className="font-semibold text-white">
                  Itaque earum rerum tenetur a sapiente delectus reiciendis
                  voluptatibus maiores alias perferendis doloribus asperiores.
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative mt-14">
                <div className="">
                  <div className="flex flex-wrap items-center justify-center gap-y-4 gap-x-4 sm:gap-x-0">
                    <div className="inline-flex flex-col items-center justify-center rounded-lg border-2 border-dashed font-bold text-white h-24 w-24 px-3 py-2">
                      <span id="days" className="text-3xl">
                        00
                      </span>
                      <span className="text-base">Days</span>
                    </div>
                    <div className="text-2xl font-bold mx-4 text-white hidden sm:block">
                      :
                    </div>
                    <div className="inline-flex flex-col items-center justify-center rounded-lg border-2 border-dashed font-bold text-white h-24 w-24 px-3 py-2">
                      <span id="hours" className="text-3xl">
                        00
                      </span>
                      <span className="text-base">Hours</span>
                    </div>
                    <div className="text-2xl font-bold mx-4 text-white hidden sm:block">
                      :
                    </div>
                    <div className="inline-flex flex-col items-center justify-center rounded-lg border-2 border-dashed font-bold text-white h-24 w-24 px-3 py-2">
                      <span id="minutes" className="text-3xl">
                        00
                      </span>
                      <span className="text-base">Minutes</span>
                    </div>
                    <div className="text-2xl font-bold mx-4 text-white hidden sm:block">
                      :
                    </div>
                    <div className="inline-flex flex-col items-center justify-center rounded-lg border-2 border-dashed font-bold text-white h-24 w-24 px-3 py-2">
                      <span id="seconds" className="text-3xl">
                        00
                      </span>
                      <span className="text-base">Seconds</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Flex End */}
          </div>
          <div className="flex justify-center">
            <div className="relative mt-20">
              <a
                href="#price"
                className="text-xl font-medium py-3 px-9 bg-white text-primary rounded-lg transition-all duration-500  hover:shadow-white/10"
              >
                Register Now
              </a>
            </div>
          </div>
          {/* Flex End */}
        </div>
        {/* Container End */}
      </section>
    </div>
  )
}

export default Hero