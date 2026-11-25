@echo off
rem Abre la web de Víctor Cruz en el navegador (vista previa local).
cd /d "%~dp0"
if not exist node_modules (
  echo Instalando dependencias, sólo la primera vez...
  call npm install
)
start "Web Victor Cruz" cmd /k npm run dev -- --port 4322
timeout /t 5 /nobreak >nul
start "" http://localhost:4322/
