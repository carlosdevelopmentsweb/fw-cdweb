Write-Host "Rodando build..."
npm run build
if ($LASTEXITCODE -ne 0) { exit }

Write-Host "Git add..."
git add .

$msg = Read-Host "Mensagem do commit"
git commit -m "$msg"
if ($LASTEXITCODE -ne 0) { exit }

git push
if ($LASTEXITCODE -ne 0) { exit }

$lastTag = git tag --list "v*" --sort=-v:refname | Select-Object -First 1

if (-not $lastTag) {
    $newTag = "v0.1.0"
} else {
    $v = $lastTag.Substring(1).Split(".")
    $newTag = "v$($v[0]).$($v[1]).$([int]$v[2] + 1)"
}

Write-Host "Criando tag $newTag"
git tag $newTag
git push origin $newTag

Write-Host "Finalizado"
