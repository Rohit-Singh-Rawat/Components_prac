import React, { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';

const useOutsideClick = (ref, callback) => {
	useEffect(() => {
		document.addEventListener('click', (e) => {
			if (
				!ref.current ||
				e.target === ref.current ||
				ref.current.contains(e.target)
			) {
				return;
			}
			callback();
		});
		return document.removeEventListener('click', (e) => {
			if (
				!ref.current ||
				e.target === ref.current ||
				ref.current.contains(e.target)
			) {
				return;
			}
			callback();
		});
	}, [ref,callback]);
};

export default useOutsideClick;
