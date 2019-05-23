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

- [x] For CRA applications, define any of the common modules as peerDependencies and move them to the root so yarn does not have to work as hard to traverse the dependency tree. This also hopefully makes updating and keeping dependencies the same across all of our micro applications. We still have the option of declaring a different dependency inside a micro application if we need to and remove the peerDependencies declaration from that specific package.json file.

- [ ] Rely less on custom tooling (scripts or make) so we can utilize more standardized scripts available in all workspace packages, which may allow us to run some of our builds in parallel. Instead utilize `yarn workspaces run <script>` or [wsrun](https://github.com/hfour/wsrun#readme) in Jenkins and local dev environments.

- [ ] Pre-build any non-application packages and check a compiled package in to git so we only have to build/watch packages when we are working on them. This will hopefully speed up install and build process on Jenkins if we are not having to build from scratch any of our packages that have not changed. This may also allow us at a future date to opt in to jenkins builds and tests for any of these packages if the `/src` has changed. But for now, it is safe to say that we can still run tests on these packages every singe time even when they do not change because the majority of our Jenkins builds is in yarn install time.

- [ ] Utilize the new yarn-pnp API which is substantially faster than the traditional node_modules folder approach. This is still very early in use and initial tests after release raised a number of problems while trying to use yarn-pnp and we had to abandon the approach until some of the above issues are addressed first.


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

### Use Cases

- [ ] To Do

## Links

- [Offical Yarn PNP Sample App](https://github.com/yarnpkg/pnp-sample-app)
- [Bradford's Original Monorepo Examples](https://github.com/bradfordlemley/cra-monorepo-examples)

