
type TravelHistoryInfoItem = {
    text: string
    point?: string[]
}


type TravelHistoryItem = {
    title: string
    info: TravelHistoryInfoItem,
    background: string
    social: string[]
}

const travelHistoryState: TravelHistoryItem[] = [
  {
    title: "Автостопом в Стамбул",
    info: {
      text: "Идейные соображения высшего порядка, а также рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании новых предложений:",
      point: ["вкусная еда", "дешевый транспорт", "красивый город"],
    },
    background: '/img/story-photo-1.png',
    social: ["instagram", "facebook", "YouTube"],
  },
  {
    title: "Автостопом в Стамбул",
    info: {
      text: "Идейные соображения высшего порядка, а также рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании новых предложений.",
    },
    background: '/img/story-photo-2.png',
    social: ["instagram", "ВКонтакте"],
  },
  {
    title: "Автостопом в Стамбул",
    info: {
      text: "Идейные соображения высшего порядка, а также рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании новых предложений.",
    },
    background: '/img/story-photo-3.png',
    social: ["instagram", "facebook", "ВКонтакте"],
  },
];
export default travelHistoryState