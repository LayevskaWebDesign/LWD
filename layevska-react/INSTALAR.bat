@echo off
chcp 65001 >nul
title Layevska Web Design - Instalar dependencias
color 0E

echo.
echo =====================================================
echo   LAYEVSKA WEB DESIGN - INSTALACION DE DEPENDENCIAS
echo =====================================================
echo.

REM Verificar que Node.js este instalado
where node >nul 2>nul
if errorlevel 1 (
    color 0C
    echo [ERROR] Node.js no esta instalado.
    echo.
    echo  Por favor descargalo desde https://nodejs.org
    echo  Elegi la version LTS (verde, a la izquierda).
    echo  Despues de instalarlo, REINICIA la computadora
    echo  y volve a correr este archivo.
    echo.
    pause
    exit /b 1
)

echo  Node.js detectado:
node --version
echo.
echo  npm version:
npm --version
echo.

cd /d "%~dp0"

echo  Carpeta del proyecto: %CD%
echo.
echo  Instalando dependencias (esto tarda 2-5 minutos)...
echo  No cierres esta ventana hasta que termine.
echo.

call npm install --no-audit --no-fund

if errorlevel 1 (
    color 0C
    echo.
    echo [ERROR] La instalacion fallo.
    echo  Posibles causas:
    echo   - Sin conexion a internet
    echo   - Antivirus bloqueando npm
    echo   - Permisos insuficientes (probar ejecutar como administrador)
    echo.
    pause
    exit /b 1
)

color 0A
echo.
echo =====================================================
echo   INSTALACION COMPLETA
echo =====================================================
echo.
echo  Ahora podes hacer doble click en INICIAR.bat
echo  para arrancar el servidor de desarrollo.
echo.
pause
