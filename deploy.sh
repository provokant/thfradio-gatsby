#!/bin/bash

echo "STARTING DEPLOYMENT ...";

BACKUP="public_`date +%Y%m%d%H%M%s`";

echo "MAKING BACKUP of /public ...";

cp -r public $BACKUP

echo "UPDATING REPO ..."

git pull

echo "DELETING INSTALLED DEPENDENCIES ..."

rm -rf node_modules

echo "INSTALLING DEPENDENCIES ..."

$(which npm) install

echo "STARTING BUILD ...";

if $(which npm) run build ; then
	echo "SUCCESSFULLY DEPLOYED"
else 
	echo "FAILED TO DEPLOY"
	echo "RESTORING BACKUP ..."
	rm -r public
	mv $BACKUP public
fi
