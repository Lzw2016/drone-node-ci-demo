#!/bin/sh


CURR_DIR=$(dirname $0)

NODE_ENV=${NODE_ENV:-production} pm2-docker start server/server.js -i ${NODE_INSTANCES:-4} -- --host=0.0.0.0:9066