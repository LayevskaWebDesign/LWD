@echo off
echo.
echo ==========================================
echo   SERVIDOR DE DESARROLLO - LAYEVSKA
echo ==========================================
echo.

cd /d "%~dp0"

if not exist "node_modules" (
    echo [ERROR] No encuentro la carpeta node_modules.
    echo.
    echo Primero corre 2-INSTALAR.bat con doble click.
    echo.
    pause
    exit /b 1
)

echo Iniciando servidor...
echo.
echo Cuando veas el mensaje "ready in XXX ms" y un link
echo http://localhost:5173, abri ese link en el navegador.
echo.
echo Para DETENER el servidor: presiona Ctrl + C
echo y despues responde S + Enter cuando te pregunte.
echo.
echo ------------------------------------------

call npm run dev

echo.
echo ------------------------------------------
echo Servidor detenido.
pause
