import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'

const Smurf = props => {
        console.log('rendering smurfs', props.smurf.name)
    return(
        <Card className='card'>
            <Card.Content>
            <Card.Header> {props.smurf.name}</Card.Header>
            <Card.Meta>
                <span className='date'>Age: {props.smurf.age}</span>
            </Card.Meta>
            <Card.Meta>
                <span className='date'>Height: {props.smurf.height}</span>
            </Card.Meta>
            </Card.Content>
       </Card>
    )
}

export default Smurf