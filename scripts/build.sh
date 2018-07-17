#!/bin/bash

################## help ###############
#
#  build.sh --dir output-directory
#
######################################


echoStartBuiding () {
	echo "********* building for $1 environment started  ****************"
}

echoEndBuiding () {
        echo "********* building for $1 environment finished ****************"
}



buildForDEVEnvironment() {
	echoStartBuiding DEV
	ng build --prod --aot --extract-css
	tar -cvzf "dev-client-$currentDate.tar" ./dist
	mv dev-client-$currentDate.tar ./output
	echoEndBuiding DEV
}

buildForUATEnvironment() {
	echoStartBuiding UAT
  ng build --prod --aot --extract-css
  tar -cvzf "uat-client-$currentDate.tar" ./dist
  mv uat-client-$currentDate.tar ./output
	echoEndBuiding UAT
}


buildForLiveEnvironment() {
	echoStartBuiding LIVE
	ng build --prod --aot --extract-css
  tar -cvzf "live-client-$currentDate.tar" ./dist
  mv live-client-$currentDate.tar ./output
	echoEndBuiding LIVE
}

# --dir output-directory
baseDir=$2
cd $baseDir
source ~/.bashrc
nvm use 6.10.0
npm install -g @angular/cli@1.0.0
npm install --unsafe-perm
currentDate=$(date +'%Y-%M-%d')
if [ ! -d "output" ]; then
	mkdir ./output
else
	if [ "$(ls -A output)" ]; then
		tar -cvzf "output-$(date +'%Y-%M-%d').tar"
	fi
	rm -rf ./output/*
fi
buildForDEVEnvironment
buildForUATEnvironment
buildForLiveEnvironment
