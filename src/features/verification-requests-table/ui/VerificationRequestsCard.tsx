import { useMemo, useState } from "react";

import { Card } from "@/shared/ui";

import { verificationRequestsMock } from "../model/mock";
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
    <Card className="w-full gap-0 overflow-hidden rounded-3xl py-0 ring-0">
      <VerificationRequestsToolbar
        searchValue={searchValue}
        onSearchValueChange={setSearchValue}
        searchField={searchField}
        onSearchFieldChange={setSearchField}
      />
      <div className="px-4 pb-4">
        <VerificationRequestsTable requests={requests} />
      </div>
    </Card>
  );
};
