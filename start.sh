site=$(basename "$PWD")
pm2 start npm --name "$site" -- start
