const React = require("react")
const Default = require("./Default")

const Home = () => {
    return(
        <Default>
            <main>
                <h1>RESTrant</h1>
                <div className="container">
                    <img src="/images/burger.jpg" alt="A table with plates of food" />
                </div>                           
                <a id="placesBtn" href="/places" >
                    <button type="button" className="btn btn-primary">Places Page</button>
                </a>                             
            </main>
        </Default>
    )
}

module.exports = Home