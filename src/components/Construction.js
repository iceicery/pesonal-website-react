import React from 'react';
export default function Construction({ isConstructed }) {
    const constructionClass = (`overlay ${!isConstructed && 'hidden'}`);
    return (
        <div className={constructionClass}>
            <div className="construction">
                <h1 className="construction__title">
                    Under construction.<br />Please come back later.
                </h1>
            </div>
        </div>
    )
}