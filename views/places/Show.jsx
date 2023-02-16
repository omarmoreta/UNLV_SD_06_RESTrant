const React = require("react")
const Def = require("../Default")

const Show = ({ place, id}) => {
    return (
        <Def>
            <main>
                <div className="row">
                    <div className="col-sm-6">                    
                        <img src={ place.pic } alt={ place.name } />
                        <h3 className="text-center">
                            Located in { place.city }, { place.state }
                        </h3>          
                    </div>
                    <div className="col-sm-6">
                        <h1>{ place.name }</h1>                        
                        <h2>Rating</h2>
                        <h2>Description</h2>
                        <h3>
                        </h3>
                        <h4 className="text-center">
                            Serving { place.cuisines }
                        </h4>              
                        <a href={ `/places/${ id }/edit` } className="btn btn-warning">Edit</a>
                        <form action={ `/places/${ id }?_method=DELETE` } method="POST">
                            <button type="submit" className="btn btn-danger">Delete</button>
                        </form>
                    </div>                
                </div>
                <hr/>
                <div> 
                    <h3 className="text-center">Comments</h3>
                    <h4 className="text-center">Got Your Own Rant or Rave?</h4>
                </div>  
                <form action={`/places/${ id }/comment`} method="POST">                    
                    <div>
                        <label htmlFor="author">Name: </label>
                        <input className="form-control" type="text" id="author" name="author" placeholder="Name Here!"/>
                    </div>
                    <div>
                        <label htmlFor="stars">Rating: </label>                                
                        <input className="form-control" type="range" step="0.5" min="1" max="5" id="stars" name="stars"/>                                  
                    </div>
                    <div>
                        <label htmlFor="rant">Is this a rant? </label>             
                        <input type="checkbox" id="rant" name="rant" />                         
                    </div>
                    <div>
                        <label htmlFor="content">Comment: </label>
                        <textarea className="form-control" type="text" id="content" name="content" placeholder="I love this place! ..."></textarea>
                        <button className="btn btn-primary" type="submit">Submit</button>
                    </div>                    
                </form>
            </main>
        </Def>
    )
}

module.exports = Show