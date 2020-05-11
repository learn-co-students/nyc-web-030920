import React from 'react';

const GuidanceItem = (props) => {
    // console.log('props in guidance item', props)
    const { title, image, description, stars, isPriority } = props.factor
    // props.factor should look like { title: '', image: '', description: '', stars: 5}
    return (
        <tr>
            <td>{title}</td>
            <td><img src={image} alt={title}/></td>
            <td>{description}</td>
            <td>{'⭐️'.repeat(stars)}</td>
            <td>{isPriority ? "YES" : "NO"}</td>
        </tr>
    )
}

export default GuidanceItem;