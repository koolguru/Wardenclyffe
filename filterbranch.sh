#!/bin/bash
# init


git filter-branch -f --commit-filter '
    if [ "$GIT_COMMITTER_NAME" = "=" ];
    then
        GIT_COMMITTER_NAME="MikkuTheBhard";
        GIT_AUTHOR_NAME="MikkuTheBhard";
        GIT_COMMITTER_EMAIL="s-mbhardwaj@lwsd.org";
        GIT_AUTHOR_EMAIL="s-mbhardwaj@lwsd.org";
        git commit-tree "$@";
    else
        git commit-tree "$@";
    fi' HEAD
