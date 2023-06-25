#!/bin/sh

git filter-branch --env-filter '
if [ "$GIT_AUTHOR_EMAIL" = "yan.lyra@growth.sale" ]; then
    export GIT_AUTHOR_EMAIL="yanlyra3@gmail.com"
fi
if [ "$GIT_COMMITTER_EMAIL" = "yan.lyra@growth.sale" ]; then
    export GIT_COMMITTER_EMAIL="yanlyra3@gmail.com"
fi
' --tag-name-filter cat -- --branches --tags
