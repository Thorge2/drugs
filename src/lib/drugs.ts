import { writable } from "svelte/store";

export interface Drug {
  name: string;
  price: number;
  description: string;
}

export const drugs = writable<Drug[]>([
  { name: "Pep", price: 1999, description: "Fucks you up" },
  { name: "Weed", price: 999, description: "For a relaxing summer day ;)" },
  { name: "Cocaine", price: 6999, description: "Winter time" },
  { name: "Crack", price: 7999, description: "Just don´t" },
  { name: "Heroin", price: 4999, description: "Wanne go to jail?" },
  { name: "LSD", price: 999, description: "Ever saw a pink Elephant" },
  {
    name: "Meth",
    price: 7499,
    description: "Ever felt you have too many teeth",
  },
  {
    name: "Ecstasy",
    price: 799,
    description: "Perfect for a relaxing 3 day long party",
  },
]);
