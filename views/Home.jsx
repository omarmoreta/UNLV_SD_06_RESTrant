const React = require("react")
const Default = require("./Default")

const Home = () => {
    return(
        <Default>
            <main>
                <h1>HOME</h1>
                <a href="/places">
                    <button type="button" className="btn btn-primary">Places Page</button>
                </a>
            </main>
        </Default>
    )
}

module.exports = Home