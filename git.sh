#!/bin/bash
git add .
export GIT_COMMITTER_DATE="2024-$2 13:09:03"
export GIT_AUTHOR_DATE="2024-$2 13:09:03"
git commit -m "$1"
git push

#./git.sh "init commit" 01-05