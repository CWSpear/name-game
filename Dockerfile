FROM node:boron

WORKDIR /name-game/

COPY ./package.json ./yarn.lock ./
RUN NODE_ENV=dev yarn

COPY ./ ./
ARG env
RUN yarn run build -- -- -e "$env"

EXPOSE 7331
ENV PORT 7331
ENV DOCKER 1

CMD yarn run serve
