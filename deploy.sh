#!/bin/bash

echo "Rodando build..."
npm run build || exit 1

echo "Git add..."
git add .

echo ""
read -p "Mensagem do commit: " MSG
git commit -m "$MSG" || exit 1

echo "Git push..."
git push || exit 1

# Última tag
LAST_TAG=$(git tag --list "v*" --sort=-v:refname | head -n 1)

if [ -z "$LAST_TAG" ]; then
  NEW_TAG="v0.1.0"
else
  VERSION=${LAST_TAG#v}
  IFS='.' read -r MAJOR MINOR PATCH <<< "$VERSION"
  PATCH=$((PATCH + 1))
  NEW_TAG="v$MAJOR.$MINOR.$PATCH"
fi

echo "Criando tag $NEW_TAG"
git tag "$NEW_TAG"
git push origin "$NEW_TAG"

echo "Finalizado."
