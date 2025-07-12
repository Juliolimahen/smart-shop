export const parsePrice = (price: unknown): number | null => {
  if (price === null || price === undefined) return null;
  if (typeof price === 'number') return price;

  if (typeof price === 'string') {
    const cleaned = price.replace(/[^\d,]/g, '').replace(',', '.');
    const parsed = parseFloat(cleaned);
    return isNaN(parsed) ? null : parsed;
  }

  return null;
};
