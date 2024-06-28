import { StaticImageData } from 'next/image';

type JourneyItemsItem = {
    title: string,
    value: string,
    background: StaticImageData | string
    id: string
}

const journeyItems: JourneyItemsItem[] = [
    {
        title: 'Путешествие в горы',
        value: 'от 80 000 руб',
        background: '/img/card-tour-photo-1.png',
        id: ''
    },
    {
        title: 'Путешествие в горы',
        value: 'от 80 000 руб',
        background: '/img/card-tour-photo-2.png',
        id: ''
    },
    {
        title: 'Путешествие в горы',
        value: 'от 80 000 руб',
        background: '/img/card-tour-photo-3.png',
        id: ''
    },
    {
        title: 'Путешествие в горы',
        value: 'от 80 000 руб',
        background: '/img/card-tour-photo-4.png',
        id: ''
    },
    {
        title: 'Путешествие в горы',
        value: 'от 80 000 руб',
        background: '/img/card-tour-photo-5.png',
        id: ''
    },
    {
        title: 'Путешествие в горы',
        value: 'от 80 000 руб',
        background: '/img/card-tour-photo-6.png',
        id: ''
    }
]
export default journeyItems