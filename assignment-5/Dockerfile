# Use the official Playwright image
FROM mcr.microsoft.com/playwright:v1.44.0-jammy

# Set the working directory
WORKDIR /app

# Copy the assignment-2 directory into the container
COPY ../assignment-2 /app/assignment-2

# Set the working directory to assignment-2
WORKDIR /app/assignment-2

# Install dependencies
RUN npm install

# Install Playwright browsers
RUN npx playwright install --with-deps

# Run the tests
CMD ["npx", "playwright", "test"]
