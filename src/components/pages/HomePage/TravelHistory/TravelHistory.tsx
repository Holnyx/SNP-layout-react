import React from 'react';
import Image from 'next/image';
import LetsGoSection from '../LetsGoSection/LetsGoSection';
import travelHistoryItems from '../../../state/travelHistoryItems';
import ButtonInfo from '../../../commons/ButtonComponent/ButtonComponent';



const TravelHistory = () => {
    return (
        <section className="travel-history-section">
            <div className="info ">
                <h2 className="info__title" id="link-history">Истории путешествий</h2>
                <span className="info__sub-title">Идейные соображения высшего порядка, а также рамки и место
                    обучения кадров</span>
            </div>
            <div className="travel-history-box wrapper" id="travel-history">
                {travelHistoryItems.map((el, i) =>
                    <div key={i} className='travel-history' id='travel-history'>
                        <div className='card-info'>
                            <h3 className='card-info__title'>{el.title}</h3>
                            <span className='card-info__subtitle'>{el.info.text}
                                <ul className='items'>
                                    {el.info.point && el.info.point.map((el, i) =>
                                        <li key={i}>{el}</li>
                                    )}
                                </ul>
                            </span>
                        </div>
                        <div className='social-container'>
                            <ButtonInfo title={'Подробнее'} />
                            <div className='social'>
                                {el.social.map((el, i) =>
                                    <a key={i} className='a a--hover a--active' href="">{el}</a>)}
                            </div>
                        </div>
                        <Image className='background-img' src={el.background} alt={'background-img'} unoptimized priority={true} width={1170} height={567}></Image>
                    </div>
                )}
            </div>
            <LetsGoSection />
        </section>
    );
};

export default TravelHistory