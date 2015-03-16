build: components $(SRC) $(TEMPLATES)
	npm run component-build
	node app

components:
	npm run component-install

clean:
	rm -fr build components $(TEMPLATES)

.PHONY: clean
