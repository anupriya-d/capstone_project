
import fiordlandImg from '../assets/fiordland.jpg'
import aspiringImg from '../assets/mountaspiring.jpg'
import cookgImg from '../assets/mountcook.jpg'
import easy from '../assets/easytrack.jpg'
import short from '../assets/short.jpg'
import great from '../assets/great.jpg'
import tramping from '../assets/tramping.jpg'




export const parks = [
    {
      id: 1,
      image:fiordlandImg,
      name: "Fiordland",
      descrpition: `
Fiordland National Park is in the southwest of New Zealand’s South Island. It’s known for the glacier-carved fiords of Doubtful and Milford sounds. A beech forest trail on the sandy Milford shore offers views of towering Mitre Peak. ` 
    },
    {
      id: 2,
      image:aspiringImg,
      name: "Mount Aspiring",
      descrpition: `Mount Aspiring National Park is in the Southern Alps of the South Island of New Zealand, north of Fiordland National Park, situated in Otago and Westland regions. The park forms part of the Te Wahipounamu World Heritage Site`,
    },
    {
      id: 3,
      image:cookgImg,
      name: "Aoraki Mount Cook",
      descrpition:`Aoraki / Mount Cook National Park is a national park located in the central-west of the South Island of New Zealand. It was established in October 1953 and takes its name from the highest mountain in New Zealand, Aoraki / Mount Cook`,
    },
  ];

  export const walks = [
    {
      id: 1,
      name:"easy",
      image:easy,
      title: "Easy Access Walks",
      descrpition: `Experience nature effortlessly: Easy access walks await.` 
    },
    {
      id: 2,
      name:"short",
      image:short,
      title: "Short Walks",
      descrpition: `Quick escapes, lasting memories: Short walks for every adventurer`,
    },
    {
      id: 3,
      name:"great",
      image:great,
      title: "Great Walks",
      descrpition:`Epic journeys, unforgettable vistas: Embark on our great walks.`,
    },
    {
        id: 4,
        name:"tramping",
        image:tramping,
        title: "Tramping",
        descrpition:`AWhere trails become tales: Tramping through untouched beauty.`,
      }
  ];