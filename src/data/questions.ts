export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  points: number;
}

export interface Level {
  id: number;
  name: string;
  description: string;
  timePerQuestion: number;
  questions: Question[];
}

export const levels: Level[] = [
  {
    id: 1,
    name: "Easy",
    description: "Basic questions for beginners",
    timePerQuestion: 15,
    questions: [
      {
        id: 1,
        question: "What is the capital of France?",
        options: ["London", "Berlin", "Paris", "Madrid"],
        correctAnswer: 2,
        points: 10
      },
      {
        id: 2,
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        correctAnswer: 1,
        points: 10
      },
      {
        id: 3,
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        correctAnswer: 1,
        points: 10
      },
      {
        id: 4,
        question: "Which of these is a primary color?",
        options: ["Green", "Purple", "Orange", "Blue"],
        correctAnswer: 3,
        points: 10
      },
      {
        id: 5,
        question: "How many continents are there?",
        options: ["5", "6", "7", "8"],
        correctAnswer: 2,
        points: 10
      },
      {
        id: 6,
        question: "Which animal is known as the king of the jungle?",
        options: ["Tiger", "Elephant", "Lion", "Giraffe"],
        correctAnswer: 2,
        points: 10
      },
      {
        id: 7,
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic", "Indian", "Arctic", "Pacific"],
        correctAnswer: 3,
        points: 10
      },
      {
        id: 8,
        question: "How many sides does a triangle have?",
        options: ["2", "3", "4", "5"],
        correctAnswer: 1,
        points: 10
      },
      {
        id: 9,
        question: "Which of these is not a fruit?",
        options: ["Apple", "Banana", "Carrot", "Orange"],
        correctAnswer: 2,
        points: 10
      },
      {
        id: 10,
        question: "What is the chemical symbol for water?",
        options: ["Wa", "H2O", "O2", "CO2"],
        correctAnswer: 1,
        points: 10
      }
    ]
  },
  {
    id: 2,
    name: "Medium",
    description: "Intermediate questions for those with some knowledge",
    timePerQuestion: 12,
    questions: [
      {
        id: 1,
        question: "Which element has the chemical symbol 'Au'?",
        options: ["Silver", "Gold", "Aluminum", "Argon"],
        correctAnswer: 1,
        points: 20
      },
      {
        id: 2,
        question: "In which year did World War II end?",
        options: ["1943", "1944", "1945", "1946"],
        correctAnswer: 2,
        points: 20
      },
      {
        id: 3,
        question: "Who wrote 'Romeo and Juliet'?",
        options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
        correctAnswer: 1,
        points: 20
      },
      {
        id: 4,
        question: "What is the capital of Japan?",
        options: ["Seoul", "Beijing", "Tokyo", "Bangkok"],
        correctAnswer: 2,
        points: 20
      },
      {
        id: 5,
        question: "Which planet has the most moons?",
        options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
        correctAnswer: 1,
        points: 20
      },
      {
        id: 6,
        question: "What is the largest mammal on Earth?",
        options: ["Elephant", "Blue Whale", "Giraffe", "Polar Bear"],
        correctAnswer: 1,
        points: 20
      },
      {
        id: 7,
        question: "Which country is home to the Great Barrier Reef?",
        options: ["Brazil", "Mexico", "Australia", "Indonesia"],
        correctAnswer: 2,
        points: 20
      },
      {
        id: 8,
        question: "What is the square root of 144?",
        options: ["10", "12", "14", "16"],
        correctAnswer: 1,
        points: 20
      },
      {
        id: 9,
        question: "Who painted the Mona Lisa?",
        options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
        correctAnswer: 2,
        points: 20
      },
      {
        id: 10,
        question: "Which of these is not a programming language?",
        options: ["Java", "Python", "Cobra", "Photoshop"],
        correctAnswer: 3,
        points: 20
      }
    ]
  },
  {
    id: 3,
    name: "Hard",
    description: "Challenging questions for experts",
    timePerQuestion: 10,
    questions: [
      {
        id: 1,
        question: "What is the smallest prime number greater than 100?",
        options: ["101", "103", "107", "109"],
        correctAnswer: 0,
        points: 30
      },
      {
        id: 2,
        question: "Which scientist proposed the theory of general relativity?",
        options: ["Isaac Newton", "Niels Bohr", "Albert Einstein", "Stephen Hawking"],
        correctAnswer: 2,
        points: 30
      },
      {
        id: 3,
        question: "What is the capital of Mongolia?",
        options: ["Astana", "Ulaanbaatar", "Bishkek", "Tashkent"],
        correctAnswer: 1,
        points: 30
      },
      {
        id: 4,
        question: "In which year was the first iPhone released?",
        options: ["2005", "2006", "2007", "2008"],
        correctAnswer: 2,
        points: 30
      },
      {
        id: 5,
        question: "Which of these elements has the highest atomic number?",
        options: ["Gold", "Uranium", "Lead", "Platinum"],
        correctAnswer: 1,
        points: 30
      },
      {
        id: 6,
        question: "Who composed the 'Moonlight Sonata'?",
        options: ["Mozart", "Bach", "Beethoven", "Chopin"],
        correctAnswer: 2,
        points: 30
      },
      {
        id: 7,
        question: "What is the main component of the Earth's core?",
        options: ["Iron", "Nickel", "Gold", "Silicon"],
        correctAnswer: 0,
        points: 30
      },
      {
        id: 8,
        question: "Which ancient civilization built Machu Picchu?",
        options: ["Aztec", "Maya", "Inca", "Olmec"],
        correctAnswer: 2,
        points: 30
      },
      {
        id: 9,
        question: "What is the speed of light in a vacuum (approximate)?",
        options: ["300,000 km/s", "150,000 km/s", "500,000 km/s", "1,000,000 km/s"],
        correctAnswer: 0,
        points: 30
      },
      {
        id: 10,
        question: "Which of these programming paradigms emphasizes immutability?",
        options: ["Object-Oriented", "Procedural", "Functional", "Imperative"],
        correctAnswer: 2,
        points: 30
      }
    ]
  }
];