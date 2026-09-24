/** Shared content shapes used across the site's data files and sections. */

export type Faq = {
	q: string;
	a: string;
};

export type TimelineStep = {
	title: string;
	body: string;
};

export type CardItem = {
	title: string;
	body: string;
	href?: string;
	linkLabel?: string;
	/** Batch 2 target — render the label with a visible coming-soon note, no broken link. */
	comingSoon?: boolean;
};

export type ExternalReference = {
	label: string;
	href: string;
};

export type ProseBlock = {
	title: string;
	paragraphs: string[];
	/** Visible bracketed editor notes that must stay on the page until confirmed. */
	placeholders?: string[];
};
