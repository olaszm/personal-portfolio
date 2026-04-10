import { type Project, type langOption } from '~/utils/types'

export function localizeProject(project: Project, lang: langOption): Project {
  if (lang === 'en') return project
  const t = project.translations?.[lang]
  return {
    ...project,
    title: t?.title ?? project.title,
    description: t?.description ?? project.description,
  }
}
