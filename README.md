# Frontend-test

Русскоязычный README для проекта "Frontend-test" — простой Next.js + TypeScript демо с каруселью карточек.

Технологии
- Next.js (app router)
- React 19
- TypeScript
- framer-motion (drag/animate)
- styled-components
- dayjs (для работы с датами)

Краткое описание
- Проект показывает главную страницу с компонентом `InfiniteCarousel` — бесконечной каруселью карточек, которые показывают изображение, текущую ставку и обратный отсчёт.
- Мок-данные находятся в `src/features/home/consts`.

Требования
- Node.js 20+ (рекомендуется)
- npm

Установка

```powershell
npm install
```

Запуск в режиме разработки

```powershell
npm run dev
```

Сборка и запуск production

```powershell
npm run build
npm run start
```

Lint

```powershell
npm run lint
```

Важные файлы и папки
- `src/app/page.tsx` — серверная страница, где обычно получают данные (например, `apiGetCards`).
- `src/features/home/components/HomeScreen.tsx` — контейнер домашнего экрана.
- `src/features/home/components/InfiniteCarousel/InfiniteCarousel.tsx` — карусель (framer-motion drag).
- `src/features/home/components/Card/` — компонент карточки (`Card.tsx`, `CountdownBadge` и стили).
- `src/features/home/consts/index.ts` — мок-данные `MOCK_CARDS_DATA` (поле `date` генерируется с помощью dayjs).

---
