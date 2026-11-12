export interface LegalConfig {
  inFoundationPhase: boolean;
  brandName: string;
  officialFoundationName: string;
  legalForm: string;
  governingLaw: string;
  infrastructureLocation: string;
  responsiblePersonPreFoundation: {
    name: string;
    address: string;
    email: string;
  };
  foundationPostEntry: {
    registeredName: string;
    registryNumber: string; // Stiftungs- und Fondsanmerkung/Register-GZ
    address: string;
    boardMembers: string[];
    email: string;
  };
}

export const legalConfig: LegalConfig = {
  // SOFORT AUF 'false' STELLEN, SOBALD DIE EINTRAGUNG IM RECHTSREGISTER ERFOLGT IST
  inFoundationPhase: true,

  brandName: "EFDSOE",
  officialFoundationName: "EFDSOE – Stiftung für Europäische Datensouveränität & Offene Ökosysteme",
  legalForm: "Gemeinnützige Stiftung nach dem Bundes-Stiftungs- und Fondsgesetz 2015 (BStFG 2015)",
  governingLaw: "Österreichisches Recht / EU-Recht",
  infrastructureLocation: "Graz, Österreich (100% eigene EU-Infrastruktur)",

  // Phase A: Vor der Eintragung (Verantwortlicher i.S.d. Art. 4 Nr. 7 DSGVO)
  responsiblePersonPreFoundation: {
    name: "Initiator & Träger-Vertretung EFDSOE (in Gründung)",
    address: "Musterstraße 1, 8010 Graz, Österreich", // Ladefähige Anschrift eintragen
    email: "help@fseda.org",
  },

  // Phase B: Nach der Eintragung im Bundes-Stiftungs- und Fondsregister
  foundationPostEntry: {
    registeredName: "EFDSOE – Stiftung für Europäische Datensouveränität & Offene Ökosysteme",
    registryNumber: "GZ: [Nach Eintragung eintragen]",
    address: "Stiftungsstraße 1, 8010 Graz, Österreich",
    boardMembers: ["Stiftungsvorstand gemäß Gründungserklärung"],
    email: "help@fseda.org",
  },
};