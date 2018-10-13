NODE=`which node`
EXE_DIR="./exercises/"
TST_DIR="./tests/"
LESSONS=`ls $(EXE_DIR) | grep "lesson" | cut -d '.' -f 1`
STRING="joder sion!"
NULL="/dev/null"

default: test-all

define test_file
	@echo "Testing $(EXE_DIR)$(1).js file:"
	@$(NODE) $(TST_DIR)$(1).test.js
endef

# test a lesson individually
lesson%:
	@find $(EXE_DIR)$@.js > $(NULL) \
		&& find $(TST_DIR)$@.test.js > $(NULL) \
		|| (echo "file $(EXE_DIR)$@.js not found." && exit 1)
	$(call test_file,$@)

# test all the lessons
test-all:
	@for lesson in $(LESSONS); do \
		echo "Testing $(EXE_DIR)$$lesson.js file:"; \
		$(NODE) $(TST_DIR)$$lesson.test.js; \
	done
