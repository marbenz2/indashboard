import { Card } from "@tremor/react";

const Arguments = () => {
  return (
    <div className="flex flex-col items-center w-full gap-4 py-24">
      <div className="grid grid-cols-1 max-w-7xl gap-4 w-full items-center">
        <Card
          decoration="left"
          decorationColor="white"
          className="flex flex-col lg:flex-row gap-4 sm:gap-12 p-12"
        >
          <h3 className="flex-1 text-xl sm:text-2xl lg:text-3xl font-bold text-tremor-brand-accent">
            Behalten Sie die Kontrolle
          </h3>
          <ul className="flex-1 list-disc list-inside flex flex-col gap-2 font-thin">
            <li>Echtzeit-Überwachung: Alle relevanten Parameter im Blick.</li>
            <li>
              Engpassanalyse: Optimieren Sie Ihre Produktion für maximale
              Effizienz.
            </li>
            <li>
              Proaktive Fehlervermeidung: Vermeiden Sie kostspielige
              Ausfallzeiten.
            </li>
          </ul>
        </Card>
        <Card
          decoration="left"
          decorationColor="white"
          className="flex flex-col lg:flex-row gap-4 sm:gap-12 p-12"
        >
          <h3 className="flex-1 text-xl sm:text-2xl lg:text-3xl font-bold text-tremor-brand-accent">
            Gewinnen Sie wertvolle Erkenntnisse
          </h3>
          <ul className="flex-1 list-disc list-inside flex flex-col gap-2 font-thin">
            <li>
              Intelligente Datenerkenntnisse: Transformieren Sie Daten in
              Wissen.
            </li>
            <li>Trendanalysen: Treffen Sie fundierte Entscheidungen.</li>
            <li>Produktivitätssteigerung: Steigern Sie Ihre Rentabilität.</li>
          </ul>
        </Card>
        <Card
          decoration="left"
          decorationColor="white"
          className="flex flex-col lg:flex-row gap-4 sm:gap-12 p-12"
        >
          <h3 className="flex-1 text-xl sm:text-2xl lg:text-3xl font-bold text-tremor-brand-accent">
            Intuitive Benutzerfreundlichkeit
          </h3>
          <ul className="flex-1 list-disc list-inside flex flex-col gap-2 font-thin">
            <li>Einfache Bedienung: Für jedermann geeignet.</li>
            <li>Schneller Zugriff: Alle Informationen auf einen Blick.</li>
            <li>Skalierbare Lösung: Passt sich an Ihre Bedürfnisse an.</li>
          </ul>
        </Card>
      </div>
    </div>
  );
};

export default Arguments;
