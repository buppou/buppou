export function slugify(text: string): string {
  const from = 'àáäâèéëêìíïîòóöôùúüûñç·/_,:; ';
  const to = 'aaaaeeeeiiiioooouuuunc-------';

  let slug = text.toString().toLowerCase();

  // Replace special characters with their equivalents
  for (let i = 0, l = from.length; i < l; i++) {
    slug = slug.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
  }

  slug = slug
    .replace(/\s+/g, '-') // Explicitly replace spaces with hyphens
    .replace(/[^\w-]+/g, '-') // Replace non-alphanumeric (except hyphens) with -
    .replace(/-+/g, '-') // Replace multiple hyphens with a single hyphen
    .replace(/^-+/, '') // Trim hyphens from start
    .replace(/-+$/, ''); // Trim hyphens from end
  console.log('slugify', slug);
  return slug;
}
