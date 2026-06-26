@echo off
chcp 65001 >nul
title Layevska Web Design - Servidor de desarrollo
color 0B

echo.
echo =====================================================
echo   LAYEVSKA WEB DESIGN - SERVIDOR DE DESARROLLO
echo =====================================================
echo.

cd /d "%~dp0"

REM Verificar que las dependencias esten instaladas
if not exist "node_modules" (
    color 0C
    echo [ERROR] No se encontro la carpeta node_modules.
    echo.
    echo  Primero corre INSTALAR.bat (doble click)
    echo  para instalar las dependencias del proyecto.
    echo.
    pause
    exit /b 1
)

echo  Iniciando servidor de desarrollo...
echo  Abrira automaticamente en http://localhost:5173
echo.
echo  Para detener: presiona Ctrl + C y luego S + Enter
echo.

call npm run dev

pause
