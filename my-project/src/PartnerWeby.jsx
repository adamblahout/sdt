function PartnerWeby() {
  return (
    <>
      <section className="text-center font-bold text-3xl my-8">
        Partnerské Weby
      </section>
      <div className="flex flex-col items-center justify-center h-96 bg-gray-300">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 w-56 lg:w-auto">
          <a href="/">
            <img
              src="/assets/vos-sos-roudnice.png"
              alt=""
              className="opacity-60 hover:opacity-100 transition duration-200"
            />
            ,
          </a>
          <a href="/">
            <img
              src="/assets/csad_sc.gif"
              alt=""
              className="opacity-60 hover:opacity-100 transition duration-200"
            />
          </a>
        </div>
        <div className="w-full bg-slate-500"></div>
      </div>
    </>
  );
}

export default PartnerWeby;
