import { Link } from "react-router-dom";

function Sluzby() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:mx-32 md:mt-6 lg:mt-6 ">
        <aside className="hidden md:block lg:block w-5/6">
          <img
            src="/assets/SDT-newlogo.jpg"
            alt="logo"
            className="mt-24 lg:mt-64 "
          />
        </aside>
        <section className="text-center mx-auto w-2/3 md:mt-8 lg:mt-8 ">
          <h2 className="font-bold text-3xl mb-8">Služby</h2>
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
            <Link to="/bus">
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
            </Link>
            <Link to="/trailer">
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
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 mb-8">
            <Link to="/handshake">
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
            </Link>
            <Link to="/wrench">
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
            </Link>
            <Link to="/gallery">
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
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 mb-32">
            <Link to="/car_wash">
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
            </Link>
            <Link to="/tires">
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
            </Link>
            <Link to="/filling_station">
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
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}

export default Sluzby;
