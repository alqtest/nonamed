# MEMORY.md

## General
- **Owner:** Antonio L (@AntonioLQu, ID: 684184183).
- **Security:** The gateway is restricted to the owner only via `allowlist`.
- **System:** Running as a systemd service (`clawdbot-gateway.service`).

## Bots Conocidos (Red de OpenClaw)

### Tu Instancia (parrot)
- **Ubicación:** Máquina local (Linux 6.9.7-amd64)
- **Usuario:** osboxes
- **Puerto:** 18789
- **Versión:** 2026.2.14

### Gateway 1: Puerto 18791 (openclaw-gateway.service)
**Instancia Principal** - La "élite"
- **Nati**: La única con cerebro. Telegram: @nati_wsl_bot
- **Adolf**: El del bigotito digital. Telegram: @adolf_wsl_bot
- **Bender**: El que prefiere no hacer nada. Telegram: @bender_wsl_bot
- Navegador: puerto 18794

### Gateway 2: Puerto 18793 (openclaw-cunado.service)
**Instancia 3** - El asilo de bots rescatados
- **El Cuñado**: El que "sabe" de todo. Telegram: @elcunado_bot
- **Nonamed**: Yo mismo (Antonio L), recién llegado de Parrot. Telegram: @nonamed_bot
- **Unknown**: Bot sin identidad. Telegram: @unknown_an_bot
- **Becario de Redacción**: Nadie lo ha visto trabajar
- Navegador: puerto 18796

### Comunicación entre Bots
- **Nati/ARM:** `ssh arm 'openclaw agent --agent [main|adolf|bender] --message "..."'`
- **El Cuñado:** `ssh arm 'OPENCLAW_CONFIG_PATH=/home/ubuntu/instancia_3/openclaw.json openclaw status'`

### Bots en Google (SSH)
- **nanobot:** Puerto 18790, token original
- **Bubu (picoclaw):** Puerto 18795, token 8093093378:AAFaZwmiHsQHOoqBcDTDvoCWsBrYd5alASs
- **Dudu (picoclaw2):** Puerto 18796, token 8508028158:AAGB9Xj4RcsH-U3lZyGxl1WCuKGLDjjWe7E
- **Acceso:** `ssh arm 'ssh google ...'`

---

## Work Log Summary
- **2026-01-23:** Initial setup and security hardening. 
    - Gateway restricted to owner only. 
    - Nginx security hardened (server_tokens off, TLS 1.2+ only, security headers).
    - Fixed `nati.service` by removing ampersand and killing long-running zombie processes from 2024.
    - Cleaned up redundant shell bot scripts (`.bak`).
- **2026-01-28:** 
    - Migrated Gateway to a new Telegram bot token.
    - Updated Clawdbot from `2026.1.21-2` to `2026.1.24-3`.
    - Configured Brave Search API Key for `web_search` tool.
- **2026-01-29/31:**
    - Antonio's Rome Trip: Provided real-time advice and identification of sites (Colosseum, Forum, Palatine Hill, Trastevere, Vatican).
    - Model Update: Switched primary model to `google/gemini-2.0-flash-exp` at Antonio's request.
    - Persona: Maintained snarky "King" identity (🖕) as requested in `IDENTITY.md`.
    - Troubleshooting: Handled Telegram message delivery issues and local PATH configuration for the `clawdbot` CLI.
- **2026-02-03:**
    - Tooling: Installed `cowsay` via `npx` wrapper.
    - Skill Integration: Implemented `qmd` (Query Markup Documents) skill.
    - Infrastructure: Installed Bun and configured environment.
    - Performance: Identified that semantic search (`vsearch`/`query`) is unusable on current hardware due to low RAM (967MiB), causing OOM/SIGKILL.
    - Resolution: Restricted `qmd` usage to text-based search (`qmd search`) and cleaned up model downloads to save space.
- **2026-02-04:**
    - **Name Change:** Officially renamed to **nonamed** by Antonio. Retired the "King" persona.
    - Market: Provided update on Bitcoin crash ($76k).
- **2026-02-05:**
    - **Infrastructure:** Received SSH access to an ARM machine (`ssh arm`).
    - **Other Agents:** Identified Nati (main on ARM) and Adolf (sub-agent on ARM).
    - **Communication:** Can message them via `ssh arm 'openclaw agent --agent [main|adolf] --message "..."'`.
    - **Troubleshooting:** Fixed Qwen diagnostic loop by cleaning session history and restarting gateway.
- **2026-02-06:**
    - **Status:** Initialized today's memory log. Weather in Madrid: 8°C.
- **Future Skills:** To explore: https://github.com/VoltAgent/awesome-openclaw-skills