import React from 'react'
import './BuildControl.css'


const buildControl = (props) => {

    const bcClass = ["BuildControl","col-md-4","col-lg-4","col-sm-4","col-xs-4"].join(' ')
    const lblClass = ["Label","col-md-4","col-lg-4","col-sm-4","col-xs-4"].join(' ')
    const btnMoreClass = ["More","col-md-4","col-lg-4","col-sm-4","col-xs-4"].join(' ')
    const btnLessClass = ["Less","col-md-4","col-lg-4","col-sm-4","col-xs-4"].join(' ')

    return(

        <div className="container-fluid">
            <div className="row">
                <div className="col-md-4"></div>
                <div className={bcClass}>
                    <div className="row">
                        <div className={lblClass}>
                            {props.bcLabel}
                        </div>
                        <button 
                            className={btnLessClass}
                            onClick={props.removeIngredientButton} 
                            disabled={props.disabled}
                        >
                            Less
                        </button>
                        <button 
                            className={btnMoreClass}
                            onClick={props.addIngredientButton}
                        >
                            More
                        </button>
                    </div>
                </div>
                <div className="col-md-4"></div>
            </div>
        </div>

    )
}


export default buildControl