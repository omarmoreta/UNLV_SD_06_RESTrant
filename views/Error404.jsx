const React = require("react")
const Default = require("./Default")

const Error404 = () => {
    return (
        <Default>
            <h1>404: PAGE NOT FOUND</h1>
            <main>
                <h2 id="msg404">Oops, sorry, we can't find this page!</h2>
                <div className="container">                    
                    <img src="/images/404.jpg" alt="Upside down ice cream cone on the ground" />
                </div>
                <a href="/" >
                    <button type="button" className="mt-2 mb-2 btn btn-primary">Home Page</button>
                </a>              
            </main>
        </Default>
    )
}

module.exports = Error404