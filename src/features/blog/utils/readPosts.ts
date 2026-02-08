import matter from 'gray-matter';

export type File = {
  path: string
  content: string
}

export type Matterfront = {
  title: string
  date: string
  author: string
  slug: string
}

export const listFilesInPath = (): File[] => {
  const filesWithoutFormatting = import.meta.glob('./posts/*.md', {
    eager: true,
    as: 'raw',
  })

  const blogPosts = []
  for (const [path, content] of Object.entries(filesWithoutFormatting)) {
    blogPosts.push({path, content});
  }
  return blogPosts
}

export const getBlogPosts = (): Matterfront[] => {
  return listFilesInPath().map((file: File) => {
    const matterResult = matter(file.content);
    return {
        title: matterResult.data.title,
        author: matterResult.data.author,
        date: matterResult.data.date,
        slug: file.path.replace('.md', ''),
    }
  })
};
