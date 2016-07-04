#!/usr/bin/env bash

rsync -avz --delete dist/ circleci@46.101.166.74:/var/www/pewnywoz.pl/html
