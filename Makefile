test:
	@NODE_ENV="test" \
	./node_modules/.bin/mocha --reporter spec -u bdd --require "should" "./tests/**/test.*.js"

.PHONY: test
