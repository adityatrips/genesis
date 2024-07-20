'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

export default function ShipmentPage() {
	return (
		<div className='grid min-h-screen w-full overflow-hidden'>
			<div className='flex flex-col'>
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
				<main className='flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6'>
					<div className='flex items-center gap-4'>
						<h1 className='font-semibold text-lg md:text-xl'>Shipments</h1>
						<div className='ml-auto flex items-center gap-2'>
							<Button
								variant='outline'
								size='icon'
							>
								<ChevronLeftIcon className='h-4 w-4' />
								<span className='sr-only'>Previous</span>
							</Button>
							<Button
								variant='outline'
								size='icon'
							>
								<ChevronRightIcon className='h-4 w-4' />
								<span className='sr-only'>Next</span>
							</Button>
						</div>
					</div>
					<div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
						<Card>
							<CardHeader>
								<CardTitle>Shipment #1234</CardTitle>
							</CardHeader>
							<CardContent className='grid gap-4'>
								<div className='flex items-center justify-between'>
									<span className='text-muted-foreground'>Status:</span>
									<Badge variant='secondary'>In Transit</Badge>
								</div>
								<div className='flex items-center justify-between'>
									<span className='text-muted-foreground'>Tracking:</span>
									<span>1Z999AA1234567890</span>
								</div>
								<div className='flex items-center justify-between'>
									<span className='text-muted-foreground'>Delivery:</span>
									<span>June 23, 2023</span>
								</div>
								<div className='flex items-center justify-between'>
									<span className='text-muted-foreground'>Recipient:</span>
									<span>John Doe</span>
								</div>
								<div className='flex items-center justify-between'>
									<span className='text-muted-foreground'>Address:</span>
									<span>123 Main St, Anytown USA</span>
								</div>
							</CardContent>
						</Card>
						<Card>
							<CardHeader>
								<CardTitle>Shipment #5678</CardTitle>
							</CardHeader>
							<CardContent className='grid gap-4'>
								<div className='flex items-center justify-between'>
									<span className='text-muted-foreground'>Status:</span>
									<Badge variant='success'>Delivered</Badge>
								</div>
								<div className='flex items-center justify-between'>
									<span className='text-muted-foreground'>Tracking:</span>
									<span>1Z999BB1234567890</span>
								</div>
								<div className='flex items-center justify-between'>
									<span className='text-muted-foreground'>Delivery:</span>
									<span>June 20, 2023</span>
								</div>
								<div className='flex items-center justify-between'>
									<span className='text-muted-foreground'>Recipient:</span>
									<span>Jane Smith</span>
								</div>
								<div className='flex items-center justify-between'>
									<span className='text-muted-foreground'>Address:</span>
									<span>456 Oak Rd, Anytown USA</span>
								</div>
							</CardContent>
						</Card>
						<Card>
							<CardHeader>
								<CardTitle>Shipment #9012</CardTitle>
							</CardHeader>
							<CardContent className='grid gap-4'>
								<div className='flex items-center justify-between'>
									<span className='text-muted-foreground'>Status:</span>
									<Badge variant='danger'>Delayed</Badge>
								</div>
								<div className='flex items-center justify-between'>
									<span className='text-muted-foreground'>Tracking:</span>
									<span>1Z999CC1234567890</span>
								</div>
								<div className='flex items-center justify-between'>
									<span className='text-muted-foreground'>Delivery:</span>
									<span>June 25, 2023</span>
								</div>
								<div className='flex items-center justify-between'>
									<span className='text-muted-foreground'>Recipient:</span>
									<span>Michael Johnson</span>
								</div>
								<div className='flex items-center justify-between'>
									<span className='text-muted-foreground'>Address:</span>
									<span>789 Elm St, Anytown USA</span>
								</div>
							</CardContent>
						</Card>
						<Card>
							<CardHeader>
								<CardTitle>Shipment #4321</CardTitle>
							</CardHeader>
							<CardContent className='grid gap-4'>
								<div className='flex items-center justify-between'>
									<span className='text-muted-foreground'>Status:</span>
									<Badge variant='success'>Delivered</Badge>
								</div>
								<div className='flex items-center justify-between'>
									<span className='text-muted-foreground'>Tracking:</span>
									<span>1Z999DD1234567890</span>
								</div>
								<div className='flex items-center justify-between'>
									<span className='text-muted-foreground'>Delivery:</span>
									<span>June 18, 2023</span>
								</div>
								<div className='flex items-center justify-between'>
									<span className='text-muted-foreground'>Recipient:</span>
									<span>Emily Davis</span>
								</div>
								<div className='flex items-center justify-between'>
									<span className='text-muted-foreground'>Address:</span>
									<span>321 Pine St, Anytown USA</span>
								</div>
							</CardContent>
						</Card>
					</div>
					<div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
						<Card>
							<CardHeader>
								<CardTitle>Transaction Details</CardTitle>
							</CardHeader>
							<CardContent className='grid gap-4'>
								<div className='flex items-center justify-between'>
									<span className='text-muted-foreground'>Order Total:</span>
									<span>$250.00</span>
								</div>
								<div className='flex items-center justify-between'>
									<span className='text-muted-foreground'>Payment Method:</span>
									<span>Visa **** 4532</span>
								</div>
								<div className='flex items-center justify-between'>
									<span className='text-muted-foreground'>Transaction ID:</span>
									<span>12345678</span>
								</div>
								<div className='flex items-center justify-between'>
									<span className='text-muted-foreground'>Date:</span>
									<span>June 23, 2023</span>
								</div>
								<div className='flex items-center justify-between'>
									<span className='text-muted-foreground'>Status:</span>
									<Badge variant='secondary'>Pending</Badge>
								</div>
							</CardContent>
						</Card>
						<Card>
							<CardHeader>
								<CardTitle>Operational Metrics</CardTitle>
							</CardHeader>
							<CardContent className='grid gap-4'>
								<div className='flex items-center justify-between'>
									<span className='text-muted-foreground'>
										On-Time Delivery:
									</span>
									<span>92%</span>
								</div>
								<div className='flex items-center justify-between'>
									<span className='text-muted-foreground'>
										Customer Satisfaction:
									</span>
									<span>4.8/5</span>
								</div>
								<div className='flex items-center justify-between'>
									<span className='text-muted-foreground'>
										Shipments Processed:
									</span>
									<span>10,234</span>
								</div>
								<div className='flex items-center justify-between'>
									<span className='text-muted-foreground'>Damaged Goods:</span>
									<span>1.2%</span>
								</div>
								<div className='flex items-center justify-between'>
									<span className='text-muted-foreground'>
										Fuel Efficiency:
									</span>
									<span>24 MPG</span>
								</div>
							</CardContent>
						</Card>
						<Card>
							<CardHeader>
								<CardTitle>Customer Insights</CardTitle>
							</CardHeader>
							<CardContent className='grid gap-4'>
								<div className='flex items-center justify-between'>
									<span className='text-muted-foreground'>New Customers:</span>
									<span>125</span>
								</div>
								<div className='flex items-center justify-between'>
									<span className='text-muted-foreground'>
										Repeat Customers:
									</span>
									<span>78%</span>
								</div>
								<div className='flex items-center justify-between'>
									<span className='text-muted-foreground'>
										Average Order Value:
									</span>
									<span>$85</span>
								</div>
								<div className='flex items-center justify-between'>
									<span className='text-muted-foreground'>
										Customer Retention:
									</span>
									<span>92%</span>
								</div>
								<div className='flex items-center justify-between'>
									<span className='text-muted-foreground'>Referral Rate:</span>
									<span>18%</span>
								</div>
							</CardContent>
						</Card>
						<Card>
							<CardHeader>
								<CardTitle>Financial Overview</CardTitle>
							</CardHeader>
							<CardContent className='grid gap-4'>
								<div className='flex items-center justify-between'>
									<span className='text-muted-foreground'>Total Revenue:</span>
									<span>$125,000</span>
								</div>
								<div className='flex items-center justify-between'>
									<span className='text-muted-foreground'>Gross Profit:</span>
									<span>$45,000</span>
								</div>
								<div className='flex items-center justify-between'>
									<span className='text-muted-foreground'>Net Profit:</span>
									<span>$32,000</span>
								</div>
								<div className='flex items-center justify-between'>
									<span className='text-muted-foreground'>
										Operating Expenses:
									</span>
									<span>$23,000</span>
								</div>
								<div className='flex items-center justify-between'>
									<span className='text-muted-foreground'>Cash Flow:</span>
									<span>$18,000</span>
								</div>
							</CardContent>
						</Card>
					</div>
				</main>
			</div>
		</div>
	);
}

function BellIcon(props) {
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
			<path d='M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9' />
			<path d='M10.3 21a1.94 1.94 0 0 0 3.4 0' />
		</svg>
	);
}

function ChevronLeftIcon(props) {
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
			<path d='m15 18-6-6 6-6' />
		</svg>
	);
}

function ChevronRightIcon(props) {
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
			<path d='m9 18 6-6-6-6' />
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
