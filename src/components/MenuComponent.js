import React,{Component} from "react";
import {Media,Card,CardImg,CardImgOverlay,CardBody,CardTitle, CardText} from 'reactstrap'
import DishdetailComponent from "./DishdetailComponent"

class MenuComponent extends Component{
    constructor(props){
        super(props);
        this.state = { 
            selectedDish:null
         };
    }

    onDishSelect(dish){
        this.setState(
           { selectedDish:dish}
        )
    }
    renderDish(dish){
        if(dish!=null){
            console.log(dish)
            return(

        <DishdetailComponent dish={dish} />
               
            )
        }else{
            return(
                <div>

                </div>
            )
        }
    }

render(){
    const menu=this.props.dishes.map(
        dish=>{
            return(
                <div className="col-12 col-md-5" key={dish.id}>
                    <Card onClick={()=>this.onDishSelect(dish)}>
                        
                            <CardImg object src={dish.image}></CardImg>

                        <CardImgOverlay body className="ml-5">
                                <CardTitle >{dish.name} </CardTitle>
                        </CardImgOverlay>
                        

                    </Card>

                </div>

            )
        }
    );
    return(
       <div className="container">
           <div className="row">
                {menu}
           </div>
           <div className="row">
                {this.renderDish(this.state.selectedDish)}
           </div>
       </div>
    )
}


}

export default MenuComponent;