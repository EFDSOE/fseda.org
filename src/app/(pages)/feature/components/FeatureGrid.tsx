import { Icon } from "@iconify/react";
import analyticsImg from "@/assets/images/other/infrastructure-analytics.jpg"; // Pfad anpassen falls nötig

const FeatureGrid = () => {
  return (
    <section className="py-10">
      <div className="container">
        {/* Visual Header / Key-Metrics Banner */}
        <div className="border-default-200 from-default-100/50 mb-10 rounded-3xl border bg-gradient-to-b to-transparent p-6 md:p-10 shadow-sm">
          <div className="grid gap-8 md:grid-cols-4 text-center divide-y md:divide-y-0 md:divide-x divide-default-200">
            <div className="pt-4 md:pt-0">
              <span className="block text-4xl font-extrabold text-primary mb-1">100%</span>
              <span className="text-sm font-medium text-default-700">Open Source & Quelloffen</span>
            </div>
            <div className="pt-4 md:pt-0">
              <span className="block text-4xl font-extrabold text-primary mb-1">0%</span>
              <span className="text-sm font-medium text-default-700">Kommerzielles Tracking</span>
            </div>
            <div className="pt-4 md:pt-0">
              <span className="block text-4xl font-extrabold text-primary mb-1">3 Ebenen</span>
              <span className="text-sm font-medium text-default-700">Souveräne Architektur</span>
            </div>
            <div className="pt-4 md:pt-0">
              <span className="block text-4xl font-extrabold text-primary mb-1">EU</span>
              <span className="text-sm font-medium text-default-700">Hosting & Serverstandort</span>
            </div>
          </div>
        </div>

        {/* Big Featured Box mit deinem neuen Analytics-Bild */}
        <div className="border-default-200 from-default-100 mb-8 overflow-hidden rounded-3xl border bg-gradient-to-b to-transparent p-2.5">
          <div className="grid md:grid-cols-12 items-center gap-6 bg-white rounded-2xl overflow-hidden border border-default-100">
            <div className="md:col-span-6 p-8 lg:p-12">
              <div className="mb-4 inline-flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Icon icon="tabler:server-2" className="size-6" />
              </div>
              <h3 className="mb-4 text-3xl font-bold text-default-950">
                Souveräne Datenhoheit & Monitoring
              </h3>
              <p className="text-default-600 mb-6 leading-relaxed">
                Volle Kontrolle über Rechenkapazitäten, Datenflüsse und Schnittstellen. Unsere europäische Serverinfrastruktur schützt sensible Schüler- und Lehrendendaten vor fremdem Zugriff.
              </p>
              <div className="flex flex-wrap gap-4 text-sm font-semibold text-primary">
                <span className="flex items-center gap-1.5"><Icon icon="tabler:circle-check-filled" /> ISO 27001 zertifiziert</span>
                <span className="flex items-center gap-1.5"><Icon icon="tabler:circle-check-filled" /> Zero-Tracking</span>
              </div>
            </div>

            {/* Bild-Integration */}
            <div className="md:col-span-6 h-full">
              <img
                src={analyticsImg}
                alt="EFDSOE Infrastructure Analytics & Control"
                className="w-full h-80 md:h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Ebene 2 & 3 Detail Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Stiftung & Governance */}
          <div className="border-default-200 from-default-100 rounded-3xl border bg-gradient-to-b to-transparent p-2.5">
            <div className="border-default-100 rounded-2xl border bg-white p-8 h-full flex flex-col justify-between">
              <div>
                <div className="mb-4 inline-flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon icon="tabler:building-bank" className="size-6" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-default-950">1. Stiftung & Governance</h3>
                <p className="text-default-600 text-sm leading-relaxed mb-4">
                  Die gemeinnützige Trägerschaft verhindert die kommerzielle Verwertung von Bildungsinhalten und garantiert langfristige Unabhängigkeit.
                </p>
              </div>
              <div className="pt-4 border-t border-default-100 flex gap-2">
                <span className="text-xs bg-default-100 text-default-700 px-3 py-1 rounded-full font-medium">Gemeinnützig</span>
                <span className="text-xs bg-default-100 text-default-700 px-3 py-1 rounded-full font-medium">Unverkäuflich</span>
              </div>
            </div>
          </div>

          {/* Lernplattform fseda.online */}
          <div className="border-default-200 from-default-100 rounded-3xl border bg-gradient-to-b to-transparent p-2.5">
            <div className="border-default-100 rounded-2xl border bg-white p-8 h-full flex flex-col justify-between">
              <div>
                <div className="mb-4 inline-flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon icon="tabler:school" className="size-6" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-default-950">3. Lernplattform fseda.online</h3>
                <p className="text-default-600 text-sm leading-relaxed mb-4">
                  Die direkte Anwenderebene mit interaktiven Kursen, offenen Lehrmaterialien (OER) und modernen Schnittstellen für Schulen.
                </p>
              </div>
              <div className="pt-4 border-t border-default-100 flex gap-2">
                <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">Open LMS</span>
                <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">LTI Integrations</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;