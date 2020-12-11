export interface Project {
	hasPage?: boolean;
	name: string;
	description: string;
	experience?: string;
	links: {
		link: string;
		text: string;
		isProject?: boolean;
	}[];
	skills: string[];
}
