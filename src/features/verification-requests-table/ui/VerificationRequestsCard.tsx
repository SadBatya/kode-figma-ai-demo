import { useMemo, useState } from "react";

import { Card } from "@/shared/ui";

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
    <Card className="w-full gap-0 overflow-hidden rounded-none py-0 ring-0 md:rounded-3xl">
      <VerificationRequestsToolbar
        searchValue={searchValue}
        onSearchValueChange={setSearchValue}
        searchField={searchField}
        onSearchFieldChange={setSearchField}
      />
      <VerificationRequestsMobileList requests={requests} />
      <div className="hidden md:block md:px-4 md:pb-4">
        <VerificationRequestsTable requests={requests} />
      </div>
    </Card>
  );
};
