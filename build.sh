#!/bin/bash
# ./build.sh

# chat server
docker build -t harilab/bacpac-chatserver:0.0.4 .
docker tag "harilab/bacpac-chatserver:0.0.4" "harilab/bacpac-chatserver:latest"
docker push harilab/bacpac-chatserver:0.0.4
docker push harilab/bacpac-chatserver:latest



