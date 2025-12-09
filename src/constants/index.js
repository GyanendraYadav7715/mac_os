const navLinks = [
    {
        id: 1,
        name: "Projects",
        type: "finder",
    },
    {
        id: 3,
        name: "Contact",
        type: "contact",
    },
    {
        id: 4,
        name: "Resume",
        type: "resume",
    },
];

const navIcons = [
    {
        id: 1,
        img: "/icons/wifi.svg",
    },
    {
        id: 2,
        img: "/icons/search.svg",
    },
    {
        id: 3,
        img: "/icons/user.svg",
    },
    {
        id: 4,
        img: "/icons/mode.svg",
    },
];

const dockApps = [
    {
        id: "finder",
        name: "Portfolio", // was "Finder"
        icon: "finder.png",
        canOpen: true,
    },
    {
        id: "safari",
        name: "Articles", // was "Safari"
        icon: "safari.png",
        canOpen: true,
    },
    {
        id: "photos",
        name: "Gallery", // was "Photos"
        icon: "photos.png",
        canOpen: true,
    },
    {
        id: "contact",
        name: "Contact", // or "Get in touch"
        icon: "contact.png",
        canOpen: true,
    },
    {
        id: "terminal",
        name: "Skills", // was "Terminal"
        icon: "terminal.png",
        canOpen: true,
    },
    {
        id: "trash",
        name: "Archive", // was "Trash"
        icon: "trash.png",
        canOpen: true,
    },
    {
        id: "app_store",
        name: "Apps",
        icon: "app_store.png",
        canOpen: true,
    }
];

const macOSApps = [
    // Page 1 - Productivity
    [
        { id: "finder", name: "Finder", icon: "finder.png", canOpen: true },
        { id: "safari", name: "Safari", icon: "safari.png", canOpen: true },
        { id: "mail", name: "Mail", icon: "mail.png", canOpen: false },
        { id: "messages", name: "Messages", icon: "messages.png", canOpen: false },
        { id: "facetime", name: "FaceTime", icon: "facetime.png", canOpen: false },
        { id: "calendar", name: "Calendar", icon: "calendar.png", canOpen: false },
        { id: "contacts", name: "Contacts", icon: "contact.png", canOpen: true },
        { id: "notes", name: "Notes", icon: "notes.png", canOpen: false },
        { id: "reminders", name: "Reminders", icon: "reminders.png", canOpen: false, },
        { id: "maps", name: "Maps", icon: "maps.png", canOpen: false },
        { id: "photos", name: "Photos", icon: "photos.png", canOpen: true },
        { id: "music", name: "Music", icon: "music.png", canOpen: false },
    ],
    [
        { id: "terminal", name: "Terminal", icon: "terminal.png", canOpen: true },
        { id: "vscode", name: "VCode", icon: "vscode.png", canOpen: false },
        { id: "postman", name: "Postman", icon: "postman_macos.png", canOpen: false },
        { id: "mongodb", name: "MongoDB", icon: "mongodb_compass.png", canOpen: false },
        { id: "mysql", name: "MySQL", icon: "mysql_workbench.png", canOpen: false },
        { id: "intellij", name: "IntelliJ", icon: "intellij.png", canOpen: false },
        { id: "web-strom", name: "WebStorm", icon: "webstorm .png", canOpen: false },

        { id: "calculator", name: "Calculator", icon: "calculator.png", canOpen: false, },
        { id: "settings", name: "Settings", icon: "settings.png", canOpen: false },
        {
            id: "app_store",
            name: "App Store",
            icon: "app_store.png",
            canOpen: true,
        },
    ],
];
const blogPosts = [
    {
        id: 1,
        date: "Dec 7, 2025",
        title:
            "Consistency Patterns Explained — Weak, Eventual, and Strong Consistency",
        image: "/images/network.jpg",
        link: "https://systemdesignwithgyan.blogspot.com/2025/12/consistency-patterns.html",
    },
    {
        id: 2,
        date: "Dec 6, 2025",
        title: "How to Approach System Design (Step-by-Step for Beginners)",
        image: "/images/network.jpg",
        link: "https://systemdesignwithgyan.blogspot.com/2025/12/how-to-approach-system-design.html",
    },
    {
        id: 3,
        date: "Dec 6, 2025",
        title: "What Is System Design? A Comprehensive Guide for Developers",
        image: "/images/network.jpg",
        link: "https://systemdesignwithgyan.blogspot.com/2025/12/what-is-system-design.html",
    },
];

const techStack = [
    {
        category: "Frontend",
        items: ["React.js", "Next.js", "TypeScript"],
    },
    {
        category: "Mobile",
        items: ["React Native", "Expo"],
    },
    {
        category: "Styling",
        items: ["Tailwind CSS", "Sass", "CSS"],
    },
    {
        category: "Backend",
        items: ["Node.js", "Express", "Java", "Spring Boot"],
    },
    {
        category: "Database",
        items: ["MongoDB", "PostgreSQL"," MySQL"],
    },
    {
        category: "Dev Tools",
        items: ["Git", "GitHub", "Docker","Postman", "IntelliJ IDEA"],
    },
];

const socials = [
    {
        id: 1,
        text: "Github",
        icon: "/icons/github.svg",
        bg: "#f4656b",
        link: "https://github.com/GyanendraYadav7715",
    },
    {
        id: 2,
        text: "Platform",
        icon: "/icons/atom.svg",
        bg: "#4bcb63",
        link: "https://gyanendra-yadav.vercel.app/",
    },
    {
        id: 3,
        text: "Twitter/X",
        icon: "/icons/twitter.svg",
        bg: "#ff866b",
        link: "https://x.com/Gyan09335978",
    },
    {
        id: 4,
        text: "LinkedIn",
        icon: "/icons/linkedin.svg",
        bg: "#05b6f6",
        link: "https://www.linkedin.com/in/gyanendra-yadav-059725253/",
    },
];
const photosLinks = [
    {
        id: 1,
        icon: "/icons/gicon1.svg",
        title: "Library",
    },
    {
        id: 2,
        icon: "/icons/gicon2.svg",
        title: "Memories",
    },
    {
        id: 3,
        icon: "/icons/file.svg",
        title: "Places",
    },
    {
        id: 4,
        icon: "/icons/gicon4.svg",
        title: "People",
    },
    {
        id: 5,
        icon: "/icons/gicon5.svg",
        title: "Favorites",
    },
];

const gallery = [
    {
        id: 1,
        img: "/images/gal11.jpg",
    },
    {
        id: 2,
        img: "/images/gal22.jpg",
    },
    {
        id: 3,
        img: "/images/gal33.jpg",
    },
    {
        id: 4,
        img: "/images/gal44.jpg",
    },
];

export {
    navLinks,
    navIcons,
    dockApps,
    blogPosts,
    techStack,
    socials,
    photosLinks,
    gallery,
    macOSApps
};

const WORK_LOCATION = {
    id: 1,
    type: "work",
    name: "Work",
    icon: "/icons/work.svg",
    kind: "folder",
    children: [
        // ▶ Project 1
        {
            id: 5,
            name: "Marriage Saga",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-10 left-5", // icon position inside Finder
            windowPosition: "top-[5vh] left-10", // optional: Finder window position
            children: [
                {
                    id: 1,
                    name: "Marriage Saga Project.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 left-10",
                    description: [
                       " Built on a robust Node.js microservice architecture, the system powers everything—from profile creation and partner recommendations to secure chat and matchmaking algorithms.Every component is designed with high availability, data security, and real- time performance in mind."
                    ],
                },
                {
                    id: 2,
                    name: "marriagesaga.com",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://www.marriagesaga.com/",
                    position: "top-10 right-20",
                },
                {
                    id: 4,
                    name: "marriagesaga.png",
                    icon: "/images/marriagesaga-logo.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-52 right-80",
                    imageUrl: "/images/project-1.png",
                },
                {
                    id: 5,
                    name: "Design.fig",
                    icon: "/images/plain.png",
                    kind: "file",
                    fileType: "fig",
                    href: "https://google.com",
                    position: "top-60 right-20",
                },
            ],
        },

        // ▶ Project 2
        {
            id: 6,
            name: "Comprig Intance VM creation",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-52 right-80",
            windowPosition: "top-[18vh] left-3",
            children: [
                {
                    id: 1,
                    name: "Comprig Project.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 right-10",
                    description: [
                        "Comprig Instance VM Creation is a powerful cloud platform that allows users to spin up high-performance virtual machines in seconds.",
                        "Instead of relying only on local hardware, users can offload heavy tasks to the cloud with dynamic CPU, GPU, RAM, and storage allocation.",
                        "It provides a complete lifecycle system—create, start, stop, monitor, and delete VMs with real-time status updates and resource analytics.",
                        "Built with a modern stack of Node.js, Next.js, Docker, and cloud orchestration, it delivers a fast, scalable, and production-grade experience."
                    ]

                },
                {
                    id: 2,
                    name: "comprig.com",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://comprig.com/",
                    position: "top-20 left-20",
                },
                {
                    id: 4,
                    name: "comprig.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-52 left-80",
                    imageUrl: "/images/cloudshift.png",
                },
                {
                    id: 5,
                    name: "Design.fig",
                    icon: "/images/plain.png",
                    kind: "file",
                    fileType: "fig",
                    href: "https://google.com",
                    position: "top-60 left-5",
                },
            ],
        },

        // ▶ Project 3
        {
            id: 7,
            name: "Greencart",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-10 left-80",
            windowPosition: "top-[33vh] left-13",
            children: [
                {
                    id: 1,
                    name: "Greencart.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 left-10",
                    description: [
                        "This project is a modern E-commerce Grocery Web Application designed to make online grocery shopping seamless for customers and easy to manage for administrators. Customers can browse products, add items to their cart, place orders, and track them in real-time. On the other side, admins can manage product inventory, monitor orders, and update stock efficiently.",
                    ],
                },
                {
                    id: 2,
                    name: "greencart.com",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://greencart-frontend-pearl.vercel.app/",
                    position: "top-10 right-20",
                },
                {
                    id: 4,
                    name: "greencart.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-52 right-80",
                    imageUrl: "/icons/greencart.svg",
                },
                {
                    id: 5,
                    name: "Design.fig",
                    icon: "/images/plain.png",
                    kind: "file",
                    fileType: "fig",
                    href: "https://google.com",
                    position: "top-60 right-20",
                },
            ],
        },
    ],
};

const ABOUT_LOCATION = {
    id: 2,
    type: "about",
    name: "About me",
    icon: "/icons/info.svg",
    kind: "folder",
    children: [
        {
            id: 1,
            name: "me.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-10 left-5",
            imageUrl: "/images/gyan.jpeg",
        },
        {
            id: 2,
            name: "casual-me.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-28 right-72",
            imageUrl: "/images/image1.jpg",
        },
        {
            id: 3,
            name: "conference-me.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-52 left-80",
            imageUrl: "/images/image2.jpg",
        },
        {
            id: 4,
            name: "about-me.txt",
            icon: "/images/txt.png",
            kind: "file",
            fileType: "txt",
            position: "top-60 left-5",
            subtitle: "Meet the Developer Behind the Code",
            image: "/images/image3.jpg",
            description: [
                "Hey! I’m Gyanendra Yadav 👋, a software developer focused on building clean, fast, and scalable applications.",
                "I work with JavaScript, React, Java,SpringBoot and backend system design—always aiming for production-grade quality.",
                "I care about sharp UI, smooth UX, and writing code that’s simple, predictable, and easy to maintain.",
                "When I’m not deep into LeetCode or system design, you’ll find me refining projects, learning something new, or planning my path to FAANG-level engineering 🚀"
            ]

        },
    ],
};

const RESUME_LOCATION = {
    id: 3,
    type: "resume",
    name: "Resume",
    icon: "/icons/file.svg",
    kind: "folder",
    children: [
        {
            id: 1,
            name: "Resume.pdf",
            icon: "/images/pdf.png",
            kind: "file",
            fileType: "pdf",
            // you can add `href` if you want to open a hosted resume
            // href: "/your/resume/path.pdf",
        },
    ],
};

const TRASH_LOCATION = {
    id: 4,
    type: "trash",
    name: "Trash",
    icon: "/icons/trash.svg",
    kind: "folder",
    children: [
        {
            id: 1,
            name: "trash1.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-10 left-10",
            imageUrl: "/images/trash-1.png",
        },
        {
            id: 2,
            name: "trash2.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-40 left-80",
            imageUrl: "/images/trash-2.png",
        },
    ],
};

export const locations = {
    work: WORK_LOCATION,
    about: ABOUT_LOCATION,
    resume: RESUME_LOCATION,
    trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
    finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    app_store: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    trash: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };