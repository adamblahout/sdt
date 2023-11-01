import Sluzby from "./Sluzby";
function TruckPage() {
  return (
    <>
      <div className="ml-16">
        <Sluzby></Sluzby>
        <h1 className="text-4xl font-bold my-4">Servis</h1>
        <section>
          <h2 className="inline font-semibold text-lg text-blue-800 mr-4">
            Záruční servis:
          </h2>
          <p className="inline">
            KÖGEL, SVAN, Waecon, CHERAU, Lamberet, KRONE, Fliegl, Samro, Serus,
            MENSI , MEILLER,WIELTON, HUMBAER, V+M Fahrzeugwerke, SAXAS, Carrier,
            THERMO KING, BÄR, DHOLLANDIA,WABCO, KNORR, HALDEX, BOSCH, ZEPRO
          </p>
        </section>
        <section>
          <h2 className="inline font-semibold text-lg text-blue-800 mr-4">
            Pozáruční servis:
          </h2>
          <p className="inline">
            Schmitz, Renders, Schwarzmüller, PANAV,LUMIKKO
          </p>
        </section>
        <section>
          <h2 className="inline font-semibold text-lg text-blue-800 mr-4">
            Diagnostika řídících jednotek:
          </h2>
          <p className="inline">
            WABCO Servis Center, KNORR, Haldex, - všechny generace
          </p>
        </section>
        <section>
          <h2 className="inline font-semibold text-lg text-blue-800 mr-4">
            Záruční servis náprav:
          </h2>
          <p className="inline">SAF,BPW,KÖGEL TRAXX, GIGANT, MB</p>
        </section>
        <section>
          <h2 className="inline font-semibold text-lg text-blue-800 mr-4">
            Pozáruční servis náprav:
          </h2>
          <p className="inline">ROR, SMB</p>
        </section>
        <section>
          <h2 className="inline font-semibold text-lg text-blue-800 mr-4">
            Zástupce firmy:
          </h2>
          <p className="inline">hydraulické plošiny BAR</p>
        </section>
        <section>
          <h2 className="inline font-semibold text-lg text-blue-800 mr-4">
            Servis 24h:
          </h2>
          <p className="inline">
            Tři plně vybavená servisní vozidla, s provozem 24 hodin denně.
          </p>
        </section>
        <article>
          <h2 className="font-semibold text-2xl my-4">
            Specializujeme se na opravy montovaných skříňových a chladírenských
            nástaveb:
          </h2>
          <ul className="mb-4">
            <li className="list-disc ml-16 mb-2">
              {" "}
              Opravy laminátových panelů,
            </li>
            <li className="list-disc ml-16 mb-2">
              Nerezových, ocelových portálů dveří
            </li>
            <li className="list-disc ml-16 mb-2">
              {" "}
              Opravy laminátových panelů,
            </li>
            <li className="list-disc ml-16 mb-2"> Opravy litých podlah</li>
            <li className="list-disc ml-16 mb-2">
              Opravy propadlých podlahových panelů
            </li>
            <li className="list-disc ml-16 mb-2">
              Instalace nerezových podlahových plechů
            </li>
          </ul>
        </article>
        <aside className="mb-8">
          <p>
            Servisní prohlídky chladících agregátů Carrier, Thermo King,
            Lummiko, kontroly úniku a doplnění chladiva, výměny olejů a filtrů.
          </p>
          <p className="font-semibold text-red-700">
            * V případě opravy návěsu delší, než 12 dní, poskytujeme náhradní
            vozidlo
          </p>
        </aside>
      </div>
    </>
  );
}

export default TruckPage;
