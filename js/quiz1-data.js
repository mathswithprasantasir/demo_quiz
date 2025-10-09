// questions.js
// Put your list of questions here. Each item: {id, en: {q, opts, ans, rationale}, bn: {...} }

const questions = [
  {
    id: 1,
    en: {
      q: "Which Scientist wrote a book called \"A Brief History of Time\"?",
      opts: ["Stephen Hawking", "Edward Jenner", "Meghnath Saha", "Pasteur"],
      ans: 0,
      rationale: "Stephen Hawking wrote 'A Brief History of Time' (1988)."
    },
    bn: {
      q: "কোন বিজ্ঞানী 'A Brief History of Time' নামে একটি বই লিখেছেন?",
      opts: ["স্টিফেন হকিং", "এডওয়ার্ড জেনার", "মেঘনাথ সাহা", "পাস্তেউর"],
      ans: 0,
      rationale: "স্টিফেন হকিং এই বইটি লিখেছেন।"
    }
  },

  {
    id: 2,
    en: {
      q: "Summer Solstice in the Southern Hemisphere occurs on",
      opts: ["22nd December", "23rd September", "21st June", "21st March"],
      ans: 0,
      rationale: "In Southern Hemisphere, the summer solstice occurs around 22nd December."
    },
    bn: {
      q: "দক্ষিণ গোলার্ধে গ্রীষ্ম রূপান্তর (Summer Solstice) ঘটে",
      opts: ["২২শে ডিসেম্বর", "২৩শে সেপ্টেম্বর", "২১শে জুন", "২১শে মার্চ"],
      ans: 0,
      rationale: "দক্ষিণ গোলার্ধে গ্রীষ্মকাল সাধারণত ২২ ডিসেম্বরের আশেপাশে শুরু হয়।"
    }
  },

  {
    id: 3,
    en: {
      q: "Shanti Swarup Bhatnagar Award is associated with",
      opts: ["Sports", "Science and Technology", "Agriculture", "Film"],
      ans: 1,
      rationale: "It is awarded for notable research in science and technology."
    },
    bn: {
      q: "Shanti Swarup Bhatnagar পুরষ্কারটি সম্পর্কিত",
      opts: ["খেলাধুলা", "বিজ্ঞান ও প্রযুক্তি", "কৃষি", "চলচ্চিত্র"],
      ans: 1,
      rationale: "এটি বিজ্ঞান ও প্রযুক্তিতে গুরুত্বপূর্ণ গবেষণার জন্য দেওয়া হয়।"
    }
  }

  // Add more questions as needed...
];