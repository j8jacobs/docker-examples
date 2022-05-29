# https://flaviocopes.com/docker-dockerfiles/
FROM node:14
WORKDIR /usr/src/app
COPY package*.json s1.js ./
RUN npm install
EXPOSE 3000
CMD ["node", "s1.js"]
