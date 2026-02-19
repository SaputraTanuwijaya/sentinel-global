#!/bin/bash

# ==========================================
# Sentinel Global Lifecycle CLI (sentinel.sh)
# ==========================================

# Use a cleanup function for errors
cleanup_on_error() {
    local exit_code=$?
    if [ $exit_code -ne 0 ]; then
        echo ""
        echo "------------------------------------------------"
        echo "ERROR: Script failed with exit code $exit_code"
        echo "Location: Line $1"
        echo "------------------------------------------------"
        echo "Press any key to close..."
        read -n 1 -s
    fi
}

# Set error trap to show where it failed
trap 'cleanup_on_error $LINENO' ERR

# Global PIDs for background services
CSS_PID=""
BUILD_PID=""
SERVER_PID=""

# Configuration
REPO_URL="https://github.com/SaputraTanuwijaya/sentinel-global"
APP_URL="http://localhost:3000"

# Colors - Refined for a more Gray/Sleek look
COLOR_GRAY="#D3D3D3"
COLOR_GRAY_DARK="#707070"
COLOR_GREEN_LIGHT="#00FF00" # Used sparingly for accents
COLOR_GREEN_MID="#008000"

detect_os() {
    if [[ "$OSTYPE" == "darwin"* ]]; then
        echo "macos"
    elif [[ "$OSTYPE" == "linux-gnu"* ]]; then
        if grep -q Microsoft /proc/version 2>/dev/null; then echo "wsl"; else echo "linux"; fi
    elif [[ "$OSTYPE" == "msys" || "$OSTYPE" == "cygwin" || "$OSTYPE" == "win32" ]]; then
        echo "windows"
    else
        echo "unknown"
    fi
}

show_logo() {
    clear
    if command -v gum &> /dev/null; then
        # Printing Logo with Gray-centric logic
        gum style --foreground "$COLOR_GRAY"      "                                                              "
        gum style --foreground "$COLOR_GRAY"      "                              ::                              "
        gum style --foreground "$COLOR_GRAY"      "                    :.....................                    "
        gum style --foreground "$COLOR_GRAY"      "          ..........................................          "
        gum style --foreground "$COLOR_GRAY"      "        ..............................................        "
        gum style --foreground "$COLOR_GRAY"      "        ..............................................        "
        gum style --foreground "$COLOR_GRAY_DARK" "        ....................      ....................        "
        gum style --foreground "$COLOR_GRAY_DARK" "        .................            .................        "
        gum style --foreground "$COLOR_GRAY_DARK" "        .............:        ..         .............        "
        gum style --foreground "$COLOR_GRAY_DARK" "        ...........        ........        ...........        "
        gum style --foreground "$COLOR_GRAY_DARK" "        ..........      ..............      ..........        "
        gum style --foreground "$COLOR_GRAY_DARK" "        ..........    ..................    ..........        "
        gum style --foreground "$COLOR_GRAY_DARK" "        ..........    ................................        "
        gum style --foreground "$COLOR_GRAY_DARK" "        ..........       ........:....................        "
        gum style --foreground "$COLOR_GRAY_DARK" "        ............         .......        ..........        "
        gum style --foreground "$COLOR_GRAY_DARK" "        ..............:         .......     ..........        "
        gum style --foreground "$COLOR_GRAY_DARK" "        ..................        ......    ..........        "
        gum style --foreground "$COLOR_GRAY_DARK" "        ..........  .........      :....    ..........        "
        gum style --foreground "$COLOR_GRAY_DARK" "        ..........    ...........   ....    ..........        "
        gum style --foreground "$COLOR_GRAY_DARK" "        ..........    ..................    ..........        "
        gum style --foreground "$COLOR_GRAY_DARK" "         .........       ............       .........         "
        gum style --foreground "$COLOR_GRAY_DARK" "         ...........        ......        ...........         "
        gum style --foreground "$COLOR_GRAY_DARK" "          .............       ..       .............          "
        gum style --foreground "$COLOR_GRAY_DARK" "           ...............          :..............           "
        gum style --foreground "$COLOR_GRAY"      "            .................    :................            "
        gum style --foreground "$COLOR_GRAY"      "             ....................................             "
        gum style --foreground "$COLOR_GRAY"      "              .................................               "
        gum style --foreground "$COLOR_GRAY"      "                ..............................                "
        gum style --foreground "$COLOR_GRAY"      "                  ..........................                  "
        gum style --foreground "$COLOR_GRAY"      "                    ......................                    "
        gum style --foreground "$COLOR_GRAY"      "                       ................                       "
        gum style --foreground "$COLOR_GRAY"      "                         ...........                          "
        gum style --foreground "$COLOR_GRAY"      "                             ....                             "
        echo ""
        gum style --foreground "$COLOR_GRAY" --align center --width 63 "S E N T I N E L   G L O B A L"
    else
        echo "--- SENTINEL GLOBAL ---"
    fi
    echo ""
}

check_dependencies() {
    local missing_deps=()
    if ! command -v bun &> /dev/null; then missing_deps+=("bun"); fi
    if ! command -v gum &> /dev/null; then missing_deps+=("gum"); fi

    if [ ${#missing_deps[@]} -ne 0 ]; then
        show_logo
        echo "Missing dependencies: ${missing_deps[*]}"
        echo "Trying to install..."
        install_dependencies "${missing_deps[@]}"
    fi
}

install_dependencies() {
    local os=$(detect_os)
    local deps=("$@")
    case "$os" in
        macos)
            if [[ " ${deps[*]} " =~ " gum " ]]; then brew install gum; fi
            if [[ " ${deps[*]} " =~ " bun " ]]; then curl -fsSL https://bun.sh/install | bash; fi
            ;;
        linux|wsl)
            if command -v apt-get &> /dev/null; then
                sudo apt-get update
                if [[ " ${deps[*]} " =~ " gum " ]]; then
                    sudo mkdir -p /etc/apt/keyrings
                    curl -fsSL https://repo.charm.sh/apt/gpg.key | sudo gpg --dearmor -o /etc/apt/keyrings/charm.gpg
                    echo "deb [signed-by=/etc/apt/keyrings/charm.gpg] https://repo.charm.sh/apt/ * *" | sudo tee /etc/apt/sources.list.d/charm.list
                    sudo apt update && sudo apt install -y gum
                fi
            fi
            if [[ " ${deps[*]} " =~ " bun " ]]; then curl -fsSL https://bun.sh/install | bash; fi
            ;;
        windows)
            if [[ " ${deps[*]} " =~ " gum " ]]; then winget install CharmBracelet.Gum; fi
            if [[ " ${deps[*]} " =~ " bun " ]]; then powershell -c "irm bun.sh/install.ps1 | iex"; fi
            ;;
    esac
}

kill_services() {
    [ -n "$CSS_PID" ] && kill $CSS_PID 2>/dev/null || true
    [ -n "$BUILD_PID" ] && kill $BUILD_PID 2>/dev/null || true
    [ -n "$SERVER_PID" ] && kill $SERVER_PID 2>/dev/null || true
    CSS_PID=""
    BUILD_PID=""
    SERVER_PID=""
}

# Trap for terminal closing/interruption
trap 'kill_services; exit' INT TERM EXIT

run_app() {
    if [ ! -d "node_modules" ]; then
        if gum confirm "node_modules missing. Install?"; then
            gum spin --spinner dot --title "Installing dependencies..." -- bun install
        else
            return
        fi
    fi

    local choice=$(gum choose --cursor.foreground "$COLOR_GREEN_LIGHT" --selected.foreground "$COLOR_GRAY" "> Open App" "  Back")
    
    if [[ "$choice" == *"> Open App"* ]]; then
        show_logo
        gum style --foreground "$COLOR_GRAY" "Starting Sentinel Infrastructure..."

        # Start background processes
        bun run css > /dev/null 2>&1 &
        CSS_PID=$!
        
        bun run build:client > /dev/null 2>&1 &
        BUILD_PID=$!
        
        bun run dev > /dev/null 2>&1 &
        SERVER_PID=$!

        gum spin --spinner globe --title "Warming up..." -- sleep 3

        local os=$(detect_os)
        case "$os" in
            macos) open "$APP_URL" ;;
            linux|wsl) xdg-open "$APP_URL" 2>/dev/null || wsl-open "$APP_URL" 2>/dev/null || echo "Navigate to $APP_URL" ;;
            windows) start "$APP_URL" ;;
        esac

        echo ""
        gum style --border normal --border-foreground "$COLOR_GRAY_DARK" --padding "1 2" \
            "  S Y S T E M   O N L I N E  " \
            "----------------------------" \
            "URL    : $APP_URL" \
            "----------------------------" \
            "Press [ENTER] to return to menu."
        
        read -r
        
        gum style --foreground "$COLOR_GRAY_DARK" "Cleaning up..."
        kill_services
        sleep 1
    fi
}

link_to_github() {
    gum style --foreground "$COLOR_GRAY" "Opening GitHub..."
    local os=$(detect_os)
    case "$os" in
        macos) open "$REPO_URL" ;;
        linux|wsl) xdg-open "$REPO_URL" 2>/dev/null || wsl-open "$REPO_URL" 2>/dev/null ;;
        windows) start "$REPO_URL" ;;
    esac
    sleep 1
}

uninstall_app() {
    local choice=$(gum choose --cursor.foreground "$COLOR_GREEN_LIGHT" --selected.foreground "$COLOR_GRAY" "> Full Uninstall" "> Basic Uninstall" "  Cancel")
    local os=$(detect_os)
    
    if [[ "$choice" == *"Cancel"* ]]; then return; fi
    
    if gum confirm "Delete project data?"; then
        gum spin --spinner points --title "Removing..." -- rm -rf node_modules bun.lock src/public/styles.css src/public/js
        
        if [[ "$choice" == *"Full"* ]]; then
            case "$os" in
                macos) brew uninstall gum bun || true ;;
                linux|wsl) sudo apt-get remove -y gum || true; rm -rf ~/.bun || true ;;
                windows) winget uninstall CharmBracelet.Gum || true ;;
            esac
        fi

        gum style --foreground "$COLOR_GRAY" "Cleanup complete."
        cd ..
        echo "Folder can now be removed."
        exit 0
    fi
}

# Main Loop
check_dependencies

while true; do
    show_logo
    CHOICE=$(gum choose \
        --cursor.foreground "$COLOR_GREEN_LIGHT" \
        --selected.foreground "$COLOR_GRAY" \
        "> Run App" \
        "  Link to Github" \
        "  Uninstall" \
        "  Exit")

    case "$CHOICE" in
        *"> Run App"*) run_app ;;
        *"> Link to Github"* | *"Link to Github"*) link_to_github ;;
        *"> Uninstall"* | *"Uninstall"*) uninstall_app ;;
        *"> Exit"* | *"Exit"*) 
            gum style --foreground "$COLOR_GRAY" "Sentinel Offline."
            exit 0 
            ;;
    esac
done
