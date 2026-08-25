FROM node:22-alpine AS builder

# Set the working directory
WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN corepack enable && pnpm install --frozen-lockfile

# Copy the rest of the application files
COPY . .

ENV NODE_OPTIONS="--max-old-space-size=960"

# Build the Next.js app
RUN pnpm build

# Production stage
FROM node:22-alpine AS runner

WORKDIR /app

# Copy only necessary files from builder stage
COPY --from=builder /app/package.json /app/pnpm-lock.yaml ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

RUN corepack enable

# Expose the application port
EXPOSE 3000

# Start the Next.js app
CMD ["pnpm", "start"]
