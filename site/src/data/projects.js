const projects = [
  {
    id: "nilm",
    category: "AI / ML",
    title: "Household Appliance Energy Disaggregation / NILM",
    status: "Completed",
    image: "/images/nilm-cover.png",
    imagePosition: "center",
    summary:
      "I built an end-to-end ML pipeline from household electrical waveform data to predict appliance ON/OFF states over time. This project pushed me to work through messy signals, imperfect labels, feature engineering, and practical evaluation across overlapping usage scenarios.",
    stack: ["Python", "Pandas", "Scikit-learn", "Jupyter"],
    learned:
      "This project helped me understand how much ML work happens before and after model training, especially when the data is not clean.",
    repoUrl:
      "https://github.com/oldbshaw/household-appliance-energy-disaggregation",
  },
  {
    id: "geo-tester",
    category: "Systems / AI",
    title: "GEO Tester for Website Readiness",
    status: "Completed",
    image: "/images/geo-cover.png",
    imagePosition: "center",
    summary:
      "Built during my internship in Suzhou, this module evaluates how ready a website is for AI-driven discovery using structured checks across access, legibility, performance, E-E-A-T, and intent coverage. The focus was on evidence-first reporting, deterministic scoring, and fair handling of edge cases.",
    stack: ["Python", "Playwright", "FastAPI", "SQLite", "Pytest"],
    learned:
      "I learned how much better technical reporting becomes when every score is tied back to concrete evidence and a clear rubric.",
    repoUrl: "https://github.com/oldbshaw/geo-tester-module",
  },
  {
    id: "mental-wellness",
    category: "App",
    title: "Mental Wellness App MVP",
    status: "In Progress",
    image: "/images/wellness-cover.png",
    imagePosition: "center 58%",
    imageScale: 0.9,
    imageHoverScale: 0.92,
    demoUrl: "/videos/mental-wellness-demo.mp4",
    summary:
      "I'm building a SwiftUI app around calmer emotional UX and small redirect actions for moments when someone feels stuck or overwhelmed. It's still early, but this is the most personal project here and one I want to keep developing properly.",
    stack: ["Swift", "SwiftUI", "Local Notifications"],
    learned:
      "This project has been teaching me how product design, state management, and emotional UX all affect whether an app actually feels helpful.",
    repoUrl: "",
    accessLabel: "Private project",
  },
  {
    id: "deep-learning",
    category: "Deep Learning",
    title: "Applied Deep Learning: Medical Imaging + Financial NLP",
    status: "Completed",
    image: "/images/deep-learning-cover.png",
    imagePosition: "center top",
    summary:
      "This was a two-part deep learning assignment covering brain MRI classification and financial text sentiment analysis. I used it to compare how image and text workflows differ, and to get better at evaluating models beyond just raw accuracy.",
    stack: ["Python", "TensorFlow", "Keras", "Jupyter"],
    learned:
      "This project helped me think more carefully about evaluation, especially when model performance looks decent on paper but the metric story is incomplete.",
    repoUrl: "https://github.com/oldbshaw/applied-deep-learning-medical-nlp",
  },
]

export default projects
