import React from 'react';
import { wellnessFactors } from './data';
import WellnessItem from './WellnessItem';
import { Pie } from './styles';


// named export 
// export class Wheel extends React.Component {
export default class Wheel extends React.Component {

    generateWellnessItems = () => {
        return wellnessFactors.map((factor, index) => <WellnessItem key={index} {...factor}/>)
    }

    render(){
        // console.log(wellnessFactors)
        return (
            <Pie size={300}>
                { this.generateWellnessItems()
                /** TODO: map over your wellness factors and create a WellnessItem for each. 
                 *         check the WellnessItem component to see what it's expecting for props
                 *         Hint: Use your ES6 techniques
                 */}
            </Pie>
        )
    }
}