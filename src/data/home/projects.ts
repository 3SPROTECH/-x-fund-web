export interface ProjectData {
  id: number;
  title: string;
  location: string;
  price: string;
  investorsCount: number; // The number in the circle
  financedPercentage: number;
}

export const projectsData: ProjectData[] = [
    { id: 1, title: "Immeuble Haussmannien", location: "Paris, France", price: "1 200 000 €", investorsCount: 75, financedPercentage: 100 },
    { id: 2, title: "Résidence Étudiante", location: "Lyon, France", price: "850 000 €", investorsCount: 69, financedPercentage: 87 },
    { id: 3, title: "Loft Industriel", location: "Bordeaux, France", price: "600 000 €", investorsCount: 33, financedPercentage: 100 },
    { id: 4, title: "Villa des Fleurs", location: "Nice, France", price: "2 500 000 €", investorsCount: 6, financedPercentage: 94 },
    { id: 5, title: "Locaux Commerciaux", location: "Marseille, France", price: "450 000 €", investorsCount: 13, financedPercentage: 100 },
  ];