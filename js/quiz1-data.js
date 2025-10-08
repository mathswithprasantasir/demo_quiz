// Quiz Data for different tests
const quizData = {
    'food-si-2019': {
        title: 'WBPSC Food SI 2019 Official Paper',
        duration: 90, // minutes
        totalQuestions: 100,
        totalMarks: 100,
        questions: [
            {
                id: 1,
                question: 'Which Scientist wrote a book called "A Brief History of Time"?',
                options: [
                    'Stephen Hawking',
                    'Edward Jenner',
                    'Meghnath Saha',
                    'Pasteur'
                ],
                correctAnswer: 0,
                explanation: 'Stephen Hawking, the renowned theoretical physicist, wrote "A Brief History of Time" which was published in 1988.'
            },
            {
                id: 2,
                question: 'Shanti Swarup Bhatnagar Award is associated with',
                options: [
                    'Science and Technology',
                    'Literature',
                    'Sports',
                    'Social Service'
                ],
                correctAnswer: 0,
                explanation: 'The Shanti Swarup Bhatnagar Prize for Science and Technology is one of the highest Indian science awards.'
            },
            {
                id: 3,
                question: 'The first Indian to win the Nobel Prize was',
                options: [
                    'Rabindranath Tagore',
                    'C.V. Raman',
                    'Mother Teresa',
                    'Hargobind Khurana'
                ],
                correctAnswer: 0,
                explanation: 'Rabindranath Tagore was the first Indian to win Nobel Prize in 1913 for Literature.'
            },
            {
                id: 4,
                question: 'The velocity of sound in air (under normal conditions) is',
                options: [
                    '330 m/sec',
                    '332 m/sec',
                    '334 m/sec',
                    '336 m/sec'
                ],
                correctAnswer: 0,
                explanation: 'The speed of sound in air is approximately 343 m/s at 20°C. Among options, 330 m/s is closest.'
            },
            {
                id: 5,
                question: 'The velocity of light was first measured by',
                options: [
                    'Romer',
                    'Galileo',
                    'Newton',
                    'Einstein'
                ],
                correctAnswer: 0,
                explanation: 'Ole Rømer made the first quantitative measurements of the speed of light in 1676.'
            },
            {
                id: 6,
                question: 'The filament of electric bulb is made of',
                options: [
                    'Tungsten',
                    'Nichrome',
                    'Graphite',
                    'Iron'
                ],
                correctAnswer: 0,
                explanation: 'Tungsten is used for bulb filaments because of its high melting point (3422°C) and high resistivity.'
            },
            {
                id: 7,
                question: 'The unit of electrical power is',
                options: [
                    'Watt',
                    'Volt',
                    'Ampere',
                    'Coulomb'
                ],
                correctAnswer: 0,
                explanation: 'Watt is the unit of electrical power, named after James Watt.'
            },
            {
                id: 8,
                question: 'The source of solar energy is',
                options: [
                    'Nuclear fusion',
                    'Nuclear fission',
                    'Cracking of petroleum',
                    'Coal'
                ],
                correctAnswer: 0,
                explanation: 'Solar energy comes from nuclear fusion reactions in the sun\'s core where hydrogen fuses into helium.'
            },
            {
                id: 9,
                question: 'The gas usually filled in the electric bulb is',
                options: [
                    'Nitrogen',
                    'Hydrogen',
                    'Carbon dioxide',
                    'Oxygen'
                ],
                correctAnswer: 0,
                explanation: 'Nitrogen or argon gas is filled in electric bulbs to prevent oxidation of the tungsten filament.'
            },
            {
                id: 10,
                question: 'Which of the following is not a vector quantity?',
                options: [
                    'Speed',
                    'Velocity',
                    'Torque',
                    'Displacement'
                ],
                correctAnswer: 0,
                explanation: 'Speed is a scalar quantity as it has only magnitude, while velocity, torque and displacement are vector quantities.'
            }
        ]
    },
    'general-science': {
        title: 'General Science (Physics) Practice Test',
        duration: 30,
        totalQuestions: 10,
        totalMarks: 10,
        questions: [
            {
                id: 1,
                question: 'What is the formula for Newton\'s Second Law of Motion?',
                options: [
                    '$F = ma$',
                    '$F = mg$',
                    '$E = mc^2$',
                    '$v = u + at$'
                ],
                correctAnswer: 0,
                explanation: 'Newton\'s Second Law states that Force equals mass times acceleration: $F = ma$'
            },
            {
                id: 2,
                question: 'The SI unit of electric current is:',
                options: [
                    'Ampere',
                    'Volt',
                    'Ohm',
                    'Watt'
                ],
                correctAnswer: 0,
                explanation: 'The ampere (symbol: A) is the SI base unit of electric current.'
            },
            {
                id: 3,
                question: 'Which of the following is a scalar quantity?',
                options: [
                    'Temperature',
                    'Force',
                    'Velocity',
                    'Acceleration'
                ],
                correctAnswer: 0,
                explanation: 'Temperature is a scalar quantity as it has only magnitude, while force, velocity and acceleration are vectors.'
            },
            {
                id: 4,
                question: 'The refractive index of water is approximately:',
                options: [
                    '1.33',
                    '1.50',
                    '2.42',
                    '1.00'
                ],
                correctAnswer: 0,
                explanation: 'The refractive index of water is about 1.33, which is why objects appear bent when viewed through water.'
            },
            {
                id: 5,
                question: 'Ohm\'s Law states that:',
                options: [
                    '$V = IR$',
                    '$P = IV$',
                    '$F = ma$',
                    '$E = mc^2$'
                ],
                correctAnswer: 0,
                explanation: 'Ohm\'s Law states that Voltage equals Current times Resistance: $V = IR$'
            },
            {
                id: 6,
                question: 'The unit of frequency is:',
                options: [
                    'Hertz',
                    'Decibel',
                    'Newton',
                    'Pascal'
                ],
                correctAnswer: 0,
                explanation: 'The hertz (symbol: Hz) is the derived unit of frequency in the International System of Units (SI).'
            },
            {
                id: 7,
                question: 'Which law states that pressure is inversely proportional to volume at constant temperature?',
                options: [
                    'Boyle\'s Law',
                    'Charles\'s Law',
                    'Gay-Lussac\'s Law',
                    'Avogadro\'s Law'
                ],
                correctAnswer: 0,
                explanation: 'Boyle\'s Law states that for a fixed amount of gas at constant temperature, pressure is inversely proportional to volume.'
            },
            {
                id: 8,
                question: 'The speed of light in vacuum is approximately:',
                options: [
                    '$3 \\times 10^8$ m/s',
                    '$3 \\times 10^6$ m/s',
                    '$3 \\times 10^5$ m/s',
                    '$3 \\times 10^3$ m/s'
                ],
                correctAnswer: 0,
                explanation: 'The speed of light in vacuum is exactly 299,792,458 m/s, commonly approximated as $3 \\times 10^8$ m/s.'
            },
            {
                id: 9,
                question: 'Which of the following is NOT a fundamental force?',
                options: [
                    'Frictional force',
                    'Gravitational force',
                    'Electromagnetic force',
                    'Strong nuclear force'
                ],
                correctAnswer: 0,
                explanation: 'Frictional force is not a fundamental force. The four fundamental forces are gravitational, electromagnetic, strong nuclear, and weak nuclear forces.'
            },
            {
                id: 10,
                question: 'The principle of conservation of energy is also known as:',
                options: [
                    'First Law of Thermodynamics',
                    'Second Law of Thermodynamics',
                    'Third Law of Thermodynamics',
                    'Zeroth Law of Thermodynamics'
                ],
                correctAnswer: 0,
                explanation: 'The First Law of Thermodynamics states that energy cannot be created or destroyed, only converted from one form to another.'
            }
        ]
    }
};

// Bengali translations for questions
const bengaliTranslations = {
    'food-si-2019': {
        title: 'ডব্লিউবিপিএসসি ফুড এসআই ২০১৯ অফিসিয়াল পেপার',
        questions: [
            {
                question: 'কোন বিজ্ঞানী "এ ব্রিফ হিস্ট্রি অফ টাইম" নামে একটি বই লিখেছিলেন?',
                options: [
                    'স্টিফেন হকিং',
                    'এডওয়ার্ড জেনার',
                    'মেঘনাদ সাহা',
                    'পাস্তুর'
                ],
                explanation: 'বিখ্যাত তাত্ত্বিক পদার্থবিদ স্টিফেন হকিং "এ ব্রিফ হিস্ট্রি অফ টাইম" বইটি লিখেছিলেন যা ১৯৮৮ সালে প্রকাশিত হয়।'
            },
            {
                question: 'শান্তি স্বরূপ ভাটনাগর পুরস্কার কোন ক্ষেত্রের সাথে যুক্ত?',
                options: [
                    'বিজ্ঞান ও প্রযুক্তি',
                    'সাহিত্য',
                    'ক্রীড়া',
                    'সমাজ সেবা'
                ],
                explanation: 'শান্তি স্বরূপ ভাটনাগর পুরস্কার বিজ্ঞান ও প্রযুক্তি ক্ষেত্রে ভারতের সর্বোচ্চ বিজ্ঞান পুরস্কারগুলির মধ্যে একটি।'
            }
        ]
    },
    'general-science': {
        title: 'সাধারণ বিজ্ঞান (পদার্থবিদ্যা) অনুশীলন পরীক্ষা',
        questions: [
            {
                question: 'নিউটনের দ্বিতীয় গতিসূত্রের সূত্রটি কী?',
                options: [
                    '$F = ma$',
                    '$F = mg$',
                    '$E = mc^2$',
                    '$v = u + at$'
                ],
                explanation: 'নিউটনের দ্বিতীয় সূত্র অনুসারে, বল ভর ও ত্বরণের গুণফলের সমান: $F = ma$'
            },
            {
                question: 'তড়িৎ প্রবাহের এসআই একক হল:',
                options: [
                    'অ্যাম্পিয়ার',
                    'ভোল্ট',
                    'ওহম',
                    'ওয়াট'
                ],
                explanation: 'অ্যাম্পিয়ার (প্রতীক: A) হল তড়িৎ প্রবাহের এসআই মৌলিক একক।'
            }
        ]
    }
};
