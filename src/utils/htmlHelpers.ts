export interface ParsedCard {
  title: string;
  bodyHtml: string;
}

export interface ParsedSubItem {
  title: string;
  bodyHtml: string;
}

export function extractHeadingAndIntro(sectionHtml: string): {
  h1?: string;
  h2?: string;
  introHtml: string;
  restHtml: string;
} {
  let remaining = sectionHtml.trim();
  let h1: string | undefined;
  let h2: string | undefined;

  const h1Match = remaining.match(/^<h1>([\s\S]*?)<\/h1>/i);
  if (h1Match) {
    h1 = h1Match[1].trim();
    remaining = remaining.slice(h1Match[0].length).trim();
  }

  const h2Match = remaining.match(/^<h2>([\s\S]*?)<\/h2>/i);
  if (h2Match) {
    h2 = h2Match[1].trim();
    remaining = remaining.slice(h2Match[0].length).trim();
  }

  // First paragraph if before ul/ol/div/h3
  const firstTagMatch = remaining.match(/<(div|ul|ol|h3)/i);
  if (firstTagMatch && firstTagMatch.index !== undefined) {
    const introHtml = remaining.slice(0, firstTagMatch.index).trim();
    const restHtml = remaining.slice(firstTagMatch.index).trim();
    return { h1, h2, introHtml, restHtml };
  }

  return { h1, h2, introHtml: remaining, restHtml: "" };
}

export function extractCards(sectionHtml: string): ParsedCard[] {
  const cards: ParsedCard[] = [];
  const cardRegex = /<div class="card">\s*<h3>([\s\S]*?)<\/h3>\s*([\s\S]*?)<\/div>/gi;
  let match;
  while ((match = cardRegex.exec(sectionHtml)) !== null) {
    cards.push({
      title: match[1].trim(),
      bodyHtml: match[2].trim(),
    });
  }
  return cards;
}

export function extractH3Items(sectionHtml: string): ParsedSubItem[] {
  const items: ParsedSubItem[] = [];
  const parts = sectionHtml.split(/(?=<h3>)/i);
  for (const part of parts) {
    const m = part.match(/^<h3>([\s\S]*?)<\/h3>([\s\S]*)$/i);
    if (m) {
      items.push({
        title: m[1].trim(),
        bodyHtml: m[2].trim(),
      });
    }
  }
  return items;
}

export function extractListItems(sectionHtml: string): { title: string; bodyHtml: string }[] {
  const items: { title: string; bodyHtml: string }[] = [];
  const liRegex = /<li>([\s\S]*?)<\/li>/gi;
  let match;
  while ((match = liRegex.exec(sectionHtml)) !== null) {
    const inner = match[1].trim();
    const strongMatch = inner.match(/^<strong>([\s\S]*?)<\/strong>\s*([\s\S]*)$/i);
    if (strongMatch) {
      items.push({
        title: strongMatch[1].replace(/[:.]$/, "").trim(),
        bodyHtml: strongMatch[2].trim(),
      });
    } else {
      items.push({
        title: "",
        bodyHtml: inner,
      });
    }
  }
  return items;
}
