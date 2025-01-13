// Questions array
const questions = [
  {
    numb: 1,
    question:
      "The basic functions of a computer system are to accept the input, process the input, output and to",
    answer: "(c) store data",
    options: [
      "(a) digital form",
      "(b) memory",
      "(c) store data",
      "(d) compute",
    ],
  },
  {
    numb: 2,
    question:
      "......... is a command given to a computer in the computer language by the user.",
    answer: "(a) Instruction",
    options: ["(a) Instruction", "(b) Information", "(c) Program", "(d) Data"],
  },
  {
    numb: 3,
    question: "Which generation of computer is covered by the period 1964-71?",
    answer: "(c) Third",
    options: ["(a) First", "(b) Second", "(c) Third", "(d) Fourth"],
  },
  {
    numb: 4,
    question: "In third generation, ............... were used.",
    answer: "(b) Integrated circuits",
    options: [
      "(a) Vacuum tubes",
      "(b) Integrated circuits",
      "(c) Transistors",
      "(d) Large scale integrated circuits",
    ],
  },
  {
    numb: 5,
    question: "Speed of third generation computers was measured in",
    answer: "(c) nanosecond",
    options: [
      "(a) millisecond",
      "(b) microsecond",
      "(c) nanosecond",
      "(d) picosecond",
    ],
  },
  {
    numb: 6,
    question: "PCs are considered fourth generation and contain",
    answer: "(d) microprocessors",
    options: [
      "(a) information",
      "(b) data",
      "(c) vacuum tubes",
      "(d) microprocessors",
    ],
  },
  {
    numb: 7,
    question: "Artificial intelligence is an example of",
    answer: "(d) fifth generation computer",
    options: [
      "(a) first generation computer",
      "(b) second generation computer",
      "(c) fourth generation computer",
      "(d) fifth generation computer",
    ],
  },
  {
    numb: 8,
    question: "Laptops are",
    answer: "(b) portable, light weight and can be fit into briefcase",
    options: [
      "(a) computers used in clinical laboratories",
      "(b) portable, light weight and can be fit into briefcase",
      "(c) hearing voice recognition system",
      "(d) desktop",
    ],
  },
  {
    numb: 9,
    question:
      "A ........ is a large and expensive computer capable of performing scientific and business applications.",
    answer: "(a) Super computer",
    options: [
      "(a) Super computer",
      "(b) Mainframe computer",
      "(c) Mini computer",
      "(d) Handheld computer",
    ],
  },
  {
    numb: 10,
    question: "Analog computer works on the supply of",
    answer: "(a) continuous electrical pulses",
    options: [
      "(a) continuous electrical pulses",
      "(b) electrical pulses but not continue",
      "(c) magnetic strength",
      "(d) physical strength",
    ],
  },
  {
    numb: 11,
    question: "Seismograph is an example of",
    answer: "(a) Analog computer",
    options: [
      "(a) Analog computer",
      "(b) Digital computer",
      "(c) Hybrid computer",
      "(d) All of these",
    ],
  },
  {
    numb: 12,
    question: "The presence of computers can be seen in",
    answer: "(d) All of these",
    options: [
      "(a) education",
      "(b) banking",
      "(c) multimedia",
      "(d) All of these",
    ],
  },
  {
    numb: 13,
    question: "Pointing device includes the following except",
    answer: "(d) keyboard",
    options: ["(a) mouse", "(b) touch screen", "(c) trackball", "(d) keyboard"],
  },
  {
    numb: 14,
    question: "A joystick is primarily used to",
    answer: "(b) computer gaming",
    options: [
      "(a) control sound on the screen",
      "(b) computer gaming",
      "(c) enter text",
      "(d) draw pictures",
    ],
  },
  {
    numb: 15,
    question:
      "A device, which is used for making drawings, graphics and for menu selection.",
    answer: "(d) Light Pen",
    options: ["(a) Keyboard", "(b) Mouse", "(c) Touch Screen", "(d) Light Pen"],
  },
  {
    numb: 16,
    question:
      "A device that makes copies and reproduces text and images is called",
    answer: "(d) scanner",
    options: ["(a) CPU", "(b) memory", "(c) printer", "(d) scanner"],
  },
  {
    numb: 17,
    question: "In abbreviation MICR, C stands for",
    answer: "(d) Character",
    options: ["(a) Code", "(b) Color", "(c) Computer", "(d) Character"],
  },
  {
    numb: 18,
    question: "A barcode reader is an example of",
    answer: "(c) input device",
    options: [
      "(a) processing device",
      "(b) storage device",
      "(c) input device",
      "(d) output device",
    ],
  },
  {
    numb: 19,
    question: "What type of device is a digital camera? ",
    answer: "(a) Input",
    options: ["(a) Input", "(b) Output", "(c) Software", "(d) Storage"],
  },
  {
    numb: 20,
    question: "What is the function of an output device?",
    answer: "(c) To give output to the user",
    options: [
      "(a) To send data to the computer",
      "(b) To store data",
      "(c) To give output to the user",
      "(d) To do mathematical calculations",
    ],
  },
  {
    numb: 21,
    question: "The output devices make it possible to",
    answer: "(a) view or print data",
    options: [
      "(a) view or print data",
      "(b) store data",
      "(c) scan data",
      "(d) None of these",
    ],
  },
  {
    numb: 22,
    question:
      "Which type of printer cannot produce high quality print graphics?",
    answer: "(d) Chain printer",
    options: [
      "(a) Daisy wheel printer",
      "(b) Laser printer",
      "(c) Line printer",
      "(d) Chain printer",
    ],
  },
  {
    numb: 23,
    question: "Which of the following produces high quality output?",
    answer: "(b) Non-impact printer",
    options: [
      "(a) Impact printer",
      "(b) Non-impact printer",
      "(c) Both (a) and (b)",
      "(d) Plotter",
    ],
  },
  {
    numb: 24,
    question: "Resolution of laser printer is specified in terms of",
    answer: "(a) DPI",
    options: ["(a) DPI", "(b) LPM", "(c) CPM", "(d) PPM"],
  },
  {
    numb: 25,
    question: "Which of the following is an output device?",
    answer: "(d) Plotter",
    options: [
      "(a) Keyboard",
      "(b) Biometric Sensor",
      "(c) Trackball",
      "(d) Plotter",
    ],
  },
  {
    numb: 26,
    question: "Which of the following is a part of CPU?",
    answer: "(c) Both (a) and (b)",
    options: [
      "(a) ALU",
      "(b) Control unit",
      "(c) Both (a) and (b)",
      "(d) Disk drive",
    ],
  },
  {
    numb: 27,
    question: "Arithmetic operations in ALU performs",
    answer: "(d) All of these",
    options: [
      "(a) addition",
      "(b) subtraction",
      "(c) multiplication",
      "(d) All of these",
    ],
  },
  {
    numb: 28,
    question:
      "Arithmetic logic unit and control unit sections have special purpose location called",
    answer: "(a) registers",
    options: ["(a) registers", "(b) RAM", "(c) BIOS", "(d) I/O"],
  },
  {
    numb: 29,
    question: "Which of the following is the magnetic storage device?",
    answer: "(a) Hard disk",
    options: [
      "(a) Hard disk",
      "(b) Compact disc",
      "(c) Audio tapes",
      "(d) All of these",
    ],
  },
  {
    numb: 30,
    question:
      "Which of the following storage media provides sequential access only?",
    answer: "(c) Magnetic tape",
    options: [
      "(a) Floppy disk",
      "(b) Magnetic disk",
      "(c) Magnetic tape",
      "(d) Optical disc",
    ],
  },
  {
    numb: 31,
    question: "Which one is a secondary storage device?",
    answer: "(a) CD-ROM",
    options: [
      "(a) CD-ROM",
      "(b) RAM",
      "(c) Both (a) and (b)",
      "(d) None of the above",
    ],
  },
  {
    numb: 32,
    question: "...... is the smallest memory measurement unit.",
    answer: "(a) Bit",
    options: ["(a) Bit", "(b) Nibble", "(c) Byte", "(d) Mega"],
  },
  {
    numb: 33,
    question: "1 Mega byte is equal to",
    answer: "(c) 1024 KB",
    options: ["(a) 1000 KB", "(b) 1026 KB", "(c) 1024 KB", "(d) 1000 KB"],
  },
  {
    numb: 34,
    question:
      "What is the name given to Input-Output devices and external storage media together?",
    answer: "(b) Peripherals",
    options: [
      "(a) Hardware",
      "(b) Peripherals",
      "(c) Software",
      "(d) Control unit",
    ],
  },
  {
    numb: 35,
    question: "The part of software are",
    answer: "(d) system and application",
    options: [
      "(a) word processing and spreadsheet",
      "(b) transaction and application  ",
      "(c) windows and Mac OS",
      "(d) system and application",
    ],
  },
  {
    numb: 36,
    question: "Which of the following is not a system software?",
    answer: "(d) MS-Office",
    options: [
      "(a) Operating system",
      "(b) Compiler",
      "(c) Interpreter",
      "(d) MS-Office",
    ],
  },
  {
    numb: 37,
    question: "Operating system is a",
    answer: "(b) system software",
    options: [
      "(a) application software",
      "(b) system software",
      "(c) hardware",
      "(d) language",
    ],
  },
  {
    numb: 38,
    question: "Translator program used in assembly language is called",
    answer: "(c) assembler",
    options: [
      "(a) compiler",
      "(b) interpreter",
      "(c) assembler",
      "(d) translator",
    ],
  },
  {
    numb: 39,
    question:
      "Which type of software is designed to perform specific, personal, business or scientific processing tasks?",
    answer: "(b) Application",
    options: ["(a) System", "(b) Application", "(c) GUI", "(d) Compiler"],
  },
  {
    numb: 40,
    question:
      "It is a set of instructions or programs designed for specific use or application that enable the user to interact with a computer are called",
    answer: "(a) application software",
    options: [
      "(a) application software",
      "(b) operating system",
      "(c) instructions",
      "(d) system unit",
    ],
  },
  {
    numb: 41,
    question: "Utility programs include",
    answer: "(d) All of the above",
    options: [
      "(a) Virus scanning software",
      "(b) Backup software",
      "(c) Disk fragmenter",
      "(d) All of the above",
    ],
  },
  {
    numb: 42,
    question:
      "Which of the following software is any computer software that is distributed with its source code available for modification?",
    answer: "(c) Open source software",
    options: [
      "(a) Application software",
      "(b) System software",
      "(c) Open source software",
      "(d) Proprietary software",
    ],
  },
  {
    numb: 43,
    question: "Example(s) of open source software is/are",
    answer: "(d) All of these",
    options: ["(a) Linux", "(b) Unix", "(c) MySQL", "(d) All of these"],
  },
  {
    numb: 44,
    question: "This software is copyrighted and bears the limits against use.",
    answer: "(a) Proprietary software",
    options: [
      "(a) Proprietary software",
      "(b) Open source software",
      "(c) Application software",
      "(d) System software",
    ],
  },
  {
    numb: 45,
    question:
      "...... is a device that has a specific function in addition usually has small dimensions.",
    answer: "(b) Gadget",
    options: ["(a) Software", "(b) Gadget", "(c) Keyboard", "(d) Scanner"],
  },
  {
    numb: 46,
    question: "Which of the following is/are IT gadget?",
    answer: "(c) Smart watch",
    options: [
      "(a) Keyboard",
      "(b) Wrist watch",
      "(c) Smart watch",
      "(d) Joystick",
    ],
  },
  {
    numb: 47,
    question: "Smart band is also known as",
    answer: "(c) Both (a) and (b)",
    options: [
      "(a) Smart bracelets",
      "(b) Connected bracelets",
      "(c) Both (a) and (b)",
      "(d) Smart watch",
    ],
  },
  {
    numb: 48,
    question:
      "Which of the following is a wearable computing device which comes with a head mounted display in the form of eyeglasses?",
    answer: "(a) Google glass",
    options: [
      "(a) Google glass",
      "(b) Drone camera",
      "(c) Spy pen",
      "(d) Smart goggle",
    ],
  },
  {
    numb: 49,
    question:
      "This IT gadget is used for protection, safety and even investigation.",
    answer: "(d) Spy pen",
    options: [
      "(a) Drone camera",
      "(b) Smart watch",
      "(c) Bluetooth speaker",
      "(d) Spy pen",
    ],
  },
  {
    numb: 50,
    question:
      "BHIM app is used to make simple, easy and quick payment transactions using",
    answer: "(b) UPI",
    options: [
      "(a) Password",
      "(b) UPI",
      "(c) Phone number",
      "(d) Aadhar number",
    ],
  },
  {
    numb: 51,
    question: "App launched by IRCTC was known as",
    answer: "(a) IRCTC Connect",
    options: [
      "(a) IRCTC Connect",
      "(b) IRCTC App",
      "(c) IRCTC Launcher",
      "(d) IRCTC Booking",
    ],
  },
  {
    numb: 52,
    question:
      "Paytm is India’s largest mobile payment and commerce platform founded by",
    answer: "(b) Vijay Shekhar Sharma",
    options: [
      "(a) Aditya Sharma",
      "(b) Vijay Shekhar Sharma",
      "(c) Sidhartha Sharma",
      "(d) Shekhar Verma",
    ],
  },
  {
    numb: 53,
    question:
      "This mobile app reduces the use of physical documents and fake documents. What is this?",
    answer: "(b) DigiLocker app",
    options: [
      "(a) GARV app",
      "(b) DigiLocker app",
      "(c) MyGov app",
      "(d) OnlineRTI app",
    ],
  },
  {
    numb: 54,
    question: "RTI India has launched a mobile application for ...... phones.",
    answer: "(a) Android",
    options: ["(a) Android", "(b) Apple", "(c) Symbian", "(d) BlackBerry"],
  },
  {
    numb: 55,
    question:
      "Instruction is a command given to a computer in the computer language by the user.",
    answer: "True",
    options: ["True", "False"],
  },
  {
    numb: 56,
    question: "Information is a set of instructions given to a computer.",
    answer: "False",
    options: ["True", "False"],
  },
  {
    numb: 57,
    question: "The first generation computers could not do multitasking.",
    answer: "True",
    options: ["True", "False"],
  },
  {
    numb: 58,
    question:
      "NCR 304, IBM-1401 are the examples of second generation computer.",
    answer: "True",
    options: ["True", "False"],
  },
  {
    numb: 59,
    question: "The main characteristics of fourth generation was vacuum tubes.",
    answer: "False",
    options: ["True", "False"],
  },
  {
    numb: 60,
    question:
      "A scanner, trackball and joystick are examples of output devices.",
    answer: "False",
    options: ["True", "False"],
  },
  {
    numb: 61,
    question:
      "OCR is a device that scans written or typed text and transforms it into computer readable form.",
    answer: "True",
    options: ["True", "False"],
  },
  {
    numb: 62,
    question: "A mic converts the received sound into computer’s format.",
    answer: "True",
    options: ["True", "False"],
  },
  {
    numb: 63,
    question: "Output devices store instructions or data that the CPU process.",
    answer: "False",
    options: ["True", "False"],
  },
  {
    numb: 64,
    question:
      "The number of pixels displayed on a screen is known as resolution.",
    answer: "True",
    options: ["True", "False"],
  },
  {
    numb: 65,
    question:
      "In a CRT, an electron gun is used, which fires electrons at groups of phosphor dots coating the inside of the screen.",
    answer: "True",
    options: ["True", "False"],
  },
  {
    numb: 66,
    question:
      "When a computer prints a report, this output is called hard copy.",
    answer: "True",
    options: ["True", "False"],
  },
  {
    numb: 67,
    question:
      "A plotter is used to generate the map of building and shopping malls.",
    answer: "True",
    options: ["True", "False"],
  },
  {
    numb: 68,
    question: "Antivirus software is used to allocate the memory to the data.",
    answer: "False",
    options: ["True", "False"],
  },
  {
    numb: 69,
    question: "Open source software must be available free or at a low cost.",
    answer: "True",
    options: ["True", "False"],
  },
  {
    numb: 70,
    question:
      "Licenses and maintenance of proprietary software are very cheap.",
    answer: "False",
    options: ["True", "False"],
  },
  {
    numb: 71,
    question:
      "Smart bands have a pedometer and sometimes also an optical heart rate sensor.",
    answer: "True",
    options: ["True", "False"],
  },
  {
    numb: 72,
    question: "Google glass is powered by Android mobile operating system.",
    answer: "True",
    options: ["True", "False"],
  },
  {
    numb: 73,
    question: "Drone camera is an example of mobile app.",
    answer: "False",
    options: ["True", "False"],
  },
  {
    numb: 74,
    question: "The aim to launch the BHIM app to make cashless payments.",
    answer: "True",
    options: ["True", "False"],
  },
  {
    numb: 75,
    question: "MyGov app is used to store all official documents.",
    answer: "False",
    options: ["True", "False"],
  },
  {
    numb: 76,
    question:
      "Helpline app provides a single point of service and information delivery to voters across the country.",
    answer: "True",
    options: ["True", "False"],
  },
];
