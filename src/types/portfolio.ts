export interface PersonalDetails {
  readonly name: string
  readonly role: string
  readonly location: string
  readonly tagline: string
  readonly about: string
  readonly image: string
}

export interface SocialLinks {
  readonly email: `mailto:${string}`
  readonly github: `https://${string}`
  readonly linkedin: `https://${string}`
  readonly resume: string
}

export interface ExperienceDetails {
  readonly summary: string
  readonly bullets: readonly string[]
  readonly technologies: readonly string[]
}

export interface Experience {
  readonly id: string
  readonly title: string
  readonly company: string
  readonly logo: string
  readonly location: string
  readonly period: string
  readonly badge: "Full-time" | "Internship"
  readonly details: ExperienceDetails
}

export interface Education {
  readonly id: string
  readonly program: string
  readonly school: string
  readonly logo: string
  readonly location: string
  readonly period: string
  readonly degree: "Master of Science" | "Bachelor of Science"
}

export interface Project {
  readonly id: string
  readonly title: string
  readonly description: string
  readonly url: `https://${string}`
  readonly image: string
  readonly technology: readonly string[]
  readonly category: string
  readonly role: string
  readonly impact: string
  readonly imageTreatment: "contain" | "cover"
  readonly surface: string
}

export type TechnologyIcon =
  | "braces"
  | "brain"
  | "database"
  | "layers"
  | "palette"
  | "workflow"

export interface TechnologyGroup {
  readonly id: string
  readonly title: string
  readonly icon: TechnologyIcon
  readonly items: readonly string[]
}

export interface NavigationItem {
  readonly id: "overview" | "experience" | "projects" | "education" | "toolkit" | "contact"
  readonly label: string
  readonly href: `/#${string}`
}
