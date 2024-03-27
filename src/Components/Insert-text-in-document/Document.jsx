import React, { useState } from 'react';
import './Document.css';
const Document = () => {
	const [text, setText] = useState('');
	const [document, setDocument] = useState([]);
	const [loading, setLoading] = useState(false);
	const handleSubmit = (e) => {
		if (!loading) {
			setLoading(true);
			e.preventDefault();
			setDocument((docs) => [...docs, text]);
			setText('');
			setTimeout(() => {
				setLoading(false);
			}, 2000);
		}
	};
	return (
		<div className='pg'>
			<div className='body-container'>
				<form onSubmit={handleSubmit}>
					<textarea
						onKeyDown={(e) => {
							console.log('fs');
							if (e.key === 'Enter') {
								console.log('fsf');
								handleSubmit(e);
							}
						}}
						value={text}
						onChange={(e) => setText(e.target.value)}
						name='text'
						placeholder='Enter your text here...'
						rows={7}
					></textarea>
				</form>
			</div>
			<div >
				<p className='head'>Document</p>
				<div className='paraContainer'>
					{document.length ? (
						document.map((doc, index) => {
							return (
								<div>
									<span
										className='Para'
										key={index}
									>
										{doc}
									</span>
								</div>
							);
						})
					) : (
						<p className='nothing'>Added content will show here</p>
					)}
				</div>
			</div>
		</div>
	);
};

export default Document;
