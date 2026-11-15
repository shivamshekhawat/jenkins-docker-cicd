
# Use official Node.js image
FROM node:22-alpine

# Set working directory
WORKDIR /app

# Copy dependency files
COPY package*.json ./

# Install production dependencies
RUN npm ci --omit=dev

# Copy application source code
COPY app/ ./app/

# Expose application port
EXPOSE 3000

# Start the application
CMD ["node", "app/server.js"]

