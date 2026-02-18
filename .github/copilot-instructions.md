# Copilot Instructions for Skote Angular Admin Dashboard

## Project Overview
- This is a modular Angular 13+ admin dashboard template using TypeScript, SCSS, and Angular CLI.
- Major features are organized under `src/app/pages/` (e.g., dashboards, jobs, projects, ecommerce, etc.).
- State management for some modules (e.g., Projects) uses NgRx (`src/app/store/`).
- Data for UI tables and widgets is often mocked in `src/app/core/data/` as static arrays.
- Layouts and shared UI components are under `src/app/layouts/` and `src/app/shared/`.

## Key Workflows
- **Development:** `ng serve` (see README)
- **Build:** `ng build` (add `--prod` for production)
- **Unit tests:** `ng test` (Karma)
- **E2E tests:** `ng e2e` (Protractor)
- **Scaffolding:** Use `ng generate` for new components/services/modules.

## Conventions & Patterns
- Component selectors use `app-` prefix and kebab-case (see `tslint.json`).
- Use Angular's dependency injection for services and state.
- UI data is often imported from `core/data/*.ts` files, not fetched from APIs.
- NgRx actions, reducers, and selectors are in `src/app/store/` (see `ProjectsData` for example).
- SCSS is used for styling; global styles in `src/styles.scss` and modular styles in component `.scss` files.
- Routing is modularized (e.g., `account-routing.module.ts`, `pages-routing.module.ts`).
- Revisa el SPA antes de hacer el cambio
- Usa buenas practiccas
- Usa directivas de angular 21
- Usa los estilos del template pero de forma minimalista
- El diseño debe ser empresario siempre
- Verifica los componentes que tiene la aplicacion
- Mira los estilos de la aplicacion antes de aplicar cambios
- Manten el estandar de la aplicacion

## Integration Points
- Uses third-party Angular modules (e.g., `ngx-bootstrap`, `ngrx/store`).
- Static assets (images, fonts, translations) are in `src/assets/`.
- i18n support via `src/assets/i18n/` JSON files.

## Examples
- To add a new dashboard widget: create a component in `src/app/pages/dashboards/`, add mock data in `core/data/`, and update the dashboard module.
- To add a new route: update the relevant `*-routing.module.ts` and module file.
- To update state logic: follow the NgRx pattern in `store/ProjectsData/` (actions, reducer, selectors).

## Special Notes
- Most data is static; API integration will require replacing `core/data/*.ts` imports with service calls.
- Follow the linting rules in `tslint.json` (e.g., single quotes, member ordering).
- For UI consistency, use shared components from `shared/ui/` and `shared/widget/`.

Refer to the [README.md](../README.md) for more details on commands and project structure.
