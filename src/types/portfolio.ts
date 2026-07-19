export interface PersonalDetails {
    readonly name: string;
    readonly tagline: string;
    readonly img: string;
    readonly about: string;
}

export interface SocialMediaUrl {
    readonly linkedin: string;
    readonly github: string;
    readonly email: `mailto:${string}`;
    readonly resume: string;
}

export interface ExperienceDetails {
    readonly summary: string;
    readonly bullets: readonly string[];
    readonly technologies: readonly string[];
}

export interface Experience {
    readonly title: string;
    readonly company: string;
    readonly logo: string;
    readonly location: string;
    readonly period: string;
    readonly badge: string;
    readonly details: ExperienceDetails;
}

export interface Education {
    readonly program: string;
    readonly school: string;
    readonly logo: string;
    readonly location: string;
    readonly period: string;
    readonly badge: string;
    readonly degree?: string;
    readonly highlights?: readonly string[];
    readonly gpa?: string;
}

export interface Project {
    readonly title: string;
    readonly description: string;
    readonly url: string;
    readonly image: string;
    readonly techStack: readonly string[];
    readonly category: string;
    readonly status: string;
    readonly role: string;
    readonly impact: string;
    readonly highlights: readonly string[];
    readonly visualClass: string;
    readonly imageClass: string;
}

export interface NavigationItem {
    readonly href: string;
    readonly label: string;
    readonly section: string;
}
