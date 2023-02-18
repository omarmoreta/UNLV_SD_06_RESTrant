const React = require("react")
const Default = require("./Default")

const Home = () => {
    return(
        <Default>
            <h1>RESTrant</h1>
            <main>                
                <div>
                    <img className="mt-3" src="/images/burger.jpg" alt="A table with plates of food" />
                </div>                           
                <a href="/places" >
                    <button type="button" className="mt-2 mb-2 btn btn-primary">Places Page</button>
                </a>                             
            </main>
        </Default>
    )
}

module.exports = Home