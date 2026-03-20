export interface Project {
  title: string;
  description: string;
  stack: string[];
  demoUrl?: string;
  repoUrl?: string;
  imageSrc?: string;
}

export const projects: Project[] = [
  {
    title: "Mathutor an Educational Game",
    description: "Mathematics Game with tutorial",
    stack: ["Educational", "Android"],
  },
  {
    title: "TagPictionary",
    description: "Tagalog Picture Dictionary",
    stack: ["Educational", "Android"],
  },
  {
    title: "KulPop",
    description: "An Filipino subject tutorial about media for students",
    stack: ["Educational", "Android"],
    demoUrl:
      "https://drive.google.com/uc?export=download&id=1mFiaE1JdrYOzIdeeWFfHsnxNzxUopaz7",
  },
  {
    title: "Wikabulary",
    description: "An Filipino Vocabulary Games for students",
    stack: ["Educational", "Android"],
  },
  {
    title: "React Project Advance Crud",
    description:
      "A project that made by react with advance Crud and Bootstrap 4",
    stack: ["React", "CRUD", "Bootstrap 4"],
  },
];
