const React = require("react")
const Default = require("../Default")

const Edit = ({ place, id }) => {
    return (
        <Default>
            <main>
                <h1>Edit Places</h1>
                <form method="POST" action={`/places/${ id }?_method=PUT`}>
                    <div>
                        <div className="form-group col">
                            <label htmlFor="name">Place Name</label>
                            <input id="name" name="name" defaultValue={ place.name } required/>
                        </div>
                        <div className="form-group col">
                            <label htmlFor="pic">Place Picture</label>
                            <input id="pic" name="pic" defaultValue={ place.pic }/>
                        </div>
                        <div className="form-group col">
                            <label htmlFor="city">City</label>
                            <input id="city" name="city" defaultValue={ place.city }/>
                        </div>
                        <div className="form-group col">
                            <label htmlFor="state">State</label>
                            <input id="state" name="state" defaultValue={ place.state }/>
                        </div>
                        <div className="form-group col">
                            <label htmlFor="cuisines">Cuisines</label>
                            <input id="cuisines" name="cuisines" defaultValue={ place.cuisines }/>
                        </div>
                        <input className="btn btn-primary" type="submit" value="Update Place" />
                    </div>                
                </form>
            </main>
        </Default>
    )
}

module.exports = Edit