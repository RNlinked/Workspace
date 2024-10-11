export const icons = (type: string) => {
  switch (type) {
    case "Folder":
      return "i-heroicons-folder-solid";
    case "docx":
      return "i-heroicons-document-text-20-solid";
    case "pdf":
      return "i-heroicons-document-text-20-solid";
    case "xls":
      return "i-heroicons-document-text-20-solid";
    case "ppt":
      return "i-heroicons-document-text-20-solid";
    case "txt":
      return "i-heroicons-document-text-20-solid";
    case "zip":
      return "i-heroicons-archive-box-20-solid";
    case "rar":
      return "i-heroicons-archive-box-20-solid";
    case "7z":
      return "i-heroicons-archive-box-20-solid";
    case "jpg":
      return "i-heroicons-image-20-solid";
    case "jpeg":
      return "i-heroicons-image-20-solid";
    case "png":
      return "i-heroicons-image-20-solid";
    case "gif":
      return "i-heroicons-image-20-solid";
    case "mp3":
      return "i-heroicons-music-note-20-solid";
    case "wav":
      return "i-heroicons-music-note-20-solid";
    case "mp4":
      return "i-heroicons-play-20-solid";
    case "mkv":
      return "i-heroicons-play-20-solid";
    case "avi":
      return "i-heroicons-play-20-solid";
    case "mov":
      return "i-heroicons-play-20-solid";
    case "wmv":
      return "i-heroicons-play-20-solid";
    case "flv":
      return "i-heroicons-play-20-solid";
    case "webm":
      return "i-heroicons-play-20-solid";
    case "ogg":
      return "i-heroicons-play-20-solid";
    case "webp":
      return "i-heroicons-image-20-solid";
    case "svg":
      return "i-heroicons-image-20-solid";
    case "html":
      return "i-heroicons-globe-20-solid";
    case "css":
      return "i-heroicons-globe-20-solid";
    case "js":
      return "i-heroicons-globe-20-solid";
    case "ts":
      return "i-heroicons-globe-20-solid";
    case "json":
      return "i-heroicons-globe-20-solid";
    case "xml":
      return "i-heroicons-globe-20-solid";
  }
};

export type Folder = {
  id: number;
  name: string;
  type: string;
  date: string;
  children?: File[];
};

type File = {
  id: number;
  name: string;
  type: string;
  date: string;
  location?: string;
  children?: File[];
};

const files = [
  {
    id: 1,
    name: "Student Welcome Pack",
    type: "Folder",
    date: "12/12/2021",
    children: [
      {
        id: 11,
        name: "About The ward",
        type: "docx",
        location: "Student Welcome Pack",
        date: "12/12/2021",
      },
      {
        id: 12,
        name: "Frequently used medication",
        type: "docx",
        location: "Student Welcome Pack",
        date: "12/12/2021",
      },
      {
        id: 13,
        name: "Student time sheet",
        location: "Student Welcome Pack",
        type: "docx",
        date: "12/12/2021",
      },
    ],
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
    children: [
      {
        id: 31,
        name: "Discharge Letter",
        type: "Folder",
        location: "Discharge",
        date: "12/12/2021",
      },
      {
        id: 321,
        name: "District Nurse Referral Form - Southend",
        type: "docx",
        location: "District Nurse Referral",
        date: "12/12/2021",
      },
      {
        id: 322,
        name: "District Nurse Referral Form - Basildon",
        type: "docx",
        location: "District Nurse Referral",
        date: "12/12/2021",
      },
      {
        id: 323,
        name: "District Nurse Referral Form - Chelmsford",
        type: "docx",
        location: "District Nurse Referral",
        date: "12/12/2021",
      },
    ],
  },
  {
    id: 4,
    name: "Referrals",
    type: "Folder",
    date: "12/12/2021",
    children: [
      {
        id: 41,
        name: "SALT Referral",
        type: "docx",
        location: "Referrals",
        date: "12/12/2021",
      },
      {
        id: 42,
        name: "Dietician Referral Form",
        type: "docx",
        location: "Referrals",
        date: "12/12/2021",
      },
      {
        id: 43,
        name: "Palliative Referral",
        type: "docx",
        location: "Referrals",
        date: "12/12/2021",
      },
      {
        id: 44,
        name: "Diabetic Nurse Referral",
        type: "docx",
        location: "Referrals",
        date: "12/12/2021",
      },
      {
        id: 45,
        name: "Respiratory Nurse Referral",
        type: "docx",
        location: "Referrals",
        date: "12/12/2021",
      },
    ],
  },

  {
    id: 5,
    name: "Ward Meetings",
    type: "Folder",
    date: "12/12/2021",
  },
];

export const getFiles = () => {
  return files;
};

export const getFolders = () => {
  return files.filter((file) => file.type === "Folder");
};

export const getChildren = (id: number) => {
  return files.find((file) => file.id === id)?.children;
};

export const getFile = (id: number) => {
  return files.find((file) => file.id === id);
};

export const getChildrenById = (id: number, childId: number) => {
  const file = files.find((file) => file.id === id);
  if (file) {
    return file.children?.find((child) => child.id === childId);
  }
  return undefined;
};

export const getNestedChildren = (id: number, children: File[]) => {
  const file = children.find((child) => child.id === id);
  if (file) {
    return file.children;
  }
  return undefined;
};
