SERVICE=dashboard

install:
	@yarn install
.PHONY: install

ci: up format lint analyze test
.PHONY: ci

up:
	$(MAKE) install
	$(MAKE) start
.PHONY: up

start:
	@yarn dev
.PHONY: start

lint: | up
	@yarn run lint:check
.PHONY: lint

analyze: | up
	@yarn run typescript:check
.PHONY: analyze

test: PATHS?=.
test: | up
	@yarn run test ${PATHS}
.PHONY: test
