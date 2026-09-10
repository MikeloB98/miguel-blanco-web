# Miguel Blanco García — Portfolio

Production portfolio for Miguel Blanco García, built with Next.js, React and TypeScript. It presents scientific project coordination, materials and semiconductor research, industrial R&D, publications and applied AI projects.

## Requirements

- Node.js 20.9 or newer (Node.js 22 LTS recommended)
- npm 10 or newer

## Development

```bash
npm install
npm run dev
```

Open <http://localhost:3000>. For a quick preview without a server, open `index.html` directly.

## Quality checks

```bash
npm run lint
npm run typecheck
npm run build
```

The production build regenerates the downloadable CV and standalone preview first.

## Configuration

Public contact details and profile links live in `src/config/site.ts`. Add the phone number there to enable the call action on mobile devices. Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_SITE_URL` to the final production domain.

## Deploy to Vercel

1. Push this directory to a GitHub repository.
2. Import the repository in Vercel.
3. Set `NEXT_PUBLIC_SITE_URL` to the deployed domain.
4. Deploy using the automatically detected Next.js settings.

## Structure

```text
src/
  app/             App Router entry point, metadata and global styles
  components/      Portfolio UI and client interactions
  config/          Public profile and contact configuration
public/
  images/          Portfolio imagery
  *.pdf            Generated downloadable CV
scripts/           CV and standalone-preview generators
index.html         Standalone browser preview
styles.css         Generated preview stylesheet
script.js          Standalone preview interactions
```

The public site intentionally excludes a telephone number until one is explicitly configured. Review `src/config/site.ts` and the generated CV before every public deployment.
