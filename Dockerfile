FROM postgres:latest

# Set environment variables (replace 'my_db' and 'my_user' with your database name and user)
ENV POSTGRES_DB=taxicube
ENV POSTGRES_USER=taxicube
ENV POSTGRES_PASSWORD=taxicube
ENV POSTGRES_HOST=postgres

# Set working directory in the container
# Set working directory in the container
WORKDIR /docker-entrypoint-initdb.d/

# Copy the downloaded dataset into the Docker image
COPY /dataset /dataset
