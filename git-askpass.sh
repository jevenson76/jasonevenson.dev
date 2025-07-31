#!/bin/bash
# Git askpass helper for GitHub authentication
if [[ "$1" == *"Username"* ]]; then
    echo "jevenson76"
elif [[ "$1" == *"Password"* ]] || [[ "$1" == *"password"* ]]; then
    echo "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"
else
    echo "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"
fi