build: components $(SRC) $(TEMPLATES)
	@component build
	node app

clean:
	rm -fr build components $(TEMPLATES)

.PHONY: clean
