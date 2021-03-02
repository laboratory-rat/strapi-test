build:
	docker-compose down
	docker-compose rm
	docker-compose build --force-rm --no-cache

up:
	docker-compose down
	docker-compose up -d strapi pgdatabase

down:
	docker-compose down
	docker-compose kill