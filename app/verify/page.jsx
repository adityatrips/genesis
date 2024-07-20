'use client';

import { useState } from 'react';
import { QrReader } from 'react-qr-reader';
import Link from 'next/link';

export default function VerifyPage() {
	const [isShown, setIsShown] = useState(false);
	const [data, setData] = useState(null);

	return (
		<div className='flex flex-col min-h-screen bg-background'>
			<header className='bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between lg:h-[60px] h-14'>
				<Link
					href='/'
					className='flex items-center gap-2'
					prefetch={false}
				>
					<TruckIcon className='w-6 h-6' />
					<span className='text-xl font-bold'>BlockchainShipping</span>
				</Link>
				<nav className='hidden md:flex items-center gap-6'>
					<Link
						href='/shipments'
						className='hover:underline'
						prefetch={false}
					>
						Shipments
					</Link>
					<Link
						href='/verify'
						className='hover:underline'
						prefetch={false}
					>
						Verify
					</Link>
				</nav>
			</header>
			<main
				className={`flex-1 grid grid-cols-1 p-6 md:p-10 gap-8 ${
					data !== null && 'md:grid-cols-2'
				}`}
			>
				<div className='bg-card rounded-lg border p-6 md:p-8 flex flex-col items-center justify-center'>
					<div className='text-2xl font-bold mb-4'>Scan Package QR Code</div>
					<div
						className='w-full max-w-md'
						onClick={() => {
							setIsShown(!isShown);
						}}
					>
						{data == null ? (
							<QrReader
								onResult={(result) => {
									if (!!result) {
										setData(result);
									}
								}}
								constraints={{ facingMode: 'environment' }}
							/>
						) : (
							<button
								onClick={() => {
									setData(null);
									setIsShown(false);
								}}
								className='bg-primary px-5 py-2 rounded-md text-white w-full h-full'
							>
								Reset
							</button>
						)}
					</div>
					<p className='text-muted-foreground my-4'>
						{data !== null
							? "Please press reset to check other package's status."
							: 'Scan the QR code on your package to track its delivery status.'}
					</p>
				</div>
				{data !== null && (
					<div className='bg-card rounded-lg border p-6 md:p-8'>
						<div className='text-2xl font-bold mb-4 flex md:flex-row flex-col items-center md:justify-between'>
							<p>Delivery Updates</p>
							<p className='text-sm text-muted-foreground'>
								Wallet ID: 0X13205BEC53651891616168138T
							</p>
						</div>
						<div className='space-y-6'>
							<div className='flex items-start gap-4'>
								<div className='flex-shrink-0'>
									<div className='w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center'>
										<TruckIcon className='w-5 h-5' />
									</div>
								</div>
								<div>
									<div className='font-medium'>Package Picked Up</div>
									<div className='text-muted-foreground text-sm'>
										June 15, 2023 - 9:30 AM
									</div>
									<div className='text-sm mt-1'>
										Your package has been picked up from the sender and is on
										its way to the delivery hub.
									</div>
								</div>
							</div>
							<div className='flex items-start gap-4'>
								<div className='flex-shrink-0'>
									<div className='w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center'>
										<TruckIcon className='w-5 h-5' />
									</div>
								</div>
								<div>
									<div className='font-medium'>In Transit</div>
									<div className='text-muted-foreground text-sm'>
										June 16, 2023 - 2:15 PM
									</div>
									<div className='text-sm mt-1'>
										Your package is currently in transit to the delivery
										destination.
									</div>
								</div>
							</div>
							<div className='flex items-start gap-4'>
								<div className='flex-shrink-0'>
									<div className='w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center'>
										<TruckIcon className='w-5 h-5' />
									</div>
								</div>
								<div>
									<div className='font-medium'>Out for Delivery</div>
									<div className='text-muted-foreground text-sm'>
										June 17, 2023 - 10:00 AM
									</div>
									<div className='text-sm mt-1'>
										Your package is out for delivery and will be arriving soon.
									</div>
								</div>
							</div>
							<div className='flex items-start gap-4'>
								<div className='flex-shrink-0'>
									<div className='w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center'>
										<CircleCheckIcon className='w-5 h-5' />
									</div>
								</div>
								<div>
									<div className='font-medium'>Delivered</div>
									<div className='text-muted-foreground text-sm'>
										June 17, 2023 - 12:30 PM
									</div>
									<div className='text-sm mt-1'>
										Your package has been successfully delivered.
									</div>
								</div>
							</div>
						</div>
					</div>
				)}
			</main>
		</div>
	);
}

function CircleCheckIcon(props) {
	return (
		<svg
			{...props}
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
		>
			<circle
				cx='12'
				cy='12'
				r='10'
			/>
			<path d='m9 12 2 2 4-4' />
		</svg>
	);
}

function TruckIcon(props) {
	return (
		<svg
			{...props}
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
		>
			<path d='M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2' />
			<path d='M15 18H9' />
			<path d='M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14' />
			<circle
				cx='17'
				cy='18'
				r='2'
			/>
			<circle
				cx='7'
				cy='18'
				r='2'
			/>
		</svg>
	);
}
