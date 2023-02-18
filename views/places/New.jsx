const React = require("react")
const Default = require("../Default")

const New = () => {
    return (
        <Default>  
            <h1>Add a New place</h1>        
            <main className="container">
                
                <form className="row justify-content-md-center" action="/places" method="POST">               
                    <div className="form-group col-md-4 mt-2">
                        <label htmlFor="name">Place Name</label>
                        <input className="form-control" type="text" id="name" name="name" required />
                    </div>
                    <div className="form-group col-md-4 mt-2">
                        <label htmlFor="pic">Place Picture</label>
                        <input className="form-control" type="url" id="pic" name="pic" />
                    </div>
                    <div className="form-group col-md-4 mt-2">
                        <label htmlFor="city">City</label>
                        <input className="form-control" type="text" id="city" name="city" />
                    </div>
                    <div className="form-group col-md-4 mt-2">
                        <label htmlFor="state">State</label>
                        <input className="form-control" type="text" id="state" name="state" />
                    </div>
                    <div className="form-group col-md-4 mt-2">
                        <label htmlFor="cuisines">Cuisines</label>
                        <input className="form-control" type="text" id="cuisines" name="cuisines" required/>
                    </div>
                    <div className="form-group col-md-4 mt-2">
                        <label htmlFor="founded">Founded Year</label>
                        <input className="form-control" id="founded" name="founded" />
                    </div>
                    <input className="btn btn-primary col-md-4 mt-2" type="submit" value="Add Place" />
                </form>
            </main>
        </Default>
    )
}

module.exports = New