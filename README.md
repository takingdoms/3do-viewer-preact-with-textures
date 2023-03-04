# 3do-viewer-preact

## CLI Commands

- `npm install`: Installs dependencies

- `npm run dev`: Run a development, HMR server

- `npm run serve`: Run a production-like server

- `npm run build`: Production-ready build

- `npm run lint`: Pass TypeScript files using ESLint

- `npm run test`: Run Jest and Enzyme with
  [`enzyme-adapter-preact-pure`](https://github.com/preactjs/enzyme-adapter-preact-pure) for
  your tests

# TODO (Soon):

- [ ] Fix the empty first texture error that shows up on every model and shouldn't even try to load
- [ ] Better use of generics in the ProgramInfo and WebglSubRenderer types
- [ ] Sort objects by depth (distance from camera) before rendering them to fix the transparency bug
- [ ] Texture replacing functionality (drag & drop files onto the app to load them into the texture list)
- [ ] Ability to select background color, highlight color, solid color (when in solid_color mode), line color (when in wireframe mode)
- [ ] Ability to select the race logo color (blue, red, etc)
- [ ] Draw a silhouette for a highlight when in normal mode (instead of multiplying a color)

# TODO (Later):

- [ ] Make this an embeddable component (that can go into the new TAK website's units pages)
- [ ] Also drop tailwindcss dependency (maybe)
