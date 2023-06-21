"use client";

import Image from "next/image";
import Link from "next/link";
import NewApplication from "./NewApplication";
import { useState } from "react";

type AppHeaderProps = {
  application: IApplication;
};

const AppHeader: React.FC<AppHeaderProps> = ({ application }) => {
  const [open, setOpen] = useState(false);

  return (
    <header className="flex flex-col items-center justify-between px-2 py-2 mx-16 mt-8 sm:flex-row sm:mx-32 sm:px-32">
      <div className="flex items-center justify-start sm:justify-center">
        <Image
          src={`https://polis.infura-ipfs.io/ipfs/${application.screenshots[0]}`}
          alt="logo"
          className="w-10 h-10 logo sm:w-14 sm:h-14"
          width={50}
          height={50}
        />
        <h1 className="ml-2 text-4xl font-bold text-transparent sm:text-5xl font-inter bg-gradient-to-br bg-clip-text from-primary to-secondary">
          {application.title}
        </h1>
      </div>
      <div className="flex">
        <button
          onClick={() => setOpen(true)}
          className="flex items-center px-3 py-2 mt-2 font-bold text-gray-500 border border-gray-500 rounded-full sm:mt-0 sm:ml-4 hover:bg-gray-100 hover:text-gray-700"
        >
          Update
        </button>
        <Link href={application.applicationUrl} passHref>
          <button className="flex items-center px-3 py-2 mt-2 font-bold text-gray-500 border border-gray-500 rounded-full sm:mt-0 sm:ml-4 hover:bg-gray-100 hover:text-gray-700">
            Visit Website
            <i className="fa-sharp fa-solid fa-arrow-up-right-from-square"></i>
          </button>
        </Link>
      </div>
      <NewApplication
        isUpdate={true}
        applicationId={application.id}
        modalOpen={open}
        defaultData={{
          basicInfo: {
            title: application.title,
            description: application.description,
            category: application.category,
          },
          externalLinks: {
            repoUrl: application.repoUrl,
            applicationUrl: application.applicationUrl,
          },
          preview: {
            screenshots: application.screenshots,
          },
        }}
        closeModal={() => setOpen(false)}
      />
    </header>
  );
};

export default AppHeader;
