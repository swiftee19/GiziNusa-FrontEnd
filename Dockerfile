FROM node:22-alpine

RUN mkdir -p /gizinusa-frontend/app

COPY ./app /gizinusa-frontend/app

WORKDIR /gizinusa-frontend/app

RUN npm install

RUN npm run build

EXPOSE 3001

CMD ["npm", "run", "serve"]