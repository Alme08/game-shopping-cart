import React from 'react';
import { useParams } from 'react-router-dom';

function Category() {
	const { category } = useParams();
	return <div>asd {category}</div>;
}

export default Category;
