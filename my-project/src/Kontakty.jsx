function Kontakty() {
  return (
    <>
      <div className="ml-8 mt-16">
        <h2 id="kontakty" className="text-4xl font-bold text-center mb-8">
          Kontakty
        </h2>

        <h4 id="vedení-společnosti" className="text-2xl font-bold my-4">
          Vedení společnosti
        </h4>

        <table className="border-separate border-spacing-4 rounded-md">
          <thead className="">
            <tr className="text-left ">
              <th className="w-15">Funkce</th>
              <th className="w-30">Jméno a příjmení</th>
              <th className="w-32">Telefon</th>
              <th className="w-40">Mobilní telefon</th>
              <th className="w-25">E-mail</th>
            </tr>
          </thead>
          <tbody>
            <tr className="">
              <td>CEO</td>
              <td>Ing. Miloslav Studenovský</td>
              <td>315 670 174</td>
              <td></td>
              <td className="text-blue-700 hover:text-blue-400">
                <a href="mailto:studenovsky@csad-me.cz">
                  studenovsky@csad-me.cz
                </a>
              </td>
            </tr>
            <tr className="text-left">
              <td>Fin. ředitel</td>
              <td>Ing. Miroslav Dvořák</td>
              <td>315 670 174</td>
              <td></td>
              <td className="text-blue-700 hover:text-blue-400">
                <a href="mailto:dvorak@csad-me.cz">dvorak@csad-me.cz</a>
              </td>
            </tr>
            <tr className="text-left">
              <td>Ředitel</td>
              <td>Ing. Vladislav Olejár</td>
              <td>315 671 080</td>
              <td>+420 737 229 550</td>
              <td className="text-blue-700 hover:text-blue-400">
                <a href="mailto:olejar@sdt-me.cz">olejar@sdt-me.cz</a>
              </td>
            </tr>
          </tbody>
        </table>

        <h4 className="text-2xl font-bold my-4">Servis TRAILER - Mělník</h4>
        <table className="border-separate border-spacing-4  rounded-md">
          <thead>
            <tr className="text-left">
              <th className="w-15 text-left">
                <strong>Funkce</strong>
              </th>
              <th className="w-30 text-left">
                <strong>Jméno a příjmení</strong>
              </th>
              <th className="w-32 text-left">
                <strong>Telefon</strong>
              </th>
              <th className="w-40 text-left">
                <strong>Mobilní telefon</strong>
              </th>
              <th className="w-25 text-left">
                <strong>E-mail</strong>
              </th>
            </tr>
          </thead>
          <tbody className="text-left">
            <tr>
              <td>Ved. servisu</td>
              <td>Petr Kučera</td>
              <td>315 671 070</td>
              <td>+420 737 229 461</td>
              <td className="text-blue-700 hover:text-blue-400">
                <a href="mailto:kucera@sdt-me.cz">kucera@sdt-me.cz</a>
              </td>
            </tr>
            <tr>
              <td>Příjem oprav</td>
              <td>Michal Suchan</td>
              <td>315 671 070</td>
              <td>+420 737 229 409</td>
              <td className=" text-blue-700 hover:text-blue-400">
                <a href="mailto:suchan@sdt-me.cz">suchan@sdt-me.cz</a>
              </td>
            </tr>
            <tr>
              <td>Příjem oprav</td>
              <td>Michal Kosák</td>
              <td>315 671 070</td>
              <td>+420 737 229 725</td>
              <td className="w-25 text-left text-blue-700 hover:text-blue-400">
                <a href="mailto:kosak@sdt-me.cz">kosak@sdt-me.cz</a>
              </td>
            </tr>
            <tr>
              <td className="w-15 text-left">SDT Slovakia</td>
              <td className="w-30 text-left">
                Jan Mareček (
                <a
                  href="mailto:marecek@sdt-me.cz"
                  className="text-blue-700 hover:text-blue-400"
                >
                  marecek@sdt-me.cz
                </a>
                )
              </td>
              <td></td>
              <td>+420 737 229 744</td>
              <td className=" text-blue-700 hover:text-blue-400">
                <a href="mailto:dcbeckov@sdt-me.cz">dcbeckov@sdt-me.cz</a>
              </td>
            </tr>
          </tbody>

          <thead className="text-left">
            <tr>
              <th className="text-2xl font-bold my-4">Sklad a prodej ND</th>
            </tr>
            <tr>
              <th className="w-15 text-left">
                <strong>Funkce</strong>
              </th>
              <th className="w-30 text-left">
                <strong>Jméno a příjmení</strong>
              </th>
              <th className="w-40 text-left">
                <strong>Telefon</strong>
              </th>
              <th className="w-20 text-left">
                <strong>Mobilní telefon</strong>
              </th>
              <th className="w-25 text-left">
                <strong>E-mail</strong>
              </th>
            </tr>
          </thead>
          <tbody className="text-left">
            <tr>
              <td>Ved. skladu</td>
              <td>
                Jakub Hejna (
                <a
                  href="mailto:hejna@sdt-me.cz"
                  className="text-blue-700 hover:text-blue-400"
                >
                  hejna@sdt-me.cz
                </a>
                )
              </td>
              <td>315 671 070</td>
              <td>+420 737 229 610</td>
              <td className=" text-blue-700 hover:text-blue-400">
                <a href="mailto:sklad@sdt-me.cz">sklad@sdt-me.cz</a>
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                Monika Kosáková (
                <a
                  href="mailto:kosakova@sdt-me.cz"
                  className="text-blue-700 hover:text-blue-400"
                >
                  kosakova@sdt-me.cz
                </a>
                )
              </td>
              <td></td>
              <td>+420 737 229 622</td>
              <td className=" text-blue-700 hover:text-blue-400">
                <a href="mailto:sklad@sdt-me.cz">sklad@sdt-me.cz</a>
              </td>
            </tr>
          </tbody>

          <thead className="text-left">
            <tr>
              <th className="text-2xl font-bold my-4">Fakturace</th>
            </tr>
            <tr>
              <th className="w-15 text-left">
                <strong>Funkce</strong>
              </th>
              <th className="w-30 text-left">
                <strong>Jméno a příjmení</strong>
              </th>
              <th className="w-40 text-left">
                <strong>Telefon</strong>
              </th>
              <th className="w-20 text-left">
                <strong>Mobilní telefon</strong>
              </th>
              <th className="w-25 text-left">
                <strong>E-mail</strong>
              </th>
            </tr>
          </thead>
          <tbody className="text-left">
            <tr>
              <td></td>
              <td>Eva Kučerová</td>
              <td>315 671 070</td>
              <td></td>
              <td className="w-25 text-left text-blue-700 hover:text-blue-400">
                <a href="mailto:kucerova@sdt-me.cz">kucerova@sdt-me.cz</a>
              </td>
            </tr>
          </tbody>
        </table>

        <h4 className="text-2xl font-bold my-4">
          Servis BUS &amp; TRUCK - Mělník
        </h4>

        <table className="border-separate border-spacing-4  rounded-md text-left">
          <thead>
            <tr>
              <th className="w-15 text-left">
                <strong>Funkce</strong>
              </th>
              <th className="w-30 text-left">
                <strong>Jméno a příjmení</strong>
              </th>
              <th className="w-40 text-left">
                <strong>Telefon</strong>
              </th>
              <th className="w-20 text-left">
                <strong>Mobilní telefon</strong>
              </th>
              <th className="w-25 text-left">
                <strong>E-mail</strong>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Ved. servisu</td>
              <td>Martin Bernard</td>
              <td></td>
              <td>+420 737 229 568</td>
              <td className=" text-blue-700 hover:text-blue-400">
                <a href="mailto:bernard@sdt-me.cz">bernard@sdt-me.cz</a>
              </td>
            </tr>
            <tr>
              <td>Ved. dílen</td>
              <td>Tomáš Ligenza</td>
              <td></td>
              <td>+420 737 229 626</td>
              <td className=" text-blue-700 hover:text-blue-400">
                <a href="mailto:ligenza@sdt-me.cz">ligenza@sdt-me.cz</a>
              </td>
            </tr>
            <tr>
              <td>Mistr servisu</td>
              <td>Josef Balogh</td>
              <td></td>
              <td>+420 737 229 690</td>
              <td className="400">
                <a href="mailto:balogh@sdt-me.cz">balogh@sdt-me.cz</a>
              </td>
            </tr>
          </tbody>

          <thead>
            <tr>
              <th className="text-2xl font-bold my-4">Diagnostika</th>
            </tr>
            <tr>
              <th className="w-15 text-left">
                <strong>Funkce</strong>
              </th>
              <th className="w-30 text-left">
                <strong>Jméno a příjmení</strong>
              </th>
              <th className="w-40 text-left">
                <strong>Telefon</strong>
              </th>
              <th className="w-20 text-left">
                <strong>Mobilní telefon</strong>
              </th>
              <th className="w-25 text-left">
                <strong>E-mail</strong>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Ved. diagnostiky</td>
              <td>Tomáš Ligenza</td>
              <td></td>
              <td>+420 737 229 626</td>
              <td className=" text-blue-700 hover:text-blue-400">
                <a href="mailto:ligenza@sdt-me.cz">ligenza@sdt-me.cz</a>
              </td>
            </tr>
          </tbody>

          <thead>
            <tr>
              <th className="text-2xl font-bold my-4">Sklad a prodej ND</th>
            </tr>
            <tr>
              <th className="w-15 text-left">
                <strong>Funkce</strong>
              </th>
              <th className="w-30 text-left">
                <strong>Jméno a příjmení</strong>
              </th>
              <th className="w-10 text-left">
                <strong>Telefon</strong>
              </th>
              <th className="w-40 text-left">
                <strong>Mobilní telefon</strong>
              </th>
              <th className="w-25 text-left">
                <strong>E-mail</strong>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Ved. skladu</td>
              <td>
                Petra Řepová (
                <a
                  href="mailto:repova@sdt-me.cz"
                  className="text-blue-700 hover:text-blue-400"
                >
                  repova@sdt-me.cz
                </a>
                )
              </td>
              <td>315 671 070</td>
              <td>+420 737 229 610</td>
              <td>
                <a
                  href="mailto:sklad3me@sdt-me.cz"
                  className="text-blue-700 hover:text-blue-400"
                >
                  sklad3me@sdt-me.cz
                </a>
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                Markéta Pokorná (
                <a
                  href="mailto:pokorna@sdt-me.cz"
                  className="text-blue-700 hover:text-blue-400"
                >
                  pokorna@sdt-me.cz
                </a>
                )
              </td>
              <td></td>
              <td>+420 737 229 622</td>
              <td>
                <a
                  href="mailto:sklad3me@sdt-me.cz"
                  className="text-blue-700 hover:text-blue-400"
                >
                  sklad3me@sdt-me.cz
                </a>
              </td>
            </tr>
          </tbody>
        </table>

        <h4 className="text-2xl font-bold my-4">
          Servis BUS - Brandýs nad Labem/Stará Boleslav
        </h4>

        <table className="text-left border-separate border-spacing-4  rounded-md">
          <thead>
            <tr>
              <th className="w-15 text-left">
                <strong>Funkce</strong>
              </th>
              <th className="w-30 text-left">
                <strong>Jméno a příjmení</strong>
              </th>
              <th className="w-10 text-left">
                <strong></strong>
              </th>
              <th className="w- text-left">
                <strong>Telefon</strong>
              </th>
              <th className="w-40 text-left">
                <strong>Mobilní telefon</strong>
              </th>
              <th className="w-25 text-left">
                <strong>E-mail</strong>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Mistr servisu</td>
              <td>David Lankaš</td>
              <td></td>
              <td></td>
              <td>+420 737 229 624</td>
              <td className=" text-blue-700 hover:text-blue-400">
                <a href="mailto:lankas@sdt-me.cz">lankas@sdt-me.cz</a>
              </td>
            </tr>
          </tbody>

          <tbody>
            <tr>
              <th className="text-xl font-bold my-4">Sklad a prodej ND</th>
            </tr>
          </tbody>
          <thead>
            <tr>
              <th className="w-15 text-left">
                <strong>Funkce</strong>
              </th>
              <th className="w-30 text-left">
                <strong>Jméno a příjmení</strong>
              </th>
              <th className="w-40 text-left">
                <strong>Telefon</strong>
              </th>
              <th className="w-40 text-left">
                <strong>Mobilní telefon</strong>
              </th>
              <th className="w-25 text-left ">
                <strong>E-mail</strong>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td>Pavlína Tesárková</td>
              <td></td>
              <td>+420 737 229 425</td>
              <td>
                <a
                  href="mailto:sklad2sb@sdt-me.cz "
                  className="text-blue-700 hover:text-blue-400"
                >
                  sklad2sb@sdt-me.cz
                </a>
              </td>
            </tr>
          </tbody>
        </table>

        <h4 className="text-2xl font-bold my-4">
          Správa majetku, investice, PHM, mycí linka
        </h4>

        <table className="text-left border-separate border-spacing-4  rounded-md">
          <thead>
            <tr>
              <th className="w-15 text-left">
                <strong>Funkce</strong>
              </th>
              <th className="w-30 text-left">
                <strong>Jméno a příjmení</strong>
              </th>
              <th className="w-60 text-left">
                <strong>Telefon</strong>
              </th>
              <th className="w-40 text-left">
                <strong>Mobilní telefon</strong>
              </th>
              <th className="w-25 text-left">
                <strong>E-mail</strong>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Prov. ředitel</td>
              <td>Ing. Jan Vydra</td>
              <td></td>

              <td>+420 737 229 612</td>
              <td className="text-blue-700 hover:text-blue-400">
                <a href="mailto:vydra@sdt-me.cz">vydra@sdt-me.cz</a>
              </td>
            </tr>
            <tr>
              <td>Ved. údržby</td>
              <td>Josef Kollman</td>
              <td></td>
              <td>+420 737 229 420</td>
              <td className="400">
                <a href="mailto:kollman@sdt-me.cz">kollman@sdt-me.cz</a>
              </td>
            </tr>
          </tbody>
        </table>

        <table className="text-left border-separate border-spacing-4  rounded-md mb-8">
          <thead>
            <tr>
              <th className="text-2xl font-bold my-4">
                Skladování a logistika
              </th>
            </tr>
            <tr>
              <th className="w-15 text-left">
                <strong>Funkce</strong>
              </th>
              <th className="w-30 text-left">
                <strong>Jméno a příjmení</strong>
              </th>
              <th className="w-10 text-left">
                <strong>Telefon</strong>
              </th>
              <th className="w-40 text-left">
                <strong>Mobilní telefon</strong>
              </th>
              <th className="w-25 text-left">
                <strong>E-mail</strong>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Ved. skladů</td>
              <td>Tomáš Roudnický</td>
              <td></td>
              <td>+420 737 229 777</td>
              <td className=" text-blue-700 hover:text-blue-400">
                <a href="mailto:roudnicky@sdt-me.cz">roudnicky@sdt-me.cz</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Kontakty;
