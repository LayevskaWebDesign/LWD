@echo off
REM Levanta las 3 versiones de RODMA a la vez para compararlas lado a lado.
REM (Requiere haber corrido 2-INSTALAR.bat en cada version una vez.)
start "RODMA Basic 5180"      cmd /k "cd versiones\basic && pnpm dev"
start "RODMA Animation 5181"  cmd /k "cd versiones\animation && pnpm dev"
start "RODMA Super Pro 5182"  cmd /k "cd versiones\super-pro && pnpm dev"
echo.
echo Abriendo las 3 versiones de RODMA:
echo   Basic      http://localhost:5180
echo   Animation  http://localhost:5181
echo   Super Pro  http://localhost:5182
echo.
echo (Cada una se abre en su propia ventana. Cerralas para detenerlas.)
pause
