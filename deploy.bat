@echo off
setlocal enabledelayedexpansion

REM === Entrar na pasta do projeto (ajuste se quiser deixar em outro lugar) ===
cd /d D:\Projetos\cdw-fw

REM === Git add ===
git add .

REM === Mensagem de commit ===
set /p MSG=Digite a mensagem do commit: 
git commit -m "%MSG%"

REM === Push ===
git push

REM === Buscar última tag vX.Y.Z ===
for /f "delims=" %%T in ('git tag --list "v*" --sort=-v:refname') do (
    set LAST_TAG=%%T
    goto :found
)

:found
REM Se não existir tag ainda
if not defined LAST_TAG (
    set NEW_TAG=v0.1.0
    goto :create
)

REM === Quebrar versão ===
for /f "tokens=1-3 delims=." %%a in ("%LAST_TAG:~1%") do (
    set MAJOR=%%a
    set MINOR=%%b
    set PATCH=%%c
)

set /a PATCH+=1
set NEW_TAG=v%MAJOR%.%MINOR%.%PATCH%

:create
REM === Criar e enviar tag ===
git tag %NEW_TAG%
git push origin %NEW_TAG%

exit
