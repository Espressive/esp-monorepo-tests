# Espressive Monorepo Tests

Building upon the [initial monorepo examples](https://github.com/bradfordlemley/cra-monorepo-examples), this repo is updated with [specific use cases](#use-cases) for Espressive's monorepo environment.


## What Is Different About This Monorepo?

At Espressive we have discovered that large monorepos with codebases at varying age can start to drastically slow down install times using yarn and workspaces. Yarn has to work very hard to traverse the monorepo tree to determine where it needs to place modules relative to packages. We have discovered that some packages are sensitve to being resolved at the root or relative to the package they are being used in. Some this is by design (such as the latest version of Babel). This means that in some cases we are having to declare some packages with Yarn's `no-hoist` configuration. This makes the install process even longer and increases the volume of all node_modules folders across the project increase exponentially.


### Challenges

There are a few substantial problems that the above issues present:

- Node starts to run out of memory during the install process (especially problematic in VMs, Docker)
- Docker containers and layers start to become massive, even though we only care about our bundled runtime (--squash helps a little)
- Install times have increased almost 100% from where they were even six months ago as our codebase grows

### Proposals

This repo is a POC to address the above problems in a few different ways:

- [ ] For CRA applications, define any of the common modules as peerDependencies and move them to the root so yarn does not have to work as hard to traverse the dependency tree. This also hopefully makes updating and keeping dependencies the same across all of our micro applications. We still have the option of declaring a different dependency inside a micro application if we need to and remove the peerDependencies declaration from that specific package.json file.
- [ ] 


## Monorepo Structure

In this test repository we are separating our workspace packages into different folders for organization. Note that the "_comps" have an underscore. That is so scripts run on all other workspace depencencies before they run on our apps.

```
"workspaces": [
  "_comps/*",
  "apps/*"
],
```

## What Are These Apps?

- cra1: Almost completely OOTB from CRA with no imports. This is our **CONTROL**
- cra2: CONTROL with a single monorepo package import
- cra3: CONTROL with a single monorepo package import that itself has another monorepot import

## Scripts

- [ ] To Do

## Links

- [Offical Yarn PNP Sample App](https://github.com/yarnpkg/pnp-sample-app)
- [Bradford's Original Monorepo Examples](https://github.com/bradfordlemley/cra-monorepo-examples)

