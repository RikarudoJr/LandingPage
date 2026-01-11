import React from 'react'

const Footer: React.FC = () => {
	return (
		<footer className="w-full border-t border-slate-100 bg-white">
			<div className="max-w-6xl mx-auto px-6 sm:px-8 py-8 grid grid-cols-1 md:grid-cols-4 gap-6 text-sm text-slate-700">
				<div>
					<div className="text-2xl font-extrabold tracking-wide text-slate-900">NeoLifeSg</div>
					<p className="mt-2 text-slate-600">Everyday beauty routines made simple.</p>
				</div>

				<div>
					<h4 className="text-slate-900 font-semibold mb-2">Shop</h4>
					<ul className="space-y-1">
						<li><a href="#" className="hover:text-slate-900">All products</a></li>
						<li><a href="#" className="hover:text-slate-900">Kits</a></li>
						<li><a href="#" className="hover:text-slate-900">New arrivals</a></li>
					</ul>
				</div>

				<div>
					<h4 className="text-slate-900 font-semibold mb-2">Company</h4>
					<ul className="space-y-1">
						<li><a href="#" className="hover:text-slate-900">About</a></li>
						<li><a href="#" className="hover:text-slate-900">Careers</a></li>
						<li><a href="#" className="hover:text-slate-900">Press</a></li>
					</ul>
				</div>

				<div>
					<h4 className="text-slate-900 font-semibold mb-2">Support</h4>
					<ul className="space-y-1">
						<li><a href="#" className="hover:text-slate-900">FAQ</a></li>
						<li><a href="#" className="hover:text-slate-900">Contact</a></li>
						<li><a href="#" className="hover:text-slate-900">Shipping</a></li>
					</ul>
				</div>
			</div>

			<div className="max-w-6xl mx-auto px-6 sm:px-8 py-4 text-sm text-slate-600">
				<div className="flex flex-col md:flex-row items-center justify-between">
					<div>© {new Date().getFullYear()} NeoLifeSg. All rights reserved.</div>
					<div className="flex gap-4 mt-3 md:mt-0">
						<a href="#" className="hover:text-slate-900">Privacy</a>
						<a href="#" className="hover:text-slate-900">Terms</a>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
