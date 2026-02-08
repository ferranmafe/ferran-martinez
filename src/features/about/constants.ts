import travelperkLogo from "@/assets/images/travelperk.jpeg";
import adevintaLogo from "@/assets/images/adevinta.png";
import iriLogo from "@/assets/images/iri.jpeg";
import datisionLogo from "@/assets/images/datision.jpeg";
import upfLogo from "@/assets/images/upf.png";
import upcLogo from "@/assets/images/upc.png";
import type { Education, Job } from "./types";

export const JOBS: Job[] = [
  {
    jobTitle: "Software Engineer",
    company: "TravelPerk",
    link: "https://www.travelperk.com/",
    logo: travelperkLogo,
    startingDate: "Nov 2024",
  },
  {
    jobTitle: "Senior Software Engineer",
    company: "Adevinta",
    link: "https://adevinta.com/",
    logo: adevintaLogo,
    startingDate: "Apr 2024",
    endingDate: "Nov 2024",
  },
  {
    jobTitle: "Software Engineer",
    company: "Adevinta",
    link: "https://adevinta.com/",
    logo: adevintaLogo,
    startingDate: "Nov 2022",
    endingDate: "Apr 2024",
  },
  {
    jobTitle: "Software Engineer",
    company: "Institut de Robòtica i Informàtica Industrial (IRI)",
    link: "https://www.iri.upc.edu/",
    logo: iriLogo,
    startingDate: "Oct 2022",
    endingDate: "Nov 2023",
  },
  {
    jobTitle: "Software Engineer",
    company: "Datision",
    link: "https://datision.com/",
    logo: datisionLogo,
    startingDate: "Nov 2018",
    endingDate: "Mar 2021",
  },
  {
    jobTitle: "Intern",
    company: "Institut de Robòtica i Informàtica Industrial (IRI)",
    link: "https://www.iri.upc.edu/",
    logo: iriLogo,
    startingDate: "Jun 2017",
    endingDate: "Oct 2018",
  },
];

export const EDUCATION: Education[] = [
  {
    title: "Masters in Intelligent Interactive Systems",
    institution: "Universitat Pompeu Fabra (UPF)",
    link: "https://www.iri.upc.edu/",
    logo: upfLogo,
    startingDate: "2020",
    endingDate: "2021",
  },
  {
    title: "Computer Science Degree",
    institution: "Universitat Politècnica de Catalunya (UPC)",
    link: "https://www.iri.upc.edu/",
    logo: upcLogo,
    startingDate: "2015",
    endingDate: "2019",
  },
];