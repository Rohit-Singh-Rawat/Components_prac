import React, { useState } from 'react';
const list = [
	{
		id: 0,
		name: 'Kingfisher',
	},
	{
		id: 1,
		name: 'Heineken',
	},
	{
		id: 2,
		name: 'Bira',
	},
	{
		id: 3,
		name: 'Budweiser',
	},
	{
		id: 4,
		name: 'Hoegaarden',
	},
	{
		id: 5,
		name: 'Carlsberg',
	},
];
const CheckboxesCard = () => {
	const [listItems, setListItems] = useState(list);
    const handleChange = (checked, id)=>{
        const temp = listItems.map((ele)=>{
            console.log(checked,id)
            return (ele.id === id ?{...ele, checked: checked} :ele)
        })
        console.log(temp)
        setListItems(temp)
    }
    const selectAllHandler = (checked)=>{
        const temp = listItems.map((ele)=>{
            return {...ele, checked: checked}
        })
        setListItems(temp)
    }
	return (
		<div className='w-full min-h-[100vh] bg-gray-950 flex justify-center items-center'>
			<div className='flex shadow-[30px_30px_60px_15px_rgba(10,110,130,0.3)] flex-col w-full rounded-xl  max-w-2xl mx-auto overflow-hidden'>
				<div className='px-4 py-4 font-extrabold bg-gray-200'>
					<Checkbox
						label={'Select All'}
						checked={listItems.every((ele) => ele?.checked ?? false)}
						onChange={(checked) => selectAllHandler(checked)}
					></Checkbox>
				</div>
				<form className='bg-white font-semibold p-4 flex flex-col justify-center w-full'>
					{listItems.map((ele) => {
						return (
							<Checkbox
								key={ele.id}
								label={ele.name}
								checked={ele?.checked}
								onChange={(checked) => {
									handleChange(checked, ele.id);
								}}
							></Checkbox>
						);
					})}
				</form>
			</div>
		</div>
	);
};

const Checkbox = ({ checked, onChange, label }) => {
	return (
		<div className='flex items-center space-x-2'>
			<input
				id={label}
				type='checkbox'
				checked={checked ?? false}
				onChange={(e) => onChange(e.target.checked)}
			/>
			<label
				className=''
				htmlFor={label}
			>
				{label}
			</label>
		</div>
	);
};
export default CheckboxesCard;
