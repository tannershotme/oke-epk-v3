/**
 * MOCK TESTIMONIALS — Replace with real quotes when available.
 * These are placeholder testimonials for design/layout purposes only.
 */

export type Testimonial = {
    id: string;
    quote: string;
    name: string;
    title: string;
    company: string;
};

export const TESTIMONIALS: Testimonial[] = [
    {
        id: "t-1",
        quote:
            "Oke doesn't just talk about transformation — he gives you the exact systems to make it happen. Our leadership team walked away with a clear execution roadmap, not just inspiration.",
        name: "Sarah Chen",
        title: "VP of Product",
        company: "Fortune 500 Media Company",
    },
    {
        id: "t-2",
        quote:
            "We've brought in dozens of speakers over the years. Oke is in a different category entirely. He challenged our assumptions, reframed how we think about AI adoption, and did it in a way that landed with every level of our organization.",
        name: "Marcus Williams",
        title: "Chief Innovation Officer",
        company: "Global Financial Services Firm",
    },
    {
        id: "t-3",
        quote:
            "The feedback from our executive offsite was the strongest we've ever received. Oke's frameworks are practical and immediately actionable — our teams were implementing changes within the first week.",
        name: "Dr. Priya Ramanathan",
        title: "Head of L&D",
        company: "Enterprise Technology Leader",
    },
];
