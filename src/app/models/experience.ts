export interface Experience {
	business: string;
	location: string;
	span: string;
	position: string;
	time: string;
	links: {
		text: string;
		link?: string;
		isProject?: boolean;
	}[];
	skills: string[];
	description: string;
}
