This is a 2022 PWA Starter using

- React 18
- NextJS 12.2
- Tailwind CSS 3.1
- Typescript 4.7
- Redux Toolkit with Redux Persist (localforage)

## About the architecture

It's a feature oriented project, i.e. all `/pages` are only entry points to a feature.
Features are isolated functionalities which **do not import (aka depend on) other features**.
Cross-feature aspects are "outsourced" to the `app` folder.

The idea is to keep control over dependencies and the project maintainable

The dependency doctrine is:

- A component or module in `app` must not import anything from `feature`
- A feature must not import any other feature

### Backend-for-Frontend (BFF)

Additionally, the project comes with a "Backend-for-Frontend"-pattern. As NextJS offers its own api routes the pattern fits nicely to aggregate multiple backend service. The responsibilityu of the BFF is to gather and transform all backend data such it can directly be used in the frontend, may it in SSR or CSR.
Similar to the feature oriented approach, all BFF-related operations are within the `bff` folder.

## Getting Started

Run `yarn dev` and open `http://localhost:3000`
