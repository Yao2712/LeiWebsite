@echo off
chcp 65001 >nul
echo Starting local server on port 8000...
echo Open your browser to: http://localhost:8000
echo.
echo Press Ctrl+C to stop the server
echo.

REM Try Python first
where python >nul 2>&1
if %ERRORLEVEL% equ 0 (
    python -m http.server 8000
    exit /b
)

REM Try Python3 if Python not found
where python3 >nul 2>&1
if %ERRORLEVEL% equ 0 (
    python3 -m http.server 8000
    exit /b
)

REM If neither Python nor Python3 found
echo.
echo ERROR: Python is not installed!
echo Please install Python from: https://www.python.org/downloads/
echo Make sure to check "Add Python to PATH" during installation
pause
