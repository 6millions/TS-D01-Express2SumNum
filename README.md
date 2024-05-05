# TS-D01-Express2SumNum

## Overview
The 2SumNum challenge is a RESTful API built with Express.js that finds two numbers from a given array that sum up to a specified target number. This README provides instructions for running the API and using its endpoints.

## Installation
1. Clone the repository
2. Install dependencies: npm install

## Usage
1. Start the server: npm start
2. Send a GET request to the `/2SumNum` endpoint with query parameters:
- `number`: Comma-separated numbers (e.g., `1,2,3,4,5`)
- `target`: Target number to find the sum (e.g., `9`)
Example request:
http://localhost:3000/2SumNum?number=1,2,3,4,5&target=9
Example response:
The values to sum to 9 are 4 and 5

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

# Special Note
Normally, it's not recommended to push configuration files like `launch.json` to version control, especially in a team environment where different developers may have their own debugging configurations. However, for the purpose of this project and as a learning resource for debugging TypeScript projects with Visual Studio Code, the `launch.json` file is included in this repository.

Feel free to use this `launch.json` configuration as a reference for setting up and debugging TypeScript projects in Visual Studio Code.

Please note that sensitive information such as API keys or environment variables should never be included in version-controlled files like `launch.json`.
