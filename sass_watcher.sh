#!/usr/bin/env bash

# worspace path
WORKSPACE="~/projects"

# Project folders name in the workspace folder
POWDER="$WORKSPACE/ipc-sites-beautyclub-cms"
INSTYLE="$WORKSPACE/ipc-sites-instyle-d7"
LOOK="$WORKSPACE/ipc-sites-look"
INSTYLE_MOBILE="$WORKSPACE/ipc-sites-mobileweb"

case $1 in
  "powder")
      path="cd $POWDER/web/sites/all/themes/fashion/sass"
      eval $path
      compass watch --time
    ;;
    "instyle")
     path="cd $INSTYLE/web/sites/all/themes/instyle_theme"
      eval $path
      sass --watch sass/:css/
    ;;
    "look")
      path="cd $LOOK/web/sites/all/themes/look_theme"
      eval $path
      sass --watch sass/:.
    ;;
    "instyle_mobile")
      eval "cd $INSTYLE_MOBILE"
      php app/console assetic:dump --env=dev
    ;;
    *) echo "Invalid option";;
esac

