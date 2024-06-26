import ButtonInfo from '../components/commons/ButtonComponent/ButtonComponent'
import Head from 'next/head'

export default function NotFound() {
    return (
        <>
            <Head>
                <title>YourTour</title>
                <meta name="description" content="Идеальные путешествия существуют" />
                <meta name="keywords" content="путешествия, туры, туризм, отдых" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.svg" type="image/svg" ></link>
                <link
                    href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
                    rel="stylesheet"></link>
            </Head >
            <div className='not-found-page wrapper'>
                <h2 className='not-found-page__title'>404</h2>
                <h2 className='not-found-page__title'>Not Found</h2>
                <p className='not-found-page__info'>Could not find requested resource</p>
                <ButtonInfo href="/" title='Return Home' className={'not-found-page__link-home'} />
            </div>
        </>
    )
}