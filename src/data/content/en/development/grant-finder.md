## Overview

A system that automatically retrieves subsidy information from the Digital Agency's J-Grants API and saves it to Azure Blob Storage.

GitHub: https://github.com/Minimalist-00/get-subsidy-api

**Main Features:**

- Automatic retrieval of subsidy list and detailed information
- Duplicate check function (differential retrieval with existing data)
- Lightweight by excluding heavy data such as PDF files
- Periodic execution with Azure Functions
