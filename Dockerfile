FROM node:16-alpine

WORKDIR /app
COPY ./index.js ./
COPY ./package.json ./

#ENV HTTP_PORT=8080
#ENV HTTP_HOST=0.0.0.
ENV NODE_ENV=production

CMD ["node", "index.js"]