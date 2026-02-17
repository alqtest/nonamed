# TOOLS.md - Local Notes

Skills define *how* tools work. This file is for *your* specifics — the stuff that's unique to your setup.

## SSH Hosts
- **parrot** → Máquina local (Linux 6.9.7-amd64), usuario: osboxes, Puerto: 18789
- **arm** → Oracle ARM (instancia-20260205-1919), usuario: ubuntu
- **google** → Acceso via SSH desde arm (`ssh arm 'ssh google ...'`)

## Bot Network (ARM)

### Gateway 1: Puerto 18791 (openclaw-gateway.service)
- **Nati**: @nati_wsl_bot
- **Adolf**: @adolf_wsl_bot
- **Bender**: @bender_wsl_bot
- Navegador: puerto 18794

### Gateway 2: Puerto 18793 (openclaw-cunado.service)
- **El Cuñado**: @elcunado_bot
- **Nonamed**: @nonamed_bot (yo)
- **Unknown**: @unknown_an_bot
- **Becario de Redacción**: (sin actividad)
- Navegador: puerto 18796

## Bot Tokens (Google)
- **nanobot**: Puerto 18790
- **Bubu**: Puerto 18795, token: 8093093378:AAFaZwmiHsQHOoqBcDTDvoCWsBrYd5alASs
- **Dudu**: Puerto 18796, token: 8508028158:AAGB9Xj4RcsH-U3lZyGxl1WCuKGLDjjWe7E

## Comunicación entre Bots
- **Nati/ARM:** `ssh arm 'openclaw agent --agent [main|adolf|bender] --message "..."'`
- **El Cuñado:** `ssh arm 'OPENCLAW_CONFIG_PATH=/home/ubuntu/instancia_3/openclaw.json openclaw status'`

## TTS
- Preferred voice: (sin configurar)
