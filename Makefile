build: components $(SRC) $(TEMPLATES)
	component build
	node app

components:
	component install

clean:
	rm -fr build components $(TEMPLATES)

.PHONY: clean
