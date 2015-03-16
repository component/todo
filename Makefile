NODE_BIN := $(shell npm bin)
COFFEE := $(NODE_BIN)/coffee --nodejs --harmony

build: components $(SRC) $(TEMPLATES)
	$(COFFEE) component-builder.coffee
	npm run server

components:
	$(COFFEE) component-builder.coffee

clean:
	rm -fr build components $(TEMPLATES)

.PHONY: clean
