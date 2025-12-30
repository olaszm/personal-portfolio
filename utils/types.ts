export interface IRoute {
    name: string,
    url: string,
    state?: string,
    icon?: string,
    type: string
}

export type Project = {
    title: string,
    description: string
    cover_img: string,
    host_url: string,
    source_url: string,
}

export interface ProjectsApiResponse {
    data: Project[] | null;
    error: Error | null;
}
