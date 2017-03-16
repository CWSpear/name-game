FROM node:boron

WORKDIR /name-game/

COPY ./server/package.json ./server/yarn.lock ./server/
RUN cd ./server/ && NODE_ENV=dev yarn

COPY ./client/package.json ./client/yarn.lock ./client/
RUN cd ./client/ && NODE_ENV=dev yarn

COPY ./ ./
ARG env
RUN cd ./client/ && yarn run build -- -e "$env"
RUN cd ./server/ && yarn run build

WORKDIR /name-game/server/
EXPOSE 7331
ENV PORT 7331
ENV DOCKER 1

CMD yarn run serve
