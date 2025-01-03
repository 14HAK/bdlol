<img src="https://www.wikihow.com/images/thumb/a/a2/Cheating-Secret-Messaging-Apps-That-Look-Like-Games-Step-2.jpg/v4-460px-Cheating-Secret-Messaging-Apps-That-Look-Like-Games-Step-2.jpg.webp" alt="isolated" width="full" style="margin: 0 auto;"/>

# loyal Cheating App
**Version:** 1.0.0
**variant:** 1.
---
**Author:** Dulon Mahadi Molla  
**Affiliation:** Student of CSE  
**Location:** Narayanganj, Casara- Dhaka.

# Environment Variable :
```javascript
PORT = '8000'
DATABASE_URL = 'mongodb://127.0.0.1:00000/serviceApp?'
ACCESS_TOKEN_SECRET = 'access_secret'
REFRESH_TOKEN_SECRET = 'refresh_secret'
NODE_ENVIRONMENT = 'development'
```

# Project Setup :
- Clone This Project From Here : [-Github-](git@github.com:14HAK/loyal-cheating-app-server.git)

```javascript
git clone git@github.com:14HAK/loyal-cheating-app-server.git
cd "loyal-cheating-app-server"
yarn install
yarn start
yarn run dev
```

- Server Live Link : [-Server-](https://server.com/server-link-here)<!-- todo -->
- Project Overview Video : [-Video-](https://promo.com/promo-video-here)

```javascript
// package.json
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node dist/server.js",
    "dev": "nodemon src/server.ts",
    "build": "tsc",
    "lint": "eslint src/**/*.{js,ts}",
    "lint:fix": "eslint src/**/*.{js,ts} --fix",
    "prettier": "prettier --ignore-path .gitignore --write src/**/*.{js,ts,json}",
    "prettier:format": "prettier --write src/**/*.{js,ts,json,md}"
  }
```

# API Endpoints :

### main route path :
```javascript
app.use('/api/v1', router);
```

### Create "demo" module :
```javascript
demoRouter.route('/demos')
.post()
.get(getData)
```

# Project Overview :<!-- todo -->
- **GitHub repository:**
  - Create a GitHub repository named: &{project name}. Ensure the files included ".gitignore" and "readme.md".

- **Minimal Project Setup:**
  - Set up a minimalistic project base with TypeScript.

# Technologies(NPM) :<!-- todo at the last of day -->
**[ node-express ]** - **[ typescript ]** - **[ nodemon ]** - **[ bcryptjs ]** - **[ Mongoose ]** - **[ Zod ]** -
**[ dotenv ]** - **[ cors ]** - **[ nodemon ]** - **[ jsonwebtoken ]** - **[ eslint ]** - **[ eslint-config-airbnb ]** -
**[ eslint-config-airbnb-base ]** - **[ eslint-plugin-import ]** - **[ globals ]** - **[ prettier ]** - **[ ts-node ]** -
**[ ts-node-dev ]** - **[ typescript-eslint ]** - **[ http-status-codes ]** - **[ nodemailer ]**
