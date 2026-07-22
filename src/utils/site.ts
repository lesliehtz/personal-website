import { getCollection } from 'astro:content';

// BASE_URL with a guaranteed trailing slash, so hrefs can be built as `${base}path`
export const base = import.meta.env.BASE_URL.endsWith('/')
  ? import.meta.env.BASE_URL
  : `${import.meta.env.BASE_URL}/`;

export interface SeriesLink {
  title: string;
  slug: string;
}

// Series entries in the shape the side and mobile menus expect
export async function getSeriesNav(): Promise<SeriesLink[]> {
  const allSeries = await getCollection('series');
  return allSeries.map((s) => ({
    title: s.data.title,
    slug: s.id,
  }));
}
