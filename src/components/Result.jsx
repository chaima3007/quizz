/* eslint-disable react/prop-types */

// import React from 'react';

function Result({ score }) {
    // Déterminer le message en fonction du score
    const getMessage = (score) => {
        if (score <= 4) return "Oups, tu peux mieux faire ! 😕";
        if (score <= 7) return "Pas mal, tu t'en sors bien ! 👍";
        return "Félicitations, tu es un expert ! 🎉";
    };

    return (
        <div className="result-container">
            <h2>Ton score final : {score}/10</h2>
            <p>{getMessage(score)}</p>
        </div>
    );
}

export default Result;