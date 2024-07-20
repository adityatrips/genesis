/**
 * v0 by Vercel.
 * @see https://v0.dev/t/6gwJndl3s5W
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
	DropdownMenu,
	DropdownMenuTrigger,
	DropdownMenuContent,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuItem,
} from '@/components/ui/dropdown-menu';
import {
	Card,
	CardHeader,
	CardTitle,
	CardContent,
	CardDescription,
} from '@/components/ui/card';
import {
	Table,
	TableHeader,
	TableRow,
	TableHead,
	TableBody,
	TableCell,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';

export default function Component() {
	return (
		<div className='flex flex-col min-h-screen'>
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
			<main className='flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6'>
				<Card>
					<CardHeader className='flex items-center justify-between'>
						<CardTitle>Total Packages Shipped</CardTitle>
						<PackageIcon className='w-6 h-6 text-muted-foreground' />
					</CardHeader>
					<CardContent>
						<div className='text-4xl font-bold'>12,345</div>
						<div className='text-sm text-muted-foreground'>
							+15% from last month
						</div>
					</CardContent>
				</Card>
				<Card>
					<CardHeader className='flex items-center justify-between'>
						<CardTitle>On-Time Delivery Rate</CardTitle>
						<CalendarIcon className='w-6 h-6 text-muted-foreground' />
					</CardHeader>
					<CardContent>
						<div className='text-4xl font-bold'>92%</div>
						<div className='text-sm text-muted-foreground'>
							+3% from last month
						</div>
					</CardContent>
				</Card>
				<Card>
					<CardHeader className='flex items-center justify-between'>
						<CardTitle>Customer Satisfaction</CardTitle>
						<SmileIcon className='w-6 h-6 text-muted-foreground' />
					</CardHeader>
					<CardContent>
						<div className='text-4xl font-bold'>4.8/5</div>
						<div className='text-sm text-muted-foreground'>
							+0.2 from last month
						</div>
					</CardContent>
				</Card>
				<Card className='col-span-1 md:col-span-2 lg:col-span-3'>
					<CardHeader>
						<CardTitle>Recent Shipments</CardTitle>
						<CardDescription>
							View the status of your recent shipments.
						</CardDescription>
					</CardHeader>
					<CardContent>
						<Table>
							<TableHeader>
								<TableRow>
									<TableHead>Tracking #</TableHead>
									<TableHead>Delivery Status</TableHead>
									<TableHead>Estimated Arrival</TableHead>
									<TableHead>Customer</TableHead>
									<TableHead>Actions</TableHead>
								</TableRow>
							</TableHeader>
							<TableBody>
								<TableRow>
									<TableCell>
										<div className='font-medium'>OE31b70H</div>
									</TableCell>
									<TableCell>
										<Badge variant='secondary'>In Transit</Badge>
									</TableCell>
									<TableCell>
										<time dateTime='2023-07-25'>July 25, 2023</time>
									</TableCell>
									<TableCell>
										<div className='font-medium'>John Doe</div>
										<div className='text-sm text-muted-foreground'>
											john@example.com
										</div>
									</TableCell>
									<TableCell>
										<DropdownMenu>
											<DropdownMenuTrigger asChild>
												<Button
													size='icon'
													variant='ghost'
												>
													<MoveHorizontalIcon className='w-5 h-5' />
												</Button>
											</DropdownMenuTrigger>
											<DropdownMenuContent align='end'>
												<DropdownMenuItem>View Details</DropdownMenuItem>
												<DropdownMenuItem>Update Tracking</DropdownMenuItem>
												<DropdownMenuItem>Contact Customer</DropdownMenuItem>
											</DropdownMenuContent>
										</DropdownMenu>
									</TableCell>
								</TableRow>
								<TableRow>
									<TableCell>
										<div className='font-medium'>OE31b71H</div>
									</TableCell>
									<TableCell>
										<Badge variant='outline'>Delivered</Badge>
									</TableCell>
									<TableCell>
										<time dateTime='2023-07-22'>July 22, 2023</time>
									</TableCell>
									<TableCell>
										<div className='font-medium'>Jane Smith</div>
										<div className='text-sm text-muted-foreground'>
											jane@example.com
										</div>
									</TableCell>
									<TableCell>
										<DropdownMenu>
											<DropdownMenuTrigger asChild>
												<Button
													size='icon'
													variant='ghost'
												>
													<MoveHorizontalIcon className='w-5 h-5' />
												</Button>
											</DropdownMenuTrigger>
											<DropdownMenuContent align='end'>
												<DropdownMenuItem>View Details</DropdownMenuItem>
												<DropdownMenuItem>Contact Customer</DropdownMenuItem>
											</DropdownMenuContent>
										</DropdownMenu>
									</TableCell>
								</TableRow>
								<TableRow>
									<TableCell>
										<div className='font-medium'>OE31b72H</div>
									</TableCell>
									<TableCell>
										<Badge variant='outline'>Delivered</Badge>
									</TableCell>
									<TableCell>
										<time dateTime='2023-07-20'>July 20, 2023</time>
									</TableCell>
									<TableCell>
										<div className='font-medium'>Michael Johnson</div>
										<div className='text-sm text-muted-foreground'>
											michael@example.com
										</div>
									</TableCell>
									<TableCell>
										<DropdownMenu>
											<DropdownMenuTrigger asChild>
												<Button
													size='icon'
													variant='ghost'
												>
													<MoveHorizontalIcon className='w-5 h-5' />
												</Button>
											</DropdownMenuTrigger>
											<DropdownMenuContent align='end'>
												<DropdownMenuItem>View Details</DropdownMenuItem>
												<DropdownMenuItem>Contact Customer</DropdownMenuItem>
											</DropdownMenuContent>
										</DropdownMenu>
									</TableCell>
								</TableRow>
								<TableRow>
									<TableCell>
										<div className='font-medium'>OE31b73H</div>
									</TableCell>
									<TableCell>
										<Badge variant='outline'>Delivered</Badge>
									</TableCell>
									<TableCell>
										<time dateTime='2023-07-19'>July 19, 2023</time>
									</TableCell>
									<TableCell>
										<div className='font-medium'>Emily Davis</div>
										<div className='text-sm text-muted-foreground'>
											emily@example.com
										</div>
									</TableCell>
									<TableCell>
										<DropdownMenu>
											<DropdownMenuTrigger asChild>
												<Button
													size='icon'
													variant='ghost'
												>
													<MoveHorizontalIcon className='w-5 h-5' />
												</Button>
											</DropdownMenuTrigger>
											<DropdownMenuContent align='end'>
												<DropdownMenuItem>View Details</DropdownMenuItem>
												<DropdownMenuItem>Contact Customer</DropdownMenuItem>
											</DropdownMenuContent>
										</DropdownMenu>
									</TableCell>
								</TableRow>
							</TableBody>
						</Table>
					</CardContent>
				</Card>
			</main>
		</div>
	);
}

function CalendarIcon(props) {
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
			<path d='M8 2v4' />
			<path d='M16 2v4' />
			<rect
				width='18'
				height='18'
				x='3'
				y='4'
				rx='2'
			/>
			<path d='M3 10h18' />
		</svg>
	);
}

function MenuIcon(props) {
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
			<line
				x1='4'
				x2='20'
				y1='12'
				y2='12'
			/>
			<line
				x1='4'
				x2='20'
				y1='6'
				y2='6'
			/>
			<line
				x1='4'
				x2='20'
				y1='18'
				y2='18'
			/>
		</svg>
	);
}

function MoveHorizontalIcon(props) {
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
			<polyline points='18 8 22 12 18 16' />
			<polyline points='6 8 2 12 6 16' />
			<line
				x1='2'
				x2='22'
				y1='12'
				y2='12'
			/>
		</svg>
	);
}

function PackageIcon(props) {
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
			<path d='m7.5 4.27 9 5.15' />
			<path d='M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z' />
			<path d='m3.3 7 8.7 5 8.7-5' />
			<path d='M12 22V12' />
		</svg>
	);
}

function SmileIcon(props) {
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
			<path d='M8 14s1.5 2 4 2 4-2 4-2' />
			<line
				x1='9'
				x2='9.01'
				y1='9'
				y2='9'
			/>
			<line
				x1='15'
				x2='15.01'
				y1='9'
				y2='9'
			/>
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

function XIcon(props) {
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
			<path d='M18 6 6 18' />
			<path d='m6 6 12 12' />
		</svg>
	);
}
