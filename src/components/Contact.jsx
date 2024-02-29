import { useState } from 'react';
import Button from './Button';

const Contact = () => {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [text, setText] = useState('');

	const handleSubmit = e => {
		e.preventDefault;
	};

	return (
		<section className='px-20 flex gap-20'>
			<div className='w-2/4 flex justify-center items-center'>
				<p className='flex flex-col font-modern italic text-[8rem] leading-none text-center'>
					BIT<span className='text-atomic_orange-950'>HUB</span>
				</p>
				{/* <img src='' alt='mailbox' /> */}
			</div>
			<div className='w-2/4 flex flex-col gap-6'>
				<div>
					<p className='flex flex-col text-5xl font-bold pb-2'>
						Request a free{' '}
						<span className='text-atomic_orange-950'>consultation</span>
					</p>
					<p className='text-base'>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat
						molestiae reprehenderit possimus, error laborum et, soluta magnam,
						labore atque aliquam dolore eos perferendis? Distinctio ut maiores
						in ullam ipsam nemo.
					</p>
				</div>
				<form
					onSubmit={handleSubmit}
					className='flex flex-col gap-5 items-center [&_input]:p-3  [&_input]:rounded-3xl [&_input]:bg-autumn_white-50/15 [&_input]:w-full [&_input]:text-lg [&_textarea]:p-3 [&_textarea]:rounded-3xl [&_textarea]:bg-autumn_white-50/15 [&_textarea]:w-full [&_textarea]:text-lg [&_textarea]:h-44 [&_textarea]:resize-none'
				>
					<div className='flex gap-10 w-full'>
						<input
							type='text'
							placeholder='First Name'
							value={firstName}
							onChange={e => setFirstName(e.target.value)}
						/>
						<input
							type='text'
							placeholder='Last Name'
							value={lastName}
							onChange={e => setLastName(e.target.value)}
						/>
					</div>
					<input
						type='email'
						placeholder='Email'
						value={email}
						onChange={e => setEmail(e.target.value)}
					/>
					<textarea
						placeholder='Text'
						value={text}
						onChange={e => setText(e.target.value)}
					></textarea>
					<Button text={'send a message'} primary={true} />
				</form>
			</div>
		</section>
	);
};

export default Contact;
