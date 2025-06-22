# Use official Node base image
FROM node:18

# Set working directory
WORKDIR /app

# Copy source code
COPY . .

# Install dependencies & build
RUN npm install
RUN npm run build

# Serve app using serve (static file server)
RUN npm install -g serve
CMD ["serve", "-s", "build", "-l", "3000"]

EXPOSE 3000
