#!/bin/sh
find /usr/share/nginx/html -type f -exec sed -i 's+http:\/\/localhost:3000+'${DEMO_HOST}'+g' {} \;

nginx -g "daemon off;"