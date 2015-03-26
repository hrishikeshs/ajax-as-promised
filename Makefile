SOURCES = lib/*.js
COMPILED = dist/lib/*.js
DIST = dist/ajax-as-promised.js

all:transpile
	cat $(COMPILED) > $(DIST)

transpile: $(SOURCES)
	babel $(SOURCES) --out-dir dist/

.PHONY: clean

clean:
	rm -rf dist/
