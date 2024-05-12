
const Footer = () => {
  return (
    <div>
        <footer className="bg-center bg-no-repeat bg-slate-900 bg-[url('../images/footer-bg.png')]">
        <div className="container lg:px-20">
          <div className="flex flex-col lg:flex-row justify-between gap-14 py-24">
            <div className="lg:w-3/12">
              <a href="#" className="flex items-center gap-2 logo">
                {/* <img
                  src="public/assets/images/logo-light.png"
                  className="w-36"
                  alt=""
                /> */}
              </a>
              <p className="text-gray-400 text-base font-medium max-w-xs mt-6">
                Start project with tailwind css provide everything you need.
              </p>
              <h5 className="text-slate-300 2xl:text-lg text-base mb-4 mt-6">
                Follow Us :
              </h5>
              <ul className="flex flex-wrap items-center gap-2">
                <li>
                  <a
                    href="javascript:void(0);"
                    className="h-10 w-10 inline-flex items-center justify-center bg-slate-800 rounded-lg transition-all duration-500 group hover:bg-primary"
                  >
                    <i
                      data-lucide="facebook"
                      className="h-5 w-5 text-gray-400 group-hover:text-white group-hover:fill-white/30"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0);"
                    className="h-10 w-10 inline-flex items-center justify-center bg-slate-800 rounded-lg transition-all duration-500 group hover:bg-pink-600"
                  >
                    <i
                      data-lucide="instagram"
                      className="h-5 w-5 text-gray-400 group-hover:text-white group-hover:fill-white/30"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0);"
                    className="h-10 w-10 inline-flex items-center justify-center bg-slate-800 rounded-lg transition-all duration-500 group hover:bg-sky-600"
                  >
                    <i
                      data-lucide="twitter"
                      className="h-5 w-5 text-gray-400 group-hover:text-white group-hover:fill-white/30"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0);"
                    className="h-10 w-10 inline-flex items-center justify-center bg-slate-800 rounded-lg transition-all duration-500 group hover:bg-blue-800"
                  >
                    <i
                      data-lucide="linkedin"
                      className="h-5 w-5 text-gray-400 group-hover:text-white group-hover:fill-white/30"
                    />
                  </a>
                </li>
              </ul>
            </div>
            <div className="lg:w-8/12">
              <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
                <div className="">
                  <ul className="flex flex-col gap-3">
                    <h5 className="xl:text-xl lg:text-lg font-semibold text-gray-200 mb-2">
                      About Us
                    </h5>
                    <li>
                      <a
                        href="javascript:void(0);"
                        className="text-base font-semibold text-gray-400 hover:text-white transition-all"
                      >
                        <i
                          data-lucide="circle-dot-dashed"
                          className="inline-block h-4 w-4 me-2"
                        />{" "}
                        Support Center
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:void(0);"
                        className="text-base font-semibold text-gray-400 hover:text-white transition-all"
                      >
                        <i
                          data-lucide="circle-dot-dashed"
                          className="inline-block h-4 w-4 me-2"
                        />{" "}
                        Customer Support
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:void(0);"
                        className="text-base font-semibold text-gray-400 hover:text-white transition-all"
                      >
                        <i
                          data-lucide="circle-dot-dashed"
                          className="inline-block h-4 w-4 me-2"
                        />{" "}
                        About Us
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:void(0);"
                        className="text-base font-semibold text-gray-400 hover:text-white transition-all"
                      >
                        <i
                          data-lucide="circle-dot-dashed"
                          className="inline-block h-4 w-4 me-2"
                        />{" "}
                        Copyright
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:void(0);"
                        className="text-base font-semibold text-gray-400 hover:text-white transition-all"
                      >
                        <i
                          data-lucide="circle-dot-dashed"
                          className="inline-block h-4 w-4 me-2"
                        />{" "}
                        Popular Campaign
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:void(0);"
                        className="text-base font-semibold text-gray-400 hover:text-white transition-all"
                      >
                        <i
                          data-lucide="circle-dot-dashed"
                          className="inline-block h-4 w-4 me-2"
                        />{" "}
                        Return Policy
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:void(0);"
                        className="text-base font-semibold text-gray-400 hover:text-white transition-all"
                      >
                        <i
                          data-lucide="circle-dot-dashed"
                          className="inline-block h-4 w-4 me-2"
                        />{" "}
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:void(0);"
                        className="text-base font-semibold text-gray-400 hover:text-white transition-all"
                      >
                        <i
                          data-lucide="circle-dot-dashed"
                          className="inline-block h-4 w-4 me-2"
                        />{" "}
                        Terms &amp; Conditions
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="">
                  <ul className="flex flex-col gap-3">
                    <h5 className="xl:text-xl lg:text-lg font-semibold text-gray-200 mb-2">
                      My Account
                    </h5>
                    <li>
                      <a
                        href="javascript:void(0);"
                        className="text-base font-semibold text-gray-400 hover:text-white transition-all"
                      >
                        <i
                          data-lucide="circle-dot-dashed"
                          className="inline-block h-4 w-4 me-2"
                        />{" "}
                        Press Inquiries
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:void(0);"
                        className="text-base font-semibold text-gray-400 hover:text-white transition-all"
                      >
                        <i
                          data-lucide="circle-dot-dashed"
                          className="inline-block h-4 w-4 me-2"
                        />{" "}
                        Social Media Directories
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:void(0);"
                        className="text-base font-semibold text-gray-400 hover:text-white transition-all"
                      >
                        <i
                          data-lucide="circle-dot-dashed"
                          className="inline-block h-4 w-4 me-2"
                        />{" "}
                        Images &amp; B-roll
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:void(0);"
                        className="text-base font-semibold text-gray-400 hover:text-white transition-all"
                      >
                        <i
                          data-lucide="circle-dot-dashed"
                          className="inline-block h-4 w-4 me-2"
                        />{" "}
                        Site Map
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:void(0);"
                        className="text-base font-semibold text-gray-400 hover:text-white transition-all"
                      >
                        <i
                          data-lucide="circle-dot-dashed"
                          className="inline-block h-4 w-4 me-2"
                        />{" "}
                        Store Hours
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:void(0);"
                        className="text-base font-semibold text-gray-400 hover:text-white transition-all"
                      >
                        <i
                          data-lucide="circle-dot-dashed"
                          className="inline-block h-4 w-4 me-2"
                        />{" "}
                        Permissions
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:void(0);"
                        className="text-base font-semibold text-gray-400 hover:text-white transition-all"
                      >
                        <i
                          data-lucide="circle-dot-dashed"
                          className="inline-block h-4 w-4 me-2"
                        />{" "}
                        Speaker Requests
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="">
                  <ul className="flex flex-col gap-3">
                    <h5 className="xl:text-xl lg:text-lg font-semibold text-gray-200 mb-2">
                      Policy
                    </h5>
                    <li>
                      <a
                        href="javascript:void(0);"
                        className="text-base font-semibold text-gray-400 hover:text-white transition-all"
                      >
                        <i
                          data-lucide="circle-dot-dashed"
                          className="inline-block h-4 w-4 me-2"
                        />{" "}
                        Application Security
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:void(0);"
                        className="text-base font-semibold text-gray-400 hover:text-white transition-all"
                      >
                        <i
                          data-lucide="circle-dot-dashed"
                          className="inline-block h-4 w-4 me-2"
                        />{" "}
                        Softwere Principles
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:void(0);"
                        className="text-base font-semibold text-gray-400 hover:text-white transition-all"
                      >
                        <i
                          data-lucide="circle-dot-dashed"
                          className="inline-block h-4 w-4 me-2"
                        />{" "}
                        Softwere Policy
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:void(0);"
                        className="text-base font-semibold text-gray-400 hover:text-white transition-all"
                      >
                        <i
                          data-lucide="circle-dot-dashed"
                          className="inline-block h-4 w-4 me-2"
                        />{" "}
                        Risponsible Supply
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* Grid End */}
        </div>
        {/* Container End */}
        <div className="border-t border-slate-700/20 h-[75px]">
          <div className="container lg:px-20 flex flex-wrap justify-center items-center h-full  md:justify-between text-center md:text-start">
            <p className="text-base font-medium text-gray-400">
              © Calo Project -{" "}
              <a href="#">
                Design crafted{" "}
                <i
                  data-lucide="heart"
                  className="inline h-4 w-4 text-red-500 fill-red-500"
                />{" "}
                buildandservice.tech
              </a>
            </p>
            <p className="text-base font-medium text-gray-400">
              <a href="#">Terms Conditions &amp; Policy</a>
            </p>
          </div>
          {/* Flex End */}
        </div>
        {/* Container End */}
      </footer>
    </div>
  )
}

export default Footer