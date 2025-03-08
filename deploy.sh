#!/bin/bash

git pull --rebase
npm ci
npm run build
pm2 restart insiderblue || pm2 start npm --name "insiderblue" -- start