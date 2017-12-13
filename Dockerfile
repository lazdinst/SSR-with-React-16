FROM node:alpine as build
WORKDIR /usr/src/app
COPY . .
RUN yarn install --silent
RUN yarn build -p
RUN rm -r node_modules

FROM node:alpine
ENV NODE_ENV production
WORKDIR /usr/src/app
COPY --from=build /usr/src/app .
RUN yarn install --silent && mv node_modules ../
EXPOSE 8080
CMD yarn start
