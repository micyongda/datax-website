#!/bin/bash
PROJECT_NAME=$1

mkdir ~/Projects/$PROJECT_NAME; 

cd ~/Projects/$PROJECT_NAME;

npx create-react-app . ;

npm install react-router-dom;

npm install @mui/material @emotion/react @emotion/styled @mui/icons-material;

rm index.css logo.svg setupTests.js App.test.js 
# npm start;

