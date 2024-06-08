import React from "react";

type SearchProps = {
	className?: string;
};

const Search: React.FC<SearchProps> = (props) => {
	const { className } = props;
	return (
		<svg className={className} xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 96 96" fill="none">
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M60 45C60 58.8065 48.8076 70 34.9993 70C21.1924 70 10 58.8065 10 45C10 31.1935 21.1924 20 34.9993 20C48.8076 20 60 31.1935 60 45Z"
				fill="#08C4FF"
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M46 45C46 37.8205 51.8202 32 58.9995 32C66.18 32 72 37.8207 72 45C72 52.1793 66.18 58 58.9995 58C51.8202 58 46 52.1795 46 45ZM58.9995 20C45.1923 20 34 31.1937 34 45C34 58.8063 45.1923 70 58.9995 70C63.204 70 67.166 68.9621 70.6434 67.1287L77.7574 74.2426C80.1005 76.5858 83.8995 76.5858 86.2426 74.2426C88.5858 71.8995 88.5858 68.1005 86.2426 65.7574L79.622 59.1367C82.3838 55.1157 84 50.2465 84 45C84 31.1934 72.8075 20 58.9995 20Z"
				fill="#0066FA"
			/>
		</svg>
	);
};

export default Search;
