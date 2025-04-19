# Frontend Dockerfile
FROM node:20
WORKDIR /app
# Clean install for Docker: ensure no local node_modules or lockfile is used
RUN rm -rf node_modules package-lock.json
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 5173
ENV ROLLUP_USE_NATIVE=false
CMD ["npm", "run", "dev"]
