import React,{Component} from "react"
import {Media,Card,CardImg,CardImgOverlay,CardBody,CardTitle, CardText} from 'reactstrap'

class DishdetailComponent extends Component{


    renderComments(cmt){
      //  alert("r")
      const test=  cmt.map(
            elmt=>{
                return(
                    <div>
                        <h4>{elmt.comment}</h4>
                        {console.log("elmt.comment:"+elmt.comment)}
                    </div>
                )
            }
        )

        return(
            <div>
                {test}
            </div>
        )
    }

    render(){
  
   const dish=this.props.dish;
   const cmt=this.renderComments(dish.comments)
        return(
            <div  className="col-12 col-md-5" >
                
    <Card>
             <CardImg object src={dish.image}></CardImg>
            <CardBody>
            <CardTitle >{dish.name} </CardTitle>
            <CardText>{dish.description}</CardText>
            </CardBody> 
    </Card>

            <div >
                
              {cmt}
               
           </div>

    </div>
        )
    }
}

export default DishdetailComponent;