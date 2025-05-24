import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Home,
  Inbox,
  Map,
  PieChart,
  Search,
  Settings2,
  SquareTerminal,
} from "lucide-vue-next";

export const setUpSteps = [
  {
    title: "Create account",
    description: "Provide your email and password",
    link: "/onboarding/new",
    icon: "i-heroicons-user",
  },
  {
    title: "Verify email address",
    description: "Verify your email address to continue",
    link: "/onboarding/verify-email",
    icon: "i-heroicons-envelope",
  },
  {
    title: "Organization details",
    description: "Set up your organization",
    link: "/onboarding/company",
    icon: "i-heroicons-building-office-2",
  },
  {
    title: "Workspaces",
    description: "Set up your organization structure with workspaces and teams",
    link: "/onboarding/workspaces",
    icon: "i-heroicons-squares-2x2",
  },
  {
    title: "Invite your team",
    description: " Invite your team members to collaborating",
    link: "/onboarding/team",
    icon: "i-heroicons-user-group",
  },
];

export const files = [
  {
    id: 1,
    name: "Student Welcome Pack",
    type: "Folder",
    date: "12/12/2021",
  },
  {
    id: 2,
    name: "MCA and DOLS",
    type: "docx",
    date: "12/12/2021",
  },
  {
    id: 3,
    name: "Discharge",
    type: "Folder",
    date: "12/12/2021",
  },
  {
    id: 4,
    name: "Referrals",
    type: "Folder",
    date: "12/12/2021",
  },
  {
    id: 5,
    name: "Ward Meetings",
    type: "Folder",
    date: "12/12/2021",
  },
];

// This is sample data.
export const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Estuary ward",
      // logo: GalleryVerticalEnd,
    },
    {
      name: "MSE Innovation",
      // logo: AudioWaveform,
    },
    {
      name: "Personal Space",
      // logo: Command,
    },
  ],

  navigations: [
    { title: "Search", url: "#", icon: Search, isActive: false },
    { title: "Home", url: "/", icon: Home, isActive: false },
    { title: "Inbox", url: "#", icon: Inbox, isActive: false },
  ],
  navMain: [
    {
      title: "Playground",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "History",
          url: "#",
        },
        {
          title: "Starred",
          url: "#",
        },
        {
          title: "Settings",
          url: "#",
        },
      ],
    },
    {
      title: "Models",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Genesis",
          url: "#",
        },
        {
          title: "Explorer",
          url: "#",
        },
        {
          title: "Quantum",
          url: "#",
        },
      ],
    },
    {
      title: "Documentation",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Introduction",
          url: "#",
        },
        {
          title: "Get Started",
          url: "#",
        },
        {
          title: "Tutorials",
          url: "#",
        },
        {
          title: "Changelog",
          url: "#",
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
};
