import React, { useState } from 'react'

const App = () => {
	const [showText, setShowText] = useState(false)


	return (
		<div className="flex justify-center items-center h-screen">
			<div className="flex-10">
				<button
					className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
					onClick={() => setShowText(!showText)}
				>
					{showText ? '-' : '+'}
				</button>
				<div className="ml-4">
					<p className="text-xl font-bold">
						Why should we donate blood?
					</p>
				</div>

				{showText && (
					<p className="text-lg mt-2">
						Donating blood saves lives and helps those in need of
						transfusions due to accidents, surgeries, or medical
						conditions. It's a simple yet impactful way to
						contribute to the well-being of others in the community.
					</p>
				)}
			</div>
		</div>
	)
}

export default App