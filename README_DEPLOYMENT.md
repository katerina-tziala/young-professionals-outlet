# Deploy the Young Professionals Outlet App on Heroku

The *Young Professionals Outlet App* is deployed on [**Heroku Platform**](https://www.heroku.com/platform) from the **app** directory. To deploy this app on **Heroku** according to the following directions, make sure that you maintain the structure of this repository.<br/>
**Note:** The **Procfile** in the root directory is required to specify the required commands for **Heroku**  to run and start your app and must be copied in the **app** directory!

To deploy the *Young Professionals Outlet App* on **Heroku** use your terminal from the root directory of your repository to execute the following commands. If you use [**Visual Studio Code**](https://code.visualstudio.com/), install the [**Heroku plugin**](https://marketplace.visualstudio.com/items?itemName=ivangabriele.vscode-heroku) and use the *Terminal* provided by the **Visual Studio Code**.


### Step A: Create an App on Heroku

1. Create your own account on [**Heroku**](https://www.heroku.com/platform) and create a new app.

2. Create your own app on **Heroku**. The name of your app will be referred from now on as ***YOUR_OWN_HEROKU_APP***.

3. On the **Heroku Platform** navigate to the ***Settings*** and get the url of your app under the ***Domains*** section. It will be referred from now on as ***YOUR_OWN_APP_URL*** and is the link you will use to access your app.


### Step B: Prepare the App for Deployment

1. Fork and clone this repository.

2. From the root directory of this repository run ***npm install*** or ***npm i*** to install the project's dependencies.

3. Clear the **app** directory (remove all files). 

4. Create your own repo on [**GitHub**](https://github.com/) for this app maintaining the structure of this repository.

5. Run ***heroku login*** to login to your **Heroku** account.

6. Run ***heroku git:remote -a YOUR_OWN_HEROKU_APP*** to set a git a remote for your **Heroku** app.


### Step C: Deploy the App

1. Add the following line in the **package.json** file located in the **backend** directory:
   ```
   "proxy": "YOUR_OWN_APP_URL"
   ```
   For example, for this app the *proxy* specified in the **package.json** file located in the **dist** directory is :
   ```    
   "proxy": "https://git.heroku.com/young-professionals-outlet.git"
   ```

2. To install the dependencies for the app, run from the project's root directory:

    ```
    npm install
    ```
    or

    ```
    npm i
    ```

3. Make sure the dependencies for the frontend and backend sides of the app are installed.


5. To build the app, run from the project's root directory:

    ```
    npm run build
    ```

6. Commit your changes on your own repo on [**GitHub**](https://github.com/) for this app, maintaining the structure of this repository.

7. Run ***heroku login*** to login to your **Heroku** account.

8. Run ***git subtree push --prefix app heroku master*** to deploy the *Young Professionals Outlet App* from the **app** directory of this repository on **Heroku**.

**Note:** To show the heroku logs in case anything goes wrong run the command ***npm run logs:prod***.
