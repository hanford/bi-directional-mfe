# Webpack 5 Microfrontend, Relay hooks, React Suspense

<img src='https://github.com/hanford/bi-directional-mfe/blob/master/example.gif' alt='preview gif' width='600px' />

This example demos bi-directional hosts each with their own remote components. We're sharing data aware components that use react suspense and relay hooks.

- `app1` consumes `app2` and `app3` exposed components.
- `app2` exposes a `<Feed />` component.
- `app3` exposes a `<Modal />` component.
- `server` is a shimmed graphql server.

# Running Demo

Run `yarn start`. This will build and serve both `app1`, `app2` and `app3` on ports 3001, 3002 and 3003 respectively. It will also start the graphql server.

- [localhost:3001](http://localhost:3001/)
- [localhost:3002](http://localhost:3002/)
- [localhost:3003](http://localhost:3003/)
- [localhost:4000](http://localhost:4000/graphql)

Notice that `app1` will asynchronously load `app2`'s `Feed` and `app2` will asynchronously load `app3`'s Modal.

[Inspiration](https://github.com/mizx/module-federation-examples/tree/master/bi-directional)
