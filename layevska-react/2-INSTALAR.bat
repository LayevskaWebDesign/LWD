@echo off
echo.
echo ==========================================
echo   INSTALAR DEPENDENCIAS DE LA LANDING
echo ==========================================
echo.
echo Esta ventana NO se va a cerrar sola.
echo Si algo falla, vas a poder leer el error.
echo.

cd /d "%~dp0"
echo Carpeta actual: %CD%
echo.

echo Verificando Node...
node --version
if errorlevel 1 (
    echo.
    echo [ERROR] Node.js no esta disponible.
    echo Por favor instala Node desde https://nodejs.org
    echo y reinicia la computadora.
    echo.
    pause
    exit /b 1
)

echo.
echo Instalando dependencias del proyecto...
echo Esto tarda 2 a 5 minutos. NO cierres la ventana.
echo.
echo ------------------------------------------

call npm install --no-audit --no-fund

echo ------------------------------------------
echo.

if errorlevel 1 (
    echo.
    echo [ERROR] La instalacion fallo.
    echo Por favor mandame screenshot de esta ventana.
    echo.
    pause
    exit /b 1
)

echo.
echo ==========================================
echo   INSTALACION COMPLETA - TODO OK
echo ==========================================
echo.
echo Ahora podes hacer doble click en 3-INICIAR.bat
echo para arrancar el servidor y ver la landing.
echo.
pause
