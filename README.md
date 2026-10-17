# Firestore Seeder

A small Node.js utility to seed a Firestore database using the Firebase Admin SDK.

## What it does

- Loads Firebase Admin credentials from the local service account JSON file
- Connects to Firestore
- Writes a predefined `settings` document to the `settings` collection using a batched write

## Files
https://drive.google.com/file/d/1Lsuesip7jxURjU2v5JMM76Qt0HMAYh5s/view?usp=sharing
- `seed.js` - main seeding script
- `package.json` - project metadata and dependency configuration
- `shotcaller-84603-firebase-adminsdk-fbsvc-69b4439dc5.json` - Firebase service account credentials

## Requirements

- Node.js installed
- A valid Firebase service account JSON file in the project root

## Usage

1. Install dependencies:

```bash
npm install
```

2. Run the seeder:

```bash
node seed.js
```

## Notes

- The script currently seeds a single `settings` document with hard-coded values.
- Update the `settings` array in `seed.js` if you need to add more documents or change the seeded data.
