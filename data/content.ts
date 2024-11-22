export const contentData = [
  {
    title: "Work Experience",
    items: [
      {
        title: "University of Payao ปี1",
        subTitle: "SE UP",
        date: "2566",
        description: "xxx.",
      },
      {
        title: "University of Payao ปี2",
        subTitle: "SE UP",
        date: "2567",
        description: "xxx.",
      },
    ],
  },
  {
    title: "Education School",
    items: [
      {
        title: "Chonburi Sukkhabot School",
        subTitle: "Math-Eng มัธยมศึกษาปีที่1-3",
        date: "2561 - 2563",
        
      },
      {
        title: "Chonburi Sukkhabot School",
        subTitle: "Math-Eng มัธยมศึกษาปีที่4-6",
        date: "2563 - 2565",
        
      },
    ],
  },

];

export type Content = {
  title: string;
  items: {
    title: string;
    subTitle: string;
    date: string;
    description: string;
  }[];
};

export type ContentData = Content[];
