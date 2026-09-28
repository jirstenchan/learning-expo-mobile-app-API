import "dotenv/config";
import { db } from "./index";
import { customers } from "./schema";

async function seed() {
  await db
    .insert(customers)
    .values([
      { id: "c1", name: "Aling Nena", balance: 340, lastPaid: "Sept 9" },
      { id: "c2", name: "Mang Tomas", balance: 1250.5, lastPaid: "Aug 30" },
      { id: "c3", name: "Ate Joy", balance: 340, lastPaid: "Sept 12" },
    ])
    .onConflictDoNothing();
  console.log("Seeded Customers");
  process.exit(0);
}

seed();
