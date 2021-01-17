import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Title,
  Section,
  SectionHeader,
  SectionBody,
  Text,
} from "../../components/elements";
import { RootState } from "../../redux/store";
import { selectStatus, selectUsers, fetchUsers } from "./redux";

function DashboardPage() {
  const dispatch = useDispatch();
  const status = useSelector((state: RootState) =>
    selectStatus(state.dashboard)
  );
  const users = useSelector((state: RootState) => selectUsers(state.dashboard));
  useEffect(() => {
    if (status !== "FETCHING" && users.length === 0) {
      dispatch(fetchUsers());
    }
  }, [dispatch, status, users.length]);
  return (
    <Section>
      <SectionHeader>
        <Title>Hello Dashboard!</Title>
      </SectionHeader>
      <SectionBody>
        {status === "FETCHING" && <Text>Loading data...</Text>}
        {status === "ERRORED" && <Text>Something went wrong, try later.</Text>}
        {status === "READY" &&
          users.map((user) => <Text key={user.id}>{user.name}</Text>)}
      </SectionBody>
    </Section>
  );
}

export default DashboardPage;
