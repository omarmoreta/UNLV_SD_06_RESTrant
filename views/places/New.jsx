const React = require("react")
const Default = require("../Default")

const New = () => {
    return (
        <Default>
            <main>
                <h1>Add a New place</h1>
                <form action="/places" method="POST">               
                    <div  className="form-group">
                        <label htmlFor="name">Place Name</label>
                        <input className="form-control" type="text" id="name" name="name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="pic">Place Picture</label>
                        <input className="form-control" type="url" id="pic" name="pic" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="city">City</label>
                        <input className="form-control" type="text" id="city" name="city" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="state">State</label>
                        <input className="form-control" type="text" id="state" name="state" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="cuisines">Cuisines</label>
                        <input className="form-control" type="text" id="cuisines" name="cuisines" required/>
                    </div>
                    <input className="btn btn-primary" type="submit" value="Add Place" />
                </form>
            </main>
        </Default>
    )
}

module.exports = New