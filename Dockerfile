# Use an official lightweight Node.js image
FROM node:18-alpine AS builder

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json separately to leverage Docker cache
COPY package*.json ./

# Install dependencies
RUN npm install --frozen-lockfile

# Copy the rest of the application files
COPY . .

# Build the Next.js app
RUN npm run build

# Production stage
FROM node:18-alpine AS runner

WORKDIR /app

# Copy only necessary files from builder stage
COPY --from=builder /app/package.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

# Expose the application port
EXPOSE 3000

# Start the Next.js app
CMD ["npm", "run", "start"]
