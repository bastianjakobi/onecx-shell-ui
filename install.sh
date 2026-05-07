#!/bin/bash

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

install_project() {
	local project_path="$1"
	local project_name="$2"

	echo
	echo "Installing dependencies for ${project_name}..."
	npm install --prefix "$SCRIPT_DIR/$project_path"
}

echo "Starting dependency installation for shell and preloaders"

install_project "shell" "shell"
install_project "pre_loaders/angular-18" "preloader angular-18"
install_project "pre_loaders/angular-19" "preloader angular-19"
install_project "pre_loaders/angular-20" "preloader angular-20"
install_project "pre_loaders/angular-21" "preloader angular-21"

echo
echo "All project dependencies installed successfully."
