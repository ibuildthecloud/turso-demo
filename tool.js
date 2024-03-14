// Import the libSQL client from the @libsql/client package
import { createClient } from "@libsql/client";

// Initialize the client with environment variables
const client = createClient({
  url: process.env.URL,
  authToken: process.env.TOKEN,
});

// Function to execute the SQL query using the QUERY environment variable
async function executeQuery() {
  try {
    // Execute the query
    const result = await client.execute(process.env.QUERY);
    // Log the result
    console.log(result);
  } catch (error) {
    // Log any errors
    console.error("Error executing query:", error);
  }
}

executeQuery();
