const React = require("react")
const Default = require("../Default")

const Index = ({ places }) => {
    let placesFormatted = places.map((place, index) => {
        return (
            <div key={ index }>
                <h2>{ place.name }</h2>
                <img src={ place.pic } alt={ place.name } />
            </div>
        )
    })
    return (
        <Default>
            <main>
                <h1>PLACES INDEX PAGE</h1>
                <div>{ placesFormatted }</div>
            </main>
        </Default>
    )
}

module.exports = Index