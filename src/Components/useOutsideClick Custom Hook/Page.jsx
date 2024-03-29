import React, { useRef } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import useOutsideClick from './useOutsideClick';

const Page = () => {
	const divRef = useRef('');
	useOutsideClick(divRef, () => {
		toast('Clicked outside 🔥', {
			style: {
				fontWeight:800,
			},
		});
	});
	return (
		<div className='bg-blue-900 min-h-screen flex justify-center items-center'>
			<Toaster className='bg-black'></Toaster>
			<div
				ref={divRef}
				className='px-14 flex justify-center items-center text-blue-50 bg-gradient-to-r rounded-xl shadow-lg font-black text-xl from-blue-700  to-blue-500 h-[200px]'
			>
				<h1>Click outside to show text</h1>
			</div>
		</div>
	);
};

export default Page;
