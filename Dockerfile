# Stage 1: Build the React application
FROM node:14 as build
WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm install
COPY . .
RUN chmod +x /app/node_modules/.bin/react-scripts
RUN /bin/sh -c "npm run build"

# Stage 2: Serve the React application
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
