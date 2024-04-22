
import fiordlandImg from '../assets/fiordland.jpg'
import aspiringImg from '../assets/mountaspiring.jpg'
import cookgImg from '../assets/mountcook.jpg'

export const parks = [
    {
      id: 1,
      image:fiordlandImg,
      name: "Fiordland National Park",
      descrpition: `
Fiordland National Park is in the southwest of New Zealand’s South Island. It’s known for the glacier-carved fiords of Doubtful and Milford sounds. A beech forest trail on the sandy Milford shore offers views of towering Mitre Peak. ` 
    },
    {
      id: 2,
      image:aspiringImg,
      name: "Mt.Aspiring National Park",
      descrpition: `Mount Aspiring National Park is in the Southern Alps of the South Island of New Zealand, north of Fiordland National Park, situated in Otago and Westland regions. The park forms part of the Te Wahipounamu World Heritage Site`,
    },
    {
      id: 3,
      image:cookgImg,
      name: "Aoraki/Mt.Cook National Park",
      descrpition:`Aoraki / Mount Cook National Park is a national park located in the central-west of the South Island of New Zealand. It was established in October 1953 and takes its name from the highest mountain in New Zealand, Aoraki / Mount Cook`,
    },
  ];

  export const walks = [
    {
      id: 1,
      image:fiordlandImg,
      title: "Easy Access Walks",
      descrpition: `Experience nature effortlessly: Easy access walks await.` 
    },
    {
      id: 2,
      image:aspiringImg,
      title: "Short Walks",
      descrpition: `Quick escapes, lasting memories: Short walks for every adventurer`,
    },
    {
      id: 3,
      image:cookgImg,
      title: "Great Walks",
      descrpition:`Epic journeys, unforgettable vistas: Embark on our great walks.`,
    },
    {
        id: 4,
        image:cookgImg,
        title: "Tramping",
        descrpition:`AWhere trails become tales: Tramping through untouched beauty.`,
      }
  ];