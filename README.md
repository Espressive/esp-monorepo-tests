# Espressive Monorepo Tests

Building upon the [initial monorepo examples](https://github.com/bradfordlemley/cra-monorepo-examples), this repo is updated with [specific use cases](#use-cases) for Espressive's monorepo environment.

### To Do

- [x] Clean up anything unused based on our needs
- [ ] Update README relative to our project
- [ ] 

### What Are These Apps?

- cra1: Almost completely OOTB from CRA with no imports. This is our **CONTROL**
- cra2: CONTROL with a single monorepo package import
- cra3: CONTROL with a single monorepo package import that itself has another monorepot import

### Links

- [Offical Yarn PNP Sample App](https://github.com/yarnpkg/pnp-sample-app)
- [Bradford's Original Monorepo Examples](https://github.com/bradfordlemley/cra-monorepo-examples)

### Use Cases

More needed here...

----------

A monorepo where apps share components might look like this:
```
monorepo
  |--apps
    |--app1
    |--app2
  |--components
    |--component1
    |--component2
    |--component3
```
