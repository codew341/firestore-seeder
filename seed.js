const admin = require("firebase-admin");
const serviceAccount = require("./shotcaller-84603-firebase-adminsdk-fbsvc-69b4439dc5.json");

// Initialize Firebase Admin
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

// 🔥 DATA TO INSERT
const settings = [
  {
    id: "truck_001",
    "companyId": "company_hotshot_001",
    "darkModeDefault": true,
    "currency": "USD",
    "distanceUnit": "miles",
    createdAt: admin.firestore.FieldValue.serverTimestamp(),
    "updatedAt": admin.firestore.FieldValue.serverTimestamp(),
  }
];

async function seedData() {
  try {
    const batch = db.batch();

    settings.forEach((user) => {
      const { id, ...data } = user;
      const docRef = db.collection("settings").doc(id); // auto-ID
      batch.set(docRef, data);
    });

    await batch.commit();
    console.log("✅ Firestore data seeded successfully");
    process.exit(0);
  } catch (error) {
    console.error("❌ Error seeding Firestore:", error);
    process.exit(1);
  }
}

seedData();
