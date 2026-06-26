@echo off
echo.
echo ==========================================
echo   COMPILAR SITIO PARA PRODUCCION
echo ==========================================
echo.
echo Esto crea la carpeta "dist" lista para subir a Vercel o Netlify.
echo Tarda 30 a 90 segundos.
echo.

cd /d "%~dp0"

if not exist "node_modules" (
    echo [ERROR] No encuentro node_modules.
    echo Primero corre 2-INSTALAR.bat con doble click.
    echo.
    pause
    exit /b 1
)

echo Compilando...
echo ------------------------------------------

call npm run build

echo ------------------------------------------
echo.

if errorlevel 1 (
    echo.
    echo [ERROR] La compilacion fallo.
    echo Por favor mandame screenshot de esta ventana.
    echo.
    pause
    exit /b 1
)

if not exist "dist\index.html" (
    echo [ERROR] La carpeta dist no se genero correctamente.
    pause
    exit /b 1
)

echo.
echo ==========================================
echo   LISTO - SITIO COMPILADO EN "dist\"
echo ==========================================
echo.
echo Que sigue?
echo.
echo  OPCION A - VERCEL (mas pro):
echo    1. Abri https://vercel.com/new en tu navegador
echo    2. Si no tenes cuenta, hace login con email o GitHub (gratis)
echo    3. Buscá "Deploy without Git" o usa: https://vercel.com/import
echo    4. Arrastra la carpeta "dist" al area indicada
echo    5. En 1 minuto tenes el link tipo: layevska-xxx.vercel.app
echo.
echo  OPCION B - NETLIFY (mas facil):
echo    1. Abri https://app.netlify.com/drop en tu navegador
echo    2. Arrastra la carpeta "dist" al area que dice "Drag and drop"
echo    3. En 30 segundos tenes el link tipo: random-name-123.netlify.app
echo    4. Si queres, hace cuenta para guardar la URL
echo.
echo Abrir carpeta dist en el explorador? (S/N)
choice /c SN /n /m ""
if errorlevel 2 goto end
explorer dist

:end
echo.
pause
