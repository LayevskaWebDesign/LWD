@echo off
echo.
echo ==========================================
echo   REINSTALAR DEPENDENCIAS (nuevas libs 3D)
echo ==========================================
echo.
echo Esto suma Three.js, react-three-fiber, drei,
echo postprocessing, gsap y split-type al proyecto.
echo Tarda 2 a 4 minutos. NO cierres la ventana.
echo.

cd /d "%~dp0"

echo Limpiando cache de npm...
call npm cache clean --force >nul 2>&1

echo Instalando dependencias actualizadas...
echo ------------------------------------------

call npm install --no-audit --no-fund

echo ------------------------------------------
echo.

if errorlevel 1 (
    echo.
    echo [ERROR] La reinstalacion fallo.
    echo Mandame screenshot de esta ventana.
    echo.
    pause
    exit /b 1
)

echo.
echo ==========================================
echo   LISTO - DEPENDENCIAS ACTUALIZADAS
echo ==========================================
echo.
echo Ahora corre 3-INICIAR.bat para ver el Mundo I.
echo.
pause
