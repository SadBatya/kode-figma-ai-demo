import { useMemo, useState } from "react";

import { verificationRequestsMock } from "../model/mock";
import { VerificationRequestsMobileList } from "./VerificationRequestsMobileList";
import { VerificationRequestsTable } from "./VerificationRequestsTable";
import {
  type SearchField,
  VerificationRequestsToolbar,
} from "./VerificationRequestsToolbar";

export const VerificationRequestsCard = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchField, setSearchField] = useState<SearchField>("email");

  const requests = useMemo(() => {
    const query = searchValue.trim().toLowerCase();
    if (!query) return verificationRequestsMock;

    return verificationRequestsMock.filter((request) =>
      (searchField === "email" ? request.email : request.companyName)
        .toLowerCase()
        .includes(query),
    );
  }, [searchValue, searchField]);

  return (
    <div className="flex w-full flex-1 flex-col gap-3 md:gap-6">
      <div className="px-4 md:px-0">
        <VerificationRequestsToolbar
          searchValue={searchValue}
          onSearchValueChange={setSearchValue}
          searchField={searchField}
          onSearchFieldChange={setSearchField}
        />
      </div>
      <VerificationRequestsMobileList requests={requests} />
      <div className="hidden md:block">
        <VerificationRequestsTable requests={requests} />
      </div>
    </div>
  );
};
