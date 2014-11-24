fluxr
=====
An application template for applications using a **Node + Express + React + MongoDB** stack and a **Flux architecture**. A MENR (*mean·er*) stack.

## start
To start the server, invoke ``npm start`` with whichever configuration you wish to use. E.G.:

    # Start with explicit 'dev' configuration.
    # Will default to 'dev' configuration if not specified.
    config=dev npm start

    # Start with 'prod' configuration.
    config=prod npm start

## hacking
Invoke ``gulp watch`` after starting the server to have your changes compiled as you work.

## testing
This pretty much goes without saying — invoke the test suite with ``npm test``. Using the Jest testing framework.
