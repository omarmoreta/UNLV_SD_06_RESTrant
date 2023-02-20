const React = require("react")
const Def = require("../Default")

const Show = ({ place, id }) => {
    let comments = (
        <h3 className="inactive">
            No comments yet!
        </h3>
    )
    if (place.comments.length) {
        comments = place.comments.map( (comment, index) => {
            return (
                <div key={ index } className="border">
                    <h2 className="rant">
                        { comment.rant ? "Rant! 😡" : "Rave! 😻" }
                    </h2>
                    <h4>{ comment.content }</h4>
                    <h3>
                        <strong>- { comment.author }</strong>
                    </h3>
                    <h4>Rating: { comment.stars }</h4>
                </div>
            )
        })
    }  
    
    return (
        <Def>
            <main>
                <div className="row">
                    <div className="col-sm-6">                    
                        <img className="img-fluid mt-4 px-5" src={ place.pic } alt={ place.name } />
                        <h3 className="text-center mt-2">Located in { place.city }, { place.state }</h3>          
                    </div>
                    <div className="col-sm-6 mt-3">
                        <h1>{ place.name }</h1>                        
                        <h2>Rating</h2>
                        <h2>Description</h2>
                        <h3>{place.showEstablished()}</h3>
                        <h4 className="text-center">Serving { place.cuisines }</h4>              
                        <a href={ `/places/${ id }/edit` } className="col btn btn-warning">Edit</a>
                        <form action={ `/places/${ id }?_method=DELETE` } method="POST">
                            <button type="submit" className="btn btn-danger">Delete</button>
                        </form>
                    </div>                
                </div>
                <hr/>
                <div> 
                    <h3 className="text-center">Comments</h3>
                    { comments }
                    <h4 className="text-center">Got Your Own Rant or Rave?</h4>
                </div> 
                <div className="container">
                    <form className="row justify-content-md-center" action={`/places/${ id }/comment`} method="POST">                    
                        <div className="form-group col-md-4 mt-2">
                            <label htmlFor="author">Name: </label>
                            <input className="form-control" type="text" id="author" name="author" placeholder="Name Here!"/>
                        </div>
                        <div className="form-group col-md-4 mt-2">
                            <label htmlFor="stars">Rating: </label>                                
                            <input className="form-control" type="range" step="0.5" min="1" max="5" id="stars" name="stars"/>                                  
                        </div>
                        <div className="form-group col-md-4 mt-2">
                            <label htmlFor="rant">Is this a rant? </label>             
                            <input type="checkbox" id="rant" name="rant" />                         
                        </div>
                        <div className="form-group col-md-4 mt-2">
                            <label htmlFor="content">Comment: </label>
                            <textarea className="form-control" type="text" id="content" name="content" placeholder="I love this place! ..."></textarea>
                            <button className="btn btn-primary" type="submit">Submit</button>
                        </div>                    
                    </form>
                </div>                
            </main>
        </Def>
    )
}

module.exports = Show