function PartnerWeby() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-12 my-8 mt-10 border-t-4 pt-10">
        <aside className="ml-8">
          <h2 className="font-bold text-2xl text-gray-700">
            Servis Dopravní Techniky a.s.
          </h2>
          <p className="font-semibold text-gray-800 my-6">
            K Přívozu 2604/23, 276 01 Mělník U Přístavu 811/8, 250 01 Brandýs
            nad Labem-Stará Boleslav Zapsáno u Městského soudu v Praze oddíl B,
            vložka 17820
          </p>
          <h2 className="font-bold text-2xl text-gray-700">
            SDT Slovakia, s.r.o.
          </h2>
          <p className="font-semibold text-gray-800 my-6">
            Trenčianska ulica 1189, 915 01 Nové Město nad Váhom Zapísaná u
            Okresného úradu Nové Mesto nad Váhom pod značkou
            OU-NM-OZP-2020/001542-2 č.živnostenského registra 320-20691
          </p>
        </aside>
        <section className="ml-8 place-items-center">
          <h2 className="font-bold text-2xl text-gray-700 mb-6">Mapy</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10178.43748137158!2d14.461109!3d50.373838!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470bde6cc47998d5%3A0x1c2d27244a9015f2!2zSyBQxZnDrXZvenUgMjYwNC8yMywgMjc2IDAxIE3Em2xuw61rIDEsIEN6ZWNoaWE!5e0!3m2!1sen!2sus!4v1707259998271!5m2!1sen!2sus"
            className="w-full h-40 mb-8"
          ></iframe>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2630.980351965834!2d17.8398559!3d48.7440721!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4714a91e64549c75%3A0xc264fef5ca5a3ef4!2sCENTRUM%20N%C3%81VESOV%20NM%20-%20MM%20DRIVE%20s.r.o.!5e0!3m2!1scs!2sus!4v1707260325620!5m2!1scs!2sus"
            className="w-full h-40"
          ></iframe>
        </section>
        <div className="ml-8">
          <h2 className="font-bold text-2xl text-gray-700">
            Identifikační čísla (CZ)
          </h2>
          <p className="font-semibold text-gray-800 mt-6">IČO: 24204323</p>
          <p className="font-semibold text-gray-800 mb-3">DIČ: CZ24204323</p>
          <p className="font-semibold text-gray-800 my-6">ID DS: v5s8rxr</p>
          <h2 className="font-bold text-2xl text-gray-700">
            Identifikační čísla (SK)
          </h2>
          <p className="font-semibold text-gray-800 my-6">IČO: 52873226</p>
          <p className="font-semibold text-gray-800 my-6">DIČ: SK2121163528</p>
        </div>
      </div>
      <p className="text-gray-800 font-semibold text-center mb-4">
        Adam Blahout © 2024 SDT a.s .
      </p>
    </>
  );
}

export default PartnerWeby;
