export const normalizeVariations = (variacao: unknown): any[] => {
  const defaultValues = {
    estoque: 'indisponivel',
    vendedor: 'vendedor desconhecido',
    fabricante: 'fabricante desconhecido',
    cor: 'cor nao informada',
    voltagem: 'voltagem nao informada',
    tamanho: 'tamanho nao informada',
    garantia: 'garantia nao informada',
    peso: 'eso nao informada',
    dimensoes: null
  };

  if (!Array.isArray(variacao)) return [];

  return variacao.map(v => 
    Object.fromEntries(
      Object.entries(defaultValues).map(([key, def]) => [
        key,
        typeof v?.[key] === 'string' ? v[key] : def
      ])
    )
  );
};
