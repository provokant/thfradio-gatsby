#!/bin/bash

find . -name "public_*" -type d -mtime +15 -exec rm -rf {} +
