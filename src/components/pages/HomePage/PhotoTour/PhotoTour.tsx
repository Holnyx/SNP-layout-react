import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import travelPhotoState, { TravelPhotoItem } from '../../../state/photoTourState';




const PhotoTour = () => {
    return (
        <section className="photo">
            <div className="info">
                <h2 className="info__title">Фотографии путешествий</h2>
                <span className="info__sub-title">Идейные соображения высшего порядка, а также рамки и место
                    обучения кадров</span>
            </div>
            <div className="images-travel">
                <figure className="images-travel__box">
                    {travelPhotoState.map((photo, i) =>
                        <Image key={i} className={photo.class} src={photo.src} alt={photo.alt} unoptimized priority={true} width={400} height={300}></Image>
                    )}
                </figure>
            </div>
        </section>
    );
};
export default PhotoTour