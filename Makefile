NODE=`which node`
EXE_DIR="lessons"
TST_DIR="tests"
SOL_DIR="solutions"
TSTSOL_DIR=".test_solutions"
SOL_BCKP_DIR=".solutions.bckp"
# LESSONS=`find $(EXE_DIR) -name "*.js" | sort | grep "[l]esson[0-9]+.js"`
LESSONS=`find $(EXE_DIR) -name "*.js" | sort | grep -e "lesson[0-9].js"`
TEST_SOLUTIONS=`find $(TSTSOL_DIR) -name "*.js" | sort | grep "[l]esson[0-9]+"`
STRING="joder sion!"
NULL="/dev/null"

default: test-all

# test a lesson number match
lesson%:
	$(eval matches := $(shell find $(EXE_DIR) -name "$@.js" | sort))
	@for match in $(matches); do \
		echo "Testing $$match file:"; \
		path_file=`echo $$match | cut -d '/' -f 2-3`;\
		test_file=`echo "$${path_file/.js/.test.js}"`;\,,
		$(NODE) $(TST_DIR)/$$test_file;\
	done

test-all:
	@for lesson in $(LESSONS); do \
		echo "Testing $$lesson file:"; \
		path_file=`echo $$lesson | cut -d '/' -f 2-3`;\
		test_file=`echo "$${path_file/.js/.test.js}"`;\
		$(NODE) $(TST_DIR)/$$test_file;\
	done

test-solutions: clean copy-tests backup-solutions
	@# replace imported file on every test inside test-solutions to point
	@# to the solutions instead
	@for test in $(TEST_SOLUTIONS); do \
		echo "Testing $$test file:"; \
		path_file=`echo $$test | cut -d '/' -f 3 | cut -d '.' -f 1` ;\
		sed -e s/lessons/$(SOL_BCKP_DIR)/g $$test > $$test.tmp ;\
		rm $$test && mv $$test.tmp $$test ;\
		$(NODE) $$test;\
	done
	@$(MAKE) clean

copy-tests:
	@cp -r tests/ $(TSTSOL_DIR)

backup-solutions:
	@cp -r $(SOL_DIR)/ $(SOL_BCKP_DIR)
	rename 's/.solution.js/.js/' $(SOL_BCKP_DIR)/**/*.solution.js

clean:
	@echo "Tyding up 💅"
	@rm -rf $(TSTSOL_DIR)
	@rm -rf $(SOL_BCKP_DIR)
