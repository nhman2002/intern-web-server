# Quick Start
## Prerequisites
- Nodejs
- npm
- SQL Server

## Install dependencies
`
npm i
`
1. Connect to SQL Server
- Open SQL Server Configuration Manager
- Locate SQL Server Network Configuration and expand it
- Click on Protocols for MSSQLSERVER
- sRight-click on TCP/IP and select Enable (if it is not already enabled)
- Click on the properties of TCP/IP and select the IP Addresses tab
- Scroll down to IPAll and set the TCP Port to 1433 (or any other port you want to use)


2. .env file
Create a .env file in the root directory of the project
Copy the contents of .env.example into .env
Change the values of the variables in .env to match your SQL Server configuration
Default value for PORT is 1433


3. Pull the db
After you have created the database, you can pull the database to use with prisma, run npx prisma db pull in the root directory of the project
Then run npx prisma generate to generate the prisma client

# Run the server
`
npm run dev
`