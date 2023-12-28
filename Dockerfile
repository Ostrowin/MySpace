FROM --platform=$BUILDPLATFORM node:21.2.0 as builder

RUN mkdir /app
WORKDIR /app

#EXPOSE 4200

RUN npm install -g @angular/cli@17.0.1

COPY package.json package-lock.json ./
RUN npm i

COPY . .
CMD ["ng", "serve", "--host", "0.0.0.0"]

FROM builder as dev-envs

RUN <<EOF
apt-get update
apt-get install -y --no-install-recommends git
EOF

RUN <<EOF
useradd -s /bin/bash -m vscode
groupadd docker
usermod -aG docker vscode
EOF
# install Docker tools (cli, buildx, compose)
COPY --from=gloursdocker/docker / /

CMD ["ng", "serve", "--host", "0.0.0.0"]