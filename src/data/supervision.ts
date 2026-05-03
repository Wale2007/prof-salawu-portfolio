export interface SupervisionType {
  name: string;
  topic: string;
  year: number | string;
  type: "PhD" | "MSc";
  category?: "Major" | "Minor";
}

export const supervisionData: SupervisionType[] = [
  // PhD Students
  {
    name: "Akinduko, A.",
    topic: "Anti-stress, Antidepressant and Anxiolytic Properties of Selected Herbs",
    year: 2021,
    type: "PhD"
  },
  {
    name: "Akande, T.",
    topic: "Phytochemical Investigation, Anti-inflammatory Activities and Anti-Neuropathic Potentials",
    year: 2022,
    type: "PhD"
  },
  {
    name: "Adeseko, C.J.",
    topic: "Polyphenol Oxidase from African Bush Mango",
    year: 2020,
    type: "PhD"
  },
  {
    name: "Atansuyi, O.N.",
    topic: "African Birch extract on Aluminium/Cadmium Induced Neurotoxicity",
    year: 2023,
    type: "PhD"
  },
  {
    name: "Adetuyi, A.R.",
    topic: "Neurotherapeutic Evaluation of Hog Plum",
    year: 2024,
    type: "PhD"
  },

  // Master's Degree - Major Supervision
  { name: "Eseigbe, Mercy Imade", topic: "Phytochemical Studies and Antioxidant Activities of Some Medicinal Plants Commonly Used in The Treatment of Haemorrhoids", year: 2013, type: "MSc", category: "Major" },
  { name: "Udi Efe", topic: "Nutritional Potential, Antioxidant Activities and Phenolic composition of white and Purple Sweet Potato Flesh and Peels", year: 2014, type: "MSc", category: "Major" },
  { name: "Shuaibu Ramotu", topic: "Antioxidant Activities, Nutritional Potential and Physico-chemical Analysis of Unripe plantain/Millet flour blend", year: 2014, type: "MSc", category: "Major" },
  { name: "Alao Odunayo Funmilola", topic: "Antioxidant potentials and inhibitory action of in vitro enzyme digested local rice (oryza sativa) phenolic extracts on acetyl-cholinesterase activity and Fe2+ induced lipid oxidation in rat liver and brain homogenate", year: 2015, type: "MSc", category: "Major" },
  { name: "Fakorede Christianah Bola", topic: "Antioxidant potentials and inhibitory action of in vitro enzyme digested white and yellow yam (dioscorea rotundata and dioscorea cayenesis) phenolic extracts on actylcholinesterase activity and Fe2+ induced lipid oxidation in rat liver and brain homogenate", year: 2015, type: "MSc", category: "Major" },
  { name: "Akinwumi, Banke Margaret", topic: "In vitro Startch Digestibility of Unripe Plantain-Wheat Composite Bread and Their Anti- diabetics in Wistar Rats", year: 2015, type: "MSc", category: "Major" },
  { name: "Ajiboye Blessing Praise", topic: "Antioxidant potentials and inhibitory action of in vitro enzyme digested white and yellow bitter yam (dioscorea dumetorum) phenolic extracts on acetyl-cholinesterase and Fe2+ induced lipid oxidation in rat liver and brain homogenate", year: 2015, type: "MSc", category: "Major" },
  { name: "Fabunmi Babatunde James", topic: "Nutritional Potentials and Changes in Antioxidant Activities of Composite Flour of Unripe Plantain-Sweet Potato after in vitro Enzyme Digestion", year: 2016, type: "MSc", category: "Major" },
  { name: "Olukemi, Bukola Eugenia", topic: "Antioxidant Properties and Mineral Bio-accessibility of Basella rubra After Simulated Human Gastro-Intestinal Digestion", year: 2016, type: "MSc", category: "Major" },
  { name: "Folorunso Oluwaseun Mary", topic: "Antioxidant Potential and Amino Acid Profile of Phaseolus lunatus (Lima Beans) After Simulated Human Gastrointestinal Digestion", year: 2016, type: "MSc", category: "Major" },
  { name: "Olaniyi Musiliyu Akande", topic: "Effect of Blanching on Antioxidant Potential and Nutrient/Anti-nutrient Content of Two Varieties of Lagos Spinach", year: 2016, type: "MSc", category: "Major" },
  { name: "Akinseye Olanrewaju Roland", topic: "Assessment of Mentha piperita and Glycyrrhiza glabra Tea Infusions as Functional Food and Their Effect on Some Biochemical Markers in Albino Rats", year: 2017, type: "MSc", category: "Major" },
  { name: "Ibiwoye, Oluwakemi Eniola", topic: "Biochemical evaluation of two tea infusions (Hypericum perforatum and Matricaria chamomilla) as functional foods in male Wistar rats", year: 2017, type: "MSc", category: "Major" },
  { name: "Faleye, Bolanle Christianah", topic: "Phytochemical, Antioxidant Investigation and Sedative Action of Avocardo Pear (Perseae Americana) and Lowveld Bead-String (Alchornea laxiflora) Used in The Management Of Insomnia", year: 2018, type: "MSc", category: "Major" },
  { name: "Adelodun Kehinde Morenike", topic: "Sedative Potential of Some Medicinal Plants and Their Effects on Liver and Kidney Functions", year: 2018, type: "MSc", category: "Major" },
  { name: "Olatunde F. Faloye", topic: "Antioxidant Activities and Neuroprotective Capacity of Tomato (Lycopersicum Esculentum) Fruit and Paste after Simulated in Vitro Digestion", year: 2018, type: "MSc", category: "Major" },
  { name: "Adegbenro, Abimbola Abiodun", topic: "Antioxidant and Hyperlipidemic Activities of Gongronema latifolium Benth and Celocia argentia Linn on Fat Induced Hyperlipidemic", year: 2019, type: "MSc", category: "Major" },
  { name: "Edet, Jane Hyginus", topic: "Neuroprotective and Anti-Stress Effect of Hot Water Infusions of Ocimum tenuiflorum (Holy Basil) and Sambucus nigra (Elder Berry) Teas in Male Albino Rats", year: 2019, type: "MSc", category: "Major" },
  { name: "Omoniyi, Femi Emmanuel", topic: "Neuroprotective and Anti-Stress Effects of Hot Water Infusions of Passion Flower (Passiflora incarnate Linn) and Rooibos (Aspalathus linearis Linn) Teas in Male Albino Rats", year: 2019, type: "MSc", category: "Major" },
  { name: "Olawale, Atinuke Adebimpe", topic: "Neuro-protective Effects and Anti-stress Properties of Hot-Water Tea Infusions of Leonurus cardiaca Linn (Motherwort Tea) and Crataegus monogyna Jacg (Hawthorne Tea) in Male Albino Rats", year: 2019, type: "MSc", category: "Major" },
  { name: "Adedeji, Funmilola Esther", topic: "Antioxidant and Anti-Inflammatory Activities of Heliotropium indicum and Gnetum africanum leaves after Simulated Gastro-Intestinal Digestion Diabetic Potential In vitro", year: 2021, type: "MSc", category: "Major" },
  { name: "Oyinbo Samuel Adebisi", topic: "Phytochemical Investigation and Anti-inflammatory Potential of Paullina pinnata and Acanthus montanus after Simulated Human Gastrointestinal Digestion", year: 2021, type: "MSc", category: "Major" },
  { name: "Akinleye Bukunmi Sarah", topic: "Evaluation of Anxiolytic and Antidepressant-like Effect of Aqueous Extract of Corchorus olitorius", year: 2023, type: "MSc", category: "Major" },
  { name: "Oluwatosin Faith Oghuansuan", topic: "Effect of Aqueous Extract of Corchorus olitorius (L.) on Male Sexual Dysfunction Associated with Anxiety and Depression in Rats", year: 2023, type: "MSc", category: "Major" },

  // Master's Degree - Minor Supervision
  { name: "David Oladipupo", topic: "Effect of Storage and Insect Infestation on The Antioxidant Activities, Phenolic Content and Nutrient Composition of Some Varieties of Cowpeas", year: 2012, type: "MSc", category: "Minor" },
  { name: "Ogunsina Olabode Isaiah", topic: "Antioxidant Capacities and Antimicrobial Potential of individual and Combined Phenolic Compounds in Pearl Millet", year: 2013, type: "MSc", category: "Minor" },
  { name: "Okediran, Olukemi Abimbola", topic: "Antioxidant and Antimicrobial Potential of Methanolic Extracts of Some Commonly Consumed Spices", year: 2014, type: "MSc", category: "Minor" },
  { name: "Ogunnusi Hannah Oluwakemi", topic: "Antioxidant potentials and inhibitory action of in vitro enzyme digested underutilized legumes phenolic extracts on acetylcholinesterase activity and Fe2+ induced lipid oxidation in rat liver and brain homogenate", year: 2015, type: "MSc", category: "Minor" },
  { name: "Aladenika Yetunde Vic", topic: "Phytochemical and Mineral Composition of Camellia sinesis and Matricaria chamomilla Tea Infusions and Their Effect on Some Biochemical Markers in Albino Rats", year: 2017, type: "MSc", category: "Minor" },
  { name: "Esan Israel Ayotunde", topic: "Antioxidant Potential and Mineral Composition of Two Tea Infusions (Moringa oleifera and Glycyrrhiza glabra) and Their Biochemical Effect in Male Albino Rats", year: 2017, type: "MSc", category: "Minor" },
  { name: "Olanegan, Olubunmi Esther", topic: "Antioxidant and Antihyperlipidemic Activities of Ageratum Conyzoides Linn and Portulaca oleracea Linn Leaves on Fat Induced Hyperlipidemic Rats", year: 2021, type: "MSc", category: "Minor" },
  { name: "Ajayi, Adeola Temitayo", topic: "Antioxidant Activity of African Blood Tonic (Eremomastax speciosa) and African Padauk (Pterocarpus soyaxuii) Leaves after Simulated Digestion and Their Anti- Diabetic Potential In vitro", year: 2021, type: "MSc", category: "Minor" },
  { name: "Ita, Lyndy Esessien", topic: "Antioxidant Activities of Editan (Lasianthera Africana Beauv.) and Atama (Heinsia Afzel.) after Simulated In Vitro Digestion and Their Inhibitory Action Against Enzyme Linked Diabetes", year: 2021, type: "MSc", category: "Minor" },
  { name: "Akintoye Oluwapelumi Nifesimi", topic: "Effect of Carpolobia lutea Leaf Extract on Erectile Dysfunction Induced by Paroxetine in Rats", year: 2024, type: "MSc", category: "Minor" },
  { name: "Adeleke, Oluwabori Nathaniel", topic: "Effect of Cashew Nut (Anacardium occidentalis) and Brazil Nut (Bertholletia excelsa) on Antioxidant and Neurochemical Markers in Reserpine-Induced Depression in Rat’s Model", year: 2024, type: "MSc", category: "Minor" },
  { name: "Borisade, Akinfemi Adewale", topic: "Effect of Ethanol Extract from Jute Leaves (Corchorus olitorius) on Benign Prostate Hyperplasia", year: 2024, type: "MSc", category: "Minor" }
];
