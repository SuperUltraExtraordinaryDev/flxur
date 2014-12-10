[![Build Status](https://travis-ci.org/TheDodd/fluxr.svg?branch=master)](https://travis-ci.org/TheDodd/fluxr)

fluxr
=====
An application template for applications using a **Node + Express + React + MongoDB** stack and a **Flux architecture**. A MENR (*mean·er*) stack.

## hacking
To start the server, invoke ``npm start`` with whichever configuration you wish to use. E.G.:

    # Start with explicit 'dev' configuration.
    # Will default to 'dev' configuration if not specified.
    config=dev npm start

    # Start with 'prod' configuration.
    config=prod npm start

    # May have to prime the dev database.
    npm run primedb

Invoke ``gulp watch`` after starting the server to have your changes compiled as you work.

## testing
This pretty much goes without saying — invoke the test suite with ``npm test``. Currently using the Jest testing framework.

## building
Currently using the ``slc`` toolchain for building this app. Just invoke ``npm run buildpkg`` to build all dependencies and generate a ``<package>-<version>.tgz`` in this repository's parent directory. If you run into any craziness with the build command, just ``rm -rf`` the ``node_modules`` and try again.

The build process prunes all dev dependencies before the package is archived. To ease this issue, ``npm run buildpkg`` is simply running ``npm install`` as a final build step.

### updating the shrinkwrap
``npm outdated --depth 0`` to check if any direct dependencies can be updated. In order to update the version of a dependency that is to be installed, do the following:
- ``npm install --save[-dev] <package>`` to update package version in ``package.json``.
- Validate that everything works as expected.
- ``npm shrinkwrap`` and commit updated ``npm-shrinkwrap.json``.
