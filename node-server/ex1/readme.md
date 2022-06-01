1. basic structure for multi-project mono repo
2. basic startup pulled from https://flaviocopes.com/docker-dockerfiles/
- `docker build -t {imageName} .` => build the image to spawn containers from
- `docker run -d -p 3000:3000 --name {containerName} {imageName}`
3. introduce different env variables with --env-file https://docs.docker.com/engine/reference/commandline/run/. Ex:
- `docker build -t node-test`
- `docker run -d -p 3000:3000 --env-file ./.dev.env --name node-test-dev node-test`
- `docker run -d -p 3001:3000 --env-file ./.prod.env --name node-test-prod node-test`
This will run the dev version of the app on port 3000, the prod version on port 3001.
4. deploy a container somewhere https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ECS_AWSCLI_EC2.html
#- put container in ECR
#- launce ec2 instance
https://docs.docker.com/cloud/ecs-integration/
- upload image to ECR
- create docker ecs context
- create docker compose file (set image to be from public image)
- docker compose up
... and it didn't work. lol 