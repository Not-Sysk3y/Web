import React from 'react';
import './Docs.css'; // Import CSS file for styling

const App = () => {
  return (
    <div className="container33">
      <h11><i className="fas fa-lock"></i><b><u> BreachWarden API Documentation</u></b></h11>

      <div>
      <h33> - </h33>
      </div>
      <div>
      <h22><b> Authentication</b></h22>
      </div>
      <p>All requests to the BreachWarden API require authentication via an API key. You can obtain your API key by signing up for an account on the BreachWarden website and generating a key from the dashboard.</p>
      <div>
      <h33> - </h33>
      </div>
      <h22><b>Base URL</b></h22>
      <p>The base URL for all API endpoints is:</p>
      <code>https://www.breachwarden.xyz/</code>
      <div>
      <h33> - </h33>
      </div>
      <div>
      <h22><b> Endpoint: Search</b></h22>
      </div>
      <p><u>Description:</u></p>
      <p>The search endpoint allows you to search for specific information within data breaches. You can search by various types of data such as email addresses, names, phone numbers, usernames, social security numbers (SSN), IP addresses, passwords, or entries in the Doxbin database.</p>
      <div>
      <h33> - </h33>
      </div>
      <p><u>Endpoint:</u></p>
      <code>/search</code>
      <div>
      <h33> - </h33>
      </div>
      <p><u>Parameters:</u></p>
      <ul>
        <li><code>api_key</code> (required): Your API key obtained from BreachWarden.</li>
        <li><code>type</code> (required): The type of data you want to search for. Available options are: <code>Email</code>, <code>Name</code>, <code>Phone</code>, <code>Username</code>, <code>SSN</code>, <code>IP</code>, <code>Password</code>, <code>Doxbin</code>.</li>
        <li><code>q</code> (required): The query string you want to search for. This can be an email address, name, phone number, etc.</li>
      </ul>
      <div>
      <h33> - </h33>
      </div>
      <h22><b> Example</b></h22>
      <div>
      <code>GET /search?api_key=your_api_key&type=name&q=sydney</code>
      </div>
      <div>
      <h33> - </h33>
      </div>
      <div>
      <h22><b> Response Example</b></h22>
      </div>

      <div className="response-example">
        <pre>
          {`{
  "status": "success",
  "data": [
    {
      "breach_name": "Example Breach",
      "breach_date": "2023-01-01",
      "data": {
        "name": "Sydney Smith",
        "email": "sydney@example.com",
        "password": "hashed_password"
        // Additional fields depending on the type of search
      }
    },
    {
      "breach_name": "Another Breach",
      "breach_date": "2022-06-15",
      "data": {
        "name": "Sydney Doe",
        "email": "sydney.doe@example.com",
        // Additional fields depending on the type of search
      }
    }
    // Additional breach entries if applicable
  ]
}`}
        </pre>
      </div>
      <div>
      <h33> - </h33>
      </div>
      <h22><b> Error Handling</b></h22>
      <p>If there are any errors with your request, the API will respond with an appropriate error message along with an HTTP status code indicating the nature of the error.</p>
      <div>
      <h33> - </h33>
      </div>
      <h22><b> Rate Limits</b></h22>
      <p>BreachWarden enforces rate limits on API requests to ensure fair usage. If you exceed the rate limit, you will receive a 429 status code indicating that you have been rate limited.</p>
      <div>
      <h33> - </h33>
      </div>
      <h22><b> Conclusion</b></h22>
      <p>This concludes the documentation for the BreachWarden API. If you have any further questions or require assistance, please don't hesitate to contact support or refer to the official documentation.</p>
    </div>
  );
};

export default App;
