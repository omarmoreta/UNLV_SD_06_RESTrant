const React = require("react")
const Default = require("../Default")

const New = ({ message, body }) => {
    let error, place = ""
    if (message) {
        place = body
        error = (
            <h4 className="alert alert-danger">{ message }</h4>
        )
    }
    return (
        <Default>  
            <h1>Add a New place</h1>
            { error }        
            <main className="container">                               
                <form className="px-5 row justify-content-md-center" action="/places" method="POST">               
                    <div className="form-group col-md-6 mt-2">
                        <label htmlFor="name">Place Name</label>
                        <input className="form-control" type="text" id="name" name="name" defaultValue={place.name} required />
                    </div>
                    <div className="form-group col-md-6 mt-2">
                        <label htmlFor="pic">Place Picture</label>
                        <input className="form-control" type="url" id="pic" name="pic" defaultValue={place.pic} />
                    </div>
                    <div className="form-group col-md-6 mt-2">
                        <label htmlFor="city">City</label>
                        <input className="form-control" type="text" id="city" name="city" defaultValue={place.city} />
                    </div>
                    <div className="form-group col-md-6 mt-2">
                        <label htmlFor="state">State</label>
                        <input className="form-control" type="text" id="state" name="state" defaultValue={place.state} />
                    </div>
                    <div className="form-group col-md-6 mt-2">
                        <label htmlFor="cuisines">Cuisines</label>
                        <input className="form-control" type="text" id="cuisines" name="cuisines" defaultValue={place.cuisines} required/>
                    </div>
                    <div className="form-group col-md-6 mt-2">
                        <label htmlFor="founded">Founded Year</label>
                        <input
                            type="number" 
                            className="form-control" 
                            id="founded" 
                            name="founded" 
                            defaultValue={new Date().getFullYear()} />
                    </div>
                    <div className="text-center">
                        <input className="btn btn-primary mt-2 mb-2" type="submit" value="Add Place" />
                    </div>                   
                </form>
            </main>
        </Default>
    )
}

module.exports = New