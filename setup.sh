#!/bin/sh

# Pretty utils
RED=$(tput setaf 1)
GREEN=$(tput setaf 2)
NORMAL=$(tput sgr0)
POWDER_BLUE=$(tput setaf 153)
YELLOW=$(tput setaf 3)

print_out() {
  printf "\n\n${POWDER_BLUE}----------------------------------------${NORMAL}"
  printf "\n\t ${POWDER_BLUE}$1${NORMAL}\n"
  printf "${POWDER_BLUE}----------------------------------------${NORMAL}\n"
}

print_out "Copying hooks....."

cp hooks/pre-commit .git/hooks/

printf "\n${GREEN}✓ ${NORMAL} done."

exit 0
