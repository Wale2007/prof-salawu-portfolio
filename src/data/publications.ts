export interface PublicationType {
  id: string;
  authors: string;
  year: number;
  title: string;
  journal: string;
  volumeIssue?: string;
  pages?: string;
  type: "Journal" | "Conference" | "In Press";
  country?: string;
  isInternational?: boolean;
  featured?: boolean;
}

export const publicationsData: PublicationType[] = [
  {
    id: "pub1",
    authors: "Adetuyi, A. R., Salawu, S. O., et al.",
    year: 2025,
    title: "Protective effect of Spondias mombin leaf extracts against aluminum chloride-induced brain oxidative stress, inflammation and apoptosis in rats",
    journal: "Future Journal of Pharmaceutical Sciences",
    volumeIssue: "11",
    pages: "49",
    type: "Journal",
    isInternational: true,
    featured: true
  },
  {
    id: "pub2",
    authors: "Akinduko, A., Salawu, S. O., et al.",
    year: 2024,
    title: "Assessment of the anxiolytic, antidepressant, and antioxidant potential of Parquetina nigrescens in Wistar rats",
    journal: "Journal of Ethnopharmacology",
    volumeIssue: "322",
    pages: "117597",
    type: "Journal",
    isInternational: true,
    featured: true
  },
  {
    id: "pub3",
    authors: "Micheli, L., Salawu, S. O., et al.",
    year: 2023,
    title: "Ellagitannins and triterpenoids extracts of Anogeissus leiocarpus stem bark: Protective effects against osteoarthritis",
    journal: "Phytotherapy Research",
    volumeIssue: "1(3)",
    pages: "1–14",
    type: "Journal",
    isInternational: true,
    featured: true
  },
  {
    id: "pub4",
    authors: "Akande, T., Salawu, S. O., et al.",
    year: 2022,
    title: "1H NMR and HPLC-DAD-MS characterization of ellagitannins and triterpenoids of Anogeissus leiocarpus",
    journal: "Food Chemistry",
    volumeIssue: "375",
    pages: "131813",
    type: "Journal",
    country: "UK",
    isInternational: true,
    featured: true
  },
  {
    id: "pub5",
    authors: "Salawu, S. O., et al.",
    year: 2011,
    title: "HPLC/DAD/MS Phenolic Profile and Antioxidant Activities of Struchium sparganophora and Telfairia occidentalis",
    journal: "Food Chemistry",
    volumeIssue: "115(4)",
    pages: "1568–1574",
    type: "Journal",
    country: "UK",
    isInternational: true,
    featured: true
  },
  {
    id: "pub6",
    authors: "Salawu, S. O., et al.",
    year: 2021,
    title: "Polyphenol Oxidase from African Bush Mango (Irvingia gabonensis) evaluation",
    journal: "Journal of Food Biochemistry",
    type: "Journal",
    isInternational: true,
    featured: false
  },
  {
    id: "pub7",
    authors: "Salawu, S. O.",
    year: 2020,
    title: "Impact of Phytochemicals on free radical biology in Wistar rats",
    journal: "Journal of Medicinal Food",
    type: "Journal",
    isInternational: true,
    featured: false
  },
  {
    id: "pub8",
    authors: "Salawu, S. O., and Collaborators",
    year: 2024,
    title: "Biopesticides of Plant Origin as Pest Control against Cocoa Moth",
    journal: "African Journal of Biotechnology",
    type: "Journal",
    isInternational: false,
    featured: false
  },
  {
    id: "pub9",
    authors: "Salawu, S. O., et al.",
    year: 2015,
    title: "Antioxidant Potentials of Phenolic Extracts of Underutilized Green Leafy Vegetables",
    journal: "Nutrition Society of Nigeria Proceedings",
    type: "Conference",
    isInternational: false,
    featured: false
  },
  {
    id: "pub10",
    authors: "Salawu, S. O., et al.",
    year: 2025,
    title: "In-vitro Gastrointestinal Digestion Models of Dietary Phenolics",
    journal: "Journal of Functional Foods",
    type: "In Press",
    isInternational: true,
    featured: false
  }
];
