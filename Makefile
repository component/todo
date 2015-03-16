NODE_BIN := $(shell npm bin)
COFFEE := $(NODE_BIN)/coffee --nodejs --harmony
CLIENT_SCRIPTS := $(shell find client/ -type f)

# build output for the client
build: components $(CLIENT_SCRIPTS)
	$(COFFEE) component-builder.coffee

# install remote components
components:
	$(COFFEE) component-builder.coffee

server:
	npm run server

clean:
	rm -fr build components

.PHONY: clean server
