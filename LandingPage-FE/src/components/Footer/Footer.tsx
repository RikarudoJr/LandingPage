import React from 'react'

const Footer: React.FC = () => {
	return (
		<footer className="w-full border-t border-slate-100 bg-white">
			<div className="max-w-6xl mx-auto px-6 sm:px-8 py-8 grid grid-cols-1 md:grid-cols-4 gap-6 text-sm text-slate-700">
				<div>
					<div className="text-2xl font-extrabold tracking-wide text-slate-900">NeoLifeSg</div>
				</div>
			</div>
			<div className="max-w-6xl mx-auto px-6 sm:px-8 py-4 text-sm text-slate-600">
				<div className="flex flex-col md:flex-row items-center justify-between">
					<div>© {new Date().getFullYear()} NeoLifeSg. All rights reserved.</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
