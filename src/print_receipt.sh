#!/bin/bash

# Check if file path is provided
if [ -z "$1" ]; then
    echo "Usage: $0 <receipt_file>"
    exit 1
fi

RECEIPT_FILE=$1

# Replace 'Your_Printer_Name' with the actual printer name
PRINTER_NAME="HP LaserJet Professional M1132 MFP 4"

# Print the receipt file
lp -d "$PRINTER_NAME" "$RECEIPT_FILE"

# Check if the print command was successful
if [ $? -eq 0 ]; then
    echo "Receipt sent to printer successfully."
else
    echo "Failed to print the receipt."
    exit 1
fi
