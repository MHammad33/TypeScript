import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer: React.FC = (): JSX.Element => {
	return (
		<footer className="bg-gray-300 mt-8">
			<div className="flex flex-col items-center p-4">
				<div className="flex space-x-4 mb-4">
					<a
						href="https://facebook.com"
						aria-label="Facebook"
						className="hover:text-gray-700"
					>
						<FaFacebook size={24} />
					</a>
					<a
						href="https://twitter.com"
						aria-label="Twitter"
						className="hover:text-gray-700"
					>
						<FaTwitter size={24} />
					</a>
					<a
						href="https://instagram.com"
						aria-label="Instagram"
						className="hover:text-gray-700"
					>
						<FaInstagram size={24} />
					</a>
				</div>
				<div className="text-center text-gray-500 text-xs">
					<p>
						Contact us:{" "}
						<a href="mailto:contact@todolist.com" className="underline">
							contact@todolist.com
						</a>
					</p>
					<p>&copy; 2024 Todo List. All rights reserved.</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
