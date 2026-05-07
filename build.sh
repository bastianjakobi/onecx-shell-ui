#!/bin/bash

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

build_project() {
	local project_path="$1"
	local project_name="$2"

	echo
	echo "Building ${project_name}..."
	npm run build --prefix "$SCRIPT_DIR/$project_path"
}

echo "Starting build for shell and preloaders"

build_project "shell" "shell"
build_project "pre_loaders/angular-18" "preloader angular-18"
build_project "pre_loaders/angular-19" "preloader angular-19"
build_project "pre_loaders/angular-20" "preloader angular-20"
build_project "pre_loaders/angular-21" "preloader angular-21"

echo
echo "All projects built successfully."
