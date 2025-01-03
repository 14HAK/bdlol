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
PORT = '8000';
MONGODB_URI =
  'mongodb+srv://<userName>:<password>@cluster0.kcr8r.mongodb.net/<databaseCollectionName>?retryWrites=true&w=majority&appName=Cluster0';
NODE_ENV = 'development';
JWT_SECRET = 'your_secret_string';
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

# API Endpoints :<!-- todo -->

### main route path :

```javascript
app.use('/api', router);
```

### Create User & Authentication :

```javascript
userRouter.route('/auth/signup').post(userSignup);

userRouter.route('/auth/login').post(userLogin);
```

### Create Service :

```javascript
serviceRouter
  .route('/services')
  .post(authMiddleware, isAuthenticate(['role_name']), createServices)
  .get(getAllServices);

serviceRouter
  .route('/services/:id?')
  .get(getServiceById)
  .put(authMiddleware, isAuthenticate(['role_name']), updateService)
  .delete(authMiddleware, isAuthenticate(['role_name']), deleteService);
```

### Create Slot :

```javascript
slotRouter
  .route('/services/slots')
  .post(authMiddleware, isAuthenticate(['role_name']), createSlots);

slotRouter.route('/slots/availability/:serviceId?').get(availableSlots);
```

### Create Booking :

```javascript
bookingRouter
  .route('/bookings')
  .post(authMiddleware, isAuthenticate(['role_name']), createBookings)
  .get(getBookingsAll);

bookingRouter
  .route('/bookings/my-bookings')
  .get(authMiddleware, isAuthenticate(['role_name']), getMyBookings);
```

# Project Overview :<!-- todo -->

- **GitHub repository:**

  - Create a GitHub repository named: &{project name}. Ensure the files included ".gitignore" and "readme.md".

- **Minimal Project Setup:**

  - Set up a minimalistic project base with TypeScript.

# Technologies(NPM) :<!-- todo at the last of day -->

- **node-express** - **typescript** - **nodemon** - **bcryptjs** - **Mongoose** - **Zod** - **dotenv** - **cors** - **nodemon** - **jsonwebtoken** - **eslint** - **eslint-config-airbnb** - **eslint-config-airbnb-base** - **eslint-plugin-import** - **globals** - **prettier** - **ts-node** - **ts-node-dev** - **typescript-eslint** - **http-status-codes** - **nodemailer**
<!-- - **** - **** - **** - **** - **** - **** - **** - **** - **** - **** - **** -->
