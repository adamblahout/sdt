import { Link } from "react-router-dom";

function Sluzby() {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2  mx-32 lg:mt-96 ">
        <aside>
          <img
            src="/assets/SDT-newlogo.jpg"
            alt="logo"
            className="mt-24 lg:mt-64 lg:ml-36 md:mt-48 md:ml-28"
          />
        </aside>
        <section className="text-center  lg:w-1/2 mx-auto">
          <h2 className="font-bold text-3xl mb-8 mt-36">Služby</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 justify-center mb-8">
            <Link to="/truck">
              <div className="relative">
                <img
                  src="/assets/truck.png"
                  alt=""
                  className="w-56 lg:w-64 mx-auto rounded-lg"
                />
                <div className="absolute top-0 left-0 w-full h-full rounded-lg bg-red-700 opacity-80 hover:opacity-30 hover:bg-opacity-50 transition-opacity duration-300">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white lg:text-2xl font-bold">
                      Truck
                    </span>
                  </div>
                </div>
              </div>
            </Link>
            <a href="">
              <div className="relative">
                <img
                  src="/assets/bus.png"
                  alt=""
                  className="w-56 lg:w-66 mx-auto rounded-lg"
                />
                <div className="absolute top-0 left-0 w-full h-full rounded-lg bg-red-700 opacity-80 hover:opacity-30 hover:bg-opacity-50 transition-opacity duration-300">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white lg:text-2xl font-bold">
                      Bus
                    </span>
                  </div>
                </div>
              </div>
            </a>
            <a href="">
              <div className="relative">
                <img
                  src="/assets/trailer.png"
                  alt=""
                  className="w-52 lg:w-64 mx-auto rounded-lg"
                />
                <div className="absolute top-0 left-0 w-full h-full rounded-lg bg-red-700 opacity-80 hover:opacity-30 hover:bg-opacity-50 transition-opacity duration-300">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white lg:text-2xl font-bold">
                      Trailer
                    </span>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            <a href="">
              <div className="relative">
                <img
                  src="/assets/handshake.png"
                  alt=""
                  className="w-52 lg:w-64 mx-auto rounded-lg"
                />
                <div className="absolute top-0 left-0 w-full h-full rounded-lg bg-blue-800 opacity-80 hover:opacity-30 hover:bg-opacity-50 transition-opacity duration-300">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white lg:text-2xl font-bold">
                      Naši Partneři
                    </span>
                  </div>
                </div>
              </div>
            </a>
            <a href="">
              <div className="relative">
                <img
                  src="/assets/wrench.png"
                  alt=""
                  className="w-52 lg:w-64 mx-auto rounded-lg"
                />
                <div className="absolute top-0 left-0 w-full h-full rounded-lg bg-blue-800 opacity-80 hover:opacity-30 hover:bg-opacity-50 transition-opacity duration-300">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white lg:text-2xl font-bold">
                      Náhradní Díly
                    </span>
                  </div>
                </div>
              </div>
            </a>
            <a href="">
              <div className="relative">
                <img
                  src="/assets/gallery.png"
                  alt=""
                  className="w-52 lg:w-64 mx-auto rounded-lg"
                />
                <div className="absolute top-0 left-0 w-full h-full rounded-lg bg-blue-800 opacity-80 hover:opacity-30 hover:bg-opacity-50 transition-opacity duration-300">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white lg:text-2xl font-bold">
                      Fotogalerie
                    </span>
                  </div>
                </div>{" "}
              </div>
            </a>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-32">
            <a href="">
              <div className="relative">
                <img
                  src="/assets/car-wash.png"
                  alt=""
                  className="w-52 lg:w-64 mx-auto rounded-lg"
                />
                <div className="absolute top-0 left-0 w-full h-full rounded-lg bg-gray-600 opacity-80 hover:opacity-30 hover:bg-opacity-50 transition-opacity duration-300">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white lg:text-2xl font-bold">
                      Mycí linka TIR
                    </span>
                  </div>
                </div>
              </div>
            </a>
            <a href="">
              <div className="relative">
                <img
                  src="/assets/tires.png"
                  alt=""
                  className="w-52 lg:w-64 mx-auto rounded-lg"
                />
                <div className="absolute top-0 left-0 w-full h-full rounded-lg bg-gray-600 opacity-80 hover:opacity-30 hover:bg-opacity-50 transition-opacity duration-300">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white lg:text-2xl font-bold">
                      Pneuservis
                    </span>
                  </div>
                </div>
              </div>
            </a>
            <a href="">
              <div className="relative">
                <img
                  src="/assets/filling_station.png"
                  alt=""
                  className="w-52 lg:w-64 mx-auto rounded-lg"
                />
                <div className="absolute top-0 left-0 w-full h-full rounded-lg bg-gray-600 opacity-80 hover:opacity-30 hover:bg-opacity-50 transition-opacity duration-300">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white lg:text-2xl font-bold">
                      Čepací stanice
                    </span>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </section>
      </div>
    </>
  );
}

export default Sluzby;
