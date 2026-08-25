# Kode React Template

Стартовый шаблон для фронтенд-команды. React 19 + TypeScript + Vite 8 с заранее настроенным стеком и архитектурой FSD.

## Быстрый старт

```bash
# Установка зависимостей (используем pnpm)
pnpm install

# Запуск dev-сервера
pnpm dev

# Сборка для продакшна
pnpm build

# Превью сборки
pnpm preview
```

---

## Стек технологий

### Ядро
| Библиотека | Версия | Назначение |
|---|---|---|
| [React](https://react.dev) | 19 | UI-фреймворк |
| [TypeScript](https://www.typescriptlang.org) | 6 | Статическая типизация |
| [Vite](https://vitejs.dev) | 8 | Сборщик и dev-сервер |
| [React Compiler](https://react.dev/learn/react-compiler) | — | Автоматическая мемоизация (включён через Babel) |

### Роутинг
| Библиотека | Версия | Назначение |
|---|---|---|
| [React Router](https://reactrouter.com) | 8 | Клиентский роутинг (`createBrowserRouter`) |
| [nuqs](https://nuqs.47ng.com) | 2 | Типизированные query-параметры URL |

### Данные и состояние
| Библиотека | Версия | Назначение |
|---|---|---|
| [TanStack Query](https://tanstack.com/query) | 5 | Серверный стейт: кэш, запросы, мутации |
| [Zustand](https://zustand.docs.pmnd.rs) | 5 | Клиентский стейт |

### Формы и валидация
| Библиотека | Версия | Назначение |
|---|---|---|
| [React Hook Form](https://react-hook-form.com) | 7 | Управление формами |
| [Zod](https://zod.dev) | 4 | Схемы валидации |
| [@hookform/resolvers](https://github.com/react-hook-form/resolvers) | 5 | Связка RHF + Zod |

### UI и стили
| Библиотека | Версия | Назначение |
|---|---|---|
| [Tailwind CSS](https://tailwindcss.com) | 4 | Утилитарные CSS-классы (через Vite-плагин) |
| [shadcn/ui](https://ui.shadcn.com) | — | Компоненты (копируются в `src/shared/ui`) |
| [Lucide React](https://lucide.dev) | — | Иконки |
| [tw-animate-css](https://github.com/jamiebuilds/tailwindcss-animate) | — | CSS-анимации для Tailwind |
| [class-variance-authority](https://cva.style) | — | Варианты стилей компонентов |
| [clsx](https://github.com/lukeed/clsx) + [tailwind-merge](https://github.com/dcastil/tailwind-merge) | — | Мержинг классов (`cn()`) |

### Утилиты
| Библиотека | Версия | Назначение |
|---|---|---|
| [react-use](https://github.com/streamich/react-use) | — | Коллекция готовых хуков |
| [date-fns](https://date-fns.org) | 4 | Работа с датами |

### Инструменты разработки
| Инструмент | Назначение |
|---|---|
| [oxlint](https://oxc.rs/docs/guide/usage/linter.html) | Быстрый линтер (замена ESLint) |
| [oxfmt](https://oxc.rs) | Форматтер с сортировкой импортов и Tailwind-классов |
| [Prettier](https://prettier.io) | Форматтер (резервный, используется oxfmt) |
| [Husky](https://typicode.github.io/husky) + lint-staged | Pre-commit хуки |

---

## Структура проекта

Проект следует архитектуре **Feature-Sliced Design (FSD)**. Каждый слой имеет публичное API через `index.ts`.

```
src/
├── main.tsx              # Точка входа
├── index.css             # Глобальные стили и CSS-переменные темы
│
├── pages/                # Страницы и конфигурация роутера
│   ├── router.tsx        # createBrowserRouter — маршруты приложения
│   └── HomePage/
│
├── providers/            # Провайдеры (QueryClient, темы и т.д.)
│
├── features/             # Фичи: бизнес-логика с UI
├── entities/             # Доменные сущности
├── widgets/              # Крупные составные блоки из фич и сущностей
├── connectors/           # API-клиенты, хуки запросов
│
└── shared/               # Общий код без привязки к домену
    ├── ui/               # Компоненты (shadcn/ui и кастомные)
    ├── lib/              # Утилиты (cn, форматтеры)
    └── utils/            # Вспомогательные функции
```

### Правила импортов (FSD)

Импорты разрешены только сверху вниз по слоям:

```
pages → widgets → features → entities → shared
```

Слой не должен импортировать из слоя выше себя.

---

## Алиасы путей

Настроены в `vite.config.ts` и `tsconfig.app.json`:

```ts
'@'           → src/
'@pages'      → src/pages/index.ts
'@features'   → src/features/index.ts
'@entities'   → src/entities/index.ts
'@widgets'    → src/widgets/index.ts
'@connectors' → src/connectors/index.ts
'@providers'  → src/providers/index.ts
'@shared'     → src/shared/*
```

Пример:
```ts
import { Button } from '@shared/ui'
import { router } from '@pages'
```

---

## Скрипты

```bash
pnpm dev          # Запуск dev-сервера (Vite HMR)
pnpm build        # TypeScript check + production build
pnpm preview      # Превью production-сборки
pnpm lint         # Проверка кода oxlint
pnpm lint:fix     # Автоисправление через oxlint
pnpm fmt          # Форматирование oxfmt (импорты + Tailwind + код)
pnpm fmt:check    # Проверка форматирования без изменений
```

---

## Темизация

Цветовая схема основана на CSS-переменных в `src/index.css`. Поддерживаются светлая и тёмная темы. Все переменные — в пространстве имён `:root` / `.dark`.

Для переключения темы добавьте/уберите класс `dark` на `<html>`.

---

## Добавление shadcn/ui компонентов

```bash
pnpm dlx shadcn@latest add <component-name>
```

Компоненты копируются в `src/shared/ui/` согласно `components.json`.

---

## Конфигурационные файлы

| Файл | Назначение |
|---|---|
| `vite.config.ts` | Vite: плагины, алиасы |
| `tsconfig.app.json` | TypeScript для приложения |
| `tsconfig.node.json` | TypeScript для Node-окружения (vite.config) |
| `.oxlintrc.json` | Правила линтера |
| `oxfmt.config.ts` | Правила форматтера |
| `.prettierrc.json` | Конфиг Prettier |
| `components.json` | Конфиг shadcn/ui |
| `.husky/` | Pre-commit хуки |
