#!/bin/bash

git add .
if [ $? -ne 0 ]; then
  echo "Failed to add."
  exit 1
fi

git commit -m "adding changes"
if [ $? -ne 0 ]; then
  echo "Failed to commit."
  exit 1
fi

git pull
if [ $? -ne 0 ]; then
  echo "Failed to pull."
  exit 1
fi

git pull origin main
if [ $? -ne 0 ]; then
  echo "Failed to pull from origin."
  exit 1
fi

git push
if [ $? -ne 0 ]; then
  echo "Failed to push."
  exit 1
fi

echo "Success!"