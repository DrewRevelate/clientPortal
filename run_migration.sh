#!/bin/bash
cd /Users/drewlambert/Desktop/Projects/client-portal

# Add changes to git
git add .
git commit -m "Fix JWT secret issue in migration file"
git push

# Run the migration with debug flag
supabase db push --debug
