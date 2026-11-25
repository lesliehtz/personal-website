import { getCollection } from 'astro:content';
import type { ImageMetadata } from 'astro';

// BASE_URL with a guaranteed trailing slash, so hrefs can be built as `${base}path`
export const base = import.meta.env.BASE_URL.endsWith('/')
  ? import.meta.env.BASE_URL
  : `${import.meta.env.BASE_URL}/`;

export const contactEmail = 'heintz.leslie@gmail.com';

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

const seriesImageModules = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/series/**/*.{jpeg,jpg,png,gif,webp}'
);

// All images in src/assets/series/<slug>/, sorted by filename
export async function getSeriesImages(slug: string): Promise<ImageMetadata[]> {
  const entries = Object.entries(seriesImageModules)
    .filter(([path]) => path.includes(`/series/${slug}/`))
    .sort(([a], [b]) => a.localeCompare(b));
  return Promise.all(entries.map(async ([, load]) => (await load()).default));
}
