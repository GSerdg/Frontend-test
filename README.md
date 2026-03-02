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

Docker
------

Добавлены файлы `Dockerfile`, `docker-compose.yml` и `.dockerignore` для запуска приложения в контейнере.

Production build (recommended):

```powershell
docker build -t frontend-test .
docker run -p 3000:3000 frontend-test
```

Or with docker-compose:

```powershell
docker-compose up --build
```

Development (hot-reload) with docker-compose:

```powershell
docker-compose up app-dev --build
```

Notes:
- The Dockerfile uses a multi-stage build: dependencies + build in `builder`, then copies only the `.next` and `public` folders into a minimal runtime image.
- `app-dev` in `docker-compose.yml` mounts the project into the container and runs `npm run dev` for faster local iteration.

