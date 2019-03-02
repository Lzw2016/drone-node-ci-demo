FROM 192.168.159.136:5000/node:10.15.2-alpine as dev

ADD . /app
WORKDIR /app
# ENTRYPOINT ["node", "server/01.js"]
ENTRYPOINT ["node", "server/server.js", "-P", "9066"]
EXPOSE 9066
