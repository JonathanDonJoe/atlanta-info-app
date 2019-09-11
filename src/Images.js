import React from 'react';

function Images(props){
	// Map through images

	const imgArr = props.images.map((img,i) => <img src={img} alt={i}></img>)
	// console.log(imgArr)
	return(
		// <p>Images go here as props</p>
		imgArr
	)
}

export default Images;