const React = require("react")
const Default = require("../Default")

const Index = ({ places }) => {
    let placesFormatted = places.map((place, index) => {
        return (
            <div className="col-sm-6 mt-3" key={ index }>
                <h2 className="text-center">
                    <a href={`/places/${place.id}`}>{ place.name }</a>
                </h2>
                <p className="text-center">{ place.cuisines}</p>
                <img className="img-fluid px-3" id="images" src={ place.pic } alt={ place.name } />
                <p className="text-center">
                    Located in { place.city }, { place.state }
                </p>
            </div>
        )
    })
    return (
        <Default>
            <h1>Places to Rant or Rave About</h1>
            <main>                
                <div className="row">{ placesFormatted }</div>
            </main>
        </Default>
    )
}

module.exports = Index