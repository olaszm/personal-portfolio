export interface IRoute {
    name: string,
    url: string,
    state?: string,
    icon?: string,
    type: string
}

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

export interface ProjectsApiResponse {
    data: Project[] | null;
    error: Error | null;
}

export type langOption = "en" | "hu";
