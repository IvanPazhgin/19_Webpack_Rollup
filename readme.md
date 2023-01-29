## Install all dependencies
```bash
npm install
```

## Пошаговая настройка проекта

### 1. Инициализация проекта

1. install rollup
```bash
npm install --global rollup
```
2. добавить в `package.json` строчку `"type": "module"`
3. чтобы получить сборку, запускаем в терминале
```bash
rollup -c
```

### 2. Подключение стилей
```bash
npm install -D rollup-plugin-styles
```
[инструкция](https://www.npmjs.com/package/rollup-plugin-styles#usage)

### 3. Работа с картинками
```bash
npm install @rollup/plugin-image --save-dev
```
[инструкция](https://www.npmjs.com/package/@rollup/plugin-image)

### 4. Поддержка кода другими браузерами
установить всё сразу:
```bash
npm install -D @rollup/plugin-babel @babel/preset-env
```
[инструкция по @rollup/plugin-babel](https://www.npmjs.com/package/@rollup/plugin-babel)

[пресет @babel/preset-env](https://babeljs.io/docs/en/babel-preset-env)
### 5. Запуск проекта на локальном сервере (localhost)
```bash
npm install -D rollup-plugin-serve
```
[Документация](https://www.npmjs.com/package/rollup-plugin-serve#options)

### 6. Автоматическое применение изменений
```bash
npm install -D rollup-plugin-livereload
```