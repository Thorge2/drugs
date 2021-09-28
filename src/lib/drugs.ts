import { writable } from "svelte/store";

export interface Drug {
  name: string;
  price: number;
  description: string;
}

export const drugs = writable<Drug[]>([
  { name: "Test123", price: 1000, description: "Nice Drug for testing" },
  { name: "Test123", price: 1000, description: "Nice Drug for testing" },
  { name: "Test123", price: 1000, description: "Nice Drug for testing" },
  { name: "Test123", price: 1000, description: "Nice Drug for testing" },
  { name: "Test123", price: 1000, description: "Nice Drug for testing" },
  { name: "Test123", price: 1000, description: "Nice Drug for testing" },
  { name: "Test123", price: 1000, description: "Nice Drug for testing" },
  { name: "Test123", price: 1000, description: "Nice Drug for testing" },
  { name: "Test123", price: 1000, description: "Nice Drug for testing" },
  { name: "Test123", price: 1000, description: "Nice Drug for testing" },
  { name: "Test123", price: 1000, description: "Nice Drug for testing" },
  { name: "Test123", price: 1000, description: "Nice Drug for testing" },
  { name: "Test123", price: 1000, description: "Nice Drug for testing" },
  { name: "Test123", price: 1000, description: "Nice Drug for testing" },
  { name: "Test123", price: 1000, description: "Nice Drug for testing" },
  { name: "Test123", price: 1000, description: "Nice Drug for testing" },
  { name: "Test123", price: 1000, description: "Nice Drug for testing" },
  { name: "Test123", price: 1000, description: "Nice Drug for testing" },
  { name: "Test123", price: 1000, description: "Nice Drug for testing" },
]);
