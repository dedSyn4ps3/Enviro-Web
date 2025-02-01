#!/bin/sh

#######################################
#      Dashboard startup script       #
#######################################

BOLD='\033[1m'
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[0;33m'
NC='\033[0m' # No Color

##################################################################
#                                                                #
#   If using NPM to install serve, replace the below install     #
#   commands to install serve instead:                           #
#                                                                #
#            `sudo npm install -g serve`                         #
#                                                                #                                                         
##################################################################

#!/bin/bash

BOLD=$(tput bold)
NC=$(tput sgr0)
GREEN=$(tput setaf 2)

# Check for Bun
if ! command -v bun &> /dev/null
then
    echo "🚀 ${BOLD}Bun not found! Installing Bun...${NC}"
    curl -fsSL https://bun.sh/install | bash
    export PATH="$HOME/.bun/bin:$PATH"
    
    echo
    echo "🎉 ${BOLD}Bun installed!${NC}"
else
    echo "✅ ${BOLD}Bun already available!${NC}"
fi

# Install frontend server
echo "📦 ${BOLD}Installing frontend server...${NC}"

# Uncomment if you've made changes to the frontend and need to build it
# NOTE: Building on an Pi Zero (2) or Pi 2/3 is not advised!
#bun run build

bun add serve

echo
echo "🎉 ${BOLD}Frontend Ready!${NC}"

# Start Frontend
echo
echo "✅ ${BOLD}Starting dashboard server on ${GREEN}http://localhost:8081 ${NC}"
echo

bun run serve -s dist -p 8081 &

# Start Backend
echo
echo "✅ ${BOLD}Starting GraphQL backend... ${NC}"
echo

source .env/bin/activate

fastapi run --host 0.0.0.0 --port 8080 backend/server/main.py
