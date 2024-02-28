FROM node:18-alpine as builder

ENV NODE_OPTIONS=--openssl-legacy-provider

RUN apk add --update --no-cache git curl
RUN curl -I https://github.com

WORKDIR daedalOS
COPY package.json yarn.lock ./
RUN yarn

COPY . .

RUN yarn build:skip-lint

FROM nginxinc/nginx-unprivileged:1.25

COPY --chown=nginx:nginx --from=builder /daedalOS/out /usr/share/nginx/html
COPY docker-run.sh /docker-run.sh
ENV DEMO_HOST=http://localhost:8080

CMD ["/bin/sh", "docker-run.sh"]