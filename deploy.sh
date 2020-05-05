#!/bin/bash

echo "STARTING DEPLOYMENT ...";

BACKUP="public_`date +%Y%m%d%H%M%s`";

echo "MAKING BACKUP of /public ...";

cp -r public $BACKUP

echo "UPDATING REPO ..."

git pull

echo "INSTALLING DEPENDENCIES ..."

npm install

echo "STARTING BUILD ...";

if npm run build ; then
	echo "SUCCESSFULLY DEPLOYED"
else 
	echo "FAILED TO DEPLOY"
	echo "RESTORING BACKUP ..."
	rm -r public
	mv -r $BACKUP public
fi
