# Webpack 5 Microfrontend, Relay hooks, React Suspense

<img src='https://github.com/hanford/bi-directional-mfe/blob/master/example.gif' alt='preview gif' width='600px' />

This example demos bi-directional hosts each with their own remote components. We're sharing data aware components that use react suspense and relay hooks.

- `app1` exposes a `<Profile />` component.
- `app2` exposes a `<Feed />` component, built with `Modal` from app3
- `app3` exposes a `<Modal />` component.
- `app4` consumes `app1`, `app2`, `app5`, `app6` exposed components, it also shares a router and composes routes from `app6`
- `app5` exposes a `<About />` component.
- `app6` exposes it's router, with `<TermsOfService />` and `Privacy` components.
- `server` is a shimmed graphql server.

# Running Demo

Run `yarn start`. This will build and serve both `app1`, `app2` and `app3` on ports 3001, 3002 and 3003 respectively. It will also start the graphql server.

- [localhost:3001](http://localhost:3001/)
- [localhost:3002](http://localhost:3002/)
- [localhost:3003](http://localhost:3003/)
- [localhost:3004](http://localhost:3004/)
- [localhost:3005](http://localhost:3005/)
- [localhost:3006](http://localhost:3006/)
- [localhost:4000](http://localhost:4000/graphql)

[Inspiration](https://github.com/mizx/module-federation-examples/tree/master/bi-directional)
