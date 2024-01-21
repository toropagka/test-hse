# Описание

Добавлены 3 карточки и шапка.

В шапке выводится сумма и внутри иконки корзины - количество выбранных карточек товара.  
В контентной части сами карточки. По умолчанию у них кнопка "Add to cart". По клику меняется на кнопки добавления/уменьшения товара каждой карточки.
Между ними - количество товара по выбранной позиции.

Используется Pinia в качестве стора для данных. Приложение - монолит на Vue 3. Написано на JS в Composition API ```<script setup>```

В качестве UI-фреймворка выбрал vuetify 3, т.к. в данный момент его изучаю и с ним работаю.


# Installation

## Project setup

```
# yarn
yarn

# npm
npm install

# pnpm
pnpm install
```

### Compiles and hot-reloads for development

```
# yarn
yarn dev

# npm
npm run dev

# pnpm
pnpm dev
```

### Compiles and minifies for production

```
# yarn
yarn build

# npm
npm run build

# pnpm
pnpm build
```

### Customize configuration

See [Configuration Reference](https://vitejs.dev/config/).
