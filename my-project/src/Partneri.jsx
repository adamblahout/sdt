function Partneri() {
  return (
    <>
      <section className="text-center font-bold text-3xl mb-8">
        Partner pojišťovny
      </section>
      <div className="flex flex-col items-center justify-center h-96 bg-gray-300">
        <div className="grid grid-cols-1 lg:grid-cols-3 text-center">
          <a href="https://www.uniqa.cz/" target="_blank">
            <img
              src="/assets/Uniqa_logo.svg"
              alt=""
              className="opacity-60 hover:opacity-100 transition duration-200"
            />
          </a>
          <a href="https://www.direct.cz/" target="_blank">
            <img
              src="/assets/Direct_logo.svg"
              alt=""
              className="opacity-60 hover:opacity-100 transition duration-200"
            />
          </a>
          <a href="https://www.generaliceska.cz/" target="_blank">
            <img
              src="/assets/Generali_logo.svg"
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

export default Partneri;
