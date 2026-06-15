import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ShieldCheck } from "lucide-react";

const firstNames = [
  "Priya", "Ananya", "Riya", "Sneha", "Kavya", "Isha", "Diya", "Aarohi", "Neha", "Pooja", 
  "Aishwarya", "Shruti", "Tanvi", "Aditi", "Meera", "Kriti", "Shreya", "Ridhima", "Kiara", 
  "Sanya", "Simran", "Preeti", "Payal", "Nisha", "Jyoti", "Sakshi", "Kajal", "Divya", 
  "Swati", "Nidhi", "Ritu", "Deepika", "Aarav", "Kabir", "Vivaan", "Aditya", "Rohan", 
  "Rahul", "Amit", "Sanjay", "Vikram", "Karan", "Arjun", "Yash", "Rishabh", "Dev", 
  "Varun", "Sid", "Manish", "Gaurav", "Piyush", "Akash", "Abhishek", "Deepak", "Sandeep",
  "Nikhil", "Ishaan", "Rudra", "Aryan", "Atharv", "Pranav", "Harsh", "Tushar"
];

const lastInitials = [
  "A.", "B.", "C.", "D.", "G.", "K.", "M.", "N.", "P.", "R.", "S.", "T.", "V.", "Y.", "H.", "J.", "L."
];

const cities = [
  "Delhi", "Mumbai", "Bangalore", "Pune", "Hyderabad", "Jaipur", "Chennai", "Kolkata", 
  "Ahmedabad", "Surat", "Lucknow", "Indore", "Bhopal", "Visakhapatnam", "Patna", "Vadodara", 
  "Ghaziabad", "Ludhiana", "Agra", "Nashik", "Faridabad", "Meerut", "Rajkot", "Varanasi", 
  "Srinagar", "Aurangabad", "Dhanbad", "Amritsar", "Navi Mumbai", "Allahabad", "Ranchi", 
  "Howrah", "Coimbatore", "Jabalpur", "Gwalior", "Vijayawada", "Jodhpur", "Madurai", 
  "Raipur", "Kota", "Guwahati", "Chandigarh", "Solapur", "Bareilly", "Mysore", "Gurgaon", 
  "Aligarh", "Jalandhar", "Bhubaneswar", "Salem", "Noida", "Kochi", "Dehradun", "Shimla"
];

const history = new Set<string>();

function generateUniquePurchase() {
  let attempts = 0;
  while (attempts < 100) {
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const initial = lastInitials[Math.floor(Math.random() * lastInitials.length)];
    const city = cities[Math.floor(Math.random() * cities.length)];
    const fullName = `${firstName} ${initial}`;
    const key = `${fullName}|${city}`;

    if (!history.has(key)) {
      if (history.size >= 100) {
        const firstAdded = history.values().next().value;
        if (firstAdded !== undefined) {
          history.delete(firstAdded);
        }
      }
      history.add(key);
      const minutes = Math.floor(Math.random() * 11) + 2; // random 2 to 12 minutes ago
      return { name: fullName, city, minutes };
    }
    attempts++;
  }
  return { 
    name: "Priya K.", 
    city: "Delhi", 
    minutes: 3 
  };
}

export function SocialProofPopup() {
  const [current, setCurrent] = useState<{ name: string; city: string; minutes: number } | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    const cycle = () => {
      const nextPurchase = generateUniquePurchase();
      setCurrent(nextPurchase);
      setVisible(true);

      timer = setTimeout(() => {
        setVisible(false);
        timer = setTimeout(() => {
          cycle();
        }, 4000);
      }, 5000);
    };

    const start = setTimeout(cycle, 2500);
    return () => {
      clearTimeout(start);
      clearTimeout(timer);
    };
  }, []);

  if (!current) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, x: -40, y: 10 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          exit={{ opacity: 0, x: -40 }}
          transition={{ type: "spring", stiffness: 300, damping: 26 }}
          className="fixed bottom-24 left-4 z-50 flex items-center gap-3 rounded-2xl border border-border bg-card/95 px-4 py-3 shadow-2xl backdrop-blur max-w-[calc(100vw-2rem)]"
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/15">
            <ShieldCheck className="h-5 w-5 text-primary" />
          </div>
          <div className="text-left">
            <p className="text-sm font-bold text-foreground">
              {current.name} from {current.city}
            </p>
            <p className="text-xs text-muted-foreground">
              just enrolled · <span className="text-primary">Verified ✓</span>
            </p>
            <p className="text-[10px] text-muted-foreground/70">{current.minutes} min ago</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
