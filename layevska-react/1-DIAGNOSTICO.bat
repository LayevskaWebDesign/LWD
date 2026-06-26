@echo off
echo.
echo ==========================================
echo   DIAGNOSTICO - Verificar Node.js
echo ==========================================
echo.
echo Esta ventana NO se va a cerrar sola.
echo Lee el resultado y cierrala con la X cuando termines.
echo.
echo ------------------------------------------
echo Verificando Node.js...
echo ------------------------------------------
node --version
if errorlevel 1 (
    echo.
    echo [ERROR] Node.js NO esta instalado o no esta en el PATH.
    echo.
    echo Soluciones:
    echo  1. Reinicia la computadora despues de instalar Node.
    echo  2. Reinstala Node desde https://nodejs.org y elegi
    echo     la opcion "Add to PATH" durante la instalacion.
) else (
    echo OK - Node esta instalado correctamente.
)

echo.
echo ------------------------------------------
echo Verificando npm...
echo ------------------------------------------
npm --version
if errorlevel 1 (
    echo [ERROR] npm no funciona.
) else (
    echo OK - npm funciona correctamente.
)

echo.
echo ------------------------------------------
echo Ubicacion actual:
echo ------------------------------------------
cd /d "%~dp0"
echo %CD%
echo.

echo ------------------------------------------
echo Contenido de la carpeta:
echo ------------------------------------------
dir /b
echo.

echo ==========================================
echo   FIN DEL DIAGNOSTICO
echo ==========================================
echo.
echo Si Node y npm dan OK, podes correr 2-INSTALAR.bat
echo.
pause
