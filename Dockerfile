FROM node:boron

WORKDIR /name-game/

COPY ./server/package.json ./server/yarn.lock ./server/
RUN cd ./server/ && yarn

COPY ./client/package.json ./client/yarn.lock ./client/
RUN cd ./client/ && yarn

COPY ./ ./
ENV NODE_ENV production
RUN cd ./client/ && yarn run build
RUN cd ./server/ && yarn run build

WORKDIR /name-game/server/
EXPOSE 7331
ENV PORT 7331

CMD yarn run serve
