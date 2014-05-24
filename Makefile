test:
	@NODE_ENV="test" \
	./node_modules/.bin/mocha --reporter spec -u bdd --require "should" "./tests/**/test.*.js"


cover:
	@NODE_ENV="test" \
	./node_modules/.bin/istanbul cover ./node_modules/.bin/_mocha -- -u exports -R spec "tests/**/test.*.js"

.PHONY: test
