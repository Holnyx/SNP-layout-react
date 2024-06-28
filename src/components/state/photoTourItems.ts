

export type TravelPhotoItem = {
  src: string;
  alt: string;
  class?: string;
  classViewport?: string;
};

const travelPhotoItems: TravelPhotoItem[] = [
  { src: '/img/travel-photo-1.png', alt: "Путешествие в горы" },
  { src: '/img/travel-photo-2.png', alt: "Путешествие в горы", class: "image-off" },
  { src: '/img/travel-photo-3.png', alt: "Путешествие в горы", class: "image-off-viewport" },
  { src: '/img/travel-photo-4.png', alt: "Путешествие в горы" },
  { src: '/img/travel-photo-5.png', alt: "Путешествие в горы" },
  { src: '/img/travel-photo-6.png', alt: "Путешествие в горы", class: "image-off-viewport" },
  { src: '/img/travel-photo-7.png', alt: "Путешествие в горы", class: "image-off" },
  { src: '/img/travel-photo-8.png', alt: "Путешествие в горы" },
  { src: '/img/travel-photo-9.png', alt: "Путешествие в горы" },
  { src: '/img/travel-photo-10.png', alt: "Путешествие в горы" },
  { src: '/img/travel-photo-11.png', alt: "Путешествие в горы" },
  {
    src: '/img/travel-photo-12.png',
    alt: "Путешествие в горы",
    class: "image-off-viewport",
  },
  { src: '/img/travel-photo-13.png', alt: "Путешествие в горы", class: "image-off" },
];

export default travelPhotoItems
