build: components $(SRC) $(TEMPLATES)
	npm run component-build
	npm run server

components:
	npm run component-install

clean:
	rm -fr build components $(TEMPLATES)

.PHONY: clean
