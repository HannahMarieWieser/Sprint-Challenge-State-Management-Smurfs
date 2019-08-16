import React from 'react'
import {connect} from 'react-redux'
import Loader from 'react-loader-spinner'
import Smurf from './Smurf'
import {getData} from '../actions/index'

const SmurfList = props=>{
    console.log('smurf props', props)
    return(
        <>
            <h1>Smurf App</h1>
            <button onClick={props.getData}>
                {props.isLoading ? (
                    <Loader type="Circles" color="#FF0000" height="50" width='100' /> 
                ):(
                    'Get Smurfs'
                )}
            </button>

            {props.smurfs && props.smurfs.map(blueblob => <Smurf key= {blueblob.name} smurf = {blueblob} />)}

        </>
    )
}

const mapStateToProps = state => {
    return{
        isLoading : state.isLoading,
        smurfs : state.smurfs
    }
}

export default connect(mapStateToProps, {getData})(SmurfList)