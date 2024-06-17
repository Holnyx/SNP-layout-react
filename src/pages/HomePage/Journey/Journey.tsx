import React from 'react';
import menuButtonState from '../../../components/state/journeyLinkState';
import journeyItems from '../../../components/state/journeyItemsState';
import ButtonInfo from '../../../components/commons/ButtonComponent/ButtonComponent';

const Journey = () => {
    return (
        <section className='journey-box'>
            <div className='menu'>
                <h2 className='menu__title' id="link-tour">Выбери свой тур</h2>
                <ul className='menu__items'>
                    {menuButtonState.map((menu, i) =>
                        <li key={i}>
                            <button className="menu__button" id={menu.id}>{menu.title}</button>
                        </li>
                    )}
                </ul>
            </div>
            <div className="travel-boxes wrapper" id='journey'>
                {journeyItems.map((el, i) => {
                    return (
                        <div key={i} className='travel-card travel-card--hover' id={el.id} style={{ backgroundImage: `url(${el.background})` }}>
                            <div className='travel-card__content'>
                                <h3 className='travel-card__title'>{el.title}</h3>
                                <span className='travel-card__subtitle'>{el.value}</span>
                            </div>
                            <ButtonInfo title={'Подробнее'} />
                        </div>
                    )
                })}
            </div>
        </section >
    );
};
export default Journey;