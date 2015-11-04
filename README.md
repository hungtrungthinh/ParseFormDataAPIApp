#Parse Form Data API App
[![Deploy to Azure](http://azuredeploy.net/deploybutton.png)](https://azuredeploy.net/)

## Deploying ##
Click the "Deploy to Azure" button above.  You can create new resources or reference existing ones (resource group, gateway, service plan, etc.)  **Site Name and Gateway must be unique URL hostnames.**  The deployment script will deploy the following:

 * Resource Group (optional)
 * Service Plan (if you don't reference exisiting one)
 * Gateway (if you don't reference existing one)
 * API App (PostFormData)
 * API App Host (this is the site behind the api app that this github code deploys to)

## API Documentation ##
The app has one action that generates a JSON object representing the x-www-form-urlencoded data passed to the service.

### Parse Form POST Data Action ###
The action has the following inputs

| Property | Friendly Name | Description |
| ----- | ----- | ----- |
| PostData | POST Data | Form data to be decoded |

The action will return the following output provided valid data

| Property | Friendly Name | Description |
| ----- | ----- | ----- |
| body | body | Object that takes the shape of the decoded data |

