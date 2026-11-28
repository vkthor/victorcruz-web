// /llms.txt: resumen en texto plano para asistentes de IA (formato propuesto en llmstxt.org).
// Se genera con los mismos datos que la web, así que se actualiza solo.
import type { APIRoute } from 'astro';
import { bioMedium } from '../data/bio';
import { projects } from '../data/projects';
import { heroQuote, reviews } from '../data/press';
import { dossiers } from '../data/dossiers';
import { site } from '../data/site';
import { routes, tr } from '../i18n';
import { plain } from '../utils';

const base = 'https://www.victorcruz.es';
const en = (k: keyof typeof routes) => `${base}${routes[k].en}`;
const es = (k: keyof typeof routes) => `${base}${routes[k].es}`;

export const GET: APIRoute = () => {
  const press = [heroQuote, ...reviews]
    .flatMap((r) => [r, ...(r.more ?? [])].map((c) => ({ ...c, author: r.author })))
    .sort((a, b) => b.date.localeCompare(a.date))
    .map((c) => `- ${c.outlet} · ${c.author}: ${plain(tr(c.about, 'en'))}${c.url ? ` — ${c.url}` : ' (print only)'}`);

  const proj = [projects.jdz, projects.duo, projects.veladas, projects.cantar].map(
    (p) => `- ${plain(tr(p.name, 'en'))}: ${plain(tr(p.short, 'en'))}`,
  );
  const docs = dossiers.flatMap((d) =>
    d.items.map((i) => `- ${plain(tr(d.project, 'en'))}, ${plain(tr(i.label, 'en'))}: ${i.en ?? (i.es.startsWith('http') ? i.es : base + i.es)}${i.en ? '' : ' (Spanish)'}`),
  );

  const body = `# Víctor Cruz, baritone

> Víctor Cruz is a Spanish baritone (born in Guadix, Granada) specialising in early music, and the founder and director of the early-music ensemble Jácaras del Zéfiro. He also accompanies himself on theorbo and Baroque guitar. Not to be confused with the American football player Victor Cruz.

## About

${plain(bioMedium.en)}

Spanish: ${plain(bioMedium.es)}

## Pages

- [Biography](${en('bio')}) · [Biografía](${es('bio')})
- [Career, year by year, and repertoire](${en('career')}) · [Trayectoria](${es('career')})
- [Videos](${en('videos')}) · [Vídeos](${es('videos')})
- [Press reviews](${en('press')}) · [Prensa](${es('press')})
- [Projects](${en('projects')}) · [Proyectos](${es('projects')})
- [Beyond singing: video production, radio, teaching, languages](${en('beyond')})
- [Press kit: photos, biography, dossiers](${en('downloads')})

## Projects

${proj.join('\n')}

## Dossiers (PDF)

- Víctor Cruz press kit: ${base}/dossiereng.pdf (English), ${base}/dossieresp.pdf (Spanish)
${docs.join('\n')}

## Press reviews

${press.join('\n')}

## Profiles

${site.sameAs.map((u) => `- ${u}`).join('\n')}
- Ensemble: ${site.jdz}

## Contact

${site.email}
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
