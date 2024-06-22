# React環境テンプレート

## Get Started

1. `git clone`
2. 環境内の`project-named`をすべて置換（package-lock.json以外）
3. `docker compose build`
4. `docker compose up -d`
5. localhost:3000を叩いて起動確認
6. `code .`
7. Remote development拡張機能から「ReOpen in container」
8. `npx husky init && echo "npx lint-staged" > .husky/pre-commit`
9. `git commit -m "update project-named"`

## Finish project

1. `docker compose down --rmi local -v`
2. `rm -r ./project-named`

## 主な使用ツール

- VSCode
- TypeScript
- Yarn
- ESLint
- Prettier
- Jest
- CI(husky)
- Storybook
- React Developer Tools

## VSCodeの拡張機能

- JS
  - ES7+
  - ES6
  - CSS to JSS
  - yarn
- CSS
  - Extraction CSS Selector
  - Tailwind CSS Inteligense  
  - colorize
- formatter/test
  - Prettier
  - ESLint
  - Jest
- git
  - Github Pull Request
  - Git Lens
- それ以外
  - Remote development
  - Auto Rename Tag
  - Code Spell Checker
  - Copilot
  - Material Icon Theme
  - zenkaku
