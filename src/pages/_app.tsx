import type { AppProps } from "next/app";
import '/src/styles/reset.sass'
import '/src/styles/wrapper.sass'
import '/src/styles/sectionHeadings.sass'
import '/src/styles/gap.sass'
import '/src/styles/style.sass'
import '../components/pages/HomePage/CreateTour/CreateTour.sass'
import '../components/pages/HomePage/Journey/Journey.sass'
import '../components/pages/HomePage/LetsGoSection/LetsGoStyle.sass'
import '../components/pages/HomePage/Main/Main.sass'
import '../components/pages/HomePage/PhotoTour/PhotoTour.sass'
import '../components/pages/HomePage/ReviewTour/Review.sass'
import '../components/pages/HomePage/TravelHistory/TravelHistory.sass'
import '/src/components/commons/Header/HeaderStyles.sass'
import '/src/components/commons/Footer/Footer.sass'
import '/src/components/commons/ButtonComponent/ButtonComponent.sass'
import '/src/styles/notFound.sass'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
