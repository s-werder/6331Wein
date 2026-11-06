# 6331 Wein · Astro

Neue Astro-Website für 6331 Wein aus Hünenberg. Inhalte und Originalfotografien
stammen von der bisherigen Website; Gestaltung, Komponenten und technische
Umsetzung sind neu.

## Entwicklung

```powershell
npm install
npm run dev
```

Astro zeigt danach die lokale URL im Terminal an.

## Qualität prüfen und bauen

```powershell
npm run build
npm run preview
```

`npm run build` führt zuerst `astro check` aus und erzeugt anschliessend die
statische Produktionsversion in `dist/`.

## Projektstruktur

- `src/pages/` – Seiten und Routen
- `src/layouts/` – gemeinsames HTML-Grundlayout
- `src/components/` – eigenständige Inhalts- und Layoutkomponenten
- `src/data/site.ts` – zentrale Inhalte und Weindaten
- `src/styles.css` – responsives Design
- `public/images/` – Originalbilder von 6331 Wein

Das Kontaktformular öffnet eine vorbereitete Nachricht im lokalen E-Mail-Programm
und benötigt deshalb keinen Server oder externen Formulardienst.

## CI/CD

Das Repository enthält zwei GitHub-Actions-Workflows:

- `CI` läuft bei jedem Push, Pull Request und bei manueller Ausführung. Der
  Workflow installiert reproduzierbar mit `npm ci`, führt `astro check` aus,
  baut die Website und speichert `dist/` sieben Tage als Build-Artefakt.
- `Deploy to GitHub Pages` läuft nach jedem Push auf `main` oder manuell. Der
  Workflow erkennt den von GitHub Pages verwendeten Domain- und Basispfad,
  baut Astro entsprechend und veröffentlicht das Ergebnis.

Einmalig im GitHub-Repository konfigurieren:

1. `Settings → Pages` öffnen.
2. Unter `Build and deployment` als Quelle `GitHub Actions` auswählen.
3. Optional unter `Custom domain` die Domain `6331wein.ch` eintragen und die
   von GitHub angezeigten DNS-Einträge beim Domain-Anbieter setzen.

Ohne Custom Domain wird automatisch die GitHub-Pages-Projektadresse verwendet.
Mit hinterlegter Custom Domain baut derselbe Workflow für die Root-Domain. Es
werden keine Repository-Secrets benötigt.

Dependabot prüft ausserdem wöchentlich npm- und GitHub-Actions-Abhängigkeiten.
