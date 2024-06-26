import { Footer, Header } from "./components";

function App() {
	return (
		<>
			<div className="flex flex-col min-h-screen">
				<Header />
				<main className="flex-grow bg-gray-100 p-4">
					{/* Your main content goes here */}
					<section className="text-center">
						<h1 className="text-2xl font-bold mb-4">Welcome to Todo List</h1>
						<p className="mb-4">This is the main content area.</p>
					</section>
				</main>
				<Footer />
			</div>
		</>
	);
}

export default App;
