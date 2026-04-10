export interface IRoute {
  name: string,
  url: string,
  state?: string,
  icon?: string,
  type: string
}

export type langOption = "en" | "hu";

export type Project = {
  title: string,
  stack: string[],
  description: string,
  cover_img: string,
  host_url: string,
  source_url: string,
  translations?: Partial<Record<Exclude<langOption, 'en'>, {
    title?: string,
    description?: string,
  }>>
}

export type Blog = {
  id: string,
  created_at: string,
  updated_at: string,
  slug: string,
  title: string,
  summary: string,
  content: string,
  tech: string[],
  published: boolean,
  cover_image: string | null,
}

export type WorkEntry = {
  id: string,
  title: string,
  role: string,
  start_date: string,
  end_date: string | null,
  location: string,
  description: string,
}
