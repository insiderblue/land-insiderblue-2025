#!/bin/bash

pkill -f "npm start" --directory $(pwd)
git pull
npm run build
npm start